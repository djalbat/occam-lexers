'use strict';

var SignificantToken = require('../common/token/significant');

class Rule {
  constructor(type, regExp) {
    this.type = type;
    this.regExp = regExp;
  }
  
  significantTokenPosition(content) {
    var significantTokenPosition = -1,
        matches = content.match(this.regExp);
    
    if (matches !== null) {
      var firstMatch = first(matches);
      
      if (firstMatch !== '') {
        significantTokenPosition = matches.index; ///
      }
    }

    return significantTokenPosition;
  }

  significantTokenFromContent(content, line) {
    var matches = content.match(this.regExp),
        firstMatch = first(matches);

    content = firstMatch;

    var significantToken = new SignificantToken(content, line, this.type);

    return significantToken;
  }
}

module.exports = Rule;

function first(array) { return array[0]; }
