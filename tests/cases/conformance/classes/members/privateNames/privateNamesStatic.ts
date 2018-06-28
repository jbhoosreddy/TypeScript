class A {
    static #a;          // OK
    constructor () {
        A.#a = 5;        // OK
    }
}

class B {
    constructor () {
        B.#b = 5;        // Error: private name `#b` was not declared in the class body
    }
}
