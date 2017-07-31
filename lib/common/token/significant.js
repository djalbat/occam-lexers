'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tokenUtil = require('../../util/token');

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
    key: 'isSignificant',
    value: function isSignificant() {
      var significant = true;

      return significant;
    }
  }, {
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
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(SignificantToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SignificantToken;
      var token = arguments[1];
      var startPosition = arguments[2];
      var endPosition = arguments[3];

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
    value: function fromContentLineAndType() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SignificantToken;
      var content = arguments[1];
      var line = arguments[2];
      var type = arguments[3];

      var innerHTML = Class.innerHTMLFromContent(content),
          significantToken = new Class(content, line, type, innerHTML);

      return significantToken;
    }
  }, {
    key: 'innerHTMLFromContent',
    value: function innerHTMLFromContent(content) {
      var sanitisedContent = tokenUtil.sanitiseContent(content),
          innerHTML = sanitisedContent; ///

      return innerHTML;
    }
  }]);

  return SignificantToken;
}();

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidG9rZW5VdGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwibGluZSIsInR5cGUiLCJpbm5lckhUTUwiLCJlcnJvciIsInVuZGVmaW5lZCIsInNpZ25pZmljYW50IiwiY2xhc3NOYW1lIiwiaHRtbCIsImxlbmd0aCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiQ2xhc3MiLCJ0b2tlbiIsImNsb25lZFNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwiZ2V0TGluZSIsImdldFR5cGUiLCJnZXRFcnJvciIsInN1YnN0cmluZyIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJzZXRFcnJvciIsImlubmVySFRNTEZyb21Db250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInNhbml0aXNlZENvbnRlbnQiLCJzYW5pdGlzZUNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjs7SUFFTUMsZ0I7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDQyxTQUFqQyxFQUE0QztBQUFBOztBQUMxQyxTQUFLSCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxTQUFLQyxLQUFMLEdBQWFDLFNBQWIsQ0FOMEMsQ0FNbEI7QUFDekI7Ozs7b0NBRWU7QUFDZCxVQUFNQyxjQUFjLElBQXBCOztBQUVBLGFBQU9BLFdBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLTixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFNRyxZQUFhLEtBQUtILEtBQUwsS0FBZSxJQUFoQixHQUNFLE9BREYsR0FFSSxLQUFLRixJQUYzQjtBQUFBLFVBR01NLHlCQUF1QkQsU0FBdkIsVUFBcUMsS0FBS0osU0FBMUMsWUFITjs7QUFLQSxhQUFPSyxJQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS1IsT0FBTCxDQUFhUyxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7NkJBRVFMLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7MEJBRUtNLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1osaUJBQWlCYSxLQUFqQixDQUF1QmIsZ0JBQXZCLEVBQXlDLElBQXpDLEVBQStDVyxhQUEvQyxFQUE4REMsV0FBOUQsQ0FBUDtBQUFtRjs7OzRCQUU3QztBQUFBLFVBQTdERSxLQUE2RCx1RUFBckRkLGdCQUFxRDtBQUFBLFVBQW5DZSxLQUFtQztBQUFBLFVBQTVCSixhQUE0QjtBQUFBLFVBQWJDLFdBQWE7O0FBQ3hFLFVBQUlJLHlCQUF5QixJQUE3Qjs7QUFFQSxVQUFJTCxrQkFBa0JDLFdBQXRCLEVBQW1DO0FBQ2pDLFlBQUlYLFVBQVVjLE1BQU1FLFVBQU4sRUFBZDs7QUFFQSxZQUFNZixPQUFPYSxNQUFNRyxPQUFOLEVBQWI7QUFBQSxZQUNNZixPQUFPWSxNQUFNSSxPQUFOLEVBRGI7QUFBQSxZQUVNZCxRQUFRVSxNQUFNSyxRQUFOLEVBRmQ7O0FBSUFuQixrQkFBVUEsUUFBUW9CLFNBQVIsQ0FBa0JWLGFBQWxCLEVBQWlDQyxXQUFqQyxDQUFWOztBQUVBSSxpQ0FBeUJGLE1BQU1RLHNCQUFOLENBQTZCckIsT0FBN0IsRUFBc0NDLElBQXRDLEVBQTRDQyxJQUE1QyxDQUF6Qjs7QUFFQWEsK0JBQXVCTyxRQUF2QixDQUFnQ2xCLEtBQWhDO0FBQ0Q7O0FBRUQsYUFBT1csc0JBQVA7QUFDRDs7OzZDQUU0RTtBQUFBLFVBQS9DRixLQUErQyx1RUFBdkNkLGdCQUF1QztBQUFBLFVBQXJCQyxPQUFxQjtBQUFBLFVBQVpDLElBQVk7QUFBQSxVQUFOQyxJQUFNOztBQUMzRSxVQUFNQyxZQUFZVSxNQUFNVSxvQkFBTixDQUEyQnZCLE9BQTNCLENBQWxCO0FBQUEsVUFDTXdCLG1CQUFtQixJQUFJWCxLQUFKLENBQVViLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixFQUErQkMsU0FBL0IsQ0FEekI7O0FBR0EsYUFBT3FCLGdCQUFQO0FBQ0Q7Ozt5Q0FFMkJ4QixPLEVBQVM7QUFDbkMsVUFBTXlCLG1CQUFtQjVCLFVBQVU2QixlQUFWLENBQTBCMUIsT0FBMUIsQ0FBekI7QUFBQSxVQUNNRyxZQUFZc0IsZ0JBRGxCLENBRG1DLENBRUM7O0FBRXBDLGFBQU90QixTQUFQO0FBQ0Q7Ozs7OztBQUdId0IsT0FBT0MsT0FBUCxHQUFpQjdCLGdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdG9rZW5VdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC90b2tlbicpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG5cbiAgICB0aGlzLmVycm9yID0gdW5kZWZpbmVkOyAvLy9cbiAgfVxuICBcbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudCA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHNpZ25pZmljYW50O1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXRFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcjtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gKHRoaXMuZXJyb3IgPT09IHRydWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvcicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUsXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cblxuICBzZXRFcnJvcihlcnJvcikge1xuICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKFNpZ25pZmljYW50VG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgbGV0IGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29uc3QgbGluZSA9IHRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICAgIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBlcnJvciA9IHRva2VuLmdldEVycm9yKCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuXG4gICAgICBjbG9uZWRTaWduaWZpY2FudFRva2VuLnNldEVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCwgbGluZSwgdHlwZSkge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IENsYXNzLmlubmVySFRNTEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGlubmVySFRNTEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdG9rZW5VdGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBpbm5lckhUTUw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19