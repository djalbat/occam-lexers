'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var types = require('./types');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
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

            for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
              remainingArguments[_key3 - 3] = arguments[_key3];
            }

            token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();
          }
        }
      }

      return token;
    }
  }, {
    key: 'fromMatch',
    value: function fromMatch(Class, match, significant) {
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 3] = arguments[_key4];
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
      for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 3] = arguments[_key5];
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

        for (var _len6 = arguments.length, remainingArguments = Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
          remainingArguments[_key6 - 3] = arguments[_key6];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNvbW1lbnRUeXBlIiwiZW5kT2ZMaW5lVHlwZSIsIndoaXRlc3BhY2VUeXBlIiwiVG9rZW4iLCJ0eXBlIiwiY29udGVudCIsImlubmVySFRNTCIsInNpZ25pZmljYW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInR5cGVDb21tZW50VHlwZSIsImNvbW1lbnRUb2tlbiIsInR5cGVFbmRPZkxpbmVUeXBlIiwiZW5kT2ZMaW5lVG9rZW4iLCJ0eXBlV2hpdGVzcGFjZVR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJ0b2tlbiIsIm1hdGNoZXMiLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlblR5cGUiLCJnZXRUeXBlIiwiZXF1YWxUb1Rva2VuIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giLCJpbmRleCIsImZpcnN0TWF0Y2giLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsU0FBUixDQUFkOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjtBQUFBLElBRUVDLFdBRkYsR0FFaURILEtBRmpELENBRUVHLFdBRkY7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TWtCLE9BQU4sQ0FBbkI7O0FBRUFaLGtCQUFVZ0MsVUFBVixDQUhXLENBR1c7O0FBRWhCLFlBQUVqQyxJQUFGLEdBQVd1QixLQUFYLENBQUV2QixJQUFGO0FBQUEsWUFDQTJCLGdCQURBLEdBQ21CQyxnQkFBZ0IzQixPQUFoQixDQURuQjtBQUFBLFlBRUFDLFNBRkEsR0FFWXlCLGdCQUZaLENBTEssQ0FPeUI7O0FBUHpCLDJDQU4wQ0Usa0JBTTFDO0FBTjBDQSw0QkFNMUM7QUFBQTs7QUFTWGpCLG1EQUFZVyxLQUFaLGlCQUFrQnZCLElBQWxCLEVBQXdCQyxPQUF4QixFQUFpQ0MsU0FBakMsRUFBNENDLFdBQTVDLEdBQTREMEIsa0JBQTVEO0FBQ0Q7O0FBRUQsYUFBT2pCLEtBQVA7QUFDRDs7OzBDQUU0QlcsSyxFQUFPdEIsTyxFQUFTO0FBQ3JDLFVBQUU2QixpQkFBRixHQUF3QlAsS0FBeEIsQ0FBRU8saUJBQUY7QUFBQSxVQUNBSSxRQURBLEdBQ1dqQyxRQUFRa0MsTUFBUixDQUFlTCxpQkFBZixDQURYOzs7QUFHTixhQUFPSSxRQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCdEMsS0FBakI7O0FBRUEsU0FBUzZCLGVBQVQsQ0FBeUIzQixPQUF6QixFQUFrQztBQUNoQyxNQUFNMEIsbUJBQW1CMUIsUUFBUXFDLE9BQVIsQ0FBZ0IsR0FBaEIsRUFBb0IsT0FBcEIsRUFBNkJBLE9BQTdCLENBQXFDLEdBQXJDLEVBQTBDLE1BQTFDLEVBQWtEQSxPQUFsRCxDQUEwRCxHQUExRCxFQUErRCxNQUEvRCxDQUF6Qjs7QUFFQSxTQUFPWCxnQkFBUDtBQUNEIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb21tZW50VHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5zaWduaWZpY2FudCA9IHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgaXNDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUNvbW1lbnRUeXBlID0gKHRoaXMudHlwZSA9PT1jb21tZW50VHlwZSksXG4gICAgICAgICAgY29tbWVudFRva2VuID0gdHlwZUNvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVFbmRPZkxpbmVUeXBlID0gKHRoaXMudHlwZSA9PT0gZW5kT2ZMaW5lVHlwZSksXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSB0eXBlRW5kT2ZMaW5lVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlV2hpdGVzcGFjZVR5cGUgPSAodGhpcy50eXBlID09PSB3aGl0ZXNwYWNlVHlwZSksXG4gICAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gdHlwZVdoaXRlc3BhY2VUeXBlOyAvLy9cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBtYXRjaFRva2VuKHRva2VuKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgICBpZiAodGhpcy5zaWduaWZpY2FudCA9PT0gdG9rZW5TaWduaWZpY2FudCkge1xuICAgICAgY29uc3QgdG9rZW5Db250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAodGhpcy5jb250ZW50ID09PSB0b2tlbkNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgdG9rZW5UeXBlID0gdG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IHRva2VuVHlwZSkge1xuICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBpc0VxdWFsVG8odG9rZW4pIHtcbiAgICBjb25zdCBlcXVhbFRvVG9rZW4gPSAodGhpcyA9PT0gdG9rZW4pO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9Ub2tlbjtcbiAgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaCA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaDtcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnRlbnQgPSBtYXRjaFswXTsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXRjaChDbGFzcywgbWF0Y2gsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIGNvbnRlbnQgPSBtYXRjaFswXSwgLy8vXG4gICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHtcbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8mLywnJmFtcDsnKS5yZXBsYWNlKC88LywgJyZsdDsnKS5yZXBsYWNlKC8+LywgJyZndDsnKTtcblxuICByZXR1cm4gc2FuaXRpc2VkQ29udGVudDtcbn1cbiJdfQ==