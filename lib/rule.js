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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgVSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcmVndWxhckV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG4gIFxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIG1hdGNoKGNvbnRlbnQpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaGVzO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHRoaXMudHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgYXNFbnRyeSgpIHtcbiAgICBjb25zdCBlbnRyeSA9IHt9LFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGAke3RoaXMucmVndWxhckV4cHJlc3Npb259YDtcblxuICAgIGVudHJ5W3RoaXMudHlwZV0gPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG5cbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2VuKFRva2VuKSB7XG4gICAgY29uc3QgeyB0eXBlLCByZWd1bGFyRXhwcmVzc2lvbiB9ID0gVG9rZW4sXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICB0eXBlID0gZmlyc3RFbnRyeUtleSwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbdHlwZV0sXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4odHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcbiAgICAgICAgXG4gICAgcmV0dXJuIHJ1bGU7IFxuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgP1xuICAgICAgICAgICAgICAgICAgICBVIDpcbiAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGZsYWdzKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ0V4cCwgLy8vXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgY29uc3QgdW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uID0gL3V7LywgLy8vXG4gICAgICAgIGluZGV4ID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLnNlYXJjaCh1bmljb2RlUmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICB1bmljb2RlID0gKGluZGV4ICE9PSAtMSk7XG5cbiAgcmV0dXJuIHVuaWNvZGU7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJSdWxlIiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2V0VHlwZSIsImdldFJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giLCJjb250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoZXMiLCJpbmRleCIsImZpcnN0TWF0Y2giLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiZnJvbUNvbnRlbnRBbmRUeXBlIiwiYXNFbnRyeSIsImVudHJ5IiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVRva2VuIiwiVG9rZW4iLCJydWxlIiwiZnJvbUVudHJ5IiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInVuaWNvZGUiLCJpc1VuaWNvZGUiLCJmbGFncyIsInJlZ0V4cCIsIlJlZ0V4cCIsInVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiIsInNlYXJjaCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBVyxDQUFYLFVBQVc7QUFFYixHQUFxQixDQUFyQixZQUFxQjtBQUVsQixHQUFhLENBQWIsVUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxHQUFLLENBQUdBLEtBQUssR0FOa0IsVUFBVyxnQkFNbENBLEtBQUs7SUFFUUMsSUFBSSxpQkFBVixRQUFRO2FBQUZBLElBQUksQ0FDWEMsSUFBSSxFQUFFQyxpQkFBaUI7O1FBQ2pDLElBQUksQ0FBQ0QsSUFBSSxHQUFHQSxJQUFJO1FBQ2hCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBLGlCQUFpQjs7OztZQUc1Q0MsR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRLENBQVJBLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUNGLElBQUk7WUFDbEIsQ0FBQzs7O1lBRURHLEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBcEJBLFFBQVEsQ0FBUkEsb0JBQW9CLEdBQUcsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9CLENBQUM7OztZQUVERyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztnQkFDZCxHQUFHLENBQUNDLGdCQUFnQixHQUFHLElBQUk7Z0JBRTNCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHRixPQUFPLENBQUNELEtBQUssQ0FBQyxJQUFJLENBQUNILGlCQUFpQjtnQkFFcEQsRUFBRSxFQUFFTSxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ3JCLEdBQUssQ0FBR0MsS0FBSyxHQUFLRCxPQUFPLENB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