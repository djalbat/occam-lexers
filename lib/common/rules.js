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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUnVsZXMiLCJhcnJheSIsImNhbGxiYWNrIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZGVwdGgiLCJydWxlIiwidW5zaGlmdCIsImVudHJpZXMiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tRW50cmllcyIsIm1hcCIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsImZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsInJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImVudHJ5IiwiZmluZCIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwiZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSIsImZvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsUUFBUixDQUFiOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzJCQUVNQyxRLEVBQVVDLFksRUFBYztBQUFFLGFBQU8sS0FBS0YsS0FBTCxDQUFXRyxNQUFYLENBQWtCRixRQUFsQixFQUE0QkMsWUFBNUIsQ0FBUDtBQUFtRDs7OzRCQUU1RUUsSyxFQUFPO0FBQ2IsVUFBTUMsT0FBUSxLQUFLTCxLQUFMLENBQVdJLEtBQVgsS0FBcUIsSUFBbkMsQ0FEYSxDQUM2Qjs7QUFFMUMsYUFBT0MsSUFBUDtBQUNEOzs7NEJBRU9BLEksRUFBTTtBQUNaLFdBQUtMLEtBQUwsQ0FBV00sT0FBWCxDQUFtQkQsSUFBbkIsRUFEWSxDQUNjO0FBQzNCOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBTUMsd0JBQXdCQyxpQ0FBaUNGLE9BQWpDLENBQTlCO0FBQUEsVUFDTVAsUUFBUVEsc0JBQXNCRSxHQUF0QixDQUEwQixVQUFTQyxvQkFBVCxFQUErQjtBQUMvRCxZQUFNQywyQkFBMkJDLDZCQUE2QkYsb0JBQTdCLEVBQW1ESixPQUFuRCxDQUFqQztBQUFBLFlBQ01GLE9BQU9ULEtBQUtrQixtREFBTCxDQUF5REgsb0JBQXpELEVBQStFQyx3QkFBL0UsQ0FEYjs7QUFHQSxlQUFPUCxJQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTVUsUUFBUSxJQUFJaEIsS0FBSixDQUFVQyxLQUFWLENBUGQ7O0FBU0EsYUFBT2UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmxCLEtBQWpCOztBQUVBLFNBQVNjLDRCQUFULENBQXNDRixvQkFBdEMsRUFBNERKLE9BQTVELEVBQXFFO0FBQ25FLE1BQU1XLFFBQVFYLFFBQVFZLElBQVIsQ0FBYSxVQUFTRCxLQUFULEVBQWdCO0FBQ25DLFFBQU1FLFlBQVlDLE9BQU9DLElBQVAsQ0FBWUosS0FBWixDQUFsQjtBQUFBLFFBQ01LLGdCQUFnQnpCLE1BQU1zQixTQUFOLENBRHRCO0FBQUEsUUFFTUksNEJBQTRCRCxhQUZsQztBQUFBLFFBRWtEO0FBQzVDRSxZQUFTRCw4QkFBOEJiLG9CQUg3Qzs7QUFLQSxXQUFPYyxLQUFQO0FBQ0QsR0FQTyxLQU9GLElBUFo7QUFBQSxNQU9rQjtBQUNaYiw2QkFBNEJNLFVBQVUsSUFBWCxHQUNHQSxNQUFNUCxvQkFBTixDQURILEdBQ2lDO0FBQzVCLE1BVnRDOztBQVlBLFNBQU9DLHdCQUFQO0FBQ0Q7O0FBRUQsU0FBU0gsZ0NBQVQsQ0FBMENGLE9BQTFDLEVBQW1EO0FBQ2pELE1BQU1DLHdCQUF3QkQsUUFBUUcsR0FBUixDQUFZLFVBQVNRLEtBQVQsRUFBZ0I7QUFDeEQsUUFBTUUsWUFBWUMsT0FBT0MsSUFBUCxDQUFZSixLQUFaLENBQWxCO0FBQUEsUUFDTUssZ0JBQWdCekIsTUFBTXNCLFNBQU4sQ0FEdEI7QUFBQSxRQUVNVCx1QkFBdUJZLGFBRjdCLENBRHdELENBR1o7O0FBRTVDLFdBQU9aLG9CQUFQO0FBQ0QsR0FONkIsQ0FBOUI7O0FBUUEsU0FBT0gscUJBQVA7QUFDRCIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cbiAgXG4gIHJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGdldFJ1bGUoZGVwdGgpIHtcbiAgICBjb25zdCBydWxlID0gKHRoaXMuYXJyYXlbZGVwdGhdIHx8IG51bGwpOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5hcnJheS51bnNoaWZ0KHJ1bGUpOyAvLy9cbiAgfVxuICBcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBhcnJheSA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5tYXAoZnVuY3Rpb24oc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGVudHJpZXMpLFxuICAgICAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTsgICAgICBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG5cbmZ1bmN0aW9uIGZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGVudHJpZXMpIHtcbiAgY29uc3QgZW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgICAgICAgZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXksICAvLy9cbiAgICAgICAgICAgICAgICBmb3VuZCA9IChlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgIH0pIHx8IG51bGwsIC8vL1xuICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSAoZW50cnkgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlbc2lnbmlmaWNhbnRUb2tlblR5cGVdIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xufVxuXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tRW50cmllcyhlbnRyaWVzKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGVudHJpZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gZmlyc3RFbnRyeUtleTsgLy8vXG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XG59XG4iXX0=