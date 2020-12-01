"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TokensTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(TokensTextarea, _Textarea);

  var _super = _createSuper(TokensTextarea);

  function TokensTextarea() {
    _classCallCheck(this, TokensTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(TokensTextarea, [{
    key: "setTokens",
    value: function setTokens(tokens) {
      var lineNumber = 1,
          previousToken = null;
      var html = tokens.reduce(function (html, token) {
        var tokenHTML = token.asHTML();

        if (previousToken === null) {
          html += "".concat(lineNumber++, ": ");
        } else {
          var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();

          if (previousTokenEndOfLineToken) {
            html += "".concat(lineNumber++, ": ");
          }
        }

        html += tokenHTML;
        previousToken = token;
        return html;
      }, "");
      this.html(html);
    }
  }, {
    key: "clearTokens",
    value: function clearTokens() {
      var html = "";
      this.html(html);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var setTokens = this.setTokens.bind(this),
          clearTokens = this.clearTokens.bind(this);
      return {
        setTokens: setTokens,
        clearTokens: clearTokens
      };
    }
  }]);

  return TokensTextarea;
}(_textarea["default"]);

exports["default"] = TokensTextarea;

_defineProperty(TokensTextarea, "defaultProperties", {
  className: "tokens",
  spellCheck: "false",
  readOnly: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2Vucy5qcyJdLCJuYW1lcyI6WyJUb2tlbnNUZXh0YXJlYSIsInRva2VucyIsImxpbmVOdW1iZXIiLCJwcmV2aW91c1Rva2VuIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsInNldFRva2VucyIsImJpbmQiLCJjbGVhclRva2VucyIsIlRleHRhcmVhIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7Ozs7OEJBQ1RDLE0sRUFBUTtBQUNoQixVQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFBQSxVQUNJQyxhQUFhLEdBQUcsSUFEcEI7QUFHQSxVQUFNQyxJQUFJLEdBQUdILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjLFVBQUNELElBQUQsRUFBT0UsS0FBUCxFQUFpQjtBQUMxQyxZQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixFQUFsQjs7QUFFQSxZQUFJTCxhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDMUJDLFVBQUFBLElBQUksY0FBT0YsVUFBVSxFQUFqQixPQUFKO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBTU8sMkJBQTJCLEdBQUdOLGFBQWEsQ0FBQ08sZ0JBQWQsRUFBcEM7O0FBRUEsY0FBSUQsMkJBQUosRUFBaUM7QUFDL0JMLFlBQUFBLElBQUksY0FBT0YsVUFBVSxFQUFqQixPQUFKO0FBQ0Q7QUFDRjs7QUFFREUsUUFBQUEsSUFBSSxJQUFJRyxTQUFSO0FBRUFKLFFBQUFBLGFBQWEsR0FBR0csS0FBaEI7QUFFQSxlQUFPRixJQUFQO0FBQ0QsT0FsQlksRUFrQlYsRUFsQlUsQ0FBYjtBQW9CQSxXQUFLQSxJQUFMLENBQVVBLElBQVY7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUEsSUFBSSxHQUFHLEVBQWI7QUFFQSxXQUFLQSxJQUFMLENBQVVBLElBQVY7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTU8sU0FBUyxHQUFHLEtBQUtBLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFsQjtBQUFBLFVBQ01DLFdBQVcsR0FBRyxLQUFLQSxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQURwQjtBQUdBLGFBQVE7QUFDTkQsUUFBQUEsU0FBUyxFQUFUQSxTQURNO0FBRU5FLFFBQUFBLFdBQVcsRUFBWEE7QUFGTSxPQUFSO0FBSUQ7Ozs7RUExQ3lDQyxvQjs7OztnQkFBdkJkLGMsdUJBNENRO0FBQ3pCZSxFQUFBQSxTQUFTLEVBQUUsUUFEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLE9BRmE7QUFHekJDLEVBQUFBLFFBQVEsRUFBRTtBQUhlLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbnNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIGxldCBsaW5lTnVtYmVyID0gMSxcbiAgICAgICAgcHJldmlvdXNUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xuXG4gICAgICBpZiAocHJldmlvdXNUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgICBpZiAocHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xuXG4gICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW47XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0sIFwiXCIpO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgaHRtbCA9IFwiXCI7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldFRva2VucyA9IHRoaXMuc2V0VG9rZW5zLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJUb2tlbnMgPSB0aGlzLmNsZWFyVG9rZW5zLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFRva2VucyxcbiAgICAgIGNsZWFyVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRva2Vuc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogdHJ1ZVxuICB9O1xufVxuIl19