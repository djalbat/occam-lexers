'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const { Element } = easy,
      { SizeableElement } = easyLayout;

const BNFLexer = require('../../bnf/lexer'),
      TokensTextarea = require('../common/textarea/tokens'),
      EntriesTextarea = require('../common/textarea/entries'),
      ContentTextarea = require('../common/textarea/content'),
      LeftVerticalSplitter = require('../common/verticalSplitter/left');

class BNFExampleView extends Element {
  keyUpHandler() {
    try {
      const entries = this.getEntries(),
            content = this.getContent(),
            bnfLexer = BNFLexer.fromEntries(entries),
            tokens = bnfLexer.tokenise(content);

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

      <h1>BNF Example</h1>,
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

    const { entries } = BNFLexer;

    this.setEntries(entries);
  }

  static fromProperties(properties) {
    const bnfExampleView = Element.fromProperties(BNFExampleView, properties);

    bnfExampleView.initialise();

    return bnfExampleView
  }
}

Object.assign(BNFExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'bnf example'
  }
});

module.exports = BNFExampleView;
