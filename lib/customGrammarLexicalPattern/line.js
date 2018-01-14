'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('./tokens/whitespace'),
    StringLiteralTokens = require('./tokens/stringLiteral'),
    RegularExpressionTokens = require('./tokens/regularExpression');

var CustomGrammarLexicalPatternLine = function (_CommonLine) {
  _inherits(CustomGrammarLexicalPatternLine, _CommonLine);

  function CustomGrammarLexicalPatternLine() {
    _classCallCheck(this, CustomGrammarLexicalPatternLine);

    return _possibleConstructorReturn(this, (CustomGrammarLexicalPatternLine.__proto__ || Object.getPrototypeOf(CustomGrammarLexicalPatternLine)).apply(this, arguments));
  }

  _createClass(CustomGrammarLexicalPatternLine, null, [{
    key: 'fromContentRulesAndConfiguration',
    value: function fromContentRulesAndConfiguration(content, rules, configuration) {
      var customGrammarLexicalPatternLine = _get(CustomGrammarLexicalPatternLine.__proto__ || Object.getPrototypeOf(CustomGrammarLexicalPatternLine), 'fromContentRulesAndConfiguration', this).call(this, CustomGrammarLexicalPatternLine, content, rules, configuration);

      customGrammarLexicalPatternLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

      return customGrammarLexicalPatternLine;
    }
  }]);

  return CustomGrammarLexicalPatternLine;
}(CommonLine);

module.exports = CustomGrammarLexicalPatternLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGluZS5qcyJdLCJuYW1lcyI6WyJDb21tb25MaW5lIiwicmVxdWlyZSIsIkNvbW1lbnRUb2tlbnMiLCJXaGl0ZXNwYWNlVG9rZW5zIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGluZSIsImNvbnRlbnQiLCJydWxlcyIsImNvbmZpZ3VyYXRpb24iLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MaW5lIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGdCQUFSLENBQW5CO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLGtCQUFSLENBRHRCO0FBQUEsSUFFTUUsbUJBQW1CRixRQUFRLHFCQUFSLENBRnpCO0FBQUEsSUFHTUcsc0JBQXNCSCxRQUFRLHdCQUFSLENBSDVCO0FBQUEsSUFJTUksMEJBQTBCSixRQUFRLDRCQUFSLENBSmhDOztJQU1NSywrQjs7Ozs7Ozs7Ozs7cURBQ29DQyxPLEVBQVNDLEssRUFBT0MsYSxFQUFlO0FBQ3JFLFVBQU1DLGlNQUF5RUosK0JBQXpFLEVBQTBHQyxPQUExRyxFQUFtSEMsS0FBbkgsRUFBMEhDLGFBQTFILENBQU47O0FBRUFDLHNDQUFnQ0MsVUFBaEMsQ0FBMkNULGFBQTNDLEVBQTBERyx1QkFBMUQsRUFBbUZELG1CQUFuRixFQUF3R0QsZ0JBQXhHOztBQUVBLGFBQU9PLCtCQUFQO0FBQ0Q7Ozs7RUFQMkNWLFU7O0FBVTlDWSxPQUFPQyxPQUFQLEdBQWlCUCwrQkFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvd2hpdGVzcGFjZScpLFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jbGFzcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50UnVsZXNBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MaW5lID0gc3VwZXIuZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGluZSwgY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxpbmUuaW5pdGlhbGlzZShDb21tZW50VG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgV2hpdGVzcGFjZVRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxpbmU7XHJcbiJdfQ==