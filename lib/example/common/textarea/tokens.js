"use strict";

var _easy = require("easy");

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
}(_easy.Textarea);

Object.assign(TokensTextarea, {
  tagName: "textarea",
  defaultProperties: {
    className: "tokens",
    spellCheck: "false",
    readOnly: true,
    rows: "30"
  }
});
module.exports = TokensTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2Vucy5qcyJdLCJuYW1lcyI6WyJUb2tlbnNUZXh0YXJlYSIsInRva2VucyIsImxpbmVOdW1iZXIiLCJwcmV2aW91c1Rva2VuIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsInNldFRva2VucyIsImJpbmQiLCJjbGVhclRva2VucyIsIlRleHRhcmVhIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Iiwicm93cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYzs7Ozs7Ozs7Ozs7Ozs4QkFDTUMsTSxFQUFRO0FBQ2hCLFVBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUFBLFVBQ0lDLGFBQWEsR0FBRyxJQURwQjtBQUdBLFVBQU1DLElBQUksR0FBR0gsTUFBTSxDQUFDSSxNQUFQLENBQWMsVUFBU0QsSUFBVCxFQUFlRSxLQUFmLEVBQXNCO0FBQy9DLFlBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLEVBQWxCOztBQUVBLFlBQUlMLGFBQWEsS0FBSyxJQUF0QixFQUE0QjtBQUMxQkMsVUFBQUEsSUFBSSxjQUFPRixVQUFVLEVBQWpCLE9BQUo7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFNTywyQkFBMkIsR0FBR04sYUFBYSxDQUFDTyxnQkFBZCxFQUFwQzs7QUFFQSxjQUFJRCwyQkFBSixFQUFpQztBQUMvQkwsWUFBQUEsSUFBSSxjQUFPRixVQUFVLEVBQWpCLE9BQUo7QUFDRDtBQUNGOztBQUVERSxRQUFBQSxJQUFJLElBQUlHLFNBQVI7QUFFQUosUUFBQUEsYUFBYSxHQUFHRyxLQUFoQjtBQUVBLGVBQU9GLElBQVA7QUFDRCxPQWxCWSxFQWtCVixFQWxCVSxDQUFiO0FBb0JBLFdBQUtBLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQSxJQUFJLEdBQUcsRUFBYjtBQUVBLFdBQUtBLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNTyxTQUFTLEdBQUcsS0FBS0EsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWxCO0FBQUEsVUFDTUMsV0FBVyxHQUFHLEtBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBRHBCO0FBR0EsYUFBUTtBQUNORCxRQUFBQSxTQUFTLEVBQVRBLFNBRE07QUFFTkUsUUFBQUEsV0FBVyxFQUFYQTtBQUZNLE9BQVI7QUFJRDs7OztFQTFDMEJDLGM7O0FBNkM3QkMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixjQUFkLEVBQThCO0FBQzVCaUIsRUFBQUEsT0FBTyxFQUFFLFVBRG1CO0FBRTVCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLFFBRE07QUFFakJDLElBQUFBLFVBQVUsRUFBRSxPQUZLO0FBR2pCQyxJQUFBQSxRQUFRLEVBQUUsSUFITztBQUlqQkMsSUFBQUEsSUFBSSxFQUFFO0FBSlc7QUFGUyxDQUE5QjtBQVVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4QixjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIFRva2Vuc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IGh0bWwgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XG4gICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcblxuICAgICAgaWYgKHByZXZpb3VzVG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9LCBcIlwiKTtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IGh0bWwgPSBcIlwiO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzZXRUb2tlbnMgPSB0aGlzLnNldFRva2Vucy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyVG9rZW5zID0gdGhpcy5jbGVhclRva2Vucy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRUb2tlbnMsXG4gICAgICBjbGVhclRva2Vuc1xuICAgIH0pO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVG9rZW5zVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogXCJ0ZXh0YXJlYVwiLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogXCJ0b2tlbnNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgcm93czogXCIzMFwiXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2Vuc1RleHRhcmVhO1xuIl19