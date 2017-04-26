'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../../util');

var SignificantToken = function () {
  function SignificantToken(content, line, type, innerHTML) {
    _classCallCheck(this, SignificantToken);

    this.content = content;
    this.line = line;
    this.type = type;
    this.innerHTML = innerHTML;

    this.error = undefined; ///
  }

  _createClass(SignificantToken, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getInnerHTML',
    value: function getInnerHTML() {
      return this.innerHTML;
    }
  }, {
    key: 'getError',
    value: function getError() {
      return this.error;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var className = this.error === true ? 'error' : this.type,
          html = '<span class="' + className + '">' + this.innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'setError',
    value: function setError(error) {
      this.error = error;
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(token) {
      var tokenToReplace = this,
          successful = this.line.replaceToken(tokenToReplace, token);

      return successful;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, SignificantToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : token.getLength();
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SignificantToken;

      var clonedSignificantToken = null;

      if (startPosition !== endPosition) {
        var content = token.getContent();

        var line = token.getLine(),
            type = token.getType(),
            error = token.getError();

        content = content.substring(startPosition, endPosition);

        clonedSignificantToken = Class.fromContentLineAndType(content, line, type);

        clonedSignificantToken.setError(error);
      }

      return clonedSignificantToken;
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SignificantToken;

      var innerHTML = Class.innerHTMLFromContent(content),
          significantToken = new Class(content, line, type, innerHTML);

      return significantToken;
    }
  }, {
    key: 'innerHTMLFromContent',
    value: function innerHTMLFromContent(content) {
      var sanitisedContent = util.sanitiseContent(content),
          innerHTML = sanitisedContent; ///

      return innerHTML;
    }
  }]);

  return SignificantToken;
}();

SignificantToken.types = {
  string: 'string',
  endOfLine: 'endOfLine',
  whitespace: 'whitespace'
};

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJjbGFzc05hbWUiLCJodG1sIiwibGVuZ3RoIiwidG9rZW4iLCJ0b2tlblRvUmVwbGFjZSIsInN1Y2Nlc3NmdWwiLCJyZXBsYWNlVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImdldExlbmd0aCIsIkNsYXNzIiwiY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsImdldEVycm9yIiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRMaW5lQW5kVHlwZSIsInNldEVycm9yIiwiaW5uZXJIVE1MRnJvbUNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsInR5cGVzIiwic3RyaW5nIiwiZW5kT2ZMaW5lIiwid2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjs7SUFFTUMsZ0I7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDQyxTQUFqQyxFQUE0QztBQUFBOztBQUMxQyxTQUFLSCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxTQUFLQyxLQUFMLEdBQWFDLFNBQWIsQ0FOMEMsQ0FNbEI7QUFDekI7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtMLE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1FLFlBQWEsS0FBS0YsS0FBTCxLQUFlLElBQWhCLEdBQ0UsT0FERixHQUVJLEtBQUtGLElBRjNCO0FBQUEsVUFHTUsseUJBQXVCRCxTQUF2QixVQUFxQyxLQUFLSCxTQUExQyxZQUhOOztBQUtBLGFBQU9JLElBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLUCxPQUFMLENBQWFRLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7Ozs2QkFFUUosSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OztnQ0FFV0ssSyxFQUFPO0FBQ2pCLFVBQU1DLGlCQUFpQixJQUF2QjtBQUFBLFVBQ01DLGFBQWEsS0FBS1YsSUFBTCxDQUFVVyxZQUFWLENBQXVCRixjQUF2QixFQUF1Q0QsS0FBdkMsQ0FEbkI7O0FBR0EsYUFBT0UsVUFBUDtBQUNEOzs7MEJBRUtFLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT2YsaUJBQWlCZ0IsS0FBakIsQ0FBdUIsSUFBdkIsRUFBNkJGLGFBQTdCLEVBQTRDQyxXQUE1QyxFQUF5RGYsZ0JBQXpELENBQVA7QUFBbUY7OzswQkFFMUdVLEssRUFBcUY7QUFBQSxVQUE5RUksYUFBOEUsdUVBQTlELENBQThEO0FBQUEsVUFBM0RDLFdBQTJELHVFQUE3Q0wsTUFBTU8sU0FBTixFQUE2QztBQUFBLFVBQTFCQyxLQUEwQix1RUFBbEJsQixnQkFBa0I7O0FBQ2hHLFVBQUltQix5QkFBeUIsSUFBN0I7O0FBRUEsVUFBSUwsa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFJZCxVQUFVUyxNQUFNVSxVQUFOLEVBQWQ7O0FBRUEsWUFBTWxCLE9BQU9RLE1BQU1XLE9BQU4sRUFBYjtBQUFBLFlBQ01sQixPQUFPTyxNQUFNWSxPQUFOLEVBRGI7QUFBQSxZQUVNakIsUUFBUUssTUFBTWEsUUFBTixFQUZkOztBQUlBdEIsa0JBQVVBLFFBQVF1QixTQUFSLENBQWtCVixhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVjs7QUFFQUksaUNBQXlCRCxNQUFNTyxzQkFBTixDQUE2QnhCLE9BQTdCLEVBQXNDQyxJQUF0QyxFQUE0Q0MsSUFBNUMsQ0FBekI7O0FBRUFnQiwrQkFBdUJPLFFBQXZCLENBQWdDckIsS0FBaEM7QUFDRDs7QUFFRCxhQUFPYyxzQkFBUDtBQUNEOzs7MkNBRTZCbEIsTyxFQUFTQyxJLEVBQU1DLEksRUFBZ0M7QUFBQSxVQUExQmUsS0FBMEIsdUVBQWxCbEIsZ0JBQWtCOztBQUMzRSxVQUFNSSxZQUFZYyxNQUFNUyxvQkFBTixDQUEyQjFCLE9BQTNCLENBQWxCO0FBQUEsVUFDTTJCLG1CQUFtQixJQUFJVixLQUFKLENBQVVqQixPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsRUFBK0JDLFNBQS9CLENBRHpCOztBQUdBLGFBQU93QixnQkFBUDtBQUNEOzs7eUNBRTJCM0IsTyxFQUFTO0FBQ25DLFVBQU00QixtQkFBbUIvQixLQUFLZ0MsZUFBTCxDQUFxQjdCLE9BQXJCLENBQXpCO0FBQUEsVUFDTUcsWUFBWXlCLGdCQURsQixDQURtQyxDQUVDOztBQUVwQyxhQUFPekIsU0FBUDtBQUNEOzs7Ozs7QUFHSEosaUJBQWlCK0IsS0FBakIsR0FBeUI7QUFDdkJDLFVBQVEsUUFEZTtBQUV2QkMsYUFBVyxXQUZZO0FBR3ZCQyxjQUFZO0FBSFcsQ0FBekI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJwQyxnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcblxuICAgIHRoaXMuZXJyb3IgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXRFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcjtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gKHRoaXMuZXJyb3IgPT09IHRydWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvcicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUsXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cblxuICBzZXRFcnJvcihlcnJvcikge1xuICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgfVxuXG4gIHJlcGxhY2VXaXRoKHRva2VuKSB7XG4gICAgY29uc3QgdG9rZW5Ub1JlcGxhY2UgPSB0aGlzLFxuICAgICAgICAgIHN1Y2Nlc3NmdWwgPSB0aGlzLmxpbmUucmVwbGFjZVRva2VuKHRva2VuVG9SZXBsYWNlLCB0b2tlbik7XG4gICAgXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWw7XG4gIH1cbiAgXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBTaWduaWZpY2FudFRva2VuKSB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSB0b2tlbi5nZXRMZW5ndGgoKSwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgbGV0IGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29uc3QgbGluZSA9IHRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICAgIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBlcnJvciA9IHRva2VuLmdldEVycm9yKCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuXG4gICAgICBjbG9uZWRTaWduaWZpY2FudFRva2VuLnNldEVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IENsYXNzLmlubmVySFRNTEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGlubmVySFRNTEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gaW5uZXJIVE1MO1xuICB9XG59XG5cblNpZ25pZmljYW50VG9rZW4udHlwZXMgPSB7XG4gIHN0cmluZzogJ3N0cmluZycsXG4gIGVuZE9mTGluZTogJ2VuZE9mTGluZScsXG4gIHdoaXRlc3BhY2U6ICd3aGl0ZXNwYWNlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19