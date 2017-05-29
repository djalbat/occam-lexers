'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    util = require('../util');

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
              firstEntryKey = first(entryKeys),
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
            firstEntryKey = first(entryKeys),
            significantTokenType = firstEntryKey; ///

        return significantTokenType;
      });

      return significantTokenTypes;
    }
  }]);

  return Rules;
}();

module.exports = Rules;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJhcnJheSIsImNhbGxiYWNrIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZGVwdGgiLCJydWxlIiwiZ3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyIiwibWFwIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmaW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwicnVsZXMiLCJlbnRyeSIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwiZmlyc3QiLCJlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxTQUFSLENBRGI7O0lBR01FLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsyQkFFTUMsUSxFQUFVQyxZLEVBQWM7QUFBRSxhQUFPLEtBQUtGLEtBQUwsQ0FBV0csTUFBWCxDQUFrQkYsUUFBbEIsRUFBNEJDLFlBQTVCLENBQVA7QUFBbUQ7Ozs0QkFFNUVFLEssRUFBTztBQUNiLFVBQU1DLE9BQVEsS0FBS0wsS0FBTCxDQUFXSSxLQUFYLEtBQXFCLElBQW5DLENBRGEsQ0FDNkI7O0FBRTFDLGFBQU9DLElBQVA7QUFDRDs7O2dDQUVrQkMsTyxFQUFTO0FBQzFCLFVBQU1DLHdCQUF3QlIsTUFBTVMsZ0NBQU4sQ0FBdUNGLE9BQXZDLENBQTlCO0FBQUEsVUFDTU4sUUFBUU8sc0JBQXNCRSxHQUF0QixDQUEwQixVQUFTQyxvQkFBVCxFQUErQjtBQUMvRCxZQUFNQywyQkFBMkJaLE1BQU1hLDRCQUFOLENBQW1DRixvQkFBbkMsRUFBeURKLE9BQXpELENBQWpDO0FBQUEsWUFDTUQsT0FBT1QsS0FBS2lCLG1EQUFMLENBQXlESCxvQkFBekQsRUFBK0VDLHdCQUEvRSxDQURiOztBQUdBLGVBQU9OLElBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NUyxRQUFRLElBQUlmLEtBQUosQ0FBVUMsS0FBVixDQVBkOztBQVNBLGFBQU9jLEtBQVA7QUFDRDs7O2lEQUVtQ0osb0IsRUFBc0JKLE8sRUFBUztBQUNqRSxVQUFNSywyQkFBMkJMLFFBQVFILE1BQVIsQ0FBZSxVQUFTUSx3QkFBVCxFQUFtQ0ksS0FBbkMsRUFBMEM7QUFDbEYsWUFBSUosNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDLGNBQU1LLFlBQVlDLE9BQU9DLElBQVAsQ0FBWUgsS0FBWixDQUFsQjtBQUFBLGNBQ01JLGdCQUFnQkMsTUFBTUosU0FBTixDQUR0QjtBQUFBLGNBRU1LLDRCQUE0QkYsYUFGbEMsQ0FEcUMsQ0FHYTs7QUFFbEQsY0FBSUUsOEJBQThCWCxvQkFBbEMsRUFBd0Q7QUFDdERDLHVDQUEyQkksTUFBTUwsb0JBQU4sQ0FBM0I7QUFDRDtBQUNGOztBQUVELGVBQU9DLHdCQUFQO0FBQ0QsT0FaMEIsRUFZeEIsSUFad0IsQ0FBakM7O0FBY0EsYUFBT0Esd0JBQVA7QUFDRDs7O3FEQUV1Q0wsTyxFQUFTO0FBQy9DLFVBQU1DLHdCQUF3QkQsUUFBUUcsR0FBUixDQUFZLFVBQVNNLEtBQVQsRUFBZ0I7QUFDbEQsWUFBTUMsWUFBWUMsT0FBT0MsSUFBUCxDQUFZSCxLQUFaLENBQWxCO0FBQUEsWUFDTUksZ0JBQWdCQyxNQUFNSixTQUFOLENBRHRCO0FBQUEsWUFFTU4sdUJBQXVCUyxhQUY3QixDQURrRCxDQUdOOztBQUU1QyxlQUFPVCxvQkFBUDtBQUNELE9BTnVCLENBQTlCOztBQVFBLGFBQU9ILHFCQUFQO0FBQ0Q7Ozs7OztBQUdIZSxPQUFPQyxPQUFQLEdBQWlCeEIsS0FBakI7O0FBRUEsU0FBU3FCLEtBQVQsQ0FBZXBCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuICBcbiAgcmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZ2V0UnVsZShkZXB0aCkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5hcnJheVtkZXB0aF0gfHwgbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gUnVsZXMuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgYXJyYXkgPSBzaWduaWZpY2FudFRva2VuVHlwZXMubWFwKGZ1bmN0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgICAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBSdWxlcy5maW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCBncmFtbWFyKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcbiAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7ICAgICAgXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZXMgPSBuZXcgUnVsZXMoYXJyYXkpO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCBncmFtbWFyKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZ3JhbW1hci5yZWR1Y2UoZnVuY3Rpb24ocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBlbnRyeSkge1xuICAgICAgICAgICAgaWYgKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlID0gZmlyc3RFbnRyeUtleTsgIC8vL1xuXG4gICAgICAgICAgICAgIGlmIChlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xuICAgICAgICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcbiAgfVxuXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBmaXJzdEVudHJ5S2V5OyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH0iXX0=