'use strict';

const BasicLexer = require('../../basic/lexer'),
      ExampleView = require('../../example/view');

class BasicExampleView extends ExampleView {
  getTokens() {
    const entries = this.getEntries(),
          content = this.getContent(),
          basicLexer = BasicLexer.fromEntries(entries),
          tokens = basicLexer.tokenise(content);

    return tokens;
  }

  getTitle() {
    const title = 'Basic lexer example';

    return title;
  }

  initialise() {
    super.initialise();

    const { entries } = BasicLexer;

    this.setEntries(entries);
  }

  static fromProperties(properties) { return ExampleView.fromProperties(BasicExampleView, properties);}
}

Object.assign(BasicExampleView, {
  defaultProperties: {
    className: 'basic'
  }
});

module.exports = BasicExampleView;
