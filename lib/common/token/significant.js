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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidG9rZW5VdGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwibGluZSIsInR5cGUiLCJpbm5lckhUTUwiLCJlcnJvciIsInVuZGVmaW5lZCIsInNpZ25pZmljYW50IiwiY2xhc3NOYW1lIiwiaHRtbCIsImxlbmd0aCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiQ2xhc3MiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0TGVuZ3RoIiwiY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsImdldEVycm9yIiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRMaW5lQW5kVHlwZSIsInNldEVycm9yIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCOztJQUVNQyxnQjtBQUNKLDRCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQUE7O0FBQzFDLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBLFNBQUtDLEtBQUwsR0FBYUMsU0FBYixDQU4wQyxDQU1sQjtBQUN6Qjs7OztvQ0FFZTtBQUNkLFVBQU1DLGNBQWMsSUFBcEI7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtOLE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1HLFlBQWEsS0FBS0gsS0FBTCxLQUFlLElBQWhCLEdBQ0UsT0FERixHQUVJLEtBQUtGLElBRjNCO0FBQUEsVUFHTU0seUJBQXVCRCxTQUF2QixVQUFxQyxLQUFLSixTQUExQyxZQUhOOztBQUtBLGFBQU9LLElBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLUixPQUFMLENBQWFTLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7Ozs2QkFFUUwsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OzswQkFFS00sYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPWixpQkFBaUJhLEtBQWpCLENBQXVCYixnQkFBdkIsRUFBeUMsSUFBekMsRUFBK0NXLGFBQS9DLEVBQThEQyxXQUE5RCxDQUFQO0FBQW1GOzs7NEJBRUM7QUFBQSxVQUEzR0UsS0FBMkcsdUVBQW5HZCxnQkFBbUc7QUFBQSxVQUFqRmUsZ0JBQWlGO0FBQUEsVUFBL0RKLGFBQStELHVFQUEvQyxDQUErQztBQUFBLFVBQTVDQyxXQUE0Qyx1RUFBOUJHLGlCQUFpQkMsU0FBakIsRUFBOEI7O0FBQ3RILFVBQUlDLHlCQUF5QixJQUE3Qjs7QUFFQSxVQUFJTixrQkFBa0JDLFdBQXRCLEVBQW1DO0FBQ2pDLFlBQUlYLFVBQVVjLGlCQUFpQkcsVUFBakIsRUFBZDs7QUFFQSxZQUFNaEIsT0FBT2EsaUJBQWlCSSxPQUFqQixFQUFiO0FBQUEsWUFDTWhCLE9BQU9ZLGlCQUFpQkssT0FBakIsRUFEYjtBQUFBLFlBRU1mLFFBQVFVLGlCQUFpQk0sUUFBakIsRUFGZDs7QUFJQXBCLGtCQUFVQSxRQUFRcUIsU0FBUixDQUFrQlgsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFLLGlDQUF5QkgsTUFBTVMsc0JBQU4sQ0FBNkJ0QixPQUE3QixFQUFzQ0MsSUFBdEMsRUFBNENDLElBQTVDLENBQXpCOztBQUVBYywrQkFBdUJPLFFBQXZCLENBQWdDbkIsS0FBaEM7QUFDRDs7QUFFRCxhQUFPWSxzQkFBUDtBQUNEOzs7MkNBRTZCSCxLLEVBQU9iLE8sRUFBU0MsSSxFQUFNQyxJLEVBQTZCO0FBQy9FLFVBQUlBLFNBQVNHLFNBQWIsRUFBd0I7QUFDdEJILGVBQU9ELElBQVA7QUFDQUEsZUFBT0QsT0FBUDtBQUNBQSxrQkFBVWEsS0FBVjtBQUNBQSxnQkFBUWQsZ0JBQVI7QUFDRDs7QUFOOEUsd0NBQXBCeUIsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFRL0UsVUFBTUMsbUJBQW1CNUIsVUFBVTZCLGVBQVYsQ0FBMEIxQixPQUExQixDQUF6QjtBQUFBLFVBQ01HLFlBQVlzQixnQkFEbEI7QUFBQSxVQUNvQztBQUM5QlgsNERBQXVCRCxLQUF2QixpQkFBNkJiLE9BQTdCLEVBQXNDQyxJQUF0QyxFQUE0Q0MsSUFBNUMsRUFBa0RDLFNBQWxELEdBQWdFcUIsa0JBQWhFLEtBRk47O0FBSUEsYUFBT1YsZ0JBQVA7QUFDRDs7Ozs7O0FBR0hhLE9BQU9DLE9BQVAsR0FBaUI3QixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHRva2VuVXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvdG9rZW4nKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXG4gICAgdGhpcy5lcnJvciA9IHVuZGVmaW5lZDsgLy8vXG4gIH1cbiAgXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnQgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiBzaWduaWZpY2FudDtcbiAgfVxuICBcbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0RXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3I7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9ICh0aGlzLmVycm9yID09PSB0cnVlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3InIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLFxuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG5cbiAgc2V0RXJyb3IoZXJyb3IpIHtcbiAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZShTaWduaWZpY2FudFRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4sIHNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGVuZ3RoKCkpIHtcbiAgICBsZXQgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSBzaWduaWZpY2FudFRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICAgIHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgIGVycm9yID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRFcnJvcigpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgICBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcblxuICAgICAgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbi5zZXRFcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShDbGFzcywgY29udGVudCwgbGluZSwgdHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdHlwZSA9IGxpbmU7XG4gICAgICBsaW5lID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdG9rZW5VdGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==