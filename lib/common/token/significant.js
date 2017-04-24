'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../../util');

var SignificantToken = function () {
  function SignificantToken(content, line, type) {
    _classCallCheck(this, SignificantToken);

    this.content = content;
    this.line = line;
    this.type = type;
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
    key: 'getHTML',
    value: function getHTML() {
      var sanitisedContent = util.sanitiseContent(this.content),
          className = this.type,
          ///
      innerHTML = sanitisedContent,
          ///
      html = '<span class="' + className + '">' + innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'setType',
    value: function setType() {
      return this.type;
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

        clonedSignificantToken = new Class(content, line, type);
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

      significantToken = new Class(content, line, type);

      return significantToken;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJ0eXBlIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImh0bWwiLCJsZW5ndGgiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsInRva2VuIiwiZ2V0TGVuZ3RoIiwiQ2xhc3MiLCJjbG9uZWRTaWduaWZpY2FudFRva2VuIiwiZ2V0TGluZSIsImdldFR5cGUiLCJnZXRDb250ZW50Iiwic3Vic3RyaW5nIiwic2lnbmlmaWNhbnRUb2tlbiIsInR5cGVzIiwic3RyaW5nIiwiZW5kT2ZMaW5lIiwid2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjs7SUFFTUMsZ0I7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUMsbUJBQW1CTixLQUFLTyxlQUFMLENBQXFCLEtBQUtKLE9BQTFCLENBQXpCO0FBQUEsVUFDTUssWUFBWSxLQUFLSCxJQUR2QjtBQUFBLFVBQzZCO0FBQ3ZCSSxrQkFBWUgsZ0JBRmxCO0FBQUEsVUFFb0M7QUFDOUJJLCtCQUF1QkYsU0FBdkIsVUFBcUNDLFNBQXJDLFlBSE47O0FBS0EsYUFBT0MsSUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtQLE9BQUwsQ0FBYVEsTUFBcEIsQ0FEVSxDQUNrQjtBQUM3Qjs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLTixJQUFaO0FBQ0Q7OzswQkFFS08sYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPWCxpQkFBaUJZLEtBQWpCLENBQXVCLElBQXZCLEVBQTZCRixhQUE3QixFQUE0Q0MsV0FBNUMsRUFBeURYLGdCQUF6RCxDQUFQO0FBQW1GOzs7MEJBRTFHYSxLLEVBQXFGO0FBQUEsVUFBOUVILGFBQThFLHVFQUE5RCxDQUE4RDtBQUFBLFVBQTNEQyxXQUEyRCx1RUFBN0NFLE1BQU1DLFNBQU4sRUFBNkM7QUFBQSxVQUExQkMsS0FBMEIsdUVBQWxCZixnQkFBa0I7O0FBQ2hHLFVBQUlnQix5QkFBeUIsSUFBN0I7O0FBRUEsVUFBSU4sa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFNVCxPQUFPVyxNQUFNSSxPQUFOLEVBQWI7QUFBQSxZQUNNZCxPQUFPVSxNQUFNSyxPQUFOLEVBRGI7O0FBR0EsWUFBSWpCLFVBQVVZLE1BQU1NLFVBQU4sRUFBZDs7QUFFQWxCLGtCQUFVQSxRQUFRbUIsU0FBUixDQUFrQlYsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFLLGlDQUF5QixJQUFJRCxLQUFKLENBQVVkLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQUF6QjtBQUNEOztBQUVELGFBQU9hLHNCQUFQO0FBQ0Q7Ozt5Q0FFMkJLLGdCLEVBQTRDO0FBQUEsVUFBMUJOLEtBQTBCLHVFQUFsQmYsZ0JBQWtCOztBQUN0RSxVQUFNQyxVQUFVb0IsaUJBQWlCRixVQUFqQixFQUFoQjtBQUFBLFVBQ01qQixPQUFPbUIsaUJBQWlCSixPQUFqQixFQURiO0FBQUEsVUFFTWQsT0FBT2tCLGlCQUFpQkgsT0FBakIsRUFGYjs7QUFJQUcseUJBQW1CLElBQUlOLEtBQUosQ0FBVWQsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLENBQW5COztBQUVBLGFBQU9rQixnQkFBUDtBQUNEOzs7Ozs7QUFHSHJCLGlCQUFpQnNCLEtBQWpCLEdBQXlCO0FBQ3ZCQyxVQUFRLFFBRGU7QUFFdkJDLGFBQVcsV0FGWTtBQUd2QkMsY0FBWTtBQUhXLENBQXpCOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCM0IsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgdHlwZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHV0aWwuc2FuaXRpc2VDb250ZW50KHRoaXMuY29udGVudCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAvLy9cbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIHNldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBTaWduaWZpY2FudFRva2VuKSB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSB0b2tlbi5nZXRMZW5ndGgoKSwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgbGV0IGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgICAgdHlwZSA9IHRva2VuLmdldFR5cGUoKTtcblxuICAgICAgbGV0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbiwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmUgPSBzaWduaWZpY2FudFRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCk7XG4gICAgXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG5cblNpZ25pZmljYW50VG9rZW4udHlwZXMgPSB7XG4gIHN0cmluZzogJ3N0cmluZycsXG4gIGVuZE9mTGluZTogJ2VuZE9mTGluZScsXG4gIHdoaXRlc3BhY2U6ICd3aGl0ZXNwYWNlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19