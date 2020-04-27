# Dag 2: Functions

Een functie is een herbruikbaar stuk code dat een specifieke taak uitvoert.
Het uitvoeren van een functie wordt invoking, calling of applying genoemd.

function _naam_(_parameter_) {

}

naam(_argument_);

-----------------------------------------------------------------

Er zijn verschillende manieren om functies te schrijven:

1. Named function:
function greeting() {
  return console.log('My name is Max');
}

2. Store invoked result in variable
const greeting = function() {
 return console.log('My name is Max'); 
} 

3. Anonymous function:
button.addEventListener('click', function(e) {
  console.log(e);
});

4. Arrow functions (ES6):
button.addEventListener('click', (e) => {
  console.log(e);
});

-----------------------------------------------------------------

## Higher-order functions

Een higher-order function neemt een functie als argument, of returned een functie.

