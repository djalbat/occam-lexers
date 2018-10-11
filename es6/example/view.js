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
          <h2>Entries</h2>
          <EntriesTextarea onKeyUp={keyUpHandler} />
          <h2>Content</h2>
          <ContentTextarea onKeyUp={keyUpHandler} />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>Tokens</h2>
          <TokensTextarea />
        </div>
      </div>

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static fromProperties(Class, properties) {
    const florenceExampleView = Element.fromProperties(Class, properties);

    florenceExampleView.initialise();

    return florenceExampleView
  }
}

Object.assign(ExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'example'
  }
});

module.exports = ExampleView;
