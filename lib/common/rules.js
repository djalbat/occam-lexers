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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJhcnJheSIsImRlcHRoIiwicnVsZSIsImdyYW1tYXIiLCJtYXAiLCJncmFtbWFyRW50cnkiLCJ0eXBlIiwidHlwZUZyb21HcmFtbWFyRW50cnkiLCJyZWdFeHAiLCJyZWdFeHBGcm9tR3JhbW1hckVudHJ5IiwicnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxPQUFPRCxRQUFRLFNBQVIsQ0FEWDs7SUFHTUUsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPQyxLLEVBQU87QUFDYixVQUFJQyxPQUFPLEtBQUtGLEtBQUwsQ0FBV0MsS0FBWCxDQUFYOztBQUVBLGFBQU9DLElBQVA7QUFDRDs7O2dDQUVrQkMsTyxFQUFTO0FBQzFCLFVBQUlILFFBQVFHLFFBQVFDLEdBQVIsQ0FBWSxVQUFTQyxZQUFULEVBQXVCO0FBQ3pDLFlBQUlDLE9BQU9SLEtBQUtTLG9CQUFMLENBQTBCRixZQUExQixDQUFYO0FBQUEsWUFDSUcsU0FBU1YsS0FBS1csc0JBQUwsQ0FBNEJKLFlBQTVCLENBRGI7QUFBQSxZQUVJSCxPQUFPLElBQUlOLElBQUosQ0FBU1UsSUFBVCxFQUFlRSxNQUFmLENBRlg7O0FBSUEsZUFBT04sSUFBUDtBQUNELE9BTk8sQ0FBWjtBQUFBLFVBT0lRLFFBQVEsSUFBSVgsS0FBSixDQUFVQyxLQUFWLENBUFo7O0FBU0EsYUFBT1UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmIsS0FBakIiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFJ1bGUoZGVwdGgpIHtcbiAgICB2YXIgcnVsZSA9IHRoaXMuYXJyYXlbZGVwdGhdO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgdmFyIGFycmF5ID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZ3JhbW1hckVudHJ5KSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSB1dGlsLnR5cGVGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSksXG4gICAgICAgICAgICAgIHJlZ0V4cCA9IHV0aWwucmVnRXhwRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxuICAgICAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVnRXhwKTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZXMgPSBuZXcgUnVsZXMoYXJyYXkpO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzO1xuIl19