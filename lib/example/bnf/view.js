"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lexer = _interopRequireDefault(require("../../bnf/lexer"));

var _view = _interopRequireDefault(require("../../example/view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BNFView = /*#__PURE__*/function (_ExampleView) {
  _inherits(BNFView, _ExampleView);

  var _super = _createSuper(BNFView);

  function BNFView() {
    _classCallCheck(this, BNFView);

    return _super.apply(this, arguments);
  }

  _createClass(BNFView, [{
    key: "getLexer",
    value: function getLexer() {
      var Lexer = _lexer["default"]; ///

      return Lexer;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = "BNF lexer example";
      return title;
    }
  }, {
    key: "getInitialContent",
    value: function getInitialContent() {
      var initialContent = "  ruleName             ::=  [name] ;\n\n  regularExpression    ::=  [regularExpression] ;\n\n  significantTokenType ::=  [type] ;\n\n  terminalSymbol       ::=  [stringLiteral] ;\n\n  endOfLine            ::=  \"<END_OF_LINE>\" ;\n\n  epsilon              ::=  \"\u03B5\" ;\n\n  wildcard             ::=  \".\" ;";
      return initialContent;
    }
  }]);

  return BNFView;
}(_view["default"]);

exports["default"] = BNFView;

_defineProperty(BNFView, "defaultProperties", {
  className: "bnf"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiQk5GVmlldyIsIkxleGVyIiwiQk5GTGV4ZXIiLCJ0aXRsZSIsImluaXRpYWxDb250ZW50IiwiRXhhbXBsZVZpZXciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7K0JBQ1I7QUFDVCxVQUFNQyxLQUFLLEdBQUdDLGlCQUFkLENBRFMsQ0FDZ0I7O0FBRXpCLGFBQU9ELEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUUsS0FBSyxHQUFHLG1CQUFkO0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGNBQWMsNlRBQXBCO0FBY0EsYUFBT0EsY0FBUDtBQUNEOzs7O0VBN0JrQ0MsZ0I7Ozs7Z0JBQWhCTCxPLHVCQStCTztBQUN4Qk0sRUFBQUEsU0FBUyxFQUFFO0FBRGEsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQk5GTGV4ZXIgZnJvbSBcIi4uLy4uL2JuZi9sZXhlclwiO1xuaW1wb3J0IEV4YW1wbGVWaWV3IGZyb20gXCIuLi8uLi9leGFtcGxlL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBCTkZMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBcIkJORiBsZXhlciBleGFtcGxlXCI7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IGAgIHJ1bGVOYW1lICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICByZWd1bGFyRXhwcmVzc2lvbiAgICA6Oj0gIFtyZWd1bGFyRXhwcmVzc2lvbl0gO1xuXG4gIHNpZ25pZmljYW50VG9rZW5UeXBlIDo6PSAgW3R5cGVdIDtcblxuICB0ZXJtaW5hbFN5bWJvbCAgICAgICA6Oj0gIFtzdHJpbmdMaXRlcmFsXSA7XG5cbiAgZW5kT2ZMaW5lICAgICAgICAgICAgOjo9ICBcIjxFTkRfT0ZfTElORT5cIiA7XG5cbiAgZXBzaWxvbiAgICAgICAgICAgICAgOjo9ICBcIs61XCIgO1xuXG4gIHdpbGRjYXJkICAgICAgICAgICAgIDo6PSAgXCIuXCIgO2BcblxuICAgIHJldHVybiBpbml0aWFsQ29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9e1xuICAgIGNsYXNzTmFtZTogXCJibmZcIlxuICB9O1xufVxuIl19