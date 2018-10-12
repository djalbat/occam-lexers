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
    value: function asHTML(filePath) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNvbW1lbnRUeXBlIiwibWlkZGxlVHlwZSIsIm11bHRpTGluZVR5cGUiLCJzaW5nbGVMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFRva2VuIiwidHlwZUVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsInR5cGVJbmNsdWRlc01pZGRsZVR5cGUiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbiIsInR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUiLCJtdWx0aUxpbmVDb21tZW50VG9rZW4iLCJ0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJ0b2tlbiIsImVxdWFsVG8iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlblR5cGUiLCJnZXRUeXBlIiwiZmlsZVBhdGgiLCJjbGFzc05hbWUiLCJodG1sIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJzdWJzdHJpbmciLCJzYW5pdGlzZWRDb250ZW50Iiwic2FuaXRpc2VDb250ZW50IiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwicG9zaXRpb24iLCJzZWFyY2giLCJtb2R1bGUiLCJleHBvcnRzIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6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UDtBQUNEOzs7MENBRTRCVyxLLEVBQU83QixPLEVBQVM7QUFDckMsVUFBRW1DLGlCQUFGLEdBQXdCTixLQUF4QixDQUFFTSxpQkFBRjtBQUFBLFVBQ0FJLFFBREEsR0FDV3ZDLFFBQVF3QyxNQUFSLENBQWVMLGlCQUFmLENBRFg7OztBQUdOLGFBQU9JLFFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUI1QyxLQUFqQjs7QUFFQSxTQUFTb0MsZUFBVCxDQUF5QmxDLE9BQXpCLEVBQWtDO0FBQ2hDLE1BQU1pQyxtQkFBbUJqQyxRQUFRMkMsT0FBUixDQUFnQixHQUFoQixFQUFvQixPQUFwQixFQUE2QkEsT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsTUFBMUMsRUFBa0RBLE9BQWxELENBQTBELEdBQTFELEVBQStELE1BQS9ELENBQXpCOztBQUVBLFNBQU9WLGdCQUFQO0FBQ0QiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbW1lbnRUeXBlLCBtaWRkbGVUeXBlLCBtdWx0aUxpbmVUeXBlLCBzaW5nbGVMaW5lVHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5zaWduaWZpY2FudCA9IHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgaXNDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVFbmRPZkxpbmVUeXBlID0gKHRoaXMudHlwZSA9PT0gZW5kT2ZMaW5lVHlwZSksXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSB0eXBlRW5kT2ZMaW5lVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlV2hpdGVzcGFjZVR5cGUgPSAodGhpcy50eXBlID09PSB3aGl0ZXNwYWNlVHlwZSksXG4gICAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gdHlwZVdoaXRlc3BhY2VUeXBlOyAvLy9cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc01pZGRsZU9mQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc01pZGRsZVR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMobWlkZGxlVHlwZSksXG4gICAgICAgICAgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIG1pZGRsZU9mQ29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzTWlkZGxlVHlwZSAmJiB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gbWlkZGxlT2ZDb21tZW50VG9rZW47XG5cbiAgfVxuXG4gIGlzTXVsdGlMaW5lQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICB0eXBlSW5jbHVkZXNNdWx0aUxpbmVUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKG11bHRpTGluZVR5cGUpLFxuICAgICAgICAgIG11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUgJiYgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIG11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGlzU2luZ2xlTGluZUNvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgdHlwZUluY2x1ZGVzU2luZ2xlTGluZVR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoc2luZ2xlTGluZVR5cGUpLFxuICAgICAgICAgIHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSAmJiB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0b2tlbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gICAgaWYgKHRoaXMuc2lnbmlmaWNhbnQgPT09IHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKHRoaXMuY29udGVudCA9PT0gdG9rZW5Db250ZW50KSB7XG4gICAgICAgIGNvbnN0IHRva2VuVHlwZSA9IHRva2VuLmdldFR5cGUoKTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSB0b2tlblR5cGUpIHtcbiAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgYXNIVE1MKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyAgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7XG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcblxuZnVuY3Rpb24gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpIHtcbiAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvJi8sJyZhbXA7JykucmVwbGFjZSgvPC8sICcmbHQ7JykucmVwbGFjZSgvPi8sICcmZ3Q7Jyk7XG5cbiAgcmV0dXJuIHNhbml0aXNlZENvbnRlbnQ7XG59XG4iXX0=