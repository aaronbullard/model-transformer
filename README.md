# model-transformer
JSON Object Transformer for Node.js

## Example
```
var ModelTransformer = require('model-transformer');

var personTransformer = new ModelTransformer(function(person){
  return {
    first: person.firstName,
    last: person.lastName
  };
});

###

var person = {
  firstName: 'Aaron',
  lastName: 'Bullard',
  password: 'secret',
  dob: 'May 23'
};

var response = personTransformer.Single(person);
// {first: 'Aaron', last: 'Bullard'};

// or an array
var response = personTransformer.List(people);
// [{first: 'Aaron', last: 'Bullard'}, {first: 'Ashley', last: 'Bullard'}];

```
