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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1pbkJhck1pbnVzT25lIiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJsZW5ndGgiLCJyZWdFeHAiLCJyZWdFeHBTdHIiLCJ0b1N0cmluZyIsInJlZ0V4cFBhdHRlcm4iLCJyZXBsYWNlIiwiZW50cnkiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsInR5cGVGcm9tRW50cnkiLCJncmFtbWFyIiwiZmluZCIsImdyYW1tYXJUeXBlIiwiZm91bmQiLCJyZWdFeHBGcm9tRW50cnkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7Ozs7Ozs7cUNBQ29CO0FBQ3RCLFVBQUlDLFNBQVNDLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQkMsU0FBM0IsQ0FBYjtBQUFBLFVBQ0lDLGlCQUFpQkMsU0FEckI7O0FBR0FQLGFBQU9RLE9BQVAsQ0FBZSxVQUFTQyxLQUFULEVBQWdCO0FBQzdCLFlBQUlBLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2RILDJCQUFtQkEsbUJBQW1CQyxTQUFyQixHQUFtQ0UsS0FBbkMsR0FBMkNDLEtBQUtDLEdBQUwsQ0FBU0wsY0FBVCxFQUF5QkcsS0FBekIsQ0FBNUQ7QUFDRDtBQUNGLE9BSkQ7O0FBTUEsYUFBT0gsY0FBUDtBQUNEOzs7Z0NBRWtCTSxLLEVBQU9DLEssRUFBT0MsVyxFQUFhQyxVLEVBQVk7QUFDeEQsVUFBSUMsT0FBTyxDQUFDSCxLQUFELEVBQVFDLFdBQVIsRUFBcUJHLE1BQXJCLENBQTRCRixVQUE1QixDQUFYOztBQUVBZCxZQUFNQyxTQUFOLENBQWdCZ0IsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCUCxLQUE3QixFQUFvQ0ksSUFBcEM7QUFDRDs7OzRCQUVjSixLLEVBQU9RLE8sRUFBUztBQUM3QixXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFULE1BQU1VLE1BQWxDLEVBQTBDRCxPQUExQyxFQUFtRDtBQUNqRCxZQUFJVCxNQUFNUyxLQUFOLE1BQWlCRCxPQUFyQixFQUE4QjtBQUM1QixpQkFBT0MsS0FBUDtBQUNEO0FBQ0Y7QUFDRjs7O2tDQUVvQkUsTSxFQUFRO0FBQzNCLFVBQUlDLFlBQVlELE9BQU9FLFFBQVAsRUFBaEI7QUFBQSxVQUNJQyxnQkFBZ0JGLFVBQVVHLE9BQVYsQ0FBa0IsS0FBbEIsRUFBd0IsRUFBeEIsRUFBNEJBLE9BQTVCLENBQW9DLGdCQUFwQyxFQUFxRCxFQUFyRCxDQURwQixDQUQyQixDQUVtRDs7QUFFOUUsYUFBT0QsYUFBUDtBQUNEOzs7a0NBRW9CRSxLLEVBQU87QUFDMUIsVUFBSUMsT0FBT0MsT0FBT0MsSUFBUCxDQUFZSCxLQUFaLEVBQW1CLENBQW5CLENBQVgsQ0FEMEIsQ0FDUzs7QUFFbkMsYUFBT0MsSUFBUDtBQUNEOzs7b0NBRXNCRCxLLEVBQU87QUFDNUIsVUFBSUMsT0FBTzlCLEtBQUtpQyxhQUFMLENBQW1CSixLQUFuQixDQUFYO0FBQUEsVUFDSUwsU0FBU0ssTUFBTUMsSUFBTixDQURiOztBQUdBLGFBQU9OLE1BQVA7QUFDRDs7O3VDQUV5QlUsTyxFQUFTSixJLEVBQU07QUFDdkMsVUFBSUQsUUFBUUssUUFBUUMsSUFBUixDQUFhLFVBQVNOLEtBQVQsRUFBZ0I7QUFDbkMsWUFBSU8sY0FBY3BDLEtBQUtpQyxhQUFMLENBQW1CSixLQUFuQixDQUFsQjtBQUFBLFlBQ0lRLFFBQVNELGdCQUFnQk4sSUFEN0I7O0FBR0EsZUFBT08sS0FBUDtBQUNELE9BTE8sQ0FBWjtBQUFBLFVBTUliLFNBQVN4QixLQUFLc0MsZUFBTCxDQUFxQlQsS0FBckIsQ0FOYjs7QUFRQSxhQUFPTCxNQUFQO0FBQ0Q7Ozs7OztBQUdIZSxPQUFPQyxPQUFQLEdBQWlCeEMsSUFBakIiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgdXRpbCB7XG4gIHN0YXRpYyBtaW5CYXJNaW51c09uZSgpIHtcbiAgICB2YXIgdmFsdWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgbWluQmFyTWludXNPbmUgPSB1bmRlZmluZWQ7XG5cbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlID4gLTEpIHtcbiAgICAgICAgbWluQmFyTWludXNPbmUgPSAoIG1pbkJhck1pbnVzT25lID09PSB1bmRlZmluZWQgKSA/IHZhbHVlIDogTWF0aC5taW4obWluQmFyTWludXNPbmUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtaW5CYXJNaW51c09uZTtcbiAgfVxuXG4gIHN0YXRpYyBzcGxpY2VBcnJheShhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBpdGVtc0FycmF5KSB7XG4gICAgdmFyIGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50XS5jb25jYXQoaXRlbXNBcnJheSk7XG4gIFxuICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIGluZGV4T2YoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoYXJyYXlbaW5kZXhdID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVnRXhwUGF0dGVybihyZWdFeHApIHtcbiAgICB2YXIgcmVnRXhwU3RyID0gcmVnRXhwLnRvU3RyaW5nKCksXG4gICAgICAgIHJlZ0V4cFBhdHRlcm4gPSByZWdFeHBTdHIucmVwbGFjZSgvXlxcLy8sJycpLnJlcGxhY2UoL1xcLyg/OlteXFwvXSo/KSQvLCcnKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHJlZ0V4cFBhdHRlcm47XG4gIH1cblxuICBzdGF0aWMgdHlwZUZyb21FbnRyeShlbnRyeSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LmtleXMoZW50cnkpWzBdOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICBzdGF0aWMgcmVnRXhwRnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHR5cGUgPSB1dGlsLnR5cGVGcm9tRW50cnkoZW50cnkpLFxuICAgICAgICByZWdFeHAgPSBlbnRyeVt0eXBlXTtcblxuICAgIHJldHVybiByZWdFeHA7XG4gIH07XG5cbiAgc3RhdGljIGZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCB0eXBlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ3JhbW1hci5maW5kKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIGdyYW1tYXJUeXBlID0gdXRpbC50eXBlRnJvbUVudHJ5KGVudHJ5KSxcbiAgICAgICAgICAgICAgZm91bmQgPSAoZ3JhbW1hclR5cGUgPT09IHR5cGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICB9KSxcbiAgICAgICAgcmVnRXhwID0gdXRpbC5yZWdFeHBGcm9tRW50cnkoZW50cnkpO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsO1xuIl19