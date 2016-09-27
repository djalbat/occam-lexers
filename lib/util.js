'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJhcnJheSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJpdGVtc0FycmF5IiwiYXJncyIsImNvbmNhdCIsIkFycmF5IiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Z0NBQ2VDLEssRUFBT0MsSyxFQUFPQyxXLEVBQWFDLFUsRUFBWTtBQUN4RCxVQUFJQyxPQUFPLENBQUNILEtBQUQsRUFBUUMsV0FBUixFQUFxQkcsTUFBckIsQ0FBNEJGLFVBQTVCLENBQVg7O0FBRUFHLFlBQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QlQsS0FBN0IsRUFBb0NJLElBQXBDO0FBQ0Q7Ozs0QkFFY0osSyxFQUFPVSxPLEVBQVM7QUFDN0IsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRWCxNQUFNWSxNQUFsQyxFQUEwQ0QsT0FBMUMsRUFBbUQ7QUFDakQsWUFBSVgsTUFBTVcsS0FBTixNQUFpQkQsT0FBckIsRUFBOEI7QUFDNUIsaUJBQU9DLEtBQVA7QUFDRDtBQUNGO0FBQ0Y7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCZixJQUFqQiIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyB1dGlsIHtcbiAgc3RhdGljIHNwbGljZUFycmF5KGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkpIHtcbiAgICB2YXIgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnRdLmNvbmNhdChpdGVtc0FycmF5KTtcbiAgXG4gICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgaW5kZXhPZihhcnJheSwgZWxlbWVudCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChhcnJheVtpbmRleF0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG4iXX0=