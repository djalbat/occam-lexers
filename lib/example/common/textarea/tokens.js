'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var TokensTextarea = function (_InputElement) {
  _inherits(TokensTextarea, _InputElement);

  function TokensTextarea() {
    _classCallCheck(this, TokensTextarea);

    return _possibleConstructorReturn(this, (TokensTextarea.__proto__ || Object.getPrototypeOf(TokensTextarea)).apply(this, arguments));
  }

  _createClass(TokensTextarea, [{
    key: 'setTokens',
    value: function setTokens(tokens) {
      var lineNumber = 1,
          previousToken = null;

      var html = tokens.reduce(function (html, token) {
        var filePath = null,
            ///
        tokenHTML = token.asHTML(filePath);

        if (previousToken === null) {
          html += lineNumber++ + ': ';
        } else {
          var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();

          if (previousTokenEndOfLineToken) {
            html += lineNumber++ + ': ';
          }
        }

        html += tokenHTML;

        previousToken = token;

        return html;
      }, '');

      this.html(html);
    }
  }, {
    key: 'clearTokens',
    value: function clearTokens() {
      var html = '';

      this.html(html);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setTokens = this.setTokens.bind(this),
          clearTokens = this.clearTokens.bind(this);

      return {
        setTokens: setTokens,
        clearTokens: clearTokens
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(TokensTextarea, properties);
    }
  }]);

  return TokensTextarea;
}(InputElement);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS90b2tlbnMuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJUb2tlbnNUZXh0YXJlYSIsInRva2VucyIsImxpbmVOdW1iZXIiLCJwcmV2aW91c1Rva2VuIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwiZmlsZVBhdGgiLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwic2V0VG9rZW5zIiwiYmluZCIsImNsZWFyVG9rZW5zIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Iiwicm93cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGM7Ozs7Ozs7Ozs7OzhCQUNNQyxNLEVBQVE7QUFDaEIsVUFBSUMsYUFBYSxDQUFqQjtBQUFBLFVBQ0lDLGdCQUFnQixJQURwQjs7QUFHQSxVQUFNQyxPQUFPSCxPQUFPSSxNQUFQLENBQWMsVUFBU0QsSUFBVCxFQUFlRSxLQUFmLEVBQXNCO0FBQy9DLFlBQU1DLFdBQVcsSUFBakI7QUFBQSxZQUF3QjtBQUNsQkMsb0JBQVlGLE1BQU1HLE1BQU4sQ0FBYUYsUUFBYixDQURsQjs7QUFHQSxZQUFJSixrQkFBa0IsSUFBdEIsRUFBNEI7QUFDMUJDLGtCQUFXRixZQUFYO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBTVEsOEJBQThCUCxjQUFjUSxnQkFBZCxFQUFwQzs7QUFFQSxjQUFJRCwyQkFBSixFQUFpQztBQUMvQk4sb0JBQVdGLFlBQVg7QUFDRDtBQUNGOztBQUVERSxnQkFBUUksU0FBUjs7QUFFQUwsd0JBQWdCRyxLQUFoQjs7QUFFQSxlQUFPRixJQUFQO0FBQ0QsT0FuQlksRUFtQlYsRUFuQlUsQ0FBYjs7QUFxQkEsV0FBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1BLE9BQU8sRUFBYjs7QUFFQSxXQUFLQSxJQUFMLENBQVVBLElBQVY7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTVEsWUFBWSxLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBQSxVQUNNQyxjQUFjLEtBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBRHBCOztBQUdBLGFBQVE7QUFDTkQsNEJBRE07QUFFTkU7QUFGTSxPQUFSO0FBSUQ7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9oQixhQUFhaUIsY0FBYixDQUE0QmhCLGNBQTVCLEVBQTRDZSxVQUE1QyxDQUFQO0FBQWlFOzs7O0VBN0MxRWhCLFk7O0FBZ0Q3QmtCLE9BQU9DLE1BQVAsQ0FBY2xCLGNBQWQsRUFBOEI7QUFDNUJtQixXQUFTLFVBRG1CO0FBRTVCQyxxQkFBbUI7QUFDakJDLGVBQVcsUUFETTtBQUVqQkMsZ0JBQVksT0FGSztBQUdqQkMsY0FBVSxJQUhPO0FBSWpCQyxVQUFNO0FBSlc7QUFGUyxDQUE5Qjs7QUFVQUMsT0FBT0MsT0FBUCxHQUFpQjFCLGNBQWpCIiwiZmlsZSI6InRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFRva2Vuc1RleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIGxldCBsaW5lTnVtYmVyID0gMSxcbiAgICAgICAgcHJldmlvdXNUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBudWxsLCAgLy8vXG4gICAgICAgICAgICB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAocHJldmlvdXNUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgICBpZiAocHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xuXG4gICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW47XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0sICcnKTtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IGh0bWwgPSAnJztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0VG9rZW5zID0gdGhpcy5zZXRUb2tlbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclRva2VucyA9IHRoaXMuY2xlYXJUb2tlbnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0VG9rZW5zLFxuICAgICAgY2xlYXJUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVG9rZW5zVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oVG9rZW5zVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd0b2tlbnMnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZScsXG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgcm93czogJzMwJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbnNUZXh0YXJlYTtcbiJdfQ==