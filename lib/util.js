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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1pbmltdW1CYXJNaW51c09uZSIsInJlZHVjZSIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJzb21lIiwiYXJyYXlFbGVtZW50IiwiYXJyYXlJbmRleCIsImdyYW1tYXJFbnRyeSIsImdyYW1tYXJFbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RHcmFtbWFyRW50cnlLZXkiLCJmaXJzdCIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsInJlZ0V4cCIsImdyYW1tYXIiLCJlbnRyeSIsImZpbmQiLCJncmFtbWFyVHlwZSIsImZvdW5kIiwicmVnRXhwRnJvbUdyYW1tYXJFbnRyeSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSTs7Ozs7Ozt5Q0FDd0I7QUFDMUIsVUFBSUMsU0FBU0MsTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLElBQXRCLENBQTJCQyxTQUEzQixDQUFiO0FBQUEsVUFDSUMscUJBQXFCTixPQUFPTyxNQUFQLENBQWMsVUFBU0Qsa0JBQVQsRUFBNkJFLEtBQTdCLEVBQW9DO0FBQ3JFLFlBQUlBLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2RGLCtCQUFzQkEsdUJBQXVCLElBQXhCLEdBQ0dHLEtBQUtDLEdBQUwsQ0FBU0osa0JBQVQsRUFBNkJFLEtBQTdCLENBREgsR0FFS0EsS0FGMUI7QUFHRDs7QUFFRCxlQUFPRixrQkFBUDtBQUNELE9BUm9CLEVBUWxCLElBUmtCLENBRHpCOztBQVdBLGFBQU9BLGtCQUFQO0FBQ0Q7OztnQ0FFa0JLLEssRUFBT0MsSyxFQUFPQyxXLEVBQWFDLFUsRUFBWTtBQUN4RCxVQUFJQyxPQUFPLENBQUNILEtBQUQsRUFBUUMsV0FBUixFQUFxQkcsTUFBckIsQ0FBNEJGLFVBQTVCLENBQVg7O0FBRUFiLFlBQU1DLFNBQU4sQ0FBZ0JlLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QlAsS0FBN0IsRUFBb0NJLElBQXBDO0FBQ0Q7Ozs0QkFFY0osSyxFQUFPUSxPLEVBQVM7QUFDN0IsVUFBSUMsUUFBUUMsU0FBWixDQUQ2QixDQUNMOztBQUV4QlYsWUFBTVcsSUFBTixDQUFXLFVBQVNDLFlBQVQsRUFBdUJDLFVBQXZCLEVBQW1DO0FBQzVDLFlBQUlMLFlBQVlJLFlBQWhCLEVBQThCO0FBQzVCSCxrQkFBUUksVUFBUjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxhQUFPSixLQUFQO0FBQ0Q7Ozt5Q0FFMkJLLFksRUFBYztBQUN4QyxVQUFJQyxtQkFBbUJDLE9BQU9DLElBQVAsQ0FBWUgsWUFBWixDQUF2QjtBQUFBLFVBQ0lJLHVCQUF1QkMsTUFBTUosZ0JBQU4sQ0FEM0I7QUFBQSxVQUVJSyxPQUFPRixvQkFGWCxDQUR3QyxDQUdOOztBQUVsQyxhQUFPRSxJQUFQO0FBQ0Q7OzsyQ0FFNkJOLFksRUFBYztBQUMxQyxVQUFJTSxPQUFPaEMsS0FBS2lDLG9CQUFMLENBQTBCUCxZQUExQixDQUFYO0FBQUEsVUFDSVEsU0FBU1IsYUFBYU0sSUFBYixDQURiOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7O3VDQUV5QkMsTyxFQUFTSCxJLEVBQU07QUFDdkMsVUFBSUksUUFBUUQsUUFBUUUsSUFBUixDQUFhLFVBQVNELEtBQVQsRUFBZ0I7QUFDbkMsWUFBSUUsY0FBY3RDLEtBQUtpQyxvQkFBTCxDQUEwQkcsS0FBMUIsQ0FBbEI7QUFBQSxZQUNJRyxRQUFTRCxnQkFBZ0JOLElBRDdCOztBQUdBLGVBQU9PLEtBQVA7QUFDRCxPQUxPLENBQVo7QUFBQSxVQU1JTCxTQUFTbEMsS0FBS3dDLHNCQUFMLENBQTRCSixLQUE1QixDQU5iOztBQVFBLGFBQU9GLE1BQVA7QUFDRDs7Ozs7O0FBR0hPLE9BQU9DLE9BQVAsR0FBaUIxQyxJQUFqQjs7QUFFQSxTQUFTK0IsS0FBVCxDQUFlbkIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIHV0aWwge1xuICBzdGF0aWMgbWluaW11bUJhck1pbnVzT25lKCkge1xuICAgIHZhciB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICBtaW5pbXVtQmFyTWludXNPbmUgPSB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uKG1pbmltdW1CYXJNaW51c09uZSwgdmFsdWUpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPiAtMSkge1xuICAgICAgICAgICAgbWluaW11bUJhck1pbnVzT25lID0gKG1pbmltdW1CYXJNaW51c09uZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4obWluaW11bUJhck1pbnVzT25lLCB2YWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbWluaW11bUJhck1pbnVzT25lO1xuICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBtaW5pbXVtQmFyTWludXNPbmU7XG4gIH1cblxuICBzdGF0aWMgc3BsaWNlQXJyYXkoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSkge1xuICAgIHZhciBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudF0uY29uY2F0KGl0ZW1zQXJyYXkpO1xuICBcbiAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5LCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBpbmRleE9mKGFycmF5LCBlbGVtZW50KSB7XG4gICAgdmFyIGluZGV4ID0gdW5kZWZpbmVkOyAgLy8vXG5cbiAgICBhcnJheS5zb21lKGZ1bmN0aW9uKGFycmF5RWxlbWVudCwgYXJyYXlJbmRleCkge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IGFycmF5RWxlbWVudCkge1xuICAgICAgICBpbmRleCA9IGFycmF5SW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBzdGF0aWMgdHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSB7XG4gICAgdmFyIGdyYW1tYXJFbnRyeUtleXMgPSBPYmplY3Qua2V5cyhncmFtbWFyRW50cnkpLFxuICAgICAgICBmaXJzdEdyYW1tYXJFbnRyeUtleSA9IGZpcnN0KGdyYW1tYXJFbnRyeUtleXMpLFxuICAgICAgICB0eXBlID0gZmlyc3RHcmFtbWFyRW50cnlLZXk7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIHN0YXRpYyByZWdFeHBGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSkge1xuICAgIHZhciB0eXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxuICAgICAgICByZWdFeHAgPSBncmFtbWFyRW50cnlbdHlwZV07XG5cbiAgICByZXR1cm4gcmVnRXhwO1xuICB9O1xuXG4gIHN0YXRpYyBmaW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgdHlwZSkge1xuICAgIHZhciBlbnRyeSA9IGdyYW1tYXIuZmluZChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgIHZhciBncmFtbWFyVHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZW50cnkpLFxuICAgICAgICAgICAgICBmb3VuZCA9IChncmFtbWFyVHlwZSA9PT0gdHlwZSk7XG5cbiAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgIH0pLFxuICAgICAgICByZWdFeHAgPSB1dGlsLnJlZ0V4cEZyb21HcmFtbWFyRW50cnkoZW50cnkpO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH0iXX0=