'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BNFLexer = require('../bnf/lexer'),
    CustomGrammarBNFLine = require('../customGrammarBNF/line');

var CustomGrammarBNFLexer = function (_BNFLexer) {
  _inherits(CustomGrammarBNFLexer, _BNFLexer);

  function CustomGrammarBNFLexer() {
    _classCallCheck(this, CustomGrammarBNFLexer);

    return _possibleConstructorReturn(this, (CustomGrammarBNFLexer.__proto__ || Object.getPrototypeOf(CustomGrammarBNFLexer)).apply(this, arguments));
  }

  _createClass(CustomGrammarBNFLexer, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var bnfLexer = BNFLexer.fromNothing(),
          rules = bnfLexer.getRules(),
          Line = CustomGrammarBNFLine,
          ///
      customGrammarBNFLexer = new CustomGrammarBNFLexer(rules, Line);

      return customGrammarBNFLexer;
    }
  }]);

  return CustomGrammarBNFLexer;
}(BNFLexer);

module.exports = CustomGrammarBNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyQk5GL2xleGVyLmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwicmVxdWlyZSIsIkN1c3RvbUdyYW1tYXJCTkZMaW5lIiwiQ3VzdG9tR3JhbW1hckJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJMaW5lIiwiY3VzdG9tR3JhbW1hckJORkxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGNBQVIsQ0FBakI7QUFBQSxJQUNNQyx1QkFBdUJELFFBQVEsMEJBQVIsQ0FEN0I7O0lBR01FLHFCOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBTUMsV0FBV0osU0FBU0ssV0FBVCxFQUFqQjtBQUFBLFVBQ01DLFFBQVFGLFNBQVNHLFFBQVQsRUFEZDtBQUFBLFVBRU1DLE9BQU9OLG9CQUZiO0FBQUEsVUFFb0M7QUFDOUJPLDhCQUF3QixJQUFJTixxQkFBSixDQUEwQkcsS0FBMUIsRUFBaUNFLElBQWpDLENBSDlCOztBQUtBLGFBQU9DLHFCQUFQO0FBQ0Q7Ozs7RUFSaUNULFE7O0FBV3BDVSxPQUFPQyxPQUFQLEdBQWlCUixxQkFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBCTkZMZXhlciA9IHJlcXVpcmUoJy4uL2JuZi9sZXhlcicpLFxyXG4gICAgICBDdXN0b21HcmFtbWFyQk5GTGluZSA9IHJlcXVpcmUoJy4uL2N1c3RvbUdyYW1tYXJCTkYvbGluZScpO1xyXG5cclxuY2xhc3MgQ3VzdG9tR3JhbW1hckJORkxleGVyIGV4dGVuZHMgQk5GTGV4ZXIge1xyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcclxuICAgICAgICAgIHJ1bGVzID0gYm5mTGV4ZXIuZ2V0UnVsZXMoKSxcclxuICAgICAgICAgIExpbmUgPSBDdXN0b21HcmFtbWFyQk5GTGluZSwgIC8vL1xyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORkxleGVyID0gbmV3IEN1c3RvbUdyYW1tYXJCTkZMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hckJORkxleGVyO1xyXG4iXX0=