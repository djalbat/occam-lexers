'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    arrayUtil = require('../util/array');

var Rules = function () {
  function Rules(array) {
    _classCallCheck(this, Rules);

    this.array = array;
  }

  _createClass(Rules, [{
    key: 'reduce',
    value: function reduce(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: 'getRule',
    value: function getRule(depth) {
      var rule = this.array[depth] || null; ///

      return rule;
    }
  }, {
    key: 'addRule',
    value: function addRule(rule) {
      this.array.unshift(rule); ///
    }
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var significantTokenTypes = significantTokenTypesFromEntries(entries),
          array = significantTokenTypes.map(function (significantTokenType) {
        var regularExpressionPattern = findRegularExpressionPattern(significantTokenType, entries),
            rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }]);

  return Rules;
}();

module.exports = Rules;

function findRegularExpressionPattern(significantTokenType, entries) {
  var regularExpressionPattern = entries.reduce(function (regularExpressionPattern, entry) {
    if (regularExpressionPattern === null) {
      var entryKeys = Object.keys(entry),
          firstEntryKey = arrayUtil.first(entryKeys),
          entrySignificantTokenType = firstEntryKey; ///

      if (entrySignificantTokenType === significantTokenType) {
        regularExpressionPattern = entry[significantTokenType];
      }
    }

    return regularExpressionPattern;
  }, null);

  return regularExpressionPattern;
}

function significantTokenTypesFromEntries(entries) {
  var significantTokenTypes = entries.map(function (entry) {
    var entryKeys = Object.keys(entry),
        firstEntryKey = arrayUtil.first(entryKeys),
        significantTokenType = firstEntryKey; ///

    return significantTokenType;
  });

  return significantTokenTypes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJSdWxlcyIsImFycmF5IiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJkZXB0aCIsInJ1bGUiLCJ1bnNoaWZ0IiwiZW50cmllcyIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21FbnRyaWVzIiwibWFwIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmaW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwicnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZW50cnkiLCJlbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RFbnRyeUtleSIsImZpcnN0IiwiZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxlQUFSLENBRGxCOztJQUdNRSxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MkJBRU1DLFEsRUFBVUMsWSxFQUFjO0FBQUUsYUFBTyxLQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0JGLFFBQWxCLEVBQTRCQyxZQUE1QixDQUFQO0FBQW1EOzs7NEJBRTVFRSxLLEVBQU87QUFDYixVQUFNQyxPQUFRLEtBQUtMLEtBQUwsQ0FBV0ksS0FBWCxLQUFxQixJQUFuQyxDQURhLENBQzZCOztBQUUxQyxhQUFPQyxJQUFQO0FBQ0Q7Ozs0QkFFT0EsSSxFQUFNO0FBQ1osV0FBS0wsS0FBTCxDQUFXTSxPQUFYLENBQW1CRCxJQUFuQixFQURZLENBQ2M7QUFDM0I7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFNQyx3QkFBd0JDLGlDQUFpQ0YsT0FBakMsQ0FBOUI7QUFBQSxVQUNNUCxRQUFRUSxzQkFBc0JFLEdBQXRCLENBQTBCLFVBQVNDLG9CQUFULEVBQStCO0FBQy9ELFlBQU1DLDJCQUEyQkMsNkJBQTZCRixvQkFBN0IsRUFBbURKLE9BQW5ELENBQWpDO0FBQUEsWUFDTUYsT0FBT1QsS0FBS2tCLG1EQUFMLENBQXlESCxvQkFBekQsRUFBK0VDLHdCQUEvRSxDQURiOztBQUdBLGVBQU9QLElBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NVSxRQUFRLElBQUloQixLQUFKLENBQVVDLEtBQVYsQ0FQZDs7QUFTQSxhQUFPZSxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsS0FBakI7O0FBRUEsU0FBU2MsNEJBQVQsQ0FBc0NGLG9CQUF0QyxFQUE0REosT0FBNUQsRUFBcUU7QUFDbkUsTUFBTUssMkJBQTJCTCxRQUFRSixNQUFSLENBQWUsVUFBU1Msd0JBQVQsRUFBbUNNLEtBQW5DLEVBQTBDO0FBQ3hGLFFBQUlOLDZCQUE2QixJQUFqQyxFQUF1QztBQUNyQyxVQUFNTyxZQUFZQyxPQUFPQyxJQUFQLENBQVlILEtBQVosQ0FBbEI7QUFBQSxVQUNNSSxnQkFBZ0J4QixVQUFVeUIsS0FBVixDQUFnQkosU0FBaEIsQ0FEdEI7QUFBQSxVQUVNSyw0QkFBNEJGLGFBRmxDLENBRHFDLENBR2E7O0FBRWxELFVBQUlFLDhCQUE4QmIsb0JBQWxDLEVBQXdEO0FBQ3REQyxtQ0FBMkJNLE1BQU1QLG9CQUFOLENBQTNCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPQyx3QkFBUDtBQUNELEdBWmdDLEVBWTlCLElBWjhCLENBQWpDOztBQWNBLFNBQU9BLHdCQUFQO0FBQ0Q7O0FBRUQsU0FBU0gsZ0NBQVQsQ0FBMENGLE9BQTFDLEVBQW1EO0FBQ2pELE1BQU1DLHdCQUF3QkQsUUFBUUcsR0FBUixDQUFZLFVBQVNRLEtBQVQsRUFBZ0I7QUFDeEQsUUFBTUMsWUFBWUMsT0FBT0MsSUFBUCxDQUFZSCxLQUFaLENBQWxCO0FBQUEsUUFDTUksZ0JBQWdCeEIsVUFBVXlCLEtBQVYsQ0FBZ0JKLFNBQWhCLENBRHRCO0FBQUEsUUFFTVIsdUJBQXVCVyxhQUY3QixDQUR3RCxDQUdaOztBQUU1QyxXQUFPWCxvQkFBUDtBQUNELEdBTjZCLENBQTlCOztBQVFBLFNBQU9ILHFCQUFQO0FBQ0QiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuICBcbiAgcmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZ2V0UnVsZShkZXB0aCkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5hcnJheVtkZXB0aF0gfHwgbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLmFycmF5LnVuc2hpZnQocnVsZSk7IC8vL1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGFycmF5ID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLm1hcChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgZW50cmllcyksXG4gICAgICAgICAgICAgICAgICBydWxlID0gUnVsZS5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlOyAgICAgIFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcblxuZnVuY3Rpb24gZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgZW50cmllcykge1xuICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyaWVzLnJlZHVjZShmdW5jdGlvbihyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGVudHJ5KSB7XG4gICAgaWYgKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGFycmF5VXRpbC5maXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgICAgZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7ICAvLy9cblxuICAgICAgaWYgKGVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xufVxuXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tRW50cmllcyhlbnRyaWVzKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGVudHJpZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBhcnJheVV0aWwuZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9KTtcblxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xufVxuIl19