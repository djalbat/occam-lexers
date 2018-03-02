'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var contentUtilities = require('../utilities/content');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    sanitiseContent = contentUtilities.sanitiseContent;

var Token = function () {
  function Token(type, content, innerHTML, significant) {
    _classCallCheck(this, Token);

    this.type = type;
    this.content = content;
    this.innerHTML = innerHTML;
    this.significant = significant;
  }

  _createClass(Token, [{
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getInnerHTML',
    value: function getInnerHTML() {
      return this.innerHTML;
    }
  }, {
    key: 'isSignificant',
    value: function isSignificant() {
      return this.significant;
    }
  }, {
    key: 'getContentLength',
    value: function getContentLength() {
      var contentLength = this.content.length;

      return contentLength;
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
    key: 'clone',
    value: function clone(Class, startPosition, endPosition) {
      var token = null;

      if (startPosition !== endPosition) {
        var content = this.getContent();

        content = content.substring(startPosition, endPosition); ///

        token = Class.fromContent(content);
      }

      return token;
    }
  }], [{
    key: 'fromContentAndType',
    value: function fromContentAndType(Class, content, type, significant) {
      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      token = new Class(type, content, innerHTML, significant);

      return token;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content, significant) {
      var type = Class.type,
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          token = new Class(type, content, innerHTML, significant);


      return token;
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content, significant) {
      var token = null;

      var regularExpression = Class.regularExpression,
          matches = content.match(regularExpression);


      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        token = Token.fromContent(Class, content, significant);
      }

      return token;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      var regularExpression = Class.regularExpression,
          position = content.search(regularExpression);


      return position;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImNvbnRlbnRVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2FuaXRpc2VDb250ZW50IiwiVG9rZW4iLCJ0eXBlIiwiY29udGVudCIsImlubmVySFRNTCIsInNpZ25pZmljYW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImVuZE9mTGluZVRva2VuIiwiZmlsZVBhdGgiLCJjbGFzc05hbWUiLCJodG1sIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJ0b2tlbiIsImdldENvbnRlbnQiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudCIsInNhbml0aXNlZENvbnRlbnQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsbUJBQW1CRCxRQUFRLHNCQUFSLENBQXpCOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjtBQUFBLElBRUVDLGVBRkYsR0FFc0JILGdCQUZ0QixDQUVFRyxlQUZGOztJQUlBQyxLO0FBQ0osaUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxTQUEzQixFQUFzQ0MsV0FBdEMsRUFBbUQ7QUFBQTs7QUFDakQsU0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLSCxJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsZ0JBQWdCLEtBQUtILE9BQUwsQ0FBYUksTUFBbkM7O0FBRUEsYUFBT0QsYUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1FLGlCQUFpQixLQUF2Qjs7QUFFQSxhQUFPQSxjQUFQO0FBQ0Q7OzsyQkFFTUMsUSxFQUFVO0FBQ2YsVUFBTUMsWUFBWSxLQUFLUixJQUF2QjtBQUFBLFVBQThCO0FBQ3hCUywrQkFBdUJELFNBQXZCLFVBQXFDLEtBQUtOLFNBQTFDLFlBRE47O0FBR0EsYUFBT08sSUFBUDtBQUNEOzs7MEJBRUtDLEssRUFBT0MsYSxFQUFlQyxXLEVBQWE7QUFDdkMsVUFBSUMsUUFBUSxJQUFaOztBQUVBLFVBQUlGLGtCQUFrQkMsV0FBdEIsRUFBbUM7QUFDakMsWUFBSVgsVUFBVSxLQUFLYSxVQUFMLEVBQWQ7O0FBRUFiLGtCQUFVQSxRQUFRYyxTQUFSLENBQWtCSixhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVixDQUhpQyxDQUd5Qjs7QUFFMURDLGdCQUFRSCxNQUFNTSxXQUFOLENBQWtCZixPQUFsQixDQUFSO0FBQ0Q7O0FBRUQsYUFBT1ksS0FBUDtBQUNEOzs7dUNBRXlCSCxLLEVBQU9ULE8sRUFBU0QsSSxFQUFNRyxXLEVBQWE7QUFDM0QsVUFBTWMsbUJBQW1CbkIsZ0JBQWdCRyxPQUFoQixDQUF6QjtBQUFBLFVBQ01DLFlBQVllLGdCQURsQjtBQUFBLFVBQ29DO0FBQzlCSixjQUFRLElBQUlILEtBQUosQ0FBVVYsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUJDLFNBQXpCLEVBQW9DQyxXQUFwQyxDQUZkOztBQUlBLGFBQU9VLEtBQVA7QUFDRDs7O2dDQUVrQkgsSyxFQUFPVCxPLEVBQVNFLFcsRUFBYTtBQUN4QyxVQUFFSCxJQUFGLEdBQVdVLEtBQVgsQ0FBRVYsSUFBRjtBQUFBLFVBQ0FpQixnQkFEQSxHQUNtQm5CLGdCQUFnQkcsT0FBaEIsQ0FEbkI7QUFBQSxVQUVBQyxTQUZBLEdBRVllLGdCQUZaO0FBQUEsVUFHQUosS0FIQSxHQUdRLElBQUlILEtBQUosQ0FBVVYsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUJDLFNBQXpCLEVBQW9DQyxXQUFwQyxDQUhSOzs7QUFLTixhQUFPVSxLQUFQO0FBQ0Q7OztzQ0FFd0JILEssRUFBT1QsTyxFQUFTRSxXLEVBQWE7QUFDcEQsVUFBSVUsUUFBUSxJQUFaOztBQUVNLFVBQUVLLGlCQUFGLEdBQXdCUixLQUF4QixDQUFFUSxpQkFBRjtBQUFBLFVBQ0FDLE9BREEsR0FDVWxCLFFBQVFtQixLQUFSLENBQWNGLGlCQUFkLENBRFY7OztBQUdOLFVBQUlDLE9BQUosRUFBYTtBQUNYLFlBQU1FLGFBQWF4QixNQUFNc0IsT0FBTixDQUFuQjs7QUFFQWxCLGtCQUFVb0IsVUFBVixDQUhXLENBR1c7O0FBRXRCUixnQkFBUWQsTUFBTWlCLFdBQU4sQ0FBa0JOLEtBQWxCLEVBQXlCVCxPQUF6QixFQUFrQ0UsV0FBbEMsQ0FBUjtBQUNEOztBQUVELGFBQU9VLEtBQVA7QUFDRDs7OzBDQUU0QkgsSyxFQUFPVCxPLEVBQVM7QUFDckMsVUFBRWlCLGlCQUFGLEdBQXdCUixLQUF4QixDQUFFUSxpQkFBRjtBQUFBLFVBQ0FJLFFBREEsR0FDV3JCLFFBQVFzQixNQUFSLENBQWVMLGlCQUFmLENBRFg7OztBQUdOLGFBQU9JLFFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUIxQixLQUFqQiIsImZpbGUiOiJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IGNvbnRlbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY29udGVudCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc2FuaXRpc2VDb250ZW50IH0gPSBjb250ZW50VXRpbGl0aWVzO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5zaWduaWZpY2FudCA9IHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgYXNIVE1MKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgdG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudChjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCkge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIHRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7XG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==