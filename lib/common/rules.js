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
      var rule = this.array[depth] || null; ///

      return rule;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJhcnJheSIsImRlcHRoIiwicnVsZSIsImdyYW1tYXIiLCJtYXAiLCJncmFtbWFyRW50cnkiLCJ0eXBlIiwidHlwZUZyb21HcmFtbWFyRW50cnkiLCJyZWdFeHAiLCJyZWdFeHBGcm9tR3JhbW1hckVudHJ5IiwicnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxPQUFPRCxRQUFRLFNBQVIsQ0FEWDs7SUFHTUUsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPQyxLLEVBQU87QUFDYixVQUFJQyxPQUFPLEtBQUtGLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixJQUFoQyxDQURhLENBQ3lCOztBQUV0QyxhQUFPQyxJQUFQO0FBQ0Q7OztnQ0FFa0JDLE8sRUFBUztBQUMxQixVQUFJSCxRQUFRRyxRQUFRQyxHQUFSLENBQVksVUFBU0MsWUFBVCxFQUF1QjtBQUN6QyxZQUFJQyxPQUFPUixLQUFLUyxvQkFBTCxDQUEwQkYsWUFBMUIsQ0FBWDtBQUFBLFlBQ0lHLFNBQVNWLEtBQUtXLHNCQUFMLENBQTRCSixZQUE1QixDQURiO0FBQUEsWUFFSUgsT0FBTyxJQUFJTixJQUFKLENBQVNVLElBQVQsRUFBZUUsTUFBZixDQUZYOztBQUlBLGVBQU9OLElBQVA7QUFDRCxPQU5PLENBQVo7QUFBQSxVQU9JUSxRQUFRLElBQUlYLEtBQUosQ0FBVUMsS0FBVixDQVBaOztBQVNBLGFBQU9VLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJiLEtBQWpCIiwiZmlsZSI6InJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbmNsYXNzIFJ1bGVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRSdWxlKGRlcHRoKSB7XG4gICAgdmFyIHJ1bGUgPSB0aGlzLmFycmF5W2RlcHRoXSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIHZhciBhcnJheSA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGdyYW1tYXJFbnRyeSkge1xuICAgICAgICAgIHZhciB0eXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxuICAgICAgICAgICAgICByZWdFeHAgPSB1dGlsLnJlZ0V4cEZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcbiAgICAgICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ0V4cCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcbiJdfQ==