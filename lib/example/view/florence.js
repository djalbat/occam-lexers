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

    _defineProperty(_assertThisInitialized(_this), "initialContent", "\n  \nRule (Explosion)\n  Conclusion\n    A\n    \n  ");

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
      var content = this.getContent(),
          lexer = this.Lexer.fromEntries(entries),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb3JlbmNlLmpzIl0sIm5hbWVzIjpbIkZsb3JlbmNlVmlldyIsIkZsb3JlbmNlTGV4ZXIiLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsImN1c3RvbSIsImRlZmF1bHRMZXhpY2FsUGF0dGVybiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4ZXIiLCJMZXhlciIsImZyb21FbnRyaWVzIiwidG9rZW5zIiwidG9rZW5pc2UiLCJWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYQyxpQjs7OERBRUUsd0I7Ozs7Ozs7OztnQ0FVRTtBQUNWLFVBQUlDLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBQWQ7QUFFQSxVQUFNQyxNQUFNLGlCQUFVQyxpQ0FBVixNQUFaO0FBRUFILE1BQUFBLE9BQU8sSUFBSztBQUFFLGtCQUFXRTtBQUFiLE9BQUwsNEJBQStCRixPQUEvQixFQUFQO0FBRUEsVUFBTUksT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNNQyxLQUFLLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVCUixPQUF2QixDQURkO0FBQUEsVUFFTVMsTUFBTSxHQUFHSCxLQUFLLENBQUNJLFFBQU4sQ0FBZU4sT0FBZixDQUZmO0FBSUEsYUFBT0ssTUFBUDtBQUNEOzs7O0VBekJ1Q0UsZ0I7Ozs7Z0JBQXJCYixZLHVCQTJCUTtBQUN6QmMsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IEZsb3JlbmNlTGV4ZXIgZnJvbSBcIi4uLy4uL2Zsb3JlbmNlL2xleGVyXCI7XG5pbXBvcnQgZGVmYXVsdExleGljYWxQYXR0ZXJuIGZyb20gXCIuLi8uLi9mbG9yZW5jZS9kZWZhdWx0TGV4aWNhbFBhdHRlcm5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvcmVuY2VWaWV3IGV4dGVuZHMgVmlldyB7XG4gIExleGVyID0gRmxvcmVuY2VMZXhlcjtcblxuICBoZWFkaW5nID0gXCJGbG9yZW5jZSBsZXhlciBleGFtcGxlXCI7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBgXG4gIFxuUnVsZSAoRXhwbG9zaW9uKVxuICBDb25jbHVzaW9uXG4gICAgQVxuICAgIFxuICBgO1xuXG4gIGdldFRva2VucygpIHtcbiAgICBsZXQgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllcygpO1xuXG4gICAgY29uc3QgY3VzdG9tID0gYF4oPzoke2RlZmF1bHRMZXhpY2FsUGF0dGVybn0pYDtcblxuICAgIGVudHJpZXMgPSBbIHsgXCJjdXN0b21cIiA6IGN1c3RvbSB9LCAuLi5lbnRyaWVzIF07XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmxvcmVuY2VcIlxuICB9O1xufVxuIl19