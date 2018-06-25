/*
This is different from the approach described in https://github.com/Microsoft/TypeScript/issues/16324#issuecomment-306890149.
The reason for the difference is that we cannot currently see a use case for `private #foo`. `private #foo`
is more restrictive than plain `#foo` because `private` prevents structural typing when using classes as types:

```ts
class A {
   private foo;
}

class B extends A {}

class C extends A {}

let x: A;
x = new B() // Error
x = new C() // Error
```



*/
class A {
    public #foo;                 // Error: Modifiers are not allowed for fields with private names
    private #foo;                // Error: Modifiers are not allowed for fields with private names
    protected #foo;              // Error: Modifiers are not allowed for fields with private names
    public static #foo;          // Error: Modifiers are not allowed for fields with private names
    private static #foo;         // Error: Modifiers are not allowed for fields with private names
    protected static #foo;       // Error: Modifiers are not allowed for fields with private names
    #foo;                        // OK
}

