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

        var line = this.Line.fromContentRulesAndConfiguration(content, this.rules, configuration);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbmZpZ3VyYXRpb24iLCJDb21tb25MZXhlciIsInJ1bGVzIiwiTGluZSIsImNvbnRlbnQiLCJmaXJzdExpbmVJbmRleCIsIm1pbmltdW1MaW5lc0xlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImZvbGxvd2luZ0xpbmVJbkNvbW1lbnQiLCJjb25maWd1cmF0aW9uIiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50IiwiYWRkZWRMaW5lcyIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lc0Zyb21Db250ZW50cyIsImluZGV4IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwidGVybWluYXRlIiwic2hvdWxkVGVybWluYXRlIiwibGluZSIsImZyb21Db250ZW50UnVsZXNBbmRDb25maWd1cmF0aW9uIiwicHVzaCIsImVudHJ5IiwiZnJvbUVudHJ5IiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxTQUFSLENBRGQ7QUFBQSxJQUVNRSxnQkFBZ0JGLFFBQVEsaUJBQVIsQ0FGdEI7O0lBSU1HLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQkMsSUFBbkIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtELEtBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OzswQ0FFcUJDLE8sRUFBU0MsYyxFQUFnQkMsa0IsRUFBb0JDLHFCLEVBQXVCQyxzQixFQUF3QjtBQUNoSCxVQUFNQyxnQkFBZ0IsSUFBSVQsYUFBSixDQUFrQk0sa0JBQWxCLEVBQXNDQyxxQkFBdEMsRUFBNkRDLHNCQUE3RCxDQUF0QjtBQUFBLFVBQ01FLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0JQLE9BQXRCLEVBQStCQyxjQUEvQixFQUErQ0ksYUFBL0MsQ0FEZDtBQUFBLFVBRU1HLGFBQWFGLEtBRm5CLENBRGdILENBR3RGOztBQUUxQixhQUFPRSxVQUFQO0FBQ0Q7OztxQ0FFZ0JSLE8sRUFBa0U7QUFBQSxVQUF6REMsY0FBeUQsdUVBQXhDLENBQXdDO0FBQUEsVUFBckNJLGFBQXFDLHVFQUFyQixJQUFJVCxhQUFKLEVBQXFCOztBQUNqRixVQUFNYSxXQUFXVCxRQUFRVSxLQUFSLENBQWMsSUFBZCxDQUFqQjtBQUFBLFVBQ01KLFFBQVEsS0FBS0ssaUJBQUwsQ0FBdUJGLFFBQXZCLEVBQWlDUixjQUFqQyxFQUFpREksYUFBakQsQ0FEZDs7QUFHQSxhQUFPQyxLQUFQO0FBQ0Q7OztzQ0FFaUJHLFEsRUFBVVIsYyxFQUFnQkksYSxFQUFlO0FBQ3pELFVBQU1DLFFBQVEsRUFBZDs7QUFFQSxVQUFJTSxRQUFRWCxjQUFaO0FBQUEsVUFDSUQsVUFBVVMsU0FBU0csS0FBVCxDQURkOztBQUdBLGFBQU9aLFlBQVlhLFNBQW5CLEVBQThCO0FBQzVCLFlBQU1DLFNBQVNGLFFBQVFYLGNBQXZCO0FBQUEsWUFDTWMsWUFBWVYsY0FBY1csZUFBZCxDQUE4QkYsTUFBOUIsQ0FEbEI7O0FBR0EsWUFBSUMsU0FBSixFQUFlO0FBQ2I7QUFDRDs7QUFFRCxZQUFNRSxPQUFPLEtBQUtsQixJQUFMLENBQVVtQixnQ0FBVixDQUEyQ2xCLE9BQTNDLEVBQW9ELEtBQUtGLEtBQXpELEVBQWdFTyxhQUFoRSxDQUFiOztBQUVBQyxjQUFNYSxJQUFOLENBQVdGLElBQVg7O0FBRUFqQixrQkFBVVMsU0FBUyxFQUFFRyxLQUFYLENBQVY7QUFDRDs7QUFFRCxhQUFPTixLQUFQO0FBQ0Q7OztrQ0FFb0JjLEssRUFBTztBQUFFLGFBQU8zQixLQUFLNEIsU0FBTCxDQUFlRCxLQUFmLENBQVA7QUFBK0I7OztxQ0FFckNFLE8sRUFBUztBQUFFLGFBQU8zQixNQUFNNEIsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7Ozs7O0FBR3pFRSxPQUFPQyxPQUFQLEdBQWlCNUIsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgICBDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi9jb25maWd1cmF0aW9uJyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldExpbmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5MaW5lO1xyXG4gIH1cclxuXHJcbiAgYWRkZWRMaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcclxuICAgICAgICAgIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBjb25maWd1cmF0aW9uKSxcclxuICAgICAgICAgIGFkZGVkTGluZXMgPSBsaW5lczsgLy8vXHJcblxyXG4gICAgcmV0dXJuIGFkZGVkTGluZXM7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4ID0gMCwgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCkpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgICAgICBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICBcclxuICAgIGxldCBpbmRleCA9IGZpcnN0TGluZUluZGV4LCAgICBcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gaW5kZXggLSBmaXJzdExpbmVJbmRleCxcclxuICAgICAgICAgICAgdGVybWluYXRlID0gY29uZmlndXJhdGlvbi5zaG91bGRUZXJtaW5hdGUobGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihjb250ZW50LCB0aGlzLnJ1bGVzLCBjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgcnVsZUZyb21FbnRyeShlbnRyeSkgeyByZXR1cm4gUnVsZS5mcm9tRW50cnkoZW50cnkpOyB9XHJcbiAgXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyk7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19