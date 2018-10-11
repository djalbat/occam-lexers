'use strict';

const ExampleView = require('../../example/view'),
      FlorenceLexer = require('../../florence/lexer');

class FlorenceExampleView extends ExampleView {
  getTokens() {
    const entries = this.getEntries(),
          content = this.getContent(),
          florenceLexer = FlorenceLexer.fromEntries(entries),
          tokens = florenceLexer.tokenise(content);

    return tokens;
  }

  getTitle() {
    const title = 'Florence lexer example';

    return title;
  }

  initialise() {
    super.initialise();

    const { entries } = FlorenceLexer;

    this.setEntries(entries);
  }

  static fromProperties(properties) { return ExampleView.fromProperties(FlorenceExampleView, properties);}
}

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: 'florence'
  }
});

module.exports = FlorenceExampleView;
