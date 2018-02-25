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

      var contents = content.split(/\n/);

      var contentsLength = contents.length,
          lastIndex = contentsLength - 1;

      contents = contents.map(function (content, index) {
        if (index !== lastIndex) {
          content = content + '\n';
        }

        return content;
      });

      var lines = this.linesFromContents(contents, firstLineIndex, configuration);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbmZpZ3VyYXRpb24iLCJDb21tb25MZXhlciIsInJ1bGVzIiwiTGluZSIsImNvbnRlbnQiLCJmaXJzdExpbmVJbmRleCIsIm1pbmltdW1MaW5lc0xlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImZvbGxvd2luZ0xpbmVJbkNvbW1lbnQiLCJjb25maWd1cmF0aW9uIiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50IiwiYWRkZWRMaW5lcyIsImNvbnRlbnRzIiwic3BsaXQiLCJjb250ZW50c0xlbmd0aCIsImxlbmd0aCIsImxhc3RJbmRleCIsIm1hcCIsImluZGV4IiwibGluZXNGcm9tQ29udGVudHMiLCJ1bmRlZmluZWQiLCJ0ZXJtaW5hdGUiLCJzaG91bGRUZXJtaW5hdGUiLCJsaW5lIiwiZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24iLCJwdXNoIiwiZW50cnkiLCJmcm9tRW50cnkiLCJlbnRyaWVzIiwiZnJvbUVudHJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLFNBQVIsQ0FEZDtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSxpQkFBUixDQUZ0Qjs7SUFJTUcsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CQyxJQUFuQixFQUF5QjtBQUFBOztBQUN2QixTQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0QsS0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzBDQUVxQkMsTyxFQUFTQyxjLEVBQWdCQyxrQixFQUFvQkMscUIsRUFBdUJDLHNCLEVBQXdCO0FBQ2hILFVBQU1DLGdCQUFnQixJQUFJVCxhQUFKLENBQWtCTSxrQkFBbEIsRUFBc0NDLHFCQUF0QyxFQUE2REMsc0JBQTdELENBQXRCO0FBQUEsVUFDTUUsUUFBUSxLQUFLQyxnQkFBTCxDQUFzQlAsT0FBdEIsRUFBK0JDLGNBQS9CLEVBQStDSSxhQUEvQyxDQURkO0FBQUEsVUFFTUcsYUFBYUYsS0FGbkIsQ0FEZ0gsQ0FHdEY7O0FBRTFCLGFBQU9FLFVBQVA7QUFDRDs7O3FDQUVnQlIsTyxFQUFrRTtBQUFBLFVBQXpEQyxjQUF5RCx1RUFBeEMsQ0FBd0M7QUFBQSxVQUFyQ0ksYUFBcUMsdUVBQXJCLElBQUlULGFBQUosRUFBcUI7O0FBQ2pGLFVBQUlhLFdBQVdULFFBQVFVLEtBQVIsQ0FBYyxJQUFkLENBQWY7O0FBRUEsVUFBTUMsaUJBQWlCRixTQUFTRyxNQUFoQztBQUFBLFVBQ01DLFlBQVlGLGlCQUFpQixDQURuQzs7QUFHQUYsaUJBQVdBLFNBQVNLLEdBQVQsQ0FBYSxVQUFTZCxPQUFULEVBQWtCZSxLQUFsQixFQUF5QjtBQUMvQyxZQUFJQSxVQUFVRixTQUFkLEVBQXlCO0FBQ3ZCYixvQkFBYUEsT0FBYjtBQUNEOztBQUVELGVBQU9BLE9BQVA7QUFDRCxPQU5VLENBQVg7O0FBUUEsVUFBTU0sUUFBUSxLQUFLVSxpQkFBTCxDQUF1QlAsUUFBdkIsRUFBaUNSLGNBQWpDLEVBQWlESSxhQUFqRCxDQUFkOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7O3NDQUVpQkcsUSxFQUFVUixjLEVBQWdCSSxhLEVBQWU7QUFDekQsVUFBTUMsUUFBUSxFQUFkOztBQUVBLFVBQUlTLFFBQVFkLGNBQVo7QUFBQSxVQUNJRCxVQUFVUyxTQUFTTSxLQUFULENBRGQ7O0FBR0EsYUFBT2YsWUFBWWlCLFNBQW5CLEVBQThCO0FBQzVCLFlBQU1MLFNBQVNHLFFBQVFkLGNBQXZCO0FBQUEsWUFDTWlCLFlBQVliLGNBQWNjLGVBQWQsQ0FBOEJQLE1BQTlCLENBRGxCOztBQUdBLFlBQUlNLFNBQUosRUFBZTtBQUNiO0FBQ0Q7O0FBRUQsWUFBTUUsT0FBTyxLQUFLckIsSUFBTCxDQUFVc0IsZ0NBQVYsQ0FBMkNyQixPQUEzQyxFQUFvRCxLQUFLRixLQUF6RCxFQUFnRU8sYUFBaEUsQ0FBYjs7QUFFQUMsY0FBTWdCLElBQU4sQ0FBV0YsSUFBWDs7QUFFQXBCLGtCQUFVUyxTQUFTLEVBQUVNLEtBQVgsQ0FBVjtBQUNEOztBQUVELGFBQU9ULEtBQVA7QUFDRDs7O2tDQUVvQmlCLEssRUFBTztBQUFFLGFBQU85QixLQUFLK0IsU0FBTCxDQUFlRCxLQUFmLENBQVA7QUFBK0I7OztxQ0FFckNFLE8sRUFBUztBQUFFLGFBQU85QixNQUFNK0IsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7Ozs7O0FBR3pFRSxPQUFPQyxPQUFQLEdBQWlCL0IsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgICBDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi9jb25maWd1cmF0aW9uJyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldExpbmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5MaW5lO1xyXG4gIH1cclxuXHJcbiAgYWRkZWRMaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcclxuICAgICAgICAgIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBjb25maWd1cmF0aW9uKSxcclxuICAgICAgICAgIGFkZGVkTGluZXMgPSBsaW5lczsgLy8vXHJcblxyXG4gICAgcmV0dXJuIGFkZGVkTGluZXM7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4ID0gMCwgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCkpIHtcclxuICAgIGxldCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRzTGVuZ3RoID0gY29udGVudHMubGVuZ3RoLFxyXG4gICAgICAgICAgbGFzdEluZGV4ID0gY29udGVudHNMZW5ndGggLSAxO1xyXG5cclxuICAgIGNvbnRlbnRzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQsIGluZGV4KSB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gbGFzdEluZGV4KSB7XHJcbiAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9XFxuYDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICBcclxuICAgIGxldCBpbmRleCA9IGZpcnN0TGluZUluZGV4LCAgICBcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gaW5kZXggLSBmaXJzdExpbmVJbmRleCxcclxuICAgICAgICAgICAgdGVybWluYXRlID0gY29uZmlndXJhdGlvbi5zaG91bGRUZXJtaW5hdGUobGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihjb250ZW50LCB0aGlzLnJ1bGVzLCBjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgcnVsZUZyb21FbnRyeShlbnRyeSkgeyByZXR1cm4gUnVsZS5mcm9tRW50cnkoZW50cnkpOyB9XHJcbiAgXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyk7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19