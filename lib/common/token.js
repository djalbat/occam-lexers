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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiY29udGVudFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJzYW5pdGlzZUNvbnRlbnQiLCJjb21tZW50VHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlQ29tbWVudFR5cGUiLCJjb21tZW50VG9rZW4iLCJ0eXBlRW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVRva2VuIiwidHlwZVdoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJlcXVhbFRvVG9rZW4iLCJjbGFzc05hbWUiLCJodG1sIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJnZXRDb250ZW50Iiwic3Vic3RyaW5nIiwiZ2V0VHlwZSIsInNhbml0aXNlZENvbnRlbnQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiaW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUUsbUJBQW1CRixRQUFRLHNCQUFSLENBRHpCOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLFNBQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjtBQUFBLElBRUVDLGVBRkYsR0FFc0JILGdCQUZ0QixDQUVFRyxlQUZGO0FBQUEsSUFHRUMsV0FIRixHQUdpREwsS0FIakQsQ0FHRUssV0FIRjtBQUFBLElBR2VDLGFBSGYsR0FH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ZSxPQUFPQyxPQUFQLEdBQWlCN0IsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKSxcbiAgICAgIGNvbnRlbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY29udGVudCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc2FuaXRpc2VDb250ZW50IH0gPSBjb250ZW50VXRpbGl0aWVzLFxuICAgICAgeyBjb21tZW50VHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5zaWduaWZpY2FudCA9IHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgaXNDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUNvbW1lbnRUeXBlID0gKHRoaXMudHlwZSA9PT1jb21tZW50VHlwZSksXG4gICAgICAgICAgY29tbWVudFRva2VuID0gdHlwZUNvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVFbmRPZkxpbmVUeXBlID0gKHRoaXMudHlwZSA9PT0gZW5kT2ZMaW5lVHlwZSksXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSB0eXBlRW5kT2ZMaW5lVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlV2hpdGVzcGFjZVR5cGUgPSAodGhpcy50eXBlID09PSB3aGl0ZXNwYWNlVHlwZSksXG4gICAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gdHlwZVdoaXRlc3BhY2VUeXBlOyAvLy9cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc0VxdWFsVG8odG9rZW4pIHtcbiAgICBjb25zdCBlcXVhbFRvVG9rZW4gPSAodGhpcyA9PT0gdG9rZW4pO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9Ub2tlbjtcbiAgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSwgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIG1hdGNoID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IG1hdGNoO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29udGVudCA9IG1hdGNoWzBdOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==