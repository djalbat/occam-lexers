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
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var significantTokenTypes = Rules.significantTokenTypesFromGrammar(grammar),
          array = significantTokenTypes.map(function (significantTokenType) {
        var regularExpressionPattern = Rules.findRegularExpressionPattern(significantTokenType, grammar),
            rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }, {
    key: 'findRegularExpressionPattern',
    value: function findRegularExpressionPattern(significantTokenType, grammar) {
      var regularExpressionPattern = grammar.reduce(function (regularExpressionPattern, entry) {
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
  }, {
    key: 'significantTokenTypesFromGrammar',
    value: function significantTokenTypesFromGrammar(grammar) {
      var significantTokenTypes = grammar.map(function (entry) {
        var entryKeys = Object.keys(entry),
            firstEntryKey = arrayUtil.first(entryKeys),
            significantTokenType = firstEntryKey; ///

        return significantTokenType;
      });

      return significantTokenTypes;
    }
  }]);

  return Rules;
}();

module.exports = Rules;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJSdWxlcyIsImFycmF5IiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJkZXB0aCIsInJ1bGUiLCJ1bnNoaWZ0IiwiZ3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyIiwibWFwIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmaW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwicnVsZXMiLCJlbnRyeSIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwiZmlyc3QiLCJlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxlQUFSLENBRGxCOztJQUdNRSxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MkJBRU1DLFEsRUFBVUMsWSxFQUFjO0FBQUUsYUFBTyxLQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0JGLFFBQWxCLEVBQTRCQyxZQUE1QixDQUFQO0FBQW1EOzs7NEJBRTVFRSxLLEVBQU87QUFDYixVQUFNQyxPQUFRLEtBQUtMLEtBQUwsQ0FBV0ksS0FBWCxLQUFxQixJQUFuQyxDQURhLENBQzZCOztBQUUxQyxhQUFPQyxJQUFQO0FBQ0Q7Ozs0QkFFT0EsSSxFQUFNO0FBQ1osV0FBS0wsS0FBTCxDQUFXTSxPQUFYLENBQW1CRCxJQUFuQixFQURZLENBQ2M7QUFDM0I7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFNQyx3QkFBd0JULE1BQU1VLGdDQUFOLENBQXVDRixPQUF2QyxDQUE5QjtBQUFBLFVBQ01QLFFBQVFRLHNCQUFzQkUsR0FBdEIsQ0FBMEIsVUFBU0Msb0JBQVQsRUFBK0I7QUFDL0QsWUFBTUMsMkJBQTJCYixNQUFNYyw0QkFBTixDQUFtQ0Ysb0JBQW5DLEVBQXlESixPQUF6RCxDQUFqQztBQUFBLFlBQ01GLE9BQU9ULEtBQUtrQixtREFBTCxDQUF5REgsb0JBQXpELEVBQStFQyx3QkFBL0UsQ0FEYjs7QUFHQSxlQUFPUCxJQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTVUsUUFBUSxJQUFJaEIsS0FBSixDQUFVQyxLQUFWLENBUGQ7O0FBU0EsYUFBT2UsS0FBUDtBQUNEOzs7aURBRW1DSixvQixFQUFzQkosTyxFQUFTO0FBQ2pFLFVBQU1LLDJCQUEyQkwsUUFBUUosTUFBUixDQUFlLFVBQVNTLHdCQUFULEVBQW1DSSxLQUFuQyxFQUEwQztBQUNsRixZQUFJSiw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckMsY0FBTUssWUFBWUMsT0FBT0MsSUFBUCxDQUFZSCxLQUFaLENBQWxCO0FBQUEsY0FDTUksZ0JBQWdCdEIsVUFBVXVCLEtBQVYsQ0FBZ0JKLFNBQWhCLENBRHRCO0FBQUEsY0FFTUssNEJBQTRCRixhQUZsQyxDQURxQyxDQUdhOztBQUVsRCxjQUFJRSw4QkFBOEJYLG9CQUFsQyxFQUF3RDtBQUN0REMsdUNBQTJCSSxNQUFNTCxvQkFBTixDQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsZUFBT0Msd0JBQVA7QUFDRCxPQVowQixFQVl4QixJQVp3QixDQUFqQzs7QUFjQSxhQUFPQSx3QkFBUDtBQUNEOzs7cURBRXVDTCxPLEVBQVM7QUFDL0MsVUFBTUMsd0JBQXdCRCxRQUFRRyxHQUFSLENBQVksVUFBU00sS0FBVCxFQUFnQjtBQUNsRCxZQUFNQyxZQUFZQyxPQUFPQyxJQUFQLENBQVlILEtBQVosQ0FBbEI7QUFBQSxZQUNNSSxnQkFBZ0J0QixVQUFVdUIsS0FBVixDQUFnQkosU0FBaEIsQ0FEdEI7QUFBQSxZQUVNTix1QkFBdUJTLGFBRjdCLENBRGtELENBR047O0FBRTVDLGVBQU9ULG9CQUFQO0FBQ0QsT0FOdUIsQ0FBOUI7O0FBUUEsYUFBT0gscUJBQVA7QUFDRDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJ6QixLQUFqQiIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpO1xuXG5jbGFzcyBSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG4gIFxuICByZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBnZXRSdWxlKGRlcHRoKSB7XG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLmFycmF5W2RlcHRoXSB8fCBudWxsKTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMuYXJyYXkudW5zaGlmdChydWxlKTsgLy8vXG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gUnVsZXMuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgYXJyYXkgPSBzaWduaWZpY2FudFRva2VuVHlwZXMubWFwKGZ1bmN0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgICAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBSdWxlcy5maW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCBncmFtbWFyKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcbiAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7ICAgICAgXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZXMgPSBuZXcgUnVsZXMoYXJyYXkpO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCBncmFtbWFyKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZ3JhbW1hci5yZWR1Y2UoZnVuY3Rpb24ocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBlbnRyeSkge1xuICAgICAgICAgICAgaWYgKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBhcnJheVV0aWwuZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7ICAvLy9cblxuICAgICAgICAgICAgICBpZiAoZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9PT0gc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyeVtzaWduaWZpY2FudFRva2VuVHlwZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG4gIH1cblxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gYXJyYXlVdGlsLmZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG4iXX0=