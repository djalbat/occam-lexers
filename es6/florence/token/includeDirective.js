'use strict';

var Token = require('../../common/token');

class IncludeDirectiveToken extends Token {
  constructor(str, line, filePath) {
    super(str, line);

    this.filePath = filePath;
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
          str = firstMatch, ///
          filePath = secondMatch; ///

      includeDirectiveToken = new IncludeDirectiveToken(str, line, filePath);
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
