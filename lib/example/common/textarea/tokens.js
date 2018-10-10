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
    readOnly: true,
    rows: '30'
  }
});

module.exports = TokensTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS90b2tlbnMuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJUb2tlbnNUZXh0YXJlYSIsInRva2VucyIsImxpbmVOdW1iZXIiLCJwcmV2aW91c1Rva2VuIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwiZmlsZVBhdGgiLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwic2V0VG9rZW5zIiwiYmluZCIsImNsZWFyVG9rZW5zIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicmVhZE9ubHkiLCJyb3dzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsYzs7Ozs7Ozs7Ozs7OEJBQ01DLE0sRUFBUTtBQUNoQixVQUFJQyxhQUFhLENBQWpCO0FBQUEsVUFDSUMsZ0JBQWdCLElBRHBCOztBQUdBLFVBQU1DLE9BQU9ILE9BQU9JLE1BQVAsQ0FBYyxVQUFTRCxJQUFULEVBQWVFLEtBQWYsRUFBc0I7QUFDL0MsWUFBTUMsV0FBVyxJQUFqQjtBQUFBLFlBQXdCO0FBQ2xCQyxvQkFBWUYsTUFBTUcsTUFBTixDQUFhRixRQUFiLENBRGxCOztBQUdBLFlBQUlKLGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQkMsa0JBQVdGLFlBQVg7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFNUSw4QkFBOEJQLGNBQWNRLGdCQUFkLEVBQXBDOztBQUVBLGNBQUlELDJCQUFKLEVBQWlDO0FBQy9CTixvQkFBV0YsWUFBWDtBQUNEO0FBQ0Y7O0FBRURFLGdCQUFRSSxTQUFSOztBQUVBTCx3QkFBZ0JHLEtBQWhCOztBQUVBLGVBQU9GLElBQVA7QUFDRCxPQW5CWSxFQW1CVixFQW5CVSxDQUFiOztBQXFCQSxXQUFLQSxJQUFMLENBQVVBLElBQVY7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUEsT0FBTyxFQUFiOztBQUVBLFdBQUtBLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNUSxZQUFZLEtBQUtBLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFsQjtBQUFBLFVBQ01DLGNBQWMsS0FBS0EsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FEcEI7O0FBR0EsYUFBUTtBQUNORCw0QkFETTtBQUVORTtBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT2hCLGFBQWFpQixjQUFiLENBQTRCaEIsY0FBNUIsRUFBNENlLFVBQTVDLENBQVA7QUFBaUU7Ozs7RUE3QzFFaEIsWTs7QUFnRDdCa0IsT0FBT0MsTUFBUCxDQUFjbEIsY0FBZCxFQUE4QjtBQUM1Qm1CLFdBQVMsVUFEbUI7QUFFNUJDLHFCQUFtQjtBQUNqQkMsZUFBVyxRQURNO0FBRWpCQyxjQUFVLElBRk87QUFHakJDLFVBQU07QUFIVztBQUZTLENBQTlCOztBQVNBQyxPQUFPQyxPQUFQLEdBQWlCekIsY0FBakIiLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgVG9rZW5zVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IGh0bWwgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IG51bGwsICAvLy9cbiAgICAgICAgICAgIHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTChmaWxlUGF0aCk7XG5cbiAgICAgIGlmIChwcmV2aW91c1Rva2VuID09PSBudWxsKSB7XG4gICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiA9IHByZXZpb3VzVG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XG5cbiAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbjtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSwgJycpO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgaHRtbCA9ICcnO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzZXRUb2tlbnMgPSB0aGlzLnNldFRva2Vucy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyVG9rZW5zID0gdGhpcy5jbGVhclRva2Vucy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRUb2tlbnMsXG4gICAgICBjbGVhclRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhUb2tlbnNUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihUb2tlbnNUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3Rva2VucycsXG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgcm93czogJzMwJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbnNUZXh0YXJlYTtcbiJdfQ==