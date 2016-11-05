'use strict';

var Token = require('../../common/token');

class IncludeDirectiveToken extends Token {
  constructor(content, line, filePath) {
    super(content, line);

    this.filePath = filePath;
  }

  clone() {
    var content = this.getContent(),
        line = this.getLine(),
        filePath = this.getFilePath(),
        IncludeDirectiveToken = new IncludeDirectiveToken(content, line, filePath);

    return IncludeDirectiveToken;
  }

  getFilePath() {
    return this.filePath;
  }

  static position(content) {
    var position = content.search(/include\("[^"]*"\)/);

    return position;
  }

  static fromContent(content, line) {
    var includeDirectiveToken = null,
        matches = content.match(/^include\("([^"]*)"\)/);

    if (matches) {
      var firstMatch = first(matches),
          secondMatch = second(matches),
          filePath = secondMatch; ///

      content = firstMatch; ///

      includeDirectiveToken = new IncludeDirectiveToken(content, line, filePath);
    }
    
    return includeDirectiveToken;
  }

  getHTML() {
    var html = this.filePath;  ///

    return html;
  }
}

module.exports = IncludeDirectiveToken;

function first(array) { return array[0]; }
function second(array) { return array[1]; }
