
class B {
    constructor () {
        B.#b = 5;        // Error: private field `#b` must be declared in class definition
        this.#c = 10;    // Error: private field `#c` must be declared in class definition
    }
}
