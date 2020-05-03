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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FlorenceView = /*#__PURE__*/function (_ExampleView) {
  _inherits(FlorenceView, _ExampleView);

  function FlorenceView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FlorenceView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FlorenceView)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRmxvcmVuY2VWaWV3IiwiRmxvcmVuY2VMZXhlciIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY3VzdG9tIiwiZGVmYXVsdExleGljYWxQYXR0ZXJuIiwiTGV4ZXIiLCJnZXRMZXhlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInRva2VucyIsInRva2VuaXNlIiwiRXhhbXBsZVZpZXciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYQyxpQjs7OERBRUUsd0I7O3FFQUVPLEU7Ozs7Ozs7Z0NBRUw7QUFDVixVQUFJQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFkO0FBRUEsVUFBTUMsTUFBTSxpQkFBVUMsaUNBQVYsTUFBWjtBQUVBSCxNQUFBQSxPQUFPLElBQUs7QUFBRSxrQkFBV0U7QUFBYixPQUFMLDRCQUErQkYsT0FBL0IsRUFBUDtBQUVBLFVBQU1JLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQURoQjtBQUFBLFVBRU1DLEtBQUssR0FBR0osS0FBSyxDQUFDSyxXQUFOLENBQWtCVCxPQUFsQixDQUZkO0FBQUEsVUFHTVUsTUFBTSxHQUFHRixLQUFLLENBQUNHLFFBQU4sQ0FBZUwsT0FBZixDQUhmO0FBS0EsYUFBT0ksTUFBUDtBQUNEOzs7O0VBcEJ1Q0UsZ0I7Ozs7Z0JBQXJCZCxZLHVCQXNCUTtBQUN6QmUsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhhbXBsZVZpZXcgZnJvbSBcIi4uLy4uL2V4YW1wbGUvdmlld1wiO1xuaW1wb3J0IEZsb3JlbmNlTGV4ZXIgZnJvbSBcIi4uLy4uL2Zsb3JlbmNlL2xleGVyXCI7XG5pbXBvcnQgZGVmYXVsdExleGljYWxQYXR0ZXJuIGZyb20gXCIuLi8uLi9mbG9yZW5jZS9kZWZhdWx0TGV4aWNhbFBhdHRlcm5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvcmVuY2VWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBMZXhlciA9IEZsb3JlbmNlTGV4ZXI7XG5cbiAgaGVhZGluZyA9IFwiRmxvcmVuY2UgbGV4ZXIgZXhhbXBsZVwiO1xuXG4gIGluaXRpYWxDb250ZW50ID0gXCJcIjtcblxuICBnZXRUb2tlbnMoKSB7XG4gICAgbGV0IGVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMoKTtcblxuICAgIGNvbnN0IGN1c3RvbSA9IGBeKD86JHtkZWZhdWx0TGV4aWNhbFBhdHRlcm59KWA7XG5cbiAgICBlbnRyaWVzID0gWyB7IFwiY3VzdG9tXCIgOiBjdXN0b20gfSwgLi4uZW50cmllcyBdO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmbG9yZW5jZVwiXG4gIH07XG59XG4iXX0=