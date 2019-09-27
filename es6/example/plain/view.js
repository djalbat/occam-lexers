'use strict';

const PlainLexer = require('../../plain/lexer'),
      ExampleView = require('../../example/view');

class PlainExampleView extends ExampleView {
  getLexer() {
    const Lexer = PlainLexer; ///

    return Lexer;
  }

  getTitle() {
    const title = 'Plain lexer example';

    return title;
  }

  getInitialContent() {
    const initialContent = '';

    return initialContent;
  }

  static fromProperties(properties) { return ExampleView.fromProperties(PlainExampleView, properties);}
}

Object.assign(PlainExampleView, {
  defaultProperties: {
    className: 'plain'
  }
});

module.exports = PlainExampleView;
