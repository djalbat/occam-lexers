'use strict';

var easy = require('easy'),
    Textarea = easy.Textarea;

var Example = require('../example'),
    BasicLexer = require('../basic/lexer');

var terminalSymbolsRegExpPatternTextarea,
    terminalSymbolsRegExpPatternTextareaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPattern = `\\+|\\-|\\*|\\/|\\(|\\)|\\d+`;

var lexer = null;

class BasicExample {
  static run() {
    terminalSymbolsRegExpPatternTextarea = new Textarea(terminalSymbolsRegExpPatternTextareaSelector);

    var terminalSymbolsRegExpPatternTextareaValue = terminalSymbolsRegExpPattern; ///

    terminalSymbolsRegExpPatternTextarea.setValue(terminalSymbolsRegExpPatternTextareaValue);

    terminalSymbolsRegExpPatternTextarea.onChange(function() {
      update();
    });

    Example.contentTextareaOnKeyUp(function() {
      update();
    });

    update();
  }
}

module.exports = BasicExample;

function update() {
  updateLexer();

  if (lexer !== null) {
    Example.updateTokens(lexer);
  } else {
    Example.clearTokens();
  }
}

function updateLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextarea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,  ///
      terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [
          { terminalSymbol : terminalSymbolsRegExp }
        ];

    lexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternTextarea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextarea.addClass('error');

    lexer = null;
  }
}

function regExpPatternIsValid(regExpPattern) {
  var valid = true;

  try {
    new RegExp(regExpPattern);
  }
  catch (error) {
    valid = false;
  }

  return valid;
}
