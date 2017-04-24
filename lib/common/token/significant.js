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
        var line = token.getLine(),
            type = token.getType();

        var content = token.getContent();

        content = content.substring(startPosition, endPosition);

        clonedSignificantToken = Class.fromContentLineAndType(content, line, type);
      }

      return clonedSignificantToken;
    }
  }, {
    key: 'fromSignificantToken',
    value: function fromSignificantToken(significantToken) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SignificantToken;

      var content = significantToken.getContent(),
          line = significantToken.getLine(),
          type = significantToken.getType();

      significantToken = Class.fromContentLineAndType(content, line, type);

      return significantToken;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJjbGFzc05hbWUiLCJodG1sIiwibGVuZ3RoIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJ0b2tlbiIsImdldExlbmd0aCIsIkNsYXNzIiwiY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiIsImdldExpbmUiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsInN1YnN0cmluZyIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJzaWduaWZpY2FudFRva2VuIiwiaW5uZXJIVE1MRnJvbUNvbnRlbnQiLCJzYW5pdGlzZWRDb250ZW50Iiwic2FuaXRpc2VDb250ZW50IiwidHlwZXMiLCJzdHJpbmciLCJlbmRPZkxpbmUiLCJ3aGl0ZXNwYWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsWUFBUixDQUFiOztJQUVNQyxnQjtBQUNKLDRCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQUE7O0FBQzFDLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBLFNBQUtDLEtBQUwsR0FBYUMsU0FBYixDQU4wQyxDQU1sQjtBQUN6Qjs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0wsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFNRyxZQUFhLEtBQUtGLEtBQUwsS0FBZSxJQUFoQixHQUNFLE9BREYsR0FFSSxLQUFLRixJQUYzQjtBQUFBLFVBR01LLHlCQUF1QkQsU0FBdkIsVUFBcUMsS0FBS0gsU0FBMUMsWUFITjs7QUFLQSxhQUFPSSxJQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS1AsT0FBTCxDQUFhUSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7NkJBRVFKLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7MEJBRUtLLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1gsaUJBQWlCWSxLQUFqQixDQUF1QixJQUF2QixFQUE2QkYsYUFBN0IsRUFBNENDLFdBQTVDLEVBQXlEWCxnQkFBekQsQ0FBUDtBQUFtRjs7OzBCQUUxR2EsSyxFQUFxRjtBQUFBLFVBQTlFSCxhQUE4RSx1RUFBOUQsQ0FBOEQ7QUFBQSxVQUEzREMsV0FBMkQsdUVBQTdDRSxNQUFNQyxTQUFOLEVBQTZDO0FBQUEsVUFBMUJDLEtBQTBCLHVFQUFsQmYsZ0JBQWtCOztBQUNoRyxVQUFJZ0IseUJBQXlCLElBQTdCOztBQUVBLFVBQUlOLGtCQUFrQkMsV0FBdEIsRUFBbUM7QUFDakMsWUFBTVQsT0FBT1csTUFBTUksT0FBTixFQUFiO0FBQUEsWUFDTWQsT0FBT1UsTUFBTUssT0FBTixFQURiOztBQUdBLFlBQUlqQixVQUFVWSxNQUFNTSxVQUFOLEVBQWQ7O0FBRUFsQixrQkFBVUEsUUFBUW1CLFNBQVIsQ0FBa0JWLGFBQWxCLEVBQWlDQyxXQUFqQyxDQUFWOztBQUVBSyxpQ0FBeUJELE1BQU1NLHNCQUFOLENBQTZCcEIsT0FBN0IsRUFBc0NDLElBQXRDLEVBQTRDQyxJQUE1QyxDQUF6QjtBQUNEOztBQUVELGFBQU9hLHNCQUFQO0FBQ0Q7Ozt5Q0FFMkJNLGdCLEVBQTRDO0FBQUEsVUFBMUJQLEtBQTBCLHVFQUFsQmYsZ0JBQWtCOztBQUN0RSxVQUFNQyxVQUFVcUIsaUJBQWlCSCxVQUFqQixFQUFoQjtBQUFBLFVBQ01qQixPQUFPb0IsaUJBQWlCTCxPQUFqQixFQURiO0FBQUEsVUFFTWQsT0FBT21CLGlCQUFpQkosT0FBakIsRUFGYjs7QUFJQUkseUJBQW1CUCxNQUFNTSxzQkFBTixDQUE2QnBCLE9BQTdCLEVBQXNDQyxJQUF0QyxFQUE0Q0MsSUFBNUMsQ0FBbkI7O0FBRUEsYUFBT21CLGdCQUFQO0FBQ0Q7OzsyQ0FFNkJyQixPLEVBQVNDLEksRUFBTUMsSSxFQUFnQztBQUFBLFVBQTFCWSxLQUEwQix1RUFBbEJmLGdCQUFrQjs7QUFDM0UsVUFBTUksWUFBWVcsTUFBTVEsb0JBQU4sQ0FBMkJ0QixPQUEzQixDQUFsQjtBQUFBLFVBQ01xQixtQkFBbUIsSUFBSVAsS0FBSixDQUFVZCxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsRUFBK0JDLFNBQS9CLENBRHpCOztBQUdBLGFBQU9rQixnQkFBUDtBQUNEOzs7eUNBRTJCckIsTyxFQUFTO0FBQ25DLFVBQU11QixtQkFBbUIxQixLQUFLMkIsZUFBTCxDQUFxQnhCLE9BQXJCLENBQXpCO0FBQUEsVUFDTUcsWUFBWW9CLGdCQURsQixDQURtQyxDQUVDOztBQUVwQyxhQUFPcEIsU0FBUDtBQUNEOzs7Ozs7QUFHSEosaUJBQWlCMEIsS0FBakIsR0FBeUI7QUFDdkJDLFVBQVEsUUFEZTtBQUV2QkMsYUFBVyxXQUZZO0FBR3ZCQyxjQUFZO0FBSFcsQ0FBekI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUIvQixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcblxuICAgIHRoaXMuZXJyb3IgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9ICh0aGlzLmVycm9yID09PSB0cnVlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3InIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLFxuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG5cbiAgc2V0RXJyb3IoZXJyb3IpIHtcbiAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU2lnbmlmaWNhbnRUb2tlbikgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gdG9rZW4uZ2V0TGVuZ3RoKCksIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGxldCBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgY29uc3QgbGluZSA9IHRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICAgIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCk7XG5cbiAgICAgIGxldCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgICBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgIHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTtcbiAgICBcbiAgICBzaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gQ2xhc3MuaW5uZXJIVE1MRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgaW5uZXJIVE1MRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSB1dGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBpbm5lckhUTUw7XG4gIH1cbn1cblxuU2lnbmlmaWNhbnRUb2tlbi50eXBlcyA9IHtcbiAgc3RyaW5nOiAnc3RyaW5nJyxcbiAgZW5kT2ZMaW5lOiAnZW5kT2ZMaW5lJyxcbiAgd2hpdGVzcGFjZTogJ3doaXRlc3BhY2UnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iXX0=