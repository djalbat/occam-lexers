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
            terminate = context.shouldTerminate(length);

        if (terminate) {
          break;
        }

        var line = this.Line.fromContent(content, context, this.rules);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJDb250ZXh0IiwiU2lnbmlmaWNhbnRUb2tlbiIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50cyIsImZpcnN0TGluZUluZGV4IiwiY29udGV4dCIsImxpbmVzIiwiaW5kZXgiLCJjb250ZW50IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwidGVybWluYXRlIiwic2hvdWxkVGVybWluYXRlIiwibGluZSIsImZyb21Db250ZW50IiwicHVzaCIsImdyYW1tYXIiLCJmcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIk9iamVjdCIsImtleXMiLCJ0eXBlcyIsImdyYW1tYXJUeXBlcyIsIm1hcCIsImdyYW1tYXJFbnRyeSIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsImdyYW1tYXJUeXBlIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7QUFBQSxJQUVJRSxRQUFRRixRQUFRLFNBQVIsQ0FGWjtBQUFBLElBR0lHLFVBQVVILFFBQVEsV0FBUixDQUhkO0FBQUEsSUFJSUksbUJBQW1CSixRQUFRLHFCQUFSLENBSnZCOztJQU1NSyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJQLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtPLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtQLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3NDQUVpQlEsUSxFQUF1RDtBQUFBLFVBQTdDQyxjQUE2Qyx1RUFBNUIsQ0FBNEI7QUFBQSxVQUF6QkMsT0FBeUIsdUVBQWYsSUFBSU4sT0FBSixFQUFlOztBQUN2RSxVQUFJTyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxRQUFRSCxjQURaO0FBQUEsVUFFSUksVUFBVUwsU0FBU0ksS0FBVCxDQUZkOztBQUlBLGFBQU9DLFlBQVlDLFNBQW5CLEVBQThCO0FBQzVCLFlBQUlDLFNBQVNILFFBQVFILGNBQXJCO0FBQUEsWUFDSU8sWUFBWU4sUUFBUU8sZUFBUixDQUF3QkYsTUFBeEIsQ0FEaEI7O0FBR0EsWUFBSUMsU0FBSixFQUFlO0FBQ2I7QUFDRDs7QUFFRCxZQUFJRSxPQUFPLEtBQUtsQixJQUFMLENBQVVtQixXQUFWLENBQXNCTixPQUF0QixFQUErQkgsT0FBL0IsRUFBd0MsS0FBS0gsS0FBN0MsQ0FBWDs7QUFFQUksY0FBTVMsSUFBTixDQUFXRixJQUFYOztBQUVBTCxrQkFBVUwsU0FBUyxFQUFFSSxLQUFYLENBQVY7QUFDRDs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OztxQ0FFdUJVLE8sRUFBUztBQUFFLGFBQU9sQixNQUFNbUIsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7O3FEQUUvQkEsTyxFQUFTO0FBQy9DLFVBQUlFLHdCQUF3QkMsT0FBT0MsSUFBUCxDQUFZcEIsaUJBQWlCcUIsS0FBN0IsQ0FBNUI7QUFBQSxVQUNJQyxlQUFlTixRQUFRTyxHQUFSLENBQVksVUFBU0MsWUFBVCxFQUF1QjtBQUNoRCxZQUFJQyxPQUFPNUIsS0FBSzZCLG9CQUFMLENBQTBCRixZQUExQixDQUFYO0FBQUEsWUFDSUcsY0FBY0YsSUFEbEIsQ0FEZ0QsQ0FFdkI7O0FBRXpCLGVBQU9FLFdBQVA7QUFDRCxPQUxjLENBRG5COztBQVFBVCw4QkFBd0JBLHNCQUFzQlUsTUFBdEIsQ0FBNkJOLFlBQTdCLENBQXhCLENBVCtDLENBU3FCOztBQUVwRSxhQUFPSixxQkFBUDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQjdCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3NpZ25pZmljYW50Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXggPSAwLCBjb250ZXh0ID0gbmV3IENvbnRleHQoKSkge1xyXG4gICAgdmFyIGxpbmVzID0gW10sXHJcbiAgICAgICAgaW5kZXggPSBmaXJzdExpbmVJbmRleCxcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIGxlbmd0aCA9IGluZGV4IC0gZmlyc3RMaW5lSW5kZXgsXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBjb250ZXh0LnNob3VsZFRlcm1pbmF0ZShsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBPYmplY3Qua2V5cyhTaWduaWZpY2FudFRva2VuLnR5cGVzKSxcclxuICAgICAgICBncmFtbWFyVHlwZXMgPSBncmFtbWFyLm1hcChmdW5jdGlvbihncmFtbWFyRW50cnkpIHtcclxuICAgICAgICAgIHZhciB0eXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxyXG4gICAgICAgICAgICAgIGdyYW1tYXJUeXBlID0gdHlwZTsgIC8vL1xyXG5cclxuICAgICAgICAgIHJldHVybiBncmFtbWFyVHlwZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBzaWduaWZpY2FudFRva2VuVHlwZXMuY29uY2F0KGdyYW1tYXJUeXBlcyk7IC8vL1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=