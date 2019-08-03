'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BNFLexer = require('../bnf/lexer');

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
          customGrammarBNFLexer = new CustomGrammarBNFLexer(rules);

      return customGrammarBNFLexer;
    }
  }]);

  return CustomGrammarBNFLexer;
}(BNFLexer);

module.exports = CustomGrammarBNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyQk5GL2xleGVyLmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwicmVxdWlyZSIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJydWxlcyIsImdldFJ1bGVzIiwiY3VzdG9tR3JhbW1hckJORkxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGNBQVIsQ0FBakI7O0lBRU1DLHFCOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBTUMsV0FBV0gsU0FBU0ksV0FBVCxFQUFqQjtBQUFBLFVBQ01DLFFBQVFGLFNBQVNHLFFBQVQsRUFEZDtBQUFBLFVBRU1DLHdCQUF3QixJQUFJTCxxQkFBSixDQUEwQkcsS0FBMUIsQ0FGOUI7O0FBSUEsYUFBT0UscUJBQVA7QUFDRDs7OztFQVBpQ1AsUTs7QUFVcENRLE9BQU9DLE9BQVAsR0FBaUJQLHFCQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQk5GTGV4ZXIgPSByZXF1aXJlKCcuLi9ibmYvbGV4ZXInKTtcblxuY2xhc3MgQ3VzdG9tR3JhbW1hckJORkxleGVyIGV4dGVuZHMgQk5GTGV4ZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mTGV4ZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GTGV4ZXIgPSBuZXcgQ3VzdG9tR3JhbW1hckJORkxleGVyKHJ1bGVzKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GTGV4ZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21HcmFtbWFyQk5GTGV4ZXI7XG4iXX0=