"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../../example/view"));

var _lexer = _interopRequireDefault(require("../../florence/lexer"));

var _defaultLexicalPattern = _interopRequireDefault(require("../../florence/defaultLexicalPattern"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var FlorenceView = /*#__PURE__*/function (_ExampleView) {
  _inherits(FlorenceView, _ExampleView);

  var _super = _createSuper(FlorenceView);

  function FlorenceView() {
    _classCallCheck(this, FlorenceView);

    return _super.apply(this, arguments);
  }

  _createClass(FlorenceView, [{
    key: "getTokens",
    value: function getTokens() {
      var entries = this.getEntries();
      var custom = "^(?:".concat(_defaultLexicalPattern["default"], ")");
      entries = [{
        "custom": custom
      }].concat(_toConsumableArray(entries));
      var Lexer = this.getLexer(),
          content = this.getContent(),
          lexer = Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);
      return tokens;
    }
  }, {
    key: "getLexer",
    value: function getLexer() {
      var Lexer = _lexer["default"]; ///

      return Lexer;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = "Florence lexer example";
      return title;
    }
  }, {
    key: "getInitialContent",
    value: function getInitialContent() {
      var initialContent = "";
      return initialContent;
    }
  }]);

  return FlorenceView;
}(_view["default"]);

exports["default"] = FlorenceView;

_defineProperty(FlorenceView, "defaultProperties", {
  className: "florence"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRmxvcmVuY2VWaWV3IiwiZW50cmllcyIsImdldEVudHJpZXMiLCJjdXN0b20iLCJkZWZhdWx0TGV4aWNhbFBhdHRlcm4iLCJMZXhlciIsImdldExleGVyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsZXhlciIsImZyb21FbnRyaWVzIiwidG9rZW5zIiwidG9rZW5pc2UiLCJGbG9yZW5jZUxleGVyIiwidGl0bGUiLCJpbml0aWFsQ29udGVudCIsIkV4YW1wbGVWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7O2dDQUNQO0FBQ1YsVUFBSUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBZDtBQUVBLFVBQU1DLE1BQU0saUJBQVVDLGlDQUFWLE1BQVo7QUFFQUgsTUFBQUEsT0FBTyxJQUFLO0FBQUUsa0JBQVdFO0FBQWIsT0FBTCw0QkFBK0JGLE9BQS9CLEVBQVA7QUFFQSxVQUFNSSxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFEaEI7QUFBQSxVQUVNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQlQsT0FBbEIsQ0FGZDtBQUFBLFVBR01VLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxRQUFOLENBQWVMLE9BQWYsQ0FIZjtBQUtBLGFBQU9JLE1BQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTU4sS0FBSyxHQUFHUSxpQkFBZCxDQURTLENBQ3FCOztBQUU5QixhQUFPUixLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1TLEtBQUssR0FBRyx3QkFBZDtBQUVBLGFBQU9BLEtBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxjQUFjLEdBQUcsRUFBdkI7QUFFQSxhQUFPQSxjQUFQO0FBQ0Q7Ozs7RUFoQ3VDQyxnQjs7OztnQkFBckJoQixZLHVCQWtDUTtBQUN6QmlCLEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4YW1wbGVWaWV3IGZyb20gXCIuLi8uLi9leGFtcGxlL3ZpZXdcIjtcbmltcG9ydCBGbG9yZW5jZUxleGVyIGZyb20gXCIuLi8uLi9mbG9yZW5jZS9sZXhlclwiO1xuaW1wb3J0IGRlZmF1bHRMZXhpY2FsUGF0dGVybiBmcm9tIFwiLi4vLi4vZmxvcmVuY2UvZGVmYXVsdExleGljYWxQYXR0ZXJuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3JlbmNlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0VG9rZW5zKCkge1xuICAgIGxldCBlbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzKCk7XG5cbiAgICBjb25zdCBjdXN0b20gPSBgXig/OiR7ZGVmYXVsdExleGljYWxQYXR0ZXJufSlgO1xuXG4gICAgZW50cmllcyA9IFsgeyBcImN1c3RvbVwiIDogY3VzdG9tIH0sIC4uLmVudHJpZXMgXTtcblxuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IExleGVyID0gRmxvcmVuY2VMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBcIkZsb3JlbmNlIGxleGVyIGV4YW1wbGVcIjtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gXCJcIjtcblxuICAgIHJldHVybiBpbml0aWFsQ29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmxvcmVuY2VcIlxuICB9O1xufVxuIl19