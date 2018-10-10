'use strict';

const easy = require('easy');

const { Element } = easy;

class FlorenceExampleView extends Element {
  childElements(properties) {
    return ([
      'Florence example'
    ]);
  }

  static fromProperties(properties) { return Element.fromProperties(FlorenceExampleView, properties, document); }
}

Object.assign(FlorenceExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'florence example'
  }
});

module.exports = FlorenceExampleView;

/*
const Example = require('../../example'),
      FlorenceLexer = require('../../florence/lexer');

class FlorenceExample {
  static run() {
    const { entries } = FlorenceLexer,
          Lexer = FlorenceLexer;

    Example.run(entries, Lexer);
  }
}


    <h1>Florence example</h1>
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