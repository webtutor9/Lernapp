/* Fach Französisch – Vocabulaire Leçon 1–8
   Vokabelzeilen: Französisch | Deutsch | Wortart (n = Nomen, v = Verb, a = Adjektiv, k = Kleinwort/Ausdruck) | Hinweis (optional)
   Abschnitte: E = Entrée, A/B/C = Atelier, L = Coin lecture, + = Extras (Kästen und «Mon dico personnel») */
(window.FAECHER = window.FAECHER || []).push({
  id: "franzoesisch",
  name: "Französisch",
  art: "vokabeln",
  parse: "fr",
  farbe: "#3a5a9b",
  kuerzel: "Fr",
  kopf: "titel",
  prefix: ["fr:", "franzoesisch:"],
  schreiben: "Französisch eintippen",
  platzhalter: "Französisch eintippen",
  schreibHinweis: "Nomen mit Artikel (un/une oder le/la). Akzente musst du nicht tippen.",
  akzentText: "Richtig – mit Akzenten:",
  standard: ["e", "1E", "1A", "1B", "2E", "2A", "2B", "2L", "3E", "3A", "3B", "4E", "4A", "4B", "4L", "5E", "5A", "5B", "5C", "6E", "6A", "6B", "6L", "7E", "7A", "7B", "8E", "8A", "8B", "8L"],
  einfuehrung: {
    titel: "So liest du das Vocabulaire",
    text: `Links steht das französische Wort, rechts die deutsche Bedeutung. Ein paar Zeichen und Abkürzungen solltest du kennen, weil sie wichtige Informationen enthalten.

**Nomen** lernst du immer mit Artikel. Am Artikel siehst du das Geschlecht: *un / le* = männlich (maskulin), *une / la* = weiblich (feminin). Steht *l'* davor (z. B. *l'argent*), verrät der Artikel das Geschlecht nicht, darum steht dann *(m.)* oder *(f.)* dabei. Achtung: Das Geschlecht ist oft anders als im Deutschen, z. B. *la mer* (das Meer), *le soleil* (die Sonne).

**Personen** stehen oft mit zwei Formen: *un élève / une élève*, *un vendeur / une vendeuse*.

**Adjektive** stehen mit der männlichen und der weiblichen Form: *vert / verte*, *délicieux / délicieuse*, *blanc / blanche*. Einige Adjektive haben drei Formen: *beau / bel / belle*, *nouveau / nouvel / nouvelle*, *vieux / vieil / vieille*. Die mittlere Form brauchst du vor männlichen Nomen mit Vokal: *un bel homme*.

**Verben** stehen im Infinitiv. *qn* (quelqu'un) heisst «jemanden/jemandem», *qc* (quelque chose) heisst «etwas»: *aider qn* = jdm. helfen, *dire qc à qn* = jdm. etw. sagen. Unregelmässige Verben haben im Buch einen gelben Kasten mit allen Formen. In der App steht diese Konjugation als Hinweis auf der Rückseite der Karteikarte.

**Plural** wird meist mit -s gebildet. Wörter auf -eau, -eu bekommen ein -x (*un gâteau – des gâteaux*), Wörter auf -al werden zu -aux (*un journal – des journaux*).

| Abkürzung | Bedeutung |
|---|---|
| m. | maskulin (un, le) |
| f. | feminin (une, la) |
| pl. | Plural |
| qn | quelqu'un – jemand(en/em) |
| qc | quelque chose – etwas |
| fam. | familier – Umgangssprache |
| inv. | invariable – unveränderlich |
| ne … pas | Verneinung umschliesst das Verb |

**Akzente:** é (accent aigu), è (accent grave), ê (accent circonflexe), ç (cédille). Beim Schreiben in der App musst du sie nicht tippen, sie werden dir aber in der Lösung angezeigt.`,
    quiz: [
      { f: "Welcher Artikel zeigt ein weibliches Nomen?", o: ["un", "le", "une", "l'"], r: 2, e: "une (und la) stehen vor weiblichen Nomen." },
      { f: "Was bedeutet «qn» bei einem Verb wie «aider qn»?", o: ["etwas", "jemanden / jemandem", "nichts", "irgendwo"], r: 1, e: "qn = quelqu'un = jemand." },
      { f: "Was bedeutet «qc»?", o: ["quelque chose – etwas", "quelqu'un – jemand", "quand – wann", "qui – wer"], r: 0, e: "qc = quelque chose = etwas." },
      { f: "Was ist der Plural von «un gâteau»?", o: ["des gâteaus", "des gâteaux", "des gâteau", "des gâtaux"], r: 1, e: "Wörter auf -eau bekommen im Plural ein -x." },
      { f: "Warum steht bei «l'argent» ein (m.)?", o: ["Weil es Plural ist", "Weil man es nicht zählen kann", "Weil l' das Geschlecht nicht zeigt", "Weil es umgangssprachlich ist"], r: 2, e: "Vor Vokal wird le/la zu l'. Darum muss das Geschlecht extra angegeben werden." },
      { f: "Was bedeutet «fam.»?", o: ["Familie", "umgangssprachlich", "feminin", "Fragewort"], r: 1, e: "fam. = familier, also Umgangssprache." }
    ]
  },
  lektionen: [
/* ---------------- Leçon 1 ---------------- */
{ nr: "1E", titel: "Leçon 1 · Entrée – Begrüssen", text: "In der ersten Lektion lernst du, wie man sich begrüsst und vorstellt. Unter Freunden sagt man «Salut !», zu Erwachsenen «Bonjour (madame/monsieur) !». Tipp aus dem Buch: Lerne Nomen immer mit ihrem Begleiter (un oder une).", v: `
une entrée|ein Eingang|n
et|und|k
Salut ! (fam.)|Hallo!; Tschüss!|k|unter Freunden, mit «une bise» (Küsschen) auf beide Wangen
Ça va ?|Wie geht's?|k|ç (cédille) wird wie [s] gesprochen
bien (adv.)|gut|k
merci|danke|k
Et toi ?|Und du?|k
super (inv.)|super; toll|a
À plus ! (fam.)|Bis später!|k
Bonjour !|Guten Tag!|k|für Erwachsene und Personen, die man nicht so gut kennt
je m'appelle|ich heisse|k
moi|ich (betont)|k
Moi, c'est …|Ich bin …|k
Au revoir !|Auf Wiedersehen!|k
oui|ja|k` },
{ nr: "1A", titel: "Leçon 1 · Atelier A – Willkommen in Paris", text: "Im Atelier A kommt Alice nach Paris. Du lernst die ersten Nomen mit un und une, das Verb être (sein) und avoir (haben) und wichtige kleine Wörter wie là, avec, pour, dans.", v: `
Bienvenue !|Willkommen!|k
en|in|k|Bienvenue en France !
une adresse|eine Adresse|n
un film|ein Film|n
une banane|eine Banane|n
une orange|eine Orange|n
un croissant|ein Croissant|n
une guitare|eine Gitarre|n
un parc|ein Park|n
une salade|ein Salat|n
un bonbon|ein Bonbon|n
une famille|eine Familie|n
une tomate|eine Tomate|n
un groupe|eine Gruppe; eine Band|n
un bus|ein Bus|n
un café|ein Kaffee; ein Café|n
un pull (fam.)|ein Pulli (ugs.)|n
un numéro|eine Nummer|n
Qu'est-ce que c'est ?|Was ist das?|k
c'est …|das ist …|k
un sac|eine Tasche|n
de/d'|von|k
être|sein|v|je suis, tu es, il/elle/on est, nous sommes, vous êtes, ils/elles sont
là|da; hier|k
Pardon.|Entschuldigung.|k
monsieur …|Herr …|k
pour|für|k
un cours|ein Kurs; eine Unterrichtsstunde|n
un cours de guitare|ein Gitarrenkurs|n
alors|also|k
le mercredi|mittwochs|k|mercredi (ohne Artikel) = am Mittwoch
il y a|es gibt|k
avec|mit|k
le samedi|samstags|k
cool (fam.)|cool (ugs.)|a
aussi|auch|k
d'accord !|einverstanden; o.k.|k
euh …|äh …|k
encore|noch|k
une place|ein Platz|n
Comment ?|Wie? (Fragewort)|k
Tu t'appelles comment ?|Wie heisst du?|k
C'est bon.|Das ist o.k.|k
dix|zehn|k
une minute|eine Minute|n
plus tard|später|k
une maison|ein Haus|n
à la maison|zu Hause; nach Hause|k
avoir|haben|v|j'ai, tu as, il a, elle a, on a, nous avons, vous avez, ils ont, elles ont · Achtung: ils ont [ilzɔ̃], aber ils sont [ilsɔ̃]
un problème|ein Problem|n
Tiens !|Schau mal!; Na, so was!|k
dans|in|k
un porte-monnaie/des porte-monnaies|ein Geldbeutel/Geldbeutel|n
un nom|ein Name|n
l'âge (m.)|das Alter|n
Tu as quel âge ?|Wie alt bist du?|k
un an|ein Jahr|n
J'ai 14 ans.|Ich bin 14 Jahre alt.|k
un anniversaire|ein Geburtstag|n
septembre (m.)|September|n
le 19 septembre|am 19. September|k
mais|aber|k
bientôt|bald|k
où|wo|k|Gleiche Aussprache: ou = oder, où = wo
Tu habites où ?|Wo wohnst du?|k
J'habite …|Ich wohne …|k
une rue|eine Strasse|n|Adresse: zuerst Hausnummer, dann Strasse: 31 rue de Lévis
une boulangerie|eine Bäckerei|n
un portable|ein Handy; ein Mobiltelefon|n
un numéro de portable|eine Handynummer|n
une idée|eine Idee|n
madame …|Frau …|k|klein geschrieben, ausser Mme und in der Anrede im Brief
mademoiselle …|Anrede für eine junge Frau|k
non|nein|k
une question|eine Frage|n
de … à|von … bis|k
à|in (bei Städten)|k|J'habite à Paris.` },
{ nr: "1B", titel: "Leçon 1 · Atelier B – Familie und Freunde", text: "Im Atelier B geht es um Familie, Freunde und Musik. Neu sind die Possessivbegleiter mon/ma/mes, ton/ta/tes, son/sa/ses. Achtung: le hip-hop hat ein h aspiré, darum kein Apostroph.", v: `
une histoire|eine Geschichte|n
Quelle histoire !|Was für eine Geschichte!|k
mon/ma/mes|mein/meine|k
Allô ?|Hallo? (am Telefon)|k|In Frankreich meldet man sich am Telefon mit «Allô ?», nicht mit dem Namen.
ton/ta/tes|dein/deine|k
les affaires (f., pl.)|die Sachen|n
un rendez-vous|eine Verabredung; ein Treffen|n
un père|ein Vater|n
Quoi ?|Was?|k
qui ?|wer?|k
C'est qui ?|Wer ist das?|k
avoir rendez-vous avec qn|eine Verabredung mit jdm. haben; sich mit jdm. treffen|v
ce sont|das sind|k
son/sa/ses|sein/seine; ihr/ihre|k
pourquoi|warum|k
parfois|manchmal|k
être dans la lune|zerstreut sein|v
…, non ?|…, nicht wahr?; … oder?|k
un fils|ein Sohn|n
toujours|immer|k
un copain/une copine (fam.)|ein Freund/eine Freundin|n
voilà|da ist; da sind|k
attends …|warte …|k
un chien|ein Hund|n
il s'appelle|er heisst|k
le hip-hop|der Hip-Hop|n|h aspiré: le hip-hop (kein Apostroph)
une guitare électrique|eine E-Gitarre|n
le rock|die Rockmusik|n
la musique|die Musik|n
ensemble|gemeinsam; zusammen|k
sympa (fam.)|nett|a
une surprise|eine Überraschung|n
ça|das|k|Kurzform von «cela»
une tarte|ein Kuchen|n
le chocolat|die Schokolade|n
une tarte au chocolat|ein Schokoladenkuchen|n
une spécialité|eine Spezialität; eine Besonderheit|n
un prof/une prof (fam.)|ein Lehrer/eine Lehrerin|n|= un professeur/une professeure
une fille|ein Mädchen|n
un téléphone|ein Telefon|n
mars (m.)|März|n
mai (m.)|Mai|n` },
{ nr: "1+", titel: "Extras · Monate, Zahlen 0–31, Schule, Tiere, Musik", text: "Aus den Kästen und aus «Mon dico personnel» (Seiten 187–188). Il y a fragt, was oder wer an einem Ort ist (Il y a un chien dans le parc). Être sagt, wo etwas ist (Le chien de Maxime est dans le parc).", v: `
janvier (m.)|Januar|n
février (m.)|Februar|n
avril (m.)|April|n
juin (m.)|Juni|n
juillet (m.)|Juli|n
août (m.)|August|n
octobre (m.)|Oktober|n
novembre (m.)|November|n
décembre (m.)|Dezember|n
zéro|0|k
un|1|k
deux|2|k
trois|3|k
quatre|4|k
cinq|5|k
six|6|k
sept|7|k
huit|8|k
neuf|9|k
onze|11|k
douze|12|k
treize|13|k
quatorze|14|k
quinze|15|k
seize|16|k
dix-sept|17|k
dix-huit|18|k
dix-neuf|19|k
vingt|20|k
vingt-et-un|21|k
vingt-deux|22|k
trente|30|k
trente-et-un|31|k
un stylo|ein Kugelschreiber|n
un cahier|ein Heft|n
une règle|ein Lineal|n
un crayon|ein Bleistift|n
une gomme|ein Radiergummi|n
un effaceur|ein Tintenkiller|n
une trousse|ein Mäppchen|n
un lecteur MP3|ein MP3-Player|n
une calculatrice|ein Taschenrechner|n
un hamster|ein Hamster|n
une perruche|ein Wellensittich|n
un serpent|eine Schlange|n
un cochon d'Inde|ein Meerschweinchen|n
un lapin|ein Kaninchen|n
le R&B|R&B (Musik)|n
le punk|Punk (Musik)|n
le pop|Pop (Musik)|n
le heavy metal|Heavy Metal|n` },
/* ---------------- Leçon 2 ---------------- */
{ nr: "2E", titel: "Leçon 2 · Entrée – Mein Quartier, meine Wohnung", text: "Lektion 2 zeigt das Quartier und die Wohnung von Maxime. Achtung: une pièce ist das allgemeine Wort für Zimmer, une chambre ist ein Schlafzimmer. Nomen auf -eau bilden den Plural mit -x: un bureau – des bureaux.", v: `
chez|bei|k
un quartier|ein (Stadt-)Viertel|n
un endroit préféré|ein Lieblingsort|n
après|nach; danach|k
le skate|das Skateboardfahren; das Skateboard|n
ou|oder|k|Gleiche Aussprache: ou = oder, où = wo
ou bien|oder auch|k
un centre commercial|ein Einkaufszentrum|n
un magasin|ein Geschäft; ein Laden|n
un cinéma (fam.: un ciné)|ein Kino|n
souvent|oft|k
un restaurant|ein Restaurant|n
C'est chez moi.|Das ist mein Zuhause.; Da wohne ich.|k
entrer|eintreten; hereinkommen|v
habiter|wohnen|v
un appartement|eine Wohnung|n
une pièce|ein Zimmer|n
une armoire|ein Schrank|n
un lit|ein Bett|n
un bureau|hier: ein Schreibtisch|n|Plural: des bureaux
les toilettes (f., pl.)|die Toilette|n
une salle de bains|ein Badezimmer|n
une chambre|ein Schlafzimmer|n|Das allgemeine Wort für «Zimmer» ist une pièce.
un enfant|ein Kind|n|Bindung: deux‿enfants
les parents (m., pl.)|die Eltern|n
un salon|ein Wohnzimmer|n
une cuisine|eine Küche|n` },
{ nr: "2A", titel: "Leçon 2 · Atelier A – Wo ist mein Handy?", text: "Im Atelier A sucht Maxime sein Handy. Du lernst Familienwörter (une mère, une sœur, un frère), Fragen mit Est-ce que … ? und Qu'est-ce que … ? und viele Verben auf -er wie chercher, travailler, arriver, regarder, trouver.", v: `
un matin|ein Morgen|n
chercher qn/qc|jdn./etw. suchen|v
quelque chose|etwas|k|Abkürzung: qc
travailler|arbeiten|v
aujourd'hui|heute|k
une commande|eine Bestellung|n
une sœur|eine Schwester|n
saouler (fam.)|nerven (ugs.)|v
des lunettes (f., pl.)|eine Brille|n
arrêter|aufhören|v
une mère|eine Mutter|n
arriver|kommen; ankommen|v
Est-ce que … ?|Frageformel|k
On y va !|Gehen wir!; Auf geht's!|k
tout|alles|k
un frère|ein Bruder|n
Je ne sais pas.|Keine Ahnung.; Ich weiss (es) nicht.|k
Zut ! (fam.)|Mist! (ugs.)|k
sur|auf; über|k
un garçon|ein Junge|n
être en retard|zu spät kommen; spät dran sein|v
Qu'est-ce que … ?|Was …?|k
maman (f.)|Mama; Mutti|n
regarder qc|etw. betrachten; etw. ansehen; etw. anschauen|v
sous|unter|k
trouver qc|etw. finden|v
une clé|ein Schlüssel|n
rigoler (fam.)|lachen|v
une photo|ein Foto|n
un mouton|ein Schaf|n
compter qc|etw. zählen|v|Das «p» in compter spricht man nicht.
compter les moutons|Schäfchen zählen|v
plus|plus|k
Ça fait …|Das macht …|k
ils s'appellent|sie heissen|k` },
{ nr: "2B", titel: "Leçon 2 · Atelier B – Eine Partie Ping-Pong", text: "Im Atelier B spielen die Freunde Tischtennis. Neu ist das Verb faire mit seinen unregelmässigen Formen (nous faisons, vous faites, ils font) und die Begleiter notre/nos, votre/vos, leur/leurs.", v: `
une partie|eine Partie; ein Spiel|n
le ping-pong|(das) Tischtennis|n
présenter qn/qc à qn|jdm. jdn./etw. vorstellen|v
une classe|eine Klasse; ein Klassenzimmer|n
de/d'|aus|k|Alice est de Marseille.
faire qc|etw. machen|v|je fais, tu fais, il/elle/on fait, nous faisons, vous faites, ils/elles font
votre/vos|euer/eure; Ihr/Ihre|k
avoir de la chance|Glück haben|v
notre/nos|unser/unsere|k
sauf|ausser|k
un prof d'anglais/une prof d'anglais|ein Englischlehrer/eine Englischlehrerin|n
grave|schlimm; daneben (ugs.)|a
avec nous|mit uns|k
donner qc à qn|jdm. etw. geben|v
une balle|ein (kleiner) Ball|n
terminer qc|etw. beenden; etw. fertigstellen|v
leur/leurs|ihr/ihre (von mehreren)|k
une fille|eine Tochter|n
maintenant|jetzt|k
aimer qn/qc|jdn./etw. lieben; jdn./etw. mögen|v
adorer qn/qc|jdn./etw. sehr gerne mögen; jdn./etw. lieben|v
trop (fam.)|voll (ugs.)|k|verstärkt ein Adjektiv: Elle est trop cool.
quitter qn/qc|jdn./etw. verlassen|v
raconter qc à qn|jdm. etw. erzählen|v
une blague|ein Scherz; ein Witz|n
faire la tête (fam.)|schmollen; sauer sein (ugs.)|v
triste|traurig|a
penser à qn/qc|an jdn./etw. denken|v
rentrer|zurückkommen; nach Hause gehen|v
discuter|diskutieren; sich unterhalten|v
montrer qc à qn|jdm. etw. zeigen|v
une chasse au trésor|eine Schnitzeljagd|n
détester qc|etw. (überhaupt) nicht mögen; etw. hassen|v
en français|auf Französisch|k` },
{ nr: "2L", titel: "Leçon 2 · Coin lecture", text: "Wörter aus dem Lesetext am Ende von Lektion 2: eine Nachricht im Umschlag, die Bibliothek, der Bahnhof und ein Dorf.", v: `
une table|ein Tisch|n
une enveloppe|ein Umschlag; ein Briefumschlag|n
une dame|eine Dame; eine Frau|n
une bibliothèque|eine Bibliothek; eine Bücherei|n
un kiosque|ein Kiosk|n
un message|eine Nachricht|n
une solution|eine Lösung|n
un papier|Papier|n
à mon avis|meiner Meinung nach|k
une gare|ein Bahnhof|n
Bravo !|Bravo!|k
un livre|ein Buch|n
une BD/des BD|ein Comic/Comics|n|BD = bande dessinée
devant|vor (örtlich)|k
un village|ein Dorf|n` },
{ nr: "2+", titel: "Extras · Zahlen 32–69, Familie, Zimmer, Quartier", text: "Aus den Kästen und aus «Mon dico personnel» (Seiten 193–194).", v: `
trente-deux|32|k
trente-cinq|35|k
trente-huit|38|k
quarante|40|k
quarante-et-un|41|k
quarante-six|46|k
cinquante|50|k
cinquante-et-un|51|k
cinquante-quatre|54|k
soixante|60|k
soixante-et-un|61|k
soixante-sept|67|k
mon père|mein Vater|k
ma mère|meine Mutter|k
mon frère|mein Bruder|k
ma sœur|meine Schwester|k
mes grands-parents|meine Grosseltern|k
mon grand-père|mein Grossvater|k
ma grand-mère|meine Grossmutter|k
mon demi-frère|mein Halbbruder|k
ma demi-sœur|meine Halbschwester|k
Je suis fils/fille unique.|Ich bin Einzelkind.|k
un poster|ein Poster|n
un ordinateur portable|ein Laptop|n
une tablette|ein Tablet|n
des étagères (f., pl.)|ein Regal|n
une lampe|eine Lampe|n
un tapis|ein Teppich|n
une figurine|eine (kleine) Figur|n
un terrain de foot|ein Fussballplatz|n
une maison des jeunes|ein Jugendhaus|n
un club de foot|ein Fussballverein|n
un club sportif|ein Sportverein|n
une école de musique|eine Musikschule|n
un glacier|eine Eisdiele|n` },
/* ---------------- Leçon 3 ---------------- */
{ nr: "3E", titel: "Leçon 3 · Entrée – Im Collège", text: "Die dritte Lektion spielt im Collège, der französischen Schule für 11- bis 14-Jährige. Du lernst die Räume der Schule kennen (la cantine, la cour, le CDI, l'infirmerie) und die Leute dort (un élève, un surveillant, une documentaliste). Achtung: un gymnase ist eine Turnhalle, das Gymnasium heisst le lycée.", v: `
un collège|weiterführende Schule für 11- bis 14-Jährige|n
plusieurs (inv.)|mehrere|a
être en classe de 4e|in der 8. Klasse sein|v
un lycée|ein Gymnasium; ein Lycée|n
midi (m.)|Mittag|n
à midi|um 12 Uhr mittags|k
un élève/une élève|ein Schüler/eine Schülerin|n
avoir faim|Hunger haben|v
une cantine|eine Kantine; eine Mensa|n
une récré (fam.)|eine Pause (in der Schule)|n|une récré = une récréation
à la récré|in der Pause|k
une salle de classe|ein Klassenzimmer|n
jouer|spielen|v
une cour|ein (Schul-)Hof|n|être dans la cour
quand|wenn; als (zeitlich)|k
malade|krank|a
la permanence|eine Freistunde, in der die Schüler beaufsichtigt werden|n
être en permanence|eine Freistunde haben|v
un surveillant/une surveillante|eine Aufsichtsperson|n
les devoirs (m., pl.)|die Hausaufgaben|n
un CDI|Dokumentations- und Informationsstelle einer Schule|n|CDI = centre de documentation et d'information
un documentaliste/une documentaliste|ein Schulbibliothekar/eine Schulbibliothekarin|n
un ordinateur|ein Computer|n
une piscine|ein Schwimmbad; ein Pool|n
un gymnase|eine Turnhalle|n|nicht «Gymnasium» (= le lycée)
le sport|der Sport|n
une infirmerie|eine Krankenstation|n
un infirmier/une infirmière|ein Krankenpfleger/eine Krankenpflegerin|n
aider qn|jdm. helfen|v
un voisin/une voisine|ein Nachbar/eine Nachbarin|n
une école|eine Schule|n
un lieu/des lieux|ein Ort/Orte|n` },
{ nr: "3A", titel: "Leçon 3 · Atelier A – Der Schultag", text: "Im Atelier A erzählt Célia von ihrem Schultag. Du lernst die Uhrzeit (huit heures moins le quart, une heure et demie, Il est quelle heure ?), Schulfächer und wichtige Verben wie lire, écrire und dire. Achte auf die Bindung: deux‿heures, trois‿heures.", v: `
une journée|ein Tag|n
lundi (m.)|Montag; am Montag|n
une heure|eine Stunde|n
huit heures moins le quart|viertel vor acht; dreiviertel acht|k
être de mauvaise humeur|schlechte Laune haben|v
premier/première|erste(r,s)|a
une matière|ein (Schul-)Fach|n
la matière préférée|das Lieblingsfach|n
dix heures dix|zehn nach zehn|k
les SVT (f., pl.)|Biologie; Naturkunde|n|SVT = sciences de la vie et de la terre
lire qc|etw. lesen|v|je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent
quarantième|vierzigster, vierzigste, vierzigstes|a
un texte|ein Text|n
un volcan|ein Vulkan|n
C'est l'horreur !|Es ist schrecklich!|k
écrire qc à qn|jdm. etw. schreiben|v|j'écris, tu écris, il écrit, nous écrivons, vous écrivez, ils écrivent
un SMS|eine SMS|n
rêver (de qc)|(von etw.) träumen|v
Je rêve !|Ich spinne!|k
Il est midi moins vingt.|Es ist zwanzig vor zwölf.|k
dire qc (à qn)|(jdm.) etw. sagen|v|je dis, tu dis, il dit, nous disons, vous dites, ils disent
un mot|ein Wort|n
une heure de colle|eine Stunde Nachsitzen|n
une heure et quart|viertel nach eins; viertel zwei|k
une heure et demie|halb zwei|k
le français|Französisch|n
proposer qc à qn|jdm. etw. vorschlagen|v
une sortie|ein Ausflug; ein (Theater-)Besuch|n
un théâtre|ein Theater|n
une scène|eine Szene|n
cinq heures vingt-cinq|fünf Uhr fünfundzwanzig|k
la fin|das Ende; der Schluss|n|à la fin = zum Schluss
une demi-heure|eine halbe Stunde|n
demain|morgen|k
À demain !|Bis morgen!|k
parce que|weil|k
Il est quelle heure ?|Wie viel Uhr ist es?; Wie spät ist es?|k
s'il te plaît|bitte (wenn man jemanden duzt)|k
s'il vous plaît|bitte (wenn man jemanden siezt)|k
Tu as l'heure ?|Kannst du mir die Uhrzeit sagen?|k
minuit (m.)|Mitternacht; 12 Uhr nachts|n
… à quelle heure ?|Um wie viel Uhr …?|k
commencer|anfangen; beginnen|v|je commence, nous commençons, ils commencent
… de quelle heure à quelle heure ?|Von wann bis wann …?|k
un quart d'heure|eine Viertelstunde|n
un emploi du temps|ein Stundenplan|n
le prof principal/la prof principale|der Klassenlehrer/die Klassenlehrerin|n
un jour|ein Tag|n
les maths (f., pl.) (fam.)|Mathe|n
l'allemand (m.)|Deutsch (Sprache)|n
l'anglais (m.)|Englisch (Sprache)|n` },
{ nr: "3B", titel: "Leçon 3 · Atelier B – Nach der Schule", text: "Atelier B spielt nach der Schule. Neu sind die Verneinungen ne … pas und ne … plus und die unregelmässigen Verben aller, comprendre, prendre und apprendre. Achtung: Eine Klassenarbeit schreiben heisst «faire/avoir une interro».", v: `
un arrêt de bus|eine Bushaltestelle|n
parler|sprechen|v
ne … plus|nicht mehr|k
ne … pas|nicht|k
Ça ne va pas trop.|Es geht mir nicht so gut.|k
un mot|hier: ein Eintrag (im Carnet)|n
un carnet de correspondance|Heft für Mitteilungen zwischen Eltern und Lehrern|n
très|sehr|k
un soir|ein Abend|n
Bof ! (fam.)|Na ja.; Ach.|k
juste|nur; bloss|k
pendant|während (Präposition)|k
C'est nul ! (fam.)|Das ist blöd!|k
aller|gehen; fahren|v|je vais, tu vas, il va, nous allons, vous allez, ils vont
écouter qn/qc|jdm. zuhören; etw. anhören|v
comprendre qc|etw. verstehen|v|je comprends, tu comprends, il comprend, nous comprenons, vous comprenez, ils comprennent
plein de|viel/viele; jede Menge|k
prendre qc|etw. nehmen|v|je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent
un repas|ein Essen; eine Mahlzeit|n
le temps|die Zeit|n
avoir le temps|Zeit haben|v
une année|ein Jahr|n
l'année prochaine (f.)|nächstes Jahr|k
une interro (fam.)|eine Klassenarbeit|n|une interro = une interrogation
le week-end|am Wochenende|k
une bêtise|eine Dummheit|n
en famille|mit der Familie|k
peut-être|vielleicht|k
aller chez qn|zu jdm. (nach Hause) gehen|v
un après-midi|ein Nachmittag|n
apprendre qc|etw. lernen; etw. erfahren|v|j'apprends, tu apprends, il apprend, nous apprenons, vous apprenez, ils apprennent
une chose|eine Sache; ein Ding|n
avant|vor (zeitlich)|k
Pas de panique !|Keine Panik!|k
Bon, …|Gut, …; Also, …|k
préparer qc|etw. vorbereiten|v
déjà|schon|k
une semaine|eine Woche|n
par semaine|pro Woche; wöchentlich|k` },
{ nr: "3+", titel: "Extras · Wochentage, Ordnungszahlen, Fächer", text: "Diese Wörter stammen aus den Kästen und aus «Mon dico personnel» (Seiten 200–202). Die Wochentage sind im Französischen alle männlich: le lundi heisst «montags».", v: `
mardi (m.)|Dienstag|n
mercredi (m.)|Mittwoch|n
jeudi (m.)|Donnerstag|n
vendredi (m.)|Freitag|n
samedi (m.)|Samstag|n
dimanche (m.)|Sonntag|n
le lundi|montags|k
Aujourd'hui, c'est mercredi.|Heute ist Mittwoch.|k
le deuxième/la deuxième|der/die zweite|a
le troisième/la troisième|der/die dritte|a
le quatrième/la quatrième|der/die vierte|a
le cinquième/la cinquième|der/die fünfte|a
le neuvième/la neuvième|der/die neunte|a
le onzième/la onzième|der/die elfte|a|le onzième (ohne Apostroph)
le vingt-et-unième|der einundzwanzigste|a
l'histoire-géo (f.)|Geschichte und Erdkunde|n
l'éducation musicale (f.)|Musik (Schulfach)|n
les arts plastiques (m., pl.)|Kunst (Schulfach)|n
l'E.P.S. (f.)|Sport (Schulfach)|n|EPS = éducation physique et sportive
la technologie|Technik (Schulfach)|n
la physique-chimie|Physik und Chemie|n
le latin|Latein|n
le grec|Griechisch|n
l'espagnol (m.)|Spanisch|n
l'informatique (f.)|Informatik|n
aller au cours de guitare|zum Gitarrenunterricht gehen|v
aller à l'entraînement de foot|zum Fussballtraining gehen|v
Il est dix-huit heures trente.|Es ist 18.30 Uhr.|k` },
/* ---------------- Leçon 4 ---------------- */
{ nr: "4E", titel: "Leçon 4 · Entrée – Freizeit", text: "Lektion 4 dreht sich um Freizeit und Sport. Mit faire du/de la/de l' sagst du, was du machst: faire du foot (Fussball spielen), faire de la musique (musizieren), faire de l'athlétisme (Leichtathletik machen).", v: `
un loisir|eine Freizeitbeschäftigung; ein Hobby|n|les loisirs = die Freizeit
un jeune/une jeune|ein Jugendlicher/eine Jugendliche|n
l'athlétisme (m.)|die Leichtathletik|n
faire du foot|Fussball spielen|v|faire du/de la/de l' + Sport
faire de l'athlétisme|Leichtathletik machen|v
un club|ein Klub; ein Verein|n
le foot|der Fussball (als Sportart)|n
une équipe|eine Mannschaft; ein Team|n
C'est pas son truc. (fam.)|Das ist nicht sein/ihr Ding.|k
la lecture|das Lesen|n
la photo|die Fotografie (als Hobby)|n
le handball|Handball|n
le shopping|der Einkaufsbummel; das Einkaufen|n
le violon|die Violine; die Geige|n
le vélo|das Fahrrad; das Fahrradfahren|n
une console|eine Spielkonsole|n
traîner (fam.)|abhängen (ugs.)|v
une vidéo|ein Video|n
la télé (fam.)|der Fernseher|n
regarder la télé|fernsehen|v` },
{ nr: "4A", titel: "Leçon 4 · Atelier A – Ärger im Team", text: "Im Atelier A gibt es Ärger in Yassines Fussballmannschaft. Neu sind die Verben appeler, dormir, partir und sortir, und Ausdrücke für Gefühle wie être en colère (wütend sein) oder avoir raison (Recht haben).", v: `
un entraînement|ein Training|n
un joueur/une joueuse|ein Spieler/eine Spielerin|n
appeler qn|jdn. anrufen; jdn. rufen|v|j'appelle, tu appelles, il appelle, nous appelons, vous appelez, ils appellent
en bas de|unten; unterhalb von|k
encore|(schon) wieder|k
stresser qn|jdn. stressen|v
à cause de qn/qc|einer Person/einer Sache wegen|k
une note|eine Note|n
être d'accord|einverstanden sein|v
(ne …) pas trop|nicht wirklich|k
un match|ein Spiel; ein Wettkampf|n
contre|gegen|k
en ce moment|im Augenblick; zurzeit|k
avoir envie de faire qc|Lust haben, etwas zu tun|v
dormir|schlafen|v|je dors, tu dors, il dort, nous dormons, vous dormez, ils dorment
beaucoup|viel|k
partir|weggehen; aufbrechen|v|je pars, tu pars, il part, nous partons, vous partez, ils partent
C'est la catastrophe !|Das ist eine Katastrophe!|k
rater qc (fam.)|etw. verpassen; etw. nicht schaffen|v
une passe|ein Pass (beim Sport)|n
une faute|ein Fehler; ein Foul|n
un entraîneur|ein Trainer|n
être en colère|wütend sein|v
ne … pas du tout|überhaupt nicht|k
C'est la honte ! (fam.)|So eine Blamage!|k
un vestiaire|eine Umkleidekabine|n
manquer|fehlen|v
trop|zu (zu viel)|k
un autre/une autre|ein anderer/eine andere|k
avoir raison|Recht haben|v
(Je suis) désolé/désolée.|Es tut mir leid.|k
sortir|hinausgehen; ausgehen|v|je sors, tu sors, il sort, nous sortons, vous sortez, ils sortent
rester|bleiben|v
sans|ohne|k
un corres/une corres (fam.)|ein Brieffreund/eine Brieffreundin; ein Austauschpartner/eine Austauschpartnerin|n
une réponse|eine Antwort|n
Bises/Bisous|Küsschen (Gruss am Ende einer Nachricht)|k` },
{ nr: "4B", titel: "Leçon 4 · Atelier B – Fragen und Probleme", text: "Im Atelier B lernst du Fragen mit est-ce que: Pourquoi est-ce que … ?, Quand est-ce que … ?, Comment est-ce que … ? Ausserdem geht es um Mobbing (le harcèlement) und soziale Netzwerke. Achtung: le héros hat ein h aspiré, darum kein Apostroph.", v: `
à côté de|neben|k
une discussion|eine Diskussion; ein Gespräch|n
avoir l'air|aussehen|v
Ça va mieux.|Es geht besser.|k
pleurer|weinen|v
un bébé|ein Baby; ein Säugling|n
Hein ? (fam.)|Was?; Hä?|k
Pourquoi est-ce que … ?|Warum …?|k
Quand est-ce que … ?|Wann …?|k
préférer faire qc|vorziehen, etw. zu tun; etw. lieber tun|v
vers qn/qc|auf jdn./etw. zu|k
un banc de touche|eine Ersatzbank|n
Quelle photo ?|Welches Foto?|k
sortir qc de qc|etw. herausholen aus|v
hier|gestern|k
Comment est-ce que … ?|Wie …?|k
si|wenn; falls|k
Tout va bien !|Alles in Ordnung!|k
Quel blaireau !|Was für eine Null!|k
un héros/une héroïne|ein Held/eine Heldin|n|le héros (h aspiré, kein Apostroph), aber l'héroïne
craquer|die Nerven verlieren; zusammenbrechen|v
C'est bon.|Es ist gut.|k
un réseau/des réseaux|ein Netz/Netze|n
un réseau social|ein soziales Netzwerk|n|Plural: des réseaux sociaux
C'est grave !|Das ist schlimm!|k
le harcèlement|das Mobbing|n|h aspiré: le harcèlement
Ça sonne.|Es klingelt.|k
parler à qn|mit jdm. sprechen|v
Internet (m.)|das Internet|n|steht ohne Artikel` },
{ nr: "4L", titel: "Leçon 4 · Coin lecture – Der Match", text: "Im Coin lecture geht es um den grossen Match. Viele Wörter beschreiben Stimmung und Publikum: tout le monde (alle), crier (schreien), gagner (gewinnen), faire la fête (feiern).", v: `
tous|alle|k
depuis|seit|k
un commentaire|ein Kommentar|n
être à côté de ses pompes (fam.)|durcheinander sein; neben der Spur sein|v
C'est le stress.|Ich habe Stress.|k
partout|überall|k
la participation|die Teilnahme|n
dans quinze jours|in vierzehn Tagen|k
Je m'en occupe.|Ich kümmere mich darum.|k
il faut faire qc|man muss etw. tun|k
un plan|ein Plan|n
expliquer qc à qn|jdm. etw. erklären|v
le silence|die Ruhe; die Stille|n
tout le monde|alle; jeder|k
un fan/une fan|ein Fan|n
être debout|stehen|v
un signe|ein Zeichen|n
retirer qc|etw. ausziehen|v
un t-shirt|ein T-Shirt|n
tomber|fallen|v
C'est fini.|Es ist vorbei.|k
le public|das Publikum; die Zuschauer|n
crier|schreien|v
Allez !|Los!|k
gagner (qc)|(etw.) gewinnen|v
autre|anderer/andere/anderes|a
une fête|ein Fest; eine Party|n
faire la fête|feiern|v
quand même|trotzdem; doch|k` },
{ nr: "4+", titel: "Extras · Fragen und Sportarten", text: "Fragen mit est-ce que und Sportarten aus «Mon dico personnel» (Seite 207).", v: `
Pourquoi est-ce que tu es triste ?|Warum bist du traurig?|k
Qu'est-ce qu'on fait ce soir ?|Was machen wir heute Abend?|k
Où est-ce que vous allez samedi ?|Wohin geht ihr am Samstag?|k
À quelle heure est-ce que tu pars ?|Um wie viel Uhr gehst du los?|k
Est-ce que tu as envie d'aller au cinéma ?|Hast du Lust, ins Kino zu gehen?|k
le basket|Basketball|n
la danse|der Tanz; das Tanzen|n
le rugby|Rugby|n
le roller|Inlineskaten|n
le tennis|Tennis|n
le judo|Judo|n
la natation|das Schwimmen|n
la batterie|das Schlagzeug|n
le skate|Skateboard fahren|n
le piano|das Klavier|n
l'équitation (f.)|das Reiten|n` },
/* ---------------- Leçon 5 ---------------- */
{ nr: "5E", titel: "Leçon 5 · Entrée – Paris", text: "Lektion 5 führt nach Paris. Du lernst viele Adjektive, um Orte zu beschreiben (célèbre, magnifique, immense, moche) und Wendungen für Wünsche: j'aimerais …, je voudrais …, Ça me plaît.", v: `
la magie|die Magie|n
un touriste/une touriste|ein Tourist/eine Touristin|n
touristique|touristisch|a
traverser qc|etw. überqueren; etw. durchqueren|v
un compagnon/une compagne|ein Lebensgefährte/eine Lebensgefährtin|n
un opéra|ein Opernhaus; eine Oper|n
un musée|ein Museum|n
une pyramide|eine Pyramide|n
un guide/une guide|ein Reiseführer/eine Reiseführerin|n
célèbre|berühmt|a
bizarre|komisch; merkwürdig|a
romantique|romantisch|a
fantastique|fantastisch; toll|a
magnifique|herrlich; wunderschön|a
moche (fam.)|hässlich|a
moderne|modern|a
immense|enorm; riesig|a
Ça me plaît.|Das gefällt mir.|k
Ça ne me plaît pas.|Das gefällt mir nicht.|k
j'aimerais faire qc|ich würde gern (etw. tun)|k
je voudrais … (+ infinitif)|ich möchte … (+ Infinitiv)|k` },
{ nr: "5A", titel: "Leçon 5 · Atelier A – Mit der Metro", text: "Im Atelier A planen Léa und Yann ihren Tag in Paris. Neu sind vouloir und pouvoir (wollen, können) und alles, was du in der Metro brauchst: une ligne, une station, changer, en direction de, Vous descendez …", v: `
le petit-déjeuner|das Frühstück|n
prendre le petit-déjeuner|frühstücken|v
tard|spät|k
une réunion|eine Versammlung; eine Besprechung|n
l'apéro (m.)|der Aperitif|n
vouloir|wollen|v|je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent
pouvoir|können|v|je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent
grand/grande|gross|a
un moment|ein Moment|n
marrant/marrante (fam.)|witzig; lustig|a
demander qc à qn|jdn. nach etw. fragen; jdn. um etw. bitten|v
on aimerait faire qc|wir würden gern etw. tun|k
visiter qc|etw. besichtigen|v|Je visite le Louvre. Aber: Je rends visite à ma cousine.
une exposition|eine Ausstellung|n|kurz: l'expo
important/importante|wichtig; bedeutend|a
un manga|ein Manga|n
loin|weit (weg)|k
petit/petite|klein|a
le métro|die Metro; die U-Bahn|n
en métro|mit der U-Bahn|k
un changement|ein Wechsel|n
Il y a juste un petit changement.|Man muss nur einmal kurz umsteigen.|k
une ligne|eine (Verkehrs-)Linie|n
changer|wechseln; umsteigen|v
direct/directe|direkt|a
jusqu'à|bis|k
un trajet|eine Strecke|n
Quelle ligne est-ce que je prends pour aller à … ?|Welche Linie muss ich nehmen, um nach … zu kommen?|k
une station|eine Station; eine Haltestelle|n
la direction|die Richtung|n
en direction de|in Richtung|k
Vous descendez …|Sie steigen aus …|k
un terminus|eine Endstation|n` },
{ nr: "5B", titel: "Leçon 5 · Atelier B – Haltet den Dieb!", text: "Im Atelier B wird in Paris etwas gestohlen. Neu sind die Verben auf -dre (attendre, descendre, entendre) und Richtungsangaben: tout droit, à gauche, à droite, tourner. Achtung: Das Passé composé von descendre wird mit être gebildet.", v: `
flipper (fam.)|ausflippen; eine Riesenangst haben|v
rassurer qn|jdn. beruhigen|v
Youpi !|Hurra!; Juhu!|k
une aventure|ein Abenteuer|n
attendre qn|auf jdn. warten; jdn. erwarten|v|j'attends, tu attends, il attend, nous attendons, vous attendez, ils attendent · passé composé: j'ai attendu
descendre|hinuntergehen; aussteigen|v|je descends … nous descendons · passé composé: je suis descendu(e)
entendre qn/qc|jdn./etw. hören|v|Konjugation wie attendre
un rire|ein Lachen|n
passer qc|etw. verbringen|v
Quelle aventure !|Was für ein Abenteuer!|k
un batobus|Boot als Verkehrsmittel auf der Seine|n
mauvais/mauvaise|schlecht|a
tout droit|geradeaus|k
puis|dann|k
à gauche|(nach) links|k
presque|fast; beinahe|k
un bateau/des bateaux|ein Boot/Boote; ein Schiff/Schiffe|n
ici|hier; hierher|k
bien vouloir|gerne (wollen/mögen)|v
marcher|gehen; laufen|v
joli/jolie|hübsch; nett|a
voler qc à qn|jdm. etw. stehlen|v
tout à coup|plötzlich|k
une femme|eine Frau|n
un homme|ein Mann|n
vite|schnell (Adverb)|k
partir à la poursuite de qn|jds. Verfolgung aufnehmen|v
un voleur/une voleuse|ein Dieb/eine Diebin|n
Au voleur !|Haltet den Dieb!|k
hésiter|zögern|v
une personne|eine Person|n
avoir peur|Angst haben|v
à droite|(nach) rechts|k
tourner|abbiegen|v
un carrefour|eine Kreuzung|n
en face de qc|gegenüber von etw.|k` },
{ nr: "5C", titel: "Leçon 5 · Atelier C – Beim Film", text: "Im Atelier C geht es um Mut und um einen Filmdreh: un acteur, un réalisateur, une caméra. Achtung: une image ist ein Bild, nicht das englische «image».", v: `
dangereux/dangereuse|gefährlich|a
courageux/courageuse|mutig|a
répondre (à qn)|(jdm.) antworten|v|Konjugation wie attendre
un acteur/une actrice|ein Schauspieler/eine Schauspielerin|n
couper qc|etw. schneiden; etw. abschneiden|v
Coupez !|Schnitt! (Regiebefehl beim Filmen)|k
un réalisateur/une réalisatrice|ein (Film-)Regisseur/eine (Film-)Regisseurin|n
gros/grosse|gross; dick|a
une caméra|eine Kamera|n
remarquer qn/qc|jdn./etw. bemerken|v
numérique|digital|a
dernier/dernière|letzter/letzte/letztes|a
bon/bonne|gut|a
une image|ein Bild|n
ailleurs|woanders|k` },
{ nr: "5+", titel: "Extras · Zahlen ab 70", text: "Die Zahlen ab 70 aus dem Kasten «On compte !» (Seite 213). Vingt und cent haben eine Pluralform (quatre-vingts, deux-cents), aber kein -s, wenn noch eine Zahl folgt (quatre-vingt-deux). Mille bleibt immer gleich.", v: `
soixante-dix|70|k
soixante-et-onze|71|k
soixante-douze|72|k
soixante-dix-sept|77|k
quatre-vingts|80|k
quatre-vingt-un|81|k
quatre-vingt-cinq|85|k
quatre-vingt-dix|90|k
quatre-vingt-onze|91|k
quatre-vingt-dix-neuf|99|k
cent|100|k
cent-un|101|k
deux-cents|200|k
deux-cent-un|201|k
cinq-cents|500|k
mille|1000|k
deux-mille-dix-sept|2017|k
un million|1 000 000|k` },
/* ---------------- Leçon 6 ---------------- */
{ nr: "6E", titel: "Leçon 6 · Entrée – Auf dem Markt", text: "Lektion 6 dreht sich ums Essen und Einkaufen. Familie Charib geht auf den Markt. Achtung: faire les courses heisst einkaufen, la cour ist der Hof und un cours ist eine Schulstunde.", v: `
un cousin/une cousine|ein Cousin/eine Cousine|n
le TGV|der TGV (Hochgeschwindigkeitszug)|n|TGV = train à grande vitesse
en TGV|mit dem TGV|k
rendre visite à qn|jdn. besuchen|v|Je rends visite à ma cousine. Aber: Je visite le Louvre.
un marché|ein Markt|n
faire les courses (f., pl.)|einkaufen|v
faire la queue|Schlange stehen|v
un stand|ein Stand; eine Bude|n
le fromage|der Käse|n
un morceau/des morceaux (de)|ein Stück/Stücke|n
un melon|eine Melone|n
cher/chère|teuer|a
un boucher/une bouchère|ein Metzger/eine Metzgerin|n
on pourrait|man könnte|k
un poulet|ein Huhn; ein Hühnchen|n
un poisson|ein Fisch|n
le pain|das Brot|n
un boulanger/une boulangère|ein Bäcker/eine Bäckerin|n
une baguette|ein Baguette|n
une fraise|eine Erdbeere|n
retourner|zurückkehren|v
des fruits et légumes (m., pl.)|Obst und Gemüse|n
un menu|ein Menü|n
une entrée|eine Vorspeise|n
un plat|ein Gericht; ein Gang (beim Essen)|n|le plat du jour = das Tagesgericht
un dessert|ein Nachtisch|n
un abricot|eine Aprikose|n
délicieux/délicieuse|köstlich; lecker|a
la viande|das Fleisch|n` },
{ nr: "6A", titel: "Leçon 6 · Atelier A – Einkaufen und Kochen", text: "Im Atelier A wird für ein Fest eingekauft und gekocht. Nach Mengenangaben steht immer de: un kilo de, une bouteille de, beaucoup de, un peu de, trop de. Neu sind auch devoir (müssen) und acheter (kaufen).", v: `
un oignon|eine Zwiebel|n|Aussprache: [ɔɲɔ̃]
passer le pont|den Brückentag verbringen|v
ce soir|heute Abend|k
devoir faire qc|etw. tun müssen|v|je dois, tu dois, il doit, nous devons, vous devez, ils doivent · passé composé: j'ai dû
une liste|eine Liste|n
intéresser qn|jdn. interessieren|v
les gens (m., pl.)|die Leute|n
faire la cuisine|kochen; Essen zubereiten|v
apporter qc|etw. (mit)bringen|v
un immeuble|ein Gebäude; ein Wohnhaus|n
il manque qc à qn|es fehlt jdm. etw.|k
l'argent (m.)|das Geld|n
un supermarché|ein Supermarkt|n
acheter qc|etw. kaufen|v|j'achète, tu achètes, il achète, nous achetons, vous achetez, ils achètent · passé composé: j'ai acheté
ne … plus de|kein/keine mehr|k
l'huile (f.)|das Öl|n
une bouteille (de)|eine Flasche|n
un gramme (de)|ein Gramm|n
une olive|eine Olive|n
la farine|das Mehl|n
une recette|ein Rezept|n
ajouter qc|etw. hinzufügen|v
un œuf/des œufs|ein Ei/Eier|n|Aussprache: un œuf [œf], des œufs [ø]
une tablette de chocolat|eine Tafel Schokolade|n
un gâteau/des gâteaux|ein Kuchen/Kuchen|n
un étage|ein Stockwerk; eine Etage|n
il faut qc à qn|jd. braucht etw.|k
le sucre|der Zucker|n
le beurre|die Butter|n
un kilo (de)|ein Kilo|n
beaucoup de|viel/viele|k
éplucher qc|etw. schälen|v
une boisson|ein Getränk|n
une chaise|ein Stuhl|n
la pâte|der Teig|n
une cuillère à soupe|ein Suppenlöffel|n
une boîte d'anchois|eine Dose Sardellen|n
une olive noire|eine schwarze Olive|n
le sel|das Salz|n
l'eau (f.)|das Wasser|n
un frigo|ein Kühlschrank|n
un vendeur/une vendeuse|ein Verkäufer/eine Verkäuferin|n
désirer qc|etwas wünschen|v
combien (de)|wie viel|k
un client/une cliente|ein Kunde/eine Kundin|n
un litre (de)|ein Liter|n
un paquet (de)|ein Paket|n
un peu de|ein wenig; ein bisschen|k
trop de|zu viel (bei Mengen)|k
Ça fait combien ?|Wie viel kostet das?|k
coûter|kosten|v
une occasion|eine Gelegenheit|n
un jus|ein Saft|n
un coca|eine Cola|n` },
{ nr: "6B", titel: "Leçon 6 · Atelier B – Das Fest im Haus", text: "Im Atelier B feiern die Nachbarn zusammen. Neu sind die Relativpronomen qui, que und où und die unregelmässigen Verben boire, voir und manger (Achtung: nous mangeons).", v: `
où|wo (Relativpronomen)|k
prêt/prête|fertig; bereit|a
décrire qc à qn|jdm. etw. beschreiben|v
qui|der/die/das (Relativpronomen, Subjekt)|k
que/qu'|den/die/das (Relativpronomen, Objekt)|k
un chat|eine Katze|n
un roman|ein Roman|n
des pâtes (f., pl.)|Nudeln|n
curieux/curieuse|neugierig; merkwürdig|a
poser des questions à qn|jdm. Fragen stellen|v
une description|eine Beschreibung|n
boire qc|etw. trinken|v|je bois, tu bois, il boit, nous buvons, vous buvez, ils boivent · passé composé: j'ai bu
le thé|der Tee|n
le thé à la menthe|der Minztee|n
voir qn/qc|jdn./etw. sehen|v|je vois, tu vois, il voit, nous voyons, vous voyez, ils voient · passé composé: j'ai vu
un truc (fam.)|ein Ding; eine Sache|n
retrouver qn/qc|jdn. treffen; etw. wiederfinden|v
un buffet|ein Büffet|n
le karaoké|das Karaoke|n
chanter|singen|v
comme|wie|k
chanter comme une casserole (fam.)|total daneben singen|v
mouais (fam.)|hm; jein|k
manger qc|etw. essen|v|je mange, tu manges, il mange, nous mangeons, vous mangez, ils mangent · passé composé: j'ai mangé
avoir la dalle (fam.)|Kohldampf haben (ugs.)|v
à table|bei Tisch|k
une ambiance|eine Stimmung; eine Atmosphäre|n
content/contente|zufrieden; froh|a
à paillettes|mit Pailletten|k
Pas mal ! (fam.)|Nicht schlecht!|k
un mec (fam.)|ein Typ (ugs.)|n
sûr/sûre|sicher|a
mortel/mortelle (fam.)|sterbenslangweilig (ugs.)|a
remonter le moral à qn|jdn. aufheitern|v
inscrire qn/qc|jdn. anmelden; etw. eintragen|v
une chanson|ein Lied|n
l'avenir (m.)|die Zukunft|n` },
{ nr: "6L", titel: "Leçon 6 · Coin lecture – Der Diebstahl", text: "Im Coin lecture gibt es einen Diebstahl und eine Ermittlung: un vol, un témoin, un suspect, une enquête, interroger. Achtung: nous interrogeons mit e.", v: `
l'électricité (f.)|der Strom; die Elektrizität|n
un vol|ein Diebstahl; ein Raub|n
une allergie|eine Allergie|n
avoir lieu|sich ereignen; stattfinden|v
un témoin|ein Zeuge/eine Zeugin|n
une enquête|eine Ermittlung; eine Untersuchung|n
un journal/des journaux|eine Zeitung/Zeitungen|n
un suspect/une suspecte|ein Verdächtiger/eine Verdächtige|n
interroger qn|jdn. befragen; jdn. vernehmen|v|nous interrogeons
faux/fausse|falsch|a
rien|nichts|k
quelqu'un|jemand|k
Atchoum !|Hatschi!|k
À vos souhaits !|Gesundheit!|k
un rhume|eine Erkältung; ein Schnupfen|n
rencontrer qn|jdn. treffen; jdm. begegnen|v
mentir|lügen|v|je mens, nous mentons · passé composé: j'ai menti
incroyable|unglaublich|a` },
{ nr: "6+", titel: "Extras · Obst und Gemüse", text: "Obst und Gemüse aus «Mon dico personnel» (Seite 220).", v: `
une banane|eine Banane|n
un ananas|eine Ananas|n
une poire|eine Birne|n
un poivron|eine Peperoni (Paprika)|n
une pêche|ein Pfirsich|n
un champignon|ein Pilz|n
un chou-fleur|ein Blumenkohl|n
de l'ail (m.)|Knoblauch|n
une carotte|eine Karotte|n
un avocat|eine Avocado|n
une aubergine|eine Aubergine|n` },
/* ---------------- Leçon 7 ---------------- */
{ nr: "7E", titel: "Leçon 7 · Entrée – Taschengeld", text: "Lektion 7 handelt von Geld, Kleidern und Musik. Im Entrée geht es darum, wofür Jugendliche ihr Taschengeld ausgeben. Achtung: un magazine ist eine Zeitschrift, un magasin ein Geschäft.", v: `
une planète|ein Planet|n
l'argent (m.) de poche|das Taschengeld|n
la nourriture|die Nahrung|n
un vêtement|ein Kleidungsstück|n
un produit de beauté|ein Kosmetikprodukt|n
le matériel informatique|die Hardwareausstattung|n
un magazine|eine Zeitschrift|n|nicht verwechseln: un magasin = ein Geschäft
le téléchargement|das Herunterladen; der Download|n
une appli (fam.)|eine Anwendung; eine App|n|une appli = une application
un cadeau/des cadeaux|ein Geschenk/Geschenke|n
scolaire|schulisch; Schul-|a
télécharger qc|etw. herunterladen|v|je télécharge, nous téléchargeons
un mois|ein Monat|n
utiliser qc|etw. benutzen; etw. verwenden|v
un forfait|eine Flatrate|n
faire des économies (f., pl.)|sparen|v
un chanteur/une chanteuse|ein Sänger/eine Sängerin|n
un concert|ein Konzert|n
un pour cent (inv.)|ein Prozent|n` },
{ nr: "7A", titel: "Leçon 7 · Atelier A – Kleider und Farben", text: "Im Atelier A geht es ums Kleiderkaufen: Farben, Grössen und Kleidungsstücke. Achtung: rouge und jaune sind im Singular immer gleich. Neu sind auch mettre, promettre und essayer. Und: Französische Kleidergrössen sind eine Nummer grösser als deutsche.", v: `
laver qc|etw. waschen|v
pendant que|während (Konjunktion)|k
un pantalon|eine Hose|n
une couleur|eine Farbe|n
une taille|eine (Körper-)Grösse|n
une jupe|ein Rock|n
un anorak|ein Anorak|n
une chemise|ein Hemd|n
une basket|ein Turnschuh|n
en taille …|in Grösse …|k
Tu prends quelle couleur ?|Welche Farbe nimmst du?|k
vert/verte|grün|a
bleu/bleue|blau|a
gris/grise|grau|a
noir/noire|schwarz|a
blanc/blanche|weiss|a
rouge|rot|a|Singular immer rouge, Plural rouges
jaune|gelb|a|Singular immer jaune, Plural jaunes
exactement|genau|k
le même/la même|derselbe/dieselbe/dasselbe|k
Il y a un souci.|Es gibt ein Problem.|k
promettre qc à qn|jdm. etw. versprechen|v|je promets, tu promets, il promet, nous promettons, vous promettez, ils promettent · passé composé: j'ai promis
voter (pour qn)|jdn. wählen; seine Stimme abgeben (für)|v
avoir besoin de qc|etw. brauchen|v
quel/quelle/quels/quelles|welcher/welche/welches (Fragebegleiter)|k
mettre qc|(Zeit) brauchen; etw. anziehen; etw. stellen, legen, setzen|v|je mets, tu mets, il met, nous mettons, vous mettez, ils mettent · passé composé: j'ai mis
les soldes (f., pl.)|der Schlussverkauf|n
essayer qc|etw. versuchen; etw. ausprobieren; etw. anprobieren|v|j'essaie, tu essaies, il essaie, nous essayons, vous essayez, ils essaient · passé composé: j'ai essayé
ce/cet/cette/ces|dieser/diese/dieses (Demonstrativbegleiter)|k
un jean|eine Jeans|n
ne … rien|nichts|k
un style|ein Stil|n
les fringues (f., pl.) (fam.)|die Klamotten (ugs.)|n|= les vêtements
une casquette|eine Kappe; eine Schirmmütze|n
une chaussure|ein Schuh|n
aller à qn|jdm. stehen (Kleidung)|v
ne … jamais|nie; niemals|k
pourtant|dennoch; trotzdem|k
un cheveu/des cheveux|ein Haar/Haare|n
pour faire qc|um etwas zu tun|k
bouder|schmollen|v
payer qc|etw. bezahlen|v|je paie, tu paies, il paie, nous payons, vous payez, ils paient · passé composé: j'ai payé
une caisse|eine Kasse|n
nickel (fam.)|super; einwandfrei|a
décider de faire qc|beschliessen, etw. zu tun|v
une glace|ein Eis|n
une boule|eine Kugel|n
dessus|darauf|k
un prix|ein Preis|n
un look|ein Outfit|n
classique|klassisch|a
J'ai mon style à moi.|Ich habe meinen eigenen Stil.|k
être à la mode|modern sein; sich modisch kleiden|v
pratique|praktisch|a
sportif/sportive|sportlich|a
porter qc|etwas tragen|v
une marque|eine Marke|n
blond/blonde|blond|a
brun/brune|braun (Haare)|a
roux/rousse|rothaarig|a
court/courte|kurz|a
long/longue|lang|a` },
{ nr: "7B", titel: "Leçon 7 · Atelier B – Musik", text: "Im Atelier B geht es um Musik und eine Preisverleihung. Neu sind venir (mit revenir und devenir), offrir, découvrir und ouvrir. Achtung: une star ist immer feminin, auch bei einem Mann.", v: `
chaque|jeder/jede/jedes (+ Nomen)|k
un professionnel/une professionnelle|ein Fachmann/eine Fachfrau; ein Profi|n
remettre (un prix)|(einen Preis) überreichen, verleihen|v
une catégorie|eine Kategorie|n
nouveau/nouvel/nouvelle|neu|a|Plural: des nouveaux groupes, des nouvelles chansons
une tournée|eine Tournee|n
venir|kommen|v|je viens, tu viens, il vient, nous venons, vous venez, ils viennent · passé composé: il est venu, elle est venue
revenir|zurückkommen|v|Konjugation wie venir
devenir qn/qc|jd./etw. werden|v|Konjugation wie venir · passé composé: je suis devenu(e)
une star|ein Star|n|immer feminin, auch für Männer
un album|ein (Musik-)Album|n
un titre|ein Titel|n
danser|tanzen|v
offrir qc à qn|jdm. etw. anbieten; jdm. etw. schenken|v|j'offre, tu offres, il offre, nous offrons, vous offrez, ils offrent · passé composé: j'ai offert
découvrir qc|etw. entdecken|v|je découvre, nous découvrons · passé composé: j'ai découvert
reprendre qc|etw. übernehmen|v
vieux/vieil/vieille|alt|a|un vieux chanteur, un vieil album, une vieille chanson
un air|hier: eine Melodie|n
ouvrir qc|etw. öffnen; etw. eröffnen|v|j'ouvre, tu ouvres, il ouvre, nous ouvrons, vous ouvrez, ils ouvrent · passé composé: j'ai ouvert
taper qc|etw. tippen|v
beau/bel/belle|schön|a|un bel homme · Plural: des beaux vêtements, des belles chansons
une douche|eine Dusche|n
une émission|eine Sendung|n
sortir qc|etw. herausbringen|v
la vie|das Leben|n
une émotion|eine Emotion; ein Gefühl|n
en solo|solo|k
le rap|Rap|n
une mélodie|eine Melodie|n
un tube|ein Hit|n
le succès|der Erfolg|n
vrai/vraie|wahr; richtig; echt|a
faire le tour du monde|in die ganze Welt verkauft werden; eine Weltreise machen|v
la voix|die Stimme|n
la techno|Techno|n
la musique pop|die Popmusik|n
l'électro (f.)|die Elektro-Musik|n
le jazz|der Jazz|n
la musique classique|die klassische Musik|n
un artiste/une artiste|ein Künstler/eine Künstlerin|n
le rythme|der Rhythmus|n
un instrument|ein Instrument|n
les paroles (f., pl.)|der Liedtext|n` },
{ nr: "7+", titel: "Extras · Kleider", text: "Kleider aus «Mon dico personnel» (Seite 226).", v: `
un pull|ein Pulli|n
une veste|eine Jacke|n
une robe|ein Kleid|n
une écharpe|ein Schal|n
une ceinture|ein Gürtel|n
des bottes (f., pl.)|Stiefel|n
des lunettes de soleil (f., pl.)|eine Sonnenbrille|n` },
/* ---------------- Leçon 8 ---------------- */
{ nr: "8E", titel: "Leçon 8 · Entrée – Die Bretagne", text: "Lektion 8 spielt in der Bretagne, einer Region im Westen Frankreichs. Ihr Name kommt von den Bretonen, einem keltischen Volk. Du lernst Wörter für Meer und Küste (une plage, un rocher, un phare, un port) und wie man ein Bild beschreibt: au premier plan, au milieu, à l'arrière-plan.", v: `
les vacances (f., pl.)|die Ferien; der Urlaub|n
la Bretagne|die Bretagne|n|en Bretagne = in der Bretagne
la pêche|die Fischerei; das Angeln|n
un crabe|eine Krabbe|n
une plage|ein Strand|n|sur la plage = am Strand
un rocher|ein Fels|n
un menhir|ein Menhir; ein Hinkelstein|n
un festival|ein Festival|n
breton/bretonne|bretonisch|a
une île|eine Insel|n
un phare|ein Leuchtturm|n
un panneau/des panneaux|ein Schild/Schilder|n
le breton|Bretonisch (Sprache)|n
un port|ein Hafen|n
au premier plan|im Vordergrund|k
au milieu de|in der Mitte (von)|k
à l'arrière-plan|im Hintergrund|k` },
{ nr: "8A", titel: "Leçon 8 · Atelier A – Das Praktikum", text: "Im Atelier A reist Alice zu einem Kurs in die Bretagne. Neu sind viele reflexive Verben (s'inquiéter, se lever, se coucher, s'amuser) und die Verben auf -ir wie choisir, finir und réussir. Achtung: un stage ist ein Kurs oder Praktikum, nicht eine Bühne.", v: `
un carnet de bord|ein Reisejournal|n
un stage|ein Praktikum; ein Kurs|n|nicht verwechseln mit englisch stage = Bühne
avoir une correspondance|umsteigen|v
s'inquiéter|sich Sorgen machen|v|je m'inquiète, tu t'inquiètes, il s'inquiète, nous nous inquiétons, vous vous inquiétez, ils s'inquiètent
se débrouiller|zurechtkommen; sich zu helfen wissen|v
se retrouver|sich treffen|v
monter|hinaufgehen; einsteigen|v
un voyage|eine Reise|n
allemand/allemande|deutsch|a
choisir qc|etw. wählen; etw. aussuchen|v|je choisis, tu choisis, il choisit, nous choisissons, vous choisissez, ils choisissent · passé composé: j'ai choisi
un TER|ein Regionalzug|n|TER = transport express régional
un participant/une participante|ein Teilnehmer/eine Teilnehmerin|n
un autocar (m.)|ein Überlandbus; ein Reisebus|n
s'amuser|sich amüsieren; Spass haben|v
un animateur/une animatrice|ein Kursleiter/eine Kursleiterin; ein Betreuer/eine Betreuerin|n
se lever|aufstehen; sich erheben|v|je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent
se passer|geschehen; sich ereignen; sich abspielen|v
la vue|die Aussicht|n
la mer|das Meer|n
une crêperie|ein Crêpe-Restaurant|n
se partager qc|sich etw. teilen|v|nous nous partageons
réussir à faire qc|etw. fertigbringen; gelingen, etw. zu tun|v|wie choisir: je réussis, nous réussissons, ils réussissent · passé composé: j'ai réussi
s'entraîner|trainieren|v
finir qc|etw. beenden; mit etw. aufhören|v|wie choisir: je finis, nous finissons, ils finissent · passé composé: j'ai fini
une crêpe|eine Crêpe|n
se coucher|ins Bett gehen; schlafen gehen; sich hinlegen|v
se baigner|baden|v
chaud/chaude|warm; heiss|a
être de retour|zurück sein|v
s'entendre|sich verstehen|v
grimper|klettern|v
glisser|gleiten; rutschen|v
un appareil photo|ein Fotoapparat|n
un coup|ein Schlag|n
organiser qc|etw. organisieren|v
s'occuper de qn/qc|sich mit jdm./etw. beschäftigen; sich um jdn./etw. kümmern|v
un avion|ein Flugzeug|n
un train|ein Zug|n
un ferry|eine Fähre|n
une voiture|ein Auto|n
en voiture|mit dem Auto|k|en voiture, en avion, en train
à pied|zu Fuss|k
anglais/anglaise|englisch|a
suisse|schweizerisch|a
un château/des châteaux|ein Schloss/Schlösser|n` },
{ nr: "8B", titel: "Leçon 8 · Atelier B – Wandern und Wetter", text: "Im Atelier B gehen die Jugendlichen wandern und verirren sich. Neu sind savoir und connaître (wissen und kennen) und das Wetter: Il fait beau, Il pleut, Il neige, Il fait froid. Achtung: si + il wird zu s'il, aber si elle bleibt.", v: `
une randonnée|eine Wanderung|n
franco-allemand/franco-allemande|deutsch-französisch|a
se téléphoner|miteinander telefonieren|v
savoir|wissen|v|je sais, tu sais, il sait, nous savons, vous savez, ils savent · passé composé: j'ai su
connaître qn/qc|jdn./etw. kennen|v|je connais, tu connais, il connaît, nous connaissons, vous connaissez, ils connaissent · passé composé: j'ai connu
que|dass (Konjunktion)|k
si|ob|k|si + il = s'il; si + elle = si elle
se connaître|sich kennen|v
un propriétaire/une propriétaire|ein Eigentümer/eine Eigentümerin|n
une location|eine Ferienunterkunft|n
un chemin|ein Weg|n
un interprète/une interprète|ein Dolmetscher/eine Dolmetscherin|n
un nuage|eine Wolke|n
Il pleut.|Es regnet.|k
la météo|die Wettervorhersage|n|Abkürzung für la météorologie
sans arrêt|ständig; unaufhörlich|k
un parking|ein Parkplatz|n
une carte de randonnée|eine Wanderkarte|n
savoir faire qc|etw. tun können (wissen, wie etw. geht)|v
une présentation|eine Vorstellung|n
embêter qn (fam.)|jdn. nerven (ugs.)|v
en avoir marre (fam.)|die Nase voll haben; es satthaben (ugs.)|v
un pique-nique|ein Picknick|n
le vent|der Wind|n
un croisement|eine Kreuzung|n
perdu/perdue|verloren|a
le GPS|das GPS|n
sauf que|abgesehen davon|k
par chance|glücklicherweise|k
le temps|das Wetter|n
Il fait quel temps ?|Wie ist das Wetter?|k
Il fait beau.|Es ist schönes Wetter.|k
le soleil|die Sonne|n
Il y a du soleil.|Die Sonne scheint.|k
froid/froide|kalt|a|Gegenteil: chaud/chaude
Il fait froid.|Es ist kalt.|k
la pluie|der Regen|n
un orage|ein Gewitter|n
Il neige.|Es schneit.|k|Infinitiv: neiger
la température|die Temperatur|n
Il fait quelle température ?|Wie viel Grad sind es?|k
un degré|ein Grad|n
Il fait vingt degrés.|Es sind 20 Grad.|k
moins cinq (degrés)|minus fünf (Grad)|k
un site|eine historische Stätte|n
un office de tourisme|ein Fremdenverkehrsamt|n` },
{ nr: "8L", titel: "Leçon 8 · Coin lecture", text: "Ein paar Wörter aus dem Lesetext am Ende von Lektion 8.", v: `
longtemps|lange (Adverb)|k
fatigué/fatiguée|müde|a
s'énerver|sich aufregen|v
la suite|die Fortsetzung|n
se réveiller|aufwachen|v` },
{ nr: "8+", titel: "Extras · Wo ist es? Plural, Wer kann was?", text: "Aus den Kästen auf Seite 232: Ortsangaben, besondere Pluralformen und «Qui sait faire quoi ?».", v: `
sur|auf|k
sous|unter|k
dans|in|k
chez|bei|k
devant|vor (örtlich)|k
derrière|hinter|k
à gauche de|links von|k
à droite de|rechts von|k
un animal/des animaux|ein Tier/Tiere|n
un chapeau/des chapeaux|ein Hut/Hüte|n
un feu/des feux|ein Feuer/Feuer|n
un jeu/des jeux|ein Spiel/Spiele|n
un travail/des travaux|eine Arbeit/Arbeiten|n
écrire des histoires|Geschichten schreiben|v
faire des photos|Fotos machen|v
parler anglais|Englisch sprechen|v
jouer au foot|Fussball spielen|v
jouer d'un instrument|ein Instrument spielen|v
organiser des vacances|Reisen organisieren|v
réparer un ordinateur|einen Computer reparieren|v
dessiner|zeichnen|v` }
  ]
});
