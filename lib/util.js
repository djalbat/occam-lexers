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
          regExpPattern = regExpStr.replace(/^\//, '').replace(/\/(?:[^\/]*?)$/, ''); ///

      return regExpPattern;
    }
  }, {
    key: 'typeFromEntry',
    value: function typeFromEntry(entry) {
      var type = Object.keys(entry)[0]; ///

      return type;
    }
  }, {
    key: 'findRegExpFromType',
    value: function findRegExpFromType(grammar, type) {
      var regExp = grammar.find(function (entry) {
        var grammarType = util.typeFromEntry(entry),
            found = grammarType === type;

        return found;
      });

      return regExp;
    }
  }]);

  return util;
}();

module.exports = util;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1pbkJhck1pbnVzT25lIiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJsZW5ndGgiLCJyZWdFeHAiLCJyZWdFeHBTdHIiLCJ0b1N0cmluZyIsInJlZ0V4cFBhdHRlcm4iLCJyZXBsYWNlIiwiZW50cnkiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsImdyYW1tYXIiLCJmaW5kIiwiZ3JhbW1hclR5cGUiLCJ0eXBlRnJvbUVudHJ5IiwiZm91bmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7Ozs7Ozs7cUNBQ29CO0FBQ3RCLFVBQUlDLFNBQVNDLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQkMsU0FBM0IsQ0FBYjtBQUFBLFVBQ0lDLGlCQUFpQkMsU0FEckI7O0FBR0FQLGFBQU9RLE9BQVAsQ0FBZSxVQUFTQyxLQUFULEVBQWdCO0FBQzdCLFlBQUlBLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2RILDJCQUFtQkEsbUJBQW1CQyxTQUFyQixHQUFtQ0UsS0FBbkMsR0FBMkNDLEtBQUtDLEdBQUwsQ0FBU0wsY0FBVCxFQUF5QkcsS0FBekIsQ0FBNUQ7QUFDRDtBQUNGLE9BSkQ7O0FBTUEsYUFBT0gsY0FBUDtBQUNEOzs7Z0NBRWtCTSxLLEVBQU9DLEssRUFBT0MsVyxFQUFhQyxVLEVBQVk7QUFDeEQsVUFBSUMsT0FBTyxDQUFDSCxLQUFELEVBQVFDLFdBQVIsRUFBcUJHLE1BQXJCLENBQTRCRixVQUE1QixDQUFYOztBQUVBZCxZQUFNQyxTQUFOLENBQWdCZ0IsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCUCxLQUE3QixFQUFvQ0ksSUFBcEM7QUFDRDs7OzRCQUVjSixLLEVBQU9RLE8sRUFBUztBQUM3QixXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFULE1BQU1VLE1BQWxDLEVBQTBDRCxPQUExQyxFQUFtRDtBQUNqRCxZQUFJVCxNQUFNUyxLQUFOLE1BQWlCRCxPQUFyQixFQUE4QjtBQUM1QixpQkFBT0MsS0FBUDtBQUNEO0FBQ0Y7QUFDRjs7O2tDQUVvQkUsTSxFQUFRO0FBQzNCLFVBQUlDLFlBQVlELE9BQU9FLFFBQVAsRUFBaEI7QUFBQSxVQUNJQyxnQkFBZ0JGLFVBQVVHLE9BQVYsQ0FBa0IsS0FBbEIsRUFBd0IsRUFBeEIsRUFBNEJBLE9BQTVCLENBQW9DLGdCQUFwQyxFQUFxRCxFQUFyRCxDQURwQixDQUQyQixDQUVtRDs7QUFFOUUsYUFBT0QsYUFBUDtBQUNEOzs7a0NBRW9CRSxLLEVBQU87QUFDMUIsVUFBSUMsT0FBT0MsT0FBT0MsSUFBUCxDQUFZSCxLQUFaLEVBQW1CLENBQW5CLENBQVgsQ0FEMEIsQ0FDUzs7QUFFbkMsYUFBT0MsSUFBUDtBQUNEOzs7dUNBRXlCRyxPLEVBQVNILEksRUFBTTtBQUN2QyxVQUFJTixTQUFTUyxRQUFRQyxJQUFSLENBQWEsVUFBU0wsS0FBVCxFQUFnQjtBQUN4QyxZQUFJTSxjQUFjbkMsS0FBS29DLGFBQUwsQ0FBbUJQLEtBQW5CLENBQWxCO0FBQUEsWUFDSVEsUUFBU0YsZ0JBQWdCTCxJQUQ3Qjs7QUFHQSxlQUFPTyxLQUFQO0FBQ0QsT0FMWSxDQUFiOztBQU9BLGFBQU9iLE1BQVA7QUFDRDs7Ozs7O0FBR0hjLE9BQU9DLE9BQVAsR0FBaUJ2QyxJQUFqQiIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyB1dGlsIHtcbiAgc3RhdGljIG1pbkJhck1pbnVzT25lKCkge1xuICAgIHZhciB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICBtaW5CYXJNaW51c09uZSA9IHVuZGVmaW5lZDtcblxuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPiAtMSkge1xuICAgICAgICBtaW5CYXJNaW51c09uZSA9ICggbWluQmFyTWludXNPbmUgPT09IHVuZGVmaW5lZCApID8gdmFsdWUgOiBNYXRoLm1pbihtaW5CYXJNaW51c09uZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1pbkJhck1pbnVzT25lO1xuICB9XG5cbiAgc3RhdGljIHNwbGljZUFycmF5KGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkpIHtcbiAgICB2YXIgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnRdLmNvbmNhdChpdGVtc0FycmF5KTtcbiAgXG4gICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgaW5kZXhPZihhcnJheSwgZWxlbWVudCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChhcnJheVtpbmRleF0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZWdFeHBQYXR0ZXJuKHJlZ0V4cCkge1xuICAgIHZhciByZWdFeHBTdHIgPSByZWdFeHAudG9TdHJpbmcoKSxcbiAgICAgICAgcmVnRXhwUGF0dGVybiA9IHJlZ0V4cFN0ci5yZXBsYWNlKC9eXFwvLywnJykucmVwbGFjZSgvXFwvKD86W15cXC9dKj8pJC8sJycpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gcmVnRXhwUGF0dGVybjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlRnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3Qua2V5cyhlbnRyeSlbMF07ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIHN0YXRpYyBmaW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgdHlwZSkge1xuICAgIHZhciByZWdFeHAgPSBncmFtbWFyLmZpbmQoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgIHZhciBncmFtbWFyVHlwZSA9IHV0aWwudHlwZUZyb21FbnRyeShlbnRyeSksXG4gICAgICAgICAgZm91bmQgPSAoZ3JhbW1hclR5cGUgPT09IHR5cGUpO1xuXG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVnRXhwO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG4iXX0=