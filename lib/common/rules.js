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
    key: 'some',
    value: function some(callback) {
      return this.array.some(callback);
    }
  }, {
    key: 'reduce',
    value: function reduce(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: 'forEach',
    value: function forEach(callback) {
      this.array.forEach(callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUnVsZXMiLCJhcnJheSIsImNhbGxiYWNrIiwibWFwIiwic29tZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2giLCJkZXB0aCIsInJ1bGUiLCJ1bnNoaWZ0IiwiZW50cmllcyIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21FbnRyaWVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmaW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwicnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZW50cnkiLCJmaW5kIiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsUUFBUixDQUFiOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O3dCQUVHQyxRLEVBQVU7QUFBRSxhQUFPLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxDQUFlRCxRQUFmLENBQVA7QUFBa0M7Ozt5QkFFN0NBLFEsRUFBVTtBQUFFLGFBQU8sS0FBS0QsS0FBTCxDQUFXRyxJQUFYLENBQWdCRixRQUFoQixDQUFQO0FBQW1DOzs7MkJBRTdDQSxRLEVBQVVHLFksRUFBYztBQUFFLGFBQU8sS0FBS0osS0FBTCxDQUFXSyxNQUFYLENBQWtCSixRQUFsQixFQUE0QkcsWUFBNUIsQ0FBUDtBQUFtRDs7OzRCQUU1RUgsUSxFQUFXO0FBQUUsV0FBS0QsS0FBTCxDQUFXTSxPQUFYLENBQW1CTCxRQUFuQjtBQUErQjs7OzRCQUU1Q00sSyxFQUFPO0FBQ2IsVUFBTUMsT0FBUSxLQUFLUixLQUFMLENBQVdPLEtBQVgsS0FBcUIsSUFBbkMsQ0FEYSxDQUM2Qjs7QUFFMUMsYUFBT0MsSUFBUDtBQUNEOzs7NEJBRU9BLEksRUFBTTtBQUNaLFdBQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkQsSUFBbkIsRUFEWSxDQUNjO0FBQzNCOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBTUMsd0JBQXdCQyxpQ0FBaUNGLE9BQWpDLENBQTlCO0FBQUEsVUFDTVYsUUFBUVcsc0JBQXNCVCxHQUF0QixDQUEwQixVQUFTVyxvQkFBVCxFQUErQjtBQUMvRCxZQUFNQywyQkFBMkJDLDZCQUE2QkYsb0JBQTdCLEVBQW1ESCxPQUFuRCxDQUFqQztBQUFBLFlBQ01GLE9BQU9aLEtBQUtvQixtREFBTCxDQUF5REgsb0JBQXpELEVBQStFQyx3QkFBL0UsQ0FEYjs7QUFHQSxlQUFPTixJQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTVMsUUFBUSxJQUFJbEIsS0FBSixDQUFVQyxLQUFWLENBUGQ7O0FBU0EsYUFBT2lCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJwQixLQUFqQjs7QUFFQSxTQUFTZ0IsNEJBQVQsQ0FBc0NGLG9CQUF0QyxFQUE0REgsT0FBNUQsRUFBcUU7QUFDbkUsTUFBTVUsUUFBUVYsUUFBUVcsSUFBUixDQUFhLFVBQVNELEtBQVQsRUFBZ0I7QUFDbkMsUUFBTUUsWUFBWUMsT0FBT0MsSUFBUCxDQUFZSixLQUFaLENBQWxCO0FBQUEsUUFDTUssZ0JBQWdCM0IsTUFBTXdCLFNBQU4sQ0FEdEI7QUFBQSxRQUVNSSw0QkFBNEJELGFBRmxDLENBRG1DLENBR2U7O0FBRWxELFFBQUlDLDhCQUE4QmIsb0JBQWxDLEVBQXdEO0FBQ3RELGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FSTyxLQVFGLElBUlo7QUFBQSxNQVFrQjtBQUNaQyw2QkFBNEJNLFVBQVUsSUFBWCxHQUNHQSxNQUFNUCxvQkFBTixDQURILEdBQ2lDO0FBQzVCLE1BWHRDOztBQWFBLFNBQU9DLHdCQUFQO0FBQ0Q7O0FBRUQsU0FBU0YsZ0NBQVQsQ0FBMENGLE9BQTFDLEVBQW1EO0FBQ2pELE1BQU1DLHdCQUF3QkQsUUFBUVIsR0FBUixDQUFZLFVBQVNrQixLQUFULEVBQWdCO0FBQ3hELFFBQU1FLFlBQVlDLE9BQU9DLElBQVAsQ0FBWUosS0FBWixDQUFsQjtBQUFBLFFBQ01LLGdCQUFnQjNCLE1BQU13QixTQUFOLENBRHRCO0FBQUEsUUFFTVQsdUJBQXVCWSxhQUY3QixDQUR3RCxDQUdaOztBQUU1QyxXQUFPWixvQkFBUDtBQUNELEdBTjZCLENBQTlCOztBQVFBLFNBQU9GLHFCQUFQO0FBQ0QiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgbWFwKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaChjYWxsYmFjayApIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGdldFJ1bGUoZGVwdGgpIHtcbiAgICBjb25zdCBydWxlID0gKHRoaXMuYXJyYXlbZGVwdGhdIHx8IG51bGwpOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5hcnJheS51bnNoaWZ0KHJ1bGUpOyAvLy9cbiAgfVxuICBcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBhcnJheSA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5tYXAoZnVuY3Rpb24oc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGVudHJpZXMpLFxuICAgICAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTsgICAgICBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG5cbmZ1bmN0aW9uIGZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGVudHJpZXMpIHtcbiAgY29uc3QgZW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgICAgICAgZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7ICAvLy9cblxuICAgICAgICAgIGlmIChlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsLCAvLy9cbiAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gKGVudHJ5ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcbn1cblxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUVudHJpZXMoZW50cmllcykge1xuICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBlbnRyaWVzLm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9KTtcblxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xufVxuIl19