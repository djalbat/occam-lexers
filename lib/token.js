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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
var first = _necessary.arrayUtilities.first, strlen = _necessary.stringUtilities.strlen;
var Token = /*#__PURE__*/ function() {
    function Token(type, content, significant) {
        _class_call_check(this, Token);
        this.type = type;
        this.content = content;
        this.significant = significant;
    }
    _create_class(Token, [
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
            key: "getContentLength",
            value: function getContentLength() {
                var contentLength = strlen(this.content); ///
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
            key: "match",
            value: function match(token) {
                var type = token.getType(), content = token.getContent(), significant = token.isSignificant(), matches = this.type === type && this.content === content && this.significant === significant;
                return matches;
            }
        },
        {
            key: "asHTML",
            value: function asHTML() {
                var className = this.type, sanitisedContent = (0, _content.sanitiseContent)(this.content), html = '<span class="'.concat(className, '">').concat(sanitisedContent, "</span>");
                return html;
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
                        var contentLength = content.length; ///
                        if (contentLength > 0) {
                            var type = Class.type;
                            token = _construct(Class, [
                                type,
                                content,
                                significant
                            ].concat(_to_consumable_array(remainingArguments)));
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
                var type = Class.type, token = _construct(Class, [
                    type,
                    content,
                    significant
                ].concat(_to_consumable_array(remainingArguments)));
                return token;
            }
        },
        {
            key: "fromContentAndType",
            value: function fromContentAndType(Class, content, type, significant) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                return _construct(Class, [
                    type,
                    content,
                    significant
                ].concat(_to_consumable_array(remainingArguments)));
            }
        }
    ]);
    return Token;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaW5nVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgc2FuaXRpc2VDb250ZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcbmltcG9ydCB7IGNvbW1lbnRUeXBlLCBlbmRPZkxpbmVUeXBlLCB3aGl0ZXNwYWNlVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdHJsZW4gfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBzaWduaWZpY2FudCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnNpZ25pZmljYW50ID0gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHN0cmxlbih0aGlzLmNvbnRlbnQpOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgaXNDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVFbmRPZkxpbmVUeXBlID0gKHRoaXMudHlwZS5pbmNsdWRlcyhlbmRPZkxpbmVUeXBlKSksXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSB0eXBlRW5kT2ZMaW5lVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlV2hpdGVzcGFjZVR5cGUgPSAodGhpcy50eXBlID09PSB3aGl0ZXNwYWNlVHlwZSksXG4gICAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gdHlwZVdoaXRlc3BhY2VUeXBlOyAvLy9cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBtYXRjaCh0b2tlbikge1xuICAgIGNvbnN0IHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gKCh0aGlzLnR5cGUgPT09IHR5cGUpICYmICh0aGlzLmNvbnRlbnQgPT09IGNvbnRlbnQpICYmICh0aGlzLnNpZ25pZmljYW50ID09PSBzaWduaWZpY2FudCkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAvLy9cbiAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KHRoaXMuY29udGVudCksXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7c2FuaXRpc2VkQ29udGVudH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHsgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaGVzO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7IC8vL1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3M7XG5cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUb2tlbiIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzdHJsZW4iLCJzdHJpbmdVdGlsaXRpZXMiLCJ0eXBlIiwiY29udGVudCIsInNpZ25pZmljYW50IiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJnZXRDb250ZW50TGVuZ3RoIiwiY29udGVudExlbmd0aCIsImlzU2lnbmlmaWNhbnQiLCJpc0NvbW1lbnRUb2tlbiIsInR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlIiwiaW5jbHVkZXMiLCJjb21tZW50VHlwZSIsImNvbW1lbnRUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJ0eXBlRW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwidHlwZVdoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJtYXRjaCIsInRva2VuIiwibWF0Y2hlcyIsImFzSFRNTCIsImNsYXNzTmFtZSIsInNhbml0aXNlZENvbnRlbnQiLCJzYW5pdGlzZUNvbnRlbnQiLCJodG1sIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImluZGV4IiwiZmlyc3RNYXRjaCIsImxlbmd0aCIsImZyb21Db250ZW50IiwiZnJvbUNvbnRlbnRBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSMkI7dUJBRWhCO3FCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsSUFB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