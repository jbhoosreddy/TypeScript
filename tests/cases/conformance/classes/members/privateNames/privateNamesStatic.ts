class A {
    static #a: number | null;          // OK
    constructor () {
        A.#a = 5;                      // OK
    }
}

class B {
    constructor () {
        B.#b: number = 5;              // Error: private name `#b` was not declared in the class body
    }
}
