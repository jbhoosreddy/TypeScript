#foo = "foo";            // Error: Private names are not allowed outside of class bodies

class A {
    #bar = "bar";        // OK
    getString() {
        return "string";
    }
}

A.prototype.getString = function () {
    // early error in ES spec: https://tc39.github.io/proposal-class-fields/#sec-static-semantics-early-errors
    return this.#bar;    // Error: Private names are not allowed outside of class bodies
};

