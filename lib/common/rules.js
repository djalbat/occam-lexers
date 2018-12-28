'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rule = require('./rule');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var Rules = function () {
  function Rules(array) {
    _classCallCheck(this, Rules);

    this.array = array;
  }

  _createClass(Rules, [{
    key: 'map',
    value: function map(callback) {
      return this.array.map(callback);
    }
  }, {
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
        entrySignificantTokenType = firstEntryKey; ///

    if (entrySignificantTokenType === significantTokenType) {
      return true;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUnVsZXMiLCJhcnJheSIsImNhbGxiYWNrIiwibWFwIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZGVwdGgiLCJydWxlIiwidW5zaGlmdCIsImVudHJpZXMiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tRW50cmllcyIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsImZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImVudHJ5IiwiZmluZCIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwiZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjs7QUFFTSxJQUFFRSxjQUFGLEdBQXFCSCxTQUFyQixDQUFFRyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozt3QkFFR0MsUSxFQUFXO0FBQUUsYUFBTyxLQUFLRCxLQUFMLENBQVdFLEdBQVgsQ0FBZUQsUUFBZixDQUFQO0FBQWtDOzs7MkJBRTVDQSxRLEVBQVVFLFksRUFBYztBQUFFLGFBQU8sS0FBS0gsS0FBTCxDQUFXSSxNQUFYLENBQWtCSCxRQUFsQixFQUE0QkUsWUFBNUIsQ0FBUDtBQUFtRDs7OzRCQUU1RUUsSyxFQUFPO0FBQ2IsVUFBTUMsT0FBUSxLQUFLTixLQUFMLENBQVdLLEtBQVgsS0FBcUIsSUFBbkMsQ0FEYSxDQUM2Qjs7QUFFMUMsYUFBT0MsSUFBUDtBQUNEOzs7NEJBRU9BLEksRUFBTTtBQUNaLFdBQUtOLEtBQUwsQ0FBV08sT0FBWCxDQUFtQkQsSUFBbkIsRUFEWSxDQUNjO0FBQzNCOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBTUMsd0JBQXdCQyxpQ0FBaUNGLE9BQWpDLENBQTlCO0FBQUEsVUFDTVIsUUFBUVMsc0JBQXNCUCxHQUF0QixDQUEwQixVQUFTUyxvQkFBVCxFQUErQjtBQUMvRCxZQUFNQywyQkFBMkJDLDZCQUE2QkYsb0JBQTdCLEVBQW1ESCxPQUFuRCxDQUFqQztBQUFBLFlBQ01GLE9BQU9WLEtBQUtrQixtREFBTCxDQUF5REgsb0JBQXpELEVBQStFQyx3QkFBL0UsQ0FEYjs7QUFHQSxlQUFPTixJQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTVMsUUFBUSxJQUFJaEIsS0FBSixDQUFVQyxLQUFWLENBUGQ7O0FBU0EsYUFBT2UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmxCLEtBQWpCOztBQUVBLFNBQVNjLDRCQUFULENBQXNDRixvQkFBdEMsRUFBNERILE9BQTVELEVBQXFFO0FBQ25FLE1BQU1VLFFBQVFWLFFBQVFXLElBQVIsQ0FBYSxVQUFTRCxLQUFULEVBQWdCO0FBQ25DLFFBQU1FLFlBQVlDLE9BQU9DLElBQVAsQ0FBWUosS0FBWixDQUFsQjtBQUFBLFFBQ01LLGdCQUFnQnpCLE1BQU1zQixTQUFOLENBRHRCO0FBQUEsUUFFTUksNEJBQTRCRCxhQUZsQyxDQURtQyxDQUdlOztBQUVsRCxRQUFJQyw4QkFBOEJiLG9CQUFsQyxFQUF3RDtBQUN0RCxhQUFPLElBQVA7QUFDRDtBQUNGLEdBUk8sS0FRRixJQVJaO0FBQUEsTUFRa0I7QUFDWkMsNkJBQTRCTSxVQUFVLElBQVgsR0FDR0EsTUFBTVAsb0JBQU4sQ0FESCxHQUNpQztBQUM1QixNQVh0Qzs7QUFhQSxTQUFPQyx3QkFBUDtBQUNEOztBQUVELFNBQVNGLGdDQUFULENBQTBDRixPQUExQyxFQUFtRDtBQUNqRCxNQUFNQyx3QkFBd0JELFFBQVFOLEdBQVIsQ0FBWSxVQUFTZ0IsS0FBVCxFQUFnQjtBQUN4RCxRQUFNRSxZQUFZQyxPQUFPQyxJQUFQLENBQVlKLEtBQVosQ0FBbEI7QUFBQSxRQUNNSyxnQkFBZ0J6QixNQUFNc0IsU0FBTixDQUR0QjtBQUFBLFFBRU1ULHVCQUF1QlksYUFGN0IsQ0FEd0QsQ0FHWjs7QUFFNUMsV0FBT1osb0JBQVA7QUFDRCxHQU42QixDQUE5Qjs7QUFRQSxTQUFPRixxQkFBUDtBQUNEIiwiZmlsZSI6InJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIG1hcChjYWxsYmFjayApIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGdldFJ1bGUoZGVwdGgpIHtcbiAgICBjb25zdCBydWxlID0gKHRoaXMuYXJyYXlbZGVwdGhdIHx8IG51bGwpOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5hcnJheS51bnNoaWZ0KHJ1bGUpOyAvLy9cbiAgfVxuICBcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBhcnJheSA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5tYXAoZnVuY3Rpb24oc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGVudHJpZXMpLFxuICAgICAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTsgICAgICBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG5cbmZ1bmN0aW9uIGZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGVudHJpZXMpIHtcbiAgY29uc3QgZW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgICAgICAgZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7ICAvLy9cblxuICAgICAgICAgIGlmIChlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsLCAvLy9cbiAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gKGVudHJ5ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcbn1cblxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUVudHJpZXMoZW50cmllcykge1xuICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBlbnRyaWVzLm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9KTtcblxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xufVxuIl19