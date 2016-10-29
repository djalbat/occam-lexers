'use strict';

var easyui = require('easyui'),
    TextArea = easyui.TextArea;

var Example = require('../example'),
    BasicLexer = require('../../../es6/basic/lexer');

var terminalSymbolsRegExpPatternTextAreaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPatternTextArea = new TextArea(terminalSymbolsRegExpPatternTextAreaSelector);

var terminalSymbolsRegExpPattern = `\\+|\\-|\\*|\\/|\\(|\\)|\\d+`;

var lexer = null;

class BasicExample {
  static run() {
    var terminalSymbolsRegExpPatternTextAreaValue = terminalSymbolsRegExpPattern; ///

    terminalSymbolsRegExpPatternTextArea.setValue(terminalSymbolsRegExpPatternTextAreaValue);

    update();

    terminalSymbolsRegExpPatternTextArea.onChange(function() {
      update();
    });

    Example.contentTextAreaOnChange(function(contextTextAreaValue) {
      update();
    });
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
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,  ///
      terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [
          { terminal : terminalSymbolsRegExp }
        ];

    lexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternTextArea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextArea.addClass('error');

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
