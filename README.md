# Essensplan

Wochenplan für zwei Personen: gesund, zum Abnehmen, mit Hirnnahrung und Gerichten gegen Stress.
Sie isst vegetarisch, er isst alles. Gekocht wird ein Gericht, nur die Eiweißquelle wechselt.

## Was die App kann
- **Woche:** sieben Tage mit Frühstück, Mittag, Abend; Antippen zeigt Zutaten und Zubereitung.
- **Beide / Sie / Er:** rechnet alle Mengen und die Einkaufsliste um.
- **Einkauf:** Wocheneinkauf nach Abteilung, in ganzen Packungen, zum Abhaken und Kopieren.
- **Reste:** zeigt, was mit Absicht mehr gekocht wird und wo es wieder auftaucht, rechnet aus,
  welche angebrochenen Packungen übrig bleiben, und schlägt vor, was man daraus macht.
- **Rezepte:** 74 Rezepte (Wochenplan plus Sammlung in [`rezepte.js`](rezepte.js)) für Frühstück,
  Mittag, Abend und Snacks. Filter nach Mahlzeit, Hirnnahrung, gegen Stress, Omega-3, „für beide gleich“
  und „bis 15 Minuten“. „Was ist übrig?“ zeigt alle Rezepte mit einer bestimmten Zutat.
- **Tipps** mit Vorkoch-Plan.

## Benutzen
Reine Webseite ohne Build-Schritt. `index.html` im Browser öffnen genügt.
Abgehakte Einkäufe und die Auswahl merkt sich der Browser auf dem Gerät.

Über einen Webserver (zum Beispiel GitHub Pages) lässt sie sich auf dem Handy zum Startbildschirm
hinzufügen und läuft dann auch ohne Netz.

## Anpassen
Alle Inhalte stehen in [`data.js`](data.js): Zutaten mit Packungsgrößen, Rezepte mit Mengen je Person
(`[Zutat, sie, er]`), der Wochenplan, Reste-Ketten und Tipps. Weitere Rezepte und ihre Zutaten stehen
in `rezepte.js` (mit `meal`: `f` Frühstück, `m` Mittag, `a` Abend, `s` Snack). Einkaufsliste und Reste rechnet
[`app.js`](app.js) daraus neu.

Die Kalorien sind grob geschätzt. Der Plan ersetzt keine ärztliche Beratung.
