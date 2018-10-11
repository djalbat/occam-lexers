'use strict';

const ExampleView = require('../../example/view'),
      FlorenceLexer = require('../../florence/lexer');

class FlorenceExampleView extends ExampleView {
  getLexer() {
    const Lexer = FlorenceLexer;  ///

    return Lexer;
  }

  getTitle() {
    const title = 'Florence lexer example';

    return title;
  }

  getInitialContent() {
    const initialContent = '';

    return initialContent;
  }

  static fromProperties(properties) { return ExampleView.fromProperties(FlorenceExampleView, properties);}
}

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: 'florence'
  }
});

module.exports = FlorenceExampleView;
