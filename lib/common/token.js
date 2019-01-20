'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var types = require('./types');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    commentType = types.commentType,
    middleType = types.middleType,
    multiLineType = types.multiLineType,
    singleLineType = types.singleLineType,
    endOfLineType = types.endOfLineType,
    whitespaceType = types.whitespaceType;

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
    key: 'getContentLength',
    value: function getContentLength() {
      var contentLength = this.content.length;

      return contentLength;
    }
  }, {
    key: 'isSignificant',
    value: function isSignificant() {
      return this.significant;
    }
  }, {
    key: 'isCommentToken',
    value: function isCommentToken() {
      var typeIncludesCommentType = this.type.includes(commentType),
          commentToken = typeIncludesCommentType; ///

      return commentToken;
    }
  }, {
    key: 'isEndOfLineToken',
    value: function isEndOfLineToken() {
      var typeEndOfLineType = this.type === endOfLineType,
          endOfLineToken = typeEndOfLineType; ///

      return endOfLineToken;
    }
  }, {
    key: 'isWhitespaceToken',
    value: function isWhitespaceToken() {
      var typeWhitespaceType = this.type === whitespaceType,
          whitespaceToken = typeWhitespaceType; ///

      return whitespaceToken;
    }
  }, {
    key: 'isMiddleOfCommentToken',
    value: function isMiddleOfCommentToken() {
      var typeIncludesMiddleType = this.type.includes(middleType),
          typeIncludesCommentType = this.type.includes(commentType),
          middleOfCommentToken = typeIncludesMiddleType && typeIncludesCommentType; ///

      return middleOfCommentToken;
    }
  }, {
    key: 'isMultiLineCommentToken',
    value: function isMultiLineCommentToken() {
      var typeIncludesCommentType = this.type.includes(commentType),
          typeIncludesMultiLineType = this.type.includes(multiLineType),
          multiLineCommentToken = typeIncludesMultiLineType && typeIncludesCommentType; ///

      return multiLineCommentToken;
    }
  }, {
    key: 'isSingleLineCommentToken',
    value: function isSingleLineCommentToken() {
      var typeIncludesCommentType = this.type.includes(commentType),
          typeIncludesSingleLineType = this.type.includes(singleLineType),
          singleLineCommentToken = typeIncludesSingleLineType && typeIncludesCommentType; ///

      return singleLineCommentToken;
    }
  }, {
    key: 'isEqualTo',
    value: function isEqualTo(token) {
      var equalTo = false;

      var tokenSignificant = token.isSignificant();

      if (this.significant === tokenSignificant) {
        var tokenContent = token.getContent();

        if (this.content === tokenContent) {
          var tokenType = token.getType();

          if (this.type === tokenType) {
            equalTo = true;
          }
        }
      }

      return equalTo;
    }
  }, {
    key: 'asHTML',
    value: function asHTML() {
      var className = this.type,
          ///
      html = '<span class="' + className + '">' + this.innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(Class, startPosition, endPosition, significant) {
      var token = null;

      if (startPosition !== endPosition) {
        var content = this.getContent();

        content = content.substring(startPosition, endPosition); ///

        var type = this.getType(),
            sanitisedContent = sanitiseContent(content),
            innerHTML = sanitisedContent; ///

        token = new Class(type, content, innerHTML, significant);
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

        var type = Class.type,
            sanitisedContent = sanitiseContent(content),
            innerHTML = sanitisedContent; ///

        token = new Class(type, content, innerHTML, significant);
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

function sanitiseContent(content) {
  var sanitisedContent = content.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

  return sanitisedContent;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNvbW1lbnRUeXBlIiwibWlkZGxlVHlwZSIsIm11bHRpTGluZVR5cGUiLCJzaW5nbGVMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFRva2VuIiwidHlwZUVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsInR5cGVJbmNsdWRlc01pZGRsZVR5cGUiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbiIsInR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUiLCJtdWx0aUxpbmVDb21tZW50VG9rZW4iLCJ0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJ0b2tlbiIsImVxdWFsVG8iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlblR5cGUiLCJnZXRUeXBlIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsInBvc2l0aW9uIiwic2VhcmNoIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7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RUFBTzVCLE8sRUFBUztBQUNyQyxVQUFFa0MsaUJBQUYsR0FBd0JOLEtBQXhCLENBQUVNLGlCQUFGO0FBQUEsVUFDQUksUUFEQSxHQUNXdEMsUUFBUXVDLE1BQVIsQ0FBZUwsaUJBQWYsQ0FEWDs7O0FBR04sYUFBT0ksUUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQjNDLEtBQWpCOztBQUVBLFNBQVNtQyxlQUFULENBQXlCakMsT0FBekIsRUFBa0M7QUFDaEMsTUFBTWdDLG1CQUFtQmhDLFFBQVEwQyxPQUFSLENBQWdCLEdBQWhCLEVBQW9CLE9BQXBCLEVBQTZCQSxPQUE3QixDQUFxQyxHQUFyQyxFQUEwQyxNQUExQyxFQUFrREEsT0FBbEQsQ0FBMEQsR0FBMUQsRUFBK0QsTUFBL0QsQ0FBekI7O0FBRUEsU0FBT1YsZ0JBQVA7QUFDRCIsImZpbGUiOiJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29tbWVudFR5cGUsIG1pZGRsZVR5cGUsIG11bHRpTGluZVR5cGUsIHNpbmdsZUxpbmVUeXBlLCBlbmRPZkxpbmVUeXBlLCB3aGl0ZXNwYWNlVHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICB0aGlzLnNpZ25pZmljYW50ID0gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXRDb250ZW50TGVuZ3RoKCkge1xuICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRMZW5ndGg7XG4gIH1cblxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50O1xuICB9XG4gIFxuICBpc0NvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgY29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzQ29tbWVudFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGlzRW5kT2ZMaW5lVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUVuZE9mTGluZVR5cGUgPSAodGhpcy50eXBlID09PSBlbmRPZkxpbmVUeXBlKSxcbiAgICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IHR5cGVFbmRPZkxpbmVUeXBlOyAvLy9cblxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIGlzV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVXaGl0ZXNwYWNlVHlwZSA9ICh0aGlzLnR5cGUgPT09IHdoaXRlc3BhY2VUeXBlKSxcbiAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW4gPSB0eXBlV2hpdGVzcGFjZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIGlzTWlkZGxlT2ZDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzTWlkZGxlVHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhtaWRkbGVUeXBlKSxcbiAgICAgICAgICB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgbWlkZGxlT2ZDb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNNaWRkbGVUeXBlICYmIHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBtaWRkbGVPZkNvbW1lbnRUb2tlbjtcblxuICB9XG5cbiAgaXNNdWx0aUxpbmVDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIHR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMobXVsdGlMaW5lVHlwZSksXG4gICAgICAgICAgbXVsdGlMaW5lQ29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzTXVsdGlMaW5lVHlwZSAmJiB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gbXVsdGlMaW5lQ29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNTaW5nbGVMaW5lQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICB0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhzaW5nbGVMaW5lVHlwZSksXG4gICAgICAgICAgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc1NpbmdsZUxpbmVUeXBlICYmIHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBzaW5nbGVMaW5lQ29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRva2VuKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgICBpZiAodGhpcy5zaWduaWZpY2FudCA9PT0gdG9rZW5TaWduaWZpY2FudCkge1xuICAgICAgY29uc3QgdG9rZW5Db250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAodGhpcy5jb250ZW50ID09PSB0b2tlbkNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgdG9rZW5UeXBlID0gdG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IHRva2VuVHlwZSkge1xuICAgICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyAgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7XG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcblxuZnVuY3Rpb24gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpIHtcbiAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvJi8sJyZhbXA7JykucmVwbGFjZSgvPC8sICcmbHQ7JykucmVwbGFjZSgvPi8sICcmZ3Q7Jyk7XG5cbiAgcmV0dXJuIHNhbml0aXNlZENvbnRlbnQ7XG59XG4iXX0=