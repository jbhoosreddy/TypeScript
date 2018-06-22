class A {
    public #foo;                 // Error: Modifiers are not allowed for fields with private names
    private #foo;                // Error: Modifiers are not allowed for fields with private names
    protected #foo;              // Error: Modifiers are not allowed for fields with private names
    public static #foo;          // Error: Modifiers are not allowed for fields with private names
    private static #foo;         // Error: Modifiers are not allowed for fields with private names
    protected static #foo;       // Error: Modifiers are not allowed for fields with private names
    #foo;                        // OK
}

