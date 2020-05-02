'use strict';

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

var BNFLexer = require('../../bnf/lexer'),
    ExampleView = require('../../example/view');

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
      var Lexer = BNFLexer; ///

      return Lexer;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = 'BNF lexer example';
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
}(ExampleView);

Object.assign(BNFExampleView, {
  defaultProperties: {
    className: 'bnf'
  }
});
module.exports = BNFExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiQk5GTGV4ZXIiLCJyZXF1aXJlIiwiRXhhbXBsZVZpZXciLCJCTkZFeGFtcGxlVmlldyIsIkxleGVyIiwidGl0bGUiLCJpbml0aWFsQ29udGVudCIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLGlCQUFELENBQXhCO0FBQUEsSUFDTUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsb0JBQUQsQ0FEM0I7O0lBR01FLGM7Ozs7Ozs7Ozs7Ozs7K0JBQ087QUFDVCxVQUFNQyxLQUFLLEdBQUdKLFFBQWQsQ0FEUyxDQUNnQjs7QUFFekIsYUFBT0ksS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxLQUFLLEdBQUcsbUJBQWQ7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsY0FBYyw2VEFBcEI7QUFjQSxhQUFPQSxjQUFQO0FBQ0Q7Ozs7RUE3QjBCSixXOztBQWdDN0JLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxjQUFkLEVBQThCO0FBQzVCTSxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFEUyxDQUE5QjtBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJULGNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBCTkZMZXhlciA9IHJlcXVpcmUoJy4uLy4uL2JuZi9sZXhlcicpLFxuICAgICAgRXhhbXBsZVZpZXcgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlL3ZpZXcnKTtcblxuY2xhc3MgQk5GRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IExleGVyID0gQk5GTGV4ZXI7ICAvLy9cblxuICAgIHJldHVybiBMZXhlcjtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0JORiBsZXhlciBleGFtcGxlJztcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gYCAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gIHJlZ3VsYXJFeHByZXNzaW9uICAgIDo6PSAgW3JlZ3VsYXJFeHByZXNzaW9uXSA7XG5cbiAgc2lnbmlmaWNhbnRUb2tlblR5cGUgOjo9ICBbdHlwZV0gO1xuXG4gIHRlcm1pbmFsU3ltYm9sICAgICAgIDo6PSAgW3N0cmluZ0xpdGVyYWxdIDtcblxuICBlbmRPZkxpbmUgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiIDtcblxuICBlcHNpbG9uICAgICAgICAgICAgICA6Oj0gIFwizrVcIiA7XG5cbiAgd2lsZGNhcmQgICAgICAgICAgICAgOjo9ICBcIi5cIiA7YFxuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdibmYnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORkV4YW1wbGVWaWV3O1xuIl19