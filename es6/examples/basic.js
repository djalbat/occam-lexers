'use strict';

const Example = require('../example'),
      BasicLexer = require('../basic/lexer'),
      basicGrammar = require('../basic/grammar');

class BasicExample {
  static run() {
    Example.run(basicGrammar, BasicLexer);
  }
}

module.exports = BasicExample;
