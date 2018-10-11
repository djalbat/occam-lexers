'use strict';

const BNFLexer = require('../../bnf/lexer'),
      ExampleView = require('../../example/view');

class BNFExampleView extends ExampleView {
  getTokens() {
    const entries = this.getEntries(),
          content = this.getContent(),
          bnfLexer = BNFLexer.fromEntries(entries),
          tokens = bnfLexer.tokenise(content);

    return tokens;
  }

  getTitle() {
    const title = 'BNF lexer example';

    return title;
  }

  initialise() {
    super.initialise();

    const { entries } = BNFLexer;

    this.setEntries(entries);
  }

  static fromProperties(properties) { return ExampleView.fromProperties(BNFExampleView, properties);}
}

Object.assign(BNFExampleView, {
  defaultProperties: {
    className: 'bnf'
  }
});

module.exports = BNFExampleView;
