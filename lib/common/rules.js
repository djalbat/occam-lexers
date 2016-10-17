'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    util = require('../util');

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
      var array = grammar.map(function (entry) {
        var type = util.typeFromEntry(entry),
            regExp = util.regExpFromEntry(entry),
            regExpPattern = util.regExpPattern(regExp);

        regExp = new RegExp('^(' + regExpPattern + ')', 'u'); ///

        var rule = new Rule(type, regExp);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }]);

  return Rules;
}();

module.exports = Rules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJhcnJheSIsImNvbnRlbnQiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwic2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50IiwiZ3JhbW1hciIsIm1hcCIsImVudHJ5IiwidHlwZSIsInR5cGVGcm9tRW50cnkiLCJyZWdFeHAiLCJyZWdFeHBGcm9tRW50cnkiLCJyZWdFeHBQYXR0ZXJuIiwiUmVnRXhwIiwicnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxPQUFPRCxRQUFRLFNBQVIsQ0FEWDs7SUFHTUUsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O2dEQUUyQkMsTyxFQUFTQyxJLEVBQU07QUFDekMsVUFBSUMsbUJBQW1CLElBQXZCOztBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDN0JGLDJCQUFtQkUsS0FBS0MsMkJBQUwsQ0FBaUNMLE9BQWpDLEVBQTBDQyxJQUExQyxDQUFuQjs7QUFFQSxZQUFJQyxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsaUJBQU8sSUFBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT0EsZ0JBQVA7QUFDRDs7O2dDQUVrQkksTyxFQUFTO0FBQzFCLFVBQUlQLFFBQVFPLFFBQVFDLEdBQVIsQ0FBWSxVQUFTQyxLQUFULEVBQWdCO0FBQ2xDLFlBQUlDLE9BQU9aLEtBQUthLGFBQUwsQ0FBbUJGLEtBQW5CLENBQVg7QUFBQSxZQUNJRyxTQUFTZCxLQUFLZSxlQUFMLENBQXFCSixLQUFyQixDQURiO0FBQUEsWUFFSUssZ0JBQWdCaEIsS0FBS2dCLGFBQUwsQ0FBbUJGLE1BQW5CLENBRnBCOztBQUlBQSxpQkFBUyxJQUFJRyxNQUFKLENBQVcsT0FBT0QsYUFBUCxHQUF1QixHQUFsQyxFQUF1QyxHQUF2QyxDQUFULENBTGtDLENBS29COztBQUV0RCxZQUFJVCxPQUFPLElBQUlULElBQUosQ0FBU2MsSUFBVCxFQUFlRSxNQUFmLENBQVg7O0FBRUEsZUFBT1AsSUFBUDtBQUNELE9BVk8sQ0FBWjtBQUFBLFVBV0lXLFFBQVEsSUFBSWpCLEtBQUosQ0FBVUMsS0FBVixDQVhaOztBQWFBLGFBQU9nQixLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkIsS0FBakIiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICB0aGlzLmFycmF5LnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgdmFyIGFycmF5ID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21FbnRyeShlbnRyeSksXG4gICAgICAgICAgICAgIHJlZ0V4cCA9IHV0aWwucmVnRXhwRnJvbUVudHJ5KGVudHJ5KSxcbiAgICAgICAgICAgICAgcmVnRXhwUGF0dGVybiA9IHV0aWwucmVnRXhwUGF0dGVybihyZWdFeHApO1xuXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXignICsgcmVnRXhwUGF0dGVybiArICcpJywgJ3UnKTsgLy8vXG5cbiAgICAgICAgICB2YXIgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ0V4cCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcbiJdfQ==