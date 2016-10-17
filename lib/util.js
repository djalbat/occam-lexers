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
  }]);

  return util;
}();

module.exports = util;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1pbkJhck1pbnVzT25lIiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJsZW5ndGgiLCJyZWdFeHAiLCJyZWdFeHBTdHIiLCJ0b1N0cmluZyIsInJlZ0V4cFBhdHRlcm4iLCJyZXBsYWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxJOzs7Ozs7O3FDQUNvQjtBQUN0QixVQUFJQyxTQUFTQyxNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJDLFNBQTNCLENBQWI7QUFBQSxVQUNJQyxpQkFBaUJDLFNBRHJCOztBQUdBUCxhQUFPUSxPQUFQLENBQWUsVUFBU0MsS0FBVCxFQUFnQjtBQUM3QixZQUFJQSxRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNkSCwyQkFBbUJBLG1CQUFtQkMsU0FBckIsR0FBbUNFLEtBQW5DLEdBQTJDQyxLQUFLQyxHQUFMLENBQVNMLGNBQVQsRUFBeUJHLEtBQXpCLENBQTVEO0FBQ0Q7QUFDRixPQUpEOztBQU1BLGFBQU9ILGNBQVA7QUFDRDs7O2dDQUVrQk0sSyxFQUFPQyxLLEVBQU9DLFcsRUFBYUMsVSxFQUFZO0FBQ3hELFVBQUlDLE9BQU8sQ0FBQ0gsS0FBRCxFQUFRQyxXQUFSLEVBQXFCRyxNQUFyQixDQUE0QkYsVUFBNUIsQ0FBWDs7QUFFQWQsWUFBTUMsU0FBTixDQUFnQmdCLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QlAsS0FBN0IsRUFBb0NJLElBQXBDO0FBQ0Q7Ozs0QkFFY0osSyxFQUFPUSxPLEVBQVM7QUFDN0IsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRVCxNQUFNVSxNQUFsQyxFQUEwQ0QsT0FBMUMsRUFBbUQ7QUFDakQsWUFBSVQsTUFBTVMsS0FBTixNQUFpQkQsT0FBckIsRUFBOEI7QUFDNUIsaUJBQU9DLEtBQVA7QUFDRDtBQUNGO0FBQ0Y7OztrQ0FFb0JFLE0sRUFBUTtBQUMzQixVQUFJQyxZQUFZRCxPQUFPRSxRQUFQLEVBQWhCO0FBQUEsVUFDSUMsZ0JBQWdCRixVQUFVRyxPQUFWLENBQWtCLEtBQWxCLEVBQXdCLEVBQXhCLEVBQTRCQSxPQUE1QixDQUFvQyxnQkFBcEMsRUFBcUQsRUFBckQsQ0FEcEIsQ0FEMkIsQ0FFbUQ7O0FBRTlFLGFBQU9ELGFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUI5QixJQUFqQiIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyB1dGlsIHtcbiAgc3RhdGljIG1pbkJhck1pbnVzT25lKCkge1xuICAgIHZhciB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICBtaW5CYXJNaW51c09uZSA9IHVuZGVmaW5lZDtcblxuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPiAtMSkge1xuICAgICAgICBtaW5CYXJNaW51c09uZSA9ICggbWluQmFyTWludXNPbmUgPT09IHVuZGVmaW5lZCApID8gdmFsdWUgOiBNYXRoLm1pbihtaW5CYXJNaW51c09uZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1pbkJhck1pbnVzT25lO1xuICB9XG5cbiAgc3RhdGljIHNwbGljZUFycmF5KGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkpIHtcbiAgICB2YXIgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnRdLmNvbmNhdChpdGVtc0FycmF5KTtcbiAgXG4gICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgaW5kZXhPZihhcnJheSwgZWxlbWVudCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChhcnJheVtpbmRleF0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZWdFeHBQYXR0ZXJuKHJlZ0V4cCkge1xuICAgIHZhciByZWdFeHBTdHIgPSByZWdFeHAudG9TdHJpbmcoKSxcbiAgICAgICAgcmVnRXhwUGF0dGVybiA9IHJlZ0V4cFN0ci5yZXBsYWNlKC9eXFwvLywnJykucmVwbGFjZSgvXFwvKD86W15cXC9dKj8pJC8sJycpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gcmVnRXhwUGF0dGVybjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG4iXX0=