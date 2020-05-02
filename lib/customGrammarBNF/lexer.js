"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BNFLexer = require("../bnf/lexer");

var CustomGrammarBNFLexer = /*#__PURE__*/function (_BNFLexer) {
  _inherits(CustomGrammarBNFLexer, _BNFLexer);

  var _super = _createSuper(CustomGrammarBNFLexer);

  function CustomGrammarBNFLexer() {
    _classCallCheck(this, CustomGrammarBNFLexer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwicmVxdWlyZSIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJydWxlcyIsImdldFJ1bGVzIiwiY3VzdG9tR3JhbW1hckJORkxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBeEI7O0lBRU1DLHFCOzs7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksV0FBVCxFQUFqQjtBQUFBLFVBQ01DLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxRQUFULEVBRGQ7QUFBQSxVQUVNQyxxQkFBcUIsR0FBRyxJQUFJTCxxQkFBSixDQUEwQkcsS0FBMUIsQ0FGOUI7QUFJQSxhQUFPRSxxQkFBUDtBQUNEOzs7O0VBUGlDUCxROztBQVVwQ1EsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxxQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgQk5GTGV4ZXIgPSByZXF1aXJlKFwiLi4vYm5mL2xleGVyXCIpO1xuXG5jbGFzcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgZXh0ZW5kcyBCTkZMZXhlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZXMgPSBibmZMZXhlci5nZXRSdWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZMZXhlciA9IG5ldyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZMZXhlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXJCTkZMZXhlcjtcbiJdfQ==