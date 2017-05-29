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
    key: 'sanitiseContent',
    value: function sanitiseContent(content) {
      var sanitisedContent = content.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

      return sanitisedContent;
    }
  }]);

  return util;
}();

module.exports = util;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1pbmltdW1CYXJNaW51c09uZSIsInJlZHVjZSIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJjb250ZW50Iiwic2FuaXRpc2VkQ29udGVudCIsInJlcGxhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7Ozs7Ozs7eUNBQ3dCO0FBQzFCLFVBQU1DLFNBQVNDLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQkMsU0FBM0IsQ0FBZjtBQUFBLFVBQ01DLHFCQUFxQk4sT0FBT08sTUFBUCxDQUFjLFVBQVNELGtCQUFULEVBQTZCRSxLQUE3QixFQUFvQztBQUNyRSxZQUFJQSxRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNkRiwrQkFBc0JBLHVCQUF1QixJQUF4QixHQUNHRyxLQUFLQyxHQUFMLENBQVNKLGtCQUFULEVBQTZCRSxLQUE3QixDQURILEdBRUtBLEtBRjFCO0FBR0Q7O0FBRUQsZUFBT0Ysa0JBQVA7QUFDRCxPQVJvQixFQVFsQixJQVJrQixDQUQzQjs7QUFXQSxhQUFPQSxrQkFBUDtBQUNEOzs7Z0NBRWtCSyxLLEVBQU9DLEssRUFBT0MsVyxFQUFhQyxVLEVBQVk7QUFDeEQsVUFBTUMsT0FBTyxDQUFDSCxLQUFELEVBQVFDLFdBQVIsRUFBcUJHLE1BQXJCLENBQTRCRixVQUE1QixDQUFiOztBQUVBYixZQUFNQyxTQUFOLENBQWdCZSxNQUFoQixDQUF1QkMsS0FBdkIsQ0FBNkJQLEtBQTdCLEVBQW9DSSxJQUFwQztBQUNEOzs7b0NBRXNCSSxPLEVBQVM7QUFDOUIsVUFBTUMsbUJBQW1CRCxRQUFRRSxPQUFSLENBQWdCLEdBQWhCLEVBQW9CLE9BQXBCLEVBQTZCQSxPQUE3QixDQUFxQyxHQUFyQyxFQUEwQyxNQUExQyxFQUFrREEsT0FBbEQsQ0FBMEQsR0FBMUQsRUFBK0QsTUFBL0QsQ0FBekI7O0FBRUEsYUFBT0QsZ0JBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJ4QixJQUFqQiIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyB1dGlsIHtcbiAgc3RhdGljIG1pbmltdW1CYXJNaW51c09uZSgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgIG1pbmltdW1CYXJNaW51c09uZSA9IHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24obWluaW11bUJhck1pbnVzT25lLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gLTEpIHtcbiAgICAgICAgICAgICAgbWluaW11bUJhck1pbnVzT25lID0gKG1pbmltdW1CYXJNaW51c09uZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihtaW5pbXVtQmFyTWludXNPbmUsIHZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIG1pbmltdW1CYXJNaW51c09uZTtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBtaW5pbXVtQmFyTWludXNPbmU7XG4gIH1cblxuICBzdGF0aWMgc3BsaWNlQXJyYXkoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSkge1xuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50XS5jb25jYXQoaXRlbXNBcnJheSk7XG4gIFxuICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIHNhbml0aXNlQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvJi8sJyZhbXA7JykucmVwbGFjZSgvPC8sICcmbHQ7JykucmVwbGFjZSgvPi8sICcmZ3Q7Jyk7XG5cbiAgICByZXR1cm4gc2FuaXRpc2VkQ29udGVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG4iXX0=