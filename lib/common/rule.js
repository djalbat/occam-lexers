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
    key: 'significantTokenFromWithinContentAndLine',
    value: function significantTokenFromWithinContentAndLine(content, line) {
      var matches = content.match(this.regularExpression),
          firstMatch = first(matches);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuUG9zaXRpb24iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiaW5kZXgiLCJsaW5lIiwidHlwZSIsInNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudExpbmVBbmRUeXBlIiwiZW50cnkiLCJlbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RFbnRyeUtleSIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInJ1bGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJ1bmljb2RlIiwiaXNVbmljb2RlIiwiZmxhZ3MiLCJyZWdFeHAiLCJSZWdFeHAiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uIiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLG1CQUFtQkQsUUFBUSw2QkFBUixDQUF6Qjs7QUFFTSxJQUFFRSxjQUFGLEdBQXFCSCxTQUFyQixDQUFFRyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLEk7QUFDSixnQkFBWUMsb0JBQVosRUFBa0NDLGlCQUFsQyxFQUFxRDtBQUFBOztBQUNuRCxTQUFLRCxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNEOzs7OzhDQUV5QjtBQUN4QixhQUFPLEtBQUtELG9CQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQyxpQkFBWjtBQUNEOzs7MERBRXFDQyxPLEVBQVM7QUFDN0MsVUFBSUMsMkJBQTJCLENBQUMsQ0FBaEM7O0FBRUEsVUFBTUMsVUFBVUYsUUFBUUcsS0FBUixDQUFjLEtBQUtKLGlCQUFuQixDQUFoQjs7QUFFQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU1FLGFBQWFSLE1BQU1NLE9BQU4sQ0FBbkI7O0FBRUEsWUFBSUUsZUFBZSxFQUFuQixFQUF1QjtBQUNyQkgscUNBQTJCQyxRQUFRRyxLQUFuQyxDQURxQixDQUNxQjtBQUMzQztBQUNGOztBQUVELGFBQU9KLHdCQUFQO0FBQ0Q7Ozs2REFFd0NELE8sRUFBU00sSSxFQUFNO0FBQ3RELFVBQU1KLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLSixpQkFBbkIsQ0FBaEI7QUFBQSxVQUNNSyxhQUFhUixNQUFNTSxPQUFOLENBRG5COztBQUdBRixnQkFBVUksVUFBVixDQUpzRCxDQUloQzs7QUFFdEIsVUFBTUcsT0FBTyxLQUFLVCxvQkFBbEI7QUFBQSxVQUF3QztBQUNsQ1UseUJBQW1CZCxpQkFBaUJlLHNCQUFqQixDQUF3Q1QsT0FBeEMsRUFBaURNLElBQWpELEVBQXVEQyxJQUF2RCxDQUR6Qjs7QUFHQSxhQUFPQyxnQkFBUDtBQUNEOzs7OEJBRWdCRSxLLEVBQU87QUFDdEIsVUFBTUMsWUFBWUMsT0FBT0MsSUFBUCxDQUFZSCxLQUFaLENBQWxCO0FBQUEsVUFDTUksZ0JBQWdCbEIsTUFBTWUsU0FBTixDQUR0QjtBQUFBLFVBRU1iLHVCQUF1QmdCLGFBRjdCO0FBQUEsVUFFNEM7QUFDdENDLGlDQUEyQkwsTUFBTVosb0JBQU4sQ0FIakM7QUFBQSxVQUlNa0IsT0FBT25CLEtBQUtvQixtREFBTCxDQUF5RG5CLG9CQUF6RCxFQUErRWlCLHdCQUEvRSxDQUpiOztBQU1BLGFBQU9DLElBQVA7QUFDRDs7O3dFQUUwRGxCLG9CLEVBQXNCaUIsd0IsRUFBMEI7QUFDekcsVUFBTUcsVUFBVUMsVUFBVUosd0JBQVYsQ0FBaEI7QUFBQSxVQUNNSyxRQUFRRixVQUFVLEdBQVYsR0FBZ0IsRUFEOUI7QUFBQSxVQUVNRyxTQUFTLElBQUlDLE1BQUosQ0FBV1Asd0JBQVgsRUFBcUNLLEtBQXJDLENBRmY7QUFBQSxVQUdNckIsb0JBQW9Cc0IsTUFIMUI7QUFBQSxVQUdrQztBQUM1QkwsYUFBTyxJQUFJbkIsSUFBSixDQUFTQyxvQkFBVCxFQUErQkMsaUJBQS9CLENBSmI7O0FBTUEsYUFBT2lCLElBQVA7QUFDRDs7Ozs7O0FBR0hPLE9BQU9DLE9BQVAsR0FBaUIzQixJQUFqQjs7QUFFQSxTQUFTc0IsU0FBVCxDQUFtQkosd0JBQW5CLEVBQTZDO0FBQzNDLE1BQU1VLDJCQUEyQixLQUFqQztBQUFBLE1BQXdDO0FBQ2xDcEIsVUFBUVUseUJBQXlCVyxNQUF6QixDQUFnQ0Qsd0JBQWhDLENBRGQ7QUFBQSxNQUVNUCxVQUFXYixVQUFVLENBQUMsQ0FGNUI7O0FBSUEsU0FBT2EsT0FBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cbiAgXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG4gIFxuICBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uID0gLTE7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG4gICAgXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgaWYgKGZpcnN0TWF0Y2ggIT09ICcnKSB7XG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IG1hdGNoZXMuaW5kZXg7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuUG9zaXRpb247XG4gIH1cblxuICBzaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSwgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gZmlyc3RFbnRyeUtleSwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbc2lnbmlmaWNhbnRUb2tlblR5cGVdLFxuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcbiAgICAgICAgXG4gICAgcmV0dXJuIHJ1bGU7IFxuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gICAgY29uc3QgdW5pY29kZSA9IGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pLFxuICAgICAgICAgIGZsYWdzID0gdW5pY29kZSA/ICd1JyA6ICcnLFxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBmbGFncyksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHAsIC8vL1xuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gIGNvbnN0IHVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiA9IC91XFx7LywgLy8vXG4gICAgICAgIGluZGV4ID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLnNlYXJjaCh1bmljb2RlUmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICB1bmljb2RlID0gKGluZGV4ICE9PSAtMSk7XG5cbiAgcmV0dXJuIHVuaWNvZGU7XG59XG4iXX0=