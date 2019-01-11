const index = require('./index.js');

let data = {
            "code": "euh-108007",
            "provider": "euh",
            "hcode": "H100007",
            "enable": 0,
            "lock": 0,
            "type": "H",
            "comment": "comentado"
            }

const result = index.jsonKeysToArray(data);
console.log(result)