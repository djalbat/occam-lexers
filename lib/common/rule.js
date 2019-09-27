'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var SignificantToken = require('../common/token/significant');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var Rule = function () {
  function Rule(type, regularExpression) {
    _classCallCheck(this, Rule);

    this.type = type;
    this.regularExpression = regularExpression;
  }

  _createClass(Rule, [{
    key: 'getType',
    value: function getType() {
      return this.type;
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
            significantToken = SignificantToken.fromContentAndType(content, this.type);
          }
        }
      }

      return significantToken;
    }
  }, {
    key: 'asEntry',
    value: function asEntry() {
      var entry = {},
          regularExpressionPattern = '' + this.regularExpression;

      entry[this.type] = regularExpressionPattern;

      return entry;
    }
  }], [{
    key: 'fromToken',
    value: function fromToken(Token) {
      var type = Token.type,
          regularExpression = Token.regularExpression,
          rule = new Rule(type, regularExpression);


      return rule;
    }
  }, {
    key: 'fromEntry',
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
    key: 'fromTypeAndRegularExpressionPattern',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJSdWxlIiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW4iLCJtYXRjaCIsImluZGV4IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImZyb21Db250ZW50QW5kVHlwZSIsImVudHJ5IiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiVG9rZW4iLCJydWxlIiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInVuaWNvZGUiLCJpc1VuaWNvZGUiLCJmbGFncyIsInJlZ0V4cCIsIlJlZ0V4cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmljb2RlUmVndWxhckV4cHJlc3Npb24iLCJzZWFyY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsbUJBQW1CRCxRQUFRLDZCQUFSLENBQXpCOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsSTtBQUNKLGdCQUFZQyxJQUFaLEVBQWtCQyxpQkFBbEIsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQyxpQkFBWjtBQUNEOzs7MEJBRUtDLE8sRUFBUztBQUNiLFVBQUlDLG1CQUFtQixJQUF2Qjs7QUFFQSxVQUFNQyxRQUFRRixRQUFRRSxLQUFSLENBQWMsS0FBS0gsaUJBQW5CLENBQWQ7O0FBRUEsVUFBSUcsVUFBVSxJQUFkLEVBQW9CO0FBQUEsWUFDVkMsS0FEVSxHQUNBRCxLQURBLENBQ1ZDLEtBRFU7OztBQUdsQixZQUFJQSxVQUFVLENBQWQsRUFBaUI7QUFDZkgsb0JBQVVFLE1BQU0sQ0FBTixDQUFWLENBRGUsQ0FDSzs7QUFFcEIsY0FBTUUsZ0JBQWdCSixRQUFRSyxNQUE5Qjs7QUFFQSxjQUFJRCxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckJILCtCQUFtQlAsaUJBQWlCWSxrQkFBakIsQ0FBb0NOLE9BQXBDLEVBQTZDLEtBQUtGLElBQWxELENBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9HLGdCQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1NLFFBQVEsRUFBZDtBQUFBLFVBQ01DLGdDQUE4QixLQUFLVCxpQkFEekM7O0FBR0FRLFlBQU0sS0FBS1QsSUFBWCxJQUFtQlUsd0JBQW5COztBQUVBLGFBQU9ELEtBQVA7QUFDRDs7OzhCQUVnQkUsSyxFQUFPO0FBQUEsVUFDZFgsSUFEYyxHQUNjVyxLQURkLENBQ2RYLElBRGM7QUFBQSxVQUNSQyxpQkFEUSxHQUNjVSxLQURkLENBQ1JWLGlCQURRO0FBQUEsVUFFaEJXLElBRmdCLEdBRVQsSUFBSWIsSUFBSixDQUFTQyxJQUFULEVBQWVDLGlCQUFmLENBRlM7OztBQUl0QixhQUFPVyxJQUFQO0FBQ0Q7Ozs4QkFFZ0JILEssRUFBTztBQUN0QixVQUFNSSxZQUFZQyxPQUFPQyxJQUFQLENBQVlOLEtBQVosQ0FBbEI7QUFBQSxVQUNNTyxnQkFBZ0JsQixNQUFNZSxTQUFOLENBRHRCO0FBQUEsVUFFTWIsT0FBT2dCLGFBRmI7QUFBQSxVQUU0QjtBQUN0Qk4saUNBQTJCRCxNQUFNVCxJQUFOLENBSGpDO0FBQUEsVUFJTVksT0FBT2IsS0FBS2tCLG1DQUFMLENBQXlDakIsSUFBekMsRUFBK0NVLHdCQUEvQyxDQUpiOztBQU1BLGFBQU9FLElBQVA7QUFDRDs7O3dEQUUwQ1osSSxFQUFNVSx3QixFQUEwQjtBQUN6RSxVQUFNUSxVQUFVQyxVQUFVVCx3QkFBVixDQUFoQjtBQUFBLFVBQ01VLFFBQVFGLFVBQVUsR0FBVixHQUFnQixFQUQ5QjtBQUFBLFVBRU1HLFNBQVMsSUFBSUMsTUFBSixDQUFXWix3QkFBWCxFQUFxQ1UsS0FBckMsQ0FGZjtBQUFBLFVBR01uQixvQkFBb0JvQixNQUgxQjtBQUFBLFVBR2tDO0FBQzVCVCxhQUFPLElBQUliLElBQUosQ0FBU0MsSUFBVCxFQUFlQyxpQkFBZixDQUpiOztBQU1BLGFBQU9XLElBQVA7QUFDRDs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUJ6QixJQUFqQjs7QUFFQSxTQUFTb0IsU0FBVCxDQUFtQlQsd0JBQW5CLEVBQTZDO0FBQzNDLE1BQU1lLDJCQUEyQixLQUFqQztBQUFBLE1BQXdDO0FBQ2xDcEIsVUFBUUsseUJBQXlCZ0IsTUFBekIsQ0FBZ0NELHdCQUFoQyxDQURkO0FBQUEsTUFFTVAsVUFBV2IsVUFBVSxDQUFDLENBRjVCOztBQUlBLFNBQU9hLE9BQVA7QUFDRCIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaDtcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnRlbnQgPSBtYXRjaFswXTsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0aGlzLnR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIGFzRW50cnkoKSB7XG4gICAgY29uc3QgZW50cnkgPSB7fSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBgJHt0aGlzLnJlZ3VsYXJFeHByZXNzaW9ufWA7XG5cbiAgICBlbnRyeVt0aGlzLnR5cGVdID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xuXG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbihUb2tlbikge1xuICAgIGNvbnN0IHsgdHlwZSwgcmVndWxhckV4cHJlc3Npb24gfSA9IFRva2VuLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRW50cnkoZW50cnkpIHtcbiAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgdHlwZSA9IGZpcnN0RW50cnlLZXksIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3R5cGVdLFxuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICAgIFxuICAgIHJldHVybiBydWxlOyBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybih0eXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgICBjb25zdCB1bmljb2RlID0gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiksXG4gICAgICAgICAgZmxhZ3MgPSB1bmljb2RlID8gJ3UnIDogJycsXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGZsYWdzKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ0V4cCwgLy8vXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCB1bmljb2RlUmVndWxhckV4cHJlc3Npb24gPSAvdVxcey8sIC8vL1xuICAgICAgICBpbmRleCA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybi5zZWFyY2godW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgdW5pY29kZSA9IChpbmRleCAhPT0gLTEpO1xuXG4gIHJldHVybiB1bmljb2RlO1xufVxuIl19