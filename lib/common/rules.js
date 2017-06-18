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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJSdWxlcyIsImFycmF5IiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJkZXB0aCIsInJ1bGUiLCJncmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIiLCJtYXAiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsImZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJydWxlcyIsImVudHJ5IiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJmaXJzdCIsImVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGVBQVIsQ0FEbEI7O0lBR01FLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsyQkFFTUMsUSxFQUFVQyxZLEVBQWM7QUFBRSxhQUFPLEtBQUtGLEtBQUwsQ0FBV0csTUFBWCxDQUFrQkYsUUFBbEIsRUFBNEJDLFlBQTVCLENBQVA7QUFBbUQ7Ozs0QkFFNUVFLEssRUFBTztBQUNiLFVBQU1DLE9BQVEsS0FBS0wsS0FBTCxDQUFXSSxLQUFYLEtBQXFCLElBQW5DLENBRGEsQ0FDNkI7O0FBRTFDLGFBQU9DLElBQVA7QUFDRDs7O2dDQUVrQkMsTyxFQUFTO0FBQzFCLFVBQU1DLHdCQUF3QlIsTUFBTVMsZ0NBQU4sQ0FBdUNGLE9BQXZDLENBQTlCO0FBQUEsVUFDTU4sUUFBUU8sc0JBQXNCRSxHQUF0QixDQUEwQixVQUFTQyxvQkFBVCxFQUErQjtBQUMvRCxZQUFNQywyQkFBMkJaLE1BQU1hLDRCQUFOLENBQW1DRixvQkFBbkMsRUFBeURKLE9BQXpELENBQWpDO0FBQUEsWUFDTUQsT0FBT1QsS0FBS2lCLG1EQUFMLENBQXlESCxvQkFBekQsRUFBK0VDLHdCQUEvRSxDQURiOztBQUdBLGVBQU9OLElBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NUyxRQUFRLElBQUlmLEtBQUosQ0FBVUMsS0FBVixDQVBkOztBQVNBLGFBQU9jLEtBQVA7QUFDRDs7O2lEQUVtQ0osb0IsRUFBc0JKLE8sRUFBUztBQUNqRSxVQUFNSywyQkFBMkJMLFFBQVFILE1BQVIsQ0FBZSxVQUFTUSx3QkFBVCxFQUFtQ0ksS0FBbkMsRUFBMEM7QUFDbEYsWUFBSUosNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDLGNBQU1LLFlBQVlDLE9BQU9DLElBQVAsQ0FBWUgsS0FBWixDQUFsQjtBQUFBLGNBQ01JLGdCQUFnQnJCLFVBQVVzQixLQUFWLENBQWdCSixTQUFoQixDQUR0QjtBQUFBLGNBRU1LLDRCQUE0QkYsYUFGbEMsQ0FEcUMsQ0FHYTs7QUFFbEQsY0FBSUUsOEJBQThCWCxvQkFBbEMsRUFBd0Q7QUFDdERDLHVDQUEyQkksTUFBTUwsb0JBQU4sQ0FBM0I7QUFDRDtBQUNGOztBQUVELGVBQU9DLHdCQUFQO0FBQ0QsT0FaMEIsRUFZeEIsSUFad0IsQ0FBakM7O0FBY0EsYUFBT0Esd0JBQVA7QUFDRDs7O3FEQUV1Q0wsTyxFQUFTO0FBQy9DLFVBQU1DLHdCQUF3QkQsUUFBUUcsR0FBUixDQUFZLFVBQVNNLEtBQVQsRUFBZ0I7QUFDbEQsWUFBTUMsWUFBWUMsT0FBT0MsSUFBUCxDQUFZSCxLQUFaLENBQWxCO0FBQUEsWUFDTUksZ0JBQWdCckIsVUFBVXNCLEtBQVYsQ0FBZ0JKLFNBQWhCLENBRHRCO0FBQUEsWUFFTU4sdUJBQXVCUyxhQUY3QixDQURrRCxDQUdOOztBQUU1QyxlQUFPVCxvQkFBUDtBQUNELE9BTnVCLENBQTlCOztBQVFBLGFBQU9ILHFCQUFQO0FBQ0Q7Ozs7OztBQUdIZSxPQUFPQyxPQUFQLEdBQWlCeEIsS0FBakIiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuICBcbiAgcmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZ2V0UnVsZShkZXB0aCkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5hcnJheVtkZXB0aF0gfHwgbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gUnVsZXMuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgYXJyYXkgPSBzaWduaWZpY2FudFRva2VuVHlwZXMubWFwKGZ1bmN0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgICAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBSdWxlcy5maW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCBncmFtbWFyKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcbiAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7ICAgICAgXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZXMgPSBuZXcgUnVsZXMoYXJyYXkpO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCBncmFtbWFyKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZ3JhbW1hci5yZWR1Y2UoZnVuY3Rpb24ocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBlbnRyeSkge1xuICAgICAgICAgICAgaWYgKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBhcnJheVV0aWwuZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7ICAvLy9cblxuICAgICAgICAgICAgICBpZiAoZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9PT0gc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyeVtzaWduaWZpY2FudFRva2VuVHlwZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG4gIH1cblxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gYXJyYXlVdGlsLmZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG4iXX0=