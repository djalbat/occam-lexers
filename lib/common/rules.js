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
      var types = Object.keys(grammar),
          ///
      array = types.map(function (type) {
        var regExp = grammar[type],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJSdWxlcyIsImFycmF5IiwiY29udGVudCIsImxpbmUiLCJzaWduaWZpY2FudFRva2VuIiwic29tZSIsInJ1bGUiLCJzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQiLCJncmFtbWFyIiwidHlwZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwidHlwZSIsInJlZ0V4cCIsInJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYOztJQUVNQyxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7Z0RBRTJCQyxPLEVBQVNDLEksRUFBTTtBQUN6QyxVQUFJQyxtQkFBbUIsSUFBdkI7O0FBRUEsV0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3QkYsMkJBQW1CRSxLQUFLQywyQkFBTCxDQUFpQ0wsT0FBakMsRUFBMENDLElBQTFDLENBQW5COztBQUVBLFlBQUlDLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixpQkFBTyxJQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxhQUFPQSxnQkFBUDtBQUNEOzs7Z0NBRWtCSSxPLEVBQVM7QUFDMUIsVUFBSUMsUUFBUUMsT0FBT0MsSUFBUCxDQUFZSCxPQUFaLENBQVo7QUFBQSxVQUFtQztBQUMvQlAsY0FBUVEsTUFBTUcsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUMvQixZQUFJQyxTQUFTTixRQUFRSyxJQUFSLENBQWI7QUFBQSxZQUNJUCxPQUFPLElBQUlSLElBQUosQ0FBU2UsSUFBVCxFQUFlQyxNQUFmLENBRFg7O0FBR0EsZUFBT1IsSUFBUDtBQUNELE9BTE8sQ0FEWjtBQUFBLFVBT0lTLFFBQVEsSUFBSWYsS0FBSixDQUFVQyxLQUFWLENBUFo7O0FBU0EsYUFBT2MsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmpCLEtBQWpCIiwiZmlsZSI6InJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpO1xuXG5jbGFzcyBSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG4gIFxuICBzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIHRoaXMuYXJyYXkuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICBzaWduaWZpY2FudFRva2VuID0gcnVsZS5zaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XG5cbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgICB2YXIgdHlwZXMgPSBPYmplY3Qua2V5cyhncmFtbWFyKSwgIC8vL1xuICAgICAgICBhcnJheSA9IHR5cGVzLm1hcChmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgICAgdmFyIHJlZ0V4cCA9IGdyYW1tYXJbdHlwZV0sXG4gICAgICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWdFeHApO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG4iXX0=