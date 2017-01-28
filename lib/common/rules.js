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
      var array = grammar.map(function (grammarEntry) {
        var type = util.typeFromGrammarEntry(grammarEntry),
            regExp = util.regExpFromGrammarEntry(grammarEntry),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJhcnJheSIsImRlcHRoIiwicnVsZSIsImNvbnRlbnQiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnRBbmRMaW5lIiwiZ3JhbW1hciIsIm1hcCIsImdyYW1tYXJFbnRyeSIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsInJlZ0V4cCIsInJlZ0V4cEZyb21HcmFtbWFyRW50cnkiLCJydWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLE9BQU9ELFFBQVEsU0FBUixDQURYOztJQUdNRSxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU9DLEssRUFBTztBQUNiLFVBQUlDLE9BQU8sS0FBS0YsS0FBTCxDQUFXQyxLQUFYLENBQVg7O0FBRUEsYUFBT0MsSUFBUDtBQUNEOzs7dURBRWtDQyxPLEVBQVNDLEksRUFBTTtBQUNoRCxVQUFJQyxtQkFBbUIsSUFBdkI7O0FBRUEsV0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCLFVBQVNKLElBQVQsRUFBZTtBQUM3QkcsMkJBQW1CSCxLQUFLSyxrQ0FBTCxDQUF3Q0osT0FBeEMsRUFBaURDLElBQWpELENBQW5COztBQUVBLFlBQUlDLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixpQkFBTyxJQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxhQUFPQSxnQkFBUDtBQUNEOzs7Z0NBRWtCRyxPLEVBQVM7QUFDMUIsVUFBSVIsUUFBUVEsUUFBUUMsR0FBUixDQUFZLFVBQVNDLFlBQVQsRUFBdUI7QUFDekMsWUFBSUMsT0FBT2IsS0FBS2Msb0JBQUwsQ0FBMEJGLFlBQTFCLENBQVg7QUFBQSxZQUNJRyxTQUFTZixLQUFLZ0Isc0JBQUwsQ0FBNEJKLFlBQTVCLENBRGI7QUFBQSxZQUVJUixPQUFPLElBQUlOLElBQUosQ0FBU2UsSUFBVCxFQUFlRSxNQUFmLENBRlg7O0FBSUEsZUFBT1gsSUFBUDtBQUNELE9BTk8sQ0FBWjtBQUFBLFVBT0lhLFFBQVEsSUFBSWhCLEtBQUosQ0FBVUMsS0FBVixDQVBaOztBQVNBLGFBQU9lLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJsQixLQUFqQiIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG5jbGFzcyBSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0UnVsZShkZXB0aCkge1xuICAgIHZhciBydWxlID0gdGhpcy5hcnJheVtkZXB0aF07XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgdGhpcy5hcnJheS5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLnNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG5cbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgICB2YXIgYXJyYXkgPSBncmFtbWFyLm1hcChmdW5jdGlvbihncmFtbWFyRW50cnkpIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcbiAgICAgICAgICAgICAgcmVnRXhwID0gdXRpbC5yZWdFeHBGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSksXG4gICAgICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWdFeHApO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG4iXX0=