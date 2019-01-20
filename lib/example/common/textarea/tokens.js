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
    key: 'showError',
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: 'hideError',
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      var lineNumber = 1,
          previousToken = null;

      var html = tokens.reduce(function (html, token) {
        var tokenHTML = token.asHTML();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS90b2tlbnMuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJUb2tlbnNUZXh0YXJlYSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2tlbnMiLCJsaW5lTnVtYmVyIiwicHJldmlvdXNUb2tlbiIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsImFzSFRNTCIsInByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJzaG93RXJyb3IiLCJiaW5kIiwiaGlkZUVycm9yIiwic2V0VG9rZW5zIiwiY2xlYXJUb2tlbnMiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJyb3dzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsYzs7Ozs7Ozs7Ozs7Z0NBQ1E7QUFDVixXQUFLQyxRQUFMLENBQWMsT0FBZDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLQyxXQUFMLENBQWlCLE9BQWpCO0FBQ0Q7Ozs4QkFFU0MsTSxFQUFRO0FBQ2hCLFVBQUlDLGFBQWEsQ0FBakI7QUFBQSxVQUNJQyxnQkFBZ0IsSUFEcEI7O0FBR0EsVUFBTUMsT0FBT0gsT0FBT0ksTUFBUCxDQUFjLFVBQVNELElBQVQsRUFBZUUsS0FBZixFQUFzQjtBQUMvQyxZQUFNQyxZQUFZRCxNQUFNRSxNQUFOLEVBQWxCOztBQUVBLFlBQUlMLGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQkMsa0JBQVdGLFlBQVg7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFNTyw4QkFBOEJOLGNBQWNPLGdCQUFkLEVBQXBDOztBQUVBLGNBQUlELDJCQUFKLEVBQWlDO0FBQy9CTCxvQkFBV0YsWUFBWDtBQUNEO0FBQ0Y7O0FBRURFLGdCQUFRRyxTQUFSOztBQUVBSix3QkFBZ0JHLEtBQWhCOztBQUVBLGVBQU9GLElBQVA7QUFDRCxPQWxCWSxFQWtCVixFQWxCVSxDQUFiOztBQW9CQSxXQUFLQSxJQUFMLENBQVVBLElBQVY7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUEsT0FBTyxFQUFiOztBQUVBLFdBQUtBLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNTyxZQUFZLEtBQUtBLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFsQjtBQUFBLFVBQ01DLFlBQVksS0FBS0EsU0FBTCxDQUFlRCxJQUFmLENBQW9CLElBQXBCLENBRGxCO0FBQUEsVUFFTUUsWUFBWSxLQUFLQSxTQUFMLENBQWVGLElBQWYsQ0FBb0IsSUFBcEIsQ0FGbEI7QUFBQSxVQUdNRyxjQUFjLEtBQUtBLFdBQUwsQ0FBaUJILElBQWpCLENBQXNCLElBQXRCLENBSHBCOztBQUtBLGFBQVE7QUFDTkQsNEJBRE07QUFFTkUsNEJBRk07QUFHTkMsNEJBSE07QUFJTkM7QUFKTSxPQUFSO0FBTUQ7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9uQixhQUFhb0IsY0FBYixDQUE0Qm5CLGNBQTVCLEVBQTRDa0IsVUFBNUMsQ0FBUDtBQUFpRTs7OztFQXhEMUVuQixZOztBQTJEN0JxQixPQUFPQyxNQUFQLENBQWNyQixjQUFkLEVBQThCO0FBQzVCc0IsV0FBUyxVQURtQjtBQUU1QkMscUJBQW1CO0FBQ2pCQyxlQUFXLFFBRE07QUFFakJDLGdCQUFZLE9BRks7QUFHakJDLGNBQVUsSUFITztBQUlqQkMsVUFBTTtBQUpXO0FBRlMsQ0FBOUI7O0FBVUFDLE9BQU9DLE9BQVAsR0FBaUI3QixjQUFqQiIsImZpbGUiOiJ0b2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBUb2tlbnNUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIHNob3dFcnJvcigpIHtcbiAgICB0aGlzLmFkZENsYXNzKCdlcnJvcicpO1xuICB9XG5cbiAgaGlkZUVycm9yKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IGh0bWwgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XG4gICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcblxuICAgICAgaWYgKHByZXZpb3VzVG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9LCAnJyk7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBjbGVhclRva2VucygpIHtcbiAgICBjb25zdCBodG1sID0gJyc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dFcnJvciA9IHRoaXMuc2hvd0Vycm9yLmJpbmQodGhpcyksXG4gICAgICAgICAgaGlkZUVycm9yID0gdGhpcy5oaWRlRXJyb3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRUb2tlbnMgPSB0aGlzLnNldFRva2Vucy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyVG9rZW5zID0gdGhpcy5jbGVhclRva2Vucy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93RXJyb3IsXG4gICAgICBoaWRlRXJyb3IsXG4gICAgICBzZXRUb2tlbnMsXG4gICAgICBjbGVhclRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhUb2tlbnNUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihUb2tlbnNUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3Rva2VucycsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJyxcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICByb3dzOiAnMzAnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2Vuc1RleHRhcmVhO1xuIl19