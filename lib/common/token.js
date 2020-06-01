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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLmpzIl0sIm5hbWVzIjpbIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFR5cGUiLCJjb21tZW50VG9rZW4iLCJ0eXBlRW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJlcXVhbFRvVG9rZW4iLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsImlzU2lnbmlmaWNhbnQiLCJtYXRjaGVzIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giLCJpbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7QUFDbkIsaUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxTQUEzQixFQUFzQ0MsV0FBdEMsRUFBbUQ7QUFBQTs7QUFDakQsU0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLSCxJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNRSxhQUFhLEdBQUcsS0FBS0gsT0FBTCxDQUFhSSxNQUFuQztBQUVBLGFBQU9ELGFBQVA7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLRCxXQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNRyx1QkFBdUIsR0FBRyxLQUFLTixJQUFMLENBQVVPLFFBQVYsQ0FBbUJDLGtCQUFuQixDQUFoQztBQUFBLFVBQ01DLFlBQVksR0FBR0gsdUJBRHJCLENBRGUsQ0FFK0I7O0FBRTlDLGFBQU9HLFlBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNQyxpQkFBaUIsR0FBSSxLQUFLVixJQUFMLEtBQWNXLG9CQUF6QztBQUFBLFVBQ01DLGNBQWMsR0FBR0YsaUJBRHZCLENBRGlCLENBRXlCOztBQUUxQyxhQUFPRSxjQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsa0JBQWtCLEdBQUksS0FBS2IsSUFBTCxLQUFjYyxxQkFBMUM7QUFBQSxVQUNNQyxlQUFlLEdBQUdGLGtCQUR4QixDQURrQixDQUUwQjs7QUFFNUMsYUFBT0UsZUFBUDtBQUNEOzs7OEJBRVNDLEssRUFBTztBQUNmLFVBQU1DLFlBQVksR0FBSSxTQUFTRCxLQUEvQjtBQUVBLGFBQU9DLFlBQVA7QUFDRDs7OzBCQUVLRCxLLEVBQU87QUFDWCxVQUFNaEIsSUFBSSxHQUFHZ0IsS0FBSyxDQUFDRSxPQUFOLEVBQWI7QUFBQSxVQUNNakIsT0FBTyxHQUFHZSxLQUFLLENBQUNHLFVBQU4sRUFEaEI7QUFBQSxVQUVNaEIsV0FBVyxHQUFHYSxLQUFLLENBQUNJLGFBQU4sRUFGcEI7QUFBQSxVQUdNQyxPQUFPLEdBQUssS0FBS3JCLElBQUwsS0FBY0EsSUFBZixJQUF5QixLQUFLQyxPQUFMLEtBQWlCQSxPQUExQyxJQUF1RCxLQUFLRSxXQUFMLEtBQXFCQSxXQUg3RjtBQUtBLGFBQU9rQixPQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLFNBQVMsR0FBRyxLQUFLdEIsSUFBdkI7QUFBQSxVQUE4QjtBQUN4QnVCLE1BQUFBLElBQUksMkJBQW1CRCxTQUFuQixnQkFBaUMsS0FBS3BCLFNBQXRDLFlBRFY7QUFHQSxhQUFPcUIsSUFBUDtBQUNEOzs7MEJBRUtDLEssRUFBT0MsYSxFQUFlQyxXLEVBQWF2QixXLEVBQW9DO0FBQzNFLFVBQUlhLEtBQUssR0FBRyxJQUFaOztBQUVBLFVBQUlTLGFBQWEsS0FBS0MsV0FBdEIsRUFBbUM7QUFDakMsWUFBSXpCLE9BQU8sR0FBRyxLQUFLa0IsVUFBTCxFQUFkO0FBRUFsQixRQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQzBCLFNBQVIsQ0FBa0JGLGFBQWxCLEVBQWlDQyxXQUFqQyxDQUFWLENBSGlDLENBR3lCOztBQUUxRCxZQUFNMUIsSUFBSSxHQUFHLEtBQUtrQixPQUFMLEVBQWI7QUFBQSxZQUNNVSxnQkFBZ0IsR0FBRyw4QkFBZ0IzQixPQUFoQixDQUR6QjtBQUFBLFlBRU1DLFNBQVMsR0FBRzBCLGdCQUZsQixDQUxpQyxDQU9HOztBQVBILDBDQUhvQkMsa0JBR3BCO0FBSG9CQSxVQUFBQSxrQkFHcEI7QUFBQTs7QUFTakNiLFFBQUFBLEtBQUssY0FBT1EsS0FBUCxHQUFheEIsSUFBYixFQUFtQkMsT0FBbkIsRUFBNEJDLFNBQTVCLEVBQXVDQyxXQUF2QyxTQUF1RDBCLGtCQUF2RCxFQUFMO0FBQ0Q7O0FBRUQsYUFBT2IsS0FBUDtBQUNEOzs7MEJBRVlRLEssRUFBT3ZCLE8sRUFBU0UsVyxFQUFvQztBQUMvRCxVQUFJYSxLQUFLLEdBQUcsSUFBWjtBQUQrRCxVQUd2RGhCLElBSHVELEdBRzNCd0IsS0FIMkIsQ0FHdkR4QixJQUh1RDtBQUFBLFVBR2pEOEIsaUJBSGlELEdBRzNCTixLQUgyQixDQUdqRE0saUJBSGlEO0FBQUEsVUFJekRDLEtBSnlELEdBSWpEOUIsT0FBTyxDQUFDOEIsS0FBUixDQUFjRCxpQkFBZCxDQUppRDs7QUFNL0QsVUFBSUMsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFBQSxZQUNWQyxLQURVLEdBQ0FELEtBREEsQ0FDVkMsS0FEVTs7QUFHbEIsWUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZi9CLFVBQUFBLE9BQU8sR0FBRzhCLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FEZSxDQUNLOztBQUVwQixjQUFNM0IsYUFBYSxHQUFHSCxPQUFPLENBQUNJLE1BQTlCOztBQUVBLGNBQUlELGFBQWEsR0FBRyxDQUFwQixFQUF1QjtBQUNyQixnQkFBTXdCLGdCQUFnQixHQUFHLDhCQUFnQjNCLE9BQWhCLENBQXpCO0FBQUEsZ0JBQ01DLFNBQVMsR0FBRzBCLGdCQURsQixDQURxQixDQUVlOztBQUZmLCtDQWRnQkMsa0JBY2hCO0FBZGdCQSxjQUFBQSxrQkFjaEI7QUFBQTs7QUFJckJiLFlBQUFBLEtBQUssY0FBT1EsS0FBUCxHQUFheEIsSUFBYixFQUFtQkMsT0FBbkIsRUFBNEJDLFNBQTVCLEVBQXVDQyxXQUF2QyxTQUF1RDBCLGtCQUF2RCxFQUFMO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9iLEtBQVA7QUFDRDs7O2dDQUVrQlEsSyxFQUFPdkIsTyxFQUFTRSxXLEVBQW9DO0FBQUEseUNBQXBCMEIsa0JBQW9CO0FBQXBCQSxRQUFBQSxrQkFBb0I7QUFBQTs7QUFDL0QsVUFBRTdCLElBQUYsR0FBV3dCLEtBQVgsQ0FBRXhCLElBQUY7QUFBQSxVQUNBNEIsZ0JBREEsR0FDbUIsOEJBQWdCM0IsT0FBaEIsQ0FEbkI7QUFBQSxVQUVBQyxTQUZBLEdBRVkwQixnQkFGWjtBQUFBLFVBR0FaLEtBSEEsY0FHWVEsS0FIWixHQUdrQnhCLElBSGxCLEVBR3dCQyxPQUh4QixFQUdpQ0MsU0FIakMsRUFHNENDLFdBSDVDLFNBRzREMEIsa0JBSDVEOztBQUtOLGFBQU9iLEtBQVA7QUFDRDs7O3VDQUV5QlEsSyxFQUFPdkIsTyxFQUFTRCxJLEVBQU1HLFcsRUFBb0M7QUFBQSx5Q0FBcEIwQixrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUNsRixVQUFNRCxnQkFBZ0IsR0FBRyw4QkFBZ0IzQixPQUFoQixDQUF6QjtBQUFBLFVBQ01DLFNBQVMsR0FBRzBCLGdCQURsQjtBQUFBLFVBQ29DO0FBQzlCWixNQUFBQSxLQUFLLGNBQU9RLEtBQVAsR0FBYXhCLElBQWIsRUFBbUJDLE9BQW5CLEVBQTRCQyxTQUE1QixFQUF1Q0MsV0FBdkMsU0FBdUQwQixrQkFBdkQsRUFGWDs7QUFJQSxhQUFPYixLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2FuaXRpc2VDb250ZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBjb21tZW50VHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5zaWduaWZpY2FudCA9IHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgaXNDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVFbmRPZkxpbmVUeXBlID0gKHRoaXMudHlwZSA9PT0gZW5kT2ZMaW5lVHlwZSksXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSB0eXBlRW5kT2ZMaW5lVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlV2hpdGVzcGFjZVR5cGUgPSAodGhpcy50eXBlID09PSB3aGl0ZXNwYWNlVHlwZSksXG4gICAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gdHlwZVdoaXRlc3BhY2VUeXBlOyAvLy9cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc0VxdWFsVG8odG9rZW4pIHtcbiAgICBjb25zdCBlcXVhbFRvVG9rZW4gPSAodGhpcyA9PT0gdG9rZW4pO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9Ub2tlbjtcbiAgfVxuXG4gIG1hdGNoKHRva2VuKSB7XG4gICAgY29uc3QgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoKHRoaXMudHlwZSA9PT0gdHlwZSkgJiYgKHRoaXMuY29udGVudCA9PT0gY29udGVudCkgJiYgKHRoaXMuc2lnbmlmaWNhbnQgPT09IHNpZ25pZmljYW50KSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSwgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIG1hdGNoID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IG1hdGNoO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29udGVudCA9IG1hdGNoWzBdOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbn1cbiJdfQ==