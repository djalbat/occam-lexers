'use strict';

var Token = require('../token');

class SelectedToken extends Token {
  getHTML() {
    var content = this.getContent(),
        html = content;  ///

    return html;
  }
}

module.exports = SelectedToken;
