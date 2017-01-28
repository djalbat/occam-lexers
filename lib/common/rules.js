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
    key: 'getRule',
    value: function getRule(depth) {
      var rule = this.array[depth];

      return rule;
    }
  }, {
    key: 'significantTokenFromContentAndLine',
    value: function significantTokenFromContentAndLine(content, line) {
      var significantToken = null;

      this.array.some(function (rule) {
        significantToken = rule.significantTokenFromContentAndLine(content, line);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJhcnJheSIsImRlcHRoIiwicnVsZSIsImNvbnRlbnQiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnRBbmRMaW5lIiwiZ3JhbW1hciIsIm1hcCIsImVudHJ5IiwidHlwZSIsInR5cGVGcm9tRW50cnkiLCJyZWdFeHAiLCJyZWdFeHBGcm9tRW50cnkiLCJydWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLE9BQU9ELFFBQVEsU0FBUixDQURYOztJQUdNRSxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU9DLEssRUFBTztBQUNiLFVBQUlDLE9BQU8sS0FBS0YsS0FBTCxDQUFXQyxLQUFYLENBQVg7O0FBRUEsYUFBT0MsSUFBUDtBQUNEOzs7dURBRWtDQyxPLEVBQVNDLEksRUFBTTtBQUNoRCxVQUFJQyxtQkFBbUIsSUFBdkI7O0FBRUEsV0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCLFVBQVNKLElBQVQsRUFBZTtBQUM3QkcsMkJBQW1CSCxLQUFLSyxrQ0FBTCxDQUF3Q0osT0FBeEMsRUFBaURDLElBQWpELENBQW5COztBQUVBLFlBQUlDLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixpQkFBTyxJQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxhQUFPQSxnQkFBUDtBQUNEOzs7Z0NBRWtCRyxPLEVBQVM7QUFDMUIsVUFBSVIsUUFBUVEsUUFBUUMsR0FBUixDQUFZLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsWUFBSUMsT0FBT2IsS0FBS2MsYUFBTCxDQUFtQkYsS0FBbkIsQ0FBWDtBQUFBLFlBQ0lHLFNBQVNmLEtBQUtnQixlQUFMLENBQXFCSixLQUFyQixDQURiO0FBQUEsWUFFSVIsT0FBTyxJQUFJTixJQUFKLENBQVNlLElBQVQsRUFBZUUsTUFBZixDQUZYOztBQUlBLGVBQU9YLElBQVA7QUFDRCxPQU5PLENBQVo7QUFBQSxVQU9JYSxRQUFRLElBQUloQixLQUFKLENBQVVDLEtBQVYsQ0FQWjs7QUFTQSxhQUFPZSxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsS0FBakIiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFJ1bGUoZGVwdGgpIHtcbiAgICB2YXIgcnVsZSA9IHRoaXMuYXJyYXlbZGVwdGhdO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgXG4gIHNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIHRoaXMuYXJyYXkuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICBzaWduaWZpY2FudFRva2VuID0gcnVsZS5zaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgdmFyIGFycmF5ID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21FbnRyeShlbnRyeSksXG4gICAgICAgICAgICAgIHJlZ0V4cCA9IHV0aWwucmVnRXhwRnJvbUVudHJ5KGVudHJ5KSxcbiAgICAgICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ0V4cCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcbiJdfQ==