'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('../bnf/entries'),
    CommonLexer = require('../common/lexer');

var CustomGrammarBNFLexer = function (_CommonLexer) {
  _inherits(CustomGrammarBNFLexer, _CommonLexer);

  function CustomGrammarBNFLexer() {
    _classCallCheck(this, CustomGrammarBNFLexer);

    return _possibleConstructorReturn(this, (CustomGrammarBNFLexer.__proto__ || Object.getPrototypeOf(CustomGrammarBNFLexer)).apply(this, arguments));
  }

  _createClass(CustomGrammarBNFLexer, [{
    key: 'tokeniseComments',
    value: function tokeniseComments(tokensOrContents, inComment) {
      return inComment;
    }
  }, {
    key: 'reTokeniseMiddleOfCommentTokens',
    value: function reTokeniseMiddleOfCommentTokens(tokensOrContents) {}
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(CustomGrammarBNFLexer);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(CustomGrammarBNFLexer, entries);
    }
  }]);

  return CustomGrammarBNFLexer;
}(CommonLexer);

Object.assign(CustomGrammarBNFLexer, {
  entries: entries
});

module.exports = CustomGrammarBNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyQk5GL2xleGVyLmpzIl0sIm5hbWVzIjpbImVudHJpZXMiLCJyZXF1aXJlIiwiQ29tbW9uTGV4ZXIiLCJDdXN0b21HcmFtbWFyQk5GTGV4ZXIiLCJ0b2tlbnNPckNvbnRlbnRzIiwiaW5Db21tZW50IiwiZnJvbU5vdGhpbmciLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxnQkFBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7O0lBR01FLHFCOzs7Ozs7Ozs7OztxQ0FDYUMsZ0IsRUFBa0JDLFMsRUFBVztBQUFFLGFBQU9BLFNBQVA7QUFBbUI7OztvREFFbkNELGdCLEVBQWtCLENBQUU7OztrQ0FFL0I7QUFBRSxhQUFPRixZQUFZSSxXQUFaLENBQXdCSCxxQkFBeEIsQ0FBUDtBQUF3RDs7O2dDQUU1REgsTyxFQUFTO0FBQUUsYUFBT0UsWUFBWUssV0FBWixDQUF3QkoscUJBQXhCLEVBQStDSCxPQUEvQyxDQUFQO0FBQWlFOzs7O0VBUDdERSxXOztBQVVwQ00sT0FBT0MsTUFBUCxDQUFjTixxQkFBZCxFQUFxQztBQUNuQ0g7QUFEbUMsQ0FBckM7O0FBSUFVLE9BQU9DLE9BQVAsR0FBaUJSLHFCQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuLi9ibmYvZW50cmllcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgQ3VzdG9tR3JhbW1hckJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2VuaXNlQ29tbWVudHModG9rZW5zT3JDb250ZW50cywgaW5Db21tZW50KSB7IHJldHVybiBpbkNvbW1lbnQ7IH1cclxuXHJcbiAgcmVUb2tlbmlzZU1pZGRsZU9mQ29tbWVudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhDdXN0b21HcmFtbWFyQk5GTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhDdXN0b21HcmFtbWFyQk5GTGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQ3VzdG9tR3JhbW1hckJORkxleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hckJORkxleGVyO1xyXG4iXX0=