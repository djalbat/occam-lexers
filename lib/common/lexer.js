'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    Rule = require('./rule'),
    Rules = require('./rules'),
    Context = require('./context');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content) {
      var firstLineIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Context();

      var contents = content.split(/\n/),
          lines = this.linesFromContents(contents, firstLineIndex, context);

      return lines;
    }
  }, {
    key: 'linesFromContents',
    value: function linesFromContents(contents, firstLineIndex, context) {
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
    key: 'ruleFromSignificantTokenTypeAndRegularExpressionPattern',
    value: function ruleFromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern) {
      return Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);
    }
  }, {
    key: 'rulesFromGrammar',
    value: function rulesFromGrammar(grammar) {
      return Rules.fromGrammar(grammar);
    }
  }, {
    key: 'significantTokenTypesFromGrammar',
    value: function significantTokenTypesFromGrammar(grammar) {
      return Rules.significantTokenTypesFromGrammar(grammar);
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlIiwiUnVsZXMiLCJDb250ZXh0IiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJmaXJzdExpbmVJbmRleCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsImluZGV4IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwidGVybWluYXRlIiwic2hvdWxkVGVybWluYXRlIiwibGluZSIsImZyb21Db250ZW50IiwicHVzaCIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZ3JhbW1hciIsImZyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLFFBQVIsQ0FEYjtBQUFBLElBRU1FLFFBQVFGLFFBQVEsU0FBUixDQUZkO0FBQUEsSUFHTUcsVUFBVUgsUUFBUSxXQUFSLENBSGhCOztJQUtNSSxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJOLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtNLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtOLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3FDQUVnQk8sTyxFQUFzRDtBQUFBLFVBQTdDQyxjQUE2Qyx1RUFBNUIsQ0FBNEI7QUFBQSxVQUF6QkMsT0FBeUIsdUVBQWYsSUFBSUwsT0FBSixFQUFlOztBQUNyRSxVQUFNTSxXQUFXSCxRQUFRSSxLQUFSLENBQWMsSUFBZCxDQUFqQjtBQUFBLFVBQ01DLFFBQVEsS0FBS0MsaUJBQUwsQ0FBdUJILFFBQXZCLEVBQWlDRixjQUFqQyxFQUFpREMsT0FBakQsQ0FEZDs7QUFHQSxhQUFPRyxLQUFQO0FBQ0Q7OztzQ0FFaUJGLFEsRUFBVUYsYyxFQUFnQkMsTyxFQUFTO0FBQ25ELFVBQU1HLFFBQVEsRUFBZDs7QUFFQSxVQUFJRSxRQUFRTixjQUFaO0FBQUEsVUFDSUQsVUFBVUcsU0FBU0ksS0FBVCxDQURkOztBQUdBLGFBQU9QLFlBQVlRLFNBQW5CLEVBQThCO0FBQzVCLFlBQU1DLFNBQVNGLFFBQVFOLGNBQXZCO0FBQUEsWUFDTVMsWUFBWVIsUUFBUVMsZUFBUixDQUF3QkYsTUFBeEIsQ0FEbEI7O0FBR0EsWUFBSUMsU0FBSixFQUFlO0FBQ2I7QUFDRDs7QUFFRCxZQUFNRSxPQUFPLEtBQUtuQixJQUFMLENBQVVvQixXQUFWLENBQXNCYixPQUF0QixFQUErQkUsT0FBL0IsRUFBd0MsS0FBS0gsS0FBN0MsQ0FBYjs7QUFFQU0sY0FBTVMsSUFBTixDQUFXRixJQUFYOztBQUVBWixrQkFBVUcsU0FBUyxFQUFFSSxLQUFYLENBQVY7QUFDRDs7QUFFRCxhQUFPRixLQUFQO0FBQ0Q7Ozs0RUFFOERVLG9CLEVBQXNCQyx3QixFQUEwQjtBQUFFLGFBQU9yQixLQUFLc0IsbURBQUwsQ0FBeURGLG9CQUF6RCxFQUErRUMsd0JBQS9FLENBQVA7QUFBa0g7OztxQ0FFM01FLE8sRUFBUztBQUFFLGFBQU90QixNQUFNdUIsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7O3FEQUUvQkEsTyxFQUFTO0FBQUUsYUFBT3RCLE1BQU13QixnQ0FBTixDQUF1Q0YsT0FBdkMsQ0FBUDtBQUF5RDs7Ozs7O0FBRzlHRyxPQUFPQyxPQUFQLEdBQWlCeEIsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXggPSAwLCBjb250ZXh0ID0gbmV3IENvbnRleHQoKSkge1xyXG4gICAgY29uc3QgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICAgIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29udGV4dCkge1xyXG4gICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgIFxyXG4gICAgbGV0IGluZGV4ID0gZmlyc3RMaW5lSW5kZXgsICAgIFxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50c1tpbmRleF07XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSBpbmRleCAtIGZpcnN0TGluZUluZGV4LFxyXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSBjb250ZXh0LnNob3VsZFRlcm1pbmF0ZShsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHRoaXMucnVsZXMpO1xyXG5cclxuICAgICAgbGluZXMucHVzaChsaW5lKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50c1srK2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBydWxlRnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHsgcmV0dXJuIFJ1bGUuZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pOyB9XHJcblxyXG4gIHN0YXRpYyBydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7IHJldHVybiBSdWxlcy5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=