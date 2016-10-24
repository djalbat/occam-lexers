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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJhcnJheSIsImRlcHRoIiwicnVsZSIsImNvbnRlbnQiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQiLCJncmFtbWFyIiwibWFwIiwiZW50cnkiLCJ0eXBlIiwidHlwZUZyb21FbnRyeSIsInJlZ0V4cCIsInJlZ0V4cEZyb21FbnRyeSIsInJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7O0lBR01FLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs0QkFFT0MsSyxFQUFPO0FBQ2IsVUFBSUMsT0FBTyxLQUFLRixLQUFMLENBQVdDLEtBQVgsQ0FBWDs7QUFFQSxhQUFPQyxJQUFQO0FBQ0Q7OztnREFFMkJDLE8sRUFBU0MsSSxFQUFNO0FBQ3pDLFVBQUlDLG1CQUFtQixJQUF2Qjs7QUFFQSxXQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBZ0IsVUFBU0osSUFBVCxFQUFlO0FBQzdCRywyQkFBbUJILEtBQUtLLDJCQUFMLENBQWlDSixPQUFqQyxFQUEwQ0MsSUFBMUMsQ0FBbkI7O0FBRUEsWUFBSUMscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLGlCQUFPLElBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVJEOztBQVVBLGFBQU9BLGdCQUFQO0FBQ0Q7OztnQ0FFa0JHLE8sRUFBUztBQUMxQixVQUFJUixRQUFRUSxRQUFRQyxHQUFSLENBQVksVUFBU0MsS0FBVCxFQUFnQjtBQUNsQyxZQUFJQyxPQUFPYixLQUFLYyxhQUFMLENBQW1CRixLQUFuQixDQUFYO0FBQUEsWUFDSUcsU0FBU2YsS0FBS2dCLGVBQUwsQ0FBcUJKLEtBQXJCLENBRGI7QUFBQSxZQUVJUixPQUFPLElBQUlOLElBQUosQ0FBU2UsSUFBVCxFQUFlRSxNQUFmLENBRlg7O0FBSUEsZUFBT1gsSUFBUDtBQUNELE9BTk8sQ0FBWjtBQUFBLFVBT0lhLFFBQVEsSUFBSWhCLEtBQUosQ0FBVUMsS0FBVixDQVBaOztBQVNBLGFBQU9lLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJsQixLQUFqQiIsImZpbGUiOiJydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG5jbGFzcyBSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0UnVsZShkZXB0aCkge1xuICAgIHZhciBydWxlID0gdGhpcy5hcnJheVtkZXB0aF07XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICB0aGlzLmFycmF5LnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgdmFyIGFycmF5ID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21FbnRyeShlbnRyeSksXG4gICAgICAgICAgICAgIHJlZ0V4cCA9IHV0aWwucmVnRXhwRnJvbUVudHJ5KGVudHJ5KSxcbiAgICAgICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ0V4cCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcbiJdfQ==