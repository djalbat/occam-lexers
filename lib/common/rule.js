'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array'),
    SignificantToken = require('../common/token/significant');

var Rule = function () {
  function Rule(significantTokenType, regularExpression) {
    _classCallCheck(this, Rule);

    this.significantTokenType = significantTokenType;
    this.regularExpression = regularExpression;
  }

  _createClass(Rule, [{
    key: 'getSignificantTokenType',
    value: function getSignificantTokenType() {
      return this.significantTokenType;
    }
  }, {
    key: 'getRegularExpression',
    value: function getRegularExpression() {
      return this.regularExpression;
    }
  }, {
    key: 'significantTokenPositionWithinContent',
    value: function significantTokenPositionWithinContent(content) {
      var significantTokenPosition = -1;

      var matches = content.match(this.regularExpression);

      if (matches !== null) {
        var firstMatch = arrayUtil.first(matches);

        if (firstMatch !== '') {
          significantTokenPosition = matches.index; ///
        }
      }

      return significantTokenPosition;
    }
  }, {
    key: 'significantTokenFromWithinContentAndLine',
    value: function significantTokenFromWithinContentAndLine(content, line) {
      var matches = content.match(this.regularExpression),
          firstMatch = arrayUtil.first(matches);

      content = firstMatch; ///

      var type = this.significantTokenType,
          ///
      significantToken = SignificantToken.fromContentLineAndType(content, line, type);

      return significantToken;
    }
  }], [{
    key: 'fromEntry',
    value: function fromEntry(entry) {
      var entryKeys = Object.keys(entry),
          firstEntryKey = arrayUtil.first(entryKeys),
          significantTokenType = firstEntryKey,
          ///
      regularExpressionPattern = entry[significantTokenType],
          rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);

      return rule;
    }
  }, {
    key: 'fromSignificantTokenTypeAndRegularExpressionPattern',
    value: function fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern) {
      var unicode = isUnicode(regularExpressionPattern),
          flags = unicode ? 'u' : '',
          regExp = new RegExp(regularExpressionPattern, flags),
          regularExpression = regExp,
          ///
      rule = new Rule(significantTokenType, regularExpression);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function isUnicode(regularExpressionPattern) {
  var matches = regularExpressionPattern.match(/u\{/),
      unicode = matches !== null;

  return unicode;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsIlJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsImluZGV4IiwibGluZSIsInR5cGUiLCJzaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnRMaW5lQW5kVHlwZSIsImVudHJ5IiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJydWxlIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwidW5pY29kZSIsImlzVW5pY29kZSIsImZsYWdzIiwicmVnRXhwIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsZUFBUixDQUFsQjtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSw2QkFBUixDQUR6Qjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxvQkFBWixFQUFrQ0MsaUJBQWxDLEVBQXFEO0FBQUE7O0FBQ25ELFNBQUtELG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0Q7Ozs7OENBRXlCO0FBQ3hCLGFBQU8sS0FBS0Qsb0JBQVo7QUFDRDs7OzJDQUVzQjtBQUNyQixhQUFPLEtBQUtDLGlCQUFaO0FBQ0Q7OzswREFFcUNDLE8sRUFBUztBQUM3QyxVQUFJQywyQkFBMkIsQ0FBQyxDQUFoQzs7QUFFQSxVQUFNQyxVQUFVRixRQUFRRyxLQUFSLENBQWMsS0FBS0osaUJBQW5CLENBQWhCOztBQUVBLFVBQUlHLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBTUUsYUFBYVYsVUFBVVcsS0FBVixDQUFnQkgsT0FBaEIsQ0FBbkI7O0FBRUEsWUFBSUUsZUFBZSxFQUFuQixFQUF1QjtBQUNyQkgscUNBQTJCQyxRQUFRSSxLQUFuQyxDQURxQixDQUNxQjtBQUMzQztBQUNGOztBQUVELGFBQU9MLHdCQUFQO0FBQ0Q7Ozs2REFFd0NELE8sRUFBU08sSSxFQUFNO0FBQ3RELFVBQU1MLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLSixpQkFBbkIsQ0FBaEI7QUFBQSxVQUNNSyxhQUFhVixVQUFVVyxLQUFWLENBQWdCSCxPQUFoQixDQURuQjs7QUFHQUYsZ0JBQVVJLFVBQVYsQ0FKc0QsQ0FJaEM7O0FBRXRCLFVBQU1JLE9BQU8sS0FBS1Ysb0JBQWxCO0FBQUEsVUFBd0M7QUFDbENXLHlCQUFtQmIsaUJBQWlCYyxzQkFBakIsQ0FBd0NWLE9BQXhDLEVBQWlETyxJQUFqRCxFQUF1REMsSUFBdkQsQ0FEekI7O0FBR0EsYUFBT0MsZ0JBQVA7QUFDRDs7OzhCQUVnQkUsSyxFQUFPO0FBQ3RCLFVBQU1DLFlBQVlDLE9BQU9DLElBQVAsQ0FBWUgsS0FBWixDQUFsQjtBQUFBLFVBQ01JLGdCQUFnQnJCLFVBQVVXLEtBQVYsQ0FBZ0JPLFNBQWhCLENBRHRCO0FBQUEsVUFFTWQsdUJBQXVCaUIsYUFGN0I7QUFBQSxVQUU0QztBQUN0Q0MsaUNBQTJCTCxNQUFNYixvQkFBTixDQUhqQztBQUFBLFVBSU1tQixPQUFPcEIsS0FBS3FCLG1EQUFMLENBQXlEcEIsb0JBQXpELEVBQStFa0Isd0JBQS9FLENBSmI7O0FBTUEsYUFBT0MsSUFBUDtBQUNEOzs7d0VBRTBEbkIsb0IsRUFBc0JrQix3QixFQUEwQjtBQUN6RyxVQUFNRyxVQUFVQyxVQUFVSix3QkFBVixDQUFoQjtBQUFBLFVBQ01LLFFBQVFGLFVBQVUsR0FBVixHQUFnQixFQUQ5QjtBQUFBLFVBRU1HLFNBQVMsSUFBSUMsTUFBSixDQUFXUCx3QkFBWCxFQUFxQ0ssS0FBckMsQ0FGZjtBQUFBLFVBR010QixvQkFBb0J1QixNQUgxQjtBQUFBLFVBR2tDO0FBQzVCTCxhQUFPLElBQUlwQixJQUFKLENBQVNDLG9CQUFULEVBQStCQyxpQkFBL0IsQ0FKYjs7QUFNQSxhQUFPa0IsSUFBUDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQjVCLElBQWpCOztBQUVBLFNBQVN1QixTQUFULENBQW1CSix3QkFBbkIsRUFBNkM7QUFDM0MsTUFBTWQsVUFBVWMseUJBQXlCYixLQUF6QixDQUErQixLQUEvQixDQUFoQjtBQUFBLE1BQ01nQixVQUFXakIsWUFBWSxJQUQ3Qjs7QUFHQSxTQUFPaUIsT0FBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9XG4gIFxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IC0xO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuICAgIFxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gYXJyYXlVdGlsLmZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RNYXRjaCAhPT0gJycpIHtcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uID0gbWF0Y2hlcy5pbmRleDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbjtcbiAgfVxuXG4gIHNpZ25pZmljYW50VG9rZW5Gcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBhcnJheVV0aWwuZmlyc3QobWF0Y2hlcyk7XG5cbiAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSwgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBhcnJheVV0aWwuZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXksIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXSxcbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICAgIFxuICAgIHJldHVybiBydWxlOyBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgPyAndScgOiAnJyxcbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwLCAvLy9cbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCBtYXRjaGVzID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLm1hdGNoKC91XFx7LyksXG4gICAgICAgIHVuaWNvZGUgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHVuaWNvZGU7XG59XG4iXX0=