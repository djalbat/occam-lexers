"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _content = require("../utilities/content");
var _types = require("./types");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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
                var typeEndOfLineType = this.type === _types.endOfLineType, endOfLineToken = typeEndOfLineType; ///
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
                var type = Class.type, regularExpression = Class.regularExpression, matches = content.match(regularExpression);
                if (matches !== null) {
                    var index = matches.index;
                    if (index === 0) {
                        var firstMatch = first(matches);
                        content = firstMatch; ///
                        var contentLength = content.length;
                        if (contentLength > 0) {
                            var sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJzYW5pdGlzZUNvbnRlbnQiLCJjb21tZW50VHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsImZpcnN0IiwiVG9rZW4iLCJjb25zdHJ1Y3RvciIsInR5cGUiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwic2lnbmlmaWNhbnQiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsImdldElubmVySFRNTCIsImdldENvbnRlbnRMZW5ndGgiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiaXNTaWduaWZpY2FudCIsImlzQ29tbWVudFRva2VuIiwidHlwZUluY2x1ZGVzQ29tbWVudFR5cGUiLCJpbmNsdWRlcyIsImNvbW1lbnRUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJ0eXBlRW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJ0eXBlV2hpdGVzcGFjZVR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJpc0VxdWFsVG8iLCJ0b2tlbiIsImVxdWFsVG9Ub2tlbiIsIm1hdGNoIiwibWF0Y2hlcyIsImFzSFRNTCIsImNsYXNzTmFtZSIsImh0bWwiLCJjbG9uZSIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiaW5kZXgiLCJmaXJzdE1hdGNoIiwiZnJvbUNvbnRlbnQiLCJmcm9tQ29udGVudEFuZFR5cGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRVYsR0FBc0IsQ0FBdEIsUUFBc0I7QUFDSyxHQUFTLENBQVQsTUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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