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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlIiwiUnVsZXMiLCJDb250ZXh0IiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJmaXJzdExpbmVJbmRleCIsIm1pbmltdW1MaW5lc0xlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImZvbGxvd2luZ0xpbmVJbkNvbW1lbnQiLCJjb250ZXh0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50IiwiYWRkZWRMaW5lcyIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lc0Zyb21Db250ZW50cyIsImluZGV4IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwidGVybWluYXRlIiwic2hvdWxkVGVybWluYXRlIiwibGluZSIsImZyb21Db250ZW50IiwicHVzaCIsImVudHJ5IiwiZnJvbUVudHJ5IiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxRQUFSLENBRGI7QUFBQSxJQUVNRSxRQUFRRixRQUFRLFNBQVIsQ0FGZDtBQUFBLElBR01HLFVBQVVILFFBQVEsV0FBUixDQUhoQjs7SUFLTUksVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CTixJQUFuQixFQUF5QjtBQUFBOztBQUN2QixTQUFLTSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLTixJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzswQ0FFcUJPLE8sRUFBU0MsYyxFQUFnQkMsa0IsRUFBb0JDLHFCLEVBQXVCQyxzQixFQUF3QjtBQUNoSCxVQUFNQyxVQUFVLElBQUlSLE9BQUosQ0FBWUssa0JBQVosRUFBZ0NDLHFCQUFoQyxFQUF1REMsc0JBQXZELENBQWhCO0FBQUEsVUFDTUUsUUFBUSxLQUFLQyxnQkFBTCxDQUFzQlAsT0FBdEIsRUFBK0JDLGNBQS9CLEVBQStDSSxPQUEvQyxDQURkO0FBQUEsVUFFTUcsYUFBYUYsS0FGbkIsQ0FEZ0gsQ0FHdEY7O0FBRTFCLGFBQU9FLFVBQVA7QUFDRDs7O3FDQUVnQlIsTyxFQUFzRDtBQUFBLFVBQTdDQyxjQUE2Qyx1RUFBNUIsQ0FBNEI7QUFBQSxVQUF6QkksT0FBeUIsdUVBQWYsSUFBSVIsT0FBSixFQUFlOztBQUNyRSxVQUFNWSxXQUFXVCxRQUFRVSxLQUFSLENBQWMsSUFBZCxDQUFqQjtBQUFBLFVBQ01KLFFBQVEsS0FBS0ssaUJBQUwsQ0FBdUJGLFFBQXZCLEVBQWlDUixjQUFqQyxFQUFpREksT0FBakQsQ0FEZDs7QUFHQSxhQUFPQyxLQUFQO0FBQ0Q7OztzQ0FFaUJHLFEsRUFBVVIsYyxFQUFnQkksTyxFQUFTO0FBQ25ELFVBQU1DLFFBQVEsRUFBZDs7QUFFQSxVQUFJTSxRQUFRWCxjQUFaO0FBQUEsVUFDSUQsVUFBVVMsU0FBU0csS0FBVCxDQURkOztBQUdBLGFBQU9aLFlBQVlhLFNBQW5CLEVBQThCO0FBQzVCLFlBQU1DLFNBQVNGLFFBQVFYLGNBQXZCO0FBQUEsWUFDTWMsWUFBWVYsUUFBUVcsZUFBUixDQUF3QkYsTUFBeEIsQ0FEbEI7O0FBR0EsWUFBSUMsU0FBSixFQUFlO0FBQ2I7QUFDRDs7QUFFRCxZQUFNRSxPQUFPLEtBQUt4QixJQUFMLENBQVV5QixXQUFWLENBQXNCbEIsT0FBdEIsRUFBK0JLLE9BQS9CLEVBQXdDLEtBQUtOLEtBQTdDLENBQWI7O0FBRUFPLGNBQU1hLElBQU4sQ0FBV0YsSUFBWDs7QUFFQWpCLGtCQUFVUyxTQUFTLEVBQUVHLEtBQVgsQ0FBVjtBQUNEOztBQUVELGFBQU9OLEtBQVA7QUFDRDs7O2tDQUVvQmMsSyxFQUFPO0FBQUUsYUFBT3pCLEtBQUswQixTQUFMLENBQWVELEtBQWYsQ0FBUDtBQUErQjs7O3FDQUVyQ0UsTyxFQUFTO0FBQUUsYUFBTzFCLE1BQU0yQixXQUFOLENBQWtCRCxPQUFsQixDQUFQO0FBQW9DOzs7Ozs7QUFHekVFLE9BQU9DLE9BQVAsR0FBaUIzQixXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgYWRkZWRMaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcclxuICAgICAgICAgIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KSxcclxuICAgICAgICAgIGFkZGVkTGluZXMgPSBsaW5lczsgLy8vXHJcblxyXG4gICAgcmV0dXJuIGFkZGVkTGluZXM7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4ID0gMCwgY29udGV4dCA9IG5ldyBDb250ZXh0KCkpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgICAgICBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICBcclxuICAgIGxldCBpbmRleCA9IGZpcnN0TGluZUluZGV4LCAgICBcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gaW5kZXggLSBmaXJzdExpbmVJbmRleCxcclxuICAgICAgICAgICAgdGVybWluYXRlID0gY29udGV4dC5zaG91bGRUZXJtaW5hdGUobGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgcnVsZUZyb21FbnRyeShlbnRyeSkgeyByZXR1cm4gUnVsZS5mcm9tRW50cnkoZW50cnkpOyB9XHJcbiAgXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyk7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19