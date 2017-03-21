'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
    key: 'minimumBarMinusOne',
    value: function minimumBarMinusOne() {
      var values = Array.prototype.slice.call(arguments),
          minimumBarMinusOne = values.reduce(function (minimumBarMinusOne, value) {
        if (value > -1) {
          minimumBarMinusOne = minimumBarMinusOne !== null ? Math.min(minimumBarMinusOne, value) : value;
        }

        return minimumBarMinusOne;
      }, null);

      return minimumBarMinusOne;
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
      var index = undefined; ///

      array.some(function (arrayElement, arrayIndex) {
        if (element === arrayElement) {
          index = arrayIndex;

          return true;
        } else {
          return false;
        }
      });

      return index;
    }
  }, {
    key: 'typeFromGrammarEntry',
    value: function typeFromGrammarEntry(grammarEntry) {
      var grammarEntryKeys = Object.keys(grammarEntry),
          firstGrammarEntryKey = first(grammarEntryKeys),
          type = firstGrammarEntryKey; ///

      return type;
    }
  }, {
    key: 'regExpFromGrammarEntry',
    value: function regExpFromGrammarEntry(grammarEntry) {
      var type = util.typeFromGrammarEntry(grammarEntry),
          regExp = grammarEntry[type];

      return regExp;
    }
  }, {
    key: 'findRegExpFromType',
    value: function findRegExpFromType(grammar, type) {
      var entry = grammar.find(function (entry) {
        var grammarType = util.typeFromGrammarEntry(entry),
            found = grammarType === type;

        return found;
      }),
          regExp = util.regExpFromGrammarEntry(entry);

      return regExp;
    }
  }]);

  return util;
}();

module.exports = util;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1pbmltdW1CYXJNaW51c09uZSIsInJlZHVjZSIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJzb21lIiwiYXJyYXlFbGVtZW50IiwiYXJyYXlJbmRleCIsImdyYW1tYXJFbnRyeSIsImdyYW1tYXJFbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RHcmFtbWFyRW50cnlLZXkiLCJmaXJzdCIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsInJlZ0V4cCIsImdyYW1tYXIiLCJlbnRyeSIsImZpbmQiLCJncmFtbWFyVHlwZSIsImZvdW5kIiwicmVnRXhwRnJvbUdyYW1tYXJFbnRyeSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSTs7Ozs7Ozt5Q0FDd0I7QUFDMUIsVUFBTUMsU0FBU0MsTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLElBQXRCLENBQTJCQyxTQUEzQixDQUFmO0FBQUEsVUFDTUMscUJBQXFCTixPQUFPTyxNQUFQLENBQWMsVUFBU0Qsa0JBQVQsRUFBNkJFLEtBQTdCLEVBQW9DO0FBQ3JFLFlBQUlBLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2RGLCtCQUFzQkEsdUJBQXVCLElBQXhCLEdBQ0dHLEtBQUtDLEdBQUwsQ0FBU0osa0JBQVQsRUFBNkJFLEtBQTdCLENBREgsR0FFS0EsS0FGMUI7QUFHRDs7QUFFRCxlQUFPRixrQkFBUDtBQUNELE9BUm9CLEVBUWxCLElBUmtCLENBRDNCOztBQVdBLGFBQU9BLGtCQUFQO0FBQ0Q7OztnQ0FFa0JLLEssRUFBT0MsSyxFQUFPQyxXLEVBQWFDLFUsRUFBWTtBQUN4RCxVQUFNQyxPQUFPLENBQUNILEtBQUQsRUFBUUMsV0FBUixFQUFxQkcsTUFBckIsQ0FBNEJGLFVBQTVCLENBQWI7O0FBRUFiLFlBQU1DLFNBQU4sQ0FBZ0JlLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QlAsS0FBN0IsRUFBb0NJLElBQXBDO0FBQ0Q7Ozs0QkFFY0osSyxFQUFPUSxPLEVBQVM7QUFDN0IsVUFBSUMsUUFBUUMsU0FBWixDQUQ2QixDQUNMOztBQUV4QlYsWUFBTVcsSUFBTixDQUFXLFVBQVNDLFlBQVQsRUFBdUJDLFVBQXZCLEVBQW1DO0FBQzVDLFlBQUlMLFlBQVlJLFlBQWhCLEVBQThCO0FBQzVCSCxrQkFBUUksVUFBUjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxhQUFPSixLQUFQO0FBQ0Q7Ozt5Q0FFMkJLLFksRUFBYztBQUN4QyxVQUFNQyxtQkFBbUJDLE9BQU9DLElBQVAsQ0FBWUgsWUFBWixDQUF6QjtBQUFBLFVBQ01JLHVCQUF1QkMsTUFBTUosZ0JBQU4sQ0FEN0I7QUFBQSxVQUVNSyxPQUFPRixvQkFGYixDQUR3QyxDQUdKOztBQUVwQyxhQUFPRSxJQUFQO0FBQ0Q7OzsyQ0FFNkJOLFksRUFBYztBQUMxQyxVQUFNTSxPQUFPaEMsS0FBS2lDLG9CQUFMLENBQTBCUCxZQUExQixDQUFiO0FBQUEsVUFDTVEsU0FBU1IsYUFBYU0sSUFBYixDQURmOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7O3VDQUV5QkMsTyxFQUFTSCxJLEVBQU07QUFDdkMsVUFBTUksUUFBUUQsUUFBUUUsSUFBUixDQUFhLFVBQVNELEtBQVQsRUFBZ0I7QUFDbkMsWUFBTUUsY0FBY3RDLEtBQUtpQyxvQkFBTCxDQUEwQkcsS0FBMUIsQ0FBcEI7QUFBQSxZQUNNRyxRQUFTRCxnQkFBZ0JOLElBRC9COztBQUdBLGVBQU9PLEtBQVA7QUFDRCxPQUxPLENBQWQ7QUFBQSxVQU1NTCxTQUFTbEMsS0FBS3dDLHNCQUFMLENBQTRCSixLQUE1QixDQU5mOztBQVFBLGFBQU9GLE1BQVA7QUFDRDs7Ozs7O0FBR0hPLE9BQU9DLE9BQVAsR0FBaUIxQyxJQUFqQjs7QUFFQSxTQUFTK0IsS0FBVCxDQUFlbkIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIHV0aWwge1xuICBzdGF0aWMgbWluaW11bUJhck1pbnVzT25lKCkge1xuICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgbWluaW11bUJhck1pbnVzT25lID0gdmFsdWVzLnJlZHVjZShmdW5jdGlvbihtaW5pbXVtQmFyTWludXNPbmUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPiAtMSkge1xuICAgICAgICAgICAgICBtaW5pbXVtQmFyTWludXNPbmUgPSAobWluaW11bUJhck1pbnVzT25lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKG1pbmltdW1CYXJNaW51c09uZSwgdmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gbWluaW11bUJhck1pbnVzT25lO1xuICAgICAgICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1CYXJNaW51c09uZTtcbiAgfVxuXG4gIHN0YXRpYyBzcGxpY2VBcnJheShhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBpdGVtc0FycmF5KSB7XG4gICAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnRdLmNvbmNhdChpdGVtc0FycmF5KTtcbiAgXG4gICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgaW5kZXhPZihhcnJheSwgZWxlbWVudCkge1xuICAgIGxldCBpbmRleCA9IHVuZGVmaW5lZDsgIC8vL1xuXG4gICAgYXJyYXkuc29tZShmdW5jdGlvbihhcnJheUVsZW1lbnQsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBhcnJheUVsZW1lbnQpIHtcbiAgICAgICAgaW5kZXggPSBhcnJheUluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgc3RhdGljIHR5cGVGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSkge1xuICAgIGNvbnN0IGdyYW1tYXJFbnRyeUtleXMgPSBPYmplY3Qua2V5cyhncmFtbWFyRW50cnkpLFxuICAgICAgICAgIGZpcnN0R3JhbW1hckVudHJ5S2V5ID0gZmlyc3QoZ3JhbW1hckVudHJ5S2V5cyksXG4gICAgICAgICAgdHlwZSA9IGZpcnN0R3JhbW1hckVudHJ5S2V5OyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICBzdGF0aWMgcmVnRXhwRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpIHtcbiAgICBjb25zdCB0eXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxuICAgICAgICAgIHJlZ0V4cCA9IGdyYW1tYXJFbnRyeVt0eXBlXTtcblxuICAgIHJldHVybiByZWdFeHA7XG4gIH07XG5cbiAgc3RhdGljIGZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCB0eXBlKSB7XG4gICAgY29uc3QgZW50cnkgPSBncmFtbWFyLmZpbmQoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyYW1tYXJUeXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShlbnRyeSksXG4gICAgICAgICAgICAgICAgICBmb3VuZCA9IChncmFtbWFyVHlwZSA9PT0gdHlwZSk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlZ0V4cCA9IHV0aWwucmVnRXhwRnJvbUdyYW1tYXJFbnRyeShlbnRyeSk7XG5cbiAgICByZXR1cm4gcmVnRXhwO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19