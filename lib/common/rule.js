'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var SignificantToken = require('../common/token/significant');

var array = necessary.array,
    first = array.first;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImFycmF5IiwiZmlyc3QiLCJSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuUG9zaXRpb24iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiaW5kZXgiLCJsaW5lIiwidHlwZSIsInNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudExpbmVBbmRUeXBlIiwiZW50cnkiLCJlbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RFbnRyeUtleSIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInJ1bGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJ1bmljb2RlIiwiaXNVbmljb2RlIiwiZmxhZ3MiLCJyZWdFeHAiLCJSZWdFeHAiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uIiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLG1CQUFtQkQsUUFBUSw2QkFBUixDQUF6Qjs7QUFFTSxJQUFFRSxLQUFGLEdBQVlILFNBQVosQ0FBRUcsS0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsS0FEWixDQUNFQyxLQURGOztJQUdBQyxJO0FBQ0osZ0JBQVlDLG9CQUFaLEVBQWtDQyxpQkFBbEMsRUFBcUQ7QUFBQTs7QUFDbkQsU0FBS0Qsb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDRDs7Ozs4Q0FFeUI7QUFDeEIsYUFBTyxLQUFLRCxvQkFBWjtBQUNEOzs7MkNBRXNCO0FBQ3JCLGFBQU8sS0FBS0MsaUJBQVo7QUFDRDs7OzBEQUVxQ0MsTyxFQUFTO0FBQzdDLFVBQUlDLDJCQUEyQixDQUFDLENBQWhDOztBQUVBLFVBQU1DLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLSixpQkFBbkIsQ0FBaEI7O0FBRUEsVUFBSUcsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFNRSxhQUFhUixNQUFNTSxPQUFOLENBQW5COztBQUVBLFlBQUlFLGVBQWUsRUFBbkIsRUFBdUI7QUFDckJILHFDQUEyQkMsUUFBUUcsS0FBbkMsQ0FEcUIsQ0FDcUI7QUFDM0M7QUFDRjs7QUFFRCxhQUFPSix3QkFBUDtBQUNEOzs7NkRBRXdDRCxPLEVBQVNNLEksRUFBTTtBQUN0RCxVQUFNSixVQUFVRixRQUFRRyxLQUFSLENBQWMsS0FBS0osaUJBQW5CLENBQWhCO0FBQUEsVUFDTUssYUFBYVIsTUFBTU0sT0FBTixDQURuQjs7QUFHQUYsZ0JBQVVJLFVBQVYsQ0FKc0QsQ0FJaEM7O0FBRXRCLFVBQU1HLE9BQU8sS0FBS1Qsb0JBQWxCO0FBQUEsVUFBd0M7QUFDbENVLHlCQUFtQmQsaUJBQWlCZSxzQkFBakIsQ0FBd0NULE9BQXhDLEVBQWlETSxJQUFqRCxFQUF1REMsSUFBdkQsQ0FEekI7O0FBR0EsYUFBT0MsZ0JBQVA7QUFDRDs7OzhCQUVnQkUsSyxFQUFPO0FBQ3RCLFVBQU1DLFlBQVlDLE9BQU9DLElBQVAsQ0FBWUgsS0FBWixDQUFsQjtBQUFBLFVBQ01JLGdCQUFnQmxCLE1BQU1lLFNBQU4sQ0FEdEI7QUFBQSxVQUVNYix1QkFBdUJnQixhQUY3QjtBQUFBLFVBRTRDO0FBQ3RDQyxpQ0FBMkJMLE1BQU1aLG9CQUFOLENBSGpDO0FBQUEsVUFJTWtCLE9BQU9uQixLQUFLb0IsbURBQUwsQ0FBeURuQixvQkFBekQsRUFBK0VpQix3QkFBL0UsQ0FKYjs7QUFNQSxhQUFPQyxJQUFQO0FBQ0Q7Ozt3RUFFMERsQixvQixFQUFzQmlCLHdCLEVBQTBCO0FBQ3pHLFVBQU1HLFVBQVVDLFVBQVVKLHdCQUFWLENBQWhCO0FBQUEsVUFDTUssUUFBUUYsVUFBVSxHQUFWLEdBQWdCLEVBRDlCO0FBQUEsVUFFTUcsU0FBUyxJQUFJQyxNQUFKLENBQVdQLHdCQUFYLEVBQXFDSyxLQUFyQyxDQUZmO0FBQUEsVUFHTXJCLG9CQUFvQnNCLE1BSDFCO0FBQUEsVUFHa0M7QUFDNUJMLGFBQU8sSUFBSW5CLElBQUosQ0FBU0Msb0JBQVQsRUFBK0JDLGlCQUEvQixDQUpiOztBQU1BLGFBQU9pQixJQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCM0IsSUFBakI7O0FBRUEsU0FBU3NCLFNBQVQsQ0FBbUJKLHdCQUFuQixFQUE2QztBQUMzQyxNQUFNVSwyQkFBMkIsS0FBakM7QUFBQSxNQUF3QztBQUNsQ3BCLFVBQVFVLHlCQUF5QlcsTUFBekIsQ0FBZ0NELHdCQUFoQyxDQURkO0FBQUEsTUFFTVAsVUFBV2IsVUFBVSxDQUFDLENBRjVCOztBQUlBLFNBQU9hLE9BQVA7QUFDRCIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9XG4gIFxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IC0xO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuICAgIFxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGlmIChmaXJzdE1hdGNoICE9PSAnJykge1xuICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb24gPSBtYXRjaGVzLmluZGV4OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uO1xuICB9XG5cbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUsIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXksIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXSxcbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICAgIFxuICAgIHJldHVybiBydWxlOyBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgPyAndScgOiAnJyxcbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwLCAvLy9cbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCB1bmljb2RlUmVndWxhckV4cHJlc3Npb24gPSAvdVxcey8sIC8vL1xuICAgICAgICBpbmRleCA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybi5zZWFyY2godW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgdW5pY29kZSA9IChpbmRleCAhPT0gLTEpO1xuXG4gIHJldHVybiB1bmljb2RlO1xufVxuIl19