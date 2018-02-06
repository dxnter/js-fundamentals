function fib() {
    var fib, nacci;
    function nacci() {
    fib = fib || 0;
    nacci = nacci || 1;
    nacci = fib + nacci;
    }
    console.log(nacci);
}
var fibCounter = fib();
fibCounter();