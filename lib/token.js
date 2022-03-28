"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _content = require("./utilities/content");
var _types = require("./types");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var first = _necessary.arrayUtilities.first;
var Token = /*#__PURE__*/ function() {
    function Token(type, content, innerHTML, significant) {
        _classCallCheck(this, Token);
        this.type = type;
        this.content = content;
        this.innerHTML = innerHTML;
        this.significant = significant;
    }
    _createClass(Token, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                return this.content;
            }
        },
        {
            key: "getInnerHTML",
            value: function getInnerHTML() {
                return this.innerHTML;
            }
        },
        {
            key: "getContentLength",
            value: function getContentLength() {
                var contentLength = this.content.length;
                return contentLength;
            }
        },
        {
            key: "isSignificant",
            value: function isSignificant() {
                return this.significant;
            }
        },
        {
            key: "isCommentToken",
            value: function isCommentToken() {
                var typeIncludesCommentType = this.type.includes(_types.commentType), commentToken = typeIncludesCommentType; ///
                return commentToken;
            }
        },
        {
            key: "isEndOfLineToken",
            value: function isEndOfLineToken() {
                var typeEndOfLineType = this.type.includes(_types.endOfLineType), endOfLineToken = typeEndOfLineType; ///
                return endOfLineToken;
            }
        },
        {
            key: "isWhitespaceToken",
            value: function isWhitespaceToken() {
                var typeWhitespaceType = this.type === _types.whitespaceType, whitespaceToken = typeWhitespaceType; ///
                return whitespaceToken;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(token) {
                var equalToToken = this === token;
                return equalToToken;
            }
        },
        {
            key: "match",
            value: function match(token) {
                var type = token.getType(), content = token.getContent(), significant = token.isSignificant(), matches = this.type === type && this.content === content && this.significant === significant;
                return matches;
            }
        },
        {
            key: "asHTML",
            value: function asHTML() {
                var className = this.type, html = "<span class=\"".concat(className, "\">").concat(this.innerHTML, "</span>");
                return html;
            }
        },
        {
            key: "clone",
            value: function clone(Class, startPosition, endPosition, significant) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var token = null;
                if (startPosition !== endPosition) {
                    var content = this.getContent();
                    content = content.substring(startPosition, endPosition); ///
                    var type = this.getType(), sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent; ///
                    token = _construct(Class, [
                        type,
                        content,
                        innerHTML,
                        significant
                    ].concat(_toConsumableArray(remainingArguments)));
                }
                return token;
            }
        }
    ], [
        {
            key: "match",
            value: function match(Class, content, significant) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var token = null;
                var regularExpression = Class.regularExpression, matches = content.match(regularExpression);
                if (matches !== null) {
                    var index = matches.index;
                    if (index === 0) {
                        var firstMatch = first(matches);
                        content = firstMatch; ///
                        var contentLength = content.length;
                        if (contentLength > 0) {
                            var type = Class.type, sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent; ///
                            token = _construct(Class, [
                                type,
                                content,
                                innerHTML,
                                significant
                            ].concat(_toConsumableArray(remainingArguments)));
                        }
                    }
                }
                return token;
            }
        },
        {
            key: "fromContent",
            value: function fromContent(Class, content, significant) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var type = Class.type, sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent, token = _construct(Class, [
                    type,
                    content,
                    innerHTML,
                    significant
                ].concat(_toConsumableArray(remainingArguments)));
                return token;
            }
        },
        {
            key: "fromContentAndType",
            value: function fromContentAndType(Class, content, type, significant) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent, token = _construct(Class, [
                    type,
                    content,
                    innerHTML,
                    significant
                ].concat(_toConsumableArray(remainingArguments)));
                return token;
            }
        }
    ]);
    return Token;
}();
exports.default = Token;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBzYW5pdGlzZUNvbnRlbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29tbWVudFR5cGUsIGVuZE9mTGluZVR5cGUsIHdoaXRlc3BhY2VUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICB0aGlzLnNpZ25pZmljYW50ID0gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXRDb250ZW50TGVuZ3RoKCkge1xuICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRMZW5ndGg7XG4gIH1cblxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50O1xuICB9XG4gIFxuICBpc0NvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgY29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzQ29tbWVudFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGlzRW5kT2ZMaW5lVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUVuZE9mTGluZVR5cGUgPSAodGhpcy50eXBlLmluY2x1ZGVzKGVuZE9mTGluZVR5cGUpKSxcbiAgICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IHR5cGVFbmRPZkxpbmVUeXBlOyAvLy9cblxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIGlzV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVXaGl0ZXNwYWNlVHlwZSA9ICh0aGlzLnR5cGUgPT09IHdoaXRlc3BhY2VUeXBlKSxcbiAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW4gPSB0eXBlV2hpdGVzcGFjZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0b2tlbikge1xuICAgIGNvbnN0IGVxdWFsVG9Ub2tlbiA9ICh0aGlzID09PSB0b2tlbik7XG5cbiAgICByZXR1cm4gZXF1YWxUb1Rva2VuO1xuICB9XG5cbiAgbWF0Y2godG9rZW4pIHtcbiAgICBjb25zdCB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgc2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICgodGhpcy50eXBlID09PSB0eXBlKSAmJiAodGhpcy5jb250ZW50ID09PSBjb250ZW50KSAmJiAodGhpcy5zaWduaWZpY2FudCA9PT0gc2lnbmlmaWNhbnQpKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyAgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IG1hdGNoZXM7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVID0gXCJ1XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiVG9rZW4iLCJ0eXBlIiwiY29udGVudCIsImlubmVySFRNTCIsInNpZ25pZmljYW50IiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJnZXRJbm5lckhUTUwiLCJnZXRDb250ZW50TGVuZ3RoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImlzU2lnbmlmaWNhbnQiLCJpc0NvbW1lbnRUb2tlbiIsInR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlIiwiaW5jbHVkZXMiLCJjb21tZW50VHlwZSIsImNvbW1lbnRUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJ0eXBlRW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwidHlwZVdoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJpc0VxdWFsVG8iLCJ0b2tlbiIsImVxdWFsVG9Ub2tlbiIsIm1hdGNoIiwibWF0Y2hlcyIsImFzSFRNTCIsImNsYXNzTmFtZSIsImh0bWwiLCJjbG9uZSIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiaW5kZXgiLCJmaXJzdE1hdGNoIiwiZnJvbUNvbnRlbnQiLCJmcm9tQ29udGVudEFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFK0IsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRVYsSUFBQSxRQUFxQixXQUFyQixxQkFBcUIsQ0FBQTtBQUNNLElBQUEsTUFBUyxXQUFULFNBQVMsQ0FBQTs7eURBTHBFO3VFQUFBOzs7Ozs7Ozs7Ozs7Ozs7O2dGQUFBOzs7Ozs7OztzQ0FBQTs7Ozs7O2lDQUFBOzs7aUVBQUE7O1NBQUE7Ozs7Ozs7OERBQUE7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozs7Ozs7OytEQUFBOzs7O0FBT0EsSUFBTSxBQUFFQSxLQUFLLEdBQUtDLFVBQWMsZ0JBQXhCRCxLQUFLLEFBQW1CLEFBQUM7QUFFbEIsSUFBQSxBQUFNRSxLQUFLLGlCQ1R2QixBRFNZO2FBQU1BLEtBQUssQ0FDWkMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsV0FBVztvQ0FWbkQ7UUFXSSxJQUFJLENBQUNILElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVyxDQUFDOzs7O1lBR2pDQyxHQUFPLEVBQVBBLFNBQU87WUVqQlQsT0ZpQkVBLFNBQUFBLE9BQU8sR0FBRztnQkFDUixPQUFPLElBQUksQ0FBQ0osSUFBSSxDQUFDO2FBQ2xCOzs7WUFFREssR0FBVSxFQUFWQSxZQUFVO1lFckJaLE9GcUJF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