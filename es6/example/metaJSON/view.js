'use strict';

const MetaJSONLexer = require('../../metaJSON/lexer'),
      ExampleView = require('../../example/view');

class MetaJSONExampleView extends ExampleView {
  getLexer() {
    const Lexer = MetaJSONLexer; ///

    return Lexer;
  }

  getTitle() {
    const title = 'Meta JSON lexer example';

    return title;
  }

  getInitialContent() {
    const initialContent = '';

    return initialContent;
  }

  static fromProperties(properties) { return ExampleView.fromProperties(MetaJSONExampleView, properties);}
}

Object.assign(MetaJSONExampleView, {
  defaultProperties: {
    className: 'meta-json'
  }
});

module.exports = MetaJSONExampleView;
