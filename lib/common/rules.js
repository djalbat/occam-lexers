'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule');

var Rules = function () {
  function Rules(array) {
    _classCallCheck(this, Rules);

    this.array = array;
  }

  _createClass(Rules, [{
    key: 'significantTokenFromContent',
    value: function significantTokenFromContent(content, line) {
      var significantToken = null;

      this.array.some(function (rule) {
        significantToken = rule.significantTokenFromContent(content, line);

        if (significantToken !== null) {
          return true;
        } else {
          return false;
        }
      });

      return significantToken;
    }
  }], [{
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var array = grammar.map(function (object) {
        var type = Object.keys(object),
            regExp = object[type],
            rule = new Rule(type, regExp);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }]);

  return Rules;
}();

module.exports = Rules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJSdWxlcyIsImFycmF5IiwiY29udGVudCIsImxpbmUiLCJzaWduaWZpY2FudFRva2VuIiwic29tZSIsInJ1bGUiLCJzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQiLCJncmFtbWFyIiwibWFwIiwib2JqZWN0IiwidHlwZSIsIk9iamVjdCIsImtleXMiLCJyZWdFeHAiLCJydWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDs7SUFFTUMsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O2dEQUUyQkMsTyxFQUFTQyxJLEVBQU07QUFDekMsVUFBSUMsbUJBQW1CLElBQXZCOztBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDN0JGLDJCQUFtQkUsS0FBS0MsMkJBQUwsQ0FBaUNMLE9BQWpDLEVBQTBDQyxJQUExQyxDQUFuQjs7QUFFQSxZQUFJQyxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsaUJBQU8sSUFBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT0EsZ0JBQVA7QUFDRDs7O2dDQUVrQkksTyxFQUFTO0FBQzFCLFVBQUlQLFFBQVFPLFFBQVFDLEdBQVIsQ0FBWSxVQUFTQyxNQUFULEVBQWlCO0FBQ25DLFlBQUlDLE9BQU9DLE9BQU9DLElBQVAsQ0FBWUgsTUFBWixDQUFYO0FBQUEsWUFDSUksU0FBU0osT0FBT0MsSUFBUCxDQURiO0FBQUEsWUFFSUwsT0FBTyxJQUFJUixJQUFKLENBQVNhLElBQVQsRUFBZUcsTUFBZixDQUZYOztBQUlBLGVBQU9SLElBQVA7QUFDRCxPQU5PLENBQVo7QUFBQSxVQU9JUyxRQUFRLElBQUlmLEtBQUosQ0FBVUMsS0FBVixDQVBaOztBQVNBLGFBQU9jLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJqQixLQUFqQiIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICB0aGlzLmFycmF5LnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgdmFyIGFycmF5ID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSBPYmplY3Qua2V5cyhvYmplY3QpLFxuICAgICAgICAgICAgICByZWdFeHAgPSBvYmplY3RbdHlwZV0sXG4gICAgICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWdFeHApO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG4iXX0=