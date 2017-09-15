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
    key: 'asHTML',
    value: function asHTML(filePath) {
      var className = this.type,
          ///
      html = '<span class="' + className + '">' + this.innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
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
      var significantToken = arguments[1];
      var startPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var endPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : significantToken.getLength();

      var clonedSignificantToken = null;

      if (startPosition !== endPosition) {
        var content = significantToken.getContent();

        var line = significantToken.getLine(),
            type = significantToken.getType();

        content = content.substring(startPosition, endPosition); ///

        clonedSignificantToken = Class.fromContentLineAndType(content, line, type);
      }

      return clonedSignificantToken;
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(Class, content, line, type) {
      if (type === undefined) {
        type = line;
        line = content;
        content = Class;
        Class = SignificantToken;
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var sanitisedContent = tokenUtil.sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      significantToken = new (Function.prototype.bind.apply(Class, [null].concat([content, line, type, innerHTML], remainingArguments)))();

      return significantToken;
    }
  }]);

  return SignificantToken;
}();

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidG9rZW5VdGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwibGluZSIsInR5cGUiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImZpbGVQYXRoIiwiY2xhc3NOYW1lIiwiaHRtbCIsImxlbmd0aCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiQ2xhc3MiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0TGVuZ3RoIiwiY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsInN1YnN0cmluZyIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJ1bmRlZmluZWQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzYW5pdGlzZWRDb250ZW50Iiwic2FuaXRpc2VDb250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsa0JBQVIsQ0FBbEI7O0lBRU1DLGdCO0FBQ0osNEJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQ0MsU0FBakMsRUFBNEM7QUFBQTs7QUFDMUMsU0FBS0gsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OztvQ0FFZTtBQUNkLFVBQU1DLGNBQWMsSUFBcEI7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtKLE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7OzJCQUVNRSxRLEVBQVU7QUFDZixVQUFNQyxZQUFZLEtBQUtKLElBQXZCO0FBQUEsVUFBOEI7QUFDeEJLLCtCQUF1QkQsU0FBdkIsVUFBcUMsS0FBS0gsU0FBMUMsWUFETjs7QUFHQSxhQUFPSSxJQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS1AsT0FBTCxDQUFhUSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7MEJBRUtDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1gsaUJBQWlCWSxLQUFqQixDQUF1QlosZ0JBQXZCLEVBQXlDLElBQXpDLEVBQStDVSxhQUEvQyxFQUE4REMsV0FBOUQsQ0FBUDtBQUFtRjs7OzRCQUVDO0FBQUEsVUFBM0dFLEtBQTJHLHVFQUFuR2IsZ0JBQW1HO0FBQUEsVUFBakZjLGdCQUFpRjtBQUFBLFVBQS9ESixhQUErRCx1RUFBL0MsQ0FBK0M7QUFBQSxVQUE1Q0MsV0FBNEMsdUVBQTlCRyxpQkFBaUJDLFNBQWpCLEVBQThCOztBQUN0SCxVQUFJQyx5QkFBeUIsSUFBN0I7O0FBRUEsVUFBSU4sa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFJVixVQUFVYSxpQkFBaUJHLFVBQWpCLEVBQWQ7O0FBRUEsWUFBTWYsT0FBT1ksaUJBQWlCSSxPQUFqQixFQUFiO0FBQUEsWUFDTWYsT0FBT1csaUJBQWlCSyxPQUFqQixFQURiOztBQUdBbEIsa0JBQVVBLFFBQVFtQixTQUFSLENBQWtCVixhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVixDQU5pQyxDQU15Qjs7QUFFMURLLGlDQUF5QkgsTUFBTVEsc0JBQU4sQ0FBNkJwQixPQUE3QixFQUFzQ0MsSUFBdEMsRUFBNENDLElBQTVDLENBQXpCO0FBQ0Q7O0FBRUQsYUFBT2Esc0JBQVA7QUFDRDs7OzJDQUU2QkgsSyxFQUFPWixPLEVBQVNDLEksRUFBTUMsSSxFQUE2QjtBQUMvRSxVQUFJQSxTQUFTbUIsU0FBYixFQUF3QjtBQUN0Qm5CLGVBQU9ELElBQVA7QUFDQUEsZUFBT0QsT0FBUDtBQUNBQSxrQkFBVVksS0FBVjtBQUNBQSxnQkFBUWIsZ0JBQVI7QUFDRDs7QUFOOEUsd0NBQXBCdUIsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFRL0UsVUFBTUMsbUJBQW1CMUIsVUFBVTJCLGVBQVYsQ0FBMEJ4QixPQUExQixDQUF6QjtBQUFBLFVBQ01HLFlBQVlvQixnQkFEbEI7QUFBQSxVQUNvQztBQUM5QlYsNERBQXVCRCxLQUF2QixpQkFBNkJaLE9BQTdCLEVBQXNDQyxJQUF0QyxFQUE0Q0MsSUFBNUMsRUFBa0RDLFNBQWxELEdBQWdFbUIsa0JBQWhFLEtBRk47O0FBSUEsYUFBT1QsZ0JBQVA7QUFDRDs7Ozs7O0FBR0hZLE9BQU9DLE9BQVAsR0FBaUIzQixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHRva2VuVXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvdG9rZW4nKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB9XG4gIFxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUoU2lnbmlmaWNhbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuLCBzaWduaWZpY2FudFRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSBzaWduaWZpY2FudFRva2VuLmdldExlbmd0aCgpKSB7XG4gICAgbGV0IGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb25zdCBsaW5lID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgICB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShDbGFzcywgY29udGVudCwgbGluZSwgdHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdHlwZSA9IGxpbmU7XG4gICAgICBsaW5lID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdG9rZW5VdGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==