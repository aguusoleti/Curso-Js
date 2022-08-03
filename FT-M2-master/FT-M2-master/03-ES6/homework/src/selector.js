var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]=== '#'){
    return 'id'
  }else if(selector[0]==='.'){
    return 'class'
  }else if(selector.split('.').length>1){
    return 'tag.class'
  }else{
    return 'tag'
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(el){
      return '#'+ el.id === selector
    }
  } else if (selectorType === "class") {
    matchFunction = function(el){
      let classes = el.classList
      // classes.forEach(e => { if (`.${e}` === selector)return true;})
      // return false
    for (let i=0; i<classes.length;i++){
      if (`.${classes[i]}` === selector)return true
    }
    return false
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function (el){
      var [tagBuscado,classBuscada]= selector.split('.')
      return matchFunctionMaker (tagBuscado)(el) && matchFunctionMaker(`.${classBuscada}`)(el)
    }
  } else if (selectorType === "tag") {
    matchFunction =function (el){
return el.tagName.toLowerCase() === selector
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
