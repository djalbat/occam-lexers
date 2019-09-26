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
    key: 'match',
    value: function match(content) {
      var significantToken = null;

      var match = content.match(this.regularExpression);

      if (match !== null) {
        var index = match.index;


        if (index === 0) {
          content = match[0]; ///

          var contentLength = content.length;

          if (contentLength > 0) {
            var type = this.significantTokenType; ///

            significantToken = SignificantToken.fromContentAndType(content, type);
          }
        }
      }

      return significantToken;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuIiwibWF0Y2giLCJpbmRleCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlIiwiZnJvbUNvbnRlbnRBbmRUeXBlIiwic2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uIiwibWF0Y2hlcyIsImZpcnN0TWF0Y2giLCJlbnRyeSIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwicnVsZSIsImZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInVuaWNvZGUiLCJpc1VuaWNvZGUiLCJmbGFncyIsInJlZ0V4cCIsIlJlZ0V4cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmljb2RlUmVndWxhckV4cHJlc3Npb24iLCJzZWFyY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsbUJBQW1CRCxRQUFRLDZCQUFSLENBQXpCOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsSTtBQUNKLGdCQUFZQyxvQkFBWixFQUFrQ0MsaUJBQWxDLEVBQXFEO0FBQUE7O0FBQ25ELFNBQUtELG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0Q7Ozs7OENBRXlCO0FBQ3hCLGFBQU8sS0FBS0Qsb0JBQVo7QUFDRDs7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Q3ZCLFVBQVFTLHlCQUF5QmUsTUFBekIsQ0FBZ0NELHdCQUFoQyxDQURkO0FBQUEsTUFFTVAsVUFBV2hCLFVBQVUsQ0FBQyxDQUY1Qjs7QUFJQSxTQUFPZ0IsT0FBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cbiAgXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgbWF0Y2goY29udGVudCkge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2g7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb250ZW50ID0gbWF0Y2hbMF07IC8vL1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZTsgLy8vXG5cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IC0xO1xuXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBpZiAoZmlyc3RNYXRjaCAhPT0gJycpIHtcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uID0gbWF0Y2hlcy5pbmRleDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbjtcbiAgfVxuXG4gIHNpZ25pZmljYW50VG9rZW5Gcm9tV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUsIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgYXNFbnRyeSgpIHtcbiAgICBjb25zdCBlbnRyeSA9IHt9LFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSAnJyArIHRoaXMucmVndWxhckV4cHJlc3Npb247XG5cbiAgICBlbnRyeVtzaWduaWZpY2FudFRva2VuVHlwZV0gPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG5cbiAgICByZXR1cm4gZW50cnk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRW50cnkoZW50cnkpIHtcbiAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBmaXJzdEVudHJ5S2V5LCAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyeVtzaWduaWZpY2FudFRva2VuVHlwZV0sXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgICBcbiAgICByZXR1cm4gcnVsZTsgXG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgICBjb25zdCB1bmljb2RlID0gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiksXG4gICAgICAgICAgZmxhZ3MgPSB1bmljb2RlID8gJ3UnIDogJycsXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGZsYWdzKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ0V4cCwgLy8vXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgY29uc3QgdW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uID0gL3VcXHsvLCAvLy9cbiAgICAgICAgaW5kZXggPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4uc2VhcmNoKHVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgIHVuaWNvZGUgPSAoaW5kZXggIT09IC0xKTtcblxuICByZXR1cm4gdW5pY29kZTtcbn1cbiJdfQ==