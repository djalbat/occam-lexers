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

exports["default"] = FlorenceExampleView;
Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: "florence"
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRmxvcmVuY2VFeGFtcGxlVmlldyIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY3VzdG9tIiwiZGVmYXVsdExleGljYWxQYXR0ZXJuIiwiTGV4ZXIiLCJnZXRMZXhlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInRva2VucyIsInRva2VuaXNlIiwiRmxvcmVuY2VMZXhlciIsInRpdGxlIiwiaW5pdGlhbENvbnRlbnQiLCJFeGFtcGxlVmlldyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7Z0NBQ1A7QUFDVixVQUFJQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFkO0FBRUEsVUFBTUMsTUFBTSxpQkFBVUMsaUNBQVYsTUFBWjtBQUVBSCxNQUFBQSxPQUFPLElBQUs7QUFBRSxrQkFBV0U7QUFBYixPQUFMLDRCQUErQkYsT0FBL0IsRUFBUDtBQUVBLFVBQU1JLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQURoQjtBQUFBLFVBRU1DLEtBQUssR0FBR0osS0FBSyxDQUFDSyxXQUFOLENBQWtCVCxPQUFsQixDQUZkO0FBQUEsVUFHTVUsTUFBTSxHQUFHRixLQUFLLENBQUNHLFFBQU4sQ0FBZUwsT0FBZixDQUhmO0FBS0EsYUFBT0ksTUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNTixLQUFLLEdBQUdRLGlCQUFkLENBRFMsQ0FDcUI7O0FBRTlCLGFBQU9SLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVMsS0FBSyxHQUFHLHdCQUFkO0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUVBLGFBQU9BLGNBQVA7QUFDRDs7OztFQWhDOENDLGdCOzs7QUFtQ2pEQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2xCLG1CQUFkLEVBQW1DO0FBQ2pDbUIsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRGMsQ0FBbkMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4YW1wbGVWaWV3IGZyb20gXCIuLi8uLi9leGFtcGxlL3ZpZXdcIjtcbmltcG9ydCBGbG9yZW5jZUxleGVyIGZyb20gXCIuLi8uLi9mbG9yZW5jZS9sZXhlclwiO1xuaW1wb3J0IGRlZmF1bHRMZXhpY2FsUGF0dGVybiBmcm9tIFwiLi4vLi4vZmxvcmVuY2UvZGVmYXVsdExleGljYWxQYXR0ZXJuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3JlbmNlRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldFRva2VucygpIHtcbiAgICBsZXQgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllcygpO1xuXG4gICAgY29uc3QgY3VzdG9tID0gYF4oPzoke2RlZmF1bHRMZXhpY2FsUGF0dGVybn0pYDtcblxuICAgIGVudHJpZXMgPSBbIHsgXCJjdXN0b21cIiA6IGN1c3RvbSB9LCAuLi5lbnRyaWVzIF07XG5cbiAgICBjb25zdCBMZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBMZXhlciA9IEZsb3JlbmNlTGV4ZXI7ICAvLy9cblxuICAgIHJldHVybiBMZXhlcjtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gXCJGbG9yZW5jZSBsZXhlciBleGFtcGxlXCI7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IFwiXCI7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZUV4YW1wbGVWaWV3LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiBcImZsb3JlbmNlXCJcbiAgfVxufSk7XG4iXX0=