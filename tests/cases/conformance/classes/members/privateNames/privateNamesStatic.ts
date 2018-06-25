class A {
    static #a;          // OK
    constructor () {
        A.#a = 5        // OK
    }
}

class B {
    constructor () {
        A.#b = 5        // Error: `#b` must be declared in class definition
    }
}