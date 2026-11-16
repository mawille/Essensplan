// Anzeige und Rechnen. Die Inhalte stehen in data.js.

const STORE_KEY = 'essensplan-v1';
const state = { person: 'beide', tab: 'woche', checked: {} };

try {
  Object.assign(state, JSON.parse(localStorage.getItem(STORE_KEY) || '{}'));
} catch { /* ohne Speicher läuft die App trotzdem */ }

function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch { /* egal */ }
}

const $ = (sel) => document.querySelector(sel);
const view = $('#view');

// Menge einer Zutatenzeile für die gewählte Person(en).
function amount(line) {
  if (state.person === 'sie') return line[1];
  if (state.person === 'er') return line[2];
  return line[1] + line[2];
}

function kcal(recipe) {
  if (state.person === 'sie') return `ca. ${recipe.kcal[0]} kcal`;
  if (state.person === 'er') return `ca. ${recipe.kcal[1]} kcal`;
  return `ca. ${recipe.kcal[0]} / ${recipe.kcal[1]} kcal`;
}

const FRACTIONS = { 0.25: '¼', 0.5: '½', 0.75: '¾' };

function fmt(value, unit) {
  if (!unit) return '';
  if (unit === 'g' || unit === 'ml') return `${Math.round(value)} ${unit}`;
  const whole = Math.floor(value + 1e-9);
  const frac = FRACTIONS[Math.round((value - whole) * 100) / 100] || '';
  const number = (whole || !frac ? String(whole) : '') + frac;
  return `${number} ${unit}`;
}

// Alle Rezepte der Woche (jedes so oft, wie es im Plan steht) plus die Snacks.
function weekRecipes() {
  return [...PLAN.flat(), 'snacks'];
}

// Summen je Zutat, dazu Packungen und Rest.
function totals() {
  const sums = {};
  const used = {};
  for (const id of weekRecipes()) {
    for (const line of RECIPES[id].ing) {
      const a = amount(line);
      const ing = ING[line[0]];
      if (a === 0 && ing.u) continue;
      sums[line[0]] = (sums[line[0]] || 0) + a;
      (used[line[0]] ||= new Set()).add(id);
    }
  }
  return Object.entries(sums).map(([id, need]) => {
    const ing = ING[id];
    const countable = ['Stück', 'Bund', 'Schale'].includes(ing.u);
    const pack = ing.pk || (countable ? [1, ''] : null);
    let packs = 0, left = 0;
    if (pack && ing.c !== 'vorrat') {
      packs = Math.ceil(need / pack[0] - 1e-9);
      left = packs * pack[0] - need;
      if (left / pack[0] < 0.1) left = 0;
    }
    return { id, ing, need, pack, packs, left, recipes: [...used[id]] };
  });
}

function buyText(t) {
  const { ing, need, pack, packs } = t;
  if (ing.c === 'vorrat') return ing.u ? `etwa ${fmt(need, ing.u)}` : '';
  if (!pack) return fmt(need, ing.u);
  if (!pack[1]) return fmt(packs, ing.u);
  return `${packs} × ${pack[1]} (${fmt(pack[0], ing.u)}) · gebraucht ${fmt(need, ing.u)}`;
}

function variant(recipe) {
  const parts = [];
  if (state.person !== 'er' && recipe.sie) parts.push(`sie ${recipe.sie}`);
  if (state.person !== 'sie' && recipe.er) parts.push(`er ${recipe.er}`);
  return parts.join(', ');
}

const TAGS = { hirn: 'Hirnnahrung', ruhe: 'gegen Stress', fisch: 'Omega-3 (er)' };

function tags(recipe) {
  let html = recipe.rest ? `<span class="tag rest">Reste</span>` : '';
  for (const t of recipe.tags) {
    if (t === 'fisch' && state.person === 'sie') continue;
    html += `<span class="tag">${TAGS[t]}</span>`;
  }
  return html;
}

function renderWeek() {
  const today = (new Date().getDay() + 6) % 7;
  const snack = RECIPES.snacks.kcal;
  view.innerHTML = PLAN.map((day, d) => {
    const sum = [0, 1].map((p) => day.reduce((s, id) => s + RECIPES[id].kcal[p], snack[p]));
    const sumText = state.person === 'sie' ? sum[0] : state.person === 'er' ? sum[1] : `${sum[0]} / ${sum[1]}`;
    return `<section class="card${d === today ? ' today' : ''}">
      <div class="dayhead"><h3>${DAYS[d]}${d === today ? ' · heute' : ''}</h3><span>ca. ${sumText} kcal</span></div>
      ${day.map((id, m) => {
        const r = RECIPES[id];
        const v = variant(r);
        return `<button class="meal" data-recipe="${id}">
          <span class="slot">${MEALS[m]}</span>
          <span><span class="name">${r.n}</span>${v ? `<br><span class="sub">${v}</span>` : ''}<br>${tags(r)}</span>
        </button>`;
      }).join('')}
    </section>`;
  }).join('') + `<button class="card meal" data-recipe="snacks" style="display:block">
      <span class="name">Snacks der Woche</span><br><span class="sub">ein Snack pro Tag, etwa 150 kcal</span>
    </button>
    <p class="muted">Tageswerte mit Snack, grob geschätzt${state.person === 'beide' ? ' (sie / er)' : ''}. Auf ein Gericht tippen für Zutaten und Zubereitung.</p>`;
}

function renderShopping() {
  const all = totals();
  const open = all.filter((t) => !state.checked[t.id]).length;
  let html = `<div class="actions">
      <button class="btn" data-action="copy">Liste kopieren</button>
      <button class="btn" data-action="reset">Haken entfernen</button>
    </div>
    <p class="muted">Einkauf für die ganze Woche, Mengen für: <b>${{ beide: 'beide', sie: 'sie', er: 'ihn' }[state.person]}</b>. Noch offen: ${open} von ${all.length}.</p>`;
  for (const [cat, title] of CATEGORIES) {
    const items = all.filter((t) => t.ing.c === cat).sort((a, b) => a.ing.n.localeCompare(b.ing.n, 'de'));
    if (!items.length) continue;
    html += `<h2>${title}</h2><section class="card"><ul class="plain">${items.map((t) => {
      const on = !!state.checked[t.id];
      return `<li><label class="row${on ? ' done' : ''}">
        <input type="checkbox" data-check="${t.id}"${on ? ' checked' : ''}>
        <span class="grow">${t.ing.n}<br><span class="amt">${buyText(t)}</span></span>
      </label></li>`;
    }).join('')}</ul></section>`;
  }
  view.innerHTML = html;
}

function shoppingAsText() {
  const all = totals();
  return CATEGORIES.map(([cat, title]) => {
    const items = all.filter((t) => t.ing.c === cat && !state.checked[t.id]);
    if (!items.length) return '';
    return `${title}\n` + items.map((t) => `- ${t.ing.n}${buyText(t) ? ': ' + buyText(t) : ''}`).join('\n');
  }).filter(Boolean).join('\n\n');
}

function renderLeftovers() {
  const left = totals().filter((t) => t.left > 0);
  let html = `<h2>Geplante Reste</h2>
    <p class="muted">Diese Mengen sind mit Absicht größer gekocht oder gekauft und tauchen später wieder auf.</p>
    <section class="card"><ul class="plain">${CHAINS.map(([when, what, how]) =>
      `<li><b>${what}</b> <span class="tag rest">${when}</span><br><span class="muted">${how}</span></li>`).join('')}</ul></section>
    <h2>Was am Ende der Woche übrig bleibt</h2>`;
  if (!left.length) {
    html += `<p class="note good">Nichts – mit diesen Mengen gehen alle Packungen auf.</p>`;
  } else {
    if (state.person === 'beide') {
      html += `<p class="muted">Der Plan ist auf euch beide abgestimmt, fast alle Packungen gehen genau auf.</p>`;
    } else {
      html += `<p class="note">Für eine Person allein bleiben angebrochene Packungen. Die Vorschläge unten helfen beim Verbrauchen.</p>`;
    }
    html += `<section class="card"><ul class="plain">${left.map((t) => {
      const others = t.recipes.map((id) => RECIPES[id].n).join(' · ');
      return `<li><div class="ingr"><b>${t.ing.n}</b><span class="qty">${fmt(t.left, t.ing.u)} übrig</span></div>
        <span class="muted">${t.ing.idee || 'In Restepfanne oder Suppe verwenden.'}<br>Im Plan verwendet in: ${others}</span></li>`;
    }).join('')}</ul></section>`;
  }
  html += `<h2>Wenn doch etwas übrig ist</h2><section class="card"><ul class="plain">${RESCUE.map(([n, text]) =>
    `<li><b>${n}</b><br><span class="muted">${text}</span></li>`).join('')}</ul></section>`;
  view.innerHTML = html;
}

function renderLists(blocks, ordered) {
  view.innerHTML = blocks.map(([title, items]) =>
    `<h2>${title}</h2><section class="card"><ul class="${ordered ? 'plain' : 'dots'}">${items.map((i) => `<li>${i}</li>`).join('')}</ul></section>`).join('');
}

function showRecipe(id) {
  const r = RECIPES[id];
  const v = variant(r);
  const lines = r.ing.filter((line) => amount(line) > 0 || !ING[line[0]].u);
  const dlg = $('#recipe');
  dlg.innerHTML = `<div class="dlg">
    <header><div><h2>${r.n}</h2><span class="muted">${v ? v + ' · ' : ''}${r.min ? r.min + ' Min. · ' : ''}${kcal(r)}</span></div>
      <button class="close" data-action="close" aria-label="Schließen">✕</button></header>
    ${r.rest ? `<p class="note">Verwendet Reste: ${r.rest}.</p>` : ''}
    ${r.hint ? `<p class="note good">${r.hint}</p>` : ''}
    ${lines.length ? `<h2>Zutaten${state.person === 'beide' ? ' für beide' : ''}</h2><ul class="plain">${lines.map((line) => {
      const ing = ING[line[0]];
      const who = !ing.u ? '' : line[1] === 0 ? ' (nur er)' : line[2] === 0 ? ' (nur sie)' : '';
      return `<li class="ingr"><span>${ing.n}${state.person === 'beide' ? who : ''}</span><span class="qty">${fmt(amount(line), ing.u)}</span></li>`;
    }).join('')}</ul>` : ''}
    <h2>Zubereitung</h2><ol>${r.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
  </div>`;
  dlg.showModal();
}

function render() {
  document.querySelectorAll('#person button').forEach((b) => b.classList.toggle('on', b.dataset.person === state.person));
  document.querySelectorAll('#tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === state.tab));
  if (state.tab === 'einkauf') renderShopping();
  else if (state.tab === 'reste') renderLeftovers();
  else if (state.tab === 'vorkochen') renderLists(PREP, true);
  else if (state.tab === 'tipps') renderLists(TIPS, false);
  else renderWeek();
}

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-person],[data-tab],[data-recipe],[data-action]');
  if (!el) {
    if (e.target === $('#recipe')) $('#recipe').close(); // Tipp neben das Fenster schließt es
    return;
  }
  if (el.dataset.person) { state.person = el.dataset.person; save(); render(); }
  else if (el.dataset.tab) { state.tab = el.dataset.tab; save(); render(); window.scrollTo(0, 0); }
  else if (el.dataset.recipe) showRecipe(el.dataset.recipe);
  else if (el.dataset.action === 'close') $('#recipe').close();
  else if (el.dataset.action === 'reset') { state.checked = {}; save(); render(); }
  else if (el.dataset.action === 'copy') {
    navigator.clipboard?.writeText(shoppingAsText()).then(
      () => { el.textContent = 'Kopiert ✓'; },
      () => { el.textContent = 'Kopieren nicht möglich'; });
  }
});

document.addEventListener('change', (e) => {
  const id = e.target.dataset?.check;
  if (!id) return;
  if (e.target.checked) state.checked[id] = true; else delete state.checked[id];
  save();
  render();
});

render();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
