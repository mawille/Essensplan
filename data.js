// Alle Inhalte des Plans als Daten. Mengen je Person: [Zutat, sie, er].
// Wer Gerichte ändert, ändert nur diese Datei; Einkaufsliste und Reste rechnet app.js daraus.

const CATEGORIES = [
  ['gemuese', 'Gemüse & Obst'],
  ['kuehl', 'Kühlregal'],
  ['fisch', 'Fisch & Fleisch'],
  ['trocken', 'Konserven, Brot & Nüsse'],
  ['tk', 'Tiefkühl'],
  ['vorrat', 'Vorrat (prüfen, ob noch da)'],
];

// n = Name, u = Einheit, c = Kategorie, pk = [Packungsgröße, Bezeichnung], idee = Verwendung für Reste.
// Zählbare Einheiten (Stück, Bund, Schale) gelten ohne pk als Packung der Größe 1.
const ING = {
  paprika: { n: 'Paprika', u: 'Stück', c: 'gemuese', idee: 'In Streifen als Rohkost zum Hummus oder in die Gemüsepfanne.' },
  zucchini: { n: 'Zucchini', u: 'Stück', c: 'gemuese', idee: 'Geraspelt in die Bolognese oder mit ins Rührei.' },
  zwiebel: { n: 'Zwiebeln', u: 'Stück', c: 'gemuese', idee: 'Halten sich wochenlang – einfach für die nächste Woche liegen lassen.' },
  suesskartoffel: { n: 'Süßkartoffel', u: 'g', c: 'gemuese' },
  kartoffeln: { n: 'Kartoffeln', u: 'g', c: 'gemuese', pk: [2000, 'Netz'], idee: 'Kühl und dunkel lagern, halten bis zur nächsten Woche. Oder mit in die Gemüsesuppe.' },
  karotten: { n: 'Karotten', u: 'g', c: 'gemuese', pk: [1000, 'Beutel'], idee: 'Als Sticks zum Snack oder geraspelt ins Frühstück (mit Apfel und Zimt).' },
  brokkoli: { n: 'Brokkoli', u: 'g', c: 'gemuese', pk: [500, 'Kopf'], idee: 'Röschen blanchieren und einfrieren oder in die Gemüsesuppe.' },
  champignons: { n: 'Champignons', u: 'g', c: 'gemuese', pk: [250, 'Schale'], idee: 'Braten und unter Rührei, Pasta oder Bolognese mischen.' },
  spinat: { n: 'Babyspinat', u: 'g', c: 'gemuese', pk: [200, 'Beutel'], idee: 'Zusammenfallen lassen und in Curry, Suppe oder Shakshuka rühren – verdirbt schnell.' },
  rucola: { n: 'Rucola', u: 'g', c: 'gemuese', pk: [125, 'Schale'], idee: 'Auf den Wrap oder kurz vor dem Essen unter die Pasta heben.' },
  gurke: { n: 'Salatgurke', u: 'Stück', c: 'gemuese', idee: 'In Sticks zum Hummus oder gewürfelt in den Linsensalat.' },
  tomaten: { n: 'Tomaten', u: 'Stück', c: 'gemuese', idee: 'Würfeln und mit in die Shakshuka oder die Bolognese.' },
  romana: { n: 'Romana-Salatherz', u: 'Stück', c: 'gemuese', idee: 'Blätter als Wrap-Ersatz oder als Beilagensalat zu jedem Abendessen.' },
  avocado: { n: 'Avocado', u: 'Stück', c: 'gemuese', idee: 'Hälfte mit Kern und Zitronensaft abdecken, am nächsten Tag in den Salat oder aufs Brot.' },
  apfel: { n: 'Äpfel', u: 'Stück', c: 'gemuese', idee: 'Halten lange. Sonst gewürfelt mit Zimt in die Haferflocken.' },
  zitrone: { n: 'Zitronen', u: 'Stück', c: 'gemuese', idee: 'Saft ins Wasser oder über Salat und Fisch.' },
  suppengruen: { n: 'Suppengrün', u: 'Bund', c: 'gemuese', idee: 'Klein schneiden und portionsweise einfrieren.' },
  petersilie: { n: 'Petersilie', u: 'Bund', c: 'gemuese', idee: 'Hacken und einfrieren oder über Suppe und Shakshuka streuen.' },
  schnittlauch: { n: 'Schnittlauch', u: 'Bund', c: 'gemuese', idee: 'In Röllchen schneiden und einfrieren, passt aufs Hüttenkäse-Brot.' },
  kresse: { n: 'Kresse', u: 'Schale', c: 'gemuese', idee: 'Über Rührei, Suppe oder Avocado-Brot.' },
  rotebete: { n: 'Rote Bete, vorgekocht', u: 'g', c: 'gemuese', pk: [500, 'Packung'], idee: 'In Scheiben mit Feta und Walnüssen als kleiner Salat.' },
  ingwer: { n: 'Ingwer (kleines Stück)', u: 'Stück', c: 'gemuese', idee: 'In Scheiben mit heißem Wasser als Tee – oder einfrieren und gefroren reiben.' },

  joghurt: { n: 'Naturjoghurt', u: 'g', c: 'kuehl', pk: [500, 'Becher'], idee: 'Als Dip mit Kräutern zum Ofengemüse oder mit Obst als Snack.' },
  skyr: { n: 'Skyr natur', u: 'g', c: 'kuehl', pk: [450, 'Becher'], idee: 'Als Snack mit Obst oder statt Quark in den Kräuterquark.' },
  quark: { n: 'Magerquark', u: 'g', c: 'kuehl', pk: [250, 'Becher'], idee: 'Mit Beeren zum Frühstück oder als Brotaufstrich mit Kräutern.' },
  huettenkaese: { n: 'Hüttenkäse', u: 'g', c: 'kuehl', pk: [200, 'Becher'], idee: 'Auf die Ofenkartoffel oder in den Wrap.' },
  feta: { n: 'Feta', u: 'g', c: 'kuehl', pk: [200, 'Packung'], idee: 'Über Ofengemüse, Shakshuka oder Quinoa-Salat bröseln.' },
  ziegenkaese: { n: 'Ziegenkäserolle', u: 'g', c: 'kuehl', pk: [100, 'Rolle'], idee: 'Aufs Brot mit etwas Honig und Walnuss.' },
  eier: { n: 'Eier', u: 'Stück', c: 'kuehl', pk: [10, 'Packung'], idee: 'Hart kochen: hält eine Woche und ist ein guter Snack oder Wrap-Belag.' },
  tofu: { n: 'Tofu natur', u: 'g', c: 'kuehl', pk: [400, 'Doppelpack'], idee: 'Würfeln, anbraten und ins Curry oder in die Bowl. Angebrochen in Wasser im Kühlschrank lagern.' },
  hummus: { n: 'Hummus', u: 'g', c: 'kuehl', pk: [200, 'Becher'], idee: 'Als Dip für Gemüsesticks oder als Soße auf die Bowl.' },

  lachs: { n: 'Lachsfilet', u: 'g', c: 'fisch' },
  haehnchen: { n: 'Hähnchenbrust', u: 'g', c: 'fisch' },
  rind: { n: 'Rinderstreifen', u: 'g', c: 'fisch' },
  hack: { n: 'Rinderhack', u: 'g', c: 'fisch' },
  makrele: { n: 'Räuchermakrele', u: 'g', c: 'fisch', pk: [125, 'Packung'], idee: 'Zerzupft aufs Brot oder in den Quinoa-Salat.' },

  kichererbsen: { n: 'Kichererbsen (Abtropfgewicht)', u: 'g', c: 'trocken', pk: [240, 'Dose'], idee: 'Mit Öl und Paprikapulver im Ofen rösten – Snack oder Salat-Topping.' },
  weissebohnen: { n: 'Weiße Bohnen (Abtropfgewicht)', u: 'g', c: 'trocken', pk: [240, 'Dose'], idee: 'Mit Zitrone und Öl zu Bohnenmus pürieren oder in den Salat.' },
  dosentomaten: { n: 'Gehackte Tomaten', u: 'g', c: 'trocken', pk: [400, 'Dose'], idee: 'Mit Brühe aufkochen: schnelle Tomatensuppe.' },
  kokosmilch: { n: 'Kokosmilch', u: 'ml', c: 'trocken', pk: [400, 'Dose'], idee: 'In Eiswürfelform einfrieren, später ins nächste Curry oder in die Suppe.' },
  brot: { n: 'Vollkornbrot', u: 'g', c: 'trocken', pk: [250, 'halbes Brot'], idee: 'Scheibenweise einfrieren und bei Bedarf toasten.' },
  wraps: { n: 'Vollkorn-Wraps', u: 'Stück', c: 'trocken', pk: [4, 'Packung'], idee: 'Einfrieren – oder mit Tomatenmark, Gemüseresten und Feta als schnelle Pizza in den Ofen.' },
  walnuss: { n: 'Walnüsse', u: 'g', c: 'trocken', pk: [200, 'Beutel'], idee: 'Halten monatelang, Rest für die nächste Woche.' },
  zartbitter: { n: 'Zartbitterschokolade (ab 70 %)', u: 'g', c: 'trocken', pk: [100, 'Tafel'], idee: 'Bleibt für die nächste Woche.' },

  beeren: { n: 'Beerenmischung', u: 'g', c: 'tk', pk: [300, 'Beutel'], idee: 'Bleiben im Tiefkühler für die nächste Woche.' },

  haferflocken: { n: 'Haferflocken', u: 'g', c: 'vorrat' },
  leinsamen: { n: 'Leinsamen, geschrotet', u: 'g', c: 'vorrat' },
  kuerbiskerne: { n: 'Kürbiskerne', u: 'g', c: 'vorrat' },
  reis: { n: 'Vollkornreis', u: 'g', c: 'vorrat' },
  quinoa: { n: 'Quinoa', u: 'g', c: 'vorrat' },
  rotelinsen: { n: 'Rote Linsen', u: 'g', c: 'vorrat' },
  berglinsen: { n: 'Berg- oder Belugalinsen', u: 'g', c: 'vorrat' },
  pasta: { n: 'Vollkornpasta', u: 'g', c: 'vorrat' },
  olivenoel: { n: 'Olivenöl', u: 'ml', c: 'vorrat' },
  leinoel: { n: 'Leinöl', u: 'ml', c: 'vorrat' },
  sojasauce: { n: 'Sojasauce', u: '', c: 'vorrat' },
  currypaste: { n: 'Currypaste oder Currypulver', u: '', c: 'vorrat' },
  tomatenmark: { n: 'Tomatenmark', u: '', c: 'vorrat' },
  bruehe: { n: 'Gemüsebrühe', u: '', c: 'vorrat' },
  honig: { n: 'Honig', u: '', c: 'vorrat' },
  knoblauch: { n: 'Knoblauch', u: '', c: 'vorrat' },
  sesam: { n: 'Sesam', u: '', c: 'vorrat' },
  gewuerze: { n: 'Jodsalz, Pfeffer, Paprikapulver, Kreuzkümmel, Oregano, Rosmarin, Zimt, Kurkuma, Kümmel, Muskat', u: '', c: 'vorrat' },
};

// Einheiten, die ohne Packungsgröße als einzelne Stücke gekauft werden.
const COUNTABLE = ['Stück', 'Bund', 'Schale'];

// tags: hirn = Hirnnahrung, ruhe = gut gegen Stress, fisch = Omega-3 aus Fisch (er)
// kcal: [sie, er] je Mahlzeit, grob geschätzt.
const RECIPES = {
  hafer_beeren: {
    n: 'Haferflocken mit Beeren und Walnüssen', min: 5, kcal: [440, 560], tags: ['hirn', 'ruhe'],
    ing: [['haferflocken', 50, 70], ['beeren', 100, 100], ['walnuss', 15, 25], ['leinsamen', 10, 10], ['joghurt', 100, 100]],
    steps: ['Haferflocken mit heißem Wasser übergießen und 3 Minuten quellen lassen.', 'Beeren (am Vorabend aus dem Tiefkühler nehmen), Joghurt, Walnüsse und Leinsamen darauf.'],
  },
  avobrot: {
    n: 'Vollkornbrot mit Avocado und Ei', min: 10, kcal: [330, 450], tags: ['hirn'],
    ing: [['brot', 50, 100], ['avocado', 0.5, 0.5], ['eier', 1, 1], ['gewuerze', 0, 0]],
    steps: ['Eier 7 Minuten kochen.', 'Avocado zerdrücken, salzen, pfeffern, aufs Brot streichen, Ei in Scheiben darauf.'],
  },
  skyr_bowl: {
    n: 'Skyr mit Beeren und Kürbiskernen', min: 5, kcal: [330, 430], tags: ['ruhe'],
    ing: [['skyr', 225, 225], ['beeren', 100, 100], ['kuerbiskerne', 15, 20], ['haferflocken', 20, 40], ['honig', 0, 0]],
    steps: ['Alles in eine Schale geben, mit einem Teelöffel Honig süßen.'],
  },
  hafer_apfel: {
    n: 'Haferflocken mit Apfel und Zimt', min: 5, kcal: [430, 550], tags: ['hirn', 'ruhe'],
    ing: [['haferflocken', 50, 70], ['apfel', 1, 1], ['walnuss', 15, 25], ['joghurt', 100, 100], ['gewuerze', 0, 0]],
    steps: ['Haferflocken mit heißem Wasser quellen lassen.', 'Apfel würfeln, mit Joghurt, Walnüssen und Zimt darauf geben.'],
  },
  huettenbrot: {
    n: 'Vollkornbrot mit Hüttenkäse, Tomate und Kresse', min: 5, kcal: [240, 360], tags: [],
    ing: [['brot', 50, 100], ['huettenkaese', 100, 100], ['tomaten', 1, 1], ['kresse', 0.5, 0.5]],
    steps: ['Brot mit Hüttenkäse bestreichen, Tomatenscheiben und Kresse darauf, pfeffern.'],
  },
  ruehrei: {
    n: 'Rührei mit Spinat und Pilzen', min: 15, kcal: [370, 490], tags: ['hirn'],
    ing: [['eier', 2, 2], ['spinat', 50, 50], ['champignons', 125, 125], ['olivenoel', 5, 5], ['brot', 50, 100]],
    steps: ['Pilze in Scheiben in Öl kräftig anbraten.', 'Spinat dazugeben und zusammenfallen lassen.', 'Verquirlte Eier dazu, bei kleiner Hitze stocken lassen. Mit Brot servieren.'],
    hint: 'Verbraucht den Rest Spinat vom Dienstag und die zweite Schale Pilze.',
  },
  joghurt_bowl: {
    n: 'Joghurt mit Beeren, Nüssen und Honig', min: 5, kcal: [380, 500], tags: ['hirn'],
    ing: [['joghurt', 200, 200], ['beeren', 100, 100], ['walnuss', 15, 25], ['haferflocken', 20, 40], ['honig', 0, 0]],
    steps: ['Alles in eine Schale geben.'],
  },

  linsensalat: {
    n: 'Linsensalat mit Paprika, Rucola und Feta', min: 30, kcal: [480, 560], tags: ['ruhe'],
    ing: [['berglinsen', 70, 90], ['paprika', 0.5, 0.5], ['rucola', 30, 30], ['feta', 50, 50], ['zwiebel', 0.5, 0.5], ['zitrone', 0.25, 0.25], ['olivenoel', 10, 10]],
    steps: ['Linsen 20–25 Minuten ohne Salz kochen, abgießen (am besten schon am Sonntag).', 'Paprika und Zwiebel fein würfeln, mit Linsen, Zitronensaft, Öl, Salz und Pfeffer mischen.', 'Rucola und zerbröselten Feta erst kurz vor dem Essen dazu.'],
    hint: 'Lässt sich gut mitnehmen. Der Rest Feta kommt am Sonntag in die gefüllten Paprika.',
  },
  ofen_bowl: {
    n: 'Bowl mit Ofengemüse und Kichererbsen', min: 5, kcal: [420, 520], tags: ['ruhe'], rest: 'Ofengemüse von Montag',
    ing: [['kichererbsen', 120, 120], ['zitrone', 0.25, 0.25]],
    steps: ['Ofengemüse vom Vortag mit abgespülten Kichererbsen mischen.', 'Mit Zitronensaft, Salz und Pfeffer abschmecken. Schmeckt kalt und warm.'],
  },
  curry_rest: {
    n: 'Gemüsecurry vom Vortag', min: 5, kcal: [570, 650], tags: [], rest: 'Curry und Reis von Dienstag',
    ing: [],
    steps: ['Curry und Reis aufwärmen.'],
  },
  wrap: {
    n: 'Vollkorn-Wrap mit Hummus und Rohkost', min: 10, kcal: [380, 600], tags: [],
    ing: [['wraps', 1, 2], ['hummus', 50, 50], ['gurke', 0.25, 0.25], ['karotten', 50, 50], ['paprika', 0.5, 0.5], ['haehnchen', 0, 100]],
    steps: ['Wraps mit Hummus bestreichen.', 'Gurke, Paprika in Streifen und geraspelte Karotte darauf, aufrollen.', 'Für ihn: das am Dienstag mitgebratene Hähnchen in Streifen dazu.'],
    hint: 'Das Hähnchen für den Wrap wird am Dienstag gleich mitgebraten.',
  },
  quinoa_salat: {
    n: 'Quinoa-Salat mit Roter Bete, Walnüssen und Ziegenkäse', min: 20, kcal: [520, 600], tags: ['hirn', 'ruhe'],
    ing: [['quinoa', 60, 80], ['rotebete', 250, 250], ['walnuss', 20, 20], ['ziegenkaese', 50, 50], ['rucola', 30, 30], ['zitrone', 0.25, 0.25], ['olivenoel', 10, 10]],
    steps: ['Quinoa heiß abspülen und in der doppelten Menge Wasser 12 Minuten kochen (am Donnerstagabend).', 'Rote Bete würfeln, mit Quinoa, Zitronensaft, Öl, Salz und Pfeffer mischen.', 'Rucola, Walnüsse und Ziegenkäse darauf.'],
    hint: 'Verbraucht den Rest Rucola vom Montag.',
  },
  suppe: {
    n: 'Gemüsesuppe mit weißen Bohnen', min: 35, kcal: [400, 460], tags: ['ruhe'],
    ing: [['suppengruen', 0.5, 0.5], ['zwiebel', 0.5, 0.5], ['kartoffeln', 150, 300], ['weissebohnen', 120, 120], ['bruehe', 0, 0], ['olivenoel', 5, 5], ['brot', 50, 50]],
    steps: ['Zwiebel und Suppengrün würfeln, in Öl anschwitzen.', 'Kartoffelwürfel und 1,5 l Brühe dazu, 20 Minuten köcheln.', 'Abgespülte Bohnen 5 Minuten mitziehen lassen, abschmecken. Dazu eine Scheibe Brot.'],
    hint: 'Die Menge reicht für Samstag und Sonntag. Hier passen auch alle Gemüsereste der Woche hinein.',
  },
  suppe_rest: {
    n: 'Gemüsesuppe vom Vortag mit Brot', min: 5, kcal: [400, 460], tags: [], rest: 'Suppe von Samstag',
    ing: [['brot', 50, 50]],
    steps: ['Suppe aufwärmen, eine Scheibe Brot dazu.'],
  },

  ofengemuese: {
    n: 'Ofengemüse mit Kartoffeln', sie: 'mit Tofu', er: 'mit Lachs', min: 45, kcal: [520, 580], tags: ['hirn', 'fisch'],
    ing: [['kartoffeln', 350, 500], ['paprika', 1, 1], ['zucchini', 1, 1], ['karotten', 150, 150], ['zwiebel', 1, 1], ['olivenoel', 15, 15], ['gewuerze', 0, 0], ['tofu', 200, 0], ['lachs', 0, 125], ['zitrone', 0, 0.5]],
    steps: ['Ofen auf 200 °C vorheizen. Gemüse und Kartoffeln in mundgerechte Stücke schneiden.', 'Mit Öl, Salz, Paprikapulver und Rosmarin mischen, auf zwei Blechen 35 Minuten rösten.', 'Tofu würfeln und die letzten 20 Minuten mit aufs Blech geben.', 'Lachs salzen, die letzten 12–15 Minuten mitgaren, mit Zitrone servieren.', 'Die Hälfte des Gemüses für morgen Mittag beiseitestellen.'],
    hint: 'Gemüse und Kartoffeln sind für zwei Mahlzeiten gerechnet: heute Abend und morgen Mittag als Bowl.',
  },
  curry: {
    n: 'Gemüsecurry mit Spinat und Vollkornreis', sie: 'mit Kichererbsen', er: 'mit Hähnchen', min: 35, kcal: [570, 650], tags: ['ruhe'],
    ing: [['suesskartoffel', 200, 200], ['zwiebel', 0.5, 0.5], ['spinat', 50, 50], ['kokosmilch', 200, 200], ['ingwer', 0.25, 0.25], ['currypaste', 0, 0], ['knoblauch', 0, 0], ['reis', 100, 160], ['kichererbsen', 240, 0], ['haehnchen', 0, 250]],
    steps: ['Reis nach Packung kochen – gleich die Menge für Mittwochabend mit (zusätzlich 40 g für sie, 70 g für ihn).', 'Zwiebel, Knoblauch und Ingwer anschwitzen, Currypaste kurz mitrösten.', 'Süßkartoffelwürfel, Kokosmilch und 200 ml Wasser dazu, 15 Minuten köcheln.', 'Curry auf zwei Töpfe teilen: in den einen die Kichererbsen, in den anderen das angebratene Hähnchen.', 'Spinat unterheben, bis er zusammenfällt.', 'Für ihn zusätzlich 100 g Hähnchen braten und kalt stellen: das kommt am Donnerstag in den Wrap.'],
    hint: 'Für zwei Mahlzeiten gerechnet: heute Abend und morgen Mittag.',
  },
  pfanne: {
    n: 'Gemüsepfanne mit Brokkoli und Pilzen', sie: 'mit Tofu', er: 'mit Rinderstreifen', min: 20, kcal: [480, 600], tags: ['hirn'],
    ing: [['brokkoli', 250, 250], ['champignons', 125, 125], ['zwiebel', 0.5, 0.5], ['ingwer', 0.25, 0.25], ['sojasauce', 0, 0], ['sesam', 0, 0], ['olivenoel', 5, 5], ['reis', 40, 70], ['tofu', 200, 0], ['rind', 0, 150]],
    steps: ['Tofu würfeln und knusprig anbraten, herausnehmen. Rinderstreifen in einer zweiten Pfanne scharf anbraten.', 'Brokkoliröschen, Pilze, Zwiebel und Ingwer 6–8 Minuten braten, einen Schuss Wasser dazu.', 'Mit Sojasauce abschmecken, auf zwei Teller verteilen, Tofu bzw. Rind darauf, Sesam darüber.', 'Dazu den Reis von gestern aufwärmen.'],
    hint: 'Der Reis ist schon am Dienstag mitgekocht.',
  },
  shakshuka: {
    n: 'Shakshuka mit Vollkornbrot', min: 25, kcal: [420, 420], tags: ['hirn'],
    ing: [['dosentomaten', 200, 200], ['paprika', 1, 1], ['zwiebel', 0.5, 0.5], ['eier', 2, 2], ['petersilie', 0.25, 0.25], ['brot', 50, 50], ['olivenoel', 5, 5], ['gewuerze', 0, 0]],
    steps: ['Zwiebel und Paprika in Öl weich braten, Kreuzkümmel und Paprikapulver dazu.', 'Tomaten angießen, 10 Minuten einkochen, salzen.', 'Vier Mulden formen, Eier hineinschlagen, mit Deckel 6–8 Minuten stocken lassen.', 'Petersilie darüber, mit Brot essen.', 'Nebenbei die Quinoa für morgen Mittag kochen.'],
    hint: 'Für beide gleich – ein vegetarischer Abend für ihn.',
  },
  ofenkartoffel: {
    n: 'Ofenkartoffeln mit Kräuterquark und Salat', er: 'mit Räuchermakrele', min: 50, kcal: [450, 880], tags: ['hirn', 'fisch', 'ruhe'],
    ing: [['kartoffeln', 300, 400], ['quark', 125, 125], ['joghurt', 100, 100], ['leinoel', 5, 5], ['schnittlauch', 0.5, 0.5], ['petersilie', 0.25, 0.25], ['romana', 0.5, 0.5], ['gurke', 0.25, 0.25], ['tomaten', 1, 1], ['olivenoel', 5, 5], ['makrele', 0, 125]],
    steps: ['Kartoffeln mit Schale halbieren, bei 200 °C etwa 40 Minuten backen.', 'Quark, Joghurt, Leinöl und gehackte Kräuter verrühren, salzen und pfeffern.', 'Salat, Gurke und Tomaten mit Olivenöl und etwas Essig anmachen.', 'Für ihn die Räuchermakrele dazu.'],
    hint: 'Leinöl im Quark ist ihre beste Omega-3-Quelle. Verbraucht den Rest Joghurt, Gurke und Petersilie.',
  },
  pasta: {
    n: 'Vollkornpasta mit Linsenbolognese', min: 35, kcal: [520, 650], tags: ['ruhe'],
    ing: [['pasta', 70, 100], ['rotelinsen', 75, 100], ['dosentomaten', 400, 400], ['karotten', 100, 100], ['zucchini', 0.5, 0.5], ['zwiebel', 0.5, 0.5], ['tomatenmark', 0, 0], ['knoblauch', 0, 0], ['olivenoel', 5, 5], ['gewuerze', 0, 0]],
    steps: ['Zwiebel, Knoblauch, geraspelte Karotten und Zucchini in Öl anbraten, Tomatenmark kurz mitrösten.', 'Linsen, Tomaten und 400 ml Wasser dazu, 20 Minuten köcheln, mit Oregano, Salz und Pfeffer abschmecken.', 'Pasta kochen.', 'Etwa ein Drittel der Bolognese für morgen Abend kalt stellen.'],
    hint: 'Die Bolognese ist reichlich gerechnet: Der Rest wird am Sonntag die Füllung der Paprika.',
  },
  paprika_gefuellt: {
    n: 'Gefüllte Paprika mit Reis und Feta', sie: 'mit Linsenbolognese', er: 'mit Hackfleisch', min: 50, kcal: [480, 700], tags: [], rest: 'Linsenbolognese von Samstag',
    ing: [['paprika', 2, 2], ['reis', 40, 60], ['feta', 50, 50], ['olivenoel', 5, 5], ['hack', 0, 125]],
    steps: ['Reis kochen. Paprika halbieren und entkernen.', 'Reis mit der Bolognese von gestern mischen. Für ihn das Hack krümelig anbraten und unter seine Hälfte der Füllung mischen.', 'Paprika füllen, Feta darüber bröseln, bei 190 °C etwa 30 Minuten backen.'],
    hint: 'Verbraucht die Bolognese vom Samstag und den Rest Feta vom Montag.',
  },

  snacks: {
    n: 'Snacks der Woche', min: 0, kcal: [150, 150], tags: [],
    ing: [['apfel', 2, 2], ['karotten', 200, 200], ['hummus', 50, 50], ['walnuss', 20, 20], ['zartbitter', 50, 50]],
    steps: ['Ein Snack pro Tag: ein Apfel, Karottensticks mit Hummus, eine kleine Handvoll Walnüsse oder zwei Stück Schokolade.'],
  },
};

const DAYS = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
const MEALS = ['Frühstück', 'Mittag', 'Abend'];

// Je Tag: Frühstück, Mittag, Abend.
const PLAN = [
  ['hafer_beeren', 'linsensalat', 'ofengemuese'],
  ['avobrot', 'ofen_bowl', 'curry'],
  ['skyr_bowl', 'curry_rest', 'pfanne'],
  ['hafer_apfel', 'wrap', 'shakshuka'],
  ['huettenbrot', 'quinoa_salat', 'ofenkartoffel'],
  ['ruehrei', 'suppe', 'pasta'],
  ['joghurt_bowl', 'suppe_rest', 'paprika_gefuellt'],
];

// Geplante Reste-Ketten: was mit Absicht mehr gekocht oder gekauft wird und wo es wieder auftaucht.
const CHAINS = [
  ['Mo Abend → Di Mittag', 'Ofengemüse', 'Doppelte Menge rösten, die Hälfte wird mit Kichererbsen zur Bowl.'],
  ['Di Abend → Mi Mittag', 'Curry', 'Zwei Portionen pro Person kochen.'],
  ['Di Abend → Mi Abend', 'Vollkornreis', 'Reis für die Gemüsepfanne gleich mitkochen.'],
  ['Di Abend → Do Mittag', 'Hähnchen', '100 g mehr braten, kalt in seinen Wrap.'],
  ['Di Abend → Sa Frühstück', 'Babyspinat', 'Halber Beutel ins Curry, halber ins Rührei.'],
  ['Mi Abend → Sa Frühstück', 'Champignons', 'Eine Schale in die Pfanne, eine ins Rührei.'],
  ['Mo Mittag → So Abend', 'Feta', 'Halbe Packung in den Linsensalat, halbe auf die gefüllten Paprika.'],
  ['Mo Mittag → Fr Mittag', 'Rucola', 'Eine Schale reicht für beide Salate.'],
  ['Do Mittag → Fr Abend', 'Gurke und Petersilie', 'Jeweils die zweite Hälfte landet im Salat und im Kräuterquark.'],
  ['Sa Mittag → So Mittag', 'Gemüsesuppe', 'Ein großer Topf für zwei Tage.'],
  ['Sa Abend → So Abend', 'Linsenbolognese', 'Ein Drittel wird die Füllung der Paprika.'],
];

// Wenn doch etwas übrig bleibt: Gerichte, in die fast alles passt.
const RESCUE = [
  ['Restepfanne', 'Gemüsereste klein schneiden, scharf anbraten, mit Sojasauce und einem Ei oder Tofu. Dazu Reis- oder Quinoa-Reste.'],
  ['Restesuppe', 'Alles Gemüse würfeln, in Brühe 20 Minuten kochen, eine Dose Bohnen oder eine Handvoll rote Linsen dazu. Lässt sich einfrieren.'],
  ['Frittata', 'Gemüse- und Kartoffelreste in der Pfanne anbraten, 4 verquirlte Eier darüber, mit Deckel stocken lassen. Käsereste obenauf.'],
  ['Bowl', 'Getreide + Hülsenfrucht + rohes oder geröstetes Gemüse + Hummus oder Joghurt-Dip. Funktioniert mit fast jeder Kombination.'],
  ['Einfrieren', 'Brot in Scheiben, Kräuter gehackt, Kokosmilch in Eiswürfelform, Bolognese und Suppe portionsweise.'],
];

const PREP = [
  ['Sonntag (ca. 45 Minuten)', [
    'Berglinsen für den Linsensalat am Montag kochen.',
    'Paprika und Zwiebel für den Salat schneiden, Salat ohne Rucola und Feta fertig mischen.',
    'Beeren für Montag aus dem Tiefkühler in den Kühlschrank stellen.',
    'Karotten für die ersten Snacks schälen und in Sticks schneiden (in Wasser im Kühlschrank bleiben sie knackig).',
  ]],
  ['Dienstagabend', [
    'Curry doppelt kochen (Mittwoch Mittag).',
    'Reis für Mittwochabend mitkochen.',
    '100 g Hähnchen zusätzlich braten (Donnerstag im Wrap).',
  ]],
  ['Donnerstagabend', [
    'Quinoa für den Salat am Freitag kochen, während die Shakshuka köchelt.',
  ]],
  ['Samstag', [
    'Großen Topf Suppe für zwei Tage kochen.',
    'Bolognese reichlich kochen, ein Drittel für Sonntag kalt stellen.',
  ]],
];

const TIPS = [
  ['Teller-Regel', ['Die Hälfte Gemüse, ein Viertel Eiweiß, ein Viertel Vollkorn-Beilage, dazu ein Esslöffel gutes Öl.', 'Er bekommt mehr Beilage und Eiweiß, nicht mehr Öl.', 'Bei Hunger zuerst mehr Gemüse nachnehmen.']],
  ['Abnehmen', ['Ziel: etwa ein halbes Kilo pro Woche. Schneller geht meist auf Kosten der Muskeln und der Laune.', 'Drei Mahlzeiten, höchstens ein Snack. Kalorien nicht trinken: Wasser, Tee, Kaffee ohne Zucker.', 'Tut sich nach zwei Wochen nichts, zuerst Beilagen und Öl etwas kürzen, das Gemüse bleibt.', 'Die Kalorien im Plan sind grob geschätzt. Sie hängen von Größe, Gewicht und Bewegung ab.']],
  ['Hirnnahrung', ['Er: zweimal pro Woche fetter Fisch (im Plan Lachs am Montag, Makrele am Freitag).', 'Sie: täglich Walnüsse, Leinsamen oder Leinöl. Ein Algenöl-Präparat (DHA/EPA) ist sinnvoll, weil der Körper pflanzliches Omega-3 nur schlecht umwandelt.', 'Beeren und grünes Blattgemüse möglichst täglich, Eier liefern Cholin.', 'Vollkorn und Hülsenfrüchte halten den Blutzucker stabil und verhindern das Tief am Nachmittag.']],
  ['Weniger Stress', ['Magnesium: Kürbiskerne, Haferflocken, Hülsenfrüchte, Spinat, dunkle Schokolade.', 'Regelmäßig essen. Ausgelassene Mahlzeiten machen gereizt und führen abends zu Heißhunger.', 'Kaffee nur bis etwa 14 Uhr – guter Schlaf senkt Stress am stärksten.', 'Abends zwei bis drei Stunden vor dem Schlafen essen, danach Kräutertee statt Wein.', 'Täglich 30 Minuten zügig gehen, zweimal pro Woche Krafttraining.']],
  ['Für sie (vegetarisch)', ['Eisen: Linsen, Kichererbsen, Haferflocken und Kürbiskerne mit Vitamin C kombinieren (Paprika, Zitrone). Kaffee und Tee nicht direkt zum Essen.', 'Vitamin B12 ist mit Milchprodukten und Eiern meist gedeckt. Einmal beim Hausarzt prüfen lassen, zusammen mit Ferritin und Vitamin D.', 'Jodsalz verwenden.']],
  ['Hinweis', ['Der Plan ersetzt keine ärztliche Beratung. Bei Vorerkrankungen, Medikamenten, Schwangerschaft oder Kinderwunsch bitte vorher abklären.']],
];
