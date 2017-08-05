'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rule = require('./rule');

var array = necessary.array,
    first = array.first;

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
  var entry = entries.find(function (entry) {
    var entryKeys = Object.keys(entry),
        firstEntryKey = first(entryKeys),
        entrySignificantTokenType = firstEntryKey,
        ///
    found = entrySignificantTokenType === significantTokenType;

    return found;
  }) || null,
      ///
  regularExpressionPattern = entry !== null ? entry[significantTokenType] : ///
  null;

  return regularExpressionPattern;
}

function significantTokenTypesFromEntries(entries) {
  var significantTokenTypes = entries.map(function (entry) {
    var entryKeys = Object.keys(entry),
        firstEntryKey = first(entryKeys),
        significantTokenType = firstEntryKey; ///

    return significantTokenType;
  });

  return significantTokenTypes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJhcnJheSIsImZpcnN0IiwiUnVsZXMiLCJjYWxsYmFjayIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImRlcHRoIiwicnVsZSIsInVuc2hpZnQiLCJlbnRyaWVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUVudHJpZXMiLCJtYXAiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsImZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJydWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnRyeSIsImZpbmQiLCJlbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RFbnRyeUtleSIsImVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUiLCJmb3VuZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjs7QUFFTSxJQUFFRSxLQUFGLEdBQVlILFNBQVosQ0FBRUcsS0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsS0FEWixDQUNFQyxLQURGOztJQUdBQyxLO0FBQ0osaUJBQVlGLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MkJBRU1HLFEsRUFBVUMsWSxFQUFjO0FBQUUsYUFBTyxLQUFLSixLQUFMLENBQVdLLE1BQVgsQ0FBa0JGLFFBQWxCLEVBQTRCQyxZQUE1QixDQUFQO0FBQW1EOzs7NEJBRTVFRSxLLEVBQU87QUFDYixVQUFNQyxPQUFRLEtBQUtQLEtBQUwsQ0FBV00sS0FBWCxLQUFxQixJQUFuQyxDQURhLENBQzZCOztBQUUxQyxhQUFPQyxJQUFQO0FBQ0Q7Ozs0QkFFT0EsSSxFQUFNO0FBQ1osV0FBS1AsS0FBTCxDQUFXUSxPQUFYLENBQW1CRCxJQUFuQixFQURZLENBQ2M7QUFDM0I7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFNQyx3QkFBd0JDLGlDQUFpQ0YsT0FBakMsQ0FBOUI7QUFBQSxVQUNNVCxRQUFRVSxzQkFBc0JFLEdBQXRCLENBQTBCLFVBQVNDLG9CQUFULEVBQStCO0FBQy9ELFlBQU1DLDJCQUEyQkMsNkJBQTZCRixvQkFBN0IsRUFBbURKLE9BQW5ELENBQWpDO0FBQUEsWUFDTUYsT0FBT1IsS0FBS2lCLG1EQUFMLENBQXlESCxvQkFBekQsRUFBK0VDLHdCQUEvRSxDQURiOztBQUdBLGVBQU9QLElBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NVSxRQUFRLElBQUlmLEtBQUosQ0FBVUYsS0FBVixDQVBkOztBQVNBLGFBQU9pQixLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCakIsS0FBakI7O0FBRUEsU0FBU2EsNEJBQVQsQ0FBc0NGLG9CQUF0QyxFQUE0REosT0FBNUQsRUFBcUU7QUFDbkUsTUFBTVcsUUFBUVgsUUFBUVksSUFBUixDQUFhLFVBQVNELEtBQVQsRUFBZ0I7QUFDbkMsUUFBTUUsWUFBWUMsT0FBT0MsSUFBUCxDQUFZSixLQUFaLENBQWxCO0FBQUEsUUFDTUssZ0JBQWdCeEIsTUFBTXFCLFNBQU4sQ0FEdEI7QUFBQSxRQUVNSSw0QkFBNEJELGFBRmxDO0FBQUEsUUFFa0Q7QUFDNUNFLFlBQVNELDhCQUE4QmIsb0JBSDdDOztBQUtBLFdBQU9jLEtBQVA7QUFDRCxHQVBPLEtBT0YsSUFQWjtBQUFBLE1BT2tCO0FBQ1piLDZCQUE0Qk0sVUFBVSxJQUFYLEdBQ0dBLE1BQU1QLG9CQUFOLENBREgsR0FDaUM7QUFDNUIsTUFWdEM7O0FBWUEsU0FBT0Msd0JBQVA7QUFDRDs7QUFFRCxTQUFTSCxnQ0FBVCxDQUEwQ0YsT0FBMUMsRUFBbUQ7QUFDakQsTUFBTUMsd0JBQXdCRCxRQUFRRyxHQUFSLENBQVksVUFBU1EsS0FBVCxFQUFnQjtBQUN4RCxRQUFNRSxZQUFZQyxPQUFPQyxJQUFQLENBQVlKLEtBQVosQ0FBbEI7QUFBQSxRQUNNSyxnQkFBZ0J4QixNQUFNcUIsU0FBTixDQUR0QjtBQUFBLFFBRU1ULHVCQUF1QlksYUFGN0IsQ0FEd0QsQ0FHWjs7QUFFNUMsV0FBT1osb0JBQVA7QUFDRCxHQU42QixDQUE5Qjs7QUFRQSxTQUFPSCxxQkFBUDtBQUNEIiwiZmlsZSI6InJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuICBcbiAgcmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZ2V0UnVsZShkZXB0aCkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5hcnJheVtkZXB0aF0gfHwgbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLmFycmF5LnVuc2hpZnQocnVsZSk7IC8vL1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGFycmF5ID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLm1hcChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgZW50cmllcyksXG4gICAgICAgICAgICAgICAgICBydWxlID0gUnVsZS5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlOyAgICAgIFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcblxuZnVuY3Rpb24gZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgZW50cmllcykge1xuICBjb25zdCBlbnRyeSA9IGVudHJpZXMuZmluZChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICAgICAgICBlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlID0gZmlyc3RFbnRyeUtleSwgIC8vL1xuICAgICAgICAgICAgICAgIGZvdW5kID0gKGVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHNpZ25pZmljYW50VG9rZW5UeXBlKTtcblxuICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgfSkgfHwgbnVsbCwgLy8vXG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IChlbnRyeSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeVtzaWduaWZpY2FudFRva2VuVHlwZV0gOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gZW50cmllcy5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBmaXJzdEVudHJ5S2V5OyAvLy9cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcbn1cbiJdfQ==