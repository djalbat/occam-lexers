"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _content = require("../utilities/content");

var _types = require("./types");

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

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
          matches = content.match(regularExpression);

      if (matches !== null) {
        var index = matches.index;

        if (index === 0) {
          var firstMatch = first(matches);
          content = firstMatch; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJUb2tlbiIsInR5cGUiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwic2lnbmlmaWNhbnQiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwidHlwZUluY2x1ZGVzQ29tbWVudFR5cGUiLCJpbmNsdWRlcyIsImNvbW1lbnRUeXBlIiwiY29tbWVudFRva2VuIiwidHlwZUVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUeXBlIiwiZW5kT2ZMaW5lVG9rZW4iLCJ0eXBlV2hpdGVzcGFjZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsInRva2VuIiwiZXF1YWxUb1Rva2VuIiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJpc1NpZ25pZmljYW50IiwibWF0Y2hlcyIsImNsYXNzTmFtZSIsImh0bWwiLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInN1YnN0cmluZyIsInNhbml0aXNlZENvbnRlbnQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiaW5kZXgiLCJmaXJzdE1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0lBRWFFLEs7QUFDbkIsaUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxTQUEzQixFQUFzQ0MsV0FBdEMsRUFBbUQ7QUFBQTs7QUFDakQsU0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLSCxJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7bUNB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QUFNRCxnQkFBZ0IsR0FBRyw4QkFBZ0IzQixPQUFoQixDQUF6QjtBQUFBLFVBQ01DLFNBQVMsR0FBRzBCLGdCQURsQjtBQUFBLFVBQ29DO0FBQzlCWixNQUFBQSxLQUFLLGNBQU9RLEtBQVAsR0FBYXhCLElBQWIsRUFBbUJDLE9BQW5CLEVBQTRCQyxTQUE1QixFQUF1Q0MsV0FBdkMsU0FBdUQwQixrQkFBdkQsRUFGWDs7QUFJQSxhQUFPYixLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHNhbml0aXNlQ29udGVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29tbWVudFR5cGUsIGVuZE9mTGluZVR5cGUsIHdoaXRlc3BhY2VUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICB0aGlzLnNpZ25pZmljYW50ID0gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXRDb250ZW50TGVuZ3RoKCkge1xuICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRMZW5ndGg7XG4gIH1cblxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50O1xuICB9XG4gIFxuICBpc0NvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgY29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzQ29tbWVudFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGlzRW5kT2ZMaW5lVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUVuZE9mTGluZVR5cGUgPSAodGhpcy50eXBlID09PSBlbmRPZkxpbmVUeXBlKSxcbiAgICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IHR5cGVFbmRPZkxpbmVUeXBlOyAvLy9cblxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIGlzV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVXaGl0ZXNwYWNlVHlwZSA9ICh0aGlzLnR5cGUgPT09IHdoaXRlc3BhY2VUeXBlKSxcbiAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW4gPSB0eXBlV2hpdGVzcGFjZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0b2tlbikge1xuICAgIGNvbnN0IGVxdWFsVG9Ub2tlbiA9ICh0aGlzID09PSB0b2tlbik7XG5cbiAgICByZXR1cm4gZXF1YWxUb1Rva2VuO1xuICB9XG5cbiAgbWF0Y2godG9rZW4pIHtcbiAgICBjb25zdCB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgc2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICgodGhpcy50eXBlID09PSB0eXBlKSAmJiAodGhpcy5jb250ZW50ID09PSBjb250ZW50KSAmJiAodGhpcy5zaWduaWZpY2FudCA9PT0gc2lnbmlmaWNhbnQpKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyAgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgeyB0eXBlLCByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IG1hdGNoZXM7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxufVxuIl19