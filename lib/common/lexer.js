'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    Rules = require('./rules'),
    Context = require('./context');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.Line;
    }
  }, {
    key: 'addedLinesFromContent',
    value: function addedLinesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = this.linesFromContent(content, firstLineIndex, context),
          addedLines = lines; ///

      return addedLines;
    }
  }, {
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
    key: 'ruleFromEntry',
    value: function ruleFromEntry(entry) {
      return Rule.fromEntry(entry);
    }
  }, {
    key: 'rulesFromEntries',
    value: function rulesFromEntries(entries) {
      return Rules.fromEntries(entries);
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbnRleHQiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiTGluZSIsImNvbnRlbnQiLCJmaXJzdExpbmVJbmRleCIsIm1pbmltdW1MaW5lc0xlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImZvbGxvd2luZ0xpbmVJbkNvbW1lbnQiLCJjb250ZXh0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50IiwiYWRkZWRMaW5lcyIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lc0Zyb21Db250ZW50cyIsImluZGV4IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwidGVybWluYXRlIiwic2hvdWxkVGVybWluYXRlIiwibGluZSIsImZyb21Db250ZW50IiwicHVzaCIsImVudHJ5IiwiZnJvbUVudHJ5IiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxTQUFSLENBRGQ7QUFBQSxJQUVNRSxVQUFVRixRQUFRLFdBQVIsQ0FGaEI7O0lBSU1HLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQkMsSUFBbkIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtELEtBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OzswQ0FFcUJDLE8sRUFBU0MsYyxFQUFnQkMsa0IsRUFBb0JDLHFCLEVBQXVCQyxzQixFQUF3QjtBQUNoSCxVQUFNQyxVQUFVLElBQUlULE9BQUosQ0FBWU0sa0JBQVosRUFBZ0NDLHFCQUFoQyxFQUF1REMsc0JBQXZELENBQWhCO0FBQUEsVUFDTUUsUUFBUSxLQUFLQyxnQkFBTCxDQUFzQlAsT0FBdEIsRUFBK0JDLGNBQS9CLEVBQStDSSxPQUEvQyxDQURkO0FBQUEsVUFFTUcsYUFBYUYsS0FGbkIsQ0FEZ0gsQ0FHdEY7O0FBRTFCLGFBQU9FLFVBQVA7QUFDRDs7O3FDQUVnQlIsTyxFQUFzRDtBQUFBLFVBQTdDQyxjQUE2Qyx1RUFBNUIsQ0FBNEI7QUFBQSxVQUF6QkksT0FBeUIsdUVBQWYsSUFBSVQsT0FBSixFQUFlOztBQUNyRSxVQUFNYSxXQUFXVCxRQUFRVSxLQUFSLENBQWMsSUFBZCxDQUFqQjtBQUFBLFVBQ01KLFFBQVEsS0FBS0ssaUJBQUwsQ0FBdUJGLFFBQXZCLEVBQWlDUixjQUFqQyxFQUFpREksT0FBakQsQ0FEZDs7QUFHQSxhQUFPQyxLQUFQO0FBQ0Q7OztzQ0FFaUJHLFEsRUFBVVIsYyxFQUFnQkksTyxFQUFTO0FBQ25ELFVBQU1DLFFBQVEsRUFBZDs7QUFFQSxVQUFJTSxRQUFRWCxjQUFaO0FBQUEsVUFDSUQsVUFBVVMsU0FBU0csS0FBVCxDQURkOztBQUdBLGFBQU9aLFlBQVlhLFNBQW5CLEVBQThCO0FBQzVCLFlBQU1DLFNBQVNGLFFBQVFYLGNBQXZCO0FBQUEsWUFDTWMsWUFBWVYsUUFBUVcsZUFBUixDQUF3QkYsTUFBeEIsQ0FEbEI7O0FBR0EsWUFBSUMsU0FBSixFQUFlO0FBQ2I7QUFDRDs7QUFFRCxZQUFNRSxPQUFPLEtBQUtsQixJQUFMLENBQVVtQixXQUFWLENBQXNCbEIsT0FBdEIsRUFBK0JLLE9BQS9CLEVBQXdDLEtBQUtQLEtBQTdDLENBQWI7O0FBRUFRLGNBQU1hLElBQU4sQ0FBV0YsSUFBWDs7QUFFQWpCLGtCQUFVUyxTQUFTLEVBQUVHLEtBQVgsQ0FBVjtBQUNEOztBQUVELGFBQU9OLEtBQVA7QUFDRDs7O2tDQUVvQmMsSyxFQUFPO0FBQUUsYUFBTzNCLEtBQUs0QixTQUFMLENBQWVELEtBQWYsQ0FBUDtBQUErQjs7O3FDQUVyQ0UsTyxFQUFTO0FBQUUsYUFBTzNCLE1BQU00QixXQUFOLENBQWtCRCxPQUFsQixDQUFQO0FBQW9DOzs7Ozs7QUFHekVFLE9BQU9DLE9BQVAsR0FBaUI1QixXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGluZSgpIHtcclxuICAgIHJldHVybiB0aGlzLkxpbmU7XHJcbiAgfVxyXG5cclxuICBhZGRlZExpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQobWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxyXG4gICAgICAgICAgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpLFxyXG4gICAgICAgICAgYWRkZWRMaW5lcyA9IGxpbmVzOyAvLy9cclxuXHJcbiAgICByZXR1cm4gYWRkZWRMaW5lcztcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXggPSAwLCBjb250ZXh0ID0gbmV3IENvbnRleHQoKSkge1xyXG4gICAgY29uc3QgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICAgIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29udGV4dCkge1xyXG4gICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgIFxyXG4gICAgbGV0IGluZGV4ID0gZmlyc3RMaW5lSW5kZXgsICAgIFxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50c1tpbmRleF07XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSBpbmRleCAtIGZpcnN0TGluZUluZGV4LFxyXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSBjb250ZXh0LnNob3VsZFRlcm1pbmF0ZShsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHRoaXMucnVsZXMpO1xyXG5cclxuICAgICAgbGluZXMucHVzaChsaW5lKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50c1srK2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBydWxlRnJvbUVudHJ5KGVudHJ5KSB7IHJldHVybiBSdWxlLmZyb21FbnRyeShlbnRyeSk7IH1cclxuICBcclxuICBzdGF0aWMgcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=