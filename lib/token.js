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
                var naive = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                var contentLength = naive ? this.content.length : strlen(this.content); ///
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
                var matches = false;
                if (token !== null) {
                    var type = token.getType(), content = token.getContent(), significant = token.isSignificant();
                    matches = this.type === type && this.content === content && this.significant === significant;
                }
                return matches;
            }
        },
        {
            key: "asHTML",
            value: function asHTML() {
                var className = this.type, sanitisedContent = (0, _content.sanitiseContent)(this.content), html = '<span class="'.concat(className, '">').concat(sanitisedContent, "</span>");
                return html;
            }
        },
        {
            key: "clone",
            value: function clone() {
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var Class = this.constructor, type = this.type, content = this.content, significant = this.significant, token = _construct(Class, [
                    type,
                    content,
                    significant
                ].concat(_to_consumable_array(remainingArguments)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMsIHN0cmluZ1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgc2FuaXRpc2VDb250ZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcbmltcG9ydCB7IGNvbW1lbnRUeXBlLCBlbmRPZkxpbmVUeXBlLCB3aGl0ZXNwYWNlVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdHJsZW4gfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBzaWduaWZpY2FudCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnNpZ25pZmljYW50ID0gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldENvbnRlbnRMZW5ndGgobmFpdmUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBuYWl2ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Lmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJsZW4odGhpcy5jb250ZW50KTsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlRW5kT2ZMaW5lVHlwZSA9ICh0aGlzLnR5cGUuaW5jbHVkZXMoZW5kT2ZMaW5lVHlwZSkpLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gdHlwZUVuZE9mTGluZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZVdoaXRlc3BhY2VUeXBlID0gKHRoaXMudHlwZSA9PT0gd2hpdGVzcGFjZVR5cGUpLFxuICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IHR5cGVXaGl0ZXNwYWNlVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgbWF0Y2godG9rZW4pIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gICAgICBtYXRjaGVzID0gKCh0aGlzLnR5cGUgPT09IHR5cGUpICYmICh0aGlzLmNvbnRlbnQgPT09IGNvbnRlbnQpICYmICh0aGlzLnNpZ25pZmljYW50ID09PSBzaWduaWZpY2FudCkpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgLy8vXG4gICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudCh0aGlzLmNvbnRlbnQpLFxuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3Nhbml0aXNlZENvbnRlbnR9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB0eXBlID0gdGhpcy50eXBlLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgc2lnbmlmaWNhbnQgPSB0aGlzLnNpZ25pZmljYW50LFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHsgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaGVzO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7IC8vL1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3M7XG5cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUb2tlbiIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzdHJsZW4iLCJzdHJpbmdVdGlsaXRpZXMiLCJ0eXBlIiwiY29udGVudCIsInNpZ25pZmljYW50IiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJnZXRDb250ZW50TGVuZ3RoIiwibmFpdmUiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiaXNTaWduaWZpY2FudCIsImlzQ29tbWVudFRva2VuIiwidHlwZUluY2x1ZGVzQ29tbWVudFR5cGUiLCJpbmNsdWRlcyIsImNvbW1lbnRUeXBlIiwiY29tbWVudFRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsInR5cGVFbmRPZkxpbmVUeXBlIiwiZW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJ0eXBlV2hpdGVzcGFjZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsIm1hdGNoIiwidG9rZW4iLCJtYXRjaGVzIiwiYXNIVE1MIiwiY2xhc3NOYW1lIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsImh0bWwiLCJjbG9uZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkNsYXNzIiwiY29uc3RydWN0b3IiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImluZGV4IiwiZmlyc3RNYXRjaCIsImZyb21Db250ZW50IiwiZnJvbUNvbnRlbnRBbmRUeXBlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSMkI7dUJBRWhCO3FCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDRixBQUFFRSxTQUFXQywwQkFBZSxDQUExQkQ7QUFFTyxJQUFBLEFBQU1ILHNCQUFELEFBQUw7YUFBTUEsTUFDUEssSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7Z0NBRG5CUDtRQUVqQixJQUFJLENBQUNLLElBQUksR0FBR0E7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