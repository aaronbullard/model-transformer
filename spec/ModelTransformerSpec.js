var ModelTransformer = require('../src/ModelTransformer');

describe("ModelTransformer", function(){

  var model = {
    user: {
      first: 'Aaron',
      last: 'Bullard'
    }
  };

  var transformer = new ModelTransformer(function(model){
    return {
      first: model.user.first,
      last: model.user.last
    };
  });

  it("it transforms a single model", function(){
    expect(transformer.Single(model)).toEqual({
      first: 'Aaron',
      last: 'Bullard'
    });
  });

  it("it transforms an array of models", function(){

    var models = [model, model];

    expect(transformer.List(models)).toEqual([
      {
        first: 'Aaron',
        last: 'Bullard'
      },
      {
        first: 'Aaron',
        last: 'Bullard'
      }
    ]);
  });

});
