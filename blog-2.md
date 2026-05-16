# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

### Generic type

Generic allow us to write flexible, reusable code that works with multiple data type. Generics provide compile-time type checking. Generics can also helpful for code reusability

in this below student function we applied generic type <T> which receive the input type and give output accordingly.

```typescript
function student<T>(data: T) {
  return data;
}

let result1 = student("hellow");
let result2 = student(34);
```

Therefore, generic can makes our code reusable and we don't have define type individually.
