function Transformer(mapping){

  if(typeof mapping !== 'function'){
    throw new TypeError("Class must be constructed with a closure.");
  }

  var _mapping = mapping;

  var _getMapping = function(){
    return _mapping;
  };

  this.Single = function(model){
    fn = _getMapping();
    return fn( model );
  };

  this.List = function(models){
    var that = this;
    return models.map(function(model){
      return that.Single(model);
    });
  };
}

module.exports = Transformer;
