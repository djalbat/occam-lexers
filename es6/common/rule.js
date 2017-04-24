'use strict';

const SignificantToken = require('../common/token/significant');

class Rule {
  constructor(type, regExp) {
    this.type = type;
    this.regExp = regExp;
  }
  
  significantTokenPositionWithinContent(content) {
    let significantTokenPosition = -1;
    
    const matches = content.match(this.regExp);
    
    if (matches !== null) {
      const firstMatch = first(matches);
      
      if (firstMatch !== '') {
        significantTokenPosition = matches.index; ///
      }
    }

    return significantTokenPosition;
  }

  significantTokenFromWithinContentAndLine(content, line) {
    const matches = content.match(this.regExp),
          firstMatch = first(matches);

    content = firstMatch; ///

    const significantToken = SignificantToken.fromContentLineAndType(content, line, this.type);

    return significantToken;
  }
}

module.exports = Rule;

function first(array) { return array[0]; }
