class K {
    #v = 1;
    delete #v;          // Error: delete operator not permitted in class body.
}

class K {
    #v = 1;
    constructor() {
        delete this.#v; // Error: cannot delete private field `#v`.
    }
}

