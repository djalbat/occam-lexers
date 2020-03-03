'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BNFLexer = require('../bnf/lexer');

var CustomGrammarBNFLexer = /*#__PURE__*/function (_BNFLexer) {
  _inherits(CustomGrammarBNFLexer, _BNFLexer);

  function CustomGrammarBNFLexer() {
    _classCallCheck(this, CustomGrammarBNFLexer);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomGrammarBNFLexer).apply(this, arguments));
  }

  _createClass(CustomGrammarBNFLexer, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      var bnfLexer = BNFLexer.fromNothing(),
          rules = bnfLexer.getRules(),
          customGrammarBNFLexer = new CustomGrammarBNFLexer(rules);
      return customGrammarBNFLexer;
    }
  }]);

  return CustomGrammarBNFLexer;
}(BNFLexer);

module.exports = CustomGrammarBNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwicmVxdWlyZSIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJydWxlcyIsImdldFJ1bGVzIiwiY3VzdG9tR3JhbW1hckJORkxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF4Qjs7SUFFTUMscUI7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksV0FBVCxFQUFqQjtBQUFBLFVBQ01DLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxRQUFULEVBRGQ7QUFBQSxVQUVNQyxxQkFBcUIsR0FBRyxJQUFJTCxxQkFBSixDQUEwQkcsS0FBMUIsQ0FGOUI7QUFJQSxhQUFPRSxxQkFBUDtBQUNEOzs7O0VBUGlDUCxROztBQVVwQ1EsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxxQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEJORkxleGVyID0gcmVxdWlyZSgnLi4vYm5mL2xleGVyJyk7XG5cbmNsYXNzIEN1c3RvbUdyYW1tYXJCTkZMZXhlciBleHRlbmRzIEJORkxleGVyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlcyA9IGJuZkxleGVyLmdldFJ1bGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORkxleGVyID0gbmV3IEN1c3RvbUdyYW1tYXJCTkZMZXhlcihydWxlcyk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkxleGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hckJORkxleGVyO1xuIl19