'use strict';

var SignificantToken = require('../common/token/significant');

class Rule {
  constructor(tokenType, regExp) {
    this.tokenType = tokenType;
    this.regExp = regExp;
  }

  significantTokenFromContent(content, line) {
    var matches = content.match(this.regExp);

    if (matches === null) {
      return null;
    }

    var firstMatch = first(matches),
        str = firstMatch, ///
        type = this.tokenType,  ///
        significantToken = new SignificantToken(str, type, line);
    
    return significantToken;
  }
}

module.exports = Rule;

function first(array) { return array[0]; }
