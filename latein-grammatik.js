/* Fach Latein-Grammatik – Grammatik-Abschnitte aus dem Lateinbuch, nach Lektionen.
   Jeder Abschnitt ist ein Thema: Lesetext, Karteikarten, Aufgaben, Quiz. */
(window.FAECHER = window.FAECHER || []).push({
  id: "latein-gr",
  name: "Latein-Grammatik",
  art: "themen",
  farbe: "#8a3d22",
  kuerzel: "Gr",
  themen: [
{
  id: "l04-ablativ-formen",
  titel: "Lektion 4 · Der Ablativ: Formen (§ 4.1.1)",
  text: `Der **Ablativ** ist ein neuer Fall. Im Deutschen gibt es ihn nicht. Du erkennst ihn an seinen Endungen. In der Tabelle sind die Endungen fett gedruckt.

**1. und 2. Deklination**

| | 1. Dekl. | 2. Dekl. m | 2. Dekl. n |
|---|---|---|---|
| Nom. Sg. | fīli**a** | fīli**us** | for**um** |
| Akk. Sg. | fīli**am** | fīli**um** | for**um** |
| Gen. Sg. | fīli**ae** | fīli**ī** | for**ī** |
| **Abl. Sg.** | **fīliā** | **fīliō** | **forō** |
| Nom. Pl. | fīli**ae** | fīli**ī** | for**a** |
| Akk. Pl. | fīli**ās** | fīli**ōs** | for**a** |
| Gen. Pl. | fīli**ārum** | fīli**ōrum** | for**ōrum** |
| **Abl. Pl.** | **fīliīs** | **fīliīs** | **forīs** |

**3. Deklination**

| | Singular | Plural |
|---|---|---|
| Nom. | soror | sorōr**ēs** |
| Akk. | sorōr**em** | sorōr**ēs** |
| Gen. | sorōr**is** | sorōr**um** |
| **Abl.** | **sorōre** | **sorōribus** |

**Die Ablativ-Endungen auf einen Blick**

| | 1. Dekl. | 2. m | 2. n | 3. Dekl. |
|---|---|---|---|---|
| Abl. Sg. | -ā | -ō | -ō | -e |
| Abl. Pl. | -īs | -īs | -īs | -ibus |

**So merkst du es dir**

- **Ablativ Singular:** Der Stamm-Vokal wird lang: 1. Dekl. -ā, 2. Dekl. -ō. Die 3. Deklination hat ein kurzes -e.
- **Ablativ Plural:** In der 1. und 2. Deklination immer **-īs**. Die 3. Deklination hat **-ibus**.
- **Achtung 1. Deklination:** *fīlia* (Nominativ) und *fīliā* (Ablativ) unterscheiden sich nur durch das Längezeichen. Darum Längezeichen immer mitlernen!
- **2. Deklination m und n:** Im Ablativ sind die Formen gleich gebaut: *fīliō – forō*, *fīliīs – forīs*.
- **3. Deklination:** Der Nominativ ist oft kürzer als die anderen Formen (*soror*). Den Stamm findest du am Genitiv: *sorōr-is* → Stamm *sorōr-*. Daran hängst du die Endungen: *sorōr-e, sorōr-ibus*. Genauso: *mōns, montis* → *monte, montibus*.

**Wozu der Ablativ?** Den Ablativ brauchst du zum Beispiel nach den Präpositionen aus dem Lernwortschatz 4: *ā/ab* (von), *cum* (mit), *ē/ex* (aus), *in* (in, auf: wo?). Beispiel: *cum fīliā* = mit der Tochter, *in forō* = auf dem Forum. Die weiteren Funktionen stehen im Buch in § 4.1.2.`,
  karten: [
    ["Ablativ-Endung Sg. der 1. Deklination", "-ā (fīliā)"],
    ["Ablativ-Endung Sg. der 2. Deklination (m und n)", "-ō (fīliō, forō)"],
    ["Ablativ-Endung Sg. der 3. Deklination", "-e (sorōre)"],
    ["Ablativ-Endung Pl. der 1. und 2. Deklination", "-īs (fīliīs, forīs)"],
    ["Ablativ-Endung Pl. der 3. Deklination", "-ibus (sorōribus)"],
    ["fīlia: Ablativ Sg. und Pl.", "fīliā – fīliīs"],
    ["fīlius: Ablativ Sg. und Pl.", "fīliō – fīliīs"],
    ["forum: Ablativ Sg. und Pl.", "forō – forīs"],
    ["soror: Ablativ Sg. und Pl.", "sorōre – sorōribus"],
    ["forum: Nominativ und Akkusativ Pl.", "fora – fora (beim Neutrum sind Nominativ und Akkusativ gleich)"],
    ["soror: alle Formen im Singular (Nom., Akk., Gen., Abl.)", "soror, sorōrem, sorōris, sorōre"],
    ["soror: alle Formen im Plural (Nom., Akk., Gen., Abl.)", "sorōrēs, sorōrēs, sorōrum, sorōribus"],
    ["fīlia: alle Formen im Plural (Nom., Akk., Gen., Abl.)", "fīliae, fīliās, fīliārum, fīliīs"],
    ["fīlius: alle Formen im Plural (Nom., Akk., Gen., Abl.)", "fīliī, fīliōs, fīliōrum, fīliīs"],
    ["Wie findest du den Stamm eines Nomens der 3. Deklination?", "Am Genitiv: Endung -is weg. sorōris → sorōr-"],
    ["fīlia oder fīliā: Was ist der Ablativ?", "fīliā (mit langem ā)"]
  ],
  aufgaben: [
    { f: "Bilde den Ablativ Singular und Plural von servus, servī m. (der Sklave).", l: "servō – servīs (2. Deklination m, wie fīlius)" },
    { f: "Bilde den Ablativ Singular und Plural von via, viae f. (der Weg).", l: "viā – viīs (1. Deklination, wie fīlia)" },
    { f: "Bilde den Ablativ Singular und Plural von templum, templī n. (der Tempel).", l: "templō – templīs (2. Deklination n, wie forum)" },
    { f: "Bilde den Ablativ Singular und Plural von ōrātor, ōrātōris m. (der Redner).", l: "Stamm ōrātōr- → ōrātōre – ōrātōribus (3. Deklination, wie soror)" },
    { f: "Bilde den Ablativ Singular und Plural von mōns, montis m. (der Berg).", l: "Stamm mont- (vom Genitiv montis) → monte – montibus" },
    { f: "Bilde den Ablativ Singular und Plural von mulier, mulieris f. (die Frau).", l: "Stamm mulier- → muliere – mulieribus" },
    { f: "Bilde den Ablativ Singular und Plural von puer, puerī m. (der Junge).", l: "puerō – puerīs (2. Deklination: Genitiv auf -ī)" },
    { f: "Übersetze: cum fīliā – in forō – ē templō – cum sorōribus", l: "mit der Tochter – auf dem Forum – aus dem Tempel – mit den Schwestern" },
    { f: "Dekliniere domina, dominae f. im Singular und Plural (Nom., Akk., Gen., Abl.).", l: "Sg.: domina, dominam, dominae, dominā\n\nPl.: dominae, dominās, dominārum, dominīs" },
    { f: "Dekliniere dominus, dominī m. im Singular und Plural (Nom., Akk., Gen., Abl.).", l: "Sg.: dominus, dominum, dominī, dominō\n\nPl.: dominī, dominōs, dominōrum, dominīs" }
  ],
  quiz: [
    { f: "Welche Form ist der Ablativ Singular von fīlia?", o: ["fīliā", "fīliam", "fīliae", "fīliīs"], r: 0, e: "1. Deklination: Ablativ Sg. auf -ā, mit langem a." },
    { f: "Welche Form ist der Ablativ Singular von fīlius?", o: ["fīlium", "fīliō", "fīliī", "fīliōs"], r: 1, e: "2. Deklination: Ablativ Sg. auf -ō." },
    { f: "Welche Form ist der Ablativ Singular von soror?", o: ["sorōris", "sorōrem", "sorōre", "sorōrēs"], r: 2, e: "3. Deklination: Ablativ Sg. auf -e, an den Stamm sorōr- gehängt." },
    { f: "Welche Form ist der Ablativ Plural von soror?", o: ["sorōrum", "sorōrēs", "sorōrīs", "sorōribus"], r: 3, e: "3. Deklination: Ablativ Pl. auf -ibus." },
    { f: "Welche Form ist der Ablativ Plural von forum?", o: ["forīs", "fora", "forōrum", "forō"], r: 0, e: "2. Deklination: Ablativ Pl. auf -īs." },
    { f: "Welche Endung hat der Ablativ Plural in der 1. und 2. Deklination?", o: ["-ibus", "-īs", "-ōs", "-ārum"], r: 1, e: "In der 1. und 2. Deklination endet der Ablativ Plural immer auf -īs." },
    { f: "Was ist sorōre?", o: ["Akkusativ Sg.", "Genitiv Sg.", "Ablativ Sg.", "Nominativ Pl."], r: 2, e: "-e ist die Ablativ-Endung im Singular der 3. Deklination." },
    { f: "Was ist forō?", o: ["Ablativ Sg.", "Genitiv Sg.", "Nominativ Pl.", "Ablativ Pl."], r: 0, e: "-ō ist die Ablativ-Endung im Singular der 2. Deklination." },
    { f: "fīliae kann zwei Fälle aus der Tabelle sein. Welche?", o: ["Genitiv Sg. oder Nominativ Pl.", "Ablativ Sg. oder Akkusativ Pl.", "Nominativ Sg. oder Ablativ Sg.", "Genitiv Pl. oder Ablativ Pl."], r: 0, e: "fīliae steht in der Tabelle zweimal: im Genitiv Singular und im Nominativ Plural." },
    { f: "fīliī kann zwei Fälle aus der Tabelle sein. Welche?", o: ["Ablativ Sg. oder Ablativ Pl.", "Genitiv Sg. oder Nominativ Pl.", "Akkusativ Sg. oder Genitiv Pl.", "Nominativ Sg. oder Akkusativ Pl."], r: 1, e: "fīliī ist Genitiv Singular und Nominativ Plural." },
    { f: "Woran unterscheiden sich fīlia (Nominativ) und fīliā (Ablativ)?", o: ["an der Endung -m", "nur am Längezeichen über dem a", "am Stamm", "gar nicht, es ist dieselbe Form"], r: 1, e: "Nur das Längezeichen zeigt den Ablativ: fīliā. Darum Längezeichen mitlernen." },
    { f: "Welche Form ist der Ablativ Plural von fīlia?", o: ["fīliās", "fīliārum", "fīliīs", "fīliae"], r: 2, e: "1. Deklination: Ablativ Pl. auf -īs." },
    { f: "mōns, montis m.: Welche Form ist der Ablativ Singular?", o: ["mōnse", "monte", "montō", "montis"], r: 1, e: "Stamm vom Genitiv: mont-. Ablativ Sg. der 3. Deklination auf -e: monte." },
    { f: "servus, servī m.: Welche Form ist der Ablativ Plural?", o: ["servibus", "servōs", "servīs", "servōrum"], r: 2, e: "2. Deklination: Ablativ Pl. auf -īs, wie fīliīs." },
    { f: "Was bedeutet «cum fīliā»?", o: ["die Tochter", "mit der Tochter", "der Tochter (wessen?)", "die Töchter"], r: 1, e: "cum + Ablativ = mit. fīliā ist Ablativ Singular." },
    { f: "Was bedeutet «in forō»?", o: ["auf das Forum (wohin?)", "auf dem Forum (wo?)", "vom Forum", "die Foren"], r: 1, e: "in + Ablativ = wo? (in, auf). in + Akkusativ wäre «wohin?»." }
  ]
}
  ]
});
