'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var types = require('./types'),
    contentUtilities = require('../utilities/content');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    sanitiseContent = contentUtilities.sanitiseContent,
    commentType = types.commentType,
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
      var typeCommentType = this.type === commentType,
          commentToken = typeCommentType; ///

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
    key: 'isEqualTo',
    value: function isEqualTo(token) {
      var equalToToken = this === token;

      return equalToToken;
    }
  }, {
    key: 'match',
    value: function match(token) {
      var type = token.getType(),
          content = token.getContent(),
          significant = token.isSignificant(),
          matches = this.type === type && this.content === content && this.significant === significant;

      return matches;
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
    key: 'match',
    value: function match(Class, content, significant) {
      var token = null;

      var type = Class.type,
          regularExpression = Class.regularExpression,
          match = content.match(regularExpression);


      if (match !== null) {
        var index = match.index;


        if (index === 0) {
          content = match[0]; ///

          var contentLength = content.length;

          if (contentLength > 0) {
            var sanitisedContent = sanitiseContent(content),
                innerHTML = sanitisedContent; ///

            for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
              remainingArguments[_key2 - 3] = arguments[_key2];
            }

            token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();
          }
        }
      }

      return token;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content, significant) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 3] = arguments[_key3];
      }

      var type = Class.type,
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();


      return token;
    }
  }, {
    key: 'fromContentAndType',
    value: function fromContentAndType(Class, content, type, significant) {
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 4] = arguments[_key4];
      }

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();

      return token;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiY29udGVudFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJzYW5pdGlzZUNvbnRlbnQiLCJjb21tZW50VHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlQ29tbWVudFR5cGUiLCJjb21tZW50VG9rZW4iLCJ0eXBlRW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVRva2VuIiwidHlwZVdoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJlcXVhbFRvVG9rZW4iLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsImlzU2lnbmlmaWNhbnQiLCJtYXRjaGVzIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giLCJpbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsUUFBUUQsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNRSxtQkFBbUJGLFFBQVEsc0JBQVIsQ0FEekI7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosU0FBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGO0FBQUEsSUFFRUMsZUFGRixHQUVzQkgsZ0JBRnRCLENBRUVHLGVBRkY7QUFBQSxJQUdFQyxXQUhGLEdBR2lETCxLQUhqRCxDQUdF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bkIsTyxFQUFTRCxJLEVBQU1HLFcsRUFBb0M7QUFBQSx5Q0FBcEJzQixrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUNsRixVQUFNRCxtQkFBbUI3QixnQkFBZ0JNLE9BQWhCLENBQXpCO0FBQUEsVUFDTUMsWUFBWXNCLGdCQURsQjtBQUFBLFVBQ29DO0FBQzlCWixpREFBWVEsS0FBWixpQkFBa0JwQixJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUNDLFNBQWpDLEVBQTRDQyxXQUE1QyxHQUE0RHNCLGtCQUE1RCxLQUZOOztBQUlBLGFBQU9iLEtBQVA7QUFDRDs7Ozs7O0FBR0hpQixPQUFPQyxPQUFQLEdBQWlCL0IsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKSxcbiAgICAgIGNvbnRlbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY29udGVudCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc2FuaXRpc2VDb250ZW50IH0gPSBjb250ZW50VXRpbGl0aWVzLFxuICAgICAgeyBjb21tZW50VHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5zaWduaWZpY2FudCA9IHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgaXNDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUNvbW1lbnRUeXBlID0gKHRoaXMudHlwZSA9PT1jb21tZW50VHlwZSksXG4gICAgICAgICAgY29tbWVudFRva2VuID0gdHlwZUNvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVFbmRPZkxpbmVUeXBlID0gKHRoaXMudHlwZSA9PT0gZW5kT2ZMaW5lVHlwZSksXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSB0eXBlRW5kT2ZMaW5lVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlV2hpdGVzcGFjZVR5cGUgPSAodGhpcy50eXBlID09PSB3aGl0ZXNwYWNlVHlwZSksXG4gICAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gdHlwZVdoaXRlc3BhY2VUeXBlOyAvLy9cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc0VxdWFsVG8odG9rZW4pIHtcbiAgICBjb25zdCBlcXVhbFRvVG9rZW4gPSAodGhpcyA9PT0gdG9rZW4pO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9Ub2tlbjtcbiAgfVxuXG4gIG1hdGNoKHRva2VuKSB7XG4gICAgY29uc3QgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoKHRoaXMudHlwZSA9PT0gdHlwZSkgJiYgKHRoaXMuY29udGVudCA9PT0gY29udGVudCkgJiYgKHRoaXMuc2lnbmlmaWNhbnQgPT09IHNpZ25pZmljYW50KSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSwgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIG1hdGNoID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IG1hdGNoO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29udGVudCA9IG1hdGNoWzBdOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==