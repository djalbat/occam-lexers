'use strict';

const LaTeXLexer = require('../../latex/lexer'),
      ExampleView = require('../../example/view');

class LaTeXExampleView extends ExampleView {
  getLexer() {
    const Lexer = LaTeXLexer; ///

    return Lexer;
  }

  getTitle() {
    const title = 'LaTeX lexer example';

    return title;
  }

  getInitialContent() {
    const initialContent = '';

    return initialContent;
  }

  static fromProperties(properties) { return ExampleView.fromProperties(LaTeXExampleView, properties);}
}

Object.assign(LaTeXExampleView, {
  defaultProperties: {
    className: 'latex'
  }
});

module.exports = LaTeXExampleView;
