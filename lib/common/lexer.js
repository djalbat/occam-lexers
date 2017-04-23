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

      var lines = [];

      var index = firstLineIndex,
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
      var significantTokenTypes = Object.keys(SignificantToken.types);

      var grammarTypes = grammar.map(function (grammarEntry) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJDb250ZXh0IiwiU2lnbmlmaWNhbnRUb2tlbiIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50cyIsImZpcnN0TGluZUluZGV4IiwiY29udGV4dCIsImxpbmVzIiwiaW5kZXgiLCJjb250ZW50IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwidGVybWluYXRlIiwic2hvdWxkVGVybWluYXRlIiwibGluZSIsImZyb21Db250ZW50IiwicHVzaCIsImdyYW1tYXIiLCJmcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIk9iamVjdCIsImtleXMiLCJ0eXBlcyIsImdyYW1tYXJUeXBlcyIsIm1hcCIsImdyYW1tYXJFbnRyeSIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsImdyYW1tYXJUeXBlIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxTQUFSLENBRGI7QUFBQSxJQUVNRSxRQUFRRixRQUFRLFNBQVIsQ0FGZDtBQUFBLElBR01HLFVBQVVILFFBQVEsV0FBUixDQUhoQjtBQUFBLElBSU1JLG1CQUFtQkosUUFBUSxxQkFBUixDQUp6Qjs7SUFNTUssVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CUCxJQUFuQixFQUF5QjtBQUFBOztBQUN2QixTQUFLTyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLUCxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztzQ0FFaUJRLFEsRUFBdUQ7QUFBQSxVQUE3Q0MsY0FBNkMsdUVBQTVCLENBQTRCO0FBQUEsVUFBekJDLE9BQXlCLHVFQUFmLElBQUlOLE9BQUosRUFBZTs7QUFDdkUsVUFBTU8sUUFBUSxFQUFkOztBQUVBLFVBQUlDLFFBQVFILGNBQVo7QUFBQSxVQUNJSSxVQUFVTCxTQUFTSSxLQUFULENBRGQ7O0FBR0EsYUFBT0MsWUFBWUMsU0FBbkIsRUFBOEI7QUFDNUIsWUFBTUMsU0FBU0gsUUFBUUgsY0FBdkI7QUFBQSxZQUNNTyxZQUFZTixRQUFRTyxlQUFSLENBQXdCRixNQUF4QixDQURsQjs7QUFHQSxZQUFJQyxTQUFKLEVBQWU7QUFDYjtBQUNEOztBQUVELFlBQU1FLE9BQU8sS0FBS2xCLElBQUwsQ0FBVW1CLFdBQVYsQ0FBc0JOLE9BQXRCLEVBQStCSCxPQUEvQixFQUF3QyxLQUFLSCxLQUE3QyxDQUFiOztBQUVBSSxjQUFNUyxJQUFOLENBQVdGLElBQVg7O0FBRUFMLGtCQUFVTCxTQUFTLEVBQUVJLEtBQVgsQ0FBVjtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7O3FDQUV1QlUsTyxFQUFTO0FBQUUsYUFBT2xCLE1BQU1tQixXQUFOLENBQWtCRCxPQUFsQixDQUFQO0FBQW9DOzs7cURBRS9CQSxPLEVBQVM7QUFDL0MsVUFBS0Usd0JBQXdCQyxPQUFPQyxJQUFQLENBQVlwQixpQkFBaUJxQixLQUE3QixDQUE3Qjs7QUFFQSxVQUFNQyxlQUFlTixRQUFRTyxHQUFSLENBQVksVUFBU0MsWUFBVCxFQUF1QjtBQUNoRCxZQUFNQyxPQUFPNUIsS0FBSzZCLG9CQUFMLENBQTBCRixZQUExQixDQUFiO0FBQUEsWUFDSUcsY0FBY0YsSUFEbEIsQ0FEZ0QsQ0FFdkI7O0FBRXpCLGVBQU9FLFdBQVA7QUFDRCxPQUxjLENBQXJCOztBQU9BVCw4QkFBd0JBLHNCQUFzQlUsTUFBdEIsQ0FBNkJOLFlBQTdCLENBQXhCLENBVitDLENBVXFCOztBQUVwRSxhQUFPSixxQkFBUDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQjdCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgICBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4ID0gMCwgY29udGV4dCA9IG5ldyBDb250ZXh0KCkpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICBcclxuICAgIGxldCBpbmRleCA9IGZpcnN0TGluZUluZGV4LCAgICBcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gaW5kZXggLSBmaXJzdExpbmVJbmRleCxcclxuICAgICAgICAgICAgdGVybWluYXRlID0gY29udGV4dC5zaG91bGRUZXJtaW5hdGUobGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIGxldCAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gT2JqZWN0LmtleXMoU2lnbmlmaWNhbnRUb2tlbi50eXBlcyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGdyYW1tYXJUeXBlcyA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGdyYW1tYXJFbnRyeSkge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxyXG4gICAgICAgICAgICAgICAgZ3JhbW1hclR5cGUgPSB0eXBlOyAgLy8vXHJcbiAgXHJcbiAgICAgICAgICAgIHJldHVybiBncmFtbWFyVHlwZTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5jb25jYXQoZ3JhbW1hclR5cGVzKTsgLy8vXHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==