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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgVSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcmVndWxhckV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG4gIFxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIG1hdGNoKGNvbnRlbnQpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaGVzO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHRoaXMudHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgYXNFbnRyeSgpIHtcbiAgICBjb25zdCBlbnRyeSA9IHt9LFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGAke3RoaXMucmVndWxhckV4cHJlc3Npb259YDtcblxuICAgIGVudHJ5W3RoaXMudHlwZV0gPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG5cbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2VuKFRva2VuKSB7XG4gICAgY29uc3QgeyB0eXBlLCByZWd1bGFyRXhwcmVzc2lvbiB9ID0gVG9rZW4sXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICB0eXBlID0gZmlyc3RFbnRyeUtleSwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbdHlwZV0sXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4odHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcbiAgICAgICAgXG4gICAgcmV0dXJuIHJ1bGU7IFxuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgP1xuICAgICAgICAgICAgICAgICAgICBVIDpcbiAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGZsYWdzKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ0V4cCwgLy8vXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgY29uc3QgdW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uID0gL3V7LywgLy8vXG4gICAgICAgIGluZGV4ID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLnNlYXJjaCh1bmljb2RlUmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICB1bmljb2RlID0gKGluZGV4ICE9PSAtMSk7XG5cbiAgcmV0dXJuIHVuaWNvZGU7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlJ1bGUiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJnZXRUeXBlIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuIiwibWF0Y2hlcyIsImluZGV4IiwiZmlyc3RNYXRjaCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJTaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnRBbmRUeXBlIiwiYXNFbnRyeSIsImVudHJ5IiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVRva2VuIiwiVG9rZW4iLCJydWxlIiwiZnJvbUVudHJ5IiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInVuaWNvZGUiLCJpc1VuaWNvZGUiLCJmbGFncyIsIlUiLCJFTVBUWV9TVFJJTkciLCJyZWdFeHAiLCJSZWdFeHAiLCJ1bmljb2RlUmVndWxhckV4cHJlc3Npb24iLCJzZWFyY2giXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RTt3QjtBQUVrQixHQUFXLENBQVgsVUFBVztBQUViLEdBQXFCLENBQXJCLFlBQXFCO0FBRWxCLEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7OEQ7c0M7NkQ7aUU7Ozs7d0U7Z0U7Ozs7Ozs7O0FBRTdDLEdBQUssQ0FBR0EsS0FBSyxHQUFLQyxVQUFjLGdCQUF4QkQsS0FBSztJQUVRRSxJQUFJLGlCQUFWLFFBQVE7YUFBRkEsSUFBSSxDQUNYQyxJQUFJLEVBQUVDLGlCQUFpQjttQztRQUNqQyxJQUFJLENBQUNELElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBLGlCQUFpQixDQUFDOzs7O1lBRzdDQyxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVEsQ0FBUkEsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQ0YsSUFBSTtZQUNsQixDQUFDOzs7WUFFREcsR0FBb0IsRUFBcEJBLENBQW9CO21CQUFwQkEsUUFBUSxDQUFSQSxvQkFBb0IsR0FBRyxDQUFDO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDRixpQkFBaUI7WUFDL0IsQ0FBQzs7O1lBRURHLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLENBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUNkLEdBQUcsQ0FBQ0MsZ0JBQWdCLEdBQUcsSUFBSTtnQkFFM0IsR0FBSyxDQUFDQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLElBQUks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