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
      var array = entries.map(function (entry) {
        var keys = Object.keys(entry),
            firstKey = first(keys),
            type = firstKey,
            ///
        regularExpressionPattern = entry[type],
            rule = Rule.fromTypeAndRegularExpressionPattern(type, regularExpressionPattern);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }]);

  return Rules;
}();

module.exports = Rules;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUnVsZXMiLCJhcnJheSIsImNhbGxiYWNrIiwibWFwIiwic29tZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2giLCJkZXB0aCIsInJ1bGUiLCJ1bnNoaWZ0IiwiZW50cmllcyIsImVudHJ5Iiwia2V5cyIsIk9iamVjdCIsImZpcnN0S2V5IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsImZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwicnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsUUFBUixDQUFiOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O3dCQUVHQyxRLEVBQVU7QUFBRSxhQUFPLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxDQUFlRCxRQUFmLENBQVA7QUFBa0M7Ozt5QkFFN0NBLFEsRUFBVTtBQUFFLGFBQU8sS0FBS0QsS0FBTCxDQUFXRyxJQUFYLENBQWdCRixRQUFoQixDQUFQO0FBQW1DOzs7MkJBRTdDQSxRLEVBQVVHLFksRUFBYztBQUFFLGFBQU8sS0FBS0osS0FBTCxDQUFXSyxNQUFYLENBQWtCSixRQUFsQixFQUE0QkcsWUFBNUIsQ0FBUDtBQUFtRDs7OzRCQUU1RUgsUSxFQUFXO0FBQUUsV0FBS0QsS0FBTCxDQUFXTSxPQUFYLENBQW1CTCxRQUFuQjtBQUErQjs7OzRCQUU1Q00sSyxFQUFPO0FBQ2IsVUFBTUMsT0FBUSxLQUFLUixLQUFMLENBQVdPLEtBQVgsS0FBcUIsSUFBbkMsQ0FEYSxDQUM2Qjs7QUFFMUMsYUFBT0MsSUFBUDtBQUNEOzs7NEJBRU9BLEksRUFBTTtBQUNaLFdBQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkQsSUFBbkIsRUFEWSxDQUNjO0FBQzNCOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBTVYsUUFBUVUsUUFBUVIsR0FBUixDQUFZLFVBQUNTLEtBQUQsRUFBVztBQUM3QixZQUFNQyxPQUFPQyxPQUFPRCxJQUFQLENBQVlELEtBQVosQ0FBYjtBQUFBLFlBQ01HLFdBQVdoQixNQUFNYyxJQUFOLENBRGpCO0FBQUEsWUFFTUcsT0FBT0QsUUFGYjtBQUFBLFlBRXdCO0FBQ2xCRSxtQ0FBMkJMLE1BQU1JLElBQU4sQ0FIakM7QUFBQSxZQUlNUCxPQUFPWixLQUFLcUIsbUNBQUwsQ0FBeUNGLElBQXpDLEVBQStDQyx3QkFBL0MsQ0FKYjs7QUFNQSxlQUFPUixJQUFQO0FBQ0QsT0FSTyxDQUFkO0FBQUEsVUFTTVUsUUFBUSxJQUFJbkIsS0FBSixDQUFVQyxLQUFWLENBVGQ7O0FBV0EsYUFBT2tCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJyQixLQUFqQiIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBtYXAoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICByZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBmb3JFYWNoKGNhbGxiYWNrICkgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZ2V0UnVsZShkZXB0aCkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5hcnJheVtkZXB0aF0gfHwgbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLmFycmF5LnVuc2hpZnQocnVsZSk7IC8vL1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xuICAgIGNvbnN0IGFycmF5ID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgICAgICAgICAgZmlyc3RLZXkgPSBmaXJzdChrZXlzKSxcbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBmaXJzdEtleSwgIC8vL1xuICAgICAgICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbdHlwZV0sXG4gICAgICAgICAgICAgICAgICBydWxlID0gUnVsZS5mcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybih0eXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTsgICAgICBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG4iXX0=