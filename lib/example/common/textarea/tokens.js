"use strict";

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

var easy = require("easy");

var Textarea = easy.Textarea;

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
}(Textarea);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2Vucy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIlRleHRhcmVhIiwiVG9rZW5zVGV4dGFyZWEiLCJ0b2tlbnMiLCJsaW5lTnVtYmVyIiwicHJldmlvdXNUb2tlbiIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsImFzSFRNTCIsInByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJzZXRUb2tlbnMiLCJiaW5kIiwiY2xlYXJUb2tlbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJyb3dzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0lBRVFDLFEsR0FBYUYsSSxDQUFiRSxROztJQUVGQyxjOzs7Ozs7Ozs7Ozs7OzhCQUNNQyxNLEVBQVE7QUFDaEIsVUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQUEsVUFDSUMsYUFBYSxHQUFHLElBRHBCO0FBR0EsVUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNJLE1BQVAsQ0FBYyxVQUFTRCxJQUFULEVBQWVFLEtBQWYsRUFBc0I7QUFDL0MsWUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sRUFBbEI7O0FBRUEsWUFBSUwsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCQyxVQUFBQSxJQUFJLGNBQU9GLFVBQVUsRUFBakIsT0FBSjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQU1PLDJCQUEyQixHQUFHTixhQUFhLENBQUNPLGdCQUFkLEVBQXBDOztBQUVBLGNBQUlELDJCQUFKLEVBQWlDO0FBQy9CTCxZQUFBQSxJQUFJLGNBQU9GLFVBQVUsRUFBakIsT0FBSjtBQUNEO0FBQ0Y7O0FBRURFLFFBQUFBLElBQUksSUFBSUcsU0FBUjtBQUVBSixRQUFBQSxhQUFhLEdBQUdHLEtBQWhCO0FBRUEsZUFBT0YsSUFBUDtBQUNELE9BbEJZLEVBa0JWLEVBbEJVLENBQWI7QUFvQkEsV0FBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1BLElBQUksR0FBRyxFQUFiO0FBRUEsV0FBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1PLFNBQVMsR0FBRyxLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBQSxVQUNNQyxXQUFXLEdBQUcsS0FBS0EsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FEcEI7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLFNBQVMsRUFBVEEsU0FETTtBQUVORSxRQUFBQSxXQUFXLEVBQVhBO0FBRk0sT0FBUjtBQUlEOzs7O0VBMUMwQmQsUTs7QUE2QzdCZSxNQUFNLENBQUNDLE1BQVAsQ0FBY2YsY0FBZCxFQUE4QjtBQUM1QmdCLEVBQUFBLE9BQU8sRUFBRSxVQURtQjtBQUU1QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRSxRQURNO0FBRWpCQyxJQUFBQSxVQUFVLEVBQUUsT0FGSztBQUdqQkMsSUFBQUEsUUFBUSxFQUFFLElBSE87QUFJakJDLElBQUFBLElBQUksRUFBRTtBQUpXO0FBRlMsQ0FBOUI7QUFVQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkIsY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoXCJlYXN5XCIpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5O1xuXG5jbGFzcyBUb2tlbnNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIGxldCBsaW5lTnVtYmVyID0gMSxcbiAgICAgICAgcHJldmlvdXNUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xuICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKCk7XG5cbiAgICAgIGlmIChwcmV2aW91c1Rva2VuID09PSBudWxsKSB7XG4gICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiA9IHByZXZpb3VzVG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XG5cbiAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbjtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSwgXCJcIik7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBjbGVhclRva2VucygpIHtcbiAgICBjb25zdCBodG1sID0gXCJcIjtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0VG9rZW5zID0gdGhpcy5zZXRUb2tlbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclRva2VucyA9IHRoaXMuY2xlYXJUb2tlbnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0VG9rZW5zLFxuICAgICAgY2xlYXJUb2tlbnNcbiAgICB9KTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRva2Vuc1RleHRhcmVhLCB7XG4gIHRhZ05hbWU6IFwidGV4dGFyZWFcIixcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIHJvd3M6IFwiMzBcIlxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbnNUZXh0YXJlYTtcbiJdfQ==