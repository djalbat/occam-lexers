'use strict';

const CSSLexer = require('../../css/lexer'),
      ExampleView = require('../../example/view');

class CSSExampleView extends ExampleView {
  getLexer() {
    const Lexer = CSSLexer; ///

    return Lexer;
  }

  getTitle() {
    const title = 'CSS lexer example';

    return title;
  }

  getInitialContent() {
    const initialContent = '';

    return initialContent;
  }

  static fromProperties(properties) { return ExampleView.fromProperties(CSSExampleView, properties);}
}

Object.assign(CSSExampleView, {
  defaultProperties: {
    className: 'css'
  }
});

module.exports = CSSExampleView;
