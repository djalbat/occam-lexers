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
      var significantToken = arguments[1];
      var startPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var endPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : significantToken.getLength();

      var clonedSignificantToken = null;

      if (startPosition !== endPosition) {
        var content = significantToken.getContent();

        var line = significantToken.getLine(),
            type = significantToken.getType(),
            error = significantToken.getError();

        content = content.substring(startPosition, endPosition);

        clonedSignificantToken = Class.fromContentLineAndType(content, line, type);

        clonedSignificantToken.setError(error);
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

      var sanitisedContent = tokenUtil.sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      significantToken = new Class(content, line, type, innerHTML);

      return significantToken;
    }
  }]);

  return SignificantToken;
}();

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidG9rZW5VdGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwibGluZSIsInR5cGUiLCJpbm5lckhUTUwiLCJlcnJvciIsInVuZGVmaW5lZCIsInNpZ25pZmljYW50IiwiY2xhc3NOYW1lIiwiaHRtbCIsImxlbmd0aCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiQ2xhc3MiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0TGVuZ3RoIiwiY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsImdldEVycm9yIiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRMaW5lQW5kVHlwZSIsInNldEVycm9yIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCOztJQUVNQyxnQjtBQUNKLDRCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQUE7O0FBQzFDLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBLFNBQUtDLEtBQUwsR0FBYUMsU0FBYixDQU4wQyxDQU1sQjtBQUN6Qjs7OztvQ0FFZTtBQUNkLFVBQU1DLGNBQWMsSUFBcEI7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtOLE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1HLFlBQWEsS0FBS0gsS0FBTCxLQUFlLElBQWhCLEdBQ0UsT0FERixHQUVJLEtBQUtGLElBRjNCO0FBQUEsVUFHTU0seUJBQXVCRCxTQUF2QixVQUFxQyxLQUFLSixTQUExQyxZQUhOOztBQUtBLGFBQU9LLElBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLUixPQUFMLENBQWFTLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7Ozs2QkFFUUwsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OzswQkFFS00sYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPWixpQkFBaUJhLEtBQWpCLENBQXVCYixnQkFBdkIsRUFBeUMsSUFBekMsRUFBK0NXLGFBQS9DLEVBQThEQyxXQUE5RCxDQUFQO0FBQW1GOzs7NEJBRUM7QUFBQSxVQUEzR0UsS0FBMkcsdUVBQW5HZCxnQkFBbUc7QUFBQSxVQUFqRmUsZ0JBQWlGO0FBQUEsVUFBL0RKLGFBQStELHVFQUEvQyxDQUErQztBQUFBLFVBQTVDQyxXQUE0Qyx1RUFBOUJHLGlCQUFpQkMsU0FBakIsRUFBOEI7O0FBQ3RILFVBQUlDLHlCQUF5QixJQUE3Qjs7QUFFQSxVQUFJTixrQkFBa0JDLFdBQXRCLEVBQW1DO0FBQ2pDLFlBQUlYLFVBQVVjLGlCQUFpQkcsVUFBakIsRUFBZDs7QUFFQSxZQUFNaEIsT0FBT2EsaUJBQWlCSSxPQUFqQixFQUFiO0FBQUEsWUFDTWhCLE9BQU9ZLGlCQUFpQkssT0FBakIsRUFEYjtBQUFBLFlBRU1mLFFBQVFVLGlCQUFpQk0sUUFBakIsRUFGZDs7QUFJQXBCLGtCQUFVQSxRQUFRcUIsU0FBUixDQUFrQlgsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFLLGlDQUF5QkgsTUFBTVMsc0JBQU4sQ0FBNkJ0QixPQUE3QixFQUFzQ0MsSUFBdEMsRUFBNENDLElBQTVDLENBQXpCOztBQUVBYywrQkFBdUJPLFFBQXZCLENBQWdDbkIsS0FBaEM7QUFDRDs7QUFFRCxhQUFPWSxzQkFBUDtBQUNEOzs7MkNBRTZCSCxLLEVBQU9iLE8sRUFBU0MsSSxFQUFNQyxJLEVBQU07QUFDeEQsVUFBSUEsU0FBU0csU0FBYixFQUF3QjtBQUN0QkgsZUFBT0QsSUFBUDtBQUNBQSxlQUFPRCxPQUFQO0FBQ0FBLGtCQUFVYSxLQUFWO0FBQ0FBLGdCQUFRZCxnQkFBUjtBQUNEOztBQUVELFVBQU15QixtQkFBbUIzQixVQUFVNEIsZUFBVixDQUEwQnpCLE9BQTFCLENBQXpCO0FBQUEsVUFDTUcsWUFBWXFCLGdCQURsQjtBQUFBLFVBQ29DO0FBQzlCVix5QkFBbUIsSUFBSUQsS0FBSixDQUFVYixPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsRUFBK0JDLFNBQS9CLENBRnpCOztBQUlBLGFBQU9XLGdCQUFQO0FBQ0Q7Ozs7OztBQUdIWSxPQUFPQyxPQUFQLEdBQWlCNUIsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0b2tlblV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL3Rva2VuJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcblxuICAgIHRoaXMuZXJyb3IgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG4gIFxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldEVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9yO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAodGhpcy5lcnJvciA9PT0gdHJ1ZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZSxcbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIHNldEVycm9yKGVycm9yKSB7XG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUoU2lnbmlmaWNhbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuLCBzaWduaWZpY2FudFRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSBzaWduaWZpY2FudFRva2VuLmdldExlbmd0aCgpKSB7XG4gICAgbGV0IGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb25zdCBsaW5lID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgICB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBlcnJvciA9IHNpZ25pZmljYW50VG9rZW4uZ2V0RXJyb3IoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4uc2V0RXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUsIHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0eXBlID0gbGluZTtcbiAgICAgIGxpbmUgPSBjb250ZW50O1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSB0b2tlblV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==