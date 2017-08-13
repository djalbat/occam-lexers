'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    Rules = require('./rules'),
    Configuration = require('./configuration');

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
      var configuration = new Configuration(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = this.linesFromContent(content, firstLineIndex, configuration),
          addedLines = lines; ///

      return addedLines;
    }
  }, {
    key: 'linesFromContent',
    value: function linesFromContent(content) {
      var firstLineIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var configuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Configuration();

      var contents = content.split(/\n/),
          lines = this.linesFromContents(contents, firstLineIndex, configuration);

      return lines;
    }
  }, {
    key: 'linesFromContents',
    value: function linesFromContents(contents, firstLineIndex, configuration) {
      var lines = [];

      var index = firstLineIndex,
          content = contents[index];

      while (content !== undefined) {
        var length = index - firstLineIndex,
            terminate = configuration.shouldTerminate(length);

        if (terminate) {
          break;
        }

        var line = this.Line.fromContent(content, this.rules, configuration);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbmZpZ3VyYXRpb24iLCJDb21tb25MZXhlciIsInJ1bGVzIiwiTGluZSIsImNvbnRlbnQiLCJmaXJzdExpbmVJbmRleCIsIm1pbmltdW1MaW5lc0xlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImZvbGxvd2luZ0xpbmVJbkNvbW1lbnQiLCJjb25maWd1cmF0aW9uIiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50IiwiYWRkZWRMaW5lcyIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lc0Zyb21Db250ZW50cyIsImluZGV4IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwidGVybWluYXRlIiwic2hvdWxkVGVybWluYXRlIiwibGluZSIsImZyb21Db250ZW50IiwicHVzaCIsImVudHJ5IiwiZnJvbUVudHJ5IiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxTQUFSLENBRGQ7QUFBQSxJQUVNRSxnQkFBZ0JGLFFBQVEsaUJBQVIsQ0FGdEI7O0lBSU1HLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQkMsSUFBbkIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtELEtBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OzswQ0FFcUJDLE8sRUFBU0MsYyxFQUFnQkMsa0IsRUFBb0JDLHFCLEVBQXVCQyxzQixFQUF3QjtBQUNoSCxVQUFNQyxnQkFBZ0IsSUFBSVQsYUFBSixDQUFrQk0sa0JBQWxCLEVBQXNDQyxxQkFBdEMsRUFBNkRDLHNCQUE3RCxDQUF0QjtBQUFBLFVBQ01FLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0JQLE9BQXRCLEVBQStCQyxjQUEvQixFQUErQ0ksYUFBL0MsQ0FEZDtBQUFBLFVBRU1HLGFBQWFGLEtBRm5CLENBRGdILENBR3RGOztBQUUxQixhQUFPRSxVQUFQO0FBQ0Q7OztxQ0FFZ0JSLE8sRUFBa0U7QUFBQSxVQUF6REMsY0FBeUQsdUVBQXhDLENBQXdDO0FBQUEsVUFBckNJLGFBQXFDLHVFQUFyQixJQUFJVCxhQUFKLEVBQXFCOztBQUNqRixVQUFNYSxXQUFXVCxRQUFRVSxLQUFSLENBQWMsSUFBZCxDQUFqQjtBQUFBLFVBQ01KLFFBQVEsS0FBS0ssaUJBQUwsQ0FBdUJGLFFBQXZCLEVBQWlDUixjQUFqQyxFQUFpREksYUFBakQsQ0FEZDs7QUFHQSxhQUFPQyxLQUFQO0FBQ0Q7OztzQ0FFaUJHLFEsRUFBVVIsYyxFQUFnQkksYSxFQUFlO0FBQ3pELFVBQU1DLFFBQVEsRUFBZDs7QUFFQSxVQUFJTSxRQUFRWCxjQUFaO0FBQUEsVUFDSUQsVUFBVVMsU0FBU0csS0FBVCxDQURkOztBQUdBLGFBQU9aLFlBQVlhLFNBQW5CLEVBQThCO0FBQzVCLFlBQU1DLFNBQVNGLFFBQVFYLGNBQXZCO0FBQUEsWUFDTWMsWUFBWVYsY0FBY1csZUFBZCxDQUE4QkYsTUFBOUIsQ0FEbEI7O0FBR0EsWUFBSUMsU0FBSixFQUFlO0FBQ2I7QUFDRDs7QUFFRCxZQUFNRSxPQUFPLEtBQUtsQixJQUFMLENBQVVtQixXQUFWLENBQXNCbEIsT0FBdEIsRUFBK0IsS0FBS0YsS0FBcEMsRUFBMkNPLGFBQTNDLENBQWI7O0FBRUFDLGNBQU1hLElBQU4sQ0FBV0YsSUFBWDs7QUFFQWpCLGtCQUFVUyxTQUFTLEVBQUVHLEtBQVgsQ0FBVjtBQUNEOztBQUVELGFBQU9OLEtBQVA7QUFDRDs7O2tDQUVvQmMsSyxFQUFPO0FBQUUsYUFBTzNCLEtBQUs0QixTQUFMLENBQWVELEtBQWYsQ0FBUDtBQUErQjs7O3FDQUVyQ0UsTyxFQUFTO0FBQUUsYUFBTzNCLE1BQU00QixXQUFOLENBQWtCRCxPQUFsQixDQUFQO0FBQW9DOzs7Ozs7QUFHekVFLE9BQU9DLE9BQVAsR0FBaUI1QixXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL2NvbmZpZ3VyYXRpb24nKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGluZSgpIHtcclxuICAgIHJldHVybiB0aGlzLkxpbmU7XHJcbiAgfVxyXG5cclxuICBhZGRlZExpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24obWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxyXG4gICAgICAgICAgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIGNvbmZpZ3VyYXRpb24pLFxyXG4gICAgICAgICAgYWRkZWRMaW5lcyA9IGxpbmVzOyAvLy9cclxuXHJcbiAgICByZXR1cm4gYWRkZWRMaW5lcztcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXggPSAwLCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKSkge1xyXG4gICAgY29uc3QgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICAgIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29uZmlndXJhdGlvbikge1xyXG4gICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgIFxyXG4gICAgbGV0IGluZGV4ID0gZmlyc3RMaW5lSW5kZXgsICAgIFxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50c1tpbmRleF07XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSBpbmRleCAtIGZpcnN0TGluZUluZGV4LFxyXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSBjb25maWd1cmF0aW9uLnNob3VsZFRlcm1pbmF0ZShsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIHRoaXMucnVsZXMsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgICAgbGluZXMucHVzaChsaW5lKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50c1srK2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBydWxlRnJvbUVudHJ5KGVudHJ5KSB7IHJldHVybiBSdWxlLmZyb21FbnRyeShlbnRyeSk7IH1cclxuICBcclxuICBzdGF0aWMgcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=