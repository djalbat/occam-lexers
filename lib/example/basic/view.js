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

var BasicLexer = require("../../basic/lexer"),
    ExampleView = require("../../example/view");

var BasicExampleView = /*#__PURE__*/function (_ExampleView) {
  _inherits(BasicExampleView, _ExampleView);

  var _super = _createSuper(BasicExampleView);

  function BasicExampleView() {
    _classCallCheck(this, BasicExampleView);

    return _super.apply(this, arguments);
  }

  _createClass(BasicExampleView, [{
    key: "getLexer",
    value: function getLexer() {
      var Lexer = BasicLexer; ///

      return Lexer;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = "Basic lexer example";
      return title;
    }
  }, {
    key: "getInitialContent",
    value: function getInitialContent() {
      var initialContent = "1+2/3";
      return initialContent;
    }
  }]);

  return BasicExampleView;
}(ExampleView);

Object.assign(BasicExampleView, {
  defaultProperties: {
    className: "basic"
  }
});
module.exports = BasicExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsInJlcXVpcmUiLCJFeGFtcGxlVmlldyIsIkJhc2ljRXhhbXBsZVZpZXciLCJMZXhlciIsInRpdGxlIiwiaW5pdGlhbENvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxtQkFBRCxDQUExQjtBQUFBLElBQ01DLFdBQVcsR0FBR0QsT0FBTyxDQUFDLG9CQUFELENBRDNCOztJQUdNRSxnQjs7Ozs7Ozs7Ozs7OzsrQkFDTztBQUNULFVBQU1DLEtBQUssR0FBR0osVUFBZCxDQURTLENBQ2lCOztBQUUxQixhQUFPSSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLEtBQUssR0FBRyxxQkFBZDtBQUVBLGFBQU9BLEtBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxjQUFjLEdBQUcsT0FBdkI7QUFFQSxhQUFPQSxjQUFQO0FBQ0Q7Ozs7RUFqQjRCSixXOztBQW9CL0JLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxnQkFBZCxFQUFnQztBQUM5Qk0sRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRFcsQ0FBaEM7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgQmFzaWNMZXhlciA9IHJlcXVpcmUoXCIuLi8uLi9iYXNpYy9sZXhlclwiKSxcbiAgICAgIEV4YW1wbGVWaWV3ID0gcmVxdWlyZShcIi4uLy4uL2V4YW1wbGUvdmlld1wiKTtcblxuY2xhc3MgQmFzaWNFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBCYXNpY0xleGVyOyAvLy9cblxuICAgIHJldHVybiBMZXhlcjtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gXCJCYXNpYyBsZXhlciBleGFtcGxlXCI7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IFwiMSsyLzNcIjtcblxuICAgIHJldHVybiBpbml0aWFsQ29udGVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJhc2ljRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwiYmFzaWNcIlxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGVWaWV3O1xuIl19