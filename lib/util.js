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
      var minBarMinusOne = undefined,
          ///
      values = Array.prototype.slice.call(arguments);

      values.forEach(function (value) {
        if (value > -1) {
          minBarMinusOne = minBarMinusOne !== undefined ? Math.min(minBarMinusOne, value) : value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJtaW5CYXJNaW51c09uZSIsInVuZGVmaW5lZCIsInZhbHVlcyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJzb21lIiwiYXJyYXlFbGVtZW50IiwiYXJyYXlJbmRleCIsImdyYW1tYXJFbnRyeSIsImdyYW1tYXJFbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RHcmFtbWFyRW50cnlLZXkiLCJmaXJzdCIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsInJlZ0V4cCIsImdyYW1tYXIiLCJlbnRyeSIsImZpbmQiLCJncmFtbWFyVHlwZSIsImZvdW5kIiwicmVnRXhwRnJvbUdyYW1tYXJFbnRyeSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSTs7Ozs7OztxQ0FDb0I7QUFDdEIsVUFBSUMsaUJBQWlCQyxTQUFyQjtBQUFBLFVBQWdDO0FBQzVCQyxlQUFTQyxNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJDLFNBQTNCLENBRGI7O0FBR0FMLGFBQU9NLE9BQVAsQ0FBZSxVQUFTQyxLQUFULEVBQWdCO0FBQzdCLFlBQUlBLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2RULDJCQUFrQkEsbUJBQW1CQyxTQUFwQixHQUNHUyxLQUFLQyxHQUFMLENBQVNYLGNBQVQsRUFBeUJTLEtBQXpCLENBREgsR0FFS0EsS0FGdEI7QUFHRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT1QsY0FBUDtBQUNEOzs7Z0NBRWtCWSxLLEVBQU9DLEssRUFBT0MsVyxFQUFhQyxVLEVBQVk7QUFDeEQsVUFBSUMsT0FBTyxDQUFDSCxLQUFELEVBQVFDLFdBQVIsRUFBcUJHLE1BQXJCLENBQTRCRixVQUE1QixDQUFYOztBQUVBWixZQUFNQyxTQUFOLENBQWdCYyxNQUFoQixDQUF1QkMsS0FBdkIsQ0FBNkJQLEtBQTdCLEVBQW9DSSxJQUFwQztBQUNEOzs7NEJBRWNKLEssRUFBT1EsTyxFQUFTO0FBQzdCLFVBQUlDLFFBQVFwQixTQUFaLENBRDZCLENBQ0w7O0FBRXhCVyxZQUFNVSxJQUFOLENBQVcsVUFBU0MsWUFBVCxFQUF1QkMsVUFBdkIsRUFBbUM7QUFDNUMsWUFBSUosWUFBWUcsWUFBaEIsRUFBOEI7QUFDNUJGLGtCQUFRRyxVQUFSOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVJEOztBQVVBLGFBQU9ILEtBQVA7QUFDRDs7O3lDQUUyQkksWSxFQUFjO0FBQ3hDLFVBQUlDLG1CQUFtQkMsT0FBT0MsSUFBUCxDQUFZSCxZQUFaLENBQXZCO0FBQUEsVUFDSUksdUJBQXVCQyxNQUFNSixnQkFBTixDQUQzQjtBQUFBLFVBRUlLLE9BQU9GLG9CQUZYLENBRHdDLENBR047O0FBRWxDLGFBQU9FLElBQVA7QUFDRDs7OzJDQUU2Qk4sWSxFQUFjO0FBQzFDLFVBQUlNLE9BQU9oQyxLQUFLaUMsb0JBQUwsQ0FBMEJQLFlBQTFCLENBQVg7QUFBQSxVQUNJUSxTQUFTUixhQUFhTSxJQUFiLENBRGI7O0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7dUNBRXlCQyxPLEVBQVNILEksRUFBTTtBQUN2QyxVQUFJSSxRQUFRRCxRQUFRRSxJQUFSLENBQWEsVUFBU0QsS0FBVCxFQUFnQjtBQUNuQyxZQUFJRSxjQUFjdEMsS0FBS2lDLG9CQUFMLENBQTBCRyxLQUExQixDQUFsQjtBQUFBLFlBQ0lHLFFBQVNELGdCQUFnQk4sSUFEN0I7O0FBR0EsZUFBT08sS0FBUDtBQUNELE9BTE8sQ0FBWjtBQUFBLFVBTUlMLFNBQVNsQyxLQUFLd0Msc0JBQUwsQ0FBNEJKLEtBQTVCLENBTmI7O0FBUUEsYUFBT0YsTUFBUDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQjFDLElBQWpCOztBQUVBLFNBQVMrQixLQUFULENBQWVsQixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgdXRpbCB7XG4gIHN0YXRpYyBtaW5CYXJNaW51c09uZSgpIHtcbiAgICB2YXIgbWluQmFyTWludXNPbmUgPSB1bmRlZmluZWQsIC8vL1xuICAgICAgICB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA+IC0xKSB7XG4gICAgICAgIG1pbkJhck1pbnVzT25lID0gKG1pbkJhck1pbnVzT25lICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihtaW5CYXJNaW51c09uZSwgdmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1pbkJhck1pbnVzT25lO1xuICB9XG5cbiAgc3RhdGljIHNwbGljZUFycmF5KGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkpIHtcbiAgICB2YXIgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnRdLmNvbmNhdChpdGVtc0FycmF5KTtcbiAgXG4gICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgaW5kZXhPZihhcnJheSwgZWxlbWVudCkge1xuICAgIHZhciBpbmRleCA9IHVuZGVmaW5lZDsgIC8vL1xuXG4gICAgYXJyYXkuc29tZShmdW5jdGlvbihhcnJheUVsZW1lbnQsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBhcnJheUVsZW1lbnQpIHtcbiAgICAgICAgaW5kZXggPSBhcnJheUluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgc3RhdGljIHR5cGVGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSkge1xuICAgIHZhciBncmFtbWFyRW50cnlLZXlzID0gT2JqZWN0LmtleXMoZ3JhbW1hckVudHJ5KSxcbiAgICAgICAgZmlyc3RHcmFtbWFyRW50cnlLZXkgPSBmaXJzdChncmFtbWFyRW50cnlLZXlzKSxcbiAgICAgICAgdHlwZSA9IGZpcnN0R3JhbW1hckVudHJ5S2V5OyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICBzdGF0aWMgcmVnRXhwRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpIHtcbiAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcbiAgICAgICAgcmVnRXhwID0gZ3JhbW1hckVudHJ5W3R5cGVdO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfTtcblxuICBzdGF0aWMgZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsIHR5cGUpIHtcbiAgICB2YXIgZW50cnkgPSBncmFtbWFyLmZpbmQoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICB2YXIgZ3JhbW1hclR5cGUgPSB1dGlsLnR5cGVGcm9tR3JhbW1hckVudHJ5KGVudHJ5KSxcbiAgICAgICAgICAgICAgZm91bmQgPSAoZ3JhbW1hclR5cGUgPT09IHR5cGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICB9KSxcbiAgICAgICAgcmVnRXhwID0gdXRpbC5yZWdFeHBGcm9tR3JhbW1hckVudHJ5KGVudHJ5KTtcblxuICAgIHJldHVybiByZWdFeHA7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9Il19