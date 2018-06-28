class A {
    #constructor() {}      // Error: `#constructor` is reserved.
}

class A {
    #constructor: number = 5       // Error: `#constructor` is reserved.
}
