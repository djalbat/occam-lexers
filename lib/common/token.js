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
    key: 'matchToken',
    value: function matchToken(token) {
      var matches = false;

      var tokenSignificant = token.isSignificant();

      if (this.significant === tokenSignificant) {
        var tokenContent = token.getContent();

        if (this.content === tokenContent) {
          var tokenType = token.getType();

          if (this.type === tokenType) {
            matches = true;
          }
        }
      }

      return matches;
    }
  }, {
    key: 'isEqualTo',
    value: function isEqualTo(token) {
      var equalToToken = this === token;

      return equalToToken;
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

        for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
          remainingArguments[_key - 4] = arguments[_key];
        }

        token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();
      }

      return token;
    }
  }], [{
    key: 'fromContentAndType',
    value: function fromContentAndType(Class, content, type, significant) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 4] = arguments[_key2];
      }

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();

      return token;
    }
  }, {
    key: 'fromMatch',
    value: function fromMatch(Class, match, significant) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 3] = arguments[_key3];
      }

      var type = Class.type,
          content = match[0],
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();


      return token;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content, significant) {
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 3] = arguments[_key4];
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

        for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
          remainingArguments[_key5 - 3] = arguments[_key5];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNvbW1lbnRUeXBlIiwibWlkZGxlVHlwZSIsIm11bHRpTGluZVR5cGUiLCJzaW5nbGVMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFRva2VuIiwidHlwZUVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsInR5cGVJbmNsdWRlc01pZGRsZVR5cGUiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbiIsInR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUiLCJtdWx0aUxpbmVDb21tZW50VG9rZW4iLCJ0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJ0b2tlbiIsIm1hdGNoZXMiLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlblR5cGUiLCJnZXRUeXBlIiwiZXF1YWxUb1Rva2VuIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm1hdGNoIiwicmVndWxhckV4cHJlc3Npb24iLCJmaXJzdE1hdGNoIiwicG9zaXRpb24iLCJzZWFyY2giLCJtb2R1bGUiLCJleHBvcnRzIiwicmVwbGFj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QixHQUFoQixFQUFvQixPQUFwQixFQUE2QkEsT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsTUFBMUMsRUFBa0RBLE9BQWxELENBQTBELEdBQTFELEVBQStELE1BQS9ELENBQXpCOztBQUVBLFNBQU9WLGdCQUFQO0FBQ0QiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbW1lbnRUeXBlLCBtaWRkbGVUeXBlLCBtdWx0aUxpbmVUeXBlLCBzaW5nbGVMaW5lVHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5zaWduaWZpY2FudCA9IHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgaXNDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVFbmRPZkxpbmVUeXBlID0gKHRoaXMudHlwZSA9PT0gZW5kT2ZMaW5lVHlwZSksXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSB0eXBlRW5kT2ZMaW5lVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlV2hpdGVzcGFjZVR5cGUgPSAodGhpcy50eXBlID09PSB3aGl0ZXNwYWNlVHlwZSksXG4gICAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gdHlwZVdoaXRlc3BhY2VUeXBlOyAvLy9cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc01pZGRsZU9mQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc01pZGRsZVR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMobWlkZGxlVHlwZSksXG4gICAgICAgICAgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIG1pZGRsZU9mQ29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzTWlkZGxlVHlwZSAmJiB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gbWlkZGxlT2ZDb21tZW50VG9rZW47XG5cbiAgfVxuXG4gIGlzTXVsdGlMaW5lQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICB0eXBlSW5jbHVkZXNNdWx0aUxpbmVUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKG11bHRpTGluZVR5cGUpLFxuICAgICAgICAgIG11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUgJiYgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIG11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGlzU2luZ2xlTGluZUNvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgdHlwZUluY2x1ZGVzU2luZ2xlTGluZVR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoc2luZ2xlTGluZVR5cGUpLFxuICAgICAgICAgIHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSAmJiB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIG1hdGNoVG9rZW4odG9rZW4pIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcblxuICAgIGlmICh0aGlzLnNpZ25pZmljYW50ID09PSB0b2tlblNpZ25pZmljYW50KSB7XG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRlbnQgPT09IHRva2VuQ29udGVudCkge1xuICAgICAgICBjb25zdCB0b2tlblR5cGUgPSB0b2tlbi5nZXRUeXBlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gdG9rZW5UeXBlKSB7XG4gICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyh0b2tlbikge1xuICAgIGNvbnN0IGVxdWFsVG9Ub2tlbiA9ICh0aGlzID09PSB0b2tlbik7XG5cbiAgICByZXR1cm4gZXF1YWxUb1Rva2VuO1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyAgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXRjaChDbGFzcywgbWF0Y2gsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIGNvbnRlbnQgPSBtYXRjaFswXSwgLy8vXG4gICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHtcbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8mLywnJmFtcDsnKS5yZXBsYWNlKC88LywgJyZsdDsnKS5yZXBsYWNlKC8+LywgJyZndDsnKTtcblxuICByZXR1cm4gc2FuaXRpc2VkQ29udGVudDtcbn1cbiJdfQ==