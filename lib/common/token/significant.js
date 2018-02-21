'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var contentUtilities = require('../../utilities/content');

var sanitiseContent = contentUtilities.sanitiseContent;

var SignificantToken = function () {
  function SignificantToken(content, line, type, innerHTML) {
    _classCallCheck(this, SignificantToken);

    this.content = content;
    this.line = line;
    this.type = type;
    this.innerHTML = innerHTML;
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
    key: 'getLength',
    value: function getLength() {
      var length = this.content.length; ///

      return length;
    }
  }, {
    key: 'isSignificantToken',
    value: function isSignificantToken() {
      var significantToken = true;

      return significantToken;
    }
  }, {
    key: 'isWhitespaceToken',
    value: function isWhitespaceToken() {
      var whitespaceToken = false;

      return whitespaceToken;
    }
  }, {
    key: 'isEndOfLineToken',
    value: function isEndOfLineToken() {
      var endOfLineToken = false;

      return endOfLineToken;
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
    key: 'setLine',
    value: function setLine(line) {
      this.line = line;
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

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      significantToken = new (Function.prototype.bind.apply(Class, [null].concat([content, line, type, innerHTML], remainingArguments)))();

      return significantToken;
    }
  }]);

  return SignificantToken;
}();

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiY29udGVudFV0aWxpdGllcyIsInJlcXVpcmUiLCJzYW5pdGlzZUNvbnRlbnQiLCJTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJ0eXBlIiwiaW5uZXJIVE1MIiwibGVuZ3RoIiwic2lnbmlmaWNhbnRUb2tlbiIsIndoaXRlc3BhY2VUb2tlbiIsImVuZE9mTGluZVRva2VuIiwiZmlsZVBhdGgiLCJjbGFzc05hbWUiLCJodG1sIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJDbGFzcyIsImdldExlbmd0aCIsImNsb25lZFNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwiZ2V0TGluZSIsImdldFR5cGUiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudExpbmVBbmRUeXBlIiwidW5kZWZpbmVkIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2FuaXRpc2VkQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUJDLFFBQVEseUJBQVIsQ0FBekI7O0lBRVFDLGUsR0FBb0JGLGdCLENBQXBCRSxlOztJQUVGQyxnQjtBQUNKLDRCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQUE7O0FBQzFDLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtILE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsU0FBUyxLQUFLSixPQUFMLENBQWFJLE1BQTVCLENBRFUsQ0FDMEI7O0FBRXBDLGFBQU9BLE1BQVA7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNQyxtQkFBbUIsSUFBekI7O0FBRUEsYUFBT0EsZ0JBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxrQkFBa0IsS0FBeEI7O0FBRUEsYUFBT0EsZUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1DLGlCQUFpQixLQUF2Qjs7QUFFQSxhQUFPQSxjQUFQO0FBQ0Q7OzsyQkFFTUMsUSxFQUFVO0FBQ2YsVUFBTUMsWUFBWSxLQUFLUCxJQUF2QjtBQUFBLFVBQThCO0FBQzFCUSwrQkFBdUJELFNBQXZCLFVBQXFDLEtBQUtOLFNBQTFDLFlBREo7O0FBR0EsYUFBT08sSUFBUDtBQUNEOzs7NEJBRU9ULEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7MEJBRUtVLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT2IsaUJBQWlCYyxLQUFqQixDQUF1QmQsZ0JBQXZCLEVBQXlDLElBQXpDLEVBQStDWSxhQUEvQyxFQUE4REMsV0FBOUQsQ0FBUDtBQUFtRjs7OzRCQUVDO0FBQUEsVUFBM0dFLEtBQTJHLHVFQUFuR2YsZ0JBQW1HO0FBQUEsVUFBakZNLGdCQUFpRjtBQUFBLFVBQS9ETSxhQUErRCx1RUFBL0MsQ0FBK0M7QUFBQSxVQUE1Q0MsV0FBNEMsdUVBQTlCUCxpQkFBaUJVLFNBQWpCLEVBQThCOztBQUN0SCxVQUFJQyx5QkFBeUIsSUFBN0I7O0FBRUEsVUFBSUwsa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFJWixVQUFVSyxpQkFBaUJZLFVBQWpCLEVBQWQ7O0FBRUEsWUFBTWhCLE9BQU9JLGlCQUFpQmEsT0FBakIsRUFBYjtBQUFBLFlBQ01oQixPQUFPRyxpQkFBaUJjLE9BQWpCLEVBRGI7O0FBR0FuQixrQkFBVUEsUUFBUW9CLFNBQVIsQ0FBa0JULGFBQWxCLEVBQWlDQyxXQUFqQyxDQUFWLENBTmlDLENBTXlCOztBQUUxREksaUNBQXlCRixNQUFNTyxzQkFBTixDQUE2QnJCLE9BQTdCLEVBQXNDQyxJQUF0QyxFQUE0Q0MsSUFBNUMsQ0FBekI7QUFDRDs7QUFFRCxhQUFPYyxzQkFBUDtBQUNEOzs7MkNBRTZCRixLLEVBQU9kLE8sRUFBU0MsSSxFQUFNQyxJLEVBQTZCO0FBQy9FLFVBQUlBLFNBQVNvQixTQUFiLEVBQXdCO0FBQ3RCcEIsZUFBT0QsSUFBUDtBQUNBQSxlQUFPRCxPQUFQO0FBQ0FBLGtCQUFVYyxLQUFWO0FBQ0FBLGdCQUFRZixnQkFBUjtBQUNEOztBQU44RSx3Q0FBcEJ3QixrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQVEvRSxVQUFNQyxtQkFBbUIxQixnQkFBZ0JFLE9BQWhCLENBQXpCO0FBQUEsVUFDTUcsWUFBWXFCLGdCQURsQjtBQUFBLFVBQ29DO0FBQzlCbkIsNERBQXVCUyxLQUF2QixpQkFBNkJkLE9BQTdCLEVBQXNDQyxJQUF0QyxFQUE0Q0MsSUFBNUMsRUFBa0RDLFNBQWxELEdBQWdFb0Isa0JBQWhFLEtBRk47O0FBSUEsYUFBT2xCLGdCQUFQO0FBQ0Q7Ozs7OztBQUdIb0IsT0FBT0MsT0FBUCxHQUFpQjNCLGdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29udGVudFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9jb250ZW50Jyk7XG5cbmNvbnN0IHsgc2FuaXRpc2VDb250ZW50IH0gPSBjb250ZW50VXRpbGl0aWVzO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBpc1NpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRydWU7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIGlzRW5kT2ZMaW5lVG9rZW4oKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBmYWxzZTtcblxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc2V0TGluZShsaW5lKSB7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKFNpZ25pZmljYW50VG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbiwgc2lnbmlmaWNhbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMZW5ndGgoKSkge1xuICAgIGxldCBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29uc3QgbGluZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgICAgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyAgLy8vXG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUsIHR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHR5cGUgPSBsaW5lO1xuICAgICAgbGluZSA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==