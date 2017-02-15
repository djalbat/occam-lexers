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
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Context();

      var lines = [],
          index = 0,
          content = contents[index];

      while (content !== undefined) {
        var terminate = context.shouldTerminate(index);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJDb250ZXh0IiwiU2lnbmlmaWNhbnRUb2tlbiIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50cyIsImNvbnRleHQiLCJsaW5lcyIsImluZGV4IiwiY29udGVudCIsInVuZGVmaW5lZCIsInRlcm1pbmF0ZSIsInNob3VsZFRlcm1pbmF0ZSIsImxpbmUiLCJmcm9tQ29udGVudCIsInB1c2giLCJncmFtbWFyIiwiZnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJPYmplY3QiLCJrZXlzIiwidHlwZXMiLCJncmFtbWFyVHlwZXMiLCJtYXAiLCJncmFtbWFyRW50cnkiLCJ0eXBlIiwidHlwZUZyb21HcmFtbWFyRW50cnkiLCJncmFtbWFyVHlwZSIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLE9BQU9ELFFBQVEsU0FBUixDQURYO0FBQUEsSUFFSUUsUUFBUUYsUUFBUSxTQUFSLENBRlo7QUFBQSxJQUdJRyxVQUFVSCxRQUFRLFdBQVIsQ0FIZDtBQUFBLElBSUlJLG1CQUFtQkosUUFBUSxxQkFBUixDQUp2Qjs7SUFNTUssVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CUCxJQUFuQixFQUF5QjtBQUFBOztBQUN2QixTQUFLTyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLUCxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztzQ0FFaUJRLFEsRUFBbUM7QUFBQSxVQUF6QkMsT0FBeUIsdUVBQWYsSUFBSUwsT0FBSixFQUFlOztBQUNuRCxVQUFJTSxRQUFRLEVBQVo7QUFBQSxVQUNJQyxRQUFRLENBRFo7QUFBQSxVQUVJQyxVQUFVSixTQUFTRyxLQUFULENBRmQ7O0FBSUEsYUFBT0MsWUFBWUMsU0FBbkIsRUFBOEI7QUFDNUIsWUFBSUMsWUFBWUwsUUFBUU0sZUFBUixDQUF3QkosS0FBeEIsQ0FBaEI7O0FBRUEsWUFBSUcsU0FBSixFQUFlO0FBQ2I7QUFDRDs7QUFFRCxZQUFJRSxPQUFPLEtBQUtoQixJQUFMLENBQVVpQixXQUFWLENBQXNCTCxPQUF0QixFQUErQkgsT0FBL0IsRUFBd0MsS0FBS0YsS0FBN0MsQ0FBWDs7QUFFQUcsY0FBTVEsSUFBTixDQUFXRixJQUFYOztBQUVBSixrQkFBVUosU0FBUyxFQUFFRyxLQUFYLENBQVY7QUFDRDs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7OztxQ0FFdUJTLE8sRUFBUztBQUFFLGFBQU9oQixNQUFNaUIsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7O3FEQUUvQkEsTyxFQUFTO0FBQy9DLFVBQUlFLHdCQUF3QkMsT0FBT0MsSUFBUCxDQUFZbEIsaUJBQWlCbUIsS0FBN0IsQ0FBNUI7QUFBQSxVQUNJQyxlQUFlTixRQUFRTyxHQUFSLENBQVksVUFBU0MsWUFBVCxFQUF1QjtBQUNoRCxZQUFJQyxPQUFPMUIsS0FBSzJCLG9CQUFMLENBQTBCRixZQUExQixDQUFYO0FBQUEsWUFDSUcsY0FBY0YsSUFEbEIsQ0FEZ0QsQ0FFdkI7O0FBRXpCLGVBQU9FLFdBQVA7QUFDRCxPQUxjLENBRG5COztBQVFBVCw4QkFBd0JBLHNCQUFzQlUsTUFBdEIsQ0FBNkJOLFlBQTdCLENBQXhCLENBVCtDLENBU3FCOztBQUVwRSxhQUFPSixxQkFBUDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQjNCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3NpZ25pZmljYW50Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgY29udGV4dCA9IG5ldyBDb250ZXh0KCkpIHtcclxuICAgIHZhciBsaW5lcyA9IFtdLFxyXG4gICAgICAgIGluZGV4ID0gMCxcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIHRlcm1pbmF0ZSA9IGNvbnRleHQuc2hvdWxkVGVybWluYXRlKGluZGV4KTtcclxuXHJcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgdGhpcy5ydWxlcyk7XHJcblxyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gT2JqZWN0LmtleXMoU2lnbmlmaWNhbnRUb2tlbi50eXBlcyksXHJcbiAgICAgICAgZ3JhbW1hclR5cGVzID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZ3JhbW1hckVudHJ5KSB7XHJcbiAgICAgICAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgICAgICBncmFtbWFyVHlwZSA9IHR5cGU7ICAvLy9cclxuXHJcbiAgICAgICAgICByZXR1cm4gZ3JhbW1hclR5cGU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChncmFtbWFyVHlwZXMpOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19