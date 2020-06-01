"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _content = require("../utilities/content");

var _types = require("./types");

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Token = /*#__PURE__*/function () {
  function Token(type, content, innerHTML, significant) {
    _classCallCheck(this, Token);

    this.type = type;
    this.content = content;
    this.innerHTML = innerHTML;
    this.significant = significant;
  }

  _createClass(Token, [{
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      return this.content;
    }
  }, {
    key: "getInnerHTML",
    value: function getInnerHTML() {
      return this.innerHTML;
    }
  }, {
    key: "getContentLength",
    value: function getContentLength() {
      var contentLength = this.content.length;
      return contentLength;
    }
  }, {
    key: "isSignificant",
    value: function isSignificant() {
      return this.significant;
    }
  }, {
    key: "isCommentToken",
    value: function isCommentToken() {
      var typeIncludesCommentType = this.type.includes(_types.commentType),
          commentToken = typeIncludesCommentType; ///

      return commentToken;
    }
  }, {
    key: "isEndOfLineToken",
    value: function isEndOfLineToken() {
      var typeEndOfLineType = this.type === _types.endOfLineType,
          endOfLineToken = typeEndOfLineType; ///

      return endOfLineToken;
    }
  }, {
    key: "isWhitespaceToken",
    value: function isWhitespaceToken() {
      var typeWhitespaceType = this.type === _types.whitespaceType,
          whitespaceToken = typeWhitespaceType; ///

      return whitespaceToken;
    }
  }, {
    key: "isEqualTo",
    value: function isEqualTo(token) {
      var equalToToken = this === token;
      return equalToToken;
    }
  }, {
    key: "ofIndex",
    value: function ofIndex(tokens) {
      var index = tokens.indexOf(this);
    }
  }, {
    key: "match",
    value: function match(token) {
      var type = token.getType(),
          content = token.getContent(),
          significant = token.isSignificant(),
          matches = this.type === type && this.content === content && this.significant === significant;
      return matches;
    }
  }, {
    key: "asHTML",
    value: function asHTML() {
      var className = this.type,
          ///
      html = "<span class=\"".concat(className, "\">").concat(this.innerHTML, "</span>");
      return html;
    }
  }, {
    key: "clone",
    value: function clone(Class, startPosition, endPosition, significant) {
      var token = null;

      if (startPosition !== endPosition) {
        var content = this.getContent();
        content = content.substring(startPosition, endPosition); ///

        var type = this.getType(),
            sanitisedContent = (0, _content.sanitiseContent)(content),
            innerHTML = sanitisedContent; ///

        for (var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
          remainingArguments[_key - 4] = arguments[_key];
        }

        token = _construct(Class, [type, content, innerHTML, significant].concat(remainingArguments));
      }

      return token;
    }
  }], [{
    key: "match",
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
            var sanitisedContent = (0, _content.sanitiseContent)(content),
                innerHTML = sanitisedContent; ///

            for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
              remainingArguments[_key2 - 3] = arguments[_key2];
            }

            token = _construct(Class, [type, content, innerHTML, significant].concat(remainingArguments));
          }
        }
      }

      return token;
    }
  }, {
    key: "fromContent",
    value: function fromContent(Class, content, significant) {
      for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 3] = arguments[_key3];
      }

      var type = Class.type,
          sanitisedContent = (0, _content.sanitiseContent)(content),
          innerHTML = sanitisedContent,
          token = _construct(Class, [type, content, innerHTML, significant].concat(remainingArguments));

      return token;
    }
  }, {
    key: "fromContentAndType",
    value: function fromContentAndType(Class, content, type, significant) {
      for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 4] = arguments[_key4];
      }

      var sanitisedContent = (0, _content.sanitiseContent)(content),
          innerHTML = sanitisedContent,
          ///
      token = _construct(Class, [type, content, innerHTML, significant].concat(remainingArguments));

      return token;
    }
  }]);

  return Token;
}();

exports["default"] = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLmpzIl0sIm5hbWVzIjpbIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFR5cGUiLCJjb21tZW50VG9rZW4iLCJ0eXBlRW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJlcXVhbFRvVG9rZW4iLCJ0b2tlbnMiLCJpbmRleCIsImluZGV4T2YiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsImlzU2lnbmlmaWNhbnQiLCJtYXRjaGVzIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLO0FBQ25CLGlCQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsU0FBM0IsRUFBc0NDLFdBQXRDLEVBQW1EO0FBQUE7O0FBQ2pELFNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0gsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUUs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QUFnQixHQUFHLDhCQUFnQjlCLE9BQWhCLENBQXpCO0FBQUEsVUFDTUMsU0FBUyxHQUFHNkIsZ0JBRGxCO0FBQUEsVUFDb0M7QUFDOUJmLE1BQUFBLEtBQUssY0FBT1csS0FBUCxHQUFhM0IsSUFBYixFQUFtQkMsT0FBbkIsRUFBNEJDLFNBQTVCLEVBQXVDQyxXQUF2QyxTQUF1RDZCLGtCQUF2RCxFQUZYOztBQUlBLGFBQU9oQixLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2FuaXRpc2VDb250ZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBjb21tZW50VHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5zaWduaWZpY2FudCA9IHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgaXNDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVFbmRPZkxpbmVUeXBlID0gKHRoaXMudHlwZSA9PT0gZW5kT2ZMaW5lVHlwZSksXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSB0eXBlRW5kT2ZMaW5lVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlV2hpdGVzcGFjZVR5cGUgPSAodGhpcy50eXBlID09PSB3aGl0ZXNwYWNlVHlwZSksXG4gICAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gdHlwZVdoaXRlc3BhY2VUeXBlOyAvLy9cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc0VxdWFsVG8odG9rZW4pIHtcbiAgICBjb25zdCBlcXVhbFRvVG9rZW4gPSAodGhpcyA9PT0gdG9rZW4pO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9Ub2tlbjtcbiAgfVxuXG4gIG9mSW5kZXgodG9rZW5zKSB7XG4gICAgY29uc3QgaW5kZXggPSB0b2tlbnMuaW5kZXhPZih0aGlzKTtcbiAgfVxuXG4gIG1hdGNoKHRva2VuKSB7XG4gICAgY29uc3QgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoKHRoaXMudHlwZSA9PT0gdHlwZSkgJiYgKHRoaXMuY29udGVudCA9PT0gY29udGVudCkgJiYgKHRoaXMuc2lnbmlmaWNhbnQgPT09IHNpZ25pZmljYW50KSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSwgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIG1hdGNoID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IG1hdGNoO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29udGVudCA9IG1hdGNoWzBdOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbn1cbiJdfQ==