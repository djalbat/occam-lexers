'use strict';

var Token = require('../token');

class SpecialToken extends Token {
  constructor(str, line) {
    super(str);
    
    this.line = line;
  }

  clone() {
    var str = this.getString(),
        line = this.getLine();

    return new SpecialToken(str, line);
  }
  
  getType() {
    return this.type;
  }

  getLine() {
    return this.line;
  }

  html() {
    var str = this.getString(),
        type = SpecialToken.type,
        html = '<span class="' + type + '">' + str + '</span>';

    return html;
  }
}

SpecialToken.type = 'special';

module.exports = SpecialToken;
