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
            key: 'fromContent',
            value: function fromContent(content, context, rules) {
                  return _get(CustomGrammarLexicalPatternLine.__proto__ || Object.getPrototypeOf(CustomGrammarLexicalPatternLine), 'fromContent', this).call(this, CustomGrammarLexicalPatternLine, content, context, rules, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);
            }
      }]);

      return CustomGrammarLexicalPatternLine;
}(CommonLine);

module.exports = CustomGrammarLexicalPatternLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGluZS5qcyJdLCJuYW1lcyI6WyJDb21tb25MaW5lIiwicmVxdWlyZSIsIkNvbW1lbnRUb2tlbnMiLCJXaGl0ZXNwYWNlVG9rZW5zIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGluZSIsImNvbnRlbnQiLCJjb250ZXh0IiwicnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxrQkFBUixDQUR0QjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSxxQkFBUixDQUZ6QjtBQUFBLElBR01HLHNCQUFzQkgsUUFBUSx3QkFBUixDQUg1QjtBQUFBLElBSU1JLDBCQUEwQkosUUFBUSw0QkFBUixDQUpoQzs7SUFNTUssK0I7Ozs7Ozs7Ozs7O3dDQUNlQyxPLEVBQVNDLE8sRUFBU0MsSyxFQUFPO0FBQUUsbUtBQXlCSCwrQkFBekIsRUFBMERDLE9BQTFELEVBQW1FQyxPQUFuRSxFQUE0RUMsS0FBNUUsRUFBbUZQLGFBQW5GLEVBQWtHRyx1QkFBbEcsRUFBMkhELG1CQUEzSCxFQUFnSkQsZ0JBQWhKO0FBQW9LOzs7O0VBRHRLSCxVOztBQUk5Q1UsT0FBT0MsT0FBUCxHQUFpQkwsK0JBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbicpO1xyXG5cclxuY2xhc3MgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcykgeyByZXR1cm4gc3VwZXIuZnJvbUNvbnRlbnQoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGluZSwgY29udGVudCwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxpbmU7XHJcbiJdfQ==