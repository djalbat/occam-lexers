"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _significant = _interopRequireDefault(require("../common/token/significant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

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
            significantToken = _significant["default"].fromContentAndType(content, this.type);
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
          flags = unicode ? "u" : "",
          regExp = new RegExp(regularExpressionPattern, flags),
          regularExpression = regExp,
          ///
      rule = new Rule(type, regularExpression);
      return rule;
    }
  }]);

  return Rule;
}();

exports["default"] = Rule;

function isUnicode(regularExpressionPattern) {
  var unicodeRegularExpression = /u{/,
      ///
  index = regularExpressionPattern.search(unicodeRegularExpression),
      unicode = index !== -1;
  return unicode;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlJ1bGUiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJjb250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiaW5kZXgiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50QW5kVHlwZSIsImVudHJ5IiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiVG9rZW4iLCJydWxlIiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInVuaWNvZGUiLCJpc1VuaWNvZGUiLCJmbGFncyIsInJlZ0V4cCIsIlJlZ0V4cCIsInVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiIsInNlYXJjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0lBRWFFLEk7QUFDbkIsZ0JBQVlDLElBQVosRUFBa0JDLGlCQUFsQixFQUFxQztBQUFBOztBQUNuQyxTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7OzJDQUVzQjtBQUNyQixhQUFPLEtBQUtDLGlCQUFaO0FBQ0Q7OzswQkFFS0MsTyxFQUFTO0FBQ2IsVUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7QUFFQSxVQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0UsS0FBUixDQUFjLEtBQUtILGlCQUFuQixDQUFkOztBQUVBLFVBQUlHLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQUEsWUFDVkMsS0FEVSxHQUNBRCxLQURBLENBQ1ZDLEtBRFU7O0FBR2xCLFlBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZILFVBQUFBLE9BQU8sR0FBR0UsS0FBSyxDQUFDLENBQUQsQ0FBZixDQURlLENBQ0s7O0FBRXBCLGNBQU1FLGFBQWEsR0FBR0osT0FBTyxDQUFDSyxNQUE5Qjs7QUFFQSxjQUFJRCxhQUFhLEdBQUcsQ0FBcEIsRUFBdUI7QUFDckJILFlBQUFBLGdCQUFnQixHQUFHSyx3QkFBaUJDLGtCQUFqQixDQUFvQ1AsT0FBcEMsRUFBNkMsS0FBS0YsSUFBbEQsQ0FBbkI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0csZ0JBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTU8sS0FBSyxHQUFHLEVBQWQ7QUFBQSxVQUNNQyx3QkFBd0IsYUFBTSxLQUFLVixpQkFBWCxDQUQ5QjtBQUdBUyxNQUFBQSxLQUFLLENBQUMsS0FBS1YsSUFBTixDQUFMLEdBQW1CVyx3QkFBbkI7QUFFQSxhQUFPRCxLQUFQO0FBQ0Q7Ozs4QkFFZ0JFLEssRUFBTztBQUFBLFVBQ2RaLElBRGMsR0FDY1ksS0FEZCxDQUNkWixJQURjO0FBQUEsVUFDUkMsaUJBRFEsR0FDY1csS0FEZCxDQUNSWCxpQkFEUTtBQUFBLFVBRWhCWSxJQUZnQixHQUVULElBQUlkLElBQUosQ0FBU0MsSUFBVCxFQUFlQyxpQkFBZixDQUZTO0FBSXRCLGFBQU9ZLElBQVA7QUFDRDs7OzhCQUVnQkgsSyxFQUFPO0FBQ3RCLFVBQU1JLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlOLEtBQVosQ0FBbEI7QUFBQSxVQUNNTyxhQUFhLEdBQUdwQixLQUFLLENBQUNpQixTQUFELENBRDNCO0FBQUEsVUFFTWQsSUFBSSxHQUFHaUIsYUFGYjtBQUFBLFVBRTRCO0FBQ3RCTixNQUFBQSx3QkFBd0IsR0FBR0QsS0FBSyxDQUFDVixJQUFELENBSHRDO0FBQUEsVUFJTWEsSUFBSSxHQUFHZCxJQUFJLENBQUNtQixtQ0FBTCxDQUF5Q2xCLElBQXpDLEVBQStDVyx3QkFBL0MsQ0FKYjtBQU1BLGFBQU9FLElBQVA7QUFDRDs7O3dEQUUwQ2IsSSxFQUFNVyx3QixFQUEwQjtBQUN6RSxVQUFNUSxPQUFPLEdBQUdDLFNBQVMsQ0FBQ1Qsd0JBQUQsQ0FBekI7QUFBQSxVQUNNVSxLQUFLLEdBQUdGLE9BQU8sR0FBRyxHQUFILEdBQVMsRUFEOUI7QUFBQSxVQUVNRyxNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXWix3QkFBWCxFQUFxQ1UsS0FBckMsQ0FGZjtBQUFBLFVBR01wQixpQkFBaUIsR0FBR3FCLE1BSDFCO0FBQUEsVUFHa0M7QUFDNUJULE1BQUFBLElBQUksR0FBRyxJQUFJZCxJQUFKLENBQVNDLElBQVQsRUFBZUMsaUJBQWYsQ0FKYjtBQU1BLGFBQU9ZLElBQVA7QUFDRDs7Ozs7Ozs7QUFHSCxTQUFTTyxTQUFULENBQW1CVCx3QkFBbkIsRUFBNkM7QUFDM0MsTUFBTWEsd0JBQXdCLEdBQUcsSUFBakM7QUFBQSxNQUF1QztBQUNqQ25CLEVBQUFBLEtBQUssR0FBR00sd0JBQXdCLENBQUNjLE1BQXpCLENBQWdDRCx3QkFBaEMsQ0FEZDtBQUFBLE1BRU1MLE9BQU8sR0FBSWQsS0FBSyxLQUFLLENBQUMsQ0FGNUI7QUFJQSxTQUFPYyxPQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cbiAgXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgbWF0Y2goY29udGVudCkge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2g7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb250ZW50ID0gbWF0Y2hbMF07IC8vL1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdGhpcy50eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBhc0VudHJ5KCkge1xuICAgIGNvbnN0IGVudHJ5ID0ge30sXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gYCR7dGhpcy5yZWd1bGFyRXhwcmVzc2lvbn1gO1xuXG4gICAgZW50cnlbdGhpcy50eXBlXSA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcblxuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW4oVG9rZW4pIHtcbiAgICBjb25zdCB7IHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBUb2tlbixcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgIHR5cGUgPSBmaXJzdEVudHJ5S2V5LCAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyeVt0eXBlXSxcbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybih0eXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgICBcbiAgICByZXR1cm4gcnVsZTsgXG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4odHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gICAgY29uc3QgdW5pY29kZSA9IGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pLFxuICAgICAgICAgIGZsYWdzID0gdW5pY29kZSA/IFwidVwiIDogXCJcIixcbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwLCAvLy9cbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCB1bmljb2RlUmVndWxhckV4cHJlc3Npb24gPSAvdXsvLCAvLy9cbiAgICAgICAgaW5kZXggPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4uc2VhcmNoKHVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgIHVuaWNvZGUgPSAoaW5kZXggIT09IC0xKTtcblxuICByZXR1cm4gdW5pY29kZTtcbn1cbiJdfQ==