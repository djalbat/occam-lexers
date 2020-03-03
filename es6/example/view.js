'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const { Element } = easy,
      { SizeableElement } = easyLayout;

const TokensTextarea = require('./common/textarea/tokens'),
      EntriesTextarea = require('./common/textarea/entries'),
      ContentTextarea = require('./common/textarea/content'),
      MainVerticalSplitter = require('./common/verticalSplitter/main');

class ExampleView extends Element {
  getTokens() {
    const Lexer = this.getLexer(),
          entries = this.getEntries(),
          content = this.getContent(),
          lexer = Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  keyUpHandler() {
    try {
      const tokens = this.getTokens();

      this.hideError();

      this.setTokens(tokens);
    } catch (error) {
      this.showError();

      this.clearTokens();
    }
  }

  childElements(properties) {
    const title = this.getTitle(),
          keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <h1>{title}</h1>,
      <div className="columns">
        <SizeableElement>
          <h2>
            Entries
          </h2>
          <EntriesTextarea onKeyUp={keyUpHandler} />
          <h2>
            Content
          </h2>
          <ContentTextarea onKeyUp={keyUpHandler} />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>
            Tokens
          </h2>
          <TokensTextarea />
        </div>
      </div>

    ]);
  }

  initialise() {
    this.assignContext();

    const Lexer = this.getLexer(),
          initialContent = this.getInitialContent(),
          content = initialContent, ///
          { entries } = Lexer;

    this.setContent(content);
    this.setEntries(entries);

    this.keyUpHandler();
  }

  static fromProperties(Class, properties) {
    const exampleView = Element.fromProperties(Class, properties);

    exampleView.initialise();

    return exampleView
  }
}

Object.assign(ExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'example'
  }
});

module.exports = ExampleView;
