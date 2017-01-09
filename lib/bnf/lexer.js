'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line');

var BNFLexer = function () {
  function BNFLexer() {
    _classCallCheck(this, BNFLexer);
  }

  _createClass(BNFLexer, null, [{
    key: 'linesFromGrammar',
    value: function linesFromGrammar(grammar) {
      var contents = contentsFromGrammar(grammar),
          lines = contents.map(function (content) {
        var line = Line.fromContent(content);

        return line;
      });

      return lines;
    }
  }]);

  return BNFLexer;
}();

module.exports = BNFLexer;

function contentsFromGrammar(grammar) {
  var contents = grammar.split('\n').reduce(function (contents, content) {
    var matches;

    matches = content.match(Line.nameExpressionRegExp);

    if (matches !== null) {
      contents.push(content);

      return contents;
    }

    matches = content.match(Line.continuedExpressionRegExp);

    if (matches !== null) {
      var previousContent = contents.pop(),
          firstMatch = first(matches),
          continuedExpression = firstMatch,
          ///
      continuingContent = ' ' + continuedExpression;

      content = previousContent + continuingContent;

      contents.push(content);

      return contents;
    }

    return contents;
  }, []);

  return contents;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJCTkZMZXhlciIsImdyYW1tYXIiLCJjb250ZW50cyIsImNvbnRlbnRzRnJvbUdyYW1tYXIiLCJsaW5lcyIsIm1hcCIsImNvbnRlbnQiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwic3BsaXQiLCJyZWR1Y2UiLCJtYXRjaGVzIiwibWF0Y2giLCJuYW1lRXhwcmVzc2lvblJlZ0V4cCIsInB1c2giLCJjb250aW51ZWRFeHByZXNzaW9uUmVnRXhwIiwicHJldmlvdXNDb250ZW50IiwicG9wIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiY29udGludWVkRXhwcmVzc2lvbiIsImNvbnRpbnVpbmdDb250ZW50IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDs7SUFFTUMsUTs7Ozs7OztxQ0FDb0JDLE8sRUFBUztBQUMvQixVQUFJQyxXQUFXQyxvQkFBb0JGLE9BQXBCLENBQWY7QUFBQSxVQUNJRyxRQUFRRixTQUFTRyxHQUFULENBQWEsVUFBU0MsT0FBVCxFQUFrQjtBQUN6QyxZQUFJQyxPQUFPVCxLQUFLVSxXQUFMLENBQWlCRixPQUFqQixDQUFYOztBQUVBLGVBQU9DLElBQVA7QUFDRCxPQUpXLENBRFo7O0FBT0EsYUFBT0gsS0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQlYsUUFBakI7O0FBRUEsU0FBU0csbUJBQVQsQ0FBNkJGLE9BQTdCLEVBQXNDO0FBQ3BDLE1BQUlDLFdBQVdELFFBQVFVLEtBQVIsQ0FBYyxJQUFkLEVBQW9CQyxNQUFwQixDQUEyQixVQUFVVixRQUFWLEVBQW9CSSxPQUFwQixFQUE2QjtBQUNyRSxRQUFJTyxPQUFKOztBQUVBQSxjQUFVUCxRQUFRUSxLQUFSLENBQWNoQixLQUFLaUIsb0JBQW5CLENBQVY7O0FBRUEsUUFBSUYsWUFBWSxJQUFoQixFQUFzQjtBQUNwQlgsZUFBU2MsSUFBVCxDQUFjVixPQUFkOztBQUVBLGFBQU9KLFFBQVA7QUFDRDs7QUFFRFcsY0FBVVAsUUFBUVEsS0FBUixDQUFjaEIsS0FBS21CLHlCQUFuQixDQUFWOztBQUVBLFFBQUlKLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsVUFBSUssa0JBQWtCaEIsU0FBU2lCLEdBQVQsRUFBdEI7QUFBQSxVQUNJQyxhQUFhQyxNQUFNUixPQUFOLENBRGpCO0FBQUEsVUFFSVMsc0JBQXNCRixVQUYxQjtBQUFBLFVBRXNDO0FBQ2xDRywwQkFBb0IsTUFBTUQsbUJBSDlCOztBQUtBaEIsZ0JBQVVZLGtCQUFrQkssaUJBQTVCOztBQUVBckIsZUFBU2MsSUFBVCxDQUFjVixPQUFkOztBQUVBLGFBQU9KLFFBQVA7QUFDRDs7QUFFRCxXQUFPQSxRQUFQO0FBQ0QsR0EzQmMsRUEyQlosRUEzQlksQ0FBZjs7QUE2QkEsU0FBT0EsUUFBUDtBQUNEOztBQUVELFNBQVNtQixLQUFULENBQWVHLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKTtcblxuY2xhc3MgQk5GTGV4ZXIge1xuICBzdGF0aWMgbGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgdmFyIGNvbnRlbnRzID0gY29udGVudHNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgdmFyIGxpbmUgPSBMaW5lLmZyb21Db250ZW50KGNvbnRlbnQpO1xuICAgICAgXG4gICAgICByZXR1cm4gbGluZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxleGVyO1xuXG5mdW5jdGlvbiBjb250ZW50c0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgdmFyIGNvbnRlbnRzID0gZ3JhbW1hci5zcGxpdCgnXFxuJykucmVkdWNlKGZ1bmN0aW9uIChjb250ZW50cywgY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzO1xuXG4gICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goTGluZS5uYW1lRXhwcmVzc2lvblJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcblxuICAgICAgcmV0dXJuIGNvbnRlbnRzO1xuICAgIH1cblxuICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKExpbmUuY29udGludWVkRXhwcmVzc2lvblJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnRzLnBvcCgpLFxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICBjb250aW51ZWRFeHByZXNzaW9uID0gZmlyc3RNYXRjaCwgLy8vXG4gICAgICAgICAgY29udGludWluZ0NvbnRlbnQgPSAnICcgKyBjb250aW51ZWRFeHByZXNzaW9uO1xuXG4gICAgICBjb250ZW50ID0gcHJldmlvdXNDb250ZW50ICsgY29udGludWluZ0NvbnRlbnQ7XG5cbiAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG5cbiAgICAgIHJldHVybiBjb250ZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gY29udGVudHM7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19