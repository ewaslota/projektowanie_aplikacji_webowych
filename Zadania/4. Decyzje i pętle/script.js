/**
 * Zadanie 4
 *
 * 1)  Napisz funkcje która przyjmuje jeden parametr który jest liczbą.
 *     Funkcja niech wypisuję na konsolę "Liczba nieparzysta" w przypadku gdy przy wywołaniu funkcji została
 * podana liczba nieparzysta lub "Liczba parzysta" w przypadku gdy przy wywołaniu funkcji została podana liczba parzysta.
 *     Zadanie wykonaj z wykorzystaniem konstrukcji IF
 *
 * 2)  Napisz funkcję która wypisze na konsole liczby od 1 do 100 podzielne przez 3.
 */

function evenOrOdd(n) {
    if(n % 2) {
        console.log('liczba nieparzysta');
    } else {
        console.log('liczba parzysta');
    }
}
evenOrOdd(5);

function f() {
for(let i = 3, i<100, i +=3) {
        console.log(i)
    }
}
