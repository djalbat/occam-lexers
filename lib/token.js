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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHNhbml0aXNlQ29udGVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBjb21tZW50VHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuc2lnbmlmaWNhbnQgPSBzaWduaWZpY2FudDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XG5cbiAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlRW5kT2ZMaW5lVHlwZSA9ICh0aGlzLnR5cGUuaW5jbHVkZXMoZW5kT2ZMaW5lVHlwZSkpLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gdHlwZUVuZE9mTGluZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZVdoaXRlc3BhY2VUeXBlID0gKHRoaXMudHlwZSA9PT0gd2hpdGVzcGFjZVR5cGUpLFxuICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IHR5cGVXaGl0ZXNwYWNlVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRva2VuKSB7XG4gICAgY29uc3QgZXF1YWxUb1Rva2VuID0gKHRoaXMgPT09IHRva2VuKTtcblxuICAgIHJldHVybiBlcXVhbFRvVG9rZW47XG4gIH1cblxuICBtYXRjaCh0b2tlbikge1xuICAgIGNvbnN0IHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gKCh0aGlzLnR5cGUgPT09IHR5cGUpICYmICh0aGlzLmNvbnRlbnQgPT09IGNvbnRlbnQpICYmICh0aGlzLnNpZ25pZmljYW50ID09PSBzaWduaWZpY2FudCkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiVG9rZW4iLCJ0eXBlIiwiY29udGVudCIsImlubmVySFRNTCIsInNpZ25pZmljYW50IiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJnZXRJbm5lckhUTUwiLCJnZXRDb250ZW50TGVuZ3RoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImlzU2lnbmlmaWNhbnQiLCJpc0NvbW1lbnRUb2tlbiIsInR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlIiwiaW5jbHVkZXMiLCJjb21tZW50VHlwZSIsImNvbW1lbnRUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJ0eXBlRW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwidHlwZVdoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJpc0VxdWFsVG8iLCJ0b2tlbiIsImVxdWFsVG9Ub2tlbiIsIm1hdGNoIiwibWF0Y2hlcyIsImFzSFRNTCIsImNsYXNzTmFtZSIsImh0bWwiLCJjbG9uZSIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiaW5kZXgiLCJmaXJzdE1hdGNoIiwiZnJvbUNvbnRlbnQi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