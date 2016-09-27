'use strict';

var easyUI = require('easyui'),
    easyUILayout = require('easyui-layout'),
    TextArea = easyUI.TextArea,
    SizeableElement = easyUILayout.SizeableElement,
    VerticalSplitter = easyUILayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    inputTextAreaSelector = 'textArea#input',
    tokensTextAreaSelector = 'textArea#tokens',
    inputTextArea = new TextArea(inputTextAreaSelector),
    tokensTextArea = new TextArea(tokensTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

class FlorenceLexerExample {
  static run() {

  }
}

module.exports = FlorenceLexerExample;
