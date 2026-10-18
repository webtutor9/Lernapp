/* Fach Latein – Lernwortschatz 01–32
   Vokabelzeilen: Latein | Deutsch | Wortart (n = Nomen, v = Verb, a = Adjektiv, k = Kleinwort) */
(window.FAECHER = window.FAECHER || []).push({
  id: "latein",
  name: "Latein",
  art: "vokabeln",
  farbe: "#b5532f",
  kuerzel: "La",
  einfuehrung: {
    titel: "So liest du den Lernwortschatz",
    text: `Im Lernwortschatz steht links das lateinische Wort, rechts die deutsche Bedeutung. Beim Latein steht aber oft mehr als nur ein Wort, und diese Zusatzinfos musst du mitlernen.

**Nomen** stehen immer mit zwei Formen und einem Buchstaben, zum Beispiel *fīlia, fīliae f.* Die erste Form ist der Nominativ (wer?), die zweite der Genitiv (wessen?). Am Genitiv erkennst du, wie das Wort dekliniert wird. Der Buchstabe zeigt das Geschlecht (Genus): m. = maskulin (der), f. = feminin (die), n. = neutrum (das). Achtung: Das lateinische Genus ist nicht immer gleich wie im Deutschen. *Sōl* (die Sonne) ist maskulin.

**Verben** stehen mit vier Formen, den **Stammformen**, zum Beispiel *vocāre, vocō, vocāvī, vocātum*: Infinitiv (rufen), 1. Person Präsens (ich rufe), 1. Person Perfekt (ich habe gerufen), PPP (gerufen). Ein Strich (–) heisst, dass es diese Form nicht gibt.

**Adjektive** stehen mit drei Endungen für männlich, weiblich, sächlich: *bonus, bona, bonum*. Bei Adjektiven der 3. Deklination steht manchmal der Genitiv dabei: *fēlīx; Gen. fēlīcis*.

**Präpositionen** haben einen Hinweis, welcher Fall danach kommt: *+ Akk.* oder *+ Abl.* Bei *in* ist das besonders wichtig: in + Akkusativ = wohin? (in … hinein), in + Ablativ = wo? (in, auf).

Die Striche über Vokalen (ā, ē, ī, ō, ū) heissen **Längezeichen**. Sie zeigen, dass der Vokal lang gesprochen wird. Sie helfen auch, Wörter zu unterscheiden: *līber* = frei, *liber* = Buch.

| Abkürzung | Bedeutung |
|---|---|
| m. | maskulin (der) |
| f. | feminin (die) |
| n. | neutrum (das) |
| Pl. | Wort gibt es nur im Plural |
| + Akk. | danach folgt der Akkusativ |
| + Abl. | danach folgt der Ablativ |
| + Gen. | danach folgt der Genitiv |
| Adv. | Adverb |
| Subj. | Subjunktion, leitet einen Nebensatz ein |
| nachgestellt | steht nach dem ersten Wort des Satzes |
| – | diese Stammform gibt es nicht |

| Stammform | Beispiel | Deutsch |
|---|---|---|
| Infinitiv | vocāre | rufen |
| 1. Sg. Präsens | vocō | ich rufe |
| 1. Sg. Perfekt | vocāvī | ich habe gerufen / ich rief |
| PPP (Partizip Perfekt Passiv) | vocātum | gerufen |

**Verwechslungsgefahr:** *līber* (frei) – *liber* (Buch) – *līberī* (Kinder) · *oppidum* und *urbs* (beide Stadt) · *timor* und *metus* (beide Angst) · *iubēre* und *imperāre* (beide befehlen) · *vetāre* und *prohibēre* (beide verbieten). Wörter mit zwei Bedeutungen: *ubī* (wo / sobald), *cum* (mit / als, wenn), *pōnere* (legen / stellen), *ante* (vor / vorher).`,
    quiz: [
      { f: "Was bedeutet «f.» hinter einem Nomen?", o: ["Plural", "Futur", "feminin", "Fragewort"], r: 2, e: "f. steht für feminin, also weibliches Genus." },
      { f: "Welche Form steht bei einem Nomen an zweiter Stelle, z. B. patris bei pater, patris?", o: ["Akkusativ", "Plural", "Dativ", "Genitiv"], r: 3, e: "Die zweite Form ist immer der Genitiv Singular." },
      { f: "Wie viele Stammformen hat ein Verb im Lernwortschatz normalerweise?", o: ["zwei", "vier", "sechs", "drei"], r: 1, e: "Infinitiv, Präsens, Perfekt und PPP sind vier Formen." },
      { f: "Was bedeutet in + Akkusativ?", o: ["mit", "ohne", "wohin? (in … hinein)", "wo? (in, auf)"], r: 2, e: "Mit Akkusativ zeigt in eine Richtung an." },
      { f: "Wozu dient das Zeichen über dem ā?", o: ["Es zeigt den Plural", "Es zeigt einen langen Vokal", "Es zeigt eine Frage", "Es ist nur Verzierung"], r: 1, e: "Der Strich ist ein Längezeichen und zeigt einen lang gesprochenen Vokal." },
      { f: "Was heisst ein Strich (–) bei den Stammformen?", o: ["Die Form ist unregelmässig", "Man soll sie nicht lernen", "Diese Form gibt es nicht", "Die Form ist gleich wie die vorige"], r: 2, e: "Der Strich zeigt, dass das Verb diese Stammform nicht bildet." }
    ]
  },
  lektionen: [
{ nr: 1, titel: "Die Familie", text: "In der ersten Lektion lernst du die Familie kennen: Vater (pater), Mutter (māter), Sohn, Tochter, Bruder, Schwester. Dazu kommen die ersten Verben wie stāre (stehen), sedēre (sitzen) und vidēre (sehen) und das wichtigste Verb überhaupt: esse (sein). Kleine Wörter wie et (und), ubī (wo) und ecce (da!) brauchst du in fast jedem Satz.", v: `
fīlia, fīliae f.|die Tochter|n
fīlius, fīliī m.|der Sohn|n
frāter, frātris m.|der Bruder|n
gēns, gentis f.|die Familie|n
māter, mātris f.|die Mutter|n
pater, patris m.|der Vater|n
soror, sorōris f.|die Schwester|n
uxor, uxōris f.|die Ehefrau|n
alius, alia, aliud|ein anderer|a
bonus, bona, bonum|gut|a
māgnus, māgna, māgnum|gross|a
prīmus, prīma, prīmum|erste(r)|a
probus, proba, probum|tüchtig|a
tertius, tertia, tertium|dritte(r)|a
rogāre, rogō, rogāvī, rogātum|fragen, fragte, gefragt|v
stāre, stō, stetī, statum|stehen, stand, gestanden|v
sedēre, sedeō, sēdī, sessum|sitzen, sass, gesessen|v
vidēre, videō, vīdī, vīsum|sehen, sah, gesehen|v
cōnsistere, cōnsistō, cōnstitī, –|stehen bleiben, blieb stehen, stehen geblieben|v
esse, sum, fuī, –|sein, war, gewesen|v
egō|ich|k
ibī|dort|k
nam|denn|k
ecce|da!|k
et|und; auch|k
ubī|wo|k` },
{ nr: 2, titel: "Im römischen Haus", text: "Lektion 2 spielt in einem römischen Haus. Zur familia gehörten nicht nur Eltern und Kinder, sondern alle, die im Haus lebten, auch Sklaven (servus, serva) und Freigelassene (lībertus, līberta). Herr und Herrin heissen dominus und domina. Viele Verben aus dieser Lektion kennst du aus dem Alltag: rufen, warten, tragen, kaufen, hören, schlafen, kommen.", v: `
cēna, cēnae f.|das (Abend-)Essen|n
familia, familiae f.|die Familie (d.h. Hausgemeinschaft)|n
serva, servae f.|die Sklavin|n
līberta, lībertae f.|die Freigelassene|n
domina, dominae f.|die Herrin|n
servus, servī m.|der Sklave|n
lībertus, lībertī m.|der Freigelassene|n
dominus, dominī m.|der Herr|n
cibus, cibī m.|die Nahrung|n
forum, forī n.|das Forum|n
novus, nova, novum|neu|a
vocāre, vocō, vocāvī, vocātum|rufen, rief, gerufen|v
exspectāre, exspectō, exspectāvī, exspectātum|(er)warten, (er)wartete, gewartet (erwartet)|v
parāre, parō, parāvī, parātum|bereit machen, machte bereit, bereit gemacht|v
portāre, portō, portāvī, portātum|tragen, trug, getragen; bringen, brachte, gebracht|v
respondēre, respondeō, respondī, respōnsum|antworten, antwortete, geantwortet|v
emere, emō, ēmī, ēmptum|kaufen|v
audīre, audiō, audīvī, audītum|hören, hörte, gehört|v
dormīre, dormiō, dormīvī, dormītum|schlafen, schlief, geschlafen|v
scīre, sciō, scīvī, scītum|wissen, wusste, gewusst|v
venīre, veniō, vēnī, ventum|kommen, kam, gekommen|v
vōs (Nom. / Akk.)|ihr / euch|k
etiam|auch|k
iam|schon|k
nōn|nicht|k
sed|aber, sondern|k
autem (nachgestellt)|aber|k
cūr|warum?|k` },
{ nr: 3, titel: "In der Stadt Rom", text: "In Lektion 3 geht es hinaus in die Stadt Rom: Strasse (via), Tempel (templum), Berg (mōns) und Redner (ōrātor). Neu sind viele Präpositionen mit Akkusativ: ad, apud, ante, per, in. Achtung: in + Akkusativ bedeutet eine Richtung (wohin? in … hinein).", v: `
via, viae f.|der Weg; die Strasse|n
templum, templī n.|der Tempel|n
homō, hominis m.|der Mensch; der Mann|n
mōns, montis m.|der Berg|n
ōrātor, ōrātōris m.|der Redner|n
Rōmānus, Rōmāna, Rōmānum|römisch|a
Rōmānus, Rōmānī m.|der Römer|n
multī, multae, multa|viele|a
pulcher, pulchra, pulchrum|schön|a
secundus, secunda, secundum|zweiter, zweite, zweites|a
intrāre, intrō, intrāvī, intrātum|eintreten, trat ein, eingetreten; betreten, betrat, betreten|v
petere, petō, petīvī, petītum (+ Akk.)|auf jmdn. zugehen, ging zu, zugegangen|v
dūcere, dūcō, dūxī, ductum|führen, führte, geführt|v
relinquere, relinquō, relīquī, relictum|zurücklassen, liess zurück, zurückgelassen|v
currere, currō, cucurrī, cursum|laufen|v
pervenīre, perveniō, pervēnī, perventum (+ ad/in)|ankommen, kam an, angekommen|v
invenīre, inveniō, invēnī, inventum|finden, fand, gefunden|v
adesse, adsum, adfuī, –|da sein, war da, da gewesen|v
nōn iam|nicht mehr|k
tum|dann; da plötzlich|k
ad (+ Akk.)|zu; bei|k
apud (+ Akk.)|bei|k
ante (+ Akk.)|vor|k
per (+ Akk.)|durch; über|k
in (+ Akk.)|in (… hinein); auf (… hinauf)|k` },
{ nr: 4, titel: "In den Thermen", text: "Lektion 4 führt in die Thermen, die öffentlichen Bäder der Römer. Dort trifft man Jungen (puer), Männer (vir), junge Männer (iuvenis), Frauen (mulier) und alte Männer (senex). Neu sind Präpositionen mit Ablativ: ab/ā, cum, ex/ē und in. In + Ablativ bedeutet einen Ort (wo? in, auf).", v: `
aqua, aquae f.|das Wasser|n
thermae, thermārum f. Pl.|die Thermen|n
modus, modī m.|die Art und Weise|n
puer, puerī m.|der Junge|n
vir, virī m.|der Mann|n
gaudium, gaudiī n.|die Freude|n
studium, studiī n.|der Eifer|n
dolor, dolōris m.|der Schmerz|n
iuvenis, iuvenis m.|der junge Mann|n
mulier, mulieris f.|die Frau|n
ōs, ōris n.|der Mund; das Gesicht|n
senex, senis m.|der alte Mann|n
vestis, vestis f.|das Kleidungsstück|n
cūnctī, cūnctae, cūncta|alle|a
servāre, servō, servāvī, servātum|bewahren, bewahrte, bewahrt|v
spectāre, spectō, spectāvī, spectātum|betrachten, betrachtete, betrachtet|v
exercēre, exerceō, exercuī, exercitum|üben, übte, geübt|v
manēre, maneō, mānsī, mānsum|bleiben, blieb, geblieben|v
rīdēre, rīdeō, rīsī, rīsum|lachen, lachte, gelacht|v
bibere, bibō, bibī, bibitum|trinken, trank, getrunken|v
cōnsīdere, cōnsīdō, cōnsēdī, cōnsessum|sich setzen, setzte sich, sich gesetzt|v
dēscendere, dēscendō, dēscendī, dēscēnsum|hinabsteigen, stieg hinab, hinabgestiegen|v
sentīre, sentiō, sēnsī, sēnsum|spüren, spürte, gespürt|v
diū (Adv.)|lange Zeit|k
iterum (Adv.)|wiederum|k
nunc (Adv.)|nun|k
tandem|endlich|k
ab / ā (+ Abl.)|von … (her, weg)|k
cum (+ Abl.)|mit|k
ex / ē (+ Abl.)|aus … (heraus)|k
in (+ Abl.)|in, auf|k` },
{ nr: 5, titel: "Im Circus", text: "Lektion 5 ist im Circus, der Rennbahn: Pferde (equus), Wagen (currus), Spiele (lūdus) und eine grosse Menschenmenge (turba). Wichtige Verben sind habēre (haben), tenēre (halten), dīcere (sprechen) und īre (gehen). Fragewörter wie quid? (was?) und quō? (wohin?) helfen dir beim Übersetzen.", v: `
turba, turbae f.|die Menschenmenge|n
circus, circī m.|die Rennbahn|n
deus, deī m.|der Gott|n
equus, equī m.|das Pferd|n
lūdus, lūdī m.|das Spiel|n
signum, signī n.|das Zeichen|n
caput, capitis n.|der Kopf|n
pēs, pedis m.|der Fuss|n
rēx, rēgis m.|der König|n
currus, currūs m.|der Wagen|n
cornū, cornūs n.|das Horn|n
maximus, maxima, maximum|der/die/das grösste|a
clāmāre, clāmō, clāmāvī, clāmātum|schreien, schrie, geschrien|v
habēre, habeō, habuī, habitum|haben, hatte, gehabt|v
tenēre, teneō, tenuī, tentum|halten, hielt, gehalten|v
dīcere, dīcō, dīxī, dictum|sprechen, sprach, gesprochen|v
īre, eō, iī, itum|gehen, ging, gegangen|v
quid?|was?|k
quō?|wohin?|k
bene (Adv.)|gut|k
deinde|darauf|k
hodiē|heute|k
prīmum|zuerst|k
subitō|plötzlich|k
circum (+ Akk.)|um … herum|k
post (+ Akk.)|nach, hinter|k
super (+ Akk.)|über|k` },
{ nr: 6, titel: "Das Wettrennen", text: "In Lektion 6 lernst du die Ordnungszahlen vierter, fünfter, sechster und Wörter rund um ein Wettrennen: Lauf (cursus), Ziel (fīnis), siegen (vincere). Neu und besonders wichtig sind posse (können) und velle (wollen). Mit -ne am Ende eines Wortes macht man aus einem Satz eine Frage.", v: `
fīnis, fīnis m.|das Ende; das Ziel|n
vōx, vōcis f.|die Stimme|n
cursus, cursūs m.|der Lauf|n
aureus, aurea, aureum|golden|a
quārtus, quārta, quārtum|vierter, vierte, viertes|a
quīntus, quīnta, quīntum|fünfter, fünfte, fünftes|a
sextus, sexta, sextum|sechster, sechste, sechstes|a
sōlus, sōla, sōlum|allein|a
complēre, compleō, complēvī, complētum|füllen, füllte, gefüllt|v
gaudēre, gaudeō, gāvīsus sum|sich freuen, freute mich, gefreut|v
cadere, cadō, cecidī, cāsum|fallen, fiel, gefallen|v
vincere, vincō, vīcī, victum|siegen, siegte, gesiegt; besiegen, besiegte, besiegt|v
incipere, incipiō, incēpī/coepī, inceptum/coeptum|beginnen, begann, begonnen|v
perficere, perficiō, perfēcī, perfectum|vollenden, vollendete, vollendet|v
aperīre, aperiō, aperuī, apertum|öffnen, öffnete, geöffnet|v
praeterīre, praetereō, praeteriī, praeteritum (+ Akk.)|vorbeigehen an, ging vorbei, vorbeigegangen|v
posse, possum, potuī|können, konnte, gekonnt|v
velle, volō, voluī|wollen, wollte, gewollt|v
nōs (Nom. / Akk. Pl.)|wir, uns|k
sē (Akk., Abl.)|sich|k
suus, sua, suum|sein / ihr|a
tū|du|k
intus|drinnen|k
quia|weil|k
-ne|(Fragepartikel)|k` },
{ nr: 7, titel: "Haus und Körper", text: "Lektion 7 bringt Wörter für Haus und Körper: domus (Haus), manus (Hand). Dazu kommen Pronomen: is, ea, id (er, sie, es), ipse (selbst), mē (mich) und mihī (mir). Viele Verben drücken aus, was man jemandem tut: geben, befehlen, gehorchen, gefallen, zeigen, zurückgeben.", v: `
amīca, amīcae f.|die Freundin|n
umbra, umbrae f.|der Schatten|n
imāgō, imāginis f.|das Bild|n
domus, domūs f. [Abl. meist domō]|das Haus|n
manus, manūs f.|die Hand|n
noster, nostra, nostrum|unser|a
dare, dō, dedī, datum|geben, gab, gegeben|v
imperāre, imperō, imperāvī, imperātum|befehlen, befahl, befohlen|v
lavāre, lavō, lāvī, lautum|waschen, wusch, gewaschen|v
pārēre, pāreō, pāruī, –|gehorchen, gehorchte, gehorcht|v
placēre, placeō, placuī, placitum|gefallen, gefiel, gefallen|v
tacēre, taceō, tacuī, tacitum|schweigen, schwieg, geschwiegen|v
canere, canō, cecinī, cantum|singen|v
ēripere, ēripiō, ēripuī, ēreptum|entreissen, entriss, entrissen|v
ostendere, ostendō, ostendī, ostentum|zeigen, zeigte, gezeigt|v
reddere, reddō, reddidī, redditum|zurückgeben, gab zurück, zurückgegeben|v
tollere, tollō, sustulī, sublātum|aufheben, hob auf, aufgehoben|v
ipse, ipsa, ipsum|selbst|k
is, ea, id|er, sie, es|k
mē (Akk., Abl. Sg.)|mich|k
mihī (Dat. Sg.)|mir|k
dē (+ Abl.)|von (herab)|k
valdē|sehr|k
tamen|trotzdem|k` },
{ nr: 8, titel: "Stadt und Reisen", text: "Lektion 8 dreht sich um Stadt und Reisen: zwei Wörter für Stadt (oppidum und urbs), Meer (mare), Theater, Sommer. Neu sind Adjektive wie ācer (scharf) und celer (schnell), die nach der 3. Deklination gehen. Viele kleine Wörter wie saepe (oft), semper (immer), numquam (niemals) kommen dazu.", v: `
memoria, memoriae f.|die Erinnerung|n
puella, puellae f.|das Mädchen|n
līberī, līberōrum m.|die Kinder|n
theātrum, theātrī n.|das Theater|n
oppidum, oppidī n.|die Stadt|n
aestās, aestātis f.|der Sommer|n
mare, maris n.|das Meer|n
parentēs, parentum m.|die Eltern|n
urbs, urbis f.|die Stadt|n
antīquus, antīqua, antīquum|alt|a
duo, duae, duo|zwei|a
plēnus, plēna, plēnum (+ Gen.)|voll mit etwas|a
vester, vestra, vestrum|euer|a
ācer, ācris, ācre|scharf|a
celer, celeris, celere|schnell|a
habitāre, habitō, habitāvī, habitātum|wohnen, wohnte, gewohnt|v
nārrāre, nārrō, nārrāvī, nārrātum|erzählen, erzählte, erzählt|v
iacēre, iaceō, iacuī, –|liegen, lag, gelegen|v
vēndere, vēndō, vēndidī, vēnditum|verkaufen, verkaufte, verkauft|v
adīre, adeō, adiī, aditum (+ Akk.)|zu jmdm. hingehen, jmdn. aufsuchen|v
inquit|sagt sie/er, sagte sie/er|k
aliquis, aliquid|jemand, etwas|k
nōbīs (Dat., Abl. Pl.)|uns|k
numquam|niemals|k
praetereā|ausserdem|k
quam|als|k
saepe|oft|k
semper|immer|k
tantum (nachgestellt)|nur|k` },
{ nr: 9, titel: "Krieg und Schicksal", text: "In Lektion 9 geht es um Krieg und Schicksal: Schlacht (proelium), Heer (exercitus), Fluss (flūmen), Bote (nūntius). Wichtig sind Verben wie iubēre (befehlen), timēre (fürchten), mittere (schicken) und capere (ergreifen). Mit -que hängt man ein «und» hinten an ein Wort: senātus populusque = der Senat und das Volk.", v: `
fortūna, fortūnae f.|das Glück, das Schicksal|n
lacrima, lacrimae f.|die Träne|n
pecūnia, pecūniae f.|das Geld, das Vermögen|n
nūntius, nūntiī m.|der Bote, die Botschaft|n
proelium, proeliī n.|die Schlacht|n
rēgnum, rēgnī n.|das (König-)Reich|n
flūmen, flūminis n.|der Fluss|n
exercitus, exercitūs m.|das Heer|n
ingēns, ingentis|gewaltig, ungeheuer|a
putāre, putō, putāvī, putātum (+ doppelter Akk.)|glauben; jdn. für etw. halten|v
iubēre, iubeō, iussī, iussum|befehlen, befahl, befohlen|v
timēre, timeō, timuī, –|fürchten, fürchtete, gefürchtet|v
mittere, mittō, mīsī, missum|schicken, schickte, geschickt|v
intellegere, intellegō, intellēxī, intellēctum|verstehen, verstand, verstanden|v
quaerere, quaerō, quaesīvī, quaesītum (+ ex + Abl.)|suchen, suchte, gesucht; jdn. fragen, fragte, gefragt|v
capere, capiō, cēpī, captum|ergreifen, ergriff, ergriffen|v
paulō post|wenig später|k
-que (nachgestellt)|und|k
itaque|deshalb|k
neque … neque … / nec … nec …|weder … noch …|k` },
{ nr: 10, titel: "Gefühle", text: "Lektion 10 enthält viele Gefühlswörter: Liebe (amor), Tod (mors), glücklich (fēlīx), unglücklich (īnfēlīx), traurig (trīstis). Neu ist nōlle (nicht wollen), das Gegenteil von velle. Sine (ohne) steht immer mit Ablativ.", v: `
herba, herbae f.|das Gras|n
oculus, oculī m.|das Auge|n
verbum, verbī n.|das Wort|n
amor, amōris m.|die Liebe|n
corpus, corporis n.|der Körper|n
mors, mortis f.|der Tod|n
sōl, sōlis m.|die Sonne|n
vīs, vim, vī; Pl. vīrēs, vīrium f.|die Kraft|n
clārus, clāra, clārum|hell, berühmt|a
gravis, gravis, grave|schwer|a
fēlīx, fēlīx, fēlīx; Gen. fēlīcis|glücklich|a
īnfēlīx, īnfēlīx, īnfēlīx; Gen. īnfēlīcis|unglücklich|a
similis, similis, simile|ähnlich|a
trīstis, trīstis, trīste|traurig|a
amāre, amō, amāvī, amātum|lieben, liebte, geliebt|v
cupere, cupiō, cupīvī, cupītum|begehren, begehrte, begehrt|v
fugere, fugiō, fūgī, fugitum (+ Akk.)|fliehen, floh, geflohen (vor jmdm.)|v
nōlle, nōlō, nōluī|nicht wollen|v
nūllus, nūlla, nūllum; Gen. nūllīus, Dat. nūllī|kein|a
et … et …; …que …que|sowohl … als auch …; … und …|k
sine (+ Abl.)|ohne|k
ubī|sobald|k` },
{ nr: 11, titel: "Die Sache und das Tragen", text: "In Lektion 11 lernst du die 5. Deklination kennen: rēs (Sache), diēs (Tag), speciēs (Anblick). Sehr wichtig ist das Verb ferre (tragen) mit seinen unregelmässigen Stammformen tulī, lātum und vielen Zusammensetzungen: auferre, īnferre, trānsferre, referre. Subjunktionen wie quamquam, dum, postquam und sī leiten Nebensätze ein.", v: `
īra, īrae f.|der Zorn|n
rēs, reī f.|die Sache|n
diēs, diēī m.|der Tag|n
speciēs, speciēī f.|der Anblick|n
omnis, omnis, omne|jeder; Pl. alle|a
dēbēre, dēbeō, dēbuī, dēbitum|müssen, musste, gemusst; schulden, schuldete, geschuldet|v
flēre, fleō, flēvī, flētum|weinen, weinte, geweint|v
dēcernere, dēcernō, dēcrēvī, dēcrētum|entscheiden, entschied, entschieden|v
ferre, ferō, tulī, lātum|tragen, trug, getragen|v
auferre, auferō, abstulī, ablātum|wegtragen, trug weg, weggetragen|v
īnferre, īnferō, intulī, illātum|hineintragen, trug hinein, hineingetragen|v
trānsferre, trānsferō, trānstulī, trānslātum|hinübertragen, trug hinüber, hinübergetragen|v
referre, referō, rettulī, relātum|zurückbringen, brachte zurück, zurückgebracht; berichten, berichtete, berichtet|v
quamquam (Subj.)|obwohl|k
dum (Subj.)|während|k
postquam (Subj.)|nachdem|k
sī (Subj.)|falls|k` },
{ nr: 12, titel: "Bürger und Staat", text: "Lektion 12 bringt Wörter für Bürger und Staat: Heimat (patria), Pflicht (officium), Bürger (cīvis). Das Verb facere (machen) und seine Verwandte efficere (bewirken) sind sehr häufig. Prō mit Ablativ heisst «für» oder «anstelle von».", v: `
patria, patriae f.|die Heimat|n
animus, animī m.|das Herz; der Mut; die Gesinnung|n
officium, officiī n.|die Pflicht|n
cīvis, cīvis m./f.|der Bürger, die Bürgerin|n
malus, mala, malum|schlecht|a
tantus, tanta, tantum|so viel|a
potēns, potēns, potēns; Gen. potentis|mächtig|a
incrēdibilis, incrēdibilis, incrēdibile|unglaublich|a
mūtāre, mūtō, mūtāvī, mūtātum|verändern, veränderte, verändert|v
iubēre, iubeō, iussī, iussum|befehlen, befahl, befohlen|v
movēre, moveō, mōvī, mōtum|bewegen, bewegte, bewegt|v
cōgere, cōgō, coēgī, coāctum|zwingen, zwang, gezwungen|v
intellegere, intellegō, intellēxī, intellēctum|verstehen, verstand, verstanden|v
efficere, efficiō, effēcī, effectum|bewirken, bewirkte, bewirkt|v
facere, faciō, fēcī, factum|machen, machte, gemacht|v
ōlim|einst|k
prō (+ Abl.)|für, anstelle von|k` },
{ nr: 13, titel: "Königin und Schicksal", text: "Lektion 13 erzählt von Königinnen, Schicksal und Vorzeichen: rēgīna, fātum, ōmen, carmen (Lied). Mit redīre (zurückkehren) und āmittere (verlieren) kommen weitere Zusammensetzungen dazu. Aut heisst «oder», ita heisst «so».", v: `
rēgīna, rēgīnae f.|die Königin|n
causa, causae f.|der Grund|n
cūra, cūrae f.|die Sorge|n
fātum, fātī n.|das Schicksal|n
lēx, lēgis f.|das Gesetz|n
lūx, lūcis f.|das Licht|n
serpēns, serpentis m.|die Schlange|n
carmen, carminis n.|das Lied|n
ōmen, ōminis n.|das Vorzeichen|n
ultimus, ultima, ultimum|letzter|a
ōrāre, ōrō, ōrāvī, ōrātum|bitten, bat, gebeten|v
colere, colō, coluī, cultum|sich kümmern um, kümmerte sich, sich gekümmert|v
afferre, afferō, attulī, allātum|herbeibringen, brachte herbei, herbeigebracht|v
accēdere, accēdō, accessī, accessum|herbeikommen, kam herbei, herbeigekommen|v
āmittere, āmittō, āmīsī, āmissum|verlieren, verlor, verloren|v
interficere, interficiō, interfēcī, interfectum|töten, tötete, getötet|v
redīre, redeō, rediī, reditum|zurückkehren, kehrte zurück, zurückgekehrt|v
aut|oder|k
ita|so|k` },
{ nr: 14, titel: "Gewalt und Kampf", text: "In Lektion 14 geht es um Gewalt und Kampf: Waffen (arma, nur Plural), Geschrei (clāmor), Angst (timor), kämpfen (pūgnāre). Viele Verben dieser Lektion gehören zur a-Konjugation: dubitāre, invītāre, salūtāre, laudāre, temptāre.", v: `
violentia, violentiae f.|die Gewalt|n
arma, armōrum n. Pl.|die Waffen|n
sacrum, sacrī n.|das Opfer|n
clāmor, clāmōris m.|das Geschrei|n
timor, timōris m.|die Angst|n
tōtus, tōta, tōtum|ganz|a
nēmō, nēminis|niemand|k
dubitāre, dubitō, dubitāvī, dubitātum|zögern, zögerte, gezögert|v
invītāre, invītō, invītāvī, invītātum|einladen, lud ein, eingeladen|v
salūtāre, salūtō, salūtāvī, salūtātum|begrüssen, begrüsste, begrüsst|v
pūgnāre, pūgnō, pūgnāvī, pūgnātum|kämpfen, kämpfte, gekämpft|v
laudāre, laudō, laudāvī, laudātum|loben, lobte, gelobt|v
temptāre, temptō, temptāvī, temptātum|versuchen, versuchte, versucht|v
terrēre, terreō, terruī, territum|erschrecken, erschreckte, erschreckt|v
premere, premō, pressī, pressum|drücken, drückte, gedrückt|v
trahere, trahō, trāxī, tractum|ziehen, zog, gezogen|v` },
{ nr: 15, titel: "Feinde und Urteile", text: "Lektion 15 handelt von Feinden, Verbrechen und Urteilen: hostis (Feind), scelus (Verbrechen), damnāre (verurteilen). Neu ist oportet (es gehört sich), das mit einem AcI steht. Prope mit Akkusativ heisst «nahe bei».", v: `
hostis, hostis m.|der Feind|n
scelus, sceleris n.|das Verbrechen|n
mortuus, mortua, mortuum|tot|a
damnāre, damnō, damnāvī, damnātum|verurteilen, verurteilte, verurteilt|v
īgnōrāre, īgnōrō, īgnōrāvī, īgnōrātum|nicht kennen, kannte nicht, nicht gekannt|v
dolēre, doleō, doluī|Schmerz empfinden, empfand Schmerz|v
oportet (+ AcI)|es gehört sich, gehörte sich|k
permovēre, permoveō, permōvī, permōtum|stark bewegen, bewegte stark, stark bewegt|v
prohibēre, prohibeō, prohibuī, prohibitum|verbieten, verbot, verboten|v
cōgnōscere, cōgnōscō, cōgnōvī, cōgnitum|kennenlernen, lernte kennen, kennengelernt|v
scrībere, scrībō, scrīpsī, scrīptum|schreiben, schrieb, geschrieben|v
vincīre, vinciō, vinxī, vinctum|fesseln, fesselte, gefesselt|v
prope (+ Akk.)|nahe (bei)|k` },
{ nr: 16, titel: "Meer und Himmel", text: "Lektion 16 führt ans Meer und in den Himmel: Welle (unda), Schiff (nāvis), Strand (lītus), Vogel (avis), Himmel (caelum). Licet heisst «es ist erlaubt». Pōnere (legen) und solvere (lösen) sind wichtige Verben der konsonantischen Konjugation.", v: `
unda, undae f.|die Welle|n
mūrus, mūrī m.|die Mauer|n
caelum, caelī n.|der Himmel|n
ars, artis f.|die Kunst; das Handwerk|n
avis, avis f.|der Vogel|n
nāvis, nāvis f.|das Schiff|n
lītus, lītoris n.|der Strand|n
nōmen, nōminis n.|der Name|n
ōrdō, ōrdinis m.|die Ordnung|n
altus, alta, altum|hoch|a
miser, misera, miserum|arm|a
tot|so viele|k
volāre, volō, volāvī, volātum|fliegen, flog, geflogen|v
licet, licuit|es ist erlaubt, es war erlaubt|k
colligere, colligō, collēgī, collēctum|sammeln, sammelte, gesammelt|v
pōnere, pōnō, posuī, positum|legen, legte, gelegt|v
solvere, solvō, solvī, solūtum|lösen, löste, gelöst|v
hinc|von hier aus|k` },
{ nr: 17, titel: "Die Welt", text: "In Lektion 17 geht es um die Welt im Grossen: Erde (terra), Mond (lūna), Sterne (stēlla), Leben (vīta), Welt (mundus). Cum kann auch eine Subjunktion sein und heisst dann «als» oder «wenn». Nisī heisst «wenn nicht».", v: `
bēstia, bēstiae f.|das Tier|n
lūna, lūnae f.|der Mond|n
stēlla, stēllae f.|der Stern|n
terra, terrae f.|die Erde|n
vīta, vītae f.|das Leben|n
mundus, mundī m.|die Welt|n
pars, partis f.|der Teil|n
dīvīnus, dīvīna, dīvīnum|göttlich|a
vetus, vetus, vetus; Gen. veteris|alt|a
cōgitāre, cōgitō, cōgitāvī, cōgitātum|denken, dachte, gedacht|v
crēdere, crēdō, crēdidī, crēditum|glauben, glaubte, geglaubt|v
nisī|wenn nicht|k
cum (Subj.)|als, wenn|k` },
{ nr: 18, titel: "Deponentien", text: "Lektion 18 bringt etwas ganz Neues: Deponentien. Das sind Verben, die passive Formen haben, aber aktiv übersetzt werden, zum Beispiel loquī (sprechen), sequī (folgen), nāscī (geboren werden), morī (sterben). Ihre Stammformen enden auf -or und -us sum.", v: `
liber, librī m.|das Buch|n
cōnstāre, cōnstō, cōnstitī|bestehen, bestand, bestanden|v
arbitrārī, arbitror, arbitrātus sum|meinen, meinte, gemeint|v
vidērī, videor, vīsus sum|scheinen, schien, geschienen|v
loquī, loquor, locūtus sum|sprechen, sprach, gesprochen|v
nāscī, nāscor, nātus sum|geboren werden, wurde geboren|v
sequī, sequor, secūtus sum|folgen, folgte, gefolgt|v
fierī, fīō, factus sum|entstehen, entstand, entstanden; gemacht werden, wurde gemacht|v
morī, morior, mortuus sum|sterben, starb, gestorben|v
orīrī, orior, ortus sum|entstehen, entstand, entstanden; aufsteigen, stieg auf, aufgestiegen|v
quōmodo|wie|k` },
{ nr: 19, titel: "Jahr und Vernunft", text: "Lektion 19 ist kurz: Jahr (annus), Vernunft (ratiō), pflichtbewusst (pius), heftig (vehemēns). Achte darauf, dass ante hier ein Adverb ist und «vorher» heisst, nicht «vor».", v: `
annus, annī m.|das Jahr|n
ratiō, ratiōnis f.|die Vernunft|n
pius, pia, pium|pflichtbewusst|a
vehemēns, vehemēns, vehemēns; Gen. vehementis|heftig|a
errāre, errō, errāvī, errātum|(sich) irren, irrte, geirrt|v
ante (Adv.)|vorher|k
ergō|also|k` },
{ nr: 20, titel: "Gesundheit", text: "In Lektion 20 geht es um Gesundheit: Arzt (medicus), Krankheit (morbus), gesund (sānus), gesund sein (valēre). Ūtī (benutzen) ist ein Deponens und steht mit Ablativ. Legere kann «lesen» und «sammeln» heissen.", v: `
medicus, medicī m.|der Arzt|n
morbus, morbī m.|die Krankheit|n
perīculum, perīculī n.|die Gefahr|n
genus, generis n.|die Art|n
labor, labōris m.|die Anstrengung|n
sānus, sāna, sānum|gesund|a
summus, summa, summum|höchster|a
varius, varia, varium|verschieden|a
valēre, valeō, valuī|gesund sein, war gesund, gesund gewesen|v
legere, legō, lēgī, lēctum|lesen, las, gelesen; sammeln, sammelte, gesammelt|v
patī, patior, passus sum|erleiden, erlitt, erlitten; ertragen, ertrug, ertragen|v
ūtī, ūtor, ūsus sum (+ Abl.)|etwas benutzen, benutzte, benutzt|v` },
{ nr: 21, titel: "Erklären und Zeigen", text: "Lektion 21 bringt Verben für Erklären und Zeigen: explicāre, mōnstrāre, ōrnāre (schmücken), imitārī (nachahmen). Nōnne? leitet eine Frage ein, auf die man «ja» als Antwort erwartet. Enim (denn) steht immer an zweiter Stelle im Satz.", v: `
membrum, membrī n.|das Glied|n
laetus, laeta, laetum|fröhlich|a
simplex, simplex, simplex; Gen. simplicis|einfach|a
quantus, quanta, quantum|wie viel|a
explicāre, explicō, explicāvī, explicātum|erklären, erklärte, erklärt|v
mōnstrāre, mōnstrō, mōnstrāvī, mōnstrātum|zeigen, zeigte, gezeigt|v
ōrnāre, ōrnō, ōrnāvī, ōrnātum|schmücken, schmückte, geschmückt|v
imitārī, imitor, imitātus sum|nachahmen, ahmte nach, nachgeahmt|v
dēesse, dēsum, dēfuī, –|fehlen, fehlte, gefehlt|v
trānsīre, trānseō, trānsiī, trānsitum|überqueren, überquerte, überquert|v
enim (nachgestellt)|denn, nämlich|k
nōnne?|etwa nicht?|k` },
{ nr: 22, titel: "Mengen und Geschenke", text: "Lektion 22 handelt von Mengen und Geschenken: cōpia und multitūdō (Menge), dōnum (Geschenk), moenia (Stadtmauern, nur Plural). Nihil (nichts) wird nicht dekliniert. Statim heisst «sofort», profectō «tatsächlich».", v: `
cōpia, cōpiae f.|die Menge, der Vorrat|n
dōnum, dōnī n.|das Geschenk|n
moenia, moenium n. Pl.|die (Stadt-)Mauern|n
multitūdō, multitūdinis f.|die Menge|n
nihil (undeklinierbar)|nichts|k
propinquus, propinqua, propinquum (propior, proximus)|nah (näherer, nächster)|a
prōmittere, prōmittō, prōmīsī, prōmissum|versprechen, versprach, versprochen|v
quīdam, quaedam, quiddam / quoddam|ein gewisser; irgendeiner|k
ūnus, ūna, ūnum|ein einziger|a
profectō|tatsächlich|k
statim|sofort|k
etsī|auch wenn|k` },
{ nr: 23, titel: "Das Erdbeben", text: "In Lektion 23 bebt die Erde: Nacht (nox), Dach (tēctum), Beben (tremor), brennen (ārdēre), stürzen (ruere). Mit alter … alter sagt man «der eine … der andere», wenn es um genau zwei geht.", v: `
tēctum, tēctī n.|das Dach|n
nox, noctis f.|die Nacht|n
tremor, tremōris m.|das Beben|n
rārus, rāra, rārum|selten|a
vērus, vēra, vērum|echt, wahr|a
ārdēre, ārdeō, ārsī, ārsum|brennen, brannte, gebrannt|v
agere, agō, ēgī, āctum|treiben, trieb, getrieben; handeln, handelte, gehandelt|v
flectere, flectō, flexī, flectum|biegen, bog, gebogen|v
ruere, ruō, ruī, rutum|stürzen, stürzte, gestürzt|v
alter, altera, alterum … alter, altera, alterum|der/die/das eine (von zweien) … der/die/das andere|a
contrā (Adv.; + Akk.)|dagegen; gegen|k
hūc|hierher|k` },
{ nr: 24, titel: "Wissen und Lernen", text: "Lektion 24 dreht sich um Wissen und Lernen: Forschung (historia), Wissen (scientia), Lehrer (magister), Buch (liber), lehren (docēre). Unde heisst «woher», scīlicet «natürlich».", v: `
historia, historiae f.|die Forschung|n
litterae, litterārum f. Pl.|die Aufzeichnungen|n
scientia, scientiae f.|das Wissen|n
magister, magistrī m.|der Lehrer|n
liber, librī m.|das Buch|n
saxum, saxī n.|der Stein|n
īgnis, īgnis m.|das Feuer|n
Graecus, Graeca, Graecum|griechisch; der Grieche|a
mīrārī, mīror, mīrātus sum|sich wundern, wunderte mich, gewundert|v
docēre, doceō, docuī, doctum|lehren, lehrte, gelehrt|v
scīlicet (Adv.)|natürlich|k
unde|woher|k` },
{ nr: 25, titel: "Der Brief", text: "Lektion 25 enthält Wörter aus einem Brief: epistula (Brief), salūs (Gruss, Gesundheit), cārus (lieb). Necesse esse heisst «nötig sein». Accipere (annehmen) ist ein Verb der gemischten Konjugation wie capere.", v: `
epistula, epistulae f.|der Brief|n
imperium, imperiī n.|der Befehl, die Herrschaft|n
salūs, salūtis f.|der Gruss, die Gesundheit|n
cārus, cāra, cārum|lieb|a
ignōtus, ignōta, ignōtum|unbekannt|a
necesse esse|nötig sein|k
accipere, accipiō, accēpī, acceptum|annehmen, nahm an, angenommen|v
horrēre, horreō, horruī|schaudern, schauderte, geschaudert|v
nescīre, nesciō, nescīvī, nescītum|nicht wissen, wusste nicht, nicht gewusst|v
pōnere, pōnō, posuī, positum|stellen, stellte, gestellt|v
inter (+ Akk.)|zwischen|k` },
{ nr: 26, titel: "Religion und Strafe", text: "In Lektion 26 geht es um Religion und Strafe: Strafe (poena), Rat (cōnsilium), Götterverehrung (religiō), Angst (metus), ewig (aeternus). Tālis heisst «solch», pār heisst «gleich».", v: `
poena, poenae f.|die Strafe|n
cōnsilium, cōnsiliī n.|der Rat|n
malum, malī n.|das Übel|n
religiō, religiōnis f.|die Götterverehrung|n
voluptās, voluptātis f.|die Lust|n
metus, metūs m.|die Angst|n
aeternus, aeterna, aeternum|ewig|a
pius, pia, pium|gottesfürchtig; pflichtbewusst|a
pār, pār, pār; Gen. paris|gleich|a
tālis, tālis, tāle|solch|a
negāre, negō, negāvī, negātum|verneinen, verneinte, verneint|v
coniungere, coniungō, coniūnxī, coniūnctum|verbinden, verband, verbunden|v` },
{ nr: 27, titel: "Volk und Recht", text: "Lektion 27 bringt das Volk (populus) und das Recht (iūs). Neu sind ut und nē mit Konjunktiv: ut heisst «dass» oder «damit», nē heisst «dass nicht» oder «damit nicht». Carēre (etwas nicht haben) steht mit Ablativ.", v: `
populus, populī m.|das Volk|n
iūs, iūris n.|das Recht|n
paucī, paucae, pauca|wenige|a
facilis, facilis, facile|leicht|a
superāre, superō, superāvī, superātum|übertreffen, übertraf, übertroffen|v
carēre, careō, caruī, – (+ Abl.)|etw. nicht haben, hatte nicht, nicht gehabt|v
regere, regō, rēxī, rēctum|beherrschen, beherrschte, beherrscht|v
resistere, resistō, restitī, –|widerstehen, widerstand, widerstanden|v
tam|so|k
ut (+ Konj.)|dass, damit|k
nē (+ Konj.)|dass nicht, damit nicht|k` },
{ nr: 28, titel: "Krieg und Freiheit", text: "In Lektion 28 geht es um Krieg und Freiheit: Krieg (bellum), Unterschied (discrīmen), frei (līber), stark (validus). Pass auf: līber (frei) und liber (Buch) sehen fast gleich aus, unterscheiden sich aber im langen ī.", v: `
bellum, bellī n.|der Krieg|n
discrīmen, discrīminis n.|der Unterschied|n
iūs, iūris n.|das Recht|n
dīversus, dīversa, dīversum|verschieden|a
līber, lībera, līberum|frei|a
nūdus, nūda, nūdum|nackt|a
pulcher, pulchra, pulchrum|schön|a
validus, valida, validum|stark|a
labōrāre, labōrō, labōrāvī, labōrātum|arbeiten, arbeitete, gearbeitet|v
vetāre, vetō, vetuī, vetitum|verbieten, verbot, verboten|v
vīvere, vīvō, vīxī|leben, lebte, gelebt|v
interesse, intersum, interfuī|dazwischen sein, war dazwischen, dazwischen gewesen|v` },
{ nr: 29, titel: "Schuld und Gerechtigkeit", text: "Lektion 29 bringt Wörter für Schuld und Gerechtigkeit: Schuld (culpa), Ort (locus), gerecht (iūstus), fremd (aliēnus). Propter (wegen) steht mit Akkusativ, sub (unter) mit Ablativ.", v: `
culpa, culpae f.|die Schuld|n
locus, locī m.|der Ort|n
negōtium, negōtiī n.|das Geschäft|n
aliēnus, aliēna, aliēnum|fremd|a
iūstus, iūsta, iūstum|gerecht|a
levis, levis, leve|leicht|a
occīdere, occīdō, occīdī, occīsum|töten|v
magis|mehr|k
propter (+ Akk.)|wegen|k
sub (+ Abl.)|unter|k` },
{ nr: 30, titel: "Die Legion", text: "In Lektion 30 marschiert die Legion: Weg und Reise (iter), Brücke (pōns), Hoffnung (spēs). Dēfendere heisst «verteidigen», vertere heisst «wenden». Nōndum heisst «noch nicht».", v: `
crīmen, crīminis n.|der Vorwurf; das Verbrechen|n
iter, itineris n.|der Weg; die Reise|n
legiō, legiōnis f.|die Legion|n
pōns, pontis m.|die Brücke|n
spēs, speī f.|die Hoffnung|n
aequus, aequa, aequum|gleich|a
trēs, trēs, tria|drei|a
dēfendere, dēfendō, dēfendī, dēfēnsum|verteidigen, verteidigte, verteidigt|v
vertere, vertō, vertī, versum|wenden, wandte, gewendet|v
nōndum|noch nicht|k` },
{ nr: 31, titel: "Schule und Charakter", text: "Lektion 31 dreht sich um Schule und Charakter: Begabung (ingenium), Sitte (mōs), Fehler (vitium), lernen (discere), unterrichten (īnstruere). Mit utrum … an fragt man «ob … oder».", v: `
ager, agrī m.|der Acker|n
ingenium, ingeniī n.|die Begabung|n
mōs, mōris m.|die Sitte|n
vitium, vitiī n.|der Fehler|n
honestus, honesta, honestum|anständig|a
discere, discō, didicī|lernen, lernte, gelernt|v
īnstruere, īnstruō, īnstrūxī, īnstrūctum|unterrichten, unterrichtete, unterrichtet|v
studēre, studeō, studuī|sich bemühen, bemühte sich, sich bemüht|v
vītāre, vītō, vītāvī, vītātum|vermeiden, vermied, vermieden|v
utrum … an|ob … oder|k` },
{ nr: 32, titel: "Reich und arm", text: "Lektion 32 bringt Gegensätze: reich (dīves) und arm (pauper), tapfer (fortis), menschlich (hūmānus). Mit aut … aut sagt man «entweder … oder».", v: `
vulnus, vulneris n.|die Wunde|n
hūmānus, hūmāna, hūmānum|menschlich|a
dīves, dīves, dīves; Gen. dīvitis|reich|a
fortis, fortis, forte|tapfer; stark|a
pauper, pauper, pauper; Gen. pauperis|arm|a
comparāre, comparō, comparāvī, comparātum|vergleichen, verglich, verglichen|v
dēserere, dēserō, dēseruī, dēsertum|im Stich lassen, liess im Stich, im Stich gelassen; verlassen, verliess, verlassen|v
perīre, pereō, periī, peritum|zu Grunde gehen, ging zu Grunde, zu Grunde gegangen|v
respicere, respiciō, respexī, respectum|berücksichtigen, berücksichtigte, berücksichtigt|v
aut … aut …|entweder … oder …|k` }
  ]
});
