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
            regExpPattern = regExp.source,
            ///
        regExpIsUnicode = regExp.unicode,
            regExpFlags = regExpIsUnicode ? 'u' : '';

        regExp = new RegExp('^(' + regExpPattern + ')', regExpFlags); ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJhcnJheSIsImNvbnRlbnQiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwic2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50IiwiZ3JhbW1hciIsIm1hcCIsImVudHJ5IiwidHlwZSIsInR5cGVGcm9tRW50cnkiLCJyZWdFeHAiLCJyZWdFeHBGcm9tRW50cnkiLCJyZWdFeHBQYXR0ZXJuIiwic291cmNlIiwicmVnRXhwSXNVbmljb2RlIiwidW5pY29kZSIsInJlZ0V4cEZsYWdzIiwiUmVnRXhwIiwicnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxPQUFPRCxRQUFRLFNBQVIsQ0FEWDs7SUFHTUUsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O2dEQUUyQkMsTyxFQUFTQyxJLEVBQU07QUFDekMsVUFBSUMsbUJBQW1CLElBQXZCOztBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDN0JGLDJCQUFtQkUsS0FBS0MsMkJBQUwsQ0FBaUNMLE9BQWpDLEVBQTBDQyxJQUExQyxDQUFuQjs7QUFFQSxZQUFJQyxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsaUJBQU8sSUFBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT0EsZ0JBQVA7QUFDRDs7O2dDQUVrQkksTyxFQUFTO0FBQzFCLFVBQUlQLFFBQVFPLFFBQVFDLEdBQVIsQ0FBWSxVQUFTQyxLQUFULEVBQWdCO0FBQ2xDLFlBQUlDLE9BQU9aLEtBQUthLGFBQUwsQ0FBbUJGLEtBQW5CLENBQVg7QUFBQSxZQUNJRyxTQUFTZCxLQUFLZSxlQUFMLENBQXFCSixLQUFyQixDQURiO0FBQUEsWUFFSUssZ0JBQWdCRixPQUFPRyxNQUYzQjtBQUFBLFlBRW9DO0FBQ2hDQywwQkFBa0JKLE9BQU9LLE9BSDdCO0FBQUEsWUFJSUMsY0FBY0Ysa0JBQWtCLEdBQWxCLEdBQXdCLEVBSjFDOztBQU1BSixpQkFBUyxJQUFJTyxNQUFKLFFBQWdCTCxhQUFoQixRQUFrQ0ksV0FBbEMsQ0FBVCxDQVBrQyxDQU91Qjs7QUFFekQsWUFBSWIsT0FBTyxJQUFJVCxJQUFKLENBQVNjLElBQVQsRUFBZUUsTUFBZixDQUFYOztBQUVBLGVBQU9QLElBQVA7QUFDRCxPQVpPLENBQVo7QUFBQSxVQWFJZSxRQUFRLElBQUlyQixLQUFKLENBQVVDLEtBQVYsQ0FiWjs7QUFlQSxhQUFPb0IsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnZCLEtBQWpCIiwiZmlsZSI6InJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbmNsYXNzIFJ1bGVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cbiAgXG4gIHNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgdGhpcy5hcnJheS5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLnNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIHZhciBhcnJheSA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSB1dGlsLnR5cGVGcm9tRW50cnkoZW50cnkpLFxuICAgICAgICAgICAgICByZWdFeHAgPSB1dGlsLnJlZ0V4cEZyb21FbnRyeShlbnRyeSksXG4gICAgICAgICAgICAgIHJlZ0V4cFBhdHRlcm4gPSByZWdFeHAuc291cmNlLCAgLy8vXG4gICAgICAgICAgICAgIHJlZ0V4cElzVW5pY29kZSA9IHJlZ0V4cC51bmljb2RlLFxuICAgICAgICAgICAgICByZWdFeHBGbGFncyA9IHJlZ0V4cElzVW5pY29kZSA/ICd1JyA6ICcnO1xuXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChgXigke3JlZ0V4cFBhdHRlcm59KWAsIHJlZ0V4cEZsYWdzKTsgLy8vXG5cbiAgICAgICAgICB2YXIgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ0V4cCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcbiJdfQ==