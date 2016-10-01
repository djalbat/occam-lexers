'use strict';

var Token = require('../../common/token');

class SpecialToken extends Token {
  clone() {
    var str = this.getString(),
        line = this.getLine();

    return new SpecialToken(str, line);
  }

  getHTML() {
    var str = this.getString(),
        type = SpecialToken.type,
        html = '<span class="' + type + '">' + str + '</span>';

    return html;
  }

  static position(content) {
    var position = content.search(SpecialToken.regExp);
    
    return position;
  }
  
  static fromContent(content, line) {
    var str = content;  ///
    
    var specialToken = new SpecialToken(str, line);
    
    return specialToken;
  } 
}

SpecialToken.type = 'special';
SpecialToken.regExp = /(!|%|&&|&|@|~|\(\)|\(|\)|\*|\+\+|\+|,|\.\(|\.\.|\.|\\\/|\/\\|\/|::|:<|:=|:>|:|;|<->|>->|<-|->|-|<:|<=|<>|<|=>|=_D|=|>=|>|\?|\?=|\[|\]|\^|\{|\}|\|\||\|-|\|)/;

module.exports = SpecialToken;
