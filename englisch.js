/* Fach Englisch – Headway Pre-intermediate (5th edition), German Wordlist
   Vokabelzeilen: Englisch | Deutsch | Wortart | Hinweis (optional) | Beispielsatz (optional)
   Wortarten wie im Buch: n, n pl, v, adj, adv, phr, phr v, excl, abbrev, kombiniert mit « / » (z.B. v / n)
   Abschnitte: Unit.Seite, z.B. 3.2 = Unit 3, zweite Seite der Wordlist (Unit 1: S. 1–8, Unit 2: S. 9–14 – bisher nur S. 14,
   Unit 3: S. 15–21, Unit 4: S. 22–28, Unit 5: S. 29–33) */
(window.FAECHER = window.FAECHER || []).push({
  id: "englisch",
  name: "Englisch",
  art: "vokabeln",
  parse: "en",
  farbe: "#2e7d5b",
  kuerzel: "En",
  kopf: "titel",
  chipHinweis: "Erste Zahl = Unit, zweite Zahl = Seite innerhalb der Unit (3.2 = Unit 3, zweite Seite).",
  prefix: ["en:"],
  schreiben: "Englisches Wort eintippen",
  platzhalter: "Englisch eintippen",
  schreibHinweis: "«to» bei Verben und «sb/sth» kannst du weglassen.",
  akzentText: "Richtig:",
  standard: ["e", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "2.6", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "5.1", "5.2", "5.3", "5.4", "5.5"],
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
veggie / vegetarian|Vegetarier(in)|n||I am a veggie. I don't eat meat or fish.
wardrobe|Kleiderschrank, Garderobe|n||I need another wardrobe in my bedroom. I have too many clothes.
well-paid|gut bezahlt|adj||She has a well-paid job in an office.
wild|wild|adj||Ruth is my wild friend. She's so much fun to be with.
to wink|zwinkern|v||Can you wink?
woolly|aus Wolle, wollig|adj||I'm wearing a woolly jumper and I'm very hot.
to be worried about|besorgt sein über, sich Sorgen machen um|adj||Are you worried that he won't come?
` },
{ nr: "2.6", titel: "Unit 2 · to solve – village", text: "Ende von Unit 2 (Seite 14 der Wordlist): Probleme lösen, Essen zum Mitnehmen, Dorfleben.", v: `
to solve|lösen|v|solution: Lösung|You've got to learn to solve your problems on your own.
to suit|passen, stehen|v|suit: Anzug|These clothes suit you. They look really good on you.
to be suspicious of|misstrauisch sein gegenüber|adj|suspicion: Misstrauen|My neighbour is suspicious of young people. She doesn't trust them.
takeaway|Essen zum Mitnehmen|n||On Fridays, I usually have a takeaway at my friend's house.
tattoo|Tattoo|n||She has a tattoo on her left shoulder.
twins|Zwillinge|n pl||My sisters are identical twins.
usually|gewöhnlich, normalerweise|adv||I don't usually go out on weekdays.
village|Dorf|n||We live in a small village in the Cotswolds.
` },
{ nr: "3.1", titel: "Unit 3 · accident – bullet", text: "Unfälle, Gefühle und Wörter aus der James-Bond-Geschichte (assassin, bullet).", v: `
accident|Unfall|n||There was an accident this morning: a car hit the traffic light.
to afford|sich leisten|v|affordable: erschwinglich, bezahlbar|I love this dress but I can't afford it. It's too expensive for me.
air conditioning|Klimaanlage|n||Don't sleep with the air conditioning on. You may catch a cold.
angry|wütend, verärgert|adj|anger: Wut|You could tell by the tone of his voice that he was angry.
appointment|Termin|n|an appointment with sb for (Friday)|Did you book an appointment with the doctor for next Friday?
assassin|Attentäter(in)|n|assassination: Attentat, Ermordung|Scaramanga is an assassin hired to kill James Bond.
bang|knallen; Knall|v / n||Close the window carefully, don't bang it shut.
boss|Chef(in)|n||I'll ask my boss if I can take the day off.
to breathe|atmen|v|breath: Atem|Don't get nervous. Breathe deeply and relax.
bricklayer|Maurer(in)|n||He works in construction as a bricklayer.
bullet|Gewehrkugel|n||There was gunfire and he got a bullet in his leg.
` },
{ nr: "3.2", titel: "Unit 3 · to capture – darkness", text: "Einkaufen (checkout, cardboard box), die Pinguin-Geschichte (covered in oil) und unregelmässige Verben (creep, cut).", v: `
to capture|fangen|v||They tried to capture me, but I managed to escape.
cardboard box|Kartonschachtel|n||The toy came in a cardboard box.
checkout|Kasse (im Laden)|n|at the checkout: an der Kasse · queue: Warteschlange · to queue: anstehen|There was a long queue at the supermarket checkout.
to club together|sich zusammentun|phr v||We all clubbed together at work to buy Lisa a wedding gift.
coast|Küste|n||My dad lives by the sea, in a small village on the Argentinian coast.
continually|ständig|adv||My best friend is continually on Facebook. He spends hours on it.
covered in sth|bedeckt mit|adj||The penguin's feathers were covered in oil.
to creep|schleichen|v|creep – crept – crept|He got out of bed and started to creep towards the window.
curse|fluchen|v / n||Please, don't curse. It's rude.
curtain|Vorhang|n||She was hiding behind the window curtain.
to cut|schneiden|v|cut – cut – cut|I cut my finger while I was cooking dinner.
darkness|Dunkelheit|n|adj.: dark|I couldn't see until my eyes got used to the darkness.
` },
{ nr: "3.3", titel: "Unit 3 · description – furious", text: "Beschreibungen, Gefühle und Adverbien (exactly, fluently).", v: `
description|Beschreibung|n|Verb: to describe|Do you have a description of the man we're waiting for?
to die|sterben|v|n: death · adj.: dead|Scaramanga wants James Bond to die.
to disappear|verschwinden|v|≠ to appear: erscheinen|The penguin didn't disappear completely. It returned after 4 months.
to enjoy|geniessen; sich amüsieren|v|to enjoy yourself: sich amüsieren|Did you enjoy yourself at the party?
to escape from|flüchten vor|v||James Bond managed to escape from Scaramanga.
exactly|genau|adv||Your daughter looks exactly like you.
excellent|ausgezeichnet|adj||Her Spanish is excellent! She speaks so well.
expiry date|Ablaufdatum|n||What's the expiry date on your credit card?
feather|Feder|n||Beautiful new feathers grew on the penguin's back.
to feed|füttern|v|feed – fed – fed|What did you feed the penguin? Sardines?
finishing line|Ziellinie|n||The Brownlee brothers run together to the finishing line.
fluently|fliessend|adv||My mum speaks Spanish fluently.
furious|wütend, rasend|adj||I was furious that he didn't come to the meeting.
` },
{ nr: "3.4", titel: "Unit 3 · generously – invitation", text: "Adverbien auf -ly (generously, gradually, happily) und Wörter aus Zeitungsmeldungen (headline, injured).", v: `
generously|grosszügig|adv|n: generosity|My aunt paid the painter very generously.
gradually|allmählich|adv||Gradually, I learned to smile again.
guess|raten|v / n||If you don't know the answer, you'll have to guess.
guiltily|schuldbewusst|adv||She looked at me guiltily. She had something to confess.
to feel guilty|sich schuldig fühlen|phr||
gun|Pistole, Gewehr|n||In the movie, James Bond took his gun from under his pillow.
gunshot|Schuss|n||The window banging shut sounded like a gunshot.
happily|glücklich|adv||Leah ran into her dad's arms happily.
headfirst|kopfüber|adv||She fell headfirst into a fountain.
headline|Überschrift, Schlagzeile|n||The newspaper headline says Martha was injured in the accident.
to honk|kreischen, hupen|v||Do penguins honk when they are happy?
to be injured|verletzt sein|adj|injury: Verletzung|Lisa was injured when she was texting a friend.
invitation|Einladung|n|to invite sb: jdn. einladen|Thank you for your invitation. Unfortunately, I can't come.
` },
{ nr: "3.5", titel: "Unit 3 · luxurious – portrait", text: "Adverbien (passionately, peacefully) und Wörter rund um Kunst (painter, poem, portrait).", v: `
luxurious|luxuriös|adj|n: luxury|They live in a luxurious house in the centre of Paris.
at midnight|um Mitternacht|phr||He arrived at midnight and went straight to bed.
motorway|Autobahn|n||The police stopped me on the motorway because I was speeding.
oil|Öl|n||The penguin's feathers were covered in oil.
painter|Maler(in)|n||My granny hired a painter to paint her portrait.
passionately|leidenschaftlich|adv|passion: Leidenschaft|They loved each other passionately.
payday|Zahltag|n||I won't buy you that toy until payday, when I get the cheque.
peacefully|friedlich|adv|peace: Frieden|The baby slept peacefully all night.
penguin|Pinguin|n||A penguin is a type of bird, but it can't fly.
pillow|Kopfkissen|n||The bed was comfortable, but the pillow was too soft.
poem|Gedicht|n||My favourite poem is Shakespeare's sonnet XVIII.
poet|Dichter(in)|n||
portrait|Porträt|n||There's a portrait of my Aunt Camilla at the local art gallery.
` },
{ nr: "3.6", titel: "Unit 3 · to refuse – tail", text: "Agenten und Räuber (secret agent, spy, robber) und Wörter rund ums Meer.", v: `
to refuse to do sth|sich weigern, etwas zu tun|v||She was so unhappy with his work that she refused to pay him.
robber|Räuber(in)|n|Verb: to rob sb: jdn. berauben|The robber escaped in a car that was parked outside the bank.
sardine|Sardine|n||He gave the penguin a sardine as a reward for the trick.
seashore|Meeresufer|n||I'm going down to the seashore for a walk. Would you like to come?
secret agent|Geheimagent(in)|n||James Bond is a famous fictional secret agent.
sick / ill|krank|adj||You don't look well. Are you feeling sick?
to spot|entdecken, erkennen|v|a spot: Punkt, Fleck, Pickel|They are identical twins. I can't spot any difference.
spy|Spion(in)|n / v||He was a spy for the secret service.
staff|Belegschaft, Personal|n||The staff were really kind and helped me with my shopping.
stall|Verkaufsstand|n||Let's go to the food stall to buy a sandwich.
strong|stark, kräftig|adj||After my illness, it took me a while to get strong again.
studio|Studio, Atelier|n||The painter rented a studio in the town centre.
tail|Schwanz|n||Bulldogs have a really short tail.
` },
{ nr: "3.7", titel: "Unit 3 · tear – to whisper", text: "Ende von Unit 3: Gefühle (tear, thump) und Adverbien (urgently).", v: `
tear|Träne|n||When I looked at him a tear was rolling down his face. It was so sad.
to thump|schlagen, pochen|v|aber: hit – hit – hit: schlagen (z.B. eine Person)|I was so excited I could hear my heart thump.
tiny|winzig|adj||The penguin was tiny when it was born.
triathlon|Triathlon|n|swim – swam – swum · run – ran – run|In a triathlon, athletes have to run, swim and cycle.
urgently|dringlich|adv|urgent (adj.): dringend|"Quick, James! Help me in!", Mary whispered urgently.
vase|Vase|n||He tripped and dropped a vase of flowers.
wallet / purse|Brieftasche, Portemonnaie|n||I lost my wallet while I was shopping.
to whisper|flüstern|v||It's rude to whisper in front of other people.
` },
{ nr: "4.1", titel: "Unit 4 · alcohol – chewing gum", text: "Unit 4 dreht sich ums Essen: backen, Süsses und Berufe in der Küche.", v: `
alcohol|Alkohol|n||Don't drink any alcohol if you are going to drive.
attraction|Attraktion|n|adj.: attractive · to be attracted by/to sb/sth: sich von jdm./etw. angezogen fühlen|The main attraction in the city of Bath are the Roman Baths.
to bake|backen|v|baker: Bäcker(in)|These cookies are delicious. Did you bake them?
baking|Back-|n||Have you got any baking chocolate?
bitterly|bitterlich|adv|bitter = bitter (z.B. a bitter coffee)|The night was bitterly cold.
bunch (of sth)|Haufen, Strauss, Bund|n||Can I have a bunch of bananas, please?
can|Dose|n||He cut himself opening a can of tuna fish.
caramel|Karamell|n||I love caramel sauce. It's so sweet.
chef|Koch, Köchin|n|boss = Chef(in)|My dad works as a chef at a famous restaurant.
chewing gum|Kaugummi|n|to chew: kauen|Chewing gum is a type of sweet. You chew it but you don't swallow it.
` },
{ nr: "4.2", titel: "Unit 4 · chilli – flavour", text: "Essen und Trinken: scharf, süss, koffeinfrei; britisches und amerikanisches Englisch (crisps, cookies).", v: `
chilli|Peperoni, Chili|n|Plural: chillies · the spice: das Gewürz|Chillies are usually hot and spicy.
complaint|Beschwerde|n|to complain about sth: sich über etw. beschweren|The restaurant was so successful they never had a complaint.
contented|zufrieden|adj|to be content: zufrieden sein|My granddad was a happy and contented man.
cookie|Plätzchen, Keks|n|BE: biscuit|Chocolate chip cookies are my favourite.
crisps|Chips|n pl|AE: chips|I ate a bag of crisps before lunch today. I was so hungry.
curry|Curry|n||My favourite food is spicy Indian curry.
decaf / decaffeinated|koffeinfrei|abbrev||I love coffee, but I usually have it decaf.
delicatessen|Feinkost|n||This new pastrami is a delicatessen. Try it!
to discover|entdecken|v|discovery: Entdeckung|I didn't discover I didn't have any salt until I started cooking.
dough|Teig|n||The dough for the bread is ready.
engineer|Ingenieur(in), Techniker(in)|n||My daughter is studying to become an engineer.
flavour / flavor|Geschmacksrichtung|n|flavor: amerikanische Schreibweise|Strawberry is my favourite chewing gum flavour.
` },
{ nr: "4.3", titel: "Unit 4 · fork – to invent", text: "Besteck, Küche und Erfindungen (to invent, increase).", v: `
fork|Gabel|n|cutlery: Besteck|You can't eat crisps with a fork.
knife|Messer|n|Plural: knives|
French fries|Pommes frites|n pl|Singular: fry · BE: chips|Would you like some French fries with your hamburger?
fridge / refrigerator|Kühlschrank|n||I was making omelettes, so I took some eggs out of the fridge.
to fry|braten|v||Did you fry the fish? It is delicious.
fussy|pingelig, wählerisch|adj|Don't be so fussy!|I was never a fussy eater. I liked everything!
glasses|Brille|n pl||I can't see without my glasses.
guest|Gast|n||The hotel guest complained about the service.
to hike|wandern|v|hike (n): Wanderung|We didn't come to the mountain to ski, we want to hike.
ice lolly|Eis am Stiel|n||My kids love to have an ice lolly when it's hot.
ID / identity card|Ausweis|abbrev|to prove: nachweisen, beweisen|Have you got any ID to prove you're over 18?
increase|Anstieg|n|to increase: ansteigen · to decrease: abnehmen, fallen|There was an increase in sales of chocolate bars due to Mary's recipe.
industrial|industriell, Industrie-|adj||I live in an industrial town outside London.
to invent|erfinden|v|invention: Erfindung · inventor: Erfinder(in)|It's very difficult to invent something totally new.
` },
{ nr: "4.4", titel: "Unit 4 · to lick – out of this world", text: "Einkaufen in Grossbritannien (newsagent, off-licence) und Wörter rund ums Essen.", v: `
to lick|lecken, schlecken|v||You don't chew ice lollies, you lick them.
to give sb a lift|jdn. mitnehmen (im Auto)|phr|a lift: eine Mitfahrgelegenheit|Could you please give me a lift to the airport?
loaf|Laib|n|Plural: loaves · a loaf of bread: ein Laib Brot|Can I have a loaf of white bread, please?
to lose|verlieren|v|lose – lost – lost|As adults, we lose a lot of taste buds.
match|Streichholz|n||We need a match to light a fire.
to melt|schmelzen|v||Chocolate chips don't melt completely in the oven.
newsagent|Zeitschriftenladen|n||I bought your birthday card at the newsagent's.
off-licence|Wein- und Spirituosengeschäft|n||I'll go to the off-licence to get a bottle of wine.
olive|Olive|n||You have to try the Kalamata olive when you are in Greece.
omelette / omelet|Omelett|n|to make an omelette|There are no eggs in the fridge so you can't make an omelette.
original|ursprünglich|adj||The original US name for ice lollies is popsicles.
out of this world|himmlisch|phr|= heavenly|The views from the hotel window were out of this world.
` },
{ nr: "4.5", titel: "Unit 4 · packet – slice", text: "Verpackungen, Erfindungen (patent) und Post (postcard, to receive).", v: `
packet|Packung|n||Can I have a packet of crisps, please?
patent|Patent|n||Frank Epperson sold the patent for his popsicles.
petrol / gas|Benzin|n|gas: amerikanisch|Is there any petrol in the car?
popular|beliebt|adj|auch eine Person kann popular sein|Ice lollies are very popular with kids.
porch|Veranda|n||The kids are playing on the front porch.
postcard|Postkarte|n||Send me a postcard when you get to Italy.
powder|Pulver|n||Ice lollies are made by mixing flavoured powder with water.
to publish|veröffentlichen|v||Did they publish your article in the local newspaper?
to receive|erhalten|v||When did you receive the letter?
roast chicken|Brathähnchen, Poulet|n||We're having roast chicken for dinner.
secret|Geheimnis|n||What's the secret to a long happy life?
shopkeeper|Ladenbesitzer(in)|n||My dad was a shopkeeper. He had a fish and chip shop.
slice|Scheibe; in Scheiben schneiden|n / v||You have to slice the potato really thin to make crisps.
` },
{ nr: "4.6", titel: "Unit 4 · sparkling – to taste", text: "Getränke, Gemüse und Geschmack (spicy, to taste).", v: `
sparkling|mit Kohlensäure|adj|still or sparkling: mit oder ohne Kohlensäure|How would you like the water, still or sparkling?
still|ohne Kohlensäure, still|adj||
spectacular|spektakulär|adj||The views from the mountain top were spectacular.
spicy / hot|scharf, stark gewürzt|adj||Young children don't usually like spicy curries.
spinach|Spinat|n||Spinach is my favourite vegetable.
spoon|Löffel|n||He served the vegetables with a spoon.
a spoonful of|ein Löffel voll|n|a spoonful of sugar|Add a spoonful of sugar to the mixture.
(Brussels) sprouts|Rosenkohl|n pl||Sprouts are small, round and green and taste like cabbage.
strange|fremd, seltsam|adj||It was strange that he called so late.
stranger|Fremde(r)|n||
successful|erfolgreich|adj||The company that bought the patent became very successful.
success|Erfolg|n||
supply of sth|Vorrat|n||Wouldn't it be great to have a lifetime's supply of chocolate?
to taste|schmecken|v|She has good taste: Sie hat einen guten Geschmack.|These cookies taste delicious. You have to give me the recipe.
` },
{ nr: "4.7", titel: "Unit 4 · taste buds – whisky", text: "Ende von Unit 4: Zunge und Geschmack, Erwartungen.", v: `
taste buds|Geschmacksknospen|n pl||We use the taste buds in our tongue to recognize different flavours.
thin|dünn|adj||Thin crispy vegetables are my favourite.
tissue|Papiertaschentuch|n||I can't stop sneezing! Have you got a box of tissues?
tongue|Zunge|n||Supertasters have more taste buds in their tongue than most people.
tuna|Thunfisch|n||Cats usually love tuna.
expected|erwartet|adj|to expect sth from sb: etw. von jdm. erwarten · expectation: Erwartung|
unexpected|unerwartet|adj||His success was unexpected. Nobody thought it would happen.
wax paper|Wachspapier|n||They sell their fish and chips in wax paper.
whisky|Whisky|n||He drank a glass of whisky and went to bed.
` },
{ nr: "5.1", titel: "Unit 5 · advertising – career", text: "Unit 5 handelt von Berufen und Karrieren, aber auch von Hackern und Cyberangriffen.", v: `
advertising|Werbung, Werbebranche|n||Marek works in advertising. He designs ads for television.
ambition|Ehrgeiz|n||His ambition was to become a doctor.
ambitious|ehrgeizig|adj||
to apply for|sich bewerben für|v||I'm going to apply for a job in a big company.
application|Bewerbung|n||
to arrest|verhaften|v||The police went to his room to arrest him.
as usual|wie gewöhnlich|phr||He's going to be late, as usual.
attack|Angriff, Attacke; angreifen|n / v||Teenagers are behind some of the most notorious cyber attacks.
average|durchschnittlich; Durchschnitt|n / adj|on average: im Durchschnitt|The average age of a hacker is just 17.
award|Preis, Auszeichnung|n|to win an award for sth|He won an award for one of his ads.
ballet|Ballett|n||My son wants to train to be a ballet dancer.
to break|kaputt gehen, zerbrechen|v||
to take a break|eine Pause machen|phr|a break: eine Pause|You work too much. You need a break.
brilliant|grossartig|adj||You're brilliant with kids. You should be a teacher.
to bully|schikanieren, mobben|v||We didn't bully him. We tried to make friends with him.
career|Karriere|n||Leaving his job was a bad career decision.
` },
{ nr: "5.2", titel: "Unit 5 · to carry out – disappointed", text: "Wörter aus dem Text über den Hacker Adam Mudd: Gericht, Schulden, Computerviren.", v: `
to carry out|durchführen|phr v||He didn't carry out 800 virus attacks. They were nearly 600.
to catch up with sth|aufholen, auf den neusten Stand kommen|phr v||Hi! I'm just calling to catch up with your news.
competition|Wettbewerb|n|to compete: konkurrieren · competitor: Konkurrent(in)|We had a competition to see who scored the most goals.
course|Kurs|n||Do you know which course you are going to study next year?
court|Gericht|n||
to take sb to court|jdn. vor Gericht bringen|phr||They took Adam Mudd to court for creating and selling a virus.
crash|Absturz; zum Absturz bringen|n / v||The virus was used to crash websites all over the world.
to create|erstellen, erschaffen|v|creation: Erschaffung, Schöpfung · creative: kreativ|Why did he create the software?
cyber criminal|Internetkriminelle(r)|n||He sold the programme to a cyber criminal.
debt|Schuld, Schulden|n|to be in debt: Schulden haben · to be in sb's debt: jdm. verpflichtet sein|I need to pay off a debt of £15,000.
definite|konkret, bestimmt|adj||Have you got any definite plans for this weekend?
to develop|entwickeln|v|development: Entwicklung|You need to train hard to develop your talent.
disappointed|enttäuscht|adj|disappointment: Enttäuschung|I think you'll enjoy the film. You won't be disappointed.
` },
{ nr: "5.3", titel: "Unit 5 · doubt – literal", text: "Schule und Freizeit (exam, fashion, give up) und Beziehungen (fall out with, get on with).", v: `
doubt|zweifeln; Zweifel|v / n||Do you really think he'll come to the party? I doubt it.
to earn|verdienen|v||Does Marek earn a lot of money in his new job?
exam|Prüfung, Examen|n||You won't pass your exam if you don't study harder.
to fall out with sb|sich mit jdm. zerstreiten|phr v||We were very good friends. I never thought I could fall out with him.
fashion|Mode|n|fashionable: modisch|She loves clothes, so she's doing a course on fashion design.
favourite|Lieblings-, liebste(r, s)|adj||My favourite hobby is swimming.
to be fed up with|die Nase voll haben von etw.|adj||I'm so fed up with taking exams!
to get on (well) with|mit jdm. (gut) auskommen|phr v||I like my new boss. I get on well with him.
to give up|aufgeben|phr v||If you like dancing so much, don't give up!
grandparents|Grosseltern|n pl|grandparent: Grosselternteil|My grandparents live in Germany. I visit them every summer.
to grow up|erwachsen werden, aufwachsen|phr v|grow – grew – grown|What do you want to be when you grow up?
hacker|Hacker(in)|n||He was a hacker and got a really good IT job.
to be homesick|Heimweh haben|adj||I feel a bit homesick when I travel.
idiomatic expression|Redewendung, idiomatischer Ausdruck|n|z.B. to be fit as a fiddle|Her Italian is fluent and idiomatic.
landscape design|Landschaftsgestaltung|n||I'm interested in gardens so I'm going to do landscape design.
to leap|springen|v|leap – leapt – leapt|He's a ballet dancer and he can leap really high.
literal|wörtlich, buchstäblich|adj|literal meaning: wörtliche Bedeutung|The literal meaning of take is 'to lift'.
` },
{ nr: "5.4", titel: "Unit 5 · to look after – stressful", text: "Phrasal verbs mit look (after, forward to, up), Geld (owe, pay back) und Gefühle.", v: `
to look after|sich kümmern um|phr v||When I was young, I had to look after my baby brother.
to look forward to|sich freuen auf|phr v|to look forward to doing sth|I look forward to seeing you again.
to look up|nachschlagen|phr v||If you don't know the meaning of a word, look it up in a dictionary!
miserable|unglücklich, elend|adj|to feel / be miserable: sich unglücklich fühlen (oder sein)|Fighting with a friend makes you feel miserable.
to be notorious for sth|berüchtigt sein für|adj||He was notorious for his crimes.
to owe|schulden|v||My daughter owes me £100. She hasn't paid me yet.
paramedic|Sanitäter(in)|n||I work as a paramedic. I try to help sick people.
to pay sb back|jdm. etw. zurückzahlen|phr v|lend – lent – lent|I'll lend you the money but please pay me back as soon as you can.
principal|Haupt-, Solo-|adj / n|n: (in einer Schule) Schulleiter(in)|Joel's dream is to become the principal dancer at the ballet company.
prison|Gefängnis|n||Mudd will spend the next two years in prison for cyber crime.
programme / program|Programm|n|programme: britisch · program: amerikanisch und für Computerprogramme|Hackers used his computer program to crash websites worldwide.
to run out of|ausgehen (etwas)|phr v|run – ran – run|I have to stop at the petrol station or I'll run out of petrol.
slum|Slum, Elendsviertel|n||A slum is an area of a city that is very poor and in bad condition.
soul|Seele|n||I'll tell you my secret, but don't tell a soul.
stressful|stressig|adj|to be stressed: gestresst sein|My job is so stressful. I need a break!
` },
{ nr: "5.5", titel: "Unit 5 · to be suitable for – virus", text: "Ende von Unit 5: viele Phrasal verbs (take off, put on, take up, throw away, turn on/off).", v: `
to be suitable for|geeignet sein für|adj||The kitchen isn't a suitable place for a meeting.
to take off|ausziehen|phr v|take – took – taken|Come in and take off your coat.
to put on|anziehen|phr v|put – put – put|
to take up|anfangen (z.B. ein Hobby)|phr v||I'm going to take up dancing lessons this year.
talent|Talent|n|to be talented: talentiert sein|I wanted to become a musician but I had no talent.
to throw away|wegwerfen|phr v|throw – threw – thrown|Don't throw the newspaper away. I want to read it.
traffic jam|Stau|n||We were stuck in a traffic jam for two hours!
to try on|anprobieren|phr v||Can I try on your dress? It looks so pretty.
to turn off|ausschalten|phr v||Turn off the lights before you leave.
to turn on|anschalten|phr v||
to turn round|umdrehen|phr v||Turn round and let me see the back of that dress. It looks great.
username|Benutzername|n||You need a username and password to use this computer.
virus|Virus|n||He created a computer virus and carried out 600 cyber attacks.
` }
  ]
});
