'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecialToken = require('./token/special'),
    SignificantContentToken = require('../common/token/significantContent');

var SpecialTokens = function () {
  function SpecialTokens() {
    _classCallCheck(this, SpecialTokens);
  }

  _createClass(SpecialTokens, null, [{
    key: 'pass',
    value: function pass(tokens, line) {
      tokens = tokens.reduce(function (tokens, token) {
        if (token instanceof SignificantContentToken) {
          var significantContentToken = token,
              ///
          content = significantContentToken.getContent(),
              significantTokens = significantTokensFromContent(content, line);

          tokens = tokens.concat(significantTokens);
        } else {
          tokens.push(token);
        }

        return tokens;
      }, []);

      return tokens;
    }
  }]);

  return SpecialTokens;
}();

module.exports = SpecialTokens;

function significantTokensFromContent(content, line) {
  var contents = content.split(SpecialToken.regExp),
      significantTokens = contents.reduce(function (significantTokens, content) {
    var significantToken;

    if (content !== '') {
      var specialTokenPosition = SpecialToken.position(content);

      if (specialTokenPosition === 0) {
        var specialToken = SpecialToken.fromContent(content, line);

        significantToken = specialToken;
      } else {
        var significantContentToken = SignificantContentToken.fromContent(content);

        significantToken = significantContentToken;
      }

      significantTokens.push(significantToken);
    }

    return significantTokens;
  }, []);

  return significantTokens;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL3NwZWNpYWxUb2tlbnMuanMiXSwibmFtZXMiOlsiU3BlY2lhbFRva2VuIiwicmVxdWlyZSIsIlNpZ25pZmljYW50Q29udGVudFRva2VuIiwiU3BlY2lhbFRva2VucyIsInRva2VucyIsImxpbmUiLCJyZWR1Y2UiLCJ0b2tlbiIsInNpZ25pZmljYW50Q29udGVudFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJzaWduaWZpY2FudFRva2VucyIsInNpZ25pZmljYW50VG9rZW5zRnJvbUNvbnRlbnQiLCJjb25jYXQiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbnRlbnRzIiwic3BsaXQiLCJyZWdFeHAiLCJzaWduaWZpY2FudFRva2VuIiwic3BlY2lhbFRva2VuUG9zaXRpb24iLCJwb3NpdGlvbiIsInNwZWNpYWxUb2tlbiIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxpQkFBUixDQUFuQjtBQUFBLElBQ0lDLDBCQUEwQkQsUUFBUSxvQ0FBUixDQUQ5Qjs7SUFHTUUsYTs7Ozs7Ozt5QkFDUUMsTSxFQUFRQyxJLEVBQU07QUFDeEJELGVBQVNBLE9BQU9FLE1BQVAsQ0FBYyxVQUFTRixNQUFULEVBQWlCRyxLQUFqQixFQUF3QjtBQUM3QyxZQUFJQSxpQkFBaUJMLHVCQUFyQixFQUE4QztBQUM1QyxjQUFJTSwwQkFBMEJELEtBQTlCO0FBQUEsY0FBc0M7QUFDbENFLG9CQUFVRCx3QkFBd0JFLFVBQXhCLEVBRGQ7QUFBQSxjQUVJQyxvQkFBb0JDLDZCQUE2QkgsT0FBN0IsRUFBc0NKLElBQXRDLENBRnhCOztBQUlBRCxtQkFBU0EsT0FBT1MsTUFBUCxDQUFjRixpQkFBZCxDQUFUO0FBQ0QsU0FORCxNQU1PO0FBQ0xQLGlCQUFPVSxJQUFQLENBQVlQLEtBQVo7QUFDRDs7QUFFRCxlQUFPSCxNQUFQO0FBQ0QsT0FaUSxFQVlOLEVBWk0sQ0FBVDs7QUFjQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs7OztBQUdIVyxPQUFPQyxPQUFQLEdBQWlCYixhQUFqQjs7QUFFQSxTQUFTUyw0QkFBVCxDQUFzQ0gsT0FBdEMsRUFBK0NKLElBQS9DLEVBQXFEO0FBQ25ELE1BQUlZLFdBQVdSLFFBQVFTLEtBQVIsQ0FBY2xCLGFBQWFtQixNQUEzQixDQUFmO0FBQUEsTUFDSVIsb0JBQW9CTSxTQUFTWCxNQUFULENBQWdCLFVBQVNLLGlCQUFULEVBQTRCRixPQUE1QixFQUFxQztBQUN2RSxRQUFJVyxnQkFBSjs7QUFFQSxRQUFJWCxZQUFZLEVBQWhCLEVBQW9CO0FBQ2xCLFVBQUlZLHVCQUF1QnJCLGFBQWFzQixRQUFiLENBQXNCYixPQUF0QixDQUEzQjs7QUFFQSxVQUFJWSx5QkFBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsWUFBSUUsZUFBZXZCLGFBQWF3QixXQUFiLENBQXlCZixPQUF6QixFQUFrQ0osSUFBbEMsQ0FBbkI7O0FBRUFlLDJCQUFtQkcsWUFBbkI7QUFDRCxPQUpELE1BSU87QUFDTCxZQUFJZiwwQkFBMEJOLHdCQUF3QnNCLFdBQXhCLENBQW9DZixPQUFwQyxDQUE5Qjs7QUFFQVcsMkJBQW1CWix1QkFBbkI7QUFDRDs7QUFFREcsd0JBQWtCRyxJQUFsQixDQUF1Qk0sZ0JBQXZCO0FBQ0Q7O0FBRUQsV0FBT1QsaUJBQVA7QUFDRCxHQXBCbUIsRUFvQmpCLEVBcEJpQixDQUR4Qjs7QUF1QkEsU0FBT0EsaUJBQVA7QUFDRCIsImZpbGUiOiJzcGVjaWFsVG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFNwZWNpYWxUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3BlY2lhbCcpLFxyXG4gICAgU2lnbmlmaWNhbnRDb250ZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnRDb250ZW50Jyk7XHJcblxyXG5jbGFzcyBTcGVjaWFsVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnMsIGxpbmUpIHtcclxuICAgIHRva2VucyA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCB0b2tlbikge1xyXG4gICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBTaWduaWZpY2FudENvbnRlbnRUb2tlbikge1xyXG4gICAgICAgIHZhciBzaWduaWZpY2FudENvbnRlbnRUb2tlbiA9IHRva2VuLCAgLy8vXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudENvbnRlbnRUb2tlbi5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChzaWduaWZpY2FudFRva2Vucyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNwZWNpYWxUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcclxuICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KFNwZWNpYWxUb2tlbi5yZWdFeHApLFxyXG4gICAgICBzaWduaWZpY2FudFRva2VucyA9IGNvbnRlbnRzLnJlZHVjZShmdW5jdGlvbihzaWduaWZpY2FudFRva2VucywgY29udGVudCkge1xyXG4gICAgICAgIHZhciBzaWduaWZpY2FudFRva2VuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICAgICAgdmFyIHNwZWNpYWxUb2tlblBvc2l0aW9uID0gU3BlY2lhbFRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzcGVjaWFsVG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgc3BlY2lhbFRva2VuID0gU3BlY2lhbFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHNwZWNpYWxUb2tlbjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBzaWduaWZpY2FudENvbnRlbnRUb2tlbiA9IFNpZ25pZmljYW50Q29udGVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50Q29udGVudFRva2VuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zLnB1c2goc2lnbmlmaWNhbnRUb2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG59XHJcbiJdfQ==