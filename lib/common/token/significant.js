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
    key: 'isSignificant',
    value: function isSignificant() {
      var significant = true;

      return significant;
    }
  }, {
    key: 'isWhitespaceToken',
    value: function isWhitespaceToken() {
      var whitespaceToken = false;

      return whitespaceToken;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiY29udGVudFV0aWxpdGllcyIsInJlcXVpcmUiLCJzYW5pdGlzZUNvbnRlbnQiLCJTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJ0eXBlIiwiaW5uZXJIVE1MIiwibGVuZ3RoIiwic2lnbmlmaWNhbnQiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJmaWxlUGF0aCIsImNsYXNzTmFtZSIsImh0bWwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsIkNsYXNzIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldExlbmd0aCIsImNsb25lZFNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwiZ2V0TGluZSIsImdldFR5cGUiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudExpbmVBbmRUeXBlIiwidW5kZWZpbmVkIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2FuaXRpc2VkQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUJDLFFBQVEseUJBQVIsQ0FBekI7O0lBRVFDLGUsR0FBb0JGLGdCLENBQXBCRSxlOztJQUVGQyxnQjtBQUNKLDRCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQUE7O0FBQzFDLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtILE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsU0FBUyxLQUFLSixPQUFMLENBQWFJLE1BQTVCLENBRFUsQ0FDMEI7O0FBRXBDLGFBQU9BLE1BQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxJQUFwQjs7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsa0JBQWtCLEtBQXhCOztBQUVBLGFBQU9BLGVBQVA7QUFDRDs7OzJCQUVNQyxRLEVBQVU7QUFDZixVQUFNQyxZQUFZLEtBQUtOLElBQXZCO0FBQUEsVUFBOEI7QUFDMUJPLCtCQUF1QkQsU0FBdkIsVUFBcUMsS0FBS0wsU0FBMUMsWUFESjs7QUFHQSxhQUFPTSxJQUFQO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPWixpQkFBaUJhLEtBQWpCLENBQXVCYixnQkFBdkIsRUFBeUMsSUFBekMsRUFBK0NXLGFBQS9DLEVBQThEQyxXQUE5RCxDQUFQO0FBQW1GOzs7NEJBRUM7QUFBQSxVQUEzR0UsS0FBMkcsdUVBQW5HZCxnQkFBbUc7QUFBQSxVQUFqRmUsZ0JBQWlGO0FBQUEsVUFBL0RKLGFBQStELHVFQUEvQyxDQUErQztBQUFBLFVBQTVDQyxXQUE0Qyx1RUFBOUJHLGlCQUFpQkMsU0FBakIsRUFBOEI7O0FBQ3RILFVBQUlDLHlCQUF5QixJQUE3Qjs7QUFFQSxVQUFJTixrQkFBa0JDLFdBQXRCLEVBQW1DO0FBQ2pDLFlBQUlYLFVBQVVjLGlCQUFpQkcsVUFBakIsRUFBZDs7QUFFQSxZQUFNaEIsT0FBT2EsaUJBQWlCSSxPQUFqQixFQUFiO0FBQUEsWUFDTWhCLE9BQU9ZLGlCQUFpQkssT0FBakIsRUFEYjs7QUFHQW5CLGtCQUFVQSxRQUFRb0IsU0FBUixDQUFrQlYsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVYsQ0FOaUMsQ0FNeUI7O0FBRTFESyxpQ0FBeUJILE1BQU1RLHNCQUFOLENBQTZCckIsT0FBN0IsRUFBc0NDLElBQXRDLEVBQTRDQyxJQUE1QyxDQUF6QjtBQUNEOztBQUVELGFBQU9jLHNCQUFQO0FBQ0Q7OzsyQ0FFNkJILEssRUFBT2IsTyxFQUFTQyxJLEVBQU1DLEksRUFBNkI7QUFDL0UsVUFBSUEsU0FBU29CLFNBQWIsRUFBd0I7QUFDdEJwQixlQUFPRCxJQUFQO0FBQ0FBLGVBQU9ELE9BQVA7QUFDQUEsa0JBQVVhLEtBQVY7QUFDQUEsZ0JBQVFkLGdCQUFSO0FBQ0Q7O0FBTjhFLHdDQUFwQndCLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBUS9FLFVBQU1DLG1CQUFtQjFCLGdCQUFnQkUsT0FBaEIsQ0FBekI7QUFBQSxVQUNNRyxZQUFZcUIsZ0JBRGxCO0FBQUEsVUFDb0M7QUFDOUJWLDREQUF1QkQsS0FBdkIsaUJBQTZCYixPQUE3QixFQUFzQ0MsSUFBdEMsRUFBNENDLElBQTVDLEVBQWtEQyxTQUFsRCxHQUFnRW9CLGtCQUFoRSxLQUZOOztBQUlBLGFBQU9ULGdCQUFQO0FBQ0Q7Ozs7OztBQUdIVyxPQUFPQyxPQUFQLEdBQWlCM0IsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb250ZW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnQnKTtcblxuY29uc3QgeyBzYW5pdGlzZUNvbnRlbnQgfSA9IGNvbnRlbnRVdGlsaXRpZXM7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgfVxuICBcbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50O1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuID0gZmFsc2U7XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgYXNIVE1MKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZShTaWduaWZpY2FudFRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4sIHNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGVuZ3RoKCkpIHtcbiAgICBsZXQgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSBzaWduaWZpY2FudFRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICAgIHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgICBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKENsYXNzLCBjb250ZW50LCBsaW5lLCB0eXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0eXBlID0gbGluZTtcbiAgICAgIGxpbmUgPSBjb250ZW50O1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iXX0=