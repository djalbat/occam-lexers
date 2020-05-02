"use strict";

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

var FlorenceExampleView = /*#__PURE__*/function (_ExampleView) {
  _inherits(FlorenceExampleView, _ExampleView);

  var _super = _createSuper(FlorenceExampleView);

  function FlorenceExampleView() {
    _classCallCheck(this, FlorenceExampleView);

    return _super.apply(this, arguments);
  }

  _createClass(FlorenceExampleView, [{
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

  return FlorenceExampleView;
}(_view["default"]);

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: "florence"
  }
});
module.exports = FlorenceExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRmxvcmVuY2VFeGFtcGxlVmlldyIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY3VzdG9tIiwiZGVmYXVsdExleGljYWxQYXR0ZXJuIiwiTGV4ZXIiLCJnZXRMZXhlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInRva2VucyIsInRva2VuaXNlIiwiRmxvcmVuY2VMZXhlciIsInRpdGxlIiwiaW5pdGlhbENvbnRlbnQiLCJFeGFtcGxlVmlldyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLG1COzs7Ozs7Ozs7Ozs7O2dDQUNRO0FBQ1YsVUFBSUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBZDtBQUVBLFVBQU1DLE1BQU0saUJBQVVDLGlDQUFWLE1BQVo7QUFFQUgsTUFBQUEsT0FBTyxJQUFLO0FBQUUsa0JBQVdFO0FBQWIsT0FBTCw0QkFBK0JGLE9BQS9CLEVBQVA7QUFFQSxVQUFNSSxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFEaEI7QUFBQSxVQUVNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQlQsT0FBbEIsQ0FGZDtBQUFBLFVBR01VLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxRQUFOLENBQWVMLE9BQWYsQ0FIZjtBQUtBLGFBQU9JLE1BQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTU4sS0FBSyxHQUFHUSxpQkFBZCxDQURTLENBQ3FCOztBQUU5QixhQUFPUixLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1TLEtBQUssR0FBRyx3QkFBZDtBQUVBLGFBQU9BLEtBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxjQUFjLEdBQUcsRUFBdkI7QUFFQSxhQUFPQSxjQUFQO0FBQ0Q7Ozs7RUFoQytCQyxnQjs7QUFtQ2xDQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2xCLG1CQUFkLEVBQW1DO0FBQ2pDbUIsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRGMsQ0FBbkM7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEIsbUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGFtcGxlVmlldyBmcm9tIFwiLi4vLi4vZXhhbXBsZS92aWV3XCI7XG5pbXBvcnQgRmxvcmVuY2VMZXhlciBmcm9tIFwiLi4vLi4vZmxvcmVuY2UvbGV4ZXJcIjtcbmltcG9ydCBkZWZhdWx0TGV4aWNhbFBhdHRlcm4gZnJvbSBcIi4uLy4uL2Zsb3JlbmNlL2RlZmF1bHRMZXhpY2FsUGF0dGVyblwiO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBnZXRUb2tlbnMoKSB7XG4gICAgbGV0IGVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMoKTtcblxuICAgIGNvbnN0IGN1c3RvbSA9IGBeKD86JHtkZWZhdWx0TGV4aWNhbFBhdHRlcm59KWA7XG5cbiAgICBlbnRyaWVzID0gWyB7IFwiY3VzdG9tXCIgOiBjdXN0b20gfSwgLi4uZW50cmllcyBdO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBGbG9yZW5jZUxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gTGV4ZXI7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IFwiRmxvcmVuY2UgbGV4ZXIgZXhhbXBsZVwiO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgZ2V0SW5pdGlhbENvbnRlbnQoKSB7XG4gICAgY29uc3QgaW5pdGlhbENvbnRlbnQgPSBcIlwiO1xuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VFeGFtcGxlVmlldywge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogXCJmbG9yZW5jZVwiXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZVZpZXc7XG4iXX0=