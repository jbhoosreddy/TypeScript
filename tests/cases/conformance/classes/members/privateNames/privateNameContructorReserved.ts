class A {
    #constructor() {}      // Error: `#constructor` is reserved.
}

class A {
    #constructor = 5       // Error: `#constructor` is reserved.
}
