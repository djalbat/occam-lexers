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
  }, {
    key: 'sanitiseContent',
    value: function sanitiseContent(content) {
      var sanitisedContent = content.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

      return sanitisedContent;
    }
  }]);

  return util;
}();

module.exports = util;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1pbmltdW1CYXJNaW51c09uZSIsInJlZHVjZSIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJzb21lIiwiYXJyYXlFbGVtZW50IiwiYXJyYXlJbmRleCIsImdyYW1tYXJFbnRyeSIsImdyYW1tYXJFbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RHcmFtbWFyRW50cnlLZXkiLCJmaXJzdCIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsInJlZ0V4cCIsImdyYW1tYXIiLCJlbnRyeSIsImZpbmQiLCJncmFtbWFyVHlwZSIsImZvdW5kIiwicmVnRXhwRnJvbUdyYW1tYXJFbnRyeSIsImNvbnRlbnQiLCJzYW5pdGlzZWRDb250ZW50IiwicmVwbGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSTs7Ozs7Ozt5Q0FDd0I7QUFDMUIsVUFBTUMsU0FBU0MsTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLElBQXRCLENBQTJCQyxTQUEzQixDQUFmO0FBQUEsVUFDTUMscUJBQXFCTixPQUFPTyxNQUFQLENBQWMsVUFBU0Qsa0JBQVQsRUFBNkJFLEtBQTdCLEVBQW9DO0FBQ3JFLFlBQUlBLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2RGLCtCQUFzQkEsdUJBQXVCLElBQXhCLEdBQ0dHLEtBQUtDLEdBQUwsQ0FBU0osa0JBQVQsRUFBNkJFLEtBQTdCLENBREgsR0FFS0EsS0FGMUI7QUFHRDs7QUFFRCxlQUFPRixrQkFBUDtBQUNELE9BUm9CLEVBUWxCLElBUmtCLENBRDNCOztBQVdBLGFBQU9BLGtCQUFQO0FBQ0Q7OztnQ0FFa0JLLEssRUFBT0MsSyxFQUFPQyxXLEVBQWFDLFUsRUFBWTtBQUN4RCxVQUFNQyxPQUFPLENBQUNILEtBQUQsRUFBUUMsV0FBUixFQUFxQkcsTUFBckIsQ0FBNEJGLFVBQTVCLENBQWI7O0FBRUFiLFlBQU1DLFNBQU4sQ0FBZ0JlLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QlAsS0FBN0IsRUFBb0NJLElBQXBDO0FBQ0Q7Ozs0QkFFY0osSyxFQUFPUSxPLEVBQVM7QUFDN0IsVUFBSUMsUUFBUUMsU0FBWixDQUQ2QixDQUNMOztBQUV4QlYsWUFBTVcsSUFBTixDQUFXLFVBQVNDLFlBQVQsRUFBdUJDLFVBQXZCLEVBQW1DO0FBQzVDLFlBQUlMLFlBQVlJLFlBQWhCLEVBQThCO0FBQzVCSCxrQkFBUUksVUFBUjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxhQUFPSixLQUFQO0FBQ0Q7Ozt5Q0FFMkJLLFksRUFBYztBQUN4QyxVQUFNQyxtQkFBbUJDLE9BQU9DLElBQVAsQ0FBWUgsWUFBWixDQUF6QjtBQUFBLFVBQ01JLHVCQUF1QkMsTUFBTUosZ0JBQU4sQ0FEN0I7QUFBQSxVQUVNSyxPQUFPRixvQkFGYixDQUR3QyxDQUdKOztBQUVwQyxhQUFPRSxJQUFQO0FBQ0Q7OzsyQ0FFNkJOLFksRUFBYztBQUMxQyxVQUFNTSxPQUFPaEMsS0FBS2lDLG9CQUFMLENBQTBCUCxZQUExQixDQUFiO0FBQUEsVUFDTVEsU0FBU1IsYUFBYU0sSUFBYixDQURmOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7O3VDQUV5QkMsTyxFQUFTSCxJLEVBQU07QUFDdkMsVUFBTUksUUFBUUQsUUFBUUUsSUFBUixDQUFhLFVBQVNELEtBQVQsRUFBZ0I7QUFDbkMsWUFBTUUsY0FBY3RDLEtBQUtpQyxvQkFBTCxDQUEwQkcsS0FBMUIsQ0FBcEI7QUFBQSxZQUNNRyxRQUFTRCxnQkFBZ0JOLElBRC9COztBQUdBLGVBQU9PLEtBQVA7QUFDRCxPQUxPLENBQWQ7QUFBQSxVQU1NTCxTQUFTbEMsS0FBS3dDLHNCQUFMLENBQTRCSixLQUE1QixDQU5mOztBQVFBLGFBQU9GLE1BQVA7QUFDRDs7O29DQUVzQk8sTyxFQUFTO0FBQzlCLFVBQU1DLG1CQUFtQkQsUUFBUUUsT0FBUixDQUFnQixHQUFoQixFQUFvQixPQUFwQixFQUE2QkEsT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsTUFBMUMsRUFBa0RBLE9BQWxELENBQTBELEdBQTFELEVBQStELE1BQS9ELENBQXpCOztBQUVBLGFBQU9ELGdCQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCN0MsSUFBakI7O0FBRUEsU0FBUytCLEtBQVQsQ0FBZW5CLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyB1dGlsIHtcbiAgc3RhdGljIG1pbmltdW1CYXJNaW51c09uZSgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgIG1pbmltdW1CYXJNaW51c09uZSA9IHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24obWluaW11bUJhck1pbnVzT25lLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gLTEpIHtcbiAgICAgICAgICAgICAgbWluaW11bUJhck1pbnVzT25lID0gKG1pbmltdW1CYXJNaW51c09uZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihtaW5pbXVtQmFyTWludXNPbmUsIHZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIG1pbmltdW1CYXJNaW51c09uZTtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBtaW5pbXVtQmFyTWludXNPbmU7XG4gIH1cblxuICBzdGF0aWMgc3BsaWNlQXJyYXkoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSkge1xuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50XS5jb25jYXQoaXRlbXNBcnJheSk7XG4gIFxuICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIGluZGV4T2YoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBsZXQgaW5kZXggPSB1bmRlZmluZWQ7ICAvLy9cblxuICAgIGFycmF5LnNvbWUoZnVuY3Rpb24oYXJyYXlFbGVtZW50LCBhcnJheUluZGV4KSB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gYXJyYXlFbGVtZW50KSB7XG4gICAgICAgIGluZGV4ID0gYXJyYXlJbmRleDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpIHtcbiAgICBjb25zdCBncmFtbWFyRW50cnlLZXlzID0gT2JqZWN0LmtleXMoZ3JhbW1hckVudHJ5KSxcbiAgICAgICAgICBmaXJzdEdyYW1tYXJFbnRyeUtleSA9IGZpcnN0KGdyYW1tYXJFbnRyeUtleXMpLFxuICAgICAgICAgIHR5cGUgPSBmaXJzdEdyYW1tYXJFbnRyeUtleTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH07XG5cbiAgc3RhdGljIHJlZ0V4cEZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSB7XG4gICAgY29uc3QgdHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcbiAgICAgICAgICByZWdFeHAgPSBncmFtbWFyRW50cnlbdHlwZV07XG5cbiAgICByZXR1cm4gcmVnRXhwO1xuICB9O1xuXG4gIHN0YXRpYyBmaW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgdHlwZSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZ3JhbW1hci5maW5kKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBncmFtbWFyVHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZW50cnkpLFxuICAgICAgICAgICAgICAgICAgZm91bmQgPSAoZ3JhbW1hclR5cGUgPT09IHR5cGUpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICByZWdFeHAgPSB1dGlsLnJlZ0V4cEZyb21HcmFtbWFyRW50cnkoZW50cnkpO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfTtcblxuICBzdGF0aWMgc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8mLywnJmFtcDsnKS5yZXBsYWNlKC88LywgJyZsdDsnKS5yZXBsYWNlKC8+LywgJyZndDsnKTtcblxuICAgIHJldHVybiBzYW5pdGlzZWRDb250ZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=