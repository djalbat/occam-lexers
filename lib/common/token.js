'use strict';

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var types = require('./types'),
    contentUtilities = require('../utilities/content');

var sanitiseContent = contentUtilities.sanitiseContent,
    commentType = types.commentType,
    endOfLineType = types.endOfLineType,
    whitespaceType = types.whitespaceType;

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
      var typeIncludesCommentType = this.type.includes(commentType),
          commentToken = typeIncludesCommentType; ///

      return commentToken;
    }
  }, {
    key: "isEndOfLineToken",
    value: function isEndOfLineToken() {
      var typeEndOfLineType = this.type === endOfLineType,
          endOfLineToken = typeEndOfLineType; ///

      return endOfLineToken;
    }
  }, {
    key: "isWhitespaceToken",
    value: function isWhitespaceToken() {
      var typeWhitespaceType = this.type === whitespaceType,
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
            sanitisedContent = sanitiseContent(content),
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
            var sanitisedContent = sanitiseContent(content),
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
          sanitisedContent = sanitiseContent(content),
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

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      token = _construct(Class, [type, content, innerHTML, significant].concat(remainingArguments));

      return token;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsImNvbnRlbnRVdGlsaXRpZXMiLCJzYW5pdGlzZUNvbnRlbnQiLCJjb21tZW50VHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFRva2VuIiwidHlwZUVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsInRva2VuIiwiZXF1YWxUb1Rva2VuIiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJpc1NpZ25pZmljYW50IiwibWF0Y2hlcyIsImNsYXNzTmFtZSIsImh0bWwiLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInN1YnN0cmluZyIsInNhbml0aXNlZENvbnRlbnQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiaW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCO0FBQUEsSUFDTUMsZ0JBQWdCLEdBQUdELE9BQU8sQ0FBQyxzQkFBRCxDQURoQzs7QUFHTSxJQUFFRSxlQUFGLEdBQXNCRCxnQkFBdEIsQ0FBRUMsZUFBRjtBQUFBLElBQ0VDLFdBREYsR0FDaURKLEtBRGpELENBQ0VJLFdBREY7QUFBQSxJQUNlQyxhQURmLEdBQ2lETCxLQURqRCxDQUNlSyxhQURmO0FBQUEsSUFDOEJDLGNBRDlCLEdBQ2lETixLQURqRCxDQUM4Qk0sY0FEOUI7O0lBR0FDLEs7QUFDSixpQkFBWUMsSUFBWixF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S0FIQSxjQUdZUSxLQUhaLEdBR2tCckIsSUFIbEIsRUFHd0JDLE9BSHhCLEVBR2lDQyxTQUhqQyxFQUc0Q0MsV0FINUMsU0FHNER1QixrQkFINUQ7O0FBS04sYUFBT2IsS0FBUDtBQUNEOzs7dUNBRXlCUSxLLEVBQU9wQixPLEVBQVNELEksRUFBTUcsVyxFQUFvQztBQUFBLHlDQUFwQnVCLGtCQUFvQjtBQUFwQkEsUUFBQUEsa0JBQW9CO0FBQUE7O0FBQ2xGLFVBQU1ELGdCQUFnQixHQUFHOUIsZUFBZSxDQUFDTSxPQUFELENBQXhDO0FBQUEsVUFDTUMsU0FBUyxHQUFHdUIsZ0JBRGxCO0FBQUEsVUFDb0M7QUFDOUJaLE1BQUFBLEtBQUssY0FBT1EsS0FBUCxHQUFhckIsSUFBYixFQUFtQkMsT0FBbkIsRUFBNEJDLFNBQTVCLEVBQXVDQyxXQUF2QyxTQUF1RHVCLGtCQUF2RCxFQUZYOztBQUlBLGFBQU9iLEtBQVA7QUFDRDs7Ozs7O0FBR0hpQixNQUFNLENBQUNDLE9BQVAsR0FBaUJoQyxLQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJyksXG4gICAgICBjb250ZW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2NvbnRlbnQnKTtcblxuY29uc3QgeyBzYW5pdGlzZUNvbnRlbnQgfSA9IGNvbnRlbnRVdGlsaXRpZXMsXG4gICAgICB7IGNvbW1lbnRUeXBlLCBlbmRPZkxpbmVUeXBlLCB3aGl0ZXNwYWNlVHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICB0aGlzLnNpZ25pZmljYW50ID0gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXRDb250ZW50TGVuZ3RoKCkge1xuICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRMZW5ndGg7XG4gIH1cblxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50O1xuICB9XG4gIFxuICBpc0NvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgY29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzQ29tbWVudFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGlzRW5kT2ZMaW5lVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUVuZE9mTGluZVR5cGUgPSAodGhpcy50eXBlID09PSBlbmRPZkxpbmVUeXBlKSxcbiAgICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IHR5cGVFbmRPZkxpbmVUeXBlOyAvLy9cblxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIGlzV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVXaGl0ZXNwYWNlVHlwZSA9ICh0aGlzLnR5cGUgPT09IHdoaXRlc3BhY2VUeXBlKSxcbiAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW4gPSB0eXBlV2hpdGVzcGFjZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0b2tlbikge1xuICAgIGNvbnN0IGVxdWFsVG9Ub2tlbiA9ICh0aGlzID09PSB0b2tlbik7XG5cbiAgICByZXR1cm4gZXF1YWxUb1Rva2VuO1xuICB9XG5cbiAgbWF0Y2godG9rZW4pIHtcbiAgICBjb25zdCB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgc2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICgodGhpcy50eXBlID09PSB0eXBlKSAmJiAodGhpcy5jb250ZW50ID09PSBjb250ZW50KSAmJiAodGhpcy5zaWduaWZpY2FudCA9PT0gc2lnbmlmaWNhbnQpKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyAgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgeyB0eXBlLCByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2g7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb250ZW50ID0gbWF0Y2hbMF07IC8vL1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuIl19