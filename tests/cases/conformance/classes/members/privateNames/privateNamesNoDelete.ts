class K {
    #v: number = 1;
    delete #v;          // Error: delete operator not permitted in class body.
}

class K {
    #v: number | null = 1;
    constructor() {
        delete this.#v; // Error: cannot delete private field `#v`.
    }
}

