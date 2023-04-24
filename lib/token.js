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
var first = _necessary.arrayUtilities.first;
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
                        var contentLength = content.length;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHNhbml0aXNlQ29udGVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBjb21tZW50VHlwZSwgZW5kT2ZMaW5lVHlwZSwgd2hpdGVzcGFjZVR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBzaWduaWZpY2FudCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnNpZ25pZmljYW50ID0gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XG5cbiAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlRW5kT2ZMaW5lVHlwZSA9ICh0aGlzLnR5cGUuaW5jbHVkZXMoZW5kT2ZMaW5lVHlwZSkpLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gdHlwZUVuZE9mTGluZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZVdoaXRlc3BhY2VUeXBlID0gKHRoaXMudHlwZSA9PT0gd2hpdGVzcGFjZVR5cGUpLFxuICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IHR5cGVXaGl0ZXNwYWNlVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgbWF0Y2godG9rZW4pIHtcbiAgICBjb25zdCB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgc2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICgodGhpcy50eXBlID09PSB0eXBlKSAmJiAodGhpcy5jb250ZW50ID09PSBjb250ZW50KSAmJiAodGhpcy5zaWduaWZpY2FudCA9PT0gc2lnbmlmaWNhbnQpKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgLy8vXG4gICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudCh0aGlzLmNvbnRlbnQpLFxuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3Nhbml0aXNlZENvbnRlbnR9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3M7XG5cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVG9rZW4iLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidHlwZSIsImNvbnRlbnQiLCJzaWduaWZpY2FudCIsImdldFR5cGUiLCJnZXRDb250ZW50IiwiZ2V0Q29udGVudExlbmd0aCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJpc1NpZ25pZmljYW50IiwiaXNDb21tZW50VG9rZW4iLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFR5cGUiLCJjb21tZW50VG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwidHlwZUVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUeXBlIiwiZW5kT2ZMaW5lVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwibWF0Y2giLCJ0b2tlbiIsIm1hdGNoZXMiLCJhc0hUTUwiLCJjbGFzc05hbWUiLCJzYW5pdGlzZWRDb250ZW50Iiwic2FuaXRpc2VDb250ZW50IiwiaHRtbCIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwicmVndWxhckV4cHJlc3Npb24iLCJpbmRleCIsImZpcnN0TWF0Y2giLCJmcm9tQ29udGVudCIsImZyb21Db250ZW50QW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7dUJBRUM7cUJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQs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