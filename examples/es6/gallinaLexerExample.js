'use strict';

var easyUI = require('easyui'),
    easyUILayout = require('easyui-layout'),
    TextArea = easyUI.TextArea,
    SizeableElement = easyUILayout.SizeableElement,
    VerticalSplitter = easyUILayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textArea#content',
    tokensTextAreaSelector = 'textArea#tokens',
    contentTextArea = new TextArea(contentTextAreaSelector),
    tokensTextArea = new TextArea(tokensTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var GallinaLexer = require('../../es6/gallinaLexer');

class GallinaLexerExample {
  static run() {
    contentTextArea.onChange(function() {
      updateTokens();
    });
 }
}

function updateTokens() {
  var contentTextAreaValue = contentTextArea.getValue(),
      content = contentTextAreaValue,  ///
      lines = GallinaLexer.linesFromContent(content),
      tokens = lines.reduce(function(tokens, line, index) {
        var lineTokens = line.getTokens();

        tokens = tokens.concat(lineTokens);

        return tokens;
      }, []),
      tokensHTML = tokens.reduce(function(tokensHTML, token) {
        var tokenHTML = token.getHTML();
        
        tokensHTML += tokenHTML;
        
        return tokensHTML;
      }, ''),
      tokensTextAreaHTML = tokensHTML;  ///

  tokensTextArea.html(tokensTextAreaHTML);
}

module.exports = GallinaLexerExample;
