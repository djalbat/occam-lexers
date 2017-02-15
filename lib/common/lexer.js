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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJDb250ZXh0IiwiU2lnbmlmaWNhbnRUb2tlbiIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50cyIsImZpcnN0TGluZUluZGV4IiwiY29udGV4dCIsImxpbmVzIiwiaW5kZXgiLCJjb250ZW50IiwidW5kZWZpbmVkIiwidGVybWluYXRlIiwic2hvdWxkVGVybWluYXRlIiwibGluZSIsImZyb21Db250ZW50IiwicHVzaCIsImdyYW1tYXIiLCJmcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIk9iamVjdCIsImtleXMiLCJ0eXBlcyIsImdyYW1tYXJUeXBlcyIsIm1hcCIsImdyYW1tYXJFbnRyeSIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsImdyYW1tYXJUeXBlIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7QUFBQSxJQUVJRSxRQUFRRixRQUFRLFNBQVIsQ0FGWjtBQUFBLElBR0lHLFVBQVVILFFBQVEsV0FBUixDQUhkO0FBQUEsSUFJSUksbUJBQW1CSixRQUFRLHFCQUFSLENBSnZCOztJQU1NSyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJQLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtPLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtQLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3NDQUVpQlEsUSxFQUF1RDtBQUFBLFVBQTdDQyxjQUE2Qyx1RUFBNUIsQ0FBNEI7QUFBQSxVQUF6QkMsT0FBeUIsdUVBQWYsSUFBSU4sT0FBSixFQUFlOztBQUN2RSxVQUFJTyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxRQUFRSCxjQURaO0FBQUEsVUFFSUksVUFBVUwsU0FBU0ksS0FBVCxDQUZkOztBQUlBLGFBQU9DLFlBQVlDLFNBQW5CLEVBQThCO0FBQzVCLFlBQUlDLFlBQVlMLFFBQVFNLGVBQVIsQ0FBd0JKLEtBQXhCLENBQWhCOztBQUVBLFlBQUlHLFNBQUosRUFBZTtBQUNiO0FBQ0Q7O0FBRUQsWUFBSUUsT0FBTyxLQUFLakIsSUFBTCxDQUFVa0IsV0FBVixDQUFzQkwsT0FBdEIsRUFBK0JILE9BQS9CLEVBQXdDLEtBQUtILEtBQTdDLENBQVg7O0FBRUFJLGNBQU1RLElBQU4sQ0FBV0YsSUFBWDs7QUFFQUosa0JBQVVMLFNBQVMsRUFBRUksS0FBWCxDQUFWO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7cUNBRXVCUyxPLEVBQVM7QUFBRSxhQUFPakIsTUFBTWtCLFdBQU4sQ0FBa0JELE9BQWxCLENBQVA7QUFBb0M7OztxREFFL0JBLE8sRUFBUztBQUMvQyxVQUFJRSx3QkFBd0JDLE9BQU9DLElBQVAsQ0FBWW5CLGlCQUFpQm9CLEtBQTdCLENBQTVCO0FBQUEsVUFDSUMsZUFBZU4sUUFBUU8sR0FBUixDQUFZLFVBQVNDLFlBQVQsRUFBdUI7QUFDaEQsWUFBSUMsT0FBTzNCLEtBQUs0QixvQkFBTCxDQUEwQkYsWUFBMUIsQ0FBWDtBQUFBLFlBQ0lHLGNBQWNGLElBRGxCLENBRGdELENBRXZCOztBQUV6QixlQUFPRSxXQUFQO0FBQ0QsT0FMYyxDQURuQjs7QUFRQVQsOEJBQXdCQSxzQkFBc0JVLE1BQXRCLENBQTZCTixZQUE3QixDQUF4QixDQVQrQyxDQVNxQjs7QUFFcEUsYUFBT0oscUJBQVA7QUFDRDs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUI1QixXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4ID0gMCwgY29udGV4dCA9IG5ldyBDb250ZXh0KCkpIHtcclxuICAgIHZhciBsaW5lcyA9IFtdLFxyXG4gICAgICAgIGluZGV4ID0gZmlyc3RMaW5lSW5kZXgsXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRzW2luZGV4XTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhciB0ZXJtaW5hdGUgPSBjb250ZXh0LnNob3VsZFRlcm1pbmF0ZShpbmRleCk7XHJcblxyXG4gICAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHRoaXMucnVsZXMpO1xyXG5cclxuICAgICAgbGluZXMucHVzaChsaW5lKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50c1srK2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcnVsZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7IHJldHVybiBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTsgfVxyXG5cclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IE9iamVjdC5rZXlzKFNpZ25pZmljYW50VG9rZW4udHlwZXMpLFxyXG4gICAgICAgIGdyYW1tYXJUeXBlcyA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGdyYW1tYXJFbnRyeSkge1xyXG4gICAgICAgICAgdmFyIHR5cGUgPSB1dGlsLnR5cGVGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSksXHJcbiAgICAgICAgICAgICAgZ3JhbW1hclR5cGUgPSB0eXBlOyAgLy8vXHJcblxyXG4gICAgICAgICAgcmV0dXJuIGdyYW1tYXJUeXBlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5jb25jYXQoZ3JhbW1hclR5cGVzKTsgLy8vXHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==