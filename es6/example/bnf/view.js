'use strict';

const easy = require('easy');

const { Element } = easy;

class BNFExampleView extends Element {
  childElements(properties) {
    return ([
      'BNF example'
    ]);
  }

  static fromProperties(properties) { return Element.fromProperties(BNFExampleView, properties, document); }
}

Object.assign(BNFExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'bnf example'
  }
});

module.exports = BNFExampleView;

/*

const Example = require('../../example'),
      BNFLexer = require('../../bnf/lexer');

class BNFExample {
  static run() {
    const { entries } = BNFLexer,
          Lexer = BNFLexer;

    Example.run(entries, Lexer);
  }
}


    <h1>BNF example</h1>
    <div class="columns">
      <div id="sizeableElement">
        <h2>Entries</h2>
        <textarea id="entries" spellcheck="false"></textarea>
        <h2>Content</h2>
        <textarea id="content" spellcheck="false"></textarea>
      </div><div class="left vertical splitter" id="verticalSplitter"></div>
      <div class="column">
        <h2>Tokens</h2>
        <textarea rows="30" id="tokens" readonly></textarea>
      </div>
    </div>
    <p>
      <a href="index.html">...back</a>
    </p>

 */