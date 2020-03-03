'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var necessary = require('necessary');

var SignificantToken = require('../common/token/significant');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var Rule = /*#__PURE__*/function () {
  function Rule(type, regularExpression) {
    _classCallCheck(this, Rule);

    this.type = type;
    this.regularExpression = regularExpression;
  }

  _createClass(Rule, [{
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "getRegularExpression",
    value: function getRegularExpression() {
      return this.regularExpression;
    }
  }, {
    key: "match",
    value: function match(content) {
      var significantToken = null;
      var match = content.match(this.regularExpression);

      if (match !== null) {
        var index = match.index;

        if (index === 0) {
          content = match[0]; ///

          var contentLength = content.length;

          if (contentLength > 0) {
            significantToken = SignificantToken.fromContentAndType(content, this.type);
          }
        }
      }

      return significantToken;
    }
  }, {
    key: "asEntry",
    value: function asEntry() {
      var entry = {},
          regularExpressionPattern = "".concat(this.regularExpression);
      entry[this.type] = regularExpressionPattern;
      return entry;
    }
  }], [{
    key: "fromToken",
    value: function fromToken(Token) {
      var type = Token.type,
          regularExpression = Token.regularExpression,
          rule = new Rule(type, regularExpression);
      return rule;
    }
  }, {
    key: "fromEntry",
    value: function fromEntry(entry) {
      var entryKeys = Object.keys(entry),
          firstEntryKey = first(entryKeys),
          type = firstEntryKey,
          ///
      regularExpressionPattern = entry[type],
          rule = Rule.fromTypeAndRegularExpressionPattern(type, regularExpressionPattern);
      return rule;
    }
  }, {
    key: "fromTypeAndRegularExpressionPattern",
    value: function fromTypeAndRegularExpressionPattern(type, regularExpressionPattern) {
      var unicode = isUnicode(regularExpressionPattern),
          flags = unicode ? 'u' : '',
          regExp = new RegExp(regularExpressionPattern, flags),
          regularExpression = regExp,
          ///
      rule = new Rule(type, regularExpression);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUnVsZSIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuIiwibWF0Y2giLCJpbmRleCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJlbnRyeSIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsIlRva2VuIiwicnVsZSIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwiZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJ1bmljb2RlIiwiaXNVbmljb2RlIiwiZmxhZ3MiLCJyZWdFeHAiLCJSZWdFeHAiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uIiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXpCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHRCxPQUFPLENBQUMsNkJBQUQsQ0FBaEM7O0FBRU0sSUFBRUUsY0FBRixHQUFxQkgsU0FBckIsQ0FBRUcsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGOztJQUdBQyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLGlCQUFsQixFQUFxQztBQUFBOztBQUNuQyxTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7OzJDQUVzQjtBQUNyQixhQUFPLEtBQUtDLGlCQUFaO0FBQ0Q7OzswQkFFS0MsTyxFQUFTO0FBQ2IsVUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7QUFFQSxVQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0UsS0FBUixDQUFjLEtBQUtILGlCQUFuQixDQUFkOztBQUVBLFVBQUlHLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQUEsWUFDVkMsS0FEVSxHQUNBRCxLQURBLENBQ1ZDLEtBRFU7O0FBR2xCLFlBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZILFVBQUFBLE9BQU8sR0FBR0UsS0FBSyxDQUFDLENBQUQsQ0FBZixDQURlLENBQ0s7O0FBRXBCLGNBQU1FLGFBQWEsR0FBR0osT0FBTyxDQUFDSyxNQUE5Qjs7QUFFQSxjQUFJRCxhQUFhLEdBQUcsQ0FBcEIsRUFBdUI7QUFDckJILFlBQUFBLGdCQUFnQixHQUFHUCxnQkFBZ0IsQ0FBQ1ksa0JBQWpCLENBQW9DTixPQUFwQyxFQUE2QyxLQUFLRixJQUFsRCxDQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPRyxnQkFBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFNTSxLQUFLLEdBQUcsRUFBZDtBQUFBLFVBQ01DLHdCQUF3QixhQUFNLEtBQUtULGlCQUFYLENBRDlCO0FBR0FRLE1BQUFBLEtBQUssQ0FBQyxLQUFLVCxJQUFOLENBQUwsR0FBbUJVLHdCQUFuQjtBQUVBLGFBQU9ELEtBQVA7QUFDRDs7OzhCQUVnQkUsSyxFQUFPO0FBQUEsVUFDZFgsSUFEYyxHQUNjVyxLQURkLENBQ2RYLElBRGM7QUFBQSxVQUNSQyxpQkFEUSxHQUNjVSxLQURkLENBQ1JWLGlCQURRO0FBQUEsVUFFaEJXLElBRmdCLEdBRVQsSUFBSWIsSUFBSixDQUFTQyxJQUFULEVBQWVDLGlCQUFmLENBRlM7QUFJdEIsYUFBT1csSUFBUDtBQUNEOzs7OEJBRWdCSCxLLEVBQU87QUFDdEIsVUFBTUksU0FBUyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sS0FBWixDQUFsQjtBQUFBLFVBQ01PLGFBQWEsR0FBR2xCLEtBQUssQ0FBQ2UsU0FBRCxDQUQzQjtBQUFBLFVBRU1iLElBQUksR0FBR2dCLGFBRmI7QUFBQSxVQUU0QjtBQUN0Qk4sTUFBQUEsd0JBQXdCLEdBQUdELEtBQUssQ0FBQ1QsSUFBRCxDQUh0QztBQUFBLFVBSU1ZLElBQUksR0FBR2IsSUFBSSxDQUFDa0IsbUNBQUwsQ0FBeUNqQixJQUF6QyxFQUErQ1Usd0JBQS9DLENBSmI7QUFNQSxhQUFPRSxJQUFQO0FBQ0Q7Ozt3REFFMENaLEksRUFBTVUsd0IsRUFBMEI7QUFDekUsVUFBTVEsT0FBTyxHQUFHQyxTQUFTLENBQUNULHdCQUFELENBQXpCO0FBQUEsVUFDTVUsS0FBSyxHQUFHRixPQUFPLEdBQUcsR0FBSCxHQUFTLEVBRDlCO0FBQUEsVUFFTUcsTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBV1osd0JBQVgsRUFBcUNVLEtBQXJDLENBRmY7QUFBQSxVQUdNbkIsaUJBQWlCLEdBQUdvQixNQUgxQjtBQUFBLFVBR2tDO0FBQzVCVCxNQUFBQSxJQUFJLEdBQUcsSUFBSWIsSUFBSixDQUFTQyxJQUFULEVBQWVDLGlCQUFmLENBSmI7QUFNQSxhQUFPVyxJQUFQO0FBQ0Q7Ozs7OztBQUdIVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QixJQUFqQjs7QUFFQSxTQUFTb0IsU0FBVCxDQUFtQlQsd0JBQW5CLEVBQTZDO0FBQzNDLE1BQU1lLHdCQUF3QixHQUFHLEtBQWpDO0FBQUEsTUFBd0M7QUFDbENwQixFQUFBQSxLQUFLLEdBQUdLLHdCQUF3QixDQUFDZ0IsTUFBekIsQ0FBZ0NELHdCQUFoQyxDQURkO0FBQUEsTUFFTVAsT0FBTyxHQUFJYixLQUFLLEtBQUssQ0FBQyxDQUY1QjtBQUlBLFNBQU9hLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cbiAgXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgbWF0Y2goY29udGVudCkge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2g7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb250ZW50ID0gbWF0Y2hbMF07IC8vL1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdGhpcy50eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBhc0VudHJ5KCkge1xuICAgIGNvbnN0IGVudHJ5ID0ge30sXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gYCR7dGhpcy5yZWd1bGFyRXhwcmVzc2lvbn1gO1xuXG4gICAgZW50cnlbdGhpcy50eXBlXSA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcblxuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW4oVG9rZW4pIHtcbiAgICBjb25zdCB7IHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBUb2tlbixcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgIHR5cGUgPSBmaXJzdEVudHJ5S2V5LCAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyeVt0eXBlXSxcbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybih0eXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgICBcbiAgICByZXR1cm4gcnVsZTsgXG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4odHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gICAgY29uc3QgdW5pY29kZSA9IGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pLFxuICAgICAgICAgIGZsYWdzID0gdW5pY29kZSA/ICd1JyA6ICcnLFxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBmbGFncyksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHAsIC8vL1xuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgY29uc3QgdW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uID0gL3VcXHsvLCAvLy9cbiAgICAgICAgaW5kZXggPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4uc2VhcmNoKHVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgIHVuaWNvZGUgPSAoaW5kZXggIT09IC0xKTtcblxuICByZXR1cm4gdW5pY29kZTtcbn1cbiJdfQ==