function fibonacci(num) {
    if (num === 1) return 0; 
    if (num === 2) return 1; 

    let a = 0; 
    let b = 1; 
    let fib = 0;

    for (let i = 3; i <= num; i++) {
        fib = a + b; 
        a = b; 
        b = fib; 
    }

    return fib; 
}

module.exports = fibonacci;