'use strict';

var Token = require('../../common/token');

class IncludeDirectiveToken extends Token {
  constructor(string, line, filePath) {
    super(string, line);

    this.filePath = filePath;
  }

  clone() {
    var string = this.getString(),
        line = this.getLine(),
        filePath = this.getFilePath(),
        IncludeDirectiveToken = new IncludeDirectiveToken(string, line, filePath);

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
          string = firstMatch, ///
          filePath = secondMatch; ///

      includeDirectiveToken = new IncludeDirectiveToken(string, line, filePath);
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
