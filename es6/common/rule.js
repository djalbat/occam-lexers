'use strict';

var SignificantToken = require('../common/token/significant');

class Rule {
  constructor(type, regExp) {
    this.type = type;
    this.regExp = regExp;
  }

  significantTokenFromContent(content, line) {
    var significantToken = null,
        matches = content.match(this.regExp);

    if (matches !== null) {
      var firstMatch = first(matches),
          str = firstMatch; ///
      
      significantToken = new SignificantToken(str, this.type, line);
    }
    
    return significantToken;
  }
}

module.exports = Rule;

function first(array) { return array[0]; }
