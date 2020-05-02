'use strict';

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

var easy = require('easy');

var Textarea = easy.Textarea;

var TokensTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(TokensTextarea, _Textarea);

  var _super = _createSuper(TokensTextarea);

  function TokensTextarea() {
    _classCallCheck(this, TokensTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(TokensTextarea, [{
    key: "showError",
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: "hideError",
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
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
      }, '');
      this.html(html);
    }
  }, {
    key: "clearTokens",
    value: function clearTokens() {
      var html = '';
      this.html(html);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var showError = this.showError.bind(this),
          hideError = this.hideError.bind(this),
          setTokens = this.setTokens.bind(this),
          clearTokens = this.clearTokens.bind(this);
      return {
        showError: showError,
        hideError: hideError,
        setTokens: setTokens,
        clearTokens: clearTokens
      };
    }
  }]);

  return TokensTextarea;
}(Textarea);

Object.assign(TokensTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'tokens',
    spellCheck: 'false',
    readOnly: true,
    rows: '30'
  }
});
module.exports = TokensTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2Vucy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIlRleHRhcmVhIiwiVG9rZW5zVGV4dGFyZWEiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidG9rZW5zIiwibGluZU51bWJlciIsInByZXZpb3VzVG9rZW4iLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwic2hvd0Vycm9yIiwiYmluZCIsImhpZGVFcnJvciIsInNldFRva2VucyIsImNsZWFyVG9rZW5zIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Iiwicm93cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztJQUVRQyxRLEdBQWFGLEksQ0FBYkUsUTs7SUFFRkMsYzs7Ozs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFdBQUtDLFFBQUwsQ0FBYyxPQUFkO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtDLFdBQUwsQ0FBaUIsT0FBakI7QUFDRDs7OzhCQUVTQyxNLEVBQVE7QUFDaEIsVUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQUEsVUFDSUMsYUFBYSxHQUFHLElBRHBCO0FBR0EsVUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNJLE1BQVAsQ0FBYyxVQUFTRCxJQUFULEVBQWVFLEtBQWYsRUFBc0I7QUFDL0MsWUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sRUFBbEI7O0FBRUEsWUFBSUwsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCQyxVQUFBQSxJQUFJLGNBQU9GLFVBQVUsRUFBakIsT0FBSjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQU1PLDJCQUEyQixHQUFHTixhQUFhLENBQUNPLGdCQUFkLEVBQXBDOztBQUVBLGNBQUlELDJCQUFKLEVBQWlDO0FBQy9CTCxZQUFBQSxJQUFJLGNBQU9GLFVBQVUsRUFBakIsT0FBSjtBQUNEO0FBQ0Y7O0FBRURFLFFBQUFBLElBQUksSUFBSUcsU0FBUjtBQUVBSixRQUFBQSxhQUFhLEdBQUdHLEtBQWhCO0FBRUEsZUFBT0YsSUFBUDtBQUNELE9BbEJZLEVBa0JWLEVBbEJVLENBQWI7QUFvQkEsV0FBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1BLElBQUksR0FBRyxFQUFiO0FBRUEsV0FBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1PLFNBQVMsR0FBRyxLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBQSxVQUNNQyxTQUFTLEdBQUcsS0FBS0EsU0FBTCxDQUFlRCxJQUFmLENBQW9CLElBQXBCLENBRGxCO0FBQUEsVUFFTUUsU0FBUyxHQUFHLEtBQUtBLFNBQUwsQ0FBZUYsSUFBZixDQUFvQixJQUFwQixDQUZsQjtBQUFBLFVBR01HLFdBQVcsR0FBRyxLQUFLQSxXQUFMLENBQWlCSCxJQUFqQixDQUFzQixJQUF0QixDQUhwQjtBQUtBLGFBQVE7QUFDTkQsUUFBQUEsU0FBUyxFQUFUQSxTQURNO0FBRU5FLFFBQUFBLFNBQVMsRUFBVEEsU0FGTTtBQUdOQyxRQUFBQSxTQUFTLEVBQVRBLFNBSE07QUFJTkMsUUFBQUEsV0FBVyxFQUFYQTtBQUpNLE9BQVI7QUFNRDs7OztFQXREMEJsQixROztBQXlEN0JtQixNQUFNLENBQUNDLE1BQVAsQ0FBY25CLGNBQWQsRUFBOEI7QUFDNUJvQixFQUFBQSxPQUFPLEVBQUUsVUFEbUI7QUFFNUJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUUsUUFETTtBQUVqQkMsSUFBQUEsVUFBVSxFQUFFLE9BRks7QUFHakJDLElBQUFBLFFBQVEsRUFBRSxJQUhPO0FBSWpCQyxJQUFBQSxJQUFJLEVBQUU7QUFKVztBQUZTLENBQTlCO0FBVUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNCLGNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5O1xuXG5jbGFzcyBUb2tlbnNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2hvd0Vycm9yKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gIH1cblxuICBoaWRlRXJyb3IoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICBsZXQgbGluZU51bWJlciA9IDEsXG4gICAgICAgIHByZXZpb3VzVG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcbiAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xuXG4gICAgICBpZiAocHJldmlvdXNUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgICBpZiAocHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xuXG4gICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW47XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0sICcnKTtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IGh0bWwgPSAnJztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gdGhpcy5zaG93RXJyb3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBoaWRlRXJyb3IgPSB0aGlzLmhpZGVFcnJvci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldFRva2VucyA9IHRoaXMuc2V0VG9rZW5zLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJUb2tlbnMgPSB0aGlzLmNsZWFyVG9rZW5zLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dFcnJvcixcbiAgICAgIGhpZGVFcnJvcixcbiAgICAgIHNldFRva2VucyxcbiAgICAgIGNsZWFyVG9rZW5zXG4gICAgfSk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihUb2tlbnNUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3Rva2VucycsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJyxcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICByb3dzOiAnMzAnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2Vuc1RleHRhcmVhO1xuIl19