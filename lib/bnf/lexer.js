"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entries = _interopRequireDefault(require("./entries"));

var _lexer = _interopRequireDefault(require("../common/lexer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BNFLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  var _super = _createSuper(BNFLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _super.apply(this, arguments);
  }

  _createClass(BNFLexer, [{
    key: "matchBrokenComment",
    value: function matchBrokenComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchSingleLineComment",
    value: function matchSingleLineComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchMultiLineCommentInComment",
    value: function matchMultiLineCommentInComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchMultiLineCommentNotInComment",
    value: function matchMultiLineCommentNotInComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchSinglyQuotedStringLiteral",
    value: function matchSinglyQuotedStringLiteral(content) {
      return null;
    }
  }, {
    key: "tokensFromBNF",
    value: function tokensFromBNF(bnf) {
      var content = bnf,
          ///
      tokens = _get(_getPrototypeOf(BNFLexer.prototype), "tokenise", this).call(this, content);

      return tokens;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      return _lexer["default"].fromNothing(BNFLexer);
    }
  }, {
    key: "fromEntries",
    value: function fromEntries(entries) {
      return _lexer["default"].fromEntries(BNFLexer, entries);
    }
  }]);

  return BNFLexer;
}(_lexer["default"]);

exports["default"] = BNFLexer;

_defineProperty(BNFLexer, "entries", _entries["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwiY29udGVudCIsImluQ29tbWVudCIsImJuZiIsInRva2VucyIsIkNvbW1vbkxleGVyIiwiZnJvbU5vdGhpbmciLCJlbnRyaWVzIiwiZnJvbUVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7O3VDQUNBQyxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRWhDRCxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7bURBRTVCRCxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7c0RBRWpDRCxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7bURBRXZDRCxPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2tDQUUxQ0UsRyxFQUFLO0FBQ2pCLFVBQU1GLE9BQU8sR0FBR0UsR0FBaEI7QUFBQSxVQUFzQjtBQUNoQkMsTUFBQUEsTUFBTSwwRUFBa0JILE9BQWxCLENBRFo7O0FBR0EsYUFBT0csTUFBUDtBQUNEOzs7a0NBSW9CO0FBQUUsYUFBT0Msa0JBQVlDLFdBQVosQ0FBd0JOLFFBQXhCLENBQVA7QUFBMkM7OztnQ0FFL0NPLE8sRUFBUztBQUFFLGFBQU9GLGtCQUFZRyxXQUFaLENBQXdCUixRQUF4QixFQUFrQ08sT0FBbEMsQ0FBUDtBQUFvRDs7OztFQXRCOUNGLGlCOzs7O2dCQUFqQkwsUSxhQWtCRk8sbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcclxuaW1wb3J0IENvbW1vbkxleGVyIGZyb20gXCIuLi9jb21tb24vbGV4ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIHRva2Vuc0Zyb21CTkYoYm5mKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYm5mLCAgLy8vXHJcbiAgICAgICAgICB0b2tlbnMgPSBzdXBlci50b2tlbmlzZShjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhCTkZMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEJORkxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiJdfQ==