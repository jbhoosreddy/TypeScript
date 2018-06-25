class A {
    static #a;          // OK
    constructor () {
        A.#a = 5;        // OK
    }
}

class B {
    constructor () {
        B.#b = 5;        // Error: `#b` must be declared in class definition
    }
}
