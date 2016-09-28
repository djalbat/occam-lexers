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
  }]);

  return util;
}();

module.exports = util;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1pbkJhck1pbnVzT25lIiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7Ozs7Ozs7cUNBQ29CO0FBQ3RCLFVBQUlDLFNBQVNDLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQkMsU0FBM0IsQ0FBYjtBQUFBLFVBQ0lDLGlCQUFpQkMsU0FEckI7O0FBR0FQLGFBQU9RLE9BQVAsQ0FBZSxVQUFTQyxLQUFULEVBQWdCO0FBQzdCLFlBQUlBLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2RILDJCQUFtQkEsbUJBQW1CQyxTQUFyQixHQUFtQ0UsS0FBbkMsR0FBMkNDLEtBQUtDLEdBQUwsQ0FBU0wsY0FBVCxFQUF5QkcsS0FBekIsQ0FBNUQ7QUFDRDtBQUNGLE9BSkQ7O0FBTUEsYUFBT0gsY0FBUDtBQUNEOzs7Z0NBRWtCTSxLLEVBQU9DLEssRUFBT0MsVyxFQUFhQyxVLEVBQVk7QUFDeEQsVUFBSUMsT0FBTyxDQUFDSCxLQUFELEVBQVFDLFdBQVIsRUFBcUJHLE1BQXJCLENBQTRCRixVQUE1QixDQUFYOztBQUVBZCxZQUFNQyxTQUFOLENBQWdCZ0IsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCUCxLQUE3QixFQUFvQ0ksSUFBcEM7QUFDRDs7OzRCQUVjSixLLEVBQU9RLE8sRUFBUztBQUM3QixXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFULE1BQU1VLE1BQWxDLEVBQTBDRCxPQUExQyxFQUFtRDtBQUNqRCxZQUFJVCxNQUFNUyxLQUFOLE1BQWlCRCxPQUFyQixFQUE4QjtBQUM1QixpQkFBT0MsS0FBUDtBQUNEO0FBQ0Y7QUFDRjs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJ6QixJQUFqQiIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyB1dGlsIHtcbiAgc3RhdGljIG1pbkJhck1pbnVzT25lKCkge1xuICAgIHZhciB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICBtaW5CYXJNaW51c09uZSA9IHVuZGVmaW5lZDtcblxuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPiAtMSkge1xuICAgICAgICBtaW5CYXJNaW51c09uZSA9ICggbWluQmFyTWludXNPbmUgPT09IHVuZGVmaW5lZCApID8gdmFsdWUgOiBNYXRoLm1pbihtaW5CYXJNaW51c09uZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1pbkJhck1pbnVzT25lO1xuICB9XG5cbiAgc3RhdGljIHNwbGljZUFycmF5KGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkpIHtcbiAgICB2YXIgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnRdLmNvbmNhdChpdGVtc0FycmF5KTtcbiAgXG4gICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgaW5kZXhPZihhcnJheSwgZWxlbWVudCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChhcnJheVtpbmRleF0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG4iXX0=