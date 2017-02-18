'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    util = require('../util'),
    Rules = require('./rules'),
    Context = require('./context'),
    SignificantToken = require('./token/significant');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'linesFromContents',
    value: function linesFromContents(contents) {
      var firstLineIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Context();

      var lines = [],
          index = firstLineIndex,
          content = contents[index];

      while (content !== undefined) {
        var length = index - firstLineIndex,
            number = index + 1,
            terminate = context.shouldTerminate(length);

        if (terminate) {
          break;
        }

        var line = this.Line.fromContent(content, context, this.rules);

        line.setNumber(number);

        lines.push(line);

        content = contents[++index];
      }

      return lines;
    }
  }], [{
    key: 'rulesFromGrammar',
    value: function rulesFromGrammar(grammar) {
      return Rules.fromGrammar(grammar);
    }
  }, {
    key: 'significantTokenTypesFromGrammar',
    value: function significantTokenTypesFromGrammar(grammar) {
      var significantTokenTypes = Object.keys(SignificantToken.types),
          grammarTypes = grammar.map(function (grammarEntry) {
        var type = util.typeFromGrammarEntry(grammarEntry),
            grammarType = type; ///

        return grammarType;
      });

      significantTokenTypes = significantTokenTypes.concat(grammarTypes); ///

      return significantTokenTypes;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJDb250ZXh0IiwiU2lnbmlmaWNhbnRUb2tlbiIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50cyIsImZpcnN0TGluZUluZGV4IiwiY29udGV4dCIsImxpbmVzIiwiaW5kZXgiLCJjb250ZW50IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwibnVtYmVyIiwidGVybWluYXRlIiwic2hvdWxkVGVybWluYXRlIiwibGluZSIsImZyb21Db250ZW50Iiwic2V0TnVtYmVyIiwicHVzaCIsImdyYW1tYXIiLCJmcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIk9iamVjdCIsImtleXMiLCJ0eXBlcyIsImdyYW1tYXJUeXBlcyIsIm1hcCIsImdyYW1tYXJFbnRyeSIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsImdyYW1tYXJUeXBlIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7QUFBQSxJQUVJRSxRQUFRRixRQUFRLFNBQVIsQ0FGWjtBQUFBLElBR0lHLFVBQVVILFFBQVEsV0FBUixDQUhkO0FBQUEsSUFJSUksbUJBQW1CSixRQUFRLHFCQUFSLENBSnZCOztJQU1NSyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJQLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtPLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtQLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3NDQUVpQlEsUSxFQUF1RDtBQUFBLFVBQTdDQyxjQUE2Qyx1RUFBNUIsQ0FBNEI7QUFBQSxVQUF6QkMsT0FBeUIsdUVBQWYsSUFBSU4sT0FBSixFQUFlOztBQUN2RSxVQUFJTyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxRQUFRSCxjQURaO0FBQUEsVUFFSUksVUFBVUwsU0FBU0ksS0FBVCxDQUZkOztBQUlBLGFBQU9DLFlBQVlDLFNBQW5CLEVBQThCO0FBQzVCLFlBQUlDLFNBQVNILFFBQVFILGNBQXJCO0FBQUEsWUFDSU8sU0FBU0osUUFBUSxDQURyQjtBQUFBLFlBRUlLLFlBQVlQLFFBQVFRLGVBQVIsQ0FBd0JILE1BQXhCLENBRmhCOztBQUlBLFlBQUlFLFNBQUosRUFBZTtBQUNiO0FBQ0Q7O0FBRUQsWUFBSUUsT0FBTyxLQUFLbkIsSUFBTCxDQUFVb0IsV0FBVixDQUFzQlAsT0FBdEIsRUFBK0JILE9BQS9CLEVBQXdDLEtBQUtILEtBQTdDLENBQVg7O0FBRUFZLGFBQUtFLFNBQUwsQ0FBZUwsTUFBZjs7QUFFQUwsY0FBTVcsSUFBTixDQUFXSCxJQUFYOztBQUVBTixrQkFBVUwsU0FBUyxFQUFFSSxLQUFYLENBQVY7QUFDRDs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OztxQ0FFdUJZLE8sRUFBUztBQUFFLGFBQU9wQixNQUFNcUIsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7O3FEQUUvQkEsTyxFQUFTO0FBQy9DLFVBQUlFLHdCQUF3QkMsT0FBT0MsSUFBUCxDQUFZdEIsaUJBQWlCdUIsS0FBN0IsQ0FBNUI7QUFBQSxVQUNJQyxlQUFlTixRQUFRTyxHQUFSLENBQVksVUFBU0MsWUFBVCxFQUF1QjtBQUNoRCxZQUFJQyxPQUFPOUIsS0FBSytCLG9CQUFMLENBQTBCRixZQUExQixDQUFYO0FBQUEsWUFDSUcsY0FBY0YsSUFEbEIsQ0FEZ0QsQ0FFdkI7O0FBRXpCLGVBQU9FLFdBQVA7QUFDRCxPQUxjLENBRG5COztBQVFBVCw4QkFBd0JBLHNCQUFzQlUsTUFBdEIsQ0FBNkJOLFlBQTdCLENBQXhCLENBVCtDLENBU3FCOztBQUVwRSxhQUFPSixxQkFBUDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQi9CLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3NpZ25pZmljYW50Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXggPSAwLCBjb250ZXh0ID0gbmV3IENvbnRleHQoKSkge1xyXG4gICAgdmFyIGxpbmVzID0gW10sXHJcbiAgICAgICAgaW5kZXggPSBmaXJzdExpbmVJbmRleCxcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIGxlbmd0aCA9IGluZGV4IC0gZmlyc3RMaW5lSW5kZXgsXHJcbiAgICAgICAgICBudW1iZXIgPSBpbmRleCArIDEsXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBjb250ZXh0LnNob3VsZFRlcm1pbmF0ZShsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICAgIGxpbmUuc2V0TnVtYmVyKG51bWJlcik7XHJcblxyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gT2JqZWN0LmtleXMoU2lnbmlmaWNhbnRUb2tlbi50eXBlcyksXHJcbiAgICAgICAgZ3JhbW1hclR5cGVzID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZ3JhbW1hckVudHJ5KSB7XHJcbiAgICAgICAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgICAgICBncmFtbWFyVHlwZSA9IHR5cGU7ICAvLy9cclxuXHJcbiAgICAgICAgICByZXR1cm4gZ3JhbW1hclR5cGU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChncmFtbWFyVHlwZXMpOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19