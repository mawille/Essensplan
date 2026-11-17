// Rezeptsammlung zusätzlich zum Wochenplan. Gleiches Format wie RECIPES in data.js,
// dazu meal: f = Frühstück, m = Mittag, a = Abend, s = Snack.
// Mengen je Person: [Zutat, sie, er]. Sie isst vegetarisch, er alles.

Object.assign(ING, {
  milch: { n: 'Milch (1,5 %) oder Haferdrink', u: 'ml', c: 'kuehl', pk: [1000, 'Liter'], idee: 'In Porridge, Chia-Pudding oder Smoothie.' },
  kefir: { n: 'Kefir', u: 'ml', c: 'kuehl', pk: [500, 'Flasche'], idee: 'Pur mit Zimt als Snack oder in den Smoothie.' },
  frischkaese: { n: 'Frischkäse (leicht)', u: 'g', c: 'kuehl', pk: [175, 'Packung'], idee: 'Aufs Brot oder als cremige Basis in Pilzsoße und Suppe.' },
  mozzarella: { n: 'Mozzarella (leicht)', u: 'g', c: 'kuehl', pk: [125, 'Kugel'], idee: 'Mit Tomate als Caprese oder auf die Ofen-Pasta.' },
  halloumi: { n: 'Halloumi', u: 'g', c: 'kuehl', pk: [225, 'Packung'], idee: 'In Scheiben braten und auf Salat oder Bowl legen. Hält ungeöffnet lange.' },
  raeuchertofu: { n: 'Räuchertofu', u: 'g', c: 'kuehl', pk: [200, 'Packung'], idee: 'Würfeln und knusprig braten – passt in jede Gemüsepfanne.' },
  pesto: { n: 'Pesto (Glas)', u: 'g', c: 'kuehl', pk: [190, 'Glas'], idee: 'Ein Löffel in Suppe, Dressing oder aufs Brot. Mit Öl bedeckt im Kühlschrank lagern.' },
  sauerkraut: { n: 'Sauerkraut', u: 'g', c: 'kuehl', pk: [500, 'Beutel'], idee: 'Roh als Beilage – das ist gut für den Darm – oder in die Kartoffelpfanne.' },
  raeucherlachs: { n: 'Räucherlachs', u: 'g', c: 'fisch', pk: [100, 'Packung'], idee: 'Aufs Brot, ins Rührei oder in den Fenchelsalat.' },
  raeucherforelle: { n: 'Geräucherte Forellenfilets', u: 'g', c: 'fisch', pk: [125, 'Packung'], idee: 'Zerzupft in Kartoffelsalat oder aufs Brot mit Meerrettich.' },
  forelle: { n: 'Forellenfilet, frisch', u: 'g', c: 'fisch' },
  pute: { n: 'Putenschnitzel', u: 'g', c: 'fisch' },
  thunfisch: { n: 'Thunfisch im eigenen Saft', u: 'g', c: 'trocken', pk: [150, 'Dose'], idee: 'In den Salat oder mit Bohnen und Zwiebel als schneller Snack.' },

  banane: { n: 'Bananen', u: 'Stück', c: 'gemuese', idee: 'Überreif schälen, in Stücken einfrieren – fürs Smoothie.' },
  birne: { n: 'Birnen', u: 'Stück', c: 'gemuese', idee: 'In den Porridge oder mit Ziegenkäse auf den Salat.' },
  orange: { n: 'Orangen', u: 'Stück', c: 'gemuese', idee: 'Als Snack – das Vitamin C hilft ihr außerdem bei der Eisenaufnahme.' },
  fruehlingszwiebel: { n: 'Frühlingszwiebeln', u: 'Bund', c: 'gemuese', idee: 'In Ringen über Suppe, Rührei oder gebratenen Reis.' },
  basilikum: { n: 'Basilikum', u: 'Topf', c: 'gemuese', idee: 'Hell aufs Fensterbrett stellen, dann hält er wochenlang.' },
  dill: { n: 'Dill', u: 'Bund', c: 'gemuese', idee: 'Hacken und einfrieren; passt zu Gurke, Kartoffeln und Fisch.' },
  rotkohl: { n: 'Rotkohl', u: 'g', c: 'gemuese', pk: [1000, 'Kopf'], idee: 'Hält im Kühlschrank zwei Wochen. Fein gehobelt als Rohkost in jede Bowl.' },
  spitzkohl: { n: 'Spitzkohl', u: 'g', c: 'gemuese', pk: [800, 'Kopf'], idee: 'Fein geschnitten als Krautsalat mit Joghurt-Dressing.' },
  blumenkohl: { n: 'Blumenkohl', u: 'g', c: 'gemuese', pk: [800, 'Kopf'], idee: 'Röschen im Ofen rösten oder in die Restesuppe.' },
  kuerbis: { n: 'Hokkaido-Kürbis', u: 'g', c: 'gemuese', pk: [1000, 'Stück'], idee: 'Ganz hält er monatelang, angeschnitten eine Woche. Rest in Würfeln einfrieren.' },
  aubergine: { n: 'Aubergine', u: 'Stück', c: 'gemuese', idee: 'In Scheiben grillen und mit Joghurt und Knoblauch essen.' },
  lauch: { n: 'Lauch', u: 'Stange', c: 'gemuese', idee: 'In Ringen in Suppe, Frittata oder Kartoffelpfanne.' },
  fenchel: { n: 'Fenchel', u: 'Knolle', c: 'gemuese', idee: 'Hauchdünn mit Zitrone als Salat oder mit aufs Ofenblech.' },

  edamame: { n: 'Edamame, geschält', u: 'g', c: 'tk', pk: [400, 'Beutel'], idee: 'Bleiben im Tiefkühler. Kurz kochen und salzen ist ein guter Eiweiß-Snack.' },
  erbsen: { n: 'Erbsen', u: 'g', c: 'tk', pk: [450, 'Beutel'], idee: 'Bleiben im Tiefkühler, passen in Reis, Suppe und Frittata.' },
  mango: { n: 'Mangostücke', u: 'g', c: 'tk', pk: [400, 'Beutel'], idee: 'Bleiben im Tiefkühler; fürs Smoothie oder Overnight Oats.' },
  garnelen: { n: 'Garnelen, roh', u: 'g', c: 'tk', pk: [250, 'Packung'], idee: 'Rest bleibt gefroren für das nächste Pfannengericht.' },
  kabeljau: { n: 'Kabeljaufilet', u: 'g', c: 'tk', pk: [400, 'Packung'], idee: 'Rest bleibt gefroren; über Nacht im Kühlschrank auftauen.' },

  kidneybohnen: { n: 'Kidneybohnen (Abtropfgewicht)', u: 'g', c: 'trocken', pk: [250, 'Dose'], idee: 'In den Salat oder mit in eine Suppe.' },
  schwarzebohnen: { n: 'Schwarze Bohnen (Abtropfgewicht)', u: 'g', c: 'trocken', pk: [250, 'Dose'], idee: 'Mit Mais, Tomate und Zitrone als Salsa.' },
  mais: { n: 'Mais (Abtropfgewicht)', u: 'g', c: 'trocken', pk: [140, 'Dose'], idee: 'In Salat, Chili oder gebratenen Reis.' },
  mandeln: { n: 'Mandeln', u: 'g', c: 'trocken', pk: [200, 'Beutel'], idee: 'Halten monatelang.' },
  erdnussmus: { n: 'Erdnussmus (100 % Erdnuss)', u: 'g', c: 'trocken', pk: [250, 'Glas'], idee: 'Hält lange. Für Dressings, Soßen und zum Apfel.' },
  tahini: { n: 'Tahini (Sesammus)', u: 'g', c: 'trocken', pk: [250, 'Glas'], idee: 'Hält lange. Mit Zitrone und Wasser als Dressing für jede Bowl.' },

  chia: { n: 'Chiasamen', u: 'g', c: 'vorrat' },
  bulgur: { n: 'Bulgur', u: 'g', c: 'vorrat' },
  reisnudeln: { n: 'Reisnudeln', u: 'g', c: 'vorrat' },
  senf: { n: 'Senf', u: '', c: 'vorrat' },
  essig: { n: 'Essig (Apfel oder Balsamico)', u: '', c: 'vorrat' },
});

// Topf, Stange und Knolle sind zählbar wie Stück.
COUNTABLE.push('Topf', 'Stange', 'Knolle');

Object.assign(RECIPES, {
  // ---------- Frühstück ----------
  overnight_oats: {
    meal: 'f', n: 'Overnight Oats mit Chia und Mango', min: 5, kcal: [400, 540], tags: ['hirn', 'ruhe'],
    ing: [['haferflocken', 40, 60], ['chia', 10, 15], ['joghurt', 100, 150], ['milch', 100, 120], ['mango', 80, 80], ['kuerbiskerne', 10, 15]],
    steps: ['Haferflocken, Chia, Joghurt und Milch in einem Glas verrühren.', 'Gefrorene Mango darauf geben, über Nacht in den Kühlschrank stellen.', 'Morgens mit Kürbiskernen bestreuen.'],
    hint: 'Am Vorabend in zwei Minuten fertig – gut für hektische Morgen.',
  },
  porridge_birne: {
    meal: 'f', n: 'Warmer Porridge mit Birne und Mandeln', min: 10, kcal: [420, 560], tags: ['ruhe'],
    ing: [['haferflocken', 50, 70], ['milch', 200, 250], ['birne', 1, 1], ['mandeln', 15, 25], ['gewuerze', 0, 0]],
    steps: ['Haferflocken mit Milch und einer Prise Salz aufkochen, 3–4 Minuten unter Rühren köcheln.', 'Birne würfeln und kurz mit erwärmen, mit Zimt abschmecken.', 'Gehackte Mandeln darüber.'],
  },
  budwig_quark: {
    meal: 'f', n: 'Leinöl-Quark mit Beeren', min: 5, kcal: [330, 420], tags: ['hirn'],
    ing: [['quark', 150, 200], ['leinoel', 10, 10], ['milch', 30, 30], ['beeren', 100, 100], ['leinsamen', 10, 10], ['honig', 0, 0]],
    steps: ['Quark mit Leinöl und einem Schuss Milch glatt rühren, bis kein Öl mehr zu sehen ist.', 'Beeren, Leinsamen und einen Teelöffel Honig darauf.'],
    hint: 'Leinöl ist ihre beste pflanzliche Omega-3-Quelle. Angebrochen im Kühlschrank lagern und in sechs Wochen verbrauchen.',
  },
  omelett_feta: {
    meal: 'f', n: 'Omelett mit Tomate, Feta und Basilikum', min: 10, kcal: [300, 520], tags: ['hirn'],
    ing: [['eier', 2, 3], ['tomaten', 1, 1], ['feta', 30, 30], ['basilikum', 0.25, 0.25], ['olivenoel', 5, 5], ['brot', 0, 50]],
    steps: ['Eier verquirlen, salzen und pfeffern.', 'In Öl bei mittlerer Hitze stocken lassen, Tomatenwürfel und Feta auf eine Hälfte geben.', 'Zuklappen, Basilikum darüber. Er isst eine Scheibe Brot dazu.'],
  },
  erdnuss_banane: {
    meal: 'f', n: 'Vollkornbrot mit Erdnussmus und Banane', min: 3, kcal: [300, 480], tags: ['ruhe'],
    ing: [['brot', 50, 100], ['erdnussmus', 15, 20], ['banane', 0.5, 1], ['gewuerze', 0, 0]],
    steps: ['Brot mit Erdnussmus bestreichen, Bananenscheiben darauf, etwas Zimt darüber.'],
  },
  smoothie_gruen: {
    meal: 'f', n: 'Beeren-Kefir-Smoothie mit Spinat', min: 5, kcal: [330, 420], tags: ['hirn', 'ruhe'],
    ing: [['kefir', 250, 300], ['beeren', 100, 100], ['spinat', 30, 30], ['banane', 0.5, 0.5], ['haferflocken', 20, 30], ['leinsamen', 10, 10]],
    steps: ['Alles im Mixer fein pürieren. Mit gefrorenen Beeren wird er schön kalt.'],
    hint: 'Gute Verwendung für den Rest Babyspinat.',
  },
  lachsbrot: {
    meal: 'f', n: 'Vollkornbrot mit Frischkäse, Gurke und Dill', er: 'mit Räucherlachs', min: 5, kcal: [260, 450], tags: ['hirn', 'fisch'],
    ing: [['brot', 50, 100], ['frischkaese', 30, 30], ['gurke', 0.25, 0.25], ['dill', 0.25, 0.25], ['eier', 1, 0], ['raeucherlachs', 0, 50]],
    steps: ['Brot mit Frischkäse bestreichen, Gurkenscheiben und Dill darauf.', 'Sie: ein gekochtes Ei in Scheiben dazu. Er: Räucherlachs darauf.'],
  },
  chia_pudding: {
    meal: 'f', n: 'Chia-Pudding mit Himbeeren und Mandeln', min: 5, kcal: [340, 440], tags: ['hirn'],
    ing: [['chia', 25, 30], ['milch', 200, 250], ['beeren', 100, 100], ['mandeln', 10, 20], ['honig', 0, 0]],
    steps: ['Chia mit Milch und einem Teelöffel Honig verrühren, nach 10 Minuten noch einmal rühren.', 'Über Nacht quellen lassen, morgens Beeren und Mandeln darauf.'],
  },
  bircher: {
    meal: 'f', n: 'Bircher Müsli mit Apfel und Walnüssen', min: 10, kcal: [420, 560], tags: ['hirn', 'ruhe'],
    ing: [['haferflocken', 50, 70], ['apfel', 1, 1], ['joghurt', 100, 150], ['milch', 50, 50], ['walnuss', 15, 20], ['zitrone', 0.25, 0.25]],
    steps: ['Haferflocken mit Milch und Joghurt mischen, über Nacht einweichen.', 'Morgens den Apfel grob hineinreiben, mit Zitronensaft abschmecken.', 'Gehackte Walnüsse darüber.'],
  },
  tofu_scramble: {
    meal: 'f', n: 'Tofu-Rührei mit Paprika und Frühlingszwiebeln', min: 15, kcal: [330, 480], tags: ['ruhe'],
    ing: [['tofu', 150, 200], ['paprika', 0.5, 0.5], ['fruehlingszwiebel', 0.25, 0.25], ['olivenoel', 5, 5], ['brot', 50, 100], ['gewuerze', 0, 0]],
    steps: ['Paprika würfeln und in Öl anbraten.', 'Tofu mit der Gabel zerbröseln, dazugeben, mit Kurkuma, Salz und Pfeffer 5 Minuten braten.', 'Frühlingszwiebeln darüber, mit Brot essen.'],
  },
  herzhaft_quark: {
    meal: 'f', n: 'Kräuterquark-Brot mit Gurke und Kresse', min: 5, kcal: [280, 420], tags: [],
    ing: [['brot', 50, 100], ['quark', 80, 100], ['schnittlauch', 0.25, 0.25], ['gurke', 0.25, 0.25], ['kresse', 0.25, 0.25], ['leinoel', 5, 5]],
    steps: ['Quark mit Leinöl, Schnittlauch, Salz und Pfeffer verrühren.', 'Aufs Brot streichen, Gurkenscheiben und Kresse darauf.'],
  },

  // ---------- Mittag ----------
  buddha_bowl: {
    meal: 'm', n: 'Buddha-Bowl mit Süßkartoffel, Edamame und Tahini', er: 'mit Hähnchen', min: 35, kcal: [560, 700], tags: ['ruhe'],
    ing: [['suesskartoffel', 200, 250], ['quinoa', 50, 70], ['edamame', 80, 60], ['rotkohl', 80, 80], ['tahini', 15, 15], ['zitrone', 0.25, 0.25], ['olivenoel', 5, 5], ['haehnchen', 0, 100]],
    steps: ['Süßkartoffel würfeln, mit Öl und Salz bei 200 °C 25 Minuten rösten.', 'Quinoa kochen, Edamame 3 Minuten mitkochen.', 'Rotkohl fein hobeln. Tahini mit Zitronensaft und Wasser cremig rühren.', 'Alles in Schalen anrichten. Er: Hähnchen gebraten dazu.'],
    hint: 'Gut zum Mitnehmen: Dressing extra einpacken.',
  },
  taboule: {
    meal: 'm', n: 'Taboulé mit Kichererbsen', er: 'mit Thunfisch', min: 20, kcal: [480, 580], tags: ['ruhe'],
    ing: [['bulgur', 60, 80], ['tomaten', 2, 2], ['gurke', 0.5, 0.5], ['petersilie', 0.5, 0.5], ['kichererbsen', 120, 60], ['zitrone', 0.5, 0.5], ['olivenoel', 10, 10], ['thunfisch', 0, 80]],
    steps: ['Bulgur mit der doppelten Menge kochendem Wasser übergießen, 15 Minuten quellen lassen.', 'Tomaten und Gurke klein würfeln, Petersilie fein hacken.', 'Alles mit Kichererbsen, Zitronensaft, Öl, Salz und Pfeffer mischen. Er: Thunfisch darüber.'],
    hint: 'Schmeckt am nächsten Tag noch besser – gleich doppelt machen.',
  },
  linsensuppe: {
    meal: 'm', n: 'Rote Linsensuppe mit Karotte und Ingwer', min: 30, kcal: [400, 520], tags: ['ruhe'],
    ing: [['rotelinsen', 70, 90], ['karotten', 150, 150], ['zwiebel', 0.5, 0.5], ['ingwer', 0.25, 0.25], ['kokosmilch', 50, 50], ['bruehe', 0, 0], ['zitrone', 0.25, 0.25], ['brot', 0, 50]],
    steps: ['Zwiebel, Ingwer und Karotten klein schneiden, in etwas Öl anschwitzen.', 'Linsen und 500 ml Brühe dazu, 15 Minuten köcheln.', 'Kokosmilch dazu, fein pürieren, mit Zitrone, Salz und Kreuzkümmel abschmecken.'],
    hint: 'Lässt sich gut einfrieren. Verbraucht Reste Kokosmilch und Karotten.',
  },
  bauernsalat: {
    meal: 'm', n: 'Griechischer Salat mit weißen Bohnen', min: 15, kcal: [470, 600], tags: [],
    ing: [['tomaten', 2, 2], ['gurke', 0.5, 0.5], ['paprika', 0.5, 0.5], ['zwiebel', 0.25, 0.25], ['feta', 60, 60], ['weissebohnen', 120, 120], ['olivenoel', 10, 10], ['essig', 0, 0], ['brot', 0, 50], ['gewuerze', 0, 0]],
    steps: ['Gemüse grob würfeln, Zwiebel in feine Ringe.', 'Mit abgespülten Bohnen, Öl, Essig, Oregano, Salz und Pfeffer mischen.', 'Feta in Würfeln darauf.'],
  },
  suesskartoffel_salsa: {
    meal: 'm', n: 'Ofen-Süßkartoffel mit Bohnen-Mais-Salsa', min: 45, kcal: [520, 650], tags: ['ruhe'],
    ing: [['suesskartoffel', 300, 400], ['schwarzebohnen', 120, 120], ['mais', 50, 50], ['tomaten', 1, 1], ['fruehlingszwiebel', 0.25, 0.25], ['joghurt', 50, 50], ['zitrone', 0.25, 0.25]],
    steps: ['Süßkartoffeln mehrmals einstechen, bei 200 °C 40 Minuten backen.', 'Bohnen, Mais, Tomatenwürfel und Frühlingszwiebeln mit Zitrone, Salz und Kreuzkümmel mischen.', 'Süßkartoffel aufschneiden, Salsa und Joghurt darauf.'],
  },
  pesto_nudelsalat: {
    meal: 'm', n: 'Vollkorn-Nudelsalat mit Pesto, Tomaten und Mozzarella', er: 'mit Hähnchen', min: 20, kcal: [540, 760], tags: [],
    ing: [['pasta', 60, 90], ['pesto', 15, 15], ['tomaten', 2, 2], ['mozzarella', 60, 60], ['rucola', 30, 30], ['haehnchen', 0, 100]],
    steps: ['Pasta kochen und kalt abspülen.', 'Mit Pesto, Tomatenwürfeln und Mozzarella mischen.', 'Rucola kurz vor dem Essen unterheben. Er: gebratenes Hähnchen dazu.'],
  },
  erdnuss_nudeln: {
    meal: 'm', n: 'Asia-Nudelsalat mit Edamame und Erdnuss-Dressing', er: 'mit Garnelen', min: 20, kcal: [540, 680], tags: ['ruhe'],
    ing: [['reisnudeln', 60, 80], ['edamame', 80, 80], ['karotten', 80, 80], ['rotkohl', 80, 80], ['fruehlingszwiebel', 0.25, 0.25], ['erdnussmus', 15, 20], ['sojasauce', 0, 0], ['zitrone', 0.25, 0.25], ['garnelen', 0, 100]],
    steps: ['Reisnudeln nach Packung garen, Edamame 3 Minuten mitkochen, kalt abspülen.', 'Karotten in Streifen, Rotkohl fein hobeln.', 'Erdnussmus mit Sojasauce, Zitronensaft und warmem Wasser glatt rühren.', 'Alles mischen, Frühlingszwiebeln darüber. Er: Garnelen kurz anbraten und dazu.'],
  },
  kuerbissuppe: {
    meal: 'm', n: 'Kürbissuppe mit Kokos und Kürbiskernen', min: 30, kcal: [380, 500], tags: ['ruhe'],
    ing: [['kuerbis', 350, 450], ['zwiebel', 0.5, 0.5], ['ingwer', 0.25, 0.25], ['kokosmilch', 50, 50], ['bruehe', 0, 0], ['kuerbiskerne', 15, 20], ['brot', 0, 50]],
    steps: ['Hokkaido mit Schale würfeln, mit Zwiebel und Ingwer anschwitzen.', '600 ml Brühe dazu, 20 Minuten köcheln.', 'Kokosmilch dazu, pürieren, abschmecken. Geröstete Kürbiskerne darüber.'],
    hint: 'Beim Hokkaido kann die Schale dran bleiben.',
  },
  halloumi_bowl: {
    meal: 'm', n: 'Quinoa-Bowl mit Zucchini', sie: 'mit Halloumi', er: 'mit Hähnchen', min: 25, kcal: [560, 620], tags: [],
    ing: [['quinoa', 60, 80], ['zucchini', 0.5, 0.5], ['tomaten', 1, 1], ['rucola', 30, 30], ['zitrone', 0.25, 0.25], ['olivenoel', 10, 10], ['halloumi', 60, 0], ['haehnchen', 0, 120]],
    steps: ['Quinoa kochen.', 'Zucchini in Scheiben anbraten. Halloumi bzw. Hähnchen in einer zweiten Pfanne goldbraun braten.', 'Alles mit Tomaten und Rucola anrichten, mit Zitrone und Öl beträufeln.'],
  },
  kartoffelsalat: {
    meal: 'm', n: 'Kartoffelsalat mit Gurke, Ei und Joghurt-Dill-Dressing', er: 'mit Räucherforelle', min: 30, kcal: [430, 620], tags: ['hirn', 'fisch'],
    ing: [['kartoffeln', 250, 350], ['gurke', 0.5, 0.5], ['joghurt', 75, 75], ['dill', 0.25, 0.25], ['eier', 1, 1], ['senf', 0, 0], ['raeucherforelle', 0, 100]],
    steps: ['Kartoffeln mit Schale kochen, pellen und in Scheiben schneiden. Eier hart kochen.', 'Joghurt mit Senf, Dill, Salz und Pfeffer verrühren.', 'Mit Kartoffeln, Gurkenscheiben und Ei mischen. Er: Forelle zerzupft darauf.'],
  },
  frittata: {
    meal: 'm', n: 'Gemüse-Frittata mit Salat', min: 30, kcal: [420, 560], tags: ['hirn'],
    ing: [['eier', 3, 3], ['zucchini', 0.5, 0.5], ['paprika', 0.5, 0.5], ['kartoffeln', 100, 200], ['feta', 30, 30], ['romana', 0.5, 0.5], ['olivenoel', 10, 10]],
    steps: ['Kartoffeln in dünne Scheiben schneiden, in einer ofenfesten Pfanne in Öl 10 Minuten braten.', 'Zucchini und Paprika dazu, 5 Minuten mitbraten.', 'Verquirlte Eier darüber, Feta darauf, bei 180 °C 12 Minuten im Ofen stocken lassen.', 'Mit Salat essen. Kalt ist sie ein gutes Mitnehm-Essen.'],
    hint: 'Hier passt fast jeder Gemüserest hinein.',
  },
  hummus_teller: {
    meal: 'm', n: 'Hummus-Teller mit Ofen-Blumenkohl', min: 30, kcal: [460, 600], tags: [],
    ing: [['blumenkohl', 300, 300], ['hummus', 75, 75], ['brot', 50, 100], ['joghurt', 50, 50], ['petersilie', 0.25, 0.25], ['olivenoel', 10, 10], ['gewuerze', 0, 0]],
    steps: ['Blumenkohl in Röschen mit Öl, Kreuzkümmel und Salz bei 220 °C 25 Minuten rösten.', 'Hummus auf Teller streichen, Blumenkohl darauf, mit Joghurt und Petersilie.', 'Mit Brot zum Tunken.'],
  },
  lauchsuppe: {
    meal: 'm', n: 'Kartoffel-Lauch-Suppe mit Schnittlauch', er: 'mit Räucherforelle', min: 30, kcal: [360, 560], tags: ['ruhe', 'fisch'],
    ing: [['lauch', 0.5, 0.5], ['kartoffeln', 200, 250], ['bruehe', 0, 0], ['frischkaese', 20, 20], ['schnittlauch', 0.25, 0.25], ['brot', 50, 50], ['raeucherforelle', 0, 60]],
    steps: ['Lauch in Ringe, Kartoffeln in Würfel schneiden, in etwas Öl anschwitzen.', 'Mit 500 ml Brühe 20 Minuten köcheln, Frischkäse dazu, grob pürieren.', 'Schnittlauch darüber. Er: Forelle in Stücken in den Teller.'],
  },
  fenchelsalat: {
    meal: 'm', n: 'Fenchel-Orangen-Salat mit Walnüssen', sie: 'mit Ziegenkäse', er: 'mit Räucherlachs', min: 15, kcal: [470, 560], tags: ['hirn', 'fisch'],
    ing: [['fenchel', 0.5, 0.5], ['orange', 1, 1], ['rucola', 30, 30], ['walnuss', 20, 20], ['olivenoel', 10, 10], ['brot', 50, 50], ['ziegenkaese', 50, 0], ['raeucherlachs', 0, 80]],
    steps: ['Fenchel hauchdünn hobeln, Orange schälen und in Scheiben schneiden.', 'Mit Rucola, Öl, Salz und Pfeffer anrichten, Walnüsse darüber.', 'Sie: Ziegenkäse, er: Räucherlachs darauf. Brot dazu.'],
    hint: 'Orange liefert Vitamin C, das ihr Eisen aus Walnüssen und Brot besser verwertet.',
  },
  erbsensuppe: {
    meal: 'm', n: 'Grüne Erbsensuppe mit Feta und Kürbiskernen', min: 20, kcal: [400, 520], tags: ['ruhe'],
    ing: [['erbsen', 200, 250], ['zwiebel', 0.5, 0.5], ['kartoffeln', 100, 150], ['bruehe', 0, 0], ['feta', 30, 30], ['kuerbiskerne', 10, 15], ['zitrone', 0.25, 0.25]],
    steps: ['Zwiebel und Kartoffelwürfel anschwitzen, 500 ml Brühe dazu, 12 Minuten köcheln.', 'Erbsen dazu, 3 Minuten kochen, fein pürieren, mit Zitrone abschmecken.', 'Feta und Kürbiskerne darüber.'],
  },
  thunfisch_bohnen: {
    meal: 'm', n: 'Weißer Bohnensalat mit Tomaten und Rucola', er: 'mit Thunfisch', min: 10, kcal: [420, 560], tags: [],
    ing: [['weissebohnen', 180, 120], ['tomaten', 2, 2], ['zwiebel', 0.25, 0.25], ['rucola', 30, 30], ['petersilie', 0.25, 0.25], ['olivenoel', 10, 10], ['zitrone', 0.25, 0.25], ['brot', 0, 50], ['thunfisch', 0, 100], ['mozzarella', 60, 0]],
    steps: ['Bohnen abspülen, Tomaten würfeln, Zwiebel fein hacken.', 'Mit Öl, Zitrone, Petersilie, Salz und Pfeffer mischen, auf Rucola anrichten.', 'Sie: Mozzarella, er: Thunfisch darauf.'],
  },

  // ---------- Abend ----------
  chili: {
    meal: 'a', n: 'Bohnen-Chili mit Reis', sie: 'sin Carne', er: 'mit Rinderhack', min: 40, kcal: [560, 700], tags: ['ruhe'],
    ing: [['kidneybohnen', 120, 60], ['schwarzebohnen', 60, 60], ['dosentomaten', 200, 200], ['paprika', 1, 1], ['mais', 50, 50], ['zwiebel', 0.5, 0.5], ['knoblauch', 0, 0], ['reis', 50, 70], ['joghurt', 50, 50], ['gewuerze', 0, 0], ['hack', 0, 100]],
    steps: ['Reis kochen.', 'Zwiebel, Knoblauch und Paprika anbraten, Kreuzkümmel und Paprikapulver kurz mitrösten.', 'Tomaten, Bohnen und Mais dazu, 20 Minuten köcheln. Für ihn das Hack separat anbraten und unter seine Portion mischen.', 'Mit einem Klecks Joghurt servieren.'],
    hint: 'Lässt sich gut doppelt kochen und einfrieren.',
  },
  kabeljau_ofen: {
    meal: 'a', n: 'Mediterranes Ofenblech mit Kartoffeln', sie: 'mit Halloumi', er: 'mit Kabeljau', min: 40, kcal: [560, 540], tags: [],
    ing: [['kartoffeln', 250, 350], ['zucchini', 0.5, 0.5], ['tomaten', 2, 2], ['zwiebel', 0.5, 0.5], ['zitrone', 0.25, 0.25], ['olivenoel', 10, 10], ['gewuerze', 0, 0], ['halloumi', 80, 0], ['kabeljau', 0, 150]],
    steps: ['Kartoffeln in Spalten mit Öl und Salz bei 200 °C 15 Minuten vorbacken.', 'Zucchini, Tomaten und Zwiebel dazu, mit Oregano würzen.', 'Kabeljau und Halloumi in Scheiben auflegen, weitere 15 Minuten backen.', 'Mit Zitrone beträufeln.'],
  },
  dal: {
    meal: 'a', n: 'Rotes Linsen-Dal mit Spinat und Reis', min: 30, kcal: [540, 720], tags: ['ruhe'],
    ing: [['rotelinsen', 70, 100], ['spinat', 100, 100], ['dosentomaten', 100, 100], ['kokosmilch', 50, 50], ['zwiebel', 0.5, 0.5], ['ingwer', 0.25, 0.25], ['knoblauch', 0, 0], ['currypaste', 0, 0], ['reis', 40, 70]],
    steps: ['Reis kochen.', 'Zwiebel, Knoblauch und Ingwer anschwitzen, Curry kurz mitrösten.', 'Linsen, Tomaten, Kokosmilch und 300 ml Wasser dazu, 15 Minuten köcheln.', 'Spinat unterrühren, mit Salz und Zitrone abschmecken.'],
    hint: 'Für beide gleich. Er kann ein Spiegelei oder Hähnchen dazulegen.',
  },
  feta_pasta: {
    meal: 'a', n: 'Ofen-Feta-Pasta mit Tomaten und Spinat', er: 'mit Garnelen', min: 30, kcal: [580, 720], tags: [],
    ing: [['pasta', 70, 100], ['feta', 75, 75], ['tomaten', 3, 3], ['spinat', 50, 50], ['knoblauch', 0, 0], ['olivenoel', 10, 10], ['basilikum', 0.25, 0.25], ['garnelen', 0, 100]],
    steps: ['Tomaten halbiert mit Knoblauch und Öl in eine Form, Feta in die Mitte, bei 200 °C 25 Minuten backen.', 'Pasta kochen. Er: Garnelen in der Pfanne kurz anbraten.', 'Feta und Tomaten zerdrücken, Spinat und Pasta unterheben, Basilikum darüber.'],
  },
  gebratener_reis: {
    meal: 'a', n: 'Gebratener Reis mit Gemüse und Ei', er: 'mit Garnelen', min: 20, kcal: [520, 650], tags: ['hirn'],
    ing: [['reis', 60, 80], ['eier', 2, 1], ['erbsen', 60, 60], ['karotten', 80, 80], ['fruehlingszwiebel', 0.5, 0.5], ['sojasauce', 0, 0], ['sesam', 0, 0], ['olivenoel', 10, 10], ['garnelen', 0, 100]],
    steps: ['Am besten mit Reis vom Vortag. Karottenwürfel in Öl anbraten.', 'Erbsen und Reis dazu, kräftig braten. Er: Garnelen mitbraten.', 'Reis zur Seite schieben, Eier hineinschlagen und verrühren, dann alles mischen.', 'Mit Sojasauce, Frühlingszwiebeln und Sesam.'],
    hint: 'Klassische Resteverwertung für gekochten Reis.',
  },
  spiesse: {
    meal: 'a', n: 'Gemüsespieße mit Bulgur und Tsatsiki', sie: 'mit Tofu', er: 'mit Hähnchen', min: 35, kcal: [560, 650], tags: [],
    ing: [['zucchini', 0.5, 0.5], ['paprika', 1, 1], ['zwiebel', 0.5, 0.5], ['bulgur', 50, 80], ['joghurt', 75, 75], ['gurke', 0.25, 0.25], ['knoblauch', 0, 0], ['olivenoel', 10, 10], ['tofu', 150, 0], ['haehnchen', 0, 150]],
    steps: ['Gemüse und Tofu bzw. Hähnchen in Stücke schneiden, abwechselnd aufspießen, mit Öl und Paprikapulver einreiben.', 'In der Grillpfanne oder bei 220 °C im Ofen 15–20 Minuten garen.', 'Bulgur quellen lassen. Joghurt mit geraspelter Gurke, Knoblauch und Salz verrühren.'],
  },
  zucchini_gefuellt: {
    meal: 'a', n: 'Gefüllte Zucchini mit Bulgur und Feta', er: 'mit Hackfleisch', min: 45, kcal: [460, 640], tags: [],
    ing: [['zucchini', 1, 1], ['bulgur', 40, 50], ['feta', 40, 40], ['dosentomaten', 100, 100], ['zwiebel', 0.25, 0.25], ['gewuerze', 0, 0], ['hack', 0, 100]],
    steps: ['Zucchini längs halbieren, aushöhlen, Fruchtfleisch hacken.', 'Mit Zwiebel anbraten, Tomaten und Bulgur dazu, 10 Minuten quellen lassen. Für ihn Hack separat anbraten und unter seine Füllung mischen.', 'Zucchini füllen, Feta darüber, bei 200 °C 25 Minuten backen.'],
  },
  rahmpilze: {
    meal: 'a', n: 'Rahmpilze mit Kartoffeln und Salat', er: 'mit Putenschnitzel', min: 30, kcal: [440, 620], tags: ['ruhe'],
    ing: [['champignons', 250, 250], ['zwiebel', 0.5, 0.5], ['frischkaese', 40, 40], ['petersilie', 0.25, 0.25], ['kartoffeln', 250, 300], ['romana', 0.5, 0.5], ['olivenoel', 10, 10], ['pute', 0, 125]],
    steps: ['Kartoffeln kochen.', 'Pilze in Scheiben kräftig anbraten, Zwiebel dazu, mit 100 ml Wasser ablöschen, Frischkäse einrühren.', 'Er: Putenschnitzel in einer zweiten Pfanne braten.', 'Petersilie darüber, Salat dazu.'],
  },
  thai_suppe: {
    meal: 'a', n: 'Thai-Kokossuppe mit Gemüse', sie: 'mit Tofu', er: 'mit Garnelen', min: 25, kcal: [480, 520], tags: ['ruhe'],
    ing: [['kokosmilch', 100, 100], ['brokkoli', 150, 150], ['champignons', 100, 100], ['karotten', 60, 60], ['ingwer', 0.25, 0.25], ['currypaste', 0, 0], ['bruehe', 0, 0], ['reisnudeln', 40, 60], ['zitrone', 0.25, 0.25], ['tofu', 100, 0], ['garnelen', 0, 120]],
    steps: ['Currypaste und Ingwer in einem Topf kurz anrösten, Kokosmilch und 500 ml Brühe dazu.', 'Gemüse klein schneiden und 6 Minuten darin garen.', 'Suppe teilen: in die eine Tofuwürfel, in die andere Garnelen, 3 Minuten ziehen lassen.', 'Reisnudeln in die Schalen geben, Suppe darüber, mit Zitrone abschmecken.'],
  },
  auberginen_topf: {
    meal: 'a', n: 'Auberginen-Kichererbsen-Schmortopf mit Bulgur', min: 40, kcal: [520, 680], tags: ['ruhe'],
    ing: [['aubergine', 0.5, 0.5], ['kichererbsen', 120, 120], ['dosentomaten', 200, 200], ['zwiebel', 0.5, 0.5], ['knoblauch', 0, 0], ['bulgur', 50, 80], ['joghurt', 50, 50], ['petersilie', 0.25, 0.25], ['olivenoel', 10, 10], ['gewuerze', 0, 0]],
    steps: ['Aubergine würfeln und in Öl rundum anbraten.', 'Zwiebel, Knoblauch, Kreuzkümmel und Zimt dazu, dann Tomaten und Kichererbsen. 20 Minuten schmoren.', 'Bulgur quellen lassen. Mit Joghurt und Petersilie servieren.'],
    hint: 'Für beide gleich. Schmeckt aufgewärmt am nächsten Tag noch besser.',
  },
  forelle_kartoffeln: {
    meal: 'a', n: 'Petersilienkartoffeln mit Gurkensalat', sie: 'mit Spiegeleiern', er: 'mit Forelle', min: 30, kcal: [480, 520], tags: ['hirn', 'fisch'],
    ing: [['kartoffeln', 250, 350], ['petersilie', 0.25, 0.25], ['gurke', 0.5, 0.5], ['joghurt', 50, 50], ['dill', 0.25, 0.25], ['olivenoel', 10, 10], ['eier', 2, 0], ['forelle', 0, 150], ['zitrone', 0, 0.25]],
    steps: ['Kartoffeln kochen, mit Petersilie und etwas Öl schwenken.', 'Gurke hobeln, mit Joghurt, Dill, Salz und Pfeffer mischen.', 'Sie: zwei Spiegeleier. Er: Forelle auf der Hautseite 4 Minuten braten, wenden, 1 Minute, mit Zitrone.'],
  },
  ofenkuerbis: {
    meal: 'a', n: 'Ofenkürbis mit Linsen, Feta und Rucola', er: 'mit Hähnchen', min: 40, kcal: [520, 660], tags: ['hirn', 'ruhe'],
    ing: [['kuerbis', 350, 400], ['berglinsen', 50, 60], ['feta', 50, 50], ['rucola', 30, 30], ['kuerbiskerne', 10, 10], ['olivenoel', 10, 10], ['honig', 0, 0], ['haehnchen', 0, 100]],
    steps: ['Kürbis in Spalten mit Öl, Salz und Rosmarin bei 200 °C 30 Minuten rösten.', 'Linsen 20 Minuten kochen. Er: Hähnchen braten.', 'Alles auf Rucola anrichten, Feta und Kürbiskerne darüber, mit etwas Honig beträufeln.'],
  },
  spitzkohl_pfanne: {
    meal: 'a', n: 'Spitzkohl-Kartoffel-Pfanne mit Räuchertofu', min: 30, kcal: [480, 620], tags: ['ruhe'],
    ing: [['spitzkohl', 250, 250], ['kartoffeln', 200, 300], ['raeuchertofu', 100, 125], ['zwiebel', 0.5, 0.5], ['olivenoel', 10, 10], ['sauerkraut', 50, 50], ['gewuerze', 0, 0]],
    steps: ['Kartoffeln in Würfeln in Öl 15 Minuten knusprig braten.', 'Räuchertofu und Zwiebel dazu, dann den in Streifen geschnittenen Spitzkohl. 8 Minuten braten, mit Kümmel, Salz und Pfeffer würzen.', 'Etwas rohes Sauerkraut als Beilage dazu – gut für den Darm.'],
    hint: 'Für beide gleich. Er bekommt etwas mehr Tofu und Kartoffeln.',
  },
  erdnuss_pfanne: {
    meal: 'a', n: 'Gemüse-Nudelpfanne mit Erdnusssoße', sie: 'mit Tofu', er: 'mit Rind', min: 25, kcal: [600, 720], tags: [],
    ing: [['pasta', 60, 90], ['brokkoli', 150, 150], ['paprika', 0.5, 0.5], ['karotten', 80, 80], ['erdnussmus', 15, 20], ['sojasauce', 0, 0], ['ingwer', 0.25, 0.25], ['olivenoel', 5, 5], ['tofu', 100, 0], ['rind', 0, 120]],
    steps: ['Nudeln kochen.', 'Tofu bzw. Rind getrennt scharf anbraten.', 'Gemüse mit Ingwer 6 Minuten braten. Erdnussmus mit Sojasauce und 80 ml heißem Wasser verrühren.', 'Nudeln und Soße zum Gemüse, auf zwei Teller, Tofu bzw. Rind darauf.'],
  },
  kichererbsen_eintopf: {
    meal: 'a', n: 'Kichererbsen-Spinat-Eintopf mit pochiertem Ei', min: 25, kcal: [470, 560], tags: ['hirn', 'ruhe'],
    ing: [['kichererbsen', 120, 120], ['spinat', 100, 100], ['dosentomaten', 200, 200], ['zwiebel', 0.5, 0.5], ['knoblauch', 0, 0], ['eier', 1, 1], ['joghurt', 50, 50], ['brot', 0, 50], ['gewuerze', 0, 0]],
    steps: ['Zwiebel und Knoblauch anschwitzen, Kreuzkümmel und Paprikapulver dazu.', 'Tomaten und Kichererbsen 10 Minuten köcheln, Spinat einrühren.', 'Mulden formen, Eier hineinschlagen, mit Deckel 6 Minuten stocken lassen.', 'Mit Joghurt servieren.'],
    hint: 'Für beide gleich. Verbraucht Spinat-Reste.',
  },
  blumenkohl_tahini: {
    meal: 'a', n: 'Gerösteter Blumenkohl mit Linsen und Tahini', er: 'mit Lachs', min: 35, kcal: [480, 620], tags: ['hirn', 'fisch'],
    ing: [['blumenkohl', 300, 300], ['berglinsen', 50, 50], ['tahini', 15, 15], ['zitrone', 0.25, 0.25], ['petersilie', 0.25, 0.25], ['olivenoel', 10, 10], ['gewuerze', 0, 0], ['lachs', 0, 125]],
    steps: ['Blumenkohl in Röschen mit Öl und Kreuzkümmel bei 220 °C 25 Minuten rösten. Er: Lachs die letzten 12 Minuten mit aufs Blech.', 'Linsen 20 Minuten kochen.', 'Tahini mit Zitronensaft und Wasser cremig rühren, alles anrichten, Petersilie darüber.'],
  },
  fajitas: {
    meal: 'a', n: 'Fajita-Wraps mit Paprika und Avocado', sie: 'mit Halloumi', er: 'mit Hähnchen', min: 25, kcal: [600, 720], tags: [],
    ing: [['wraps', 2, 2], ['paprika', 1, 1], ['zwiebel', 0.5, 0.5], ['avocado', 0.5, 0.5], ['tomaten', 1, 1], ['joghurt', 50, 50], ['zitrone', 0.25, 0.25], ['gewuerze', 0, 0], ['halloumi', 60, 0], ['haehnchen', 0, 150]],
    steps: ['Paprika und Zwiebel in Streifen mit Paprikapulver und Kreuzkümmel braten.', 'Halloumi und Hähnchen in Streifen getrennt braten.', 'Avocado mit Zitrone und Salz zerdrücken.', 'Wraps kurz erwärmen, alles einfüllen, mit Joghurt und Tomate.'],
  },
  linsen_shepherd: {
    meal: 'a', n: 'Linsen-Gemüse-Auflauf mit Kartoffelpüree', min: 60, kcal: [520, 680], tags: ['ruhe'],
    ing: [['berglinsen', 60, 80], ['karotten', 100, 100], ['lauch', 0.25, 0.25], ['champignons', 100, 100], ['dosentomaten', 100, 100], ['tomatenmark', 0, 0], ['kartoffeln', 250, 350], ['milch', 50, 70], ['gewuerze', 0, 0]],
    steps: ['Kartoffeln kochen und mit warmer Milch, Salz und Muskat zu Püree stampfen.', 'Karotten, Lauch und Pilze anbraten, Tomatenmark, Tomaten und vorgekochte Linsen dazu, 10 Minuten köcheln.', 'In eine Form füllen, Püree darauf verstreichen, bei 200 °C 20 Minuten goldbraun backen.'],
    hint: 'Für beide gleich. Wärmt an kalten Abenden – und lässt sich am Vortag vorbereiten.',
  },
  gemuese_tortilla: {
    meal: 'a', n: 'Flammkuchen-Wrap mit Lauch und Räuchertofu', er: 'mit Räucherlachs', min: 20, kcal: [440, 600], tags: ['fisch'],
    ing: [['wraps', 1, 2], ['frischkaese', 40, 50], ['lauch', 0.25, 0.25], ['zwiebel', 0.25, 0.25], ['raeuchertofu', 50, 0], ['raeucherlachs', 0, 60], ['romana', 0.5, 0.5]],
    steps: ['Ofen auf 220 °C vorheizen. Wraps dünn mit Frischkäse bestreichen.', 'Lauch und Zwiebel in feinen Ringen darauf, sie zusätzlich Räuchertofu-Würfel.', '8–10 Minuten knusprig backen. Er: Räucherlachs nach dem Backen darauf.', 'Mit Salat essen.'],
  },
  rotkohl_bowl: {
    meal: 'a', n: 'Warme Herbst-Bowl mit Rotkohl, Apfel und Walnüssen', sie: 'mit Ziegenkäse', er: 'mit Pute', min: 30, kcal: [560, 640], tags: ['hirn', 'ruhe'],
    ing: [['quinoa', 50, 70], ['rotkohl', 150, 150], ['apfel', 0.5, 0.5], ['walnuss', 20, 20], ['olivenoel', 10, 10], ['essig', 0, 0], ['honig', 0, 0], ['ziegenkaese', 40, 0], ['pute', 0, 120]],
    steps: ['Quinoa kochen.', 'Rotkohl in Streifen mit Öl 5 Minuten anbraten, Apfelwürfel dazu, mit Essig und Honig abschmecken.', 'Er: Pute in Streifen braten.', 'Alles in Schalen, Walnüsse darüber, sie mit Ziegenkäse.'],
    hint: 'Verbraucht den Rest Rotkohl aus der Buddha-Bowl.',
  },

  // ---------- Snacks ----------
  kichererbsen_snack: {
    meal: 's', n: 'Geröstete Kichererbsen', min: 30, kcal: [140, 140], tags: ['ruhe'],
    ing: [['kichererbsen', 60, 60], ['olivenoel', 3, 3], ['gewuerze', 0, 0]],
    steps: ['Kichererbsen trocken tupfen, mit Öl, Salz und Paprikapulver mischen.', 'Bei 200 °C 25–30 Minuten knusprig rösten. Hält in einer Dose drei Tage.'],
  },
  apfel_erdnuss: {
    meal: 's', n: 'Apfel mit Erdnussmus', min: 2, kcal: [160, 160], tags: ['ruhe'],
    ing: [['apfel', 1, 1], ['erdnussmus', 10, 10]],
    steps: ['Apfel in Spalten schneiden und ins Erdnussmus tunken.'],
  },
  sticks_hummus: {
    meal: 's', n: 'Gemüsesticks mit Hummus', min: 5, kcal: [120, 120], tags: [],
    ing: [['karotten', 100, 100], ['gurke', 0.25, 0.25], ['hummus', 40, 40]],
    steps: ['Karotten und Gurke in Sticks schneiden, mit Hummus essen.'],
  },
  edamame_snack: {
    meal: 's', n: 'Edamame mit Meersalz', min: 5, kcal: [130, 130], tags: [],
    ing: [['edamame', 100, 100], ['gewuerze', 0, 0]],
    steps: ['Edamame 3 Minuten kochen, abgießen, salzen. Warm oder kalt.'],
  },
  nussmix: {
    meal: 's', n: 'Kleine Nussmischung', min: 1, kcal: [170, 170], tags: ['hirn', 'ruhe'],
    ing: [['walnuss', 15, 15], ['mandeln', 10, 10]],
    steps: ['Eine kleine Handvoll – ungefähr so viel, wie in eine hohle Hand passt.'],
  },
  ei_snack: {
    meal: 's', n: 'Hartgekochtes Ei mit Gurke', min: 10, kcal: [100, 100], tags: ['hirn'],
    ing: [['eier', 1, 1], ['gurke', 0.25, 0.25], ['gewuerze', 0, 0]],
    steps: ['Ei 9 Minuten kochen, mit Salz und Pfeffer und ein paar Gurkenscheiben essen.', 'Tipp: gleich sechs Eier auf Vorrat kochen, sie halten eine Woche.'],
  },
  joghurt_lein: {
    meal: 's', n: 'Joghurt mit Leinsamen und Beeren', min: 2, kcal: [150, 150], tags: ['hirn'],
    ing: [['joghurt', 150, 150], ['beeren', 50, 50], ['leinsamen', 5, 5]],
    steps: ['Alles in eine Schale.'],
  },
  schoko_mandel: {
    meal: 's', n: 'Zartbitterschokolade mit Mandeln', min: 1, kcal: [150, 150], tags: ['ruhe'],
    ing: [['zartbitter', 15, 15], ['mandeln', 10, 10]],
    steps: ['Zwei Stück Schokolade und ein paar Mandeln – langsam essen.'],
  },
  kefir_zimt: {
    meal: 's', n: 'Kefir mit Zimt', min: 1, kcal: [130, 130], tags: ['ruhe'],
    ing: [['kefir', 200, 200], ['gewuerze', 0, 0]],
    steps: ['Kefir in ein Glas, eine Prise Zimt darüber.'],
  },
  orange_mandel: {
    meal: 's', n: 'Orange mit ein paar Mandeln', min: 2, kcal: [130, 130], tags: [],
    ing: [['orange', 1, 1], ['mandeln', 10, 10]],
    steps: ['Orange schälen, dazu eine kleine Handvoll Mandeln.'],
  },
});
