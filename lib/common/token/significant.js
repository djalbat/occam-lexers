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
      var replacedToken = this;

      this.line.replaceToken(replacedToken, token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJjbGFzc05hbWUiLCJodG1sIiwibGVuZ3RoIiwidG9rZW4iLCJyZXBsYWNlZFRva2VuIiwicmVwbGFjZVRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJnZXRMZW5ndGgiLCJDbGFzcyIsImNsb25lZFNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwiZ2V0TGluZSIsImdldFR5cGUiLCJnZXRFcnJvciIsInN1YnN0cmluZyIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJzZXRFcnJvciIsImlubmVySFRNTEZyb21Db250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInNhbml0aXNlZENvbnRlbnQiLCJzYW5pdGlzZUNvbnRlbnQiLCJ0eXBlcyIsInN0cmluZyIsImVuZE9mTGluZSIsIndoaXRlc3BhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7O0lBRU1DLGdCO0FBQ0osNEJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQ0MsU0FBakMsRUFBNEM7QUFBQTs7QUFDMUMsU0FBS0gsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsU0FBS0MsS0FBTCxHQUFhQyxTQUFiLENBTjBDLENBTWxCO0FBQ3pCOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLTCxPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFNRSxZQUFhLEtBQUtGLEtBQUwsS0FBZSxJQUFoQixHQUNFLE9BREYsR0FFSSxLQUFLRixJQUYzQjtBQUFBLFVBR01LLHlCQUF1QkQsU0FBdkIsVUFBcUMsS0FBS0gsU0FBMUMsWUFITjs7QUFLQSxhQUFPSSxJQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS1AsT0FBTCxDQUFhUSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7NkJBRVFKLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7Z0NBRVdLLEssRUFBTztBQUNqQixVQUFNQyxnQkFBZ0IsSUFBdEI7O0FBRUEsV0FBS1QsSUFBTCxDQUFVVSxZQUFWLENBQXVCRCxhQUF2QixFQUFzQ0QsS0FBdEM7QUFDRDs7OzBCQUVLRyxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9kLGlCQUFpQmUsS0FBakIsQ0FBdUIsSUFBdkIsRUFBNkJGLGFBQTdCLEVBQTRDQyxXQUE1QyxFQUF5RGQsZ0JBQXpELENBQVA7QUFBbUY7OzswQkFFMUdVLEssRUFBcUY7QUFBQSxVQUE5RUcsYUFBOEUsdUVBQTlELENBQThEO0FBQUEsVUFBM0RDLFdBQTJELHVFQUE3Q0osTUFBTU0sU0FBTixFQUE2QztBQUFBLFVBQTFCQyxLQUEwQix1RUFBbEJqQixnQkFBa0I7O0FBQ2hHLFVBQUlrQix5QkFBeUIsSUFBN0I7O0FBRUEsVUFBSUwsa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFJYixVQUFVUyxNQUFNUyxVQUFOLEVBQWQ7O0FBRUEsWUFBTWpCLE9BQU9RLE1BQU1VLE9BQU4sRUFBYjtBQUFBLFlBQ01qQixPQUFPTyxNQUFNVyxPQUFOLEVBRGI7QUFBQSxZQUVNaEIsUUFBUUssTUFBTVksUUFBTixFQUZkOztBQUlBckIsa0JBQVVBLFFBQVFzQixTQUFSLENBQWtCVixhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVjs7QUFFQUksaUNBQXlCRCxNQUFNTyxzQkFBTixDQUE2QnZCLE9BQTdCLEVBQXNDQyxJQUF0QyxFQUE0Q0MsSUFBNUMsQ0FBekI7O0FBRUFlLCtCQUF1Qk8sUUFBdkIsQ0FBZ0NwQixLQUFoQztBQUNEOztBQUVELGFBQU9hLHNCQUFQO0FBQ0Q7OzsyQ0FFNkJqQixPLEVBQVNDLEksRUFBTUMsSSxFQUFnQztBQUFBLFVBQTFCYyxLQUEwQix1RUFBbEJqQixnQkFBa0I7O0FBQzNFLFVBQU1JLFlBQVlhLE1BQU1TLG9CQUFOLENBQTJCekIsT0FBM0IsQ0FBbEI7QUFBQSxVQUNNMEIsbUJBQW1CLElBQUlWLEtBQUosQ0FBVWhCLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixFQUErQkMsU0FBL0IsQ0FEekI7O0FBR0EsYUFBT3VCLGdCQUFQO0FBQ0Q7Ozt5Q0FFMkIxQixPLEVBQVM7QUFDbkMsVUFBTTJCLG1CQUFtQjlCLEtBQUsrQixlQUFMLENBQXFCNUIsT0FBckIsQ0FBekI7QUFBQSxVQUNNRyxZQUFZd0IsZ0JBRGxCLENBRG1DLENBRUM7O0FBRXBDLGFBQU94QixTQUFQO0FBQ0Q7Ozs7OztBQUdISixpQkFBaUI4QixLQUFqQixHQUF5QjtBQUN2QkMsVUFBUSxRQURlO0FBRXZCQyxhQUFXLFdBRlk7QUFHdkJDLGNBQVk7QUFIVyxDQUF6Qjs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQm5DLGdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXG4gICAgdGhpcy5lcnJvciA9IHVuZGVmaW5lZDsgLy8vXG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldEVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9yO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAodGhpcy5lcnJvciA9PT0gdHJ1ZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZSxcbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIHNldEVycm9yKGVycm9yKSB7XG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICB9XG5cbiAgcmVwbGFjZVdpdGgodG9rZW4pIHtcbiAgICBjb25zdCByZXBsYWNlZFRva2VuID0gdGhpcztcblxuICAgIHRoaXMubGluZS5yZXBsYWNlVG9rZW4ocmVwbGFjZWRUb2tlbiwgdG9rZW4pO1xuICB9XG4gIFxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU2lnbmlmaWNhbnRUb2tlbikgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gdG9rZW4uZ2V0TGVuZ3RoKCksIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGxldCBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSB0b2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgICB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgZXJyb3IgPSB0b2tlbi5nZXRFcnJvcigpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgICBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcblxuICAgICAgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbi5zZXRFcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBpbm5lckhUTUwgPSBDbGFzcy5pbm5lckhUTUxGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBpbm5lckhUTUxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGlubmVySFRNTDtcbiAgfVxufVxuXG5TaWduaWZpY2FudFRva2VuLnR5cGVzID0ge1xuICBzdHJpbmc6ICdzdHJpbmcnLFxuICBlbmRPZkxpbmU6ICdlbmRPZkxpbmUnLFxuICB3aGl0ZXNwYWNlOiAnd2hpdGVzcGFjZSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==