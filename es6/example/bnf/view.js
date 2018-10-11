'use strict';

const BNFLexer = require('../../bnf/lexer'),
      ExampleView = require('../../example/view');

class BNFExampleView extends ExampleView {
  getLexer() {
    const Lexer = BNFLexer;  ///

    return Lexer;
  }

  getTitle() {
    const title = 'BNF lexer example';

    return title;
  }

  getInitialContent() {
    const { entries } = BNFLexer,
          entriesString = JSON.stringify(entries, null, '  '),
          initialContent = entriesString; ///

    return initialContent;
  }


  static fromProperties(properties) { return ExampleView.fromProperties(BNFExampleView, properties);}
}

Object.assign(BNFExampleView, {
  defaultProperties: {
    className: 'bnf'
  }
});

module.exports = BNFExampleView;
