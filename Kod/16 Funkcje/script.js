function simpleFunction() {
    console.log('Wywołanie funkcji simpleFunction');
}

simpleFunction();

function rewriteIt(text) {
    console.log(text);
}

rewriteIt('Jakiś tekst');

function sumOfTwo(a, b) {
    let sum = a + b;
    console.log(a + ' + '  + b + ' = ' + sum);
}

sumOfTwo(2, 1);

function functionWithReturn() {
    return 'Jakiś zwrócony tekst';
}

function showReturned() {
    console.log(functionWithReturn());
}

showReturned();

function f(p1, p2) {
    console.log('Dwa parametry ' + p1 + ' ' + p2);
}

f(1, 2);

function f(p3) {
    console.log('Jeden paramentr ' + p3);
}

f(1, 2); //nie działa przeładowanie metod
