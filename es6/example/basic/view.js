'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const { Element } = easy,
      { SizeableElement } = easyLayout;

const BasicLexer = require('../../basic/lexer'),
      TokensTextarea = require('../common/textarea/tokens'),
      EntriesTextarea = require('../common/textarea/entries'),
      ContentTextarea = require('../common/textarea/content'),
      LeftVerticalSplitter = require('../common/verticalSplitter/left');

class BasicExampleView extends Element {
  keyUpHandler() {
    try {
      const entries = this.getEntries(),
            content = this.getContent(),
            basicLexer = BasicLexer.fromEntries(entries),
            tokens = basicLexer.tokenise(content);

      this.hideError();

      this.setTokens(tokens);
    } catch (error) {
      this.showError();

      this.clearTokens();
    }
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <h1>Basic Example</h1>,
      <div className="columns">
        <SizeableElement>
          <h2>Entries</h2>
          <EntriesTextarea onKeyUp={keyUpHandler} />
          <h2>Content</h2>
          <ContentTextarea onKeyUp={keyUpHandler} />
        </SizeableElement>
        <LeftVerticalSplitter />
        <div className="column">
          <h2>Tokens</h2>
          <TokensTextarea />
        </div>
      </div>

    ]);
  }

  initialise() {
    this.assignContext();

    const { entries } = BasicLexer;

    this.setEntries(entries);
  }

  static fromProperties(properties) {
    const basicExampleView = Element.fromProperties(BasicExampleView, properties);

    basicExampleView.initialise();

    return basicExampleView
  }
}

Object.assign(BasicExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'basic example'
  }
});

module.exports = BasicExampleView;
