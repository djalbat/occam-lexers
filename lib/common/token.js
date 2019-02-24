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
      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();

      return token;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content, significant) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 3] = arguments[_key2];
      }

      var type = Class.type,
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();


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

        for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          remainingArguments[_key3 - 3] = arguments[_key3];
        }

        token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNvbW1lbnRUeXBlIiwibWlkZGxlVHlwZSIsIm11bHRpTGluZVR5cGUiLCJzaW5nbGVMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFRva2VuIiwidHlwZUVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsInR5cGVJbmNsdWRlc01pZGRsZVR5cGUiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbiIsInR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUiLCJtdWx0aUxpbmVDb21tZW50VG9rZW4iLCJ0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJ0b2tlbiIsImVxdWFsVG8iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlblR5cGUiLCJnZXRUeXBlIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsInBvc2l0aW9uIiwic2VhcmNoIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcGxhY2UiXSwi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SyxDQU95Qjs7QUFQekIsMkNBTjBDRSxrQkFNMUM7QUFOMENBLDRCQU0xQztBQUFBOztBQVNYaEIsbURBQVlVLEtBQVosaUJBQWtCN0IsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDQyxTQUFqQyxFQUE0Q0MsV0FBNUMsR0FBNERnQyxrQkFBNUQ7QUFDRDs7QUFFRCxhQUFPaEIsS0FBUDtBQUNEOzs7MENBRTRCVSxLLEVBQU81QixPLEVBQVM7QUFDckMsVUFBRW1DLGlCQUFGLEdBQXdCUCxLQUF4QixDQUFFTyxpQkFBRjtBQUFBLFVBQ0FJLFFBREEsR0FDV3ZDLFFBQVF3QyxNQUFSLENBQWVMLGlCQUFmLENBRFg7OztBQUdOLGFBQU9JLFFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUI1QyxLQUFqQjs7QUFFQSxTQUFTbUMsZUFBVCxDQUF5QmpDLE9BQXpCLEVBQWtDO0FBQ2hDLE1BQU1nQyxtQkFBbUJoQyxRQUFRMkMsT0FBUixDQUFnQixHQUFoQixFQUFvQixPQUFwQixFQUE2QkEsT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsTUFBMUMsRUFBa0RBLE9BQWxELENBQTBELEdBQTFELEVBQStELE1BQS9ELENBQXpCOztBQUVBLFNBQU9YLGdCQUFQO0FBQ0QiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbW1lbnRUeXBlLCBtaWRkbGVUeXBlLCBtdWx0aUxpbmVUeXBlLCBzaW5nbGVMaW5lVHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5zaWduaWZpY2FudCA9IHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgaXNDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVFbmRPZkxpbmVUeXBlID0gKHRoaXMudHlwZSA9PT0gZW5kT2ZMaW5lVHlwZSksXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSB0eXBlRW5kT2ZMaW5lVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlV2hpdGVzcGFjZVR5cGUgPSAodGhpcy50eXBlID09PSB3aGl0ZXNwYWNlVHlwZSksXG4gICAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gdHlwZVdoaXRlc3BhY2VUeXBlOyAvLy9cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc01pZGRsZU9mQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc01pZGRsZVR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMobWlkZGxlVHlwZSksXG4gICAgICAgICAgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIG1pZGRsZU9mQ29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzTWlkZGxlVHlwZSAmJiB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gbWlkZGxlT2ZDb21tZW50VG9rZW47XG5cbiAgfVxuXG4gIGlzTXVsdGlMaW5lQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICB0eXBlSW5jbHVkZXNNdWx0aUxpbmVUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKG11bHRpTGluZVR5cGUpLFxuICAgICAgICAgIG11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUgJiYgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIG11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGlzU2luZ2xlTGluZUNvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgdHlwZUluY2x1ZGVzU2luZ2xlTGluZVR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoc2luZ2xlTGluZVR5cGUpLFxuICAgICAgICAgIHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSAmJiB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0b2tlbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gICAgaWYgKHRoaXMuc2lnbmlmaWNhbnQgPT09IHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKHRoaXMuY29udGVudCA9PT0gdG9rZW5Db250ZW50KSB7XG4gICAgICAgIGNvbnN0IHRva2VuVHlwZSA9IHRva2VuLmdldFR5cGUoKTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSB0b2tlblR5cGUpIHtcbiAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50KSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkge1xuICAgIGNvbnN0IHsgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gIHJldHVybiBzYW5pdGlzZWRDb250ZW50O1xufVxuIl19