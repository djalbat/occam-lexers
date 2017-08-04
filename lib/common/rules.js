'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rule = require('./rule');

var array = necessary.array;

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
        firstEntryKey = array.first(entryKeys),
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
        firstEntryKey = array.first(entryKeys),
        significantTokenType = firstEntryKey; ///

    return significantTokenType;
  });

  return significantTokenTypes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJhcnJheSIsIlJ1bGVzIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJkZXB0aCIsInJ1bGUiLCJ1bnNoaWZ0IiwiZW50cmllcyIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21FbnRyaWVzIiwibWFwIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmaW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwicnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZW50cnkiLCJmaW5kIiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJmaXJzdCIsImVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUiLCJmb3VuZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjs7SUFFUUUsSyxHQUFVSCxTLENBQVZHLEs7O0lBRUZDLEs7QUFDSixpQkFBWUQsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsyQkFFTUUsUSxFQUFVQyxZLEVBQWM7QUFBRSxhQUFPLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxDQUFrQkYsUUFBbEIsRUFBNEJDLFlBQTVCLENBQVA7QUFBbUQ7Ozs0QkFFNUVFLEssRUFBTztBQUNiLFVBQU1DLE9BQVEsS0FBS04sS0FBTCxDQUFXSyxLQUFYLEtBQXFCLElBQW5DLENBRGEsQ0FDNkI7O0FBRTFDLGFBQU9DLElBQVA7QUFDRDs7OzRCQUVPQSxJLEVBQU07QUFDWixXQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJELElBQW5CLEVBRFksQ0FDYztBQUMzQjs7O2dDQUVrQkUsTyxFQUFTO0FBQzFCLFVBQU1DLHdCQUF3QkMsaUNBQWlDRixPQUFqQyxDQUE5QjtBQUFBLFVBQ01SLFFBQVFTLHNCQUFzQkUsR0FBdEIsQ0FBMEIsVUFBU0Msb0JBQVQsRUFBK0I7QUFDL0QsWUFBTUMsMkJBQTJCQyw2QkFBNkJGLG9CQUE3QixFQUFtREosT0FBbkQsQ0FBakM7QUFBQSxZQUNNRixPQUFPUCxLQUFLZ0IsbURBQUwsQ0FBeURILG9CQUF6RCxFQUErRUMsd0JBQS9FLENBRGI7O0FBR0EsZUFBT1AsSUFBUDtBQUNELE9BTE8sQ0FEZDtBQUFBLFVBT01VLFFBQVEsSUFBSWYsS0FBSixDQUFVRCxLQUFWLENBUGQ7O0FBU0EsYUFBT2dCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJqQixLQUFqQjs7QUFFQSxTQUFTYSw0QkFBVCxDQUFzQ0Ysb0JBQXRDLEVBQTRESixPQUE1RCxFQUFxRTtBQUNuRSxNQUFNVyxRQUFRWCxRQUFRWSxJQUFSLENBQWEsVUFBU0QsS0FBVCxFQUFnQjtBQUNuQyxRQUFNRSxZQUFZQyxPQUFPQyxJQUFQLENBQVlKLEtBQVosQ0FBbEI7QUFBQSxRQUNNSyxnQkFBZ0J4QixNQUFNeUIsS0FBTixDQUFZSixTQUFaLENBRHRCO0FBQUEsUUFFTUssNEJBQTRCRixhQUZsQztBQUFBLFFBRWtEO0FBQzVDRyxZQUFTRCw4QkFBOEJkLG9CQUg3Qzs7QUFLQSxXQUFPZSxLQUFQO0FBQ0QsR0FQTyxLQU9GLElBUFo7QUFBQSxNQU9rQjtBQUNaZCw2QkFBNEJNLFVBQVUsSUFBWCxHQUNHQSxNQUFNUCxvQkFBTixDQURILEdBQ2lDO0FBQzVCLE1BVnRDOztBQVlBLFNBQU9DLHdCQUFQO0FBQ0Q7O0FBRUQsU0FBU0gsZ0NBQVQsQ0FBMENGLE9BQTFDLEVBQW1EO0FBQ2pELE1BQU1DLHdCQUF3QkQsUUFBUUcsR0FBUixDQUFZLFVBQVNRLEtBQVQsRUFBZ0I7QUFDeEQsUUFBTUUsWUFBWUMsT0FBT0MsSUFBUCxDQUFZSixLQUFaLENBQWxCO0FBQUEsUUFDTUssZ0JBQWdCeEIsTUFBTXlCLEtBQU4sQ0FBWUosU0FBWixDQUR0QjtBQUFBLFFBRU1ULHVCQUF1QlksYUFGN0IsQ0FEd0QsQ0FHWjs7QUFFNUMsV0FBT1osb0JBQVA7QUFDRCxHQU42QixDQUE5Qjs7QUFRQSxTQUFPSCxxQkFBUDtBQUNEIiwiZmlsZSI6InJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3Nhcnk7XG5cbmNsYXNzIFJ1bGVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cbiAgXG4gIHJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGdldFJ1bGUoZGVwdGgpIHtcbiAgICBjb25zdCBydWxlID0gKHRoaXMuYXJyYXlbZGVwdGhdIHx8IG51bGwpOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5hcnJheS51bnNoaWZ0KHJ1bGUpOyAvLy9cbiAgfVxuICBcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBhcnJheSA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5tYXAoZnVuY3Rpb24oc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGVudHJpZXMpLFxuICAgICAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTsgICAgICBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG5cbmZ1bmN0aW9uIGZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGVudHJpZXMpIHtcbiAgY29uc3QgZW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGFycmF5LmZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgICAgICAgZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXksICAvLy9cbiAgICAgICAgICAgICAgICBmb3VuZCA9IChlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgIH0pIHx8IG51bGwsIC8vL1xuICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSAoZW50cnkgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlbc2lnbmlmaWNhbnRUb2tlblR5cGVdIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xufVxuXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tRW50cmllcyhlbnRyaWVzKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGVudHJpZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBhcnJheS5maXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gZmlyc3RFbnRyeUtleTsgLy8vXG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XG59XG4iXX0=