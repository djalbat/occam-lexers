'use strict';

const easy = require('easy');

const { Element } = easy;

class BasicExampleView extends Element {
  childElements(properties) {
    return ([
      'Basic example'
    ]);
  }

  static fromProperties(properties) { return Element.fromProperties(BasicExampleView, properties, document); }
}

Object.assign(BasicExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'basic example'
  }
});

module.exports = BasicExampleView;

/*
const Example = require('../../example'),
      BasicLexer = require('../../basic/lexer');

class BasicExample {
  static run() {
    const { entries } = BasicLexer,
          Lexer = BasicLexer;

    Example.run(entries, Lexer);
  }
}

    <h1>Basic example</h1>
    <div className="columns">
      <div id="sizeableElement">
        <h2>Entries</h2>
        <textarea id="entries" spellCheck="false"></textarea>
        <h2>Content</h2>
        <textarea id="content" spellCheck="false"></textarea>
      </div><div className="left vertical splitter" id="verticalSplitter"></div>
      <div className="column">
        <h2>Tokens</h2>
        <textarea rows="30" id="tokens" readOnly></textarea>
      </div>
    </div>
    <p>
      <a href="index.html">...back</a>
    </p>

 */