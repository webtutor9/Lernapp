/* Fach Englisch – Headway Pre-intermediate (5th edition), German Wordlist
   Vokabelzeilen: Englisch | Deutsch | Wortart | Hinweis (optional) | Beispielsatz (optional)
   Wortarten wie im Buch: n, v, adj, adv, phr, phr v, excl, v / n
   Abschnitte: 1.1 – 1.8 = Unit 1, aufgeteilt nach den Seiten der Wortliste */
(window.FAECHER = window.FAECHER || []).push({
  id: "englisch",
  name: "Englisch",
  art: "vokabeln",
  parse: "en",
  farbe: "#2e7d5b",
  kuerzel: "En",
  kopf: "titel",
  prefix: ["en:"],
  schreiben: "Englisches Wort eintippen",
  platzhalter: "Englisch eintippen",
  schreibHinweis: "«to» bei Verben und «sb/sth» kannst du weglassen.",
  akzentText: "Richtig:",
  standard: ["e", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8"],
  einfuehrung: {
    titel: "So liest du die Wordlist",
    text: `Die Wörter stammen aus der **German Wordlist** zu *Headway Pre-intermediate*. Links steht das englische Wort, dann die Wortart, die Aussprache, ein Beispielsatz und die deutsche Bedeutung.

| Abkürzung | Bedeutung |
|---|---|
| n | noun – Nomen |
| v | verb – Verb |
| adj | adjective – Adjektiv |
| adv | adverb – Adverb |
| phr | phrase – Redewendung |
| phr v | phrasal verb – Verb mit Partikel (pick **up**, knock **over**) |
| excl | exclamation – Ausruf |
| sb / jdm, jem. | somebody – jemand |
| sth / etw. | something – etwas |
| ≠ | Gegenteil |

**Tipps**

- Lerne Verben mit **to**: *to miss, to improve*. Beim Schreiben in der App darfst du «to» weglassen.
- **Phrasal verbs** ändern mit der Partikel ihre Bedeutung: *to pick up* = aufheben, *to knock over* = umwerfen.
- Achte auf Wortpaare, die man leicht verwechselt: *to borrow* (ausleihen, von jemandem) ≠ *to lend* (leihen, jemandem). *Can I borrow your pen?* – *Can you lend me your pen?*
- Lies den **Beispielsatz** mit. Er zeigt, wie das Wort gebraucht wird. Im Quiz kommen auch Lückensätze vor.`,
    quiz: [
      { f: "Was bedeutet «phr v» in der Wordlist?", o: ["phrasal verb – Verb mit Partikel", "phrase – Redewendung", "plural – Mehrzahl", "preposition – Präposition"], r: 0, e: "phr v = phrasal verb, z.B. to pick up, to knock over." },
      { f: "Was bedeutet «sb»?", o: ["something – etwas", "somebody – jemand", "sometimes – manchmal", "subject – Subjekt"], r: 1, e: "sb = somebody = jemand. sth = something = etwas." },
      { f: "Welcher Satz ist richtig?", o: ["Can you borrow me £20?", "Can you lend me £20?", "Can I lend your pen?", "Can you borrow me your pen?"], r: 1, e: "to lend sb sth = jemandem etwas leihen. to borrow sth from sb = sich etwas von jemandem ausleihen." },
      { f: "Was bedeutet «≠» in der Wordlist?", o: ["gleiche Bedeutung", "Gegenteil", "Plural", "umgangssprachlich"], r: 1, e: "≠ zeigt das Gegenteil, z.B. heavy ≠ light." },
      { f: "Was bedeutet «adj»?", o: ["Adverb", "Adjektiv", "Ausruf", "Nomen"], r: 1, e: "adj = adjective = Adjektiv (Eigenschaftswort), z.B. delicious." },
      { f: "Was bedeutet «excl», z.B. bei «cheers»?", o: ["exclamation – Ausruf", "example – Beispiel", "excellent – ausgezeichnet", "exception – Ausnahme"], r: 0, e: "excl = exclamation = Ausruf." }
    ]
  },
  lektionen: [
{ nr: "1.1", titel: "Unit 1 · abroad – blind date", text: "Wörter rund um Reisen und neue Bekanntschaften: Ausland, Unterkunft, Ankunft.", v: `
abroad|im / ins Ausland|adv||Which friend lived abroad?
academy|Akademie|n||The Conservatorio Giuseppe Verdi is the largest music academy in Italy.
accommodation|Unterkunft|n||Which type of accommodation do you require for your holidays?
album|Album|n||I love the band's latest album.
applicable|anwendbar|adj||Write your children's names where applicable.
arrival|Ankunft|n|to arrive: ankommen|The date of arrival is Sunday 21 June.
bar|Bar|n||I met my best friend at a bar.
beard|Bart|n||He had a kind face with a beard.
blind date|Blind Date|n||I met my husband on a blind date.
` },
{ nr: "1.2", titel: "Unit 1 · to borrow – daily", text: "Menschen beschreiben (bubbly, chatty, crazy) und Berufe (busker, carpenter).", v: `
to borrow sth from sb|ausleihen (borgen)|v|≠ to lend sb sth: jem. etw. leihen|Can I borrow your phone charger? I left mine at home.
bubbly|lebendig, sprudelnd|adj||Karen has a bubbly personality – always cheerful and friendly.
busker|Strassenmusikant(in)|n||My sister is a busker. She plays music on the streets of London.
camper van|Wohnmobil|n||They usually go on holidays in a camper van.
carpenter|Tischler(in), Schreiner(in)|n||He works as a carpenter, making wooden furniture.
chatty|gesprächig|adj|to (have a) chat: sich unterhalten, plaudern|My brother is very chatty and entertaining.
chatterbox|Plaudertasche|n||
cheers|Prost|excl||So you found a new job – cheers to that!
college|College|n||The college where I study has students from all over the world.
couple|Paar|n||You two make such a good couple. You should get married!
crazy|verrückt|adj||She always wears such crazy clothes.
to be crazy about sth|verrückt sein nach etw.|phr v||My mum's crazy about football.
daily|täglich|adj||I need to call my mum daily or she gets worried.
` },
{ nr: "1.3", titel: "Unit 1 · date – empty", text: "Verabredungen, Gefühle (embarrassing) und Formulare (dietary requirements, emergency contact).", v: `
date|Rendezvous, Date|n|to date sb: mit jdm. gehen|I was on a date with John yesterday.
definitely|auf jeden Fall|adv||I'll definitely meet her again.
to delete|löschen|v||Don't delete your name from the list.
delicious|köstlich|adj||These kiwis are delicious.
departure|Abflug, Abreise|n|to depart: abfliegen, aufbrechen · ≠ arrival: Ankunft|Do you know the departure date?
dietary|Ernährungs-|adj|requirement: Bedürfnis, Anforderung|Have you got any dietary requirements?
early days|Anfangszeit|phr||I'm very happy with Ross, but it's early days yet.
to embarrass|in Verlegenheit bringen|v||Did I embarrass you? You went all red!
embarrassing|peinlich|adj||I cried in front of everyone. It was so embarrassing!
emergency|Notfall|n||Please write your emergency contact here.
empty|leer|adj|to empty sth: etw. leeren|Our house feels big and empty since our children left.
` },
{ nr: "1.4", titel: "Unit 1 · to be excited – to improve", text: "Gefühle, Wohnen (flatmate, hostel) und höfliche Ausdrücke (How do you do?, I'm afraid).", v: `
to be excited|aufgeregt sein|adj|excitement: Aufregung|I got so excited when they said I got the job!
fabulous|fantastisch|adj|Synonym: fantastic|Sheena is my best friend. She's fabulous.
flatmate|Mitbewohner(in)|n||Do you have a flatmate or do you live alone?
forever|für immer|adv||We met in school and I know we are going to be friends forever.
gender|Geschlecht|n||What's your child's gender – male or female?
global|global, weltweit|adj||I'd love to be a global traveller and see the world.
heavy|stark, schwer|adj|≠ light: leicht|Don't go out in this heavy rain.
to hire|mieten|v||We're going to fly to Chile and hire a van there.
hostel|Herberge|n||I stayed at a youth hostel until I found an apartment.
How do you do?|Guten Tag! (beim Kennenlernen)|phr|Antwort ist ebenfalls «How do you do?»|Hi, I'm Peter Collins. How do you do?
I'm afraid|leider|phr||I'm afraid this seat is not free.
to improve|verbessern|v|improvement: Verbesserung|I went to Canada to improve my English.
` },
{ nr: "1.5", titel: "Unit 1 · to have in common – mess", text: "Beziehungen (in common, lose touch, kiss) und Angaben in Formularen (marital status, medical condition).", v: `
to have in common|gemeinsam haben|phr||I'm surprised they're still together. They have nothing in common.
journalist|Journalist(in)|n||He worked at a newspaper as a journalist.
jumper / pullover / sweater|Pullover|n||I love your woolly jumper. It looks very warm.
kind|lieb, freundlich|adj||He looks very kind and friendly.
kiss|küssen; Kuss|v / n||Did you kiss him on your first date?
to knock over|umwerfen|phr v||Don't get so close to the sea or the waves will knock you over.
to lend sb sth / sth to sb|leihen|v|≠ to borrow: ausleihen|Can you lend me £20?
to lose touch|den Kontakt verlieren|phr||I don't want to lose touch, so I call my friends regularly.
marital status|Familienstand|phr||What's your marital status – married, single …?
mean|gemein|adj|to mean: bedeuten; meinen|Don't be mean and share your snack.
medical condition|Erkrankung|phr||Do you have any medical condition we should know about?
mess|Durcheinander|n||This room is such a mess – please tidy it up.
` },
{ nr: "1.6", titel: "Unit 1 · to miss – permanent", text: "Höfliche Antworten (my pleasure, never mind, no trouble) und persönliche Angaben (nickname, occupation).", v: `
to miss|vermissen|v||Did you miss me while I was away?
mountain|Berg|n||Ben Nevis is the highest mountain in Scotland.
my pleasure|gern geschehen|phr||You don't need to thank me. It was my pleasure.
nest|Nest, Bau|n||Look! I've found a bird's nest in this tree.
never mind|macht nichts|phr||Can't you come to the party? Never mind, perhaps another time.
nickname|Spitzname|n||Did you have a nickname at school?
no trouble|kein Problem|phr||You don't need to thank me. It was no trouble at all.
noise|Lärm|n|noisy: laut|We miss our children's noise, now they're gone.
obviously|offensichtlich|adv||Obviously, our relationship is different now we are grown-ups.
occupation|Beruf|n||What's your occupation? Are you a teacher as well?
pardon (me)?|Entschuldigung? / Wie bitte?|phr||Pardon? What did you say?
permanent|dauerhaft|adj||Is this your permanent address?
` },
{ nr: "1.7", titel: "Unit 1 · to pick up – reunited", text: "Alltag und Beziehungen: pick up, pub, relationship, retire, reunited.", v: `
to pick up|aufheben|phr v||I had to pick up his wallet. He dropped it on his way out.
pleasure|Vergnügen|n||No need to thank me. It was my pleasure.
postcode|Postleitzahl|n||Please write your postcode next to your address.
pretty|hübsch (bei Frauen)|adj|gutaussehend (bei Männern): handsome|She's a pretty girl.
pub|Kneipe, Gaststätte|n||I'm going to the pub. Who's coming?
relationship|Beziehung|n||What's Geena's relationship to you? Is she your cousin?
reporter|Reporter(in)|n||A reporter is interviewing him about the incident.
requirement|Anforderung, Bedürfnis|n|to require sth: etw. brauchen, benötigen|Do you have any dietary requirements?
rescue|retten; Rettung|v / n||Don't fall into the water. I can't swim, so I won't be able to rescue you!
to retire|in den Ruhestand gehen|v|retirement: Ruhestand|What do you plan to do when you retire?
reunited|wiedervereint|adj|Verb: to reunite|Silvia is my reunited friend. After 12 years, we met again last month.
` },
{ nr: "1.8", titel: "Unit 1 · scholarship – to be worried about", text: "Schule und Arbeit (scholarship, secondary school, well-paid), Formulare (signature, surname) und Eigenschaften.", v: `
scholarship|Stipendium|n||I got a scholarship to study music.
seaside|am Meer|adj||Portrush is a lovely seaside town in Northern Ireland.
secondary school|Sekundarschule|n||I work as a teacher at a secondary school.
signature|Unterschrift|n|to sign sth: etw. unterschreiben|Write your signature in the space provided.
single|ledig|adj||Are you married or single?
surname|Nachname|n|Synonym: last name · ≠ first name: Vorname|Smith is my surname.
surprising|überraschend|adj|surprise: Überraschung · to surprise sb: jdn. überraschen|You are here on time. That is surprising!
to text|eine Nachricht schicken|v||Text me tomorrow, when you know the exam results.
unusual|ungewöhnlich|adj|≠ usual: gewöhnlich|Luca isn't an unusual name in Italy.
veggie (vegetarian)|Vegetarier(in)|n||I am a veggie. I don't eat meat or fish.
wardrobe|Kleiderschrank, Garderobe|n||I need another wardrobe in my bedroom. I have too many clothes.
well-paid|gut bezahlt|adj||She has a well-paid job in an office.
wild|wild|adj||Ruth is my wild friend. She's so much fun to be with.
to wink|zwinkern|v||Can you wink?
woolly|aus Wolle, wollig|adj||I'm wearing a woolly jumper and I'm very hot.
to be worried about|besorgt sein über, sich Sorgen machen um|adj||Are you worried that he won't come?
` }
  ]
});
