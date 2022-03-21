"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _significant = _interopRequireDefault(require("./token/significant"));
var _constants = require("./constants");
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
                var entry = {}, regularExpressionPattern = "".concat(this.regularExpression);
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
                var unicode = isUnicode(regularExpressionPattern), flags = unicode ? _constants.U : _constants.EMPTY_STRING, regExp = new RegExp(regularExpressionPattern, flags), regularExpression = regExp, rule = new Rule(type, regularExpression);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgVSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcmVndWxhckV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG4gIFxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIG1hdGNoKGNvbnRlbnQpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaGVzO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHRoaXMudHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgYXNFbnRyeSgpIHtcbiAgICBjb25zdCBlbnRyeSA9IHt9LFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGAke3RoaXMucmVndWxhckV4cHJlc3Npb259YDtcblxuICAgIGVudHJ5W3RoaXMudHlwZV0gPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG5cbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2VuKFRva2VuKSB7XG4gICAgY29uc3QgeyB0eXBlLCByZWd1bGFyRXhwcmVzc2lvbiB9ID0gVG9rZW4sXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICB0eXBlID0gZmlyc3RFbnRyeUtleSwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbdHlwZV0sXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4odHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcbiAgICAgICAgXG4gICAgcmV0dXJuIHJ1bGU7IFxuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgP1xuICAgICAgICAgICAgICAgICAgICBVIDpcbiAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGZsYWdzKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ0V4cCwgLy8vXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgY29uc3QgdW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uID0gL3V7LywgLy8vXG4gICAgICAgIGluZGV4ID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLnNlYXJjaCh1bmljb2RlUmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICB1bmljb2RlID0gKGluZGV4ICE9PSAtMSk7XG5cbiAgcmV0dXJuIHVuaWNvZGU7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlJ1bGUiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJnZXRUeXBlIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuIiwibWF0Y2hlcyIsImluZGV4IiwiZmlyc3RNYXRjaCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJTaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnRBbmRUeXBlIiwiYXNFbnRyeSIsImVudHJ5IiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVRva2VuIiwiVG9rZW4iLCJydWxlIiwiZnJvbUVudHJ5IiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInVuaWNvZGUiLCJpc1VuaWNvZGUiLCJmbGFncyIsIlUiLCJFTVBUWV9TVFJJTkciLCJyZWdFeHAiLCJSZWdFeHAiLCJ1bmljb2RlUmVndWxhckV4cHJlc3Npb24iLCJzZWFyY2giXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFK0IsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWIsSUFBQSxZQUFxQixrQ0FBckIscUJBQXFCLEVBQUE7QUFFbEIsSUFBQSxVQUFhLFdBQWIsYUFBYSxDQUFBOzs7Ozs7Ozs7OERBTjdDO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7OztBQVFBLElBQU0sQUFBRUEsS0FBSyxHQUFLQyxVQUFjLGdCQUF4QkQsS0FBSyxBQUFtQixBQUFDO0FBRWxCLElBQUEsQUFBTUUsSUFBSSxpQkE2RXRCLEFBN0VZO2FBQU1BLElBQUksQ0FDWEMsSUFBSSxFQUFFQyxpQkFBaUI7bUNBWHJDO1FBWUksSUFBSSxDQUFDRCxJQUFJLEdBQUdBLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQSxpQkFBaUIsQ0FBQzs7OztZQUc3Q0MsR0FBTyxFQUFQQSxTQUFPO1lDaEJULE9EZ0JFQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUksQ0FBQzthQUNsQjs7O1lBRURHLEdBQW9CLEVBQXBCQSxzQkFBb0I7WUNwQnRCLE9Eb0JFQSxTQUFBQSxvQkFBb0IsR0FBRztnQkFDckIsT0FBTyxJQUFJLENBQUNGLGlCQUFpQixDQUFDO2FBQy9COzs7WUFFREcsR0FBSyxFQUFMQSxPQUFLO1lDeEJQLE9Ed0JFQSxTQUFBQSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFDYixJQUFJQyxnQkFBZ0IsR0FBRyxJQUFJLEFB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