# base112064
#### A small javascript library to serialize your objects in as few characters as possible

## Why call it base112064?
This library serializes an object using utf-8 encoding which has 112064 possible characters

## Is this library right for me?
You absolutely should not use this library, or do, I'm not a cop


## Usage
serialize your object into a string (or a plain buffer) then pass it as an argument to the default export from this library
```js
import encode from 'base112064'
import {promises as fs} from 'promises'

let myData = await fs.readfile('./data.mp4')
console.log(encode(myData))

```
## Does this compress my data?
Absolutely not, this simply takes advantage of the fact that the higher base you're using the fewer characters you need to represent the same data. the binary representation of your data is exactly the same under the hood
