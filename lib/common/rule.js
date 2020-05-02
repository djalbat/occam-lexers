"use strict";

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

module.exports = Rule;

function isUnicode(regularExpressionPattern) {
  var unicodeRegularExpression = /u\{/,
      ///
  index = regularExpressionPattern.search(unicodeRegularExpression),
      unicode = index !== -1;
  return unicode;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlJ1bGUiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJjb250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiaW5kZXgiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50QW5kVHlwZSIsImVudHJ5IiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiVG9rZW4iLCJydWxlIiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInVuaWNvZGUiLCJpc1VuaWNvZGUiLCJmbGFncyIsInJlZ0V4cCIsIlJlZ0V4cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmljb2RlUmVndWxhckV4cHJlc3Npb24iLCJzZWFyY2giXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFRkUsSTtBQUNKLGdCQUFZQyxJQUFaLEVBQWtCQyxpQkFBbEIsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQyxpQkFBWjtBQUNEOzs7MEJBRUtDLE8sRUFBUztBQUNiLFVBQUlDLGdCQUFnQixHQUFHLElBQXZCO0FBRUEsVUFBTUMsS0FBSyxHQUFHRixPQUFPLENBQUNFLEtBQVIsQ0FBYyxLQUFLSCxpQkFBbkIsQ0FBZDs7QUFFQSxVQUFJRyxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUFBLFlBQ1ZDLEtBRFUsR0FDQUQsS0FEQSxDQUNWQyxLQURVOztBQUdsQixZQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmSCxVQUFBQSxPQUFPLEdBQUdFLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FEZSxDQUNLOztBQUVwQixjQUFNRSxhQUFhLEdBQUdKLE9BQU8sQ0FBQ0ssTUFBOUI7O0FBRUEsY0FBSUQsYUFBYSxHQUFHLENBQXBCLEVBQXVCO0FBQ3JCSCxZQUFBQSxnQkFBZ0IsR0FBR0ssd0JBQWlCQyxrQkFBakIsQ0FBb0NQLE9BQXBDLEVBQTZDLEtBQUtGLElBQWxELENBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9HLGdCQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1PLEtBQUssR0FBRyxFQUFkO0FBQUEsVUFDTUMsd0JBQXdCLGFBQU0sS0FBS1YsaUJBQVgsQ0FEOUI7QUFHQVMsTUFBQUEsS0FBSyxDQUFDLEtBQUtWLElBQU4sQ0FBTCxHQUFtQlcsd0JBQW5CO0FBRUEsYUFBT0QsS0FBUDtBQUNEOzs7OEJBRWdCRSxLLEVBQU87QUFBQSxVQUNkWixJQURjLEdBQ2NZLEtBRGQsQ0FDZFosSUFEYztBQUFBLFVBQ1JDLGlCQURRLEdBQ2NXLEtBRGQsQ0FDUlgsaUJBRFE7QUFBQSxVQUVoQlksSUFGZ0IsR0FFVCxJQUFJZCxJQUFKLENBQVNDLElBQVQsRUFBZUMsaUJBQWYsQ0FGUztBQUl0QixhQUFPWSxJQUFQO0FBQ0Q7Ozs4QkFFZ0JILEssRUFBTztBQUN0QixVQUFNSSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixLQUFaLENBQWxCO0FBQUEsVUFDTU8sYUFBYSxHQUFHcEIsS0FBSyxDQUFDaUIsU0FBRCxDQUQzQjtBQUFBLFVBRU1kLElBQUksR0FBR2lCLGFBRmI7QUFBQSxVQUU0QjtBQUN0Qk4sTUFBQUEsd0JBQXdCLEdBQUdELEtBQUssQ0FBQ1YsSUFBRCxDQUh0QztBQUFBLFVBSU1hLElBQUksR0FBR2QsSUFBSSxDQUFDbUIsbUNBQUwsQ0FBeUNsQixJQUF6QyxFQUErQ1csd0JBQS9DLENBSmI7QUFNQSxhQUFPRSxJQUFQO0FBQ0Q7Ozt3REFFMENiLEksRUFBTVcsd0IsRUFBMEI7QUFDekUsVUFBTVEsT0FBTyxHQUFHQyxTQUFTLENBQUNULHdCQUFELENBQXpCO0FBQUEsVUFDTVUsS0FBSyxHQUFHRixPQUFPLEdBQUcsR0FBSCxHQUFTLEVBRDlCO0FBQUEsVUFFTUcsTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBV1osd0JBQVgsRUFBcUNVLEtBQXJDLENBRmY7QUFBQSxVQUdNcEIsaUJBQWlCLEdBQUdxQixNQUgxQjtBQUFBLFVBR2tDO0FBQzVCVCxNQUFBQSxJQUFJLEdBQUcsSUFBSWQsSUFBSixDQUFTQyxJQUFULEVBQWVDLGlCQUFmLENBSmI7QUFNQSxhQUFPWSxJQUFQO0FBQ0Q7Ozs7OztBQUdIVyxNQUFNLENBQUNDLE9BQVAsR0FBaUIxQixJQUFqQjs7QUFFQSxTQUFTcUIsU0FBVCxDQUFtQlQsd0JBQW5CLEVBQTZDO0FBQzNDLE1BQU1lLHdCQUF3QixHQUFHLEtBQWpDO0FBQUEsTUFBd0M7QUFDbENyQixFQUFBQSxLQUFLLEdBQUdNLHdCQUF3QixDQUFDZ0IsTUFBekIsQ0FBZ0NELHdCQUFoQyxDQURkO0FBQUEsTUFFTVAsT0FBTyxHQUFJZCxLQUFLLEtBQUssQ0FBQyxDQUY1QjtBQUlBLFNBQU9jLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaDtcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnRlbnQgPSBtYXRjaFswXTsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0aGlzLnR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIGFzRW50cnkoKSB7XG4gICAgY29uc3QgZW50cnkgPSB7fSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBgJHt0aGlzLnJlZ3VsYXJFeHByZXNzaW9ufWA7XG5cbiAgICBlbnRyeVt0aGlzLnR5cGVdID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xuXG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbihUb2tlbikge1xuICAgIGNvbnN0IHsgdHlwZSwgcmVndWxhckV4cHJlc3Npb24gfSA9IFRva2VuLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRW50cnkoZW50cnkpIHtcbiAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgdHlwZSA9IGZpcnN0RW50cnlLZXksIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3R5cGVdLFxuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICAgIFxuICAgIHJldHVybiBydWxlOyBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybih0eXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgICBjb25zdCB1bmljb2RlID0gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiksXG4gICAgICAgICAgZmxhZ3MgPSB1bmljb2RlID8gXCJ1XCIgOiBcIlwiLFxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBmbGFncyksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHAsIC8vL1xuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgY29uc3QgdW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uID0gL3VcXHsvLCAvLy9cbiAgICAgICAgaW5kZXggPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4uc2VhcmNoKHVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgIHVuaWNvZGUgPSAoaW5kZXggIT09IC0xKTtcblxuICByZXR1cm4gdW5pY29kZTtcbn1cbiJdfQ==