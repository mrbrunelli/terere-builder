## Builder and Factory pattern with Javascript
> Util content: [dofacory.com/javascript/design-patterns](https://www.dofactory.com/javascript/design-patterns)

### Builder pattern
* Useful for creating custom behaviors, using methods with descriptive names.
* It's a lot like a production line, where each employee performs a single function.

##### Example
```js
myBuilderFunction
  .stepOne()
  .stepTwo()
  .stepThree()
  .stepFour()
  .finish()
```

### Factory pattern
* Useful for concentrating instance creation in one place.
* Gives the possibility to crate some logic when creating an instance.

##### Example
```js
function createOjbInstance(optionalParam) {
  const param = optionalParam || "I am a default param"
  return new MyClass(param)
}

const objOne = createObjInstance()
const objTwo = createObjInstance()
const objThree = createOjbInstance("I am an optional parameter")
const objFour = createOjbInstance()
```