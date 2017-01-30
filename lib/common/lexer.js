'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    util = require('../util'),
    Rules = require('./rules'),
    SignificantToken = require('./token/significant');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      var contents = content.split(/\n/),
          lines = this.linesFromContents(contents, context);

      return lines;
    }
  }, {
    key: 'linesFromContents',
    value: function linesFromContents(contents, context) {
      var lines = contents.map(function (content, index) {
        var number = index + 1,
            line = this.Line.fromContentAndNumber(content, number, context, this.rules);

        return line;
      }.bind(this));

      return lines;
    }
  }, {
    key: 'tokensFromContent',
    value: function tokensFromContent(content) {
      var lines = this.linesFromContent(content),
          tokens = tokensFromLines(lines);

      return tokens;
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

function tokensFromLines(lines) {
  var tokens = lines.reduce(function (tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJTaWduaWZpY2FudFRva2VuIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJjb250ZXh0IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudHMiLCJtYXAiLCJpbmRleCIsIm51bWJlciIsImxpbmUiLCJmcm9tQ29udGVudEFuZE51bWJlciIsImJpbmQiLCJsaW5lc0Zyb21Db250ZW50IiwidG9rZW5zIiwidG9rZW5zRnJvbUxpbmVzIiwiZ3JhbW1hciIsImZyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiT2JqZWN0Iiwia2V5cyIsInR5cGVzIiwiZ3JhbW1hclR5cGVzIiwiZ3JhbW1hckVudHJ5IiwidHlwZSIsInR5cGVGcm9tR3JhbW1hckVudHJ5IiwiZ3JhbW1hclR5cGUiLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwibGluZVRva2VucyIsImdldFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7QUFBQSxJQUVJRSxRQUFRRixRQUFRLFNBQVIsQ0FGWjtBQUFBLElBR0lHLG1CQUFtQkgsUUFBUSxxQkFBUixDQUh2Qjs7SUFLTUksVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CTixJQUFuQixFQUF5QjtBQUFBOztBQUN2QixTQUFLTSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLTixJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztxQ0FFZ0JPLE8sRUFBU0MsTyxFQUFTO0FBQ2pDLFVBQUlDLFdBQVdGLFFBQVFHLEtBQVIsQ0FBYyxJQUFkLENBQWY7QUFBQSxVQUNJQyxRQUFRLEtBQUtDLGlCQUFMLENBQXVCSCxRQUF2QixFQUFpQ0QsT0FBakMsQ0FEWjs7QUFHQSxhQUFPRyxLQUFQO0FBQ0Q7OztzQ0FFaUJGLFEsRUFBVUQsTyxFQUFTO0FBQ25DLFVBQUlHLFFBQVFGLFNBQVNJLEdBQVQsQ0FBYSxVQUFTTixPQUFULEVBQWtCTyxLQUFsQixFQUF5QjtBQUM1QyxZQUFJQyxTQUFTRCxRQUFRLENBQXJCO0FBQUEsWUFDSUUsT0FBTyxLQUFLaEIsSUFBTCxDQUFVaUIsb0JBQVYsQ0FBK0JWLE9BQS9CLEVBQXdDUSxNQUF4QyxFQUFnRFAsT0FBaEQsRUFBeUQsS0FBS0YsS0FBOUQsQ0FEWDs7QUFHQSxlQUFPVSxJQUFQO0FBQ0QsT0FMb0IsQ0FLbkJFLElBTG1CLENBS2QsSUFMYyxDQUFiLENBQVo7O0FBT0EsYUFBT1AsS0FBUDtBQUNEOzs7c0NBRWlCSixPLEVBQVM7QUFDekIsVUFBSUksUUFBUSxLQUFLUSxnQkFBTCxDQUFzQlosT0FBdEIsQ0FBWjtBQUFBLFVBQ0lhLFNBQVNDLGdCQUFnQlYsS0FBaEIsQ0FEYjs7QUFHQSxhQUFPUyxNQUFQO0FBQ0Q7OztxQ0FFdUJFLE8sRUFBUztBQUFFLGFBQU9uQixNQUFNb0IsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7O3FEQUUvQkEsTyxFQUFTO0FBQy9DLFVBQUlFLHdCQUF3QkMsT0FBT0MsSUFBUCxDQUFZdEIsaUJBQWlCdUIsS0FBN0IsQ0FBNUI7QUFBQSxVQUNJQyxlQUFlTixRQUFRVCxHQUFSLENBQVksVUFBU2dCLFlBQVQsRUFBdUI7QUFDaEQsWUFBSUMsT0FBTzVCLEtBQUs2QixvQkFBTCxDQUEwQkYsWUFBMUIsQ0FBWDtBQUFBLFlBQ0lHLGNBQWNGLElBRGxCLENBRGdELENBRXZCOztBQUV6QixlQUFPRSxXQUFQO0FBQ0QsT0FMYyxDQURuQjs7QUFRQVIsOEJBQXdCQSxzQkFBc0JTLE1BQXRCLENBQTZCTCxZQUE3QixDQUF4QixDQVQrQyxDQVNxQjs7QUFFcEUsYUFBT0oscUJBQVA7QUFDRDs7Ozs7O0FBR0hVLE9BQU9DLE9BQVAsR0FBaUI5QixXQUFqQjs7QUFFQSxTQUFTZ0IsZUFBVCxDQUF5QlYsS0FBekIsRUFBZ0M7QUFDOUIsTUFBSVMsU0FBU1QsTUFBTXlCLE1BQU4sQ0FBYSxVQUFTaEIsTUFBVCxFQUFpQkosSUFBakIsRUFBdUI7QUFDL0MsUUFBSXFCLGFBQWFyQixLQUFLc0IsU0FBTCxFQUFqQjs7QUFFQWxCLGFBQVNBLE9BQU9hLE1BQVAsQ0FBY0ksVUFBZCxDQUFUOztBQUVBLFdBQU9qQixNQUFQO0FBQ0QsR0FOWSxFQU1WLEVBTlUsQ0FBYjs7QUFRQSxTQUFPQSxNQUFQO0FBQ0QiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgICAgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBjb250ZXh0KTtcclxuICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCwgaW5kZXgpIHtcclxuICAgICAgICAgIHZhciBudW1iZXIgPSBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudEFuZE51bWJlcihjb250ZW50LCBudW1iZXIsIGNvbnRleHQsIHRoaXMucnVsZXMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuICBcclxuICB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XHJcbiAgICB2YXIgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VuczsgICAgXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcnVsZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7IHJldHVybiBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTsgfVxyXG5cclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IE9iamVjdC5rZXlzKFNpZ25pZmljYW50VG9rZW4udHlwZXMpLFxyXG4gICAgICAgIGdyYW1tYXJUeXBlcyA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGdyYW1tYXJFbnRyeSkge1xyXG4gICAgICAgICAgdmFyIHR5cGUgPSB1dGlsLnR5cGVGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSksXHJcbiAgICAgICAgICAgICAgZ3JhbW1hclR5cGUgPSB0eXBlOyAgLy8vXHJcblxyXG4gICAgICAgICAgcmV0dXJuIGdyYW1tYXJUeXBlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5jb25jYXQoZ3JhbW1hclR5cGVzKTsgLy8vXHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcblxyXG5mdW5jdGlvbiB0b2tlbnNGcm9tTGluZXMobGluZXMpIHtcclxuICB2YXIgdG9rZW5zID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgbGluZSkge1xyXG4gICAgdmFyIGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xyXG5cclxuICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiB0b2tlbnM7XHJcbn1cclxuIl19