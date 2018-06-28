
class B {
    constructor () {
        B.#b = 5;        // Error: private name `#b` was not declared in the class body
        this.#c = 10;    // Error: private name `#c` was not declared in the class body
    }
}
