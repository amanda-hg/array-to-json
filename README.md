# filmaffinity-search

This module convert an array into a json and viceverse.
```js
[1,2,3,4,5] => {
                    1: {},
                    2: {},
                    3: {},
                    4: {},
                    5: {}
                }
```
# Usage

Just require the module like any other npm module 
```js
const convert = require('array-to-json');
```

# Methods

This module has four methods:

- arrayToJson: return a json object from an array
- jsonToArray: returns an array from a json object
- jsonKeysToArray: returns an array with all keys of a json object
- jsonValuesToArray: returns an array with all values of a json object

# Example
## arrayToJson
Input:
```js
const convert = require('array-to-json');

let array = [1,2,3,4,5];
const json = convert.arrayToJson(array);
console.log(json);

```
Output:
```js
{
    1: {},
    2: {},
    3: {},
    4: {},
    5: {}
}
```
## jsonToArray
Input:
```js
const convert = require('array-to-json');

let data = {
            "code": 108007,
            "prov": "FAY",
            "hcode": "H100007",
            "enable": 0,
            "comment": "something comment"  
            }
const array = convert.jsonToArray(data);
console.log(array);

```

Output:
```js
[ { code: '108007' },
  { prov: 'FAY' },
  { hcode: 'H100007' },
  { enable: 0 },
  { comment: 'something comment' } ]
```
## jsonKeysToArray
Input:
```js
const convert = require('array-to-json');

let data = {
            "code": 108007,
            "prov": "FAY",
            "hcode": "H100007",
            "enable": 0,
            "comment": "something comment"  
            }
const array = convert.jsonKeysToArray(data);
console.log(array);
```

Output:
```js
[ 'code', 'prov', 'hcode', 'enable', 'comment' ]
```
## jsonValuesToArray
Input:
```js
const convert = require('array-to-json');

let data = {
            "code": 108007,
            "prov": "FAY",
            "hcode": "H100007",
            "enable": 0,
            "comment": "something comment"  
            }
const array = convert.jsonValuesToArray(data);
console.log(array);
```

Output:
```js
[ '108007', 'FAY', 'H100007', 0, 'something comment' ]
```