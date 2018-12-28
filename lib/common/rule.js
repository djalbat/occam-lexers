'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var SignificantToken = require('../common/token/significant');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

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
        var firstMatch = first(matches);

        if (firstMatch !== '') {
          significantTokenPosition = matches.index; ///
        }
      }

      return significantTokenPosition;
    }
  }, {
    key: 'significantTokenFromWithinContent',
    value: function significantTokenFromWithinContent(content) {
      var matches = content.match(this.regularExpression),
          firstMatch = first(matches);

      content = firstMatch; ///

      var type = this.significantTokenType,
          ///
      significantToken = SignificantToken.fromContentAndType(content, type);

      return significantToken;
    }
  }, {
    key: 'asEntry',
    value: function asEntry() {
      var entry = {},
          significantTokenType = this.significantTokenType,
          regularExpressionPattern = '' + this.regularExpression;

      entry[significantTokenType] = regularExpressionPattern;

      return entry;
    }
  }], [{
    key: 'fromEntry',
    value: function fromEntry(entry) {
      var entryKeys = Object.keys(entry),
          firstEntryKey = first(entryKeys),
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
  var unicodeRegularExpression = /u\{/,
      ///
  index = regularExpressionPattern.search(unicodeRegularExpression),
      unicode = index !== -1;

  return unicode;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuUG9zaXRpb24iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiaW5kZXgiLCJ0eXBlIiwic2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50QW5kVHlwZSIsImVudHJ5IiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJydWxlIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwidW5pY29kZSIsImlzVW5pY29kZSIsImZsYWdzIiwicmVnRXhwIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyIsInVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiIsInNlYXJjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxtQkFBbUJELFFBQVEsNkJBQVIsQ0FBekI7O0FBRU0sSUFBRUUsY0FBRixHQUFxQkgsU0FBckIsQ0FBRUcsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGOztJQUdBQyxJO0FBQ0osZ0JBQVlDLG9CQUFaLEVBQWtDQyxpQkFBbEMsRUFBcUQ7QUFBQTs7QUFDbkQsU0FBS0Qsb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDRDs7Ozs4Q0FFeUI7QUFDeEIsYUFBTyxLQUFLRCxvQkFBWjtBQUNEOzs7MkNBRXNCO0FBQ3JCLGFBQU8sS0FBS0MsaUJBQVo7QUFDRDs7OzBEQUVxQ0MsTyxFQUFTO0FBQzdDLFVBQUlDLDJCQUEyQixDQUFDLENBQWhDOztBQUVBLFVBQU1DLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLSixpQkFBbkIsQ0FBaEI7O0FBRUEsVUFBSUcsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFNRSxhQUFhUixNQUFNTSxPQUFOLENBQW5COztBQUVBLFlBQUlFLGVBQWUsRUFBbkIsRUFBdUI7QUFDckJILHFDQUEyQkMsUUFBUUcsS0FBbkMsQ0FEcUIsQ0FDcUI7QUFDM0M7QUFDRjs7QUFFRCxhQUFPSix3QkFBUDtBQUNEOzs7c0RBRWlDRCxPLEVBQVM7QUFDekMsVUFBTUUsVUFBVUYsUUFBUUcsS0FBUixDQUFjLEtBQUtKLGlCQUFuQixDQUFoQjtBQUFBLFVBQ01LLGFBQWFSLE1BQU1NLE9BQU4sQ0FEbkI7O0FBR0FGLGdCQUFVSSxVQUFWLENBSnlDLENBSW5COztBQUV0QixVQUFNRSxPQUFPLEtBQUtSLG9CQUFsQjtBQUFBLFVBQXdDO0FBQ2xDUyx5QkFBbUJiLGlCQUFpQmMsa0JBQWpCLENBQW9DUixPQUFwQyxFQUE2Q00sSUFBN0MsQ0FEekI7O0FBR0EsYUFBT0MsZ0JBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUUsUUFBUSxFQUFkO0FBQUEsVUFDTVgsdUJBQXVCLEtBQUtBLG9CQURsQztBQUFBLFVBRU1ZLDJCQUEyQixLQUFLLEtBQUtYLGlCQUYzQzs7QUFJQVUsWUFBTVgsb0JBQU4sSUFBOEJZLHdCQUE5Qjs7QUFFQSxhQUFPRCxLQUFQO0FBQ0Q7Ozs4QkFFZ0JBLEssRUFBTztBQUN0QixVQUFNRSxZQUFZQyxPQUFPQyxJQUFQLENBQVlKLEtBQVosQ0FBbEI7QUFBQSxVQUNNSyxnQkFBZ0JsQixNQUFNZSxTQUFOLENBRHRCO0FBQUEsVUFFTWIsdUJBQXVCZ0IsYUFGN0I7QUFBQSxVQUU0QztBQUN0Q0osaUNBQTJCRCxNQUFNWCxvQkFBTixDQUhqQztBQUFBLFVBSU1pQixPQUFPbEIsS0FBS21CLG1EQUFMLENBQXlEbEIsb0JBQXpELEVBQStFWSx3QkFBL0UsQ0FKYjs7QUFNQSxhQUFPSyxJQUFQO0FBQ0Q7Ozt3RUFFMERqQixvQixFQUFzQlksd0IsRUFBMEI7QUFDekcsVUFBTU8sVUFBVUMsVUFBVVIsd0JBQVYsQ0FBaEI7QUFBQSxVQUNNUyxRQUFRRixVQUFVLEdBQVYsR0FBZ0IsRUFEOUI7QUFBQSxVQUVNRyxTQUFTLElBQUlDLE1BQUosQ0FBV1gsd0JBQVgsRUFBcUNTLEtBQXJDLENBRmY7QUFBQSxVQUdNcEIsb0JBQW9CcUIsTUFIMUI7QUFBQSxVQUdrQztBQUM1QkwsYUFBTyxJQUFJbEIsSUFBSixDQUFTQyxvQkFBVCxFQUErQkMsaUJBQS9CLENBSmI7O0FBTUEsYUFBT2dCLElBQVA7QUFDRDs7Ozs7O0FBR0hPLE9BQU9DLE9BQVAsR0FBaUIxQixJQUFqQjs7QUFFQSxTQUFTcUIsU0FBVCxDQUFtQlIsd0JBQW5CLEVBQTZDO0FBQzNDLE1BQU1jLDJCQUEyQixLQUFqQztBQUFBLE1BQXdDO0FBQ2xDbkIsVUFBUUsseUJBQXlCZSxNQUF6QixDQUFnQ0Qsd0JBQWhDLENBRGQ7QUFBQSxNQUVNUCxVQUFXWixVQUFVLENBQUMsQ0FGNUI7O0FBSUEsU0FBT1ksT0FBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cbiAgXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG4gIFxuICBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uID0gLTE7XG5cbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGlmIChmaXJzdE1hdGNoICE9PSAnJykge1xuICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb24gPSBtYXRjaGVzLmluZGV4OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uO1xuICB9XG5cbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSwgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBhc0VudHJ5KCkge1xuICAgIGNvbnN0IGVudHJ5ID0ge30sXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9ICcnICsgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcblxuICAgIGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXSA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcblxuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXksIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXSxcbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICAgIFxuICAgIHJldHVybiBydWxlOyBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgPyAndScgOiAnJyxcbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwLCAvLy9cbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCB1bmljb2RlUmVndWxhckV4cHJlc3Npb24gPSAvdVxcey8sIC8vL1xuICAgICAgICBpbmRleCA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybi5zZWFyY2godW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgdW5pY29kZSA9IChpbmRleCAhPT0gLTEpO1xuXG4gIHJldHVybiB1bmljb2RlO1xufVxuIl19