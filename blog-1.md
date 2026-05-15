# Title: why using any type can be dangerous and unknown is the safer choise for handling unpredictable data


### The any type in typescript can accept all kinds of type that typescript has. it disables type checking. Therefore in this below function anyone can pass all kinds of value.

```function student(name: any){
console.log(`hello, ${name}`)
}

student(232) 

so we should avoid using any type cause it can show error in runtime

 

### in unknown types, typescript make us check the type before we use that variable. unknown types is useful when we don't know the type of the input data.

```function Data(data: unknown) {
if(typeof data === "string"){
return data.toUpperCase()
} else {
return "Invalid data"
}
}

const result = Data("hello world")

 so we should use unknown when we want to ensure type safety


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

### type narrowing is making union or broader type into specific type. 
to narrow down type we have to use some Type Guard like typeof , instanceof, in  operator.

function Data(data: string | number) {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return data.toFixed(2);
  }
}
