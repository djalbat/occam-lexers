"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Token;
    }
});
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
                var className = this.type, html = '<span class="'.concat(className, '">').concat(this.innerHTML, "</span>");
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
                    var type = this.getType(), sanitisedContent = (0, _content.sanitiseContent)(content), innerHTML = sanitisedContent; ///
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
                            var type = Class.type, sanitisedContent = (0, _content.sanitiseContent)(content), innerHTML = sanitisedContent; ///
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
                var type = Class.type, sanitisedContent = (0, _content.sanitiseContent)(content), innerHTML = sanitisedContent, token = _construct(Class, [
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
                var sanitisedContent = (0, _content.sanitiseContent)(content), innerHTML = sanitisedContent, token = _construct(Class, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHNhbml0aXNlQ29udGVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBjb21tZW50VHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuc2lnbmlmaWNhbnQgPSBzaWduaWZpY2FudDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XG5cbiAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlRW5kT2ZMaW5lVHlwZSA9ICh0aGlzLnR5cGUuaW5jbHVkZXMoZW5kT2ZMaW5lVHlwZSkpLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gdHlwZUVuZE9mTGluZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZVdoaXRlc3BhY2VUeXBlID0gKHRoaXMudHlwZSA9PT0gd2hpdGVzcGFjZVR5cGUpLFxuICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IHR5cGVXaGl0ZXNwYWNlVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRva2VuKSB7XG4gICAgY29uc3QgZXF1YWxUb1Rva2VuID0gKHRoaXMgPT09IHRva2VuKTtcblxuICAgIHJldHVybiBlcXVhbFRvVG9rZW47XG4gIH1cblxuICBtYXRjaCh0b2tlbikge1xuICAgIGNvbnN0IHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gKCh0aGlzLnR5cGUgPT09IHR5cGUpICYmICh0aGlzLmNvbnRlbnQgPT09IGNvbnRlbnQpICYmICh0aGlzLnNpZ25pZmljYW50ID09PSBzaWduaWZpY2FudCkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVG9rZW4iLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImdldFR5cGUiLCJnZXRDb250ZW50IiwiZ2V0SW5uZXJIVE1MIiwiZ2V0Q29udGVudExlbmd0aCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJpc1NpZ25pZmljYW50IiwiaXNDb21tZW50VG9rZW4iLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFR5cGUiLCJjb21tZW50VG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwidHlwZUVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUeXBlIiwiZW5kT2ZMaW5lVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwiaXNFcXVhbFRvIiwidG9rZW4iLCJlcXVhbFRvVG9rZW4iLCJtYXRjaCIsIm1hdGNoZXMiLCJhc0hUTUwiLCJjbGFzc05hbWUiLCJodG1sIiwiY2xvbmUiLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1YnN0cmluZyIsInNhbml0aXNlZENvbnRlbnQiLCJzYW5pdGlzZUNvbnRlbnQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImluZGV4IiwiZmlyc3RNYXRjaCIsImZyb21Db250ZW50IiwiZnJvbUNvbnRlbnRBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFTUUEsS0FBSzs7O3lCQVBLLFdBQVc7dUJBRVYscUJBQXFCO3FCQUNNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQU0sQUFBRUMsS0FBSyxHQUFLQyxVQUFjLGVBQUEsQ0FBeEJELEtBQUssQUFBbUIsQUFBQztBQUVsQixJQUFBLEFBQU1ELEtBQUssaUJBQVg7YUFBTUEsS0FBSyxDQUNaRyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxXQUFXOzhCQUQ5Qk4sS0FBSztRQUV0QixJQUFJLENBQUNHLElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVyxDQUFDOztpQkFMZE4sS0FBSzs7WUFReEJPLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJLENBQUM7WUFDbkIsQ0FBQzs7O1lBRURLLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHO2dCQUNYLE9BQU8sSUFBSSxDQUFDSixPQUFPLENBQUM7WUFDdEIsQ0FBQzs7O1lBRURLLEdBQVksRUFBWkEsY0FBWTttQkFBWkEsU0FBQUEsWUFBWSxHQUFHO2dCQUNiLE9BQU8sSUFBSSxDQUFDSixTQUFTLENBQUM7WUFDeEIsQ0FBQzs7O1lBRURLLEdBQWdCLEVBQWhCQSxrQkFBZ0I7bUJBQWhCQSxTQUFBQSxnQkFBZ0IsR0FBRztnQkFDakIsSUFBTUMsYUFBYSxHQUFHLElBQUksQ0FBQ1AsT0FBTyxDQUFDUSxNQUFNLEFBQUM7Z0JBRTFDLE9BQU9ELGFBQWEsQ0FBQztZQUN2QixDQUFDOzs7WUFFREUsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsT0FBTyxJQUFJLENBQUNQLFdBQVcsQ0FBQztZQUMxQixDQUFDOzs7WUFFRFEsR0FBYyxFQUFkQSxnQkFBYzttQkFBZEEsU0FBQUEsY0FBYyxHQUFHO2dCQUNmLElBQU1DLHVCQUF1QixHQUFHLElBQUksQ0FBQ1osSUFBSSxDQUFDYSxRQUFRLENBQUNDLE1BQVcsWUFBQSxDQUFDLEVBQ3pEQyxZQUFZLEdBQUdILHVCQUF1QixBQUFDLEVBQUMsR0FBRztnQkFFakQsT0FBT0csWUFBWSxDQUFDO1lBQ3RCLENBQUM7OztZQUVEQyxHQUFnQixFQUFoQkEsa0JBQWdCO21CQUFoQkEsU0FBQUEsZ0JBQWdCLEdBQUc7Z0JBQ2pCLElBQU1DLGlCQUFpQixHQUFJLElBQUksQ0FBQ2pCLElBQUksQ0FBQ2EsUUFBUSxDQUFDSyxNQUFhLGNBQUEsQ0FBQyxBQUFDLEVBQ3ZEQyxjQUFjLEdBQUdGLGlCQUFpQixBQUFDLEVBQUMsR0FBRztnQkFFN0MsT0FBT0UsY0FBYyxDQUFDO1lBQ3hCLENBQUM7OztZQUVEQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLEdBQUc7Z0JBQ2xCLElBQU1DLGtCQUFrQixHQUFJLElBQUksQ0FBQ3JCLElBQUksS0FBS3NCLE1BQWMsZUFBQSxBQUFDLEVBQ25EQyxlQUFlLEdBQUdGLGtCQUFrQixBQUFDLEVBQUMsR0FBRztnQkFFL0MsT0FBT0UsZUFBZSxDQUFDO1lBQ3pCLENBQUM7OztZQUVEQyxHQUFTLEVBQVRBLFdBQVM7bUJBQVRBLFNBQUFBLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUNmLElBQU1DLFlBQVksR0FBSSxJQUFJLEtBQUtELEtBQUssQUFBQyxBQUFDO2dCQUV0QyxPQUFPQyxZQUFZLENBQUM7WUFDdEIsQ0FBQzs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDRixLQUFLLEVBQUU7Z0JBQ1gsSUFBTXpCLElBQUksR0FBR3lCLEtBQUssQ0FBQ3JCLE9BQU8sRUFBRSxFQUN0QkgsT0FBTyxHQUFHd0IsS0FBSyxDQUFDcEIsVUFBVSxFQUFFLEVBQzVCRixXQUFXLEdBQUdzQixLQUFLLENBQUNmLGFBQWEsRUFBRSxFQUNuQ2tCLE9BQU8sR0FBSSxBQUFDLElBQUksQ0FBQzVCLElBQUksS0FBS0EsSUFBSSxJQUFNLElBQUksQ0FBQ0MsT0FBTyxLQUFLQSxPQUFPLElBQU0sSUFBSSxDQUFDRSxXQUFXLEtBQUtBLFdBQVcsQUFBQyxBQUFDLEFBQUM7Z0JBRTNHLE9BQU95QixPQUFPLENBQUM7WUFDakIsQ0FBQzs7O1lBRURDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLElBQU1DLFNBQVMsR0FBRyxJQUFJLENBQUM5QixJQUFJLEVBQ3JCK0IsSUFBSSxHQUFHLEFBQUMsZUFBYSxDQUFnQixNQUFjLENBQTVCRCxTQUFTLEVBQUMsSUFBRSxDQUFpQixDQUFBLE1BQU8sQ0FBdEIsSUFBSSxDQUFDNUIsU0FBUyxFQUFDLFNBQU8sQ0FBQyxBQUFDO2dCQUVuRSxPQUFPNkIsSUFBSSxDQUFDO1lBQ2QsQ0FBQzs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFaEMsV0FBVyxFQUF5QjtnQkFBdkIsSUFBQSxJQUFBLElBQXFCLEdBQXJCLFNBQXFCLENBQXJCLE1BQXFCLEVBQXJCLEFBQUdpQyxrQkFBa0IsR0FBckIsVUFBQSxJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFBLENBQUEsRUFBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsRUFBQSxDQUFyQjtvQkFBQSxBQUFHQSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQUFBckIsQ0FBQSxJQUFxQixDQUFBLENBQUE7Z0JBQUQsQ0FBQztnQkFDekUsSUFBSVgsS0FBSyxHQUFHLElBQUksQUFBQztnQkFFakIsSUFBSVMsYUFBYSxLQUFLQyxXQUFXLEVBQUU7b0JBQ2pDLElBQUlsQyxPQUFPLEdBQUcsSUFBSSxDQUFDSSxVQUFVLEVBQUUsQUFBQztvQkFFaENKLE9BQU8sR0FBR0EsT0FBTyxDQUFDb0MsU0FBUyxDQUFDSCxhQUFhLEVBQUVDLFdBQVcsQ0FBQyxDQUFDLENBQUUsR0FBRztvQkFFN0QsSUFBTW5DLElBQUksR0FBRyxJQUFJLENBQUNJLE9BQU8sRUFBRSxFQUNyQmtDLGdCQUFnQixHQUFHQyxJQUFBQSxRQUFlLGdCQUFBLEVBQUN0QyxPQUFPLENBQUMsRUFDM0NDLFNBQVMsR0FBR29DLGdCQUFnQixBQUFDLEVBQUMsR0FBRztvQkFFdkNiLEtBQUssR0FBRyxXQUFJUSxLQUFLLEVBQVQ7d0JBQVVqQyxJQUFJO3dCQUFFQyxPQUFPO3dCQUFFQyxTQUFTO3dCQUFFQyxXQUFXO3FCQUF3QixDQUF2RSxNQUF1RSxDQUF0QixtQkFBR2lDLGtCQUFrQixDQUFsQkEsQ0FBbUIsQ0FBQSxDQUFDO2dCQUNsRixDQUFDO2dCQUVELE9BQU9YLEtBQUssQ0FBQztZQUNmLENBQUM7Ozs7WUFFTUUsR0FBSyxFQUFMQSxPQUFLO21CQUFaLFNBQU9BLEtBQUssQ0FBQ00sS0FBSyxFQUFFaEMsT0FBTyxFQUFFRSxXQUFXLEVBQXlCO2dCQUF2QixJQUFBLElBQUEsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBckIsQUFBR2lDLGtCQUFrQixHQUFyQixVQUFBLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLElBQUEsQ0FBQSxFQUFyQixJQUFxQixHQUFyQixDQUFxQixFQUFyQixJQUFxQixHQUFyQixJQUFxQixFQUFyQixJQUFxQixFQUFBLENBQXJCO29CQUFBLEFBQUdBLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixBQUFyQixDQUFBLElBQXFCLENBQUEsQ0FBQTtnQkFBRCxDQUFDO2dCQUM3RCxJQUFJWCxLQUFLLEdBQUcsSUFBSSxBQUFDO2dCQUVqQixJQUFNLEFBQUVlLGlCQUFpQixHQUFLUCxLQUFLLENBQTNCTyxpQkFBaUIsQUFBVSxFQUM3QlosT0FBTyxHQUFHM0IsT0FBTyxDQUFDMEIsS0FBSyxDQUFDYSxpQkFBaUIsQ0FBQyxBQUFDO2dCQUVqRCxJQUFJWixPQUFPLEtBQUssSUFBSSxFQUFFO29CQUNwQixJQUFNLEFBQUVhLEtBQUssR0FBS2IsT0FBTyxDQUFqQmEsS0FBSyxBQUFZLEFBQUM7b0JBRTFCLElBQUlBLEtBQUssS0FBSyxDQUFDLEVBQUU7d0JBQ2YsSUFBTUMsVUFBVSxHQUFHNUMsS0FBSyxDQUFDOEIsT0FBTyxDQUFDLEFBQUM7d0JBRWxDM0IsT0FBTyxHQUFHeUMsVUFBVSxDQUFDLENBQUMsR0FBRzt3QkFFekIsSUFBTWxDLGFBQWEsR0FBR1AsT0FBTyxDQUFDUSxNQUFNLEFBQUM7d0JBRXJDLElBQUlELGFBQWEsR0FBRyxDQUFDLEVBQUU7NEJBQ3JCLElBQU0sQUFBRVIsSUFBSSxHQUFLaUMsS0FBSyxDQUFkakMsSUFBSSxBQUFVLEVBQ2hCc0MsZ0JBQWdCLEdBQUdDLElBQUFBLFFBQWUsZ0JBQUEsRUFBQ3RDLE9BQU8sQ0FBQyxFQUMzQ0MsU0FBUyxHQUFHb0MsZ0JBQWdCLEFBQUMsRUFBQyxHQUFHOzRCQUV2Q2IsS0FBSyxHQUFHLFdBQUlRLEtBQUssRUFBVDtnQ0FBVWpDLElBQUk7Z0NBQUVDLE9BQU87Z0NBQUVDLFNBQVM7Z0NBQUVDLFdBQVc7NkJBQXdCLENBQXZFLE1BQXVFLENBQXRCLG1CQUFHaUMsa0JBQWtCLENBQWxCQSxDQUFtQixDQUFBLENBQUM7d0JBQ2xGLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9YLEtBQUssQ0FBQztZQUNmLENBQUM7OztZQUVNa0IsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLENBQUNWLEtBQUssRUFBRWhDLE9BQU8sRUFBRUUsV0FBVyxFQUF5QjtnQkFBdkIsSUFBQSxJQUFBLElBQXFCLEdBQXJCLFNBQXFCLENBQXJCLE1BQXFCLEVBQXJCLEFBQUdpQyxrQkFBa0IsR0FBckIsVUFBQSxJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFBLENBQUEsRUFBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsRUFBQSxDQUFyQjtvQkFBQSxBQUFHQSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQUFBckIsQ0FBQSxJQUFxQixDQUFBLENBQUE7Z0JBQUQsQ0FBQztnQkFDbkUsSUFBTSxBQUFFcEMsSUFBSSxHQUFLaUMsS0FBSyxDQUFkakMsSUFBSSxBQUFVLEVBQ2hCc0MsZ0JBQWdCLEdBQUdDLElBQUFBLFFBQWUsZ0JBQUEsRUFBQ3RDLE9BQU8sQ0FBQyxFQUMzQ0MsU0FBUyxHQUFHb0MsZ0JBQWdCLEVBQzVCYixLQUFLLEdBQUcsV0FBSVEsS0FBSyxFQUFUO29CQUFVakMsSUFBSTtvQkFBRUMsT0FBTztvQkFBRUMsU0FBUztvQkFBRUMsV0FBVztpQkFBd0IsQ0FBdkUsTUFBdUUsQ0FBdEIsbUJBQUdpQyxrQkFBa0IsQ0FBbEJBLENBQW1CLENBQUEsQUFBQztnQkFFdEYsT0FBT1gsS0FBSyxDQUFDO1lBQ2YsQ0FBQzs7O1lBRU1tQixHQUFrQixFQUFsQkEsb0JBQWtCO21CQUF6QixTQUFPQSxrQkFBa0IsQ0FBQ1gsS0FBSyxFQUFFaEMsT0FBTyxFQUFFRCxJQUFJLEVBQUVHLFdBQVcsRUFBeUI7Z0JBQXZCLElBQUEsSUFBQSxJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFyQixBQUFHaUMsa0JBQWtCLEdBQXJCLFVBQUEsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBQSxDQUFBLEVBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEVBQUEsQ0FBckI7b0JBQUEsQUFBR0Esa0JBQWtCLENBQXJCLElBQXFCLEdBQXJCLENBQXFCLElBQXJCLFNBQXFCLEFBQXJCLENBQUEsSUFBcUIsQ0FBQSxDQUFBO2dCQUFELENBQUM7Z0JBQ2hGLElBQU1FLGdCQUFnQixHQUFHQyxJQUFBQSxRQUFlLGdCQUFBLEVBQUN0QyxPQUFPLENBQUMsRUFDM0NDLFNBQVMsR0FBR29DLGdCQUFnQixFQUM1QmIsS0FBSyxHQUFHLFdBQUlRLEtBQUssRUFBVDtvQkFBVWpDLElBQUk7b0JBQUVDLE9BQU87b0JBQUVDLFNBQVM7b0JBQUVDLFdBQVc7aUJBQXdCLENBQXZFLE1BQXVFLENBQXRCLG1CQUFHaUMsa0JBQWtCLENBQWxCQSxDQUFtQixDQUFBLEFBQUM7Z0JBRXRGLE9BQU9YLEtBQUssQ0FBQztZQUNmLENBQUM7OztXQXZJa0I1QixLQUFLO0NBd0l6QixFQUFBIn0=