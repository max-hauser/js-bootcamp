# Dag 4: Concepts

**Execution context**

Bij het laden van de pagina wordt de Global Execution Context aangemaakt. Deze is aan te roepen door _window_ of door _this_ te gebruiken.

Elke Exection context bestaat uit twee fases:

1. De creation phase
2. De execution phase

In de creation phase worden alle variables en functies aangemaakt.
In de execution phase worden de waardes aan de variables toegewezen.

---------------------------------------------------------------------------

**Hoisting**

Hoisting zorgt ervoor dat variablen boven de functies worden gezet.

**Closures**

Closures laat de variables van de bovenliggende functie lezen.

---------------------------------------------------------------------------

**Scope**

Er zijn 4 verschillende scopes:

1. Global scope
2. Local scope
3. Function scope
4. Block scope

De variablen in de global scope zijn altijd te bereiken
variablen in de local scope zijn alleen op te roepen in de locale functie.
variables in een block scope zoals een if else statement zijn alleen toegankelijk in de block scope.
