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
      return index;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLmpzIl0sIm5hbWVzIjpbIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFR5cGUiLCJjb21tZW50VG9rZW4iLCJ0eXBlRW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJlcXVhbFRvVG9rZW4iLCJ0b2tlbnMiLCJpbmRleCIsImluZGV4T2YiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsImlzU2lnbmlmaWNhbnQiLCJtYXRjaGVzIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLO0FBQ25CLGlCQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsU0FBM0IsRUFBc0NDLFdBQXRDLEVBQW1EO0FBQUE7O0FBQ2pELFNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0gsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUUs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OztBQUNsRixVQUFNRCxnQkFBZ0IsR0FBRyw4QkFBZ0I5QixPQUFoQixDQUF6QjtBQUFBLFVBQ01DLFNBQVMsR0FBRzZCLGdCQURsQjtBQUFBLFVBQ29DO0FBQzlCZixNQUFBQSxLQUFLLGNBQU9XLEtBQVAsR0FBYTNCLElBQWIsRUFBbUJDLE9BQW5CLEVBQTRCQyxTQUE1QixFQUF1Q0MsV0FBdkMsU0FBdUQ2QixrQkFBdkQsRUFGWDs7QUFJQSxhQUFPaEIsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNhbml0aXNlQ29udGVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29tbWVudFR5cGUsIGVuZE9mTGluZVR5cGUsIHdoaXRlc3BhY2VUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuc2lnbmlmaWNhbnQgPSBzaWduaWZpY2FudDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XG5cbiAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlRW5kT2ZMaW5lVHlwZSA9ICh0aGlzLnR5cGUgPT09IGVuZE9mTGluZVR5cGUpLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gdHlwZUVuZE9mTGluZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZVdoaXRlc3BhY2VUeXBlID0gKHRoaXMudHlwZSA9PT0gd2hpdGVzcGFjZVR5cGUpLFxuICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IHR5cGVXaGl0ZXNwYWNlVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRva2VuKSB7XG4gICAgY29uc3QgZXF1YWxUb1Rva2VuID0gKHRoaXMgPT09IHRva2VuKTtcblxuICAgIHJldHVybiBlcXVhbFRvVG9rZW47XG4gIH1cblxuICBvZkluZGV4KHRva2Vucykge1xuICAgIGNvbnN0IGluZGV4ID0gdG9rZW5zLmluZGV4T2YodGhpcyk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBtYXRjaCh0b2tlbikge1xuICAgIGNvbnN0IHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gKCh0aGlzLnR5cGUgPT09IHR5cGUpICYmICh0aGlzLmNvbnRlbnQgPT09IGNvbnRlbnQpICYmICh0aGlzLnNpZ25pZmljYW50ID09PSBzaWduaWZpY2FudCkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaCA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaDtcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnRlbnQgPSBtYXRjaFswXTsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG59XG4iXX0=