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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TokensTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(TokensTextarea, _Textarea);

  function TokensTextarea() {
    _classCallCheck(this, TokensTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(TokensTextarea).apply(this, arguments));
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

_defineProperty(TokensTextarea, "tagName", "textarea");

_defineProperty(TokensTextarea, "defaultProperties", {
  className: "tokens",
  spellCheck: "false",
  readOnly: true,
  rows: "30"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2Vucy5qcyJdLCJuYW1lcyI6WyJUb2tlbnNUZXh0YXJlYSIsInRva2VucyIsImxpbmVOdW1iZXIiLCJwcmV2aW91c1Rva2VuIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsInNldFRva2VucyIsImJpbmQiLCJjbGVhclRva2VucyIsIlRleHRhcmVhIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Iiwicm93cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs4QkFDVEMsTSxFQUFRO0FBQ2hCLFVBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUFBLFVBQ0lDLGFBQWEsR0FBRyxJQURwQjtBQUdBLFVBQU1DLElBQUksR0FBR0gsTUFBTSxDQUFDSSxNQUFQLENBQWMsVUFBQ0QsSUFBRCxFQUFPRSxLQUFQLEVBQWlCO0FBQzFDLFlBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLEVBQWxCOztBQUVBLFlBQUlMLGFBQWEsS0FBSyxJQUF0QixFQUE0QjtBQUMxQkMsVUFBQUEsSUFBSSxjQUFPRixVQUFVLEVBQWpCLE9BQUo7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFNTywyQkFBMkIsR0FBR04sYUFBYSxDQUFDTyxnQkFBZCxFQUFwQzs7QUFFQSxjQUFJRCwyQkFBSixFQUFpQztBQUMvQkwsWUFBQUEsSUFBSSxjQUFPRixVQUFVLEVBQWpCLE9BQUo7QUFDRDtBQUNGOztBQUVERSxRQUFBQSxJQUFJLElBQUlHLFNBQVI7QUFFQUosUUFBQUEsYUFBYSxHQUFHRyxLQUFoQjtBQUVBLGVBQU9GLElBQVA7QUFDRCxPQWxCWSxFQWtCVixFQWxCVSxDQUFiO0FBb0JBLFdBQUtBLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQSxJQUFJLEdBQUcsRUFBYjtBQUVBLFdBQUtBLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNTyxTQUFTLEdBQUcsS0FBS0EsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWxCO0FBQUEsVUFDTUMsV0FBVyxHQUFHLEtBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBRHBCO0FBR0EsYUFBUTtBQUNORCxRQUFBQSxTQUFTLEVBQVRBLFNBRE07QUFFTkUsUUFBQUEsV0FBVyxFQUFYQTtBQUZNLE9BQVI7QUFJRDs7OztFQTFDeUNDLG9COzs7O2dCQUF2QmQsYyxhQTRDRixVOztnQkE1Q0VBLGMsdUJBOENRO0FBQ3pCZSxFQUFBQSxTQUFTLEVBQUUsUUFEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLE9BRmE7QUFHekJDLEVBQUFBLFFBQVEsRUFBRSxJQUhlO0FBSXpCQyxFQUFBQSxJQUFJLEVBQUU7QUFKbUIsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2Vuc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IGh0bWwgPSB0b2tlbnMucmVkdWNlKChodG1sLCB0b2tlbikgPT4ge1xuICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKCk7XG5cbiAgICAgIGlmIChwcmV2aW91c1Rva2VuID09PSBudWxsKSB7XG4gICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiA9IHByZXZpb3VzVG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XG5cbiAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbjtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSwgXCJcIik7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBjbGVhclRva2VucygpIHtcbiAgICBjb25zdCBodG1sID0gXCJcIjtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0VG9rZW5zID0gdGhpcy5zZXRUb2tlbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclRva2VucyA9IHRoaXMuY2xlYXJUb2tlbnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0VG9rZW5zLFxuICAgICAgY2xlYXJUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIHJvd3M6IFwiMzBcIlxuICB9O1xufVxuIl19