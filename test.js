const index = require('./index.js');

let data = {
    "code": 108007,
    "prov": "FAY",
    "hcode": "H100007",
    "enable": 0,
    "comment": "something comment"
}

let array = [1,2,3,4,5];

const result = index.jsonValuesToArray(data);
console.log(result)