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
          lineNumber = context.getLineNumber(),
          index = lineNumber - 1,
          content = contents[index],
          firstLineNumber = lineNumber; ///

      while (content !== undefined) {
        var linesLength = lineNumber - firstLineNumber,
            terminate = context.shouldTerminate(linesLength);

        if (terminate) {
          break;
        }

        var line = this.Line.fromContent(content, context, this.rules);

        lines.push(line);

        context.incrementLineNumber();

        lineNumber = context.getLineNumber();
        index = lineNumber - 1;
        content = contents[index];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJDb250ZXh0IiwiU2lnbmlmaWNhbnRUb2tlbiIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50cyIsImNvbnRleHQiLCJsaW5lcyIsImxpbmVOdW1iZXIiLCJnZXRMaW5lTnVtYmVyIiwiaW5kZXgiLCJjb250ZW50IiwiZmlyc3RMaW5lTnVtYmVyIiwidW5kZWZpbmVkIiwibGluZXNMZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzaG91bGRUZXJtaW5hdGUiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJwdXNoIiwiaW5jcmVtZW50TGluZU51bWJlciIsImdyYW1tYXIiLCJmcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIk9iamVjdCIsImtleXMiLCJ0eXBlcyIsImdyYW1tYXJUeXBlcyIsIm1hcCIsImdyYW1tYXJFbnRyeSIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsImdyYW1tYXJUeXBlIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7QUFBQSxJQUVJRSxRQUFRRixRQUFRLFNBQVIsQ0FGWjtBQUFBLElBR0lHLFVBQVVILFFBQVEsV0FBUixDQUhkO0FBQUEsSUFJSUksbUJBQW1CSixRQUFRLHFCQUFSLENBSnZCOztJQU1NSyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJQLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtPLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtQLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3NDQUVpQlEsUSxFQUFtQztBQUFBLFVBQXpCQyxPQUF5Qix1RUFBZixJQUFJTCxPQUFKLEVBQWU7O0FBQ25ELFVBQUlNLFFBQVEsRUFBWjtBQUFBLFVBQ0lDLGFBQWFGLFFBQVFHLGFBQVIsRUFEakI7QUFBQSxVQUVJQyxRQUFRRixhQUFhLENBRnpCO0FBQUEsVUFHSUcsVUFBVU4sU0FBU0ssS0FBVCxDQUhkO0FBQUEsVUFJSUUsa0JBQWtCSixVQUp0QixDQURtRCxDQUtqQjs7QUFFbEMsYUFBT0csWUFBWUUsU0FBbkIsRUFBOEI7QUFDNUIsWUFBSUMsY0FBY04sYUFBYUksZUFBL0I7QUFBQSxZQUNJRyxZQUFZVCxRQUFRVSxlQUFSLENBQXdCRixXQUF4QixDQURoQjs7QUFHQSxZQUFJQyxTQUFKLEVBQWU7QUFDYjtBQUNEOztBQUVELFlBQUlFLE9BQU8sS0FBS3BCLElBQUwsQ0FBVXFCLFdBQVYsQ0FBc0JQLE9BQXRCLEVBQStCTCxPQUEvQixFQUF3QyxLQUFLRixLQUE3QyxDQUFYOztBQUVBRyxjQUFNWSxJQUFOLENBQVdGLElBQVg7O0FBRUFYLGdCQUFRYyxtQkFBUjs7QUFFQVoscUJBQWFGLFFBQVFHLGFBQVIsRUFBYjtBQUNBQyxnQkFBUUYsYUFBYSxDQUFyQjtBQUNBRyxrQkFBVU4sU0FBU0ssS0FBVCxDQUFWO0FBQ0Q7O0FBRUQsYUFBT0gsS0FBUDtBQUNEOzs7cUNBRXVCYyxPLEVBQVM7QUFBRSxhQUFPckIsTUFBTXNCLFdBQU4sQ0FBa0JELE9BQWxCLENBQVA7QUFBb0M7OztxREFFL0JBLE8sRUFBUztBQUMvQyxVQUFJRSx3QkFBd0JDLE9BQU9DLElBQVAsQ0FBWXZCLGlCQUFpQndCLEtBQTdCLENBQTVCO0FBQUEsVUFDSUMsZUFBZU4sUUFBUU8sR0FBUixDQUFZLFVBQVNDLFlBQVQsRUFBdUI7QUFDaEQsWUFBSUMsT0FBTy9CLEtBQUtnQyxvQkFBTCxDQUEwQkYsWUFBMUIsQ0FBWDtBQUFBLFlBQ0lHLGNBQWNGLElBRGxCLENBRGdELENBRXZCOztBQUV6QixlQUFPRSxXQUFQO0FBQ0QsT0FMYyxDQURuQjs7QUFRQVQsOEJBQXdCQSxzQkFBc0JVLE1BQXRCLENBQTZCTixZQUE3QixDQUF4QixDQVQrQyxDQVNxQjs7QUFFcEUsYUFBT0oscUJBQVA7QUFDRDs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUJoQyxXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGNvbnRleHQgPSBuZXcgQ29udGV4dCgpKSB7XHJcbiAgICB2YXIgbGluZXMgPSBbXSxcclxuICAgICAgICBsaW5lTnVtYmVyID0gY29udGV4dC5nZXRMaW5lTnVtYmVyKCksXHJcbiAgICAgICAgaW5kZXggPSBsaW5lTnVtYmVyIC0gMSxcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdLFxyXG4gICAgICAgIGZpcnN0TGluZU51bWJlciA9IGxpbmVOdW1iZXI7IC8vL1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIGxpbmVzTGVuZ3RoID0gbGluZU51bWJlciAtIGZpcnN0TGluZU51bWJlcixcclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNvbnRleHQuc2hvdWxkVGVybWluYXRlKGxpbmVzTGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgdGhpcy5ydWxlcyk7XHJcblxyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgY29udGV4dC5pbmNyZW1lbnRMaW5lTnVtYmVyKCk7XHJcblxyXG4gICAgICBsaW5lTnVtYmVyID0gY29udGV4dC5nZXRMaW5lTnVtYmVyKCk7XHJcbiAgICAgIGluZGV4ID0gbGluZU51bWJlciAtIDE7XHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50c1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBPYmplY3Qua2V5cyhTaWduaWZpY2FudFRva2VuLnR5cGVzKSxcclxuICAgICAgICBncmFtbWFyVHlwZXMgPSBncmFtbWFyLm1hcChmdW5jdGlvbihncmFtbWFyRW50cnkpIHtcclxuICAgICAgICAgIHZhciB0eXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxyXG4gICAgICAgICAgICAgIGdyYW1tYXJUeXBlID0gdHlwZTsgIC8vL1xyXG5cclxuICAgICAgICAgIHJldHVybiBncmFtbWFyVHlwZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBzaWduaWZpY2FudFRva2VuVHlwZXMuY29uY2F0KGdyYW1tYXJUeXBlcyk7IC8vL1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=