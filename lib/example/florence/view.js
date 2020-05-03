"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

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

var FlorenceView = /*#__PURE__*/function (_View) {
  _inherits(FlorenceView, _View);

  var _super = _createSuper(FlorenceView);

  function FlorenceView() {
    var _this;

    _classCallCheck(this, FlorenceView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "Lexer", _lexer["default"]);

    _defineProperty(_assertThisInitialized(_this), "heading", "Florence lexer example");

    _defineProperty(_assertThisInitialized(_this), "initialContent", "");

    return _this;
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
  }]);

  return FlorenceView;
}(_view["default"]);

exports["default"] = FlorenceView;

_defineProperty(FlorenceView, "defaultProperties", {
  className: "florence"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRmxvcmVuY2VWaWV3IiwiRmxvcmVuY2VMZXhlciIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY3VzdG9tIiwiZGVmYXVsdExleGljYWxQYXR0ZXJuIiwiTGV4ZXIiLCJnZXRMZXhlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInRva2VucyIsInRva2VuaXNlIiwiVmlldyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDWEMsaUI7OzhEQUVFLHdCOztxRUFFTyxFOzs7Ozs7O2dDQUVMO0FBQ1YsVUFBSUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBZDtBQUVBLFVBQU1DLE1BQU0saUJBQVVDLGlDQUFWLE1BQVo7QUFFQUgsTUFBQUEsT0FBTyxJQUFLO0FBQUUsa0JBQVdFO0FBQWIsT0FBTCw0QkFBK0JGLE9BQS9CLEVBQVA7QUFFQSxVQUFNSSxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFEaEI7QUFBQSxVQUVNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQlQsT0FBbEIsQ0FGZDtBQUFBLFVBR01VLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxRQUFOLENBQWVMLE9BQWYsQ0FIZjtBQUtBLGFBQU9JLE1BQVA7QUFDRDs7OztFQXBCdUNFLGdCOzs7O2dCQUFyQmQsWSx1QkFzQlE7QUFDekJlLEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCBGbG9yZW5jZUxleGVyIGZyb20gXCIuLi8uLi9mbG9yZW5jZS9sZXhlclwiO1xuaW1wb3J0IGRlZmF1bHRMZXhpY2FsUGF0dGVybiBmcm9tIFwiLi4vLi4vZmxvcmVuY2UvZGVmYXVsdExleGljYWxQYXR0ZXJuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3JlbmNlVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IEZsb3JlbmNlTGV4ZXI7XG5cbiAgaGVhZGluZyA9IFwiRmxvcmVuY2UgbGV4ZXIgZXhhbXBsZVwiO1xuXG4gIGluaXRpYWxDb250ZW50ID0gXCJcIjtcblxuICBnZXRUb2tlbnMoKSB7XG4gICAgbGV0IGVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMoKTtcblxuICAgIGNvbnN0IGN1c3RvbSA9IGBeKD86JHtkZWZhdWx0TGV4aWNhbFBhdHRlcm59KWA7XG5cbiAgICBlbnRyaWVzID0gWyB7IFwiY3VzdG9tXCIgOiBjdXN0b20gfSwgLi4uZW50cmllcyBdO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmbG9yZW5jZVwiXG4gIH07XG59XG4iXX0=