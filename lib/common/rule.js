"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _significant = _interopRequireDefault(require("../common/token/significant"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first;
var Rule = /*#__PURE__*/ function() {
    function Rule(type, regularExpression) {
        _classCallCheck(this, Rule);
        this.type = type;
        this.regularExpression = regularExpression;
    }
    _createClass(Rule, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getRegularExpression",
            value: function getRegularExpression() {
                return this.regularExpression;
            }
        },
        {
            key: "match",
            value: function match(content) {
                var significantToken = null;
                var matches = content.match(this.regularExpression);
                if (matches !== null) {
                    var index = matches.index;
                    if (index === 0) {
                        var firstMatch = first(matches);
                        content = firstMatch; ///
                        var contentLength = content.length;
                        if (contentLength > 0) {
                            significantToken = _significant.default.fromContentAndType(content, this.type);
                        }
                    }
                }
                return significantToken;
            }
        },
        {
            key: "asEntry",
            value: function asEntry() {
                var entry = {
                }, regularExpressionPattern = "".concat(this.regularExpression);
                entry[this.type] = regularExpressionPattern;
                return entry;
            }
        }
    ], [
        {
            key: "fromToken",
            value: function fromToken(Token) {
                var type = Token.type, regularExpression = Token.regularExpression, rule = new Rule(type, regularExpression);
                return rule;
            }
        },
        {
            key: "fromEntry",
            value: function fromEntry(entry) {
                var entryKeys = Object.keys(entry), firstEntryKey = first(entryKeys), type = firstEntryKey, regularExpressionPattern = entry[type], rule = Rule.fromTypeAndRegularExpressionPattern(type, regularExpressionPattern);
                return rule;
            }
        },
        {
            key: "fromTypeAndRegularExpressionPattern",
            value: function fromTypeAndRegularExpressionPattern(type, regularExpressionPattern) {
                var unicode = isUnicode(regularExpressionPattern), flags = unicode ? "u" : "", regExp = new RegExp(regularExpressionPattern, flags), regularExpression = regExp, rule = new Rule(type, regularExpression);
                return rule;
            }
        }
    ]);
    return Rule;
}();
exports.default = Rule;
function isUnicode(regularExpressionPattern) {
    var unicodeRegularExpression = /u{/, index = regularExpressionPattern.search(unicodeRegularExpression), unicode = index !== -1;
    return unicode;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsIlNpZ25pZmljYW50VG9rZW4iLCJmaXJzdCIsIlJ1bGUiLCJjb25zdHJ1Y3RvciIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdldFR5cGUiLCJnZXRSZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW4iLCJtYXRjaGVzIiwiaW5kZXgiLCJmaXJzdE1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImZyb21Db250ZW50QW5kVHlwZSIsImFzRW50cnkiLCJlbnRyeSIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsImZyb21Ub2tlbiIsIlRva2VuIiwicnVsZSIsImZyb21FbnRyeSIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwiZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJ1bmljb2RlIiwiaXNVbmljb2RlIiwiZmxhZ3MiLCJyZWdFeHAiLCJSZWdFeHAiLCJ1bmljb2RlUmVndWxhckV4cHJlc3Npb24iLCJzZWFyY2giXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRWIsR0FBNkIsQ0FBN0IsWUFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUQsR0FBSyxDQUFHLEtBQUssR0FKa0IsVUFBVyxnQkFJbEMsS0FBSztJQUVRLElBQUksaUJBQVYsUUFBUTthQUFGLElBQUksQ0FDWCxJQUFJLEVBQUUsaUJBQWlCOzhCQURoQixJQUFJO1FBRXJCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCOztpQkFIekIsSUFBSTs7WUFNdkIsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FB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