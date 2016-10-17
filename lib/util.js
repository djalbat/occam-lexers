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
        var grammarType = grammar.type(entry),
            found = grammarType === type;

        return found;
      });

      return regExp;
    }
  }]);

  return util;
}();

module.exports = util;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1pbkJhck1pbnVzT25lIiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsIm1pbiIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0Iiwic3BsaWNlIiwiYXBwbHkiLCJlbGVtZW50IiwiaW5kZXgiLCJsZW5ndGgiLCJyZWdFeHAiLCJyZWdFeHBTdHIiLCJ0b1N0cmluZyIsInJlZ0V4cFBhdHRlcm4iLCJyZXBsYWNlIiwiZW50cnkiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsImdyYW1tYXIiLCJmaW5kIiwiZ3JhbW1hclR5cGUiLCJmb3VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSTs7Ozs7OztxQ0FDb0I7QUFDdEIsVUFBSUMsU0FBU0MsTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLElBQXRCLENBQTJCQyxTQUEzQixDQUFiO0FBQUEsVUFDSUMsaUJBQWlCQyxTQURyQjs7QUFHQVAsYUFBT1EsT0FBUCxDQUFlLFVBQVNDLEtBQVQsRUFBZ0I7QUFDN0IsWUFBSUEsUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDZEgsMkJBQW1CQSxtQkFBbUJDLFNBQXJCLEdBQW1DRSxLQUFuQyxHQUEyQ0MsS0FBS0MsR0FBTCxDQUFTTCxjQUFULEVBQXlCRyxLQUF6QixDQUE1RDtBQUNEO0FBQ0YsT0FKRDs7QUFNQSxhQUFPSCxjQUFQO0FBQ0Q7OztnQ0FFa0JNLEssRUFBT0MsSyxFQUFPQyxXLEVBQWFDLFUsRUFBWTtBQUN4RCxVQUFJQyxPQUFPLENBQUNILEtBQUQsRUFBUUMsV0FBUixFQUFxQkcsTUFBckIsQ0FBNEJGLFVBQTVCLENBQVg7O0FBRUFkLFlBQU1DLFNBQU4sQ0FBZ0JnQixNQUFoQixDQUF1QkMsS0FBdkIsQ0FBNkJQLEtBQTdCLEVBQW9DSSxJQUFwQztBQUNEOzs7NEJBRWNKLEssRUFBT1EsTyxFQUFTO0FBQzdCLFdBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUVQsTUFBTVUsTUFBbEMsRUFBMENELE9BQTFDLEVBQW1EO0FBQ2pELFlBQUlULE1BQU1TLEtBQU4sTUFBaUJELE9BQXJCLEVBQThCO0FBQzVCLGlCQUFPQyxLQUFQO0FBQ0Q7QUFDRjtBQUNGOzs7a0NBRW9CRSxNLEVBQVE7QUFDM0IsVUFBSUMsWUFBWUQsT0FBT0UsUUFBUCxFQUFoQjtBQUFBLFVBQ0lDLGdCQUFnQkYsVUFBVUcsT0FBVixDQUFrQixLQUFsQixFQUF3QixFQUF4QixFQUE0QkEsT0FBNUIsQ0FBb0MsZ0JBQXBDLEVBQXFELEVBQXJELENBRHBCLENBRDJCLENBRW1EOztBQUU5RSxhQUFPRCxhQUFQO0FBQ0Q7OztrQ0FFb0JFLEssRUFBTztBQUMxQixVQUFJQyxPQUFPQyxPQUFPQyxJQUFQLENBQVlILEtBQVosRUFBbUIsQ0FBbkIsQ0FBWCxDQUQwQixDQUNTOztBQUVuQyxhQUFPQyxJQUFQO0FBQ0Q7Ozt1Q0FFeUJHLE8sRUFBU0gsSSxFQUFNO0FBQ3ZDLFVBQUlOLFNBQVNTLFFBQVFDLElBQVIsQ0FBYSxVQUFTTCxLQUFULEVBQWdCO0FBQ3hDLFlBQUlNLGNBQWNGLFFBQVFILElBQVIsQ0FBYUQsS0FBYixDQUFsQjtBQUFBLFlBQ0lPLFFBQVNELGdCQUFnQkwsSUFEN0I7O0FBR0EsZUFBT00sS0FBUDtBQUNELE9BTFksQ0FBYjs7QUFPQSxhQUFPWixNQUFQO0FBQ0Q7Ozs7OztBQUdIYSxPQUFPQyxPQUFQLEdBQWlCdEMsSUFBakIiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgdXRpbCB7XG4gIHN0YXRpYyBtaW5CYXJNaW51c09uZSgpIHtcbiAgICB2YXIgdmFsdWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgbWluQmFyTWludXNPbmUgPSB1bmRlZmluZWQ7XG5cbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlID4gLTEpIHtcbiAgICAgICAgbWluQmFyTWludXNPbmUgPSAoIG1pbkJhck1pbnVzT25lID09PSB1bmRlZmluZWQgKSA/IHZhbHVlIDogTWF0aC5taW4obWluQmFyTWludXNPbmUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtaW5CYXJNaW51c09uZTtcbiAgfVxuXG4gIHN0YXRpYyBzcGxpY2VBcnJheShhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBpdGVtc0FycmF5KSB7XG4gICAgdmFyIGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50XS5jb25jYXQoaXRlbXNBcnJheSk7XG4gIFxuICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIGluZGV4T2YoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoYXJyYXlbaW5kZXhdID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVnRXhwUGF0dGVybihyZWdFeHApIHtcbiAgICB2YXIgcmVnRXhwU3RyID0gcmVnRXhwLnRvU3RyaW5nKCksXG4gICAgICAgIHJlZ0V4cFBhdHRlcm4gPSByZWdFeHBTdHIucmVwbGFjZSgvXlxcLy8sJycpLnJlcGxhY2UoL1xcLyg/OlteXFwvXSo/KSQvLCcnKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHJlZ0V4cFBhdHRlcm47XG4gIH1cblxuICBzdGF0aWMgdHlwZUZyb21FbnRyeShlbnRyeSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LmtleXMoZW50cnkpWzBdOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICBzdGF0aWMgZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsIHR5cGUpIHtcbiAgICB2YXIgcmVnRXhwID0gZ3JhbW1hci5maW5kKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICB2YXIgZ3JhbW1hclR5cGUgPSBncmFtbWFyLnR5cGUoZW50cnkpLFxuICAgICAgICAgIGZvdW5kID0gKGdyYW1tYXJUeXBlID09PSB0eXBlKTtcblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsO1xuIl19