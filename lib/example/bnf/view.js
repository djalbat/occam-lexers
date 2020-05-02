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

var BNFExampleView = /*#__PURE__*/function (_ExampleView) {
  _inherits(BNFExampleView, _ExampleView);

  var _super = _createSuper(BNFExampleView);

  function BNFExampleView() {
    _classCallCheck(this, BNFExampleView);

    return _super.apply(this, arguments);
  }

  _createClass(BNFExampleView, [{
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

  return BNFExampleView;
}(_view["default"]);

exports["default"] = BNFExampleView;
Object.assign(BNFExampleView, {
  defaultProperties: {
    className: "bnf"
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiQk5GRXhhbXBsZVZpZXciLCJMZXhlciIsIkJORkxleGVyIiwidGl0bGUiLCJpbml0aWFsQ29udGVudCIsIkV4YW1wbGVWaWV3IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OytCQUNSO0FBQ1QsVUFBTUMsS0FBSyxHQUFHQyxpQkFBZCxDQURTLENBQ2dCOztBQUV6QixhQUFPRCxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1FLEtBQUssR0FBRyxtQkFBZDtBQUVBLGFBQU9BLEtBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxjQUFjLDZUQUFwQjtBQWNBLGFBQU9BLGNBQVA7QUFDRDs7OztFQTdCeUNDLGdCOzs7QUFnQzVDQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsY0FBZCxFQUE4QjtBQUM1QlEsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRFMsQ0FBOUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJORkxleGVyIGZyb20gXCIuLi8uLi9ibmYvbGV4ZXJcIjtcbmltcG9ydCBFeGFtcGxlVmlldyBmcm9tIFwiLi4vLi4vZXhhbXBsZS92aWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORkV4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBMZXhlciA9IEJORkxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gTGV4ZXI7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IFwiQk5GIGxleGVyIGV4YW1wbGVcIjtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gYCAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gIHJlZ3VsYXJFeHByZXNzaW9uICAgIDo6PSAgW3JlZ3VsYXJFeHByZXNzaW9uXSA7XG5cbiAgc2lnbmlmaWNhbnRUb2tlblR5cGUgOjo9ICBbdHlwZV0gO1xuXG4gIHRlcm1pbmFsU3ltYm9sICAgICAgIDo6PSAgW3N0cmluZ0xpdGVyYWxdIDtcblxuICBlbmRPZkxpbmUgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiIDtcblxuICBlcHNpbG9uICAgICAgICAgICAgICA6Oj0gIFwizrVcIiA7XG5cbiAgd2lsZGNhcmQgICAgICAgICAgICAgOjo9ICBcIi5cIiA7YFxuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCJcbiAgfVxufSk7XG4iXX0=