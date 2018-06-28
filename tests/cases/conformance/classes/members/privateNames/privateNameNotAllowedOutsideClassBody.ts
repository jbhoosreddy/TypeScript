#foo: string = "foo";            // Error: Private names are not allowed outside of class bodies

class A {
    #bar: string = "bar";        // OK
    getString(): string {
        return "string";
    }
}

A.prototype.getString = function (): string {
    // early error in ES spec: https://tc39.github.io/proposal-class-fields/#sec-static-semantics-early-errors
    return this.#bar;    // Error: Private names are not allowed outside class bodies
};

