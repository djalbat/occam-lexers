'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
    key: 'minBarMinusOne',
    value: function minBarMinusOne() {
      var values = Array.prototype.slice.call(arguments),
          minBarMinusOne = undefined;

      values.forEach(function (value) {
        if (value > -1) {
          minBarMinusOne = minBarMinusOne === undefined ? value : Math.min(minBarMinusOne, value);
        }
      });

      return minBarMinusOne;
    }
  }, {
    key: 'spliceArray',
    value: function spliceArray(array, start, deleteCount, itemsArray) {
      var args = [start, deleteCount].concat(itemsArray);

      Array.prototype.splice.apply(array, args);
    }
  }, {
    key: 'indexOf',
    value: function indexOf(array, element) {
      for (var index = 0; index < array.length; index++) {
        if (array[index] === element) {
          return index;
        }
      }
    }
  }, {
    key: 'regExpPattern',
    value: function regExpPattern(regExp) {
      var regExpStr = regExp.toString(),
          regExpPattern = regExpStr.replace(/^\//, '').replace(/\/(?:[^\/]*?)$/, '').replace(/\\/g, '\\\\'); ///

      return regExpPattern;
    }
  }, {
    key: 'typeFromEntry',
    value: function typeFromEntry(entry) {
      var type = Object.keys(entry)[0]; ///

      return type;
    }
  }, {
    key: 'regExpFromEntry',
    value: function regExpFromEntry(entry) {
      var type = util.typeFromEntry(entry),
          regExp = entry[type];

      return regExp;
    }
  }, {
    key: 'findRegExpFromType',
    value: function findRegExpFromType(grammar, type) {
      var entry = grammar.find(function (entry) {
        var grammarType = util.typeFromEntry(entry),
            found = grammarType === type;

        return found;
      }),
          regExp = util.regExpFromEntry(entry);

      return regExp;
    }
  }]);

  return util;
}();

module.exports = util;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1pbkJhck1pbnVzT25lIiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJsZW5ndGgiLCJyZWdFeHAiLCJyZWdFeHBTdHIiLCJ0b1N0cmluZyIsInJlZ0V4cFBhdHRlcm4iLCJyZXBsYWNlIiwiZW50cnkiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsInR5cGVGcm9tRW50cnkiLCJncmFtbWFyIiwiZmluZCIsImdyYW1tYXJUeXBlIiwiZm91bmQiLCJyZWdFeHBGcm9tRW50cnkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7Ozs7Ozs7cUNBQ29CO0FBQ3RCLFVBQUlDLFNBQVNDLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQkMsU0FBM0IsQ0FBYjtBQUFBLFVBQ0lDLGlCQUFpQkMsU0FEckI7O0FBR0FQLGFBQU9RLE9BQVAsQ0FBZSxVQUFTQyxLQUFULEVBQWdCO0FBQzdCLFlBQUlBLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2RILDJCQUFtQkEsbUJBQW1CQyxTQUFyQixHQUFtQ0UsS0FBbkMsR0FBMkNDLEtBQUtDLEdBQUwsQ0FBU0wsY0FBVCxFQUF5QkcsS0FBekIsQ0FBNUQ7QUFDRDtBQUNGLE9BSkQ7O0FBTUEsYUFBT0gsY0FBUDtBQUNEOzs7Z0NBRWtCTSxLLEVBQU9DLEssRUFBT0MsVyxFQUFhQyxVLEVBQVk7QUFDeEQsVUFBSUMsT0FBTyxDQUFDSCxLQUFELEVBQVFDLFdBQVIsRUFBcUJHLE1BQXJCLENBQTRCRixVQUE1QixDQUFYOztBQUVBZCxZQUFNQyxTQUFOLENBQWdCZ0IsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCUCxLQUE3QixFQUFvQ0ksSUFBcEM7QUFDRDs7OzRCQUVjSixLLEVBQU9RLE8sRUFBUztBQUM3QixXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFULE1BQU1VLE1BQWxDLEVBQTBDRCxPQUExQyxFQUFtRDtBQUNqRCxZQUFJVCxNQUFNUyxLQUFOLE1BQWlCRCxPQUFyQixFQUE4QjtBQUM1QixpQkFBT0MsS0FBUDtBQUNEO0FBQ0Y7QUFDRjs7O2tDQUVvQkUsTSxFQUFRO0FBQzNCLFVBQUlDLFlBQVlELE9BQU9FLFFBQVAsRUFBaEI7QUFBQSxVQUNJQyxnQkFBZ0JGLFVBQVVHLE9BQVYsQ0FBa0IsS0FBbEIsRUFBd0IsRUFBeEIsRUFBNEJBLE9BQTVCLENBQW9DLGdCQUFwQyxFQUFxRCxFQUFyRCxFQUF5REEsT0FBekQsQ0FBaUUsS0FBakUsRUFBdUUsTUFBdkUsQ0FEcEIsQ0FEMkIsQ0FFeUU7O0FBRXBHLGFBQU9ELGFBQVA7QUFDRDs7O2tDQUVvQkUsSyxFQUFPO0FBQzFCLFVBQUlDLE9BQU9DLE9BQU9DLElBQVAsQ0FBWUgsS0FBWixFQUFtQixDQUFuQixDQUFYLENBRDBCLENBQ1M7O0FBRW5DLGFBQU9DLElBQVA7QUFDRDs7O29DQUVzQkQsSyxFQUFPO0FBQzVCLFVBQUlDLE9BQU85QixLQUFLaUMsYUFBTCxDQUFtQkosS0FBbkIsQ0FBWDtBQUFBLFVBQ0lMLFNBQVNLLE1BQU1DLElBQU4sQ0FEYjs7QUFHQSxhQUFPTixNQUFQO0FBQ0Q7Ozt1Q0FFeUJVLE8sRUFBU0osSSxFQUFNO0FBQ3ZDLFVBQUlELFFBQVFLLFFBQVFDLElBQVIsQ0FBYSxVQUFTTixLQUFULEVBQWdCO0FBQ25DLFlBQUlPLGNBQWNwQyxLQUFLaUMsYUFBTCxDQUFtQkosS0FBbkIsQ0FBbEI7QUFBQSxZQUNJUSxRQUFTRCxnQkFBZ0JOLElBRDdCOztBQUdBLGVBQU9PLEtBQVA7QUFDRCxPQUxPLENBQVo7QUFBQSxVQU1JYixTQUFTeEIsS0FBS3NDLGVBQUwsQ0FBcUJULEtBQXJCLENBTmI7O0FBUUEsYUFBT0wsTUFBUDtBQUNEOzs7Ozs7QUFHSGUsT0FBT0MsT0FBUCxHQUFpQnhDLElBQWpCIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIHV0aWwge1xuICBzdGF0aWMgbWluQmFyTWludXNPbmUoKSB7XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgIG1pbkJhck1pbnVzT25lID0gdW5kZWZpbmVkO1xuXG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA+IC0xKSB7XG4gICAgICAgIG1pbkJhck1pbnVzT25lID0gKCBtaW5CYXJNaW51c09uZSA9PT0gdW5kZWZpbmVkICkgPyB2YWx1ZSA6IE1hdGgubWluKG1pbkJhck1pbnVzT25lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWluQmFyTWludXNPbmU7XG4gIH1cblxuICBzdGF0aWMgc3BsaWNlQXJyYXkoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSkge1xuICAgIHZhciBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudF0uY29uY2F0KGl0ZW1zQXJyYXkpO1xuICBcbiAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5LCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBpbmRleE9mKGFycmF5LCBlbGVtZW50KSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGFycmF5W2luZGV4XSA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlZ0V4cFBhdHRlcm4ocmVnRXhwKSB7XG4gICAgdmFyIHJlZ0V4cFN0ciA9IHJlZ0V4cC50b1N0cmluZygpLFxuICAgICAgICByZWdFeHBQYXR0ZXJuID0gcmVnRXhwU3RyLnJlcGxhY2UoL15cXC8vLCcnKS5yZXBsYWNlKC9cXC8oPzpbXlxcL10qPykkLywnJykucmVwbGFjZSgvXFxcXC9nLCdcXFxcXFxcXCcpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gcmVnRXhwUGF0dGVybjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlRnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3Qua2V5cyhlbnRyeSlbMF07ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIHN0YXRpYyByZWdFeHBGcm9tRW50cnkoZW50cnkpIHtcbiAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21FbnRyeShlbnRyeSksXG4gICAgICAgIHJlZ0V4cCA9IGVudHJ5W3R5cGVdO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfTtcblxuICBzdGF0aWMgZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsIHR5cGUpIHtcbiAgICB2YXIgZW50cnkgPSBncmFtbWFyLmZpbmQoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICB2YXIgZ3JhbW1hclR5cGUgPSB1dGlsLnR5cGVGcm9tRW50cnkoZW50cnkpLFxuICAgICAgICAgICAgICBmb3VuZCA9IChncmFtbWFyVHlwZSA9PT0gdHlwZSk7XG5cbiAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgIH0pLFxuICAgICAgICByZWdFeHAgPSB1dGlsLnJlZ0V4cEZyb21FbnRyeShlbnRyeSk7XG5cbiAgICByZXR1cm4gcmVnRXhwO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG4iXX0=