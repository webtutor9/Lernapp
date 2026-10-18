/* Fach Informatik – Kapitel 1–4 (1. Semester) */
(window.FAECHER = window.FAECHER || []).push({
  id: "informatik",
  name: "Informatik",
  art: "themen",
  farbe: "#2f6f8f",
  kuerzel: "In",
  themen: [
{
  id: "einfuehrung",
  titel: "Was ist Informatik?",
  text: `**Warum Informatik?**
- **Denken:** Informatik übt, Probleme in kleine Teile zu zerlegen, Muster zu erkennen und Dinge ganz genau zu formulieren.
- **Verstehen:** Wer weiss, wie Algorithmen, Daten und Netzwerke funktionieren, durchschaut die digitale Welt.
- **Gestalten:** Wer programmieren kann, benutzt Technik nicht nur, sondern baut selbst etwas.

**Was ist Informatik?** Informatik ist die Wissenschaft davon, wie man Informationen *darstellt, speichert, verarbeitet und überträgt*, vor allem automatisch mit Computern.

**Analog und digital:**
- **Analog** heisst *stufenlos*. Beispiel: ein Zeiger, der sich fliessend bewegt, oder eine Wellenlinie.
- **Digital** heisst *in Stufen erfolgend*. Beispiel: eine Digitaluhr, die von 12:00 direkt auf 12:01 springt, oder eine Treppenkurve.
- Wenn ein Computer etwas Analoges (z.B. Musik) aufnimmt, misst er in regelmässigen Abständen den Wert. Aus der weichen Kurve wird so eine Treppe aus Stufen.

**Algorithmus:** Ein Algorithmus ist eine *eindeutige Abfolge von Anweisungen oder Schritten*, mit der man ein bestimmtes Problem löst. Das beste Alltagsbeispiel ist ein **Kochrezept**.

**Hardware und Software:**
- **Hardware** ist die Maschine zum Anfassen: Prozessor, Speicher, Bildschirm, Tastatur. Alles, was gebaut werden muss.
- **Software** sind die Anweisungen, die die Maschine ausführt. Software ist ein *Muster, keine Sache*. Dasselbe Programm kann auf verschiedener Hardware laufen und beliebig oft kopiert werden, ohne dass etwas verloren geht.
- **Vergleich mit der Küche:** Die Küche ist die Hardware, das Rezept ist die Software. Dieselbe Küche macht am Montag Pizza und am Dienstag Kuchen. Geändert hat sich nur das Rezept.

**Was jeder Computer hat:** **Input** (Eingabe), **Storage** (Speicher), **Processing** (Verarbeitung) und **Output** (Ausgabe).

| Begriff | Bedeutung | Beispiel |
|---|---|---|
| Analog | stufenlos | Zeigeruhr, Schallwelle |
| Digital | in Stufen erfolgend | Digitaluhr, Treppenkurve |
| Algorithmus | eindeutige Abfolge von Schritten zur Lösung eines Problems | Kochrezept |
| Hardware | physische Maschine | Prozessor, Bildschirm, Tastatur |
| Software | Anweisungen, die die Maschine ausführt | Programm, App |
| Input / Storage / Processing / Output | Eingabe / Speicher / Verarbeitung / Ausgabe | Tastatur / Festplatte / Prozessor / Bildschirm |`,
  karten: [
    ["Informatik", "Wissenschaft davon, wie man Informationen darstellt, speichert, verarbeitet und überträgt – vor allem mit Computern."],
    ["Analog", "stufenlos (z.B. Zeigeruhr, Welle)"],
    ["Digital", "in Stufen erfolgend (z.B. Digitaluhr, Treppe)"],
    ["Algorithmus", "eindeutige Abfolge von Schritten, um ein Problem zu lösen (z.B. Kochrezept)"],
    ["Hardware", "die Maschine zum Anfassen: Prozessor, Speicher, Bildschirm, Tastatur"],
    ["Software", "Anweisungen, die die Maschine ausführt; ein Muster, keine Sache – verlustfrei kopierbar"],
    ["Küchen-Vergleich", "Küche = Hardware, Rezept = Software"],
    ["Die vier Dinge, die jeder Computer hat", "Input, Storage, Processing, Output (Eingabe, Speicher, Verarbeitung, Ausgabe)"]
  ],
  aufgaben: [
    { f: "Was bedeutet «digital», und was ist das Gegenteil davon?", l: "Digital heisst «in Stufen erfolgend». Das Gegenteil ist analog, also «stufenlos».\n\n**Tipp:** Die Treppe ist digital, die Welle ist analog." },
    { f: "Was ist ein Algorithmus? Nenne ein Beispiel.", l: "Eine eindeutige Abfolge von Schritten, um ein Problem zu lösen. Beispiel: ein Kochrezept." },
    { f: "Hardware oder Software? Tastatur, Videospiel, Prozessor, Taschenrechner-App.", l: "Tastatur = Hardware, Videospiel = Software, Prozessor = Hardware, Taschenrechner-App = Software.\n\n**Tipp:** Kann man es anfassen und muss es gebaut werden → Hardware. Ist es eine Anweisung, die man kopieren kann → Software." },
    { f: "Ordne beim Handy zu, was Input, Storage, Processing und Output ist: Bildschirmanzeige, Mikrofon, Speicherchip, Prozessor.", l: "Mikrofon = Input, Speicherchip = Storage, Prozessor = Processing, Bildschirmanzeige = Output." }
  ],
  quiz: [
    { f: "Was bedeutet «digital»?", o: ["Stufenlos", "In Stufen erfolgend", "Mit dem Internet verbunden", "Mit Strom betrieben"], r: 1, e: "Digital heisst «in Stufen erfolgend», das Gegenteil analog heisst «stufenlos»." },
    { f: "Was ist ein Algorithmus?", o: ["Ein besonders schneller Computerchip", "Eine Programmiersprache", "Eine eindeutige Abfolge von Schritten, um ein Problem zu lösen", "Eine Sammlung von Daten"], r: 2, e: "Ein Algorithmus ist eine eindeutige Schrittfolge, so wie ein Kochrezept." },
    { f: "Welche Aussage über Software stimmt?", o: ["Software ist der Prozessor eines Computers", "Software kann beliebig kopiert werden, ohne dass etwas verloren geht", "Software läuft immer nur auf genau einer bestimmten Hardware", "Software muss wie ein Bildschirm gebaut werden"], r: 1, e: "Software ist ein Muster, keine Sache, und lässt sich deshalb verlustfrei kopieren." },
    { f: "Im Küchen-Vergleich: Was entspricht der Software?", o: ["Der Backofen", "Das Rezept", "Die Küche", "Die Zutaten"], r: 1, e: "Das Rezept ist die Anweisung, die Küche ist die Hardware." },
    { f: "Welche vier Dinge hat jeder Computer?", o: ["Maus, Tastatur, Bildschirm, Drucker", "Input, Storage, Processing, Output", "Internet, Akku, Kamera, Lautsprecher", "Hardware, Software, Strom, WLAN"], r: 1, e: "Jeder Computer hat Eingabe, Speicher, Verarbeitung und Ausgabe." },
    { f: "Was ist beim Handy der Output?", o: ["Mikrofon", "Speicherchip", "Prozessor", "Bildschirmanzeige"], r: 3, e: "Der Bildschirm gibt etwas aus. Das Mikrofon ist Input." }
  ]
},
{
  id: "binaer",
  titel: "Binärzahlen und ASCII",
  trainer: "binaer",
  text: `**Wichtiger Grundsatz:** Jede Information, ob Text, Bild, Video oder Computerspiel, kann als Zahl geschrieben werden. Und jede Zahl kann als **binäre Zahl** geschrieben und gespeichert werden. Binär heisst, dass es nur die Ziffern 0 und 1 gibt. Eine solche Ziffer nennt man **Bit**.

**Wie funktionieren Binärzahlen?** Bei unseren normalen Zahlen (Dezimalzahlen) sind die Stellen 1, 10, 100, 1000 … wert. Bei Binärzahlen ist jede Stelle doppelt so viel wert wie die Stelle rechts davon: 1, 2, 4, 8, 16, 32, 64, 128, 256 … Das sind die **Zweierpotenzen**.

**Von binär zu dezimal:** Schreib die Stellenwerte über die Ziffern. Dann zählst du die Werte zusammen, über denen eine 1 steht.

**Von dezimal zu binär:** Suche die grösste Zweierpotenz, die in die Zahl passt, und schreib dort eine 1. Den Rest zerlegst du genauso weiter. Wo keine Potenz gebraucht wird, steht eine 0.

**Addieren in binär:** wie die schriftliche Addition, nur mit den Regeln 0+0=0, 0+1=1, 1+1=10 (schreibe 0, Übertrag 1) und 1+1+1=11 (schreibe 1, Übertrag 1).

**Subtrahieren in binär:** wie die schriftliche Subtraktion. Wenn man 0 − 1 rechnen muss, «leiht» man sich von der nächsten Stelle links. Dort wird eine 1 zu 0, und bei der aktuellen Stelle hat man nun «2» (binär 10). Dann rechnet man 2 − 1 = 1.

**Text speichern (ASCII):** Buchstaben speichert der Computer mit der **ASCII-Tabelle**. Jedes Zeichen ist eine Folge von **8 Bits**. Zum Beispiel ist A = 01000001, das ist die Zahl 65. Jeder folgende Buchstabe ist um 1 grösser.

**Stellenwerte**

| 2⁸ | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
|---|---|---|---|---|---|---|---|---|
| 256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Additionsregeln**

| Rechnung | Ergebnis | Schreiben | Übertrag |
|---|---|---|---|
| 0 + 0 | 0 | 0 | – |
| 0 + 1 | 1 | 1 | – |
| 1 + 1 | 10 | 0 | 1 |
| 1 + 1 + 1 | 11 | 1 | 1 |

**ASCII-Tabelle (Grossbuchstaben)**

| Buchstabe | Code | Buchstabe | Code |
|---|---|---|---|
| A | 01000001 | N | 01001110 |
| B | 01000010 | O | 01001111 |
| C | 01000011 | P | 01010000 |
| D | 01000100 | Q | 01010001 |
| E | 01000101 | R | 01010010 |
| F | 01000110 | S | 01010011 |
| G | 01000111 | T | 01010100 |
| H | 01001000 | U | 01010101 |
| I | 01001001 | V | 01010110 |
| J | 01001010 | W | 01010111 |
| K | 01001011 | X | 01011000 |
| L | 01001100 | Y | 01011001 |
| M | 01001101 | Z | 01011010 |`,
  karten: [
    ["Bit", "eine Ziffer 0 oder 1"],
    ["Stellenwerte einer Binärzahl (von rechts)", "1, 2, 4, 8, 16, 32, 64, 128, 256 … (Zweierpotenzen)"],
    ["Binär 1 + 1", "10 (schreibe 0, Übertrag 1)"],
    ["Binär 1 + 1 + 1", "11 (schreibe 1, Übertrag 1)"],
    ["Binär 0 − 1", "Von links leihen: dann 10 − 1 = 1"],
    ["ASCII", "Tabelle, mit der Zeichen als 8 Bits gespeichert werden"],
    ["ASCII-Code von A", "01000001 (= 65)"],
    ["Wie viele Bits hat ein Zeichen in ASCII?", "8"]
  ],
  aufgaben: [
    { f: "Was ist die Dezimalzahl 25 als Binärzahl?", l: "**11001**\n\n25 = 16 + 8 + 1, also 16→1, 8→1, 4→0, 2→0, 1→1." },
    { f: "Was ist die Binärzahl 100101 als Dezimalzahl?", l: "**37**\n\nStellenwerte 32, 16, 8, 4, 2, 1. Einsen bei 32, 4 und 1: 32 + 4 + 1 = 37." },
    { f: "Rechne 001011001 (binär) in eine Dezimalzahl um.", l: "**89**\n\n64 + 16 + 8 + 1 = 89." },
    { f: "Rechne 100000011 (binär) in eine Dezimalzahl um.", l: "**259**\n\n256 + 2 + 1 = 259." },
    { f: "Rechne 145 in eine Binärzahl um.", l: "**10010001**\n\n145 = 128 + 16 + 1. Man beginnt mit dem grössten Summanden, der hineinpasst." },
    { f: "Addiere binär: 101110 + 11010", l: "**1001000**\n\nZur Kontrolle: 46 + 26 = 72 = 64 + 8." },
    { f: "Addiere binär: a) 1111 + 1001  b) 10101 + 111  c) 100001 + 10101", l: "a) **11000** (15 + 9 = 24)\n\nb) **11100** (21 + 7 = 28)\n\nc) **110110** (33 + 21 = 54)\n\n**Hinweis:** Bei c) sind auf der Folie Aufgabe und Lösung verschrieben. Gemeint ist + 10101." },
    { f: "Subtrahiere binär: 110110 − 11010", l: "**11100**\n\nZur Kontrolle: 54 − 26 = 28 = 16 + 8 + 4." },
    { f: "Subtrahiere binär: a) 1111 − 1001  b) 10101 − 111  c) 100001 − 10101", l: "a) **110** (15 − 9 = 6)\n\nb) **1110** (21 − 7 = 14)\n\nc) **1100** (33 − 21 = 12)\n\n**Hinweis:** Bei c) ist die Aufgabe auf der Folie verschrieben. Gemeint ist − 10101." },
    { f: "Schreibe das Wort «HI» im ASCII-Code.", l: "**01001000 01001001**\n\nH = 01001000, I = 01001001." },
    { f: "Welches Wort steht hier: 01001111 01001011?", l: "**OK**\n\n01001111 = O, 01001011 = K." }
  ],
  quiz: [
    { f: "Was ist die Dezimalzahl 25 als binäre Zahl?", o: ["10011", "11010", "10101", "11001"], r: 3, e: "25 = 16 + 8 + 1, das ergibt 11001." },
    { f: "Was ist die binäre Zahl 100101 als Dezimalzahl?", o: ["37", "41", "35", "21"], r: 0, e: "Die Einsen stehen bei 32, 4 und 1, zusammen 37." },
    { f: "Was ist die Dezimalzahl 145 in Binär?", o: ["10010010", "10010001", "10001001", "11000001"], r: 1, e: "145 = 128 + 16 + 1." },
    { f: "Was ergibt die binäre Addition 101110 + 11010?", o: ["1000100", "111000", "1001000", "1001010"], r: 2, e: "46 + 26 = 72 = 64 + 8, binär 1001000." },
    { f: "Was ergibt die binäre Subtraktion 1111 − 1001?", o: ["101", "110", "111", "1000"], r: 1, e: "15 − 9 = 6, binär 110." },
    { f: "Mit wie vielen Bits wird ein Buchstabe in der ASCII-Tabelle gespeichert?", o: ["4", "8", "16", "26"], r: 1, e: "Jedes Zeichen hat 8 Bits, z.B. A = 01000001." },
    { f: "Für welchen Buchstaben steht der ASCII-Code 01000011?", o: ["B", "D", "C", "K"], r: 2, e: "A = …01, B = …10, C = …11, jeder Buchstabe ist um 1 grösser." }
  ]
},
{
  id: "schaltungen",
  titel: "Digitale Schaltungen und Gates",
  trainer: "gates",
  text: `**Der Transistor:** Ein Transistor ist ein winziger **Schalter**, also eine Leitung, die von einem **Strom** gesteuert wird. Fliesst Strom in den Steuer-Eingang, lässt der Transistor den anderen Strom durch oder sperrt ihn, je nach Bauart.

**Wie sich die Schalter entwickelt haben:**
- **Mechanisches Relais** (1833 bis ca. 1950): Ein kleiner Elektromagnet bewegt einen Metallschalter.
- **Elektronenröhre / Vacuum Tube** (1906 bis ca. 1950): Ein Glaskolben, ähnlich einer Glühbirne, ohne bewegliche Teile.
- **Transistor** (1947 bis heute): winzig klein, aus Halbleitermaterial.

**Transistoren in Chips:** Ein Computerchip enthält heute *mehrere Milliarden* Transistoren. Ein einzelner Transistor ist nur wenige **Nanometer** gross. Ein Nanometer ist ein Millionstel Millimeter.

**Wichtiges Prinzip der Informatik:** Wenn man einfache Schalter intelligent zusammenfügt, kann man komplexe Funktionen bauen.

**Gates:** Aus Transistoren baut man **logische Gates**. Ein Gate bekommt Eingänge (A, B) mit 0 oder 1 und gibt einen Ausgang (Q) aus. Was herauskommt, zeigt die **Wahrheitstabelle** (Truth Table).
- **NOT** (nicht) dreht um: Aus 0 wird 1, aus 1 wird 0.
- **AND** (und) gibt nur 1 aus, wenn A *und* B gleich 1 sind.
- **OR** (oder) gibt 1 aus, wenn *mindestens einer* der Eingänge 1 ist.
- **NAND** (nicht-und) ist das Gegenteil von AND. Es gibt nur bei 1/1 eine 0 aus, sonst immer 1.
- **XOR** (entweder-oder) gibt 1 aus, wenn die Eingänge *verschieden* sind.

**Zeilen einer Wahrheitstabelle:** Zeilen = 2^(Anzahl Eingänge). Bei 4 Eingängen sind es 2⁴ = 16 Zeilen.

**Vom Transistor zum Gate:**
- Ein **NPN**-Transistor (Pfeil unten) leitet, wenn der Eingang 1 ist. Ein **PNP**-Transistor (Pfeil oben) leitet, wenn der Eingang 0 ist.
- Transistoren **in Reihe** (untereinander) ergeben **UND**, denn der Strom muss durch beide.
- Transistoren **parallel** (nebeneinander) ergeben **ODER**, denn ein Weg reicht.
- So entstehen die Gates: NOT = 1 PNP. AND = 2 NPN in Reihe. OR = 2 NPN parallel. NAND = 2 PNP parallel.

**NAND ist universell:** Nur aus NAND-Gates kann man *alle* anderen Gates bauen, und am Ende sogar einen ganzen einfachen Computer.
- **NOT:** ein NAND, bei dem A an beide Eingänge geht.
- **AND:** ein NAND und danach ein NAND als NOT.
- **OR:** A mit einem NAND umdrehen, B mit einem NAND umdrehen, beides in ein drittes NAND.
- **NOR:** wie OR, mit einem zusätzlichen NAND als NOT am Ende.
- **XOR:** besteht aus 4 NAND-Gates.

**NOT**

| A | Q |
|---|---|
| 0 | 1 |
| 1 | 0 |

**AND, OR, NAND, XOR**

| A | B | AND | OR | NAND | XOR |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

**Merkregeln**

| Regel | Bedeutung |
|---|---|
| Zeilen = 2^Eingänge | 1 → 2, 2 → 4, 3 → 8, 4 → 16 |
| Reihe = UND | Strom muss durch alle Schalter |
| Parallel = ODER | Ein offener Schalter genügt |
| NPN | leitet bei Eingang 1 |
| PNP | leitet bei Eingang 0 |
| NAND = NOT(AND) | universelles Gate |`,
  karten: [
    ["Transistor", "ein winziger Schalter, der von einem Strom gesteuert wird"],
    ["Entwicklung der Schalter", "Mechanisches Relais (1833) → Elektronenröhre (1906) → Transistor (1947)"],
    ["NOT", "dreht um: 0 → 1, 1 → 0"],
    ["AND", "nur 1, wenn A und B beide 1 sind"],
    ["OR", "1, wenn mindestens ein Eingang 1 ist"],
    ["NAND", "Gegenteil von AND: nur bei 1/1 eine 0, sonst 1"],
    ["XOR", "1, wenn die Eingänge verschieden sind"],
    ["Zeilen einer Wahrheitstabelle", "2^(Anzahl Eingänge), z.B. 3 Eingänge → 8 Zeilen"],
    ["Transistoren in Reihe", "UND (Strom muss durch beide)"],
    ["Transistoren parallel", "ODER (ein Weg reicht)"],
    ["NPN-Transistor", "leitet, wenn der Eingang 1 ist"],
    ["PNP-Transistor", "leitet, wenn der Eingang 0 ist"],
    ["Warum ist NAND «universell»?", "Aus NAND-Gates allein kann man alle anderen Gates bauen – und sogar einen Computer."],
    ["NOT aus NAND", "A an beide Eingänge eines NAND"]
  ],
  aufgaben: [
    { f: "Wie viele Zeilen hat die Wahrheitstabelle einer Schaltung mit 4 Eingängen?", l: "**16**\n\n2⁴ = 2·2·2·2 = 16." },
    { f: "Wie viele Zeilen sind es bei 3 Eingängen?", l: "**8**\n\n2³ = 8." },
    { f: "A = 1, B = 1. Was geben AND, OR, NOT(A), XOR und NAND aus?", l: "AND = 1, OR = 1, NOT = 0, XOR = 0, NAND = 0.\n\nIn der Wahrheitstabelle die Zeile 1/1 ablesen." },
    { f: "A = 0, B = 1. Was geben AND, OR, NAND und XOR aus?", l: "AND = 0, OR = 1, NAND = 1, XOR = 1." },
    { f: "Wie baut man aus einem NAND-Gate ein NOT?", l: "Man verbindet A mit beiden Eingängen des NAND.\n\nBei 0/0 kommt 1 heraus, bei 1/1 kommt 0 heraus. Das ist genau NOT." },
    { f: "Zwei NPN-Transistoren sind in Reihe geschaltet. Welches Gate ist das?", l: "**AND**\n\nDer Strom kommt nur durch, wenn beide leiten, also wenn A = 1 und B = 1 ist." }
  ],
  quiz: [
    { f: "Was ist ein Transistor?", o: ["Ein Speicher für Bilder", "Ein Bildschirm-Bauteil", "Ein Programm, das Zahlen umrechnet", "Ein Schalter, der von einem Strom gesteuert wird"], r: 3, e: "Ein Transistor ist ein stromgesteuerter Schalter." },
    { f: "In welcher Reihenfolge wurden die Schalter in Computern entwickelt?", o: ["Transistor → Elektronenröhre → Relais", "Mechanisches Relais → Elektronenröhre → Transistor", "Elektronenröhre → Relais → Transistor", "Relais → Transistor → Elektronenröhre"], r: 1, e: "Relais ab 1833, Röhre ab 1906, Transistor ab 1947." },
    { f: "Wann ist der Ausgang eines AND-Gates 1?", o: ["Wenn mindestens ein Eingang 1 ist", "Wenn beide Eingänge 0 sind", "Nur wenn beide Eingänge 1 sind", "Wenn die Eingänge verschieden sind"], r: 2, e: "AND gibt nur 1 aus, wenn A und B beide 1 sind." },
    { f: "Ein XOR-Gate bekommt A = 1 und B = 1. Was kommt heraus?", o: ["0", "1", "2", "10"], r: 0, e: "XOR gibt nur bei verschiedenen Eingängen 1 aus." },
    { f: "Welches Gate liefert NUR bei A = 1 und B = 1 den Ausgang 0 (sonst immer 1)?", o: ["XOR", "AND", "OR", "NAND"], r: 3, e: "NAND ist NOT AND. XOR gibt zusätzlich auch bei 0/0 eine 0 aus." },
    { f: "Wie viele Zeilen hat die Wahrheitstabelle einer Schaltung mit 3 Eingängen?", o: ["3", "6", "8", "9"], r: 2, e: "2³ = 8." },
    { f: "Zwei Transistoren sind parallel geschaltet. Welchem Gate entspricht das?", o: ["AND", "OR", "NOT", "XOR"], r: 1, e: "Parallel heisst, ein offener Weg genügt, das ist ODER." },
    { f: "Warum nennt man das NAND-Gate «universell»?", o: ["Weil es in jedem Land gleich heisst", "Weil es am schnellsten rechnet", "Weil man alle anderen Gates nur aus NAND-Gates bauen kann", "Weil es beliebig viele Eingänge hat"], r: 2, e: "Aus NAND allein lassen sich NOT, AND, OR, NOR, XOR und sogar ein Computer bauen." },
    { f: "Wann leitet ein PNP-Transistor?", o: ["Wenn der Eingang 1 ist", "Wenn der Eingang 0 ist", "Immer", "Nie"], r: 1, e: "PNP leitet bei 0, NPN leitet bei 1." }
  ]
},
{
  id: "verschluesselung",
  titel: "Verschlüsselung",
  trainer: "krypto",
  text: `**Grundidee:** Ein **Sender** will einem **Empfänger** eine geheime Nachricht schicken. Den normalen, lesbaren Text nennt man **Klartext**. Den verschlüsselten Text nennt man **Geheimtext**.
- Das Verschlüsseln heisst auch **Chiffrierung**.
- Das Entschlüsseln heisst auch **Dechiffrierung**.
- Der Geheimtext wird über ein **Übertragungsmedium** verschickt, zum Beispiel über einen Boten oder das Internet. Wer ihn unterwegs abfängt, soll ihn nicht lesen können.

**Berühmte Verfahren aus der Geschichte:**
- **Skytale (ca. 500 v. Chr., Griechenland):** Man wickelt ein Lederband um einen Stab und schreibt der Länge nach darauf. Lesen kann man es nur mit einem Stab der *richtigen Dicke*.
- **Cäsar (ca. 100 v. Chr.):** Julius Cäsar verschob jeden Buchstaben um eine feste Zahl im Alphabet. Bei einer Verschiebung von 3 wird A zu D, bei 19 wird A zu T. Nach Z geht es wieder bei A weiter.
- **Cardan-Gitter (ca. 1550):** Eine Schablone mit Löchern. Man legt sie über einen harmlos aussehenden Brief, und nur die Wörter in den Löchern ergeben die geheime Botschaft.
- **Freimaurer-Alphabet (16. Jh.):** Jeder Buchstabe wird durch ein Zeichen ersetzt, das man von seiner Position in einem Gitter abliest.
- **Enigma (2. Weltkrieg):** Eine Verschlüsselungsmaschine mit Walzen und unvorstellbar vielen möglichen Einstellungen. Weil sich die Walzen nach jedem Tastendruck drehen, wird derselbe Buchstabe jedes Mal anders verschlüsselt.

**Die Häufigkeitsmethode:** Man zählt, wie oft jedes Zeichen im Geheimtext vorkommt. Das häufigste Zeichen ist wahrscheinlich der häufigste Buchstabe der Sprache, im Deutschen also **E**. Das funktioniert bei **monoalphabetischen** Verfahren.

**Monoalphabetisch:** Jedes Zeichen des Klartextes wird *immer durch dasselbe Zeichen* ersetzt (z.B. Cäsar, Freimaurer-Alphabet).
**Nicht monoalphabetisch:** Derselbe Buchstabe wird im selben Text unterschiedlich verschlüsselt (z.B. Enigma). Hier hilft die Häufigkeitsmethode nicht.

**Geheimschrift und Kryptosystem:**
- Bei einer **Geheimschrift** ist die Methode selbst schon der Schlüssel.
- Bei einem **Kryptosystem** ist die Methode bekannt, aber man braucht zusätzlich einen **Schlüssel**.

**Grundlegendes Prinzip:** Die Sicherheit einer Verschlüsselung soll darauf beruhen, dass der **Schlüssel** geheim bleibt, *nicht* die Methode.

**Symmetrische Verschlüsselung:** Für das Verschlüsseln und das Entschlüsseln wird der **gleiche Schlüssel** verwendet.

**Verschlüsselung mit XOR:** Klartext und Schlüssel liegen als Bits vor. Man rechnet Stelle für Stelle XOR: gleich → 0, verschieden → 1. Rechnet man den Geheimtext nochmals mit dem *gleichen* Schlüssel XOR, bekommt man wieder den Klartext. Deshalb ist XOR-Verschlüsselung symmetrisch.

**Häufigste Buchstaben im Deutschen**

| Platz | Buchstabe | Häufigkeit |
|---|---|---|
| 1 | E | 17,40 % |
| 2 | N | 9,78 % |
| 3 | I | 7,55 % |
| 4 | S | 7,27 % |
| 5 | R | 7,00 % |

**XOR-Beispiel**

| | Bits |
|---|---|
| Klartext | 0101010111010 |
| ⊕ Schlüssel | 1100111001110 |
| = Geheimtext | 1001101110100 |
| Geheimtext ⊕ Schlüssel | 0101010111010 (wieder der Klartext) |`,
  karten: [
    ["Klartext", "die lesbare Originalnachricht"],
    ["Geheimtext", "die verschlüsselte Nachricht"],
    ["Chiffrierung / Dechiffrierung", "Verschlüsselung / Entschlüsselung"],
    ["Skytale", "Lederband um einen Stab gewickelt; lesbar nur mit einem Stab der richtigen Dicke (ca. 500 v. Chr.)"],
    ["Cäsar-Verschlüsselung", "jeden Buchstaben um eine feste Zahl im Alphabet verschieben (ca. 100 v. Chr.)"],
    ["Cardan-Gitter", "Schablone mit Löchern über einem harmlosen Brief (ca. 1550)"],
    ["Enigma", "Verschlüsselungsmaschine mit Walzen (2. Weltkrieg); gleicher Buchstabe wird jedes Mal anders verschlüsselt"],
    ["Häufigkeitsmethode", "Zeichen zählen; das häufigste steht wohl für E"],
    ["Häufigster Buchstabe im Deutschen", "E (ca. 17 %)"],
    ["Monoalphabetisch", "gleicher Buchstabe → immer gleiches Zeichen"],
    ["Kryptosystem", "bekannte Methode + geheimer Schlüssel"],
    ["Symmetrische Verschlüsselung", "gleicher Schlüssel zum Ver- und Entschlüsseln"],
    ["Grundprinzip der Sicherheit", "Der Schlüssel muss geheim bleiben, nicht die Methode."],
    ["XOR-Verschlüsselung", "Bit für Bit: gleich → 0, verschieden → 1; nochmals XOR mit dem Schlüssel ergibt den Klartext"]
  ],
  aufgaben: [
    { f: "Verschlüssle HALLO mit Cäsar, Verschiebung 3.", l: "**KDOOR**\n\nH→K, A→D, L→O, L→O, O→R." },
    { f: "Bei einer Verschiebung von 19 wird A zu T. Was wird aus C und aus E?", l: "C → **V**, E → **X**\n\nAb A→T weiterzählen: B→U, C→V, D→W, E→X." },
    { f: "Entschlüssle KDOOR (Cäsar, Verschiebung 3).", l: "**HALLO**\n\nJeden Buchstaben 3 Plätze zurückschieben." },
    { f: "XOR: Klartext 1010, Schlüssel 0110. Wie lautet der Geheimtext?", l: "**1100**\n\n1⊕0=1, 0⊕1=1, 1⊕1=0, 0⊕0=0." },
    { f: "Entschlüssle den Geheimtext 1100 mit dem Schlüssel 0110 (XOR).", l: "**1010**\n\nNochmals XOR mit demselben Schlüssel ergibt den Klartext. Das zeigt, dass XOR symmetrisch ist." },
    { f: "In einem Geheimtext kommt das Zeichen «Q» am häufigsten vor. Für welchen Buchstaben steht es wahrscheinlich?", l: "**E**\n\nE ist im Deutschen mit 17,4 % der häufigste Buchstabe (Häufigkeitsmethode)." },
    { f: "Ist Cäsar monoalphabetisch? Ist die Enigma monoalphabetisch?", l: "Cäsar ist monoalphabetisch, die Enigma nicht.\n\nBei Cäsar wird E immer zum gleichen Buchstaben. Bei der Enigma ändert sich das bei jedem Tastendruck." }
  ],
  quiz: [
    { f: "Was ist das Ergebnis, wenn man HALLO mit Cäsar um 3 Buchstaben verschiebt?", o: ["KDOOR", "EXIIL", "KDOOS", "KCOOR"], r: 0, e: "H→K, A→D, L→O, L→O, O→R." },
    { f: "Bei einer Cäsar-Verschiebung von 19 wird A zu T. Was wird aus C?", o: ["U", "W", "T", "V"], r: 3, e: "A→T, B→U, C→V." },
    { f: "Welcher Buchstabe ist in der deutschen Sprache am häufigsten?", o: ["N", "E", "A", "S"], r: 1, e: "E kommt mit ca. 17 % am häufigsten vor." },
    { f: "Was bedeutet «monoalphabetische Verschlüsselung»?", o: ["Jeder Buchstabe wird immer durch dasselbe Zeichen ersetzt", "Es wird nur das deutsche Alphabet verwendet", "Ein Buchstabe wird im selben Text unterschiedlich verschlüsselt", "Die Nachricht besteht nur aus einem Buchstaben"], r: 0, e: "Bei Cäsar oder dem Freimaurer-Alphabet wird z.B. E immer zum gleichen Zeichen." },
    { f: "Worauf soll die Sicherheit einer Verschlüsselung beruhen?", o: ["Auf der Geheimhaltung der Methode", "Auf einer möglichst kurzen Nachricht", "Auf der Geheimhaltung des Schlüssels", "Auf einem schnellen Computer"], r: 2, e: "Die Methode darf bekannt sein, nur der Schlüssel muss geheim bleiben." },
    { f: "Was ist eine symmetrische Verschlüsselung?", o: ["Der Text wird gespiegelt", "Für Ver- und Entschlüsselung wird derselbe Schlüssel verwendet", "Für Ver- und Entschlüsselung werden zwei verschiedene Schlüssel verwendet", "Eine Verschlüsselung ganz ohne Schlüssel"], r: 1, e: "Symmetrisch heisst: der gleiche Schlüssel für beide Richtungen." },
    { f: "Klartext 1010 wird mit dem Schlüssel 0110 per XOR verschlüsselt. Wie lautet der Geheimtext?", o: ["0010", "1110", "0011", "1100"], r: 3, e: "Gleich ergibt 0, verschieden ergibt 1, also 1100." },
    { f: "Warum hilft die Häufigkeitsmethode bei der Enigma nicht?", o: ["Weil die Enigma nur Zahlen verschlüsselt", "Weil derselbe Buchstabe jedes Mal anders verschlüsselt wird", "Weil die Enigma keinen Schlüssel hat", "Weil sie zu alt ist"], r: 1, e: "Die Enigma ist nicht monoalphabetisch: Die Walzen drehen sich nach jedem Tastendruck." }
  ]
}
  ]
});
