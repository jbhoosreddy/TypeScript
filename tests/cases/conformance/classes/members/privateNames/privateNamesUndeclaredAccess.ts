
class B {
    constructor () {
        B.#b = 5;        // Error: private `#b` must be declared in class definition
        this.#c = 10;    // Error: private `#c` must be declared in class definition
    }
}
