
### README för OOP Poker (ES6 klasser)

#### Beskrivning:

Denna kodbas är en implementation av ett enkelt pokerspel i JavaScript med hjälp av ES6-klasser. Den innehåller klasser för kort, kortlek och spelare, samt grundläggande spellogik.

#### Funktioner:

- **Kortklass (Card):**
  - Representerar ett spelkort med attributen suit (färg), rank (valör) och value (numeriskt värde).

- **Kortleksklassen (Deck):**
  - Genererar en standard kortlek med 52 kort och innehåller en shuffle-metod för att blanda kortleken.

- **Spelarklassen (Player):**
  - Representerar en spelare med namn och en hand som håller kort.

#### Implementerade Delar:

Del 1-4: Skapade kortleken, blandade den, delade ut kort till spelarna, lät spelarna byta kort och slänga dem samt hanterade kasthögen.

#### Förbättringar och Kompletteringar:

- Implementera återstående delar av uppgiften: För att slutföra uppgiften måste delarna 5-8 implementeras, inklusive klasser för Dealer och Game samt logiken för att hantera kortleken och spelet.
  
- (Steg 5 - 8. Skapa lämpliga klasser Dealer, Game etc

Del 5
Skapa en ny klass som heter Dealer som hanterar allt som har med kortleken att göra. Dealern ska bland annat kunna: …”äga” en instans av klassen Deck. …blanda kortleken …dela ut kort ifrån kortleken till spelarna. Låt delarn blanda kortleken och dela ut en varsin hand till de två spelarna “Slim” och “Luke” via dealern. Skriv ut spelarnas händer.

Del 6
Skapa en ny klass som hanterar valideringen av spelarnas händer. Klassen ska ha “statiska” metoder, alltså de anropas genom klassnamnet, inte genom en instans. Skapa en metod som tar in en lista med spelare och utvärdera deras händer utifrån kortens numeriska värde, och returnerar resultaten på ett snyggt sätt. Dela ut händer till de två spelarna och låt den nya klassen validera deras händer.

Del 7
Skapa en Game-klass som sköter hela pokerspelet. Det enda main ska gör är att skapa en instans av klassen Game och anropa dess metod startGame. Game-klassen ska ha en lista med spelare och en instans av Dealer. Kom ihåg att dealern äger instansen av Deck. Skapa en metod som heter addPlayers som uppmanar användaren att skriva in antalet spelare (minst två) och sen respektive namn på de spelarna. Utifrån det så ska så många instanser av klassen Player skapas och läggas in listan med spelare. Skapa metoden startGame och skriv in logik där ett par spelare skapas, de får varsin hand, korten valideras och skriv ut vinnaren på ett snygg sätt.

Del 8
Skapa en game-loop i startGame-metoden som kan hantera att man kör flera rundor. Spelare skapas, de får varsin hand. Man har en slängningsrunda, man får nya kort och sen valideras det och en vinnare utses. Det är en runda. Man kan utöka till fler rundor genom att öka antalet iterationer som loopen går. I varje runda ska de olika spelare kunna välja vilka kort de ska slänga. Alltså bör de få se sin hand varje runda, och en metod för att slänga ett kort på en specifik indexplats bör skapas i spelarens klass eller något liknande.)
