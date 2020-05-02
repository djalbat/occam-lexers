"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = TokensTextarea;
Object.assign(TokensTextarea, {
  tagName: "textarea",
  defaultProperties: {
    className: "tokens",
    spellCheck: "false",
    readOnly: true,
    rows: "30"
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2Vucy5qcyJdLCJuYW1lcyI6WyJUb2tlbnNUZXh0YXJlYSIsInRva2VucyIsImxpbmVOdW1iZXIiLCJwcmV2aW91c1Rva2VuIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsInNldFRva2VucyIsImJpbmQiLCJjbGVhclRva2VucyIsIlRleHRhcmVhIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Iiwicm93cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OzhCQUNUQyxNLEVBQVE7QUFDaEIsVUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQUEsVUFDSUMsYUFBYSxHQUFHLElBRHBCO0FBR0EsVUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNJLE1BQVAsQ0FBYyxVQUFTRCxJQUFULEVBQWVFLEtBQWYsRUFBc0I7QUFDL0MsWUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sRUFBbEI7O0FBRUEsWUFBSUwsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCQyxVQUFBQSxJQUFJLGNBQU9GLFVBQVUsRUFBakIsT0FBSjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQU1PLDJCQUEyQixHQUFHTixhQUFhLENBQUNPLGdCQUFkLEVBQXBDOztBQUVBLGNBQUlELDJCQUFKLEVBQWlDO0FBQy9CTCxZQUFBQSxJQUFJLGNBQU9GLFVBQVUsRUFBakIsT0FBSjtBQUNEO0FBQ0Y7O0FBRURFLFFBQUFBLElBQUksSUFBSUcsU0FBUjtBQUVBSixRQUFBQSxhQUFhLEdBQUdHLEtBQWhCO0FBRUEsZUFBT0YsSUFBUDtBQUNELE9BbEJZLEVBa0JWLEVBbEJVLENBQWI7QUFvQkEsV0FBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1BLElBQUksR0FBRyxFQUFiO0FBRUEsV0FBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1PLFNBQVMsR0FBRyxLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBQSxVQUNNQyxXQUFXLEdBQUcsS0FBS0EsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FEcEI7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLFNBQVMsRUFBVEEsU0FETTtBQUVORSxRQUFBQSxXQUFXLEVBQVhBO0FBRk0sT0FBUjtBQUlEOzs7O0VBMUN5Q0MsYzs7O0FBNkM1Q0MsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixjQUFkLEVBQThCO0FBQzVCaUIsRUFBQUEsT0FBTyxFQUFFLFVBRG1CO0FBRTVCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLFFBRE07QUFFakJDLElBQUFBLFVBQVUsRUFBRSxPQUZLO0FBR2pCQyxJQUFBQSxRQUFRLEVBQUUsSUFITztBQUlqQkMsSUFBQUEsSUFBSSxFQUFFO0FBSlc7QUFGUyxDQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJlYXN5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2Vuc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IGh0bWwgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XG4gICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcblxuICAgICAgaWYgKHByZXZpb3VzVG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9LCBcIlwiKTtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IGh0bWwgPSBcIlwiO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzZXRUb2tlbnMgPSB0aGlzLnNldFRva2Vucy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyVG9rZW5zID0gdGhpcy5jbGVhclRva2Vucy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRUb2tlbnMsXG4gICAgICBjbGVhclRva2Vuc1xuICAgIH0pO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVG9rZW5zVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogXCJ0ZXh0YXJlYVwiLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogXCJ0b2tlbnNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgcm93czogXCIzMFwiXG4gIH1cbn0pO1xuIl19