'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line');

var Lexer = function () {
  function Lexer() {
    _classCallCheck(this, Lexer);
  }

  _createClass(Lexer, null, [{
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

  return Lexer;
}();

module.exports = Lexer;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJMZXhlciIsImdyYW1tYXIiLCJjb250ZW50cyIsImNvbnRlbnRzRnJvbUdyYW1tYXIiLCJsaW5lcyIsIm1hcCIsImNvbnRlbnQiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwic3BsaXQiLCJyZWR1Y2UiLCJtYXRjaGVzIiwibWF0Y2giLCJuYW1lRXhwcmVzc2lvblJlZ0V4cCIsInB1c2giLCJjb250aW51ZWRFeHByZXNzaW9uUmVnRXhwIiwicHJldmlvdXNDb250ZW50IiwicG9wIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiY29udGludWVkRXhwcmVzc2lvbiIsImNvbnRpbnVpbmdDb250ZW50IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDs7SUFFTUMsSzs7Ozs7OztxQ0FDb0JDLE8sRUFBUztBQUMvQixVQUFJQyxXQUFXQyxvQkFBb0JGLE9BQXBCLENBQWY7QUFBQSxVQUNJRyxRQUFRRixTQUFTRyxHQUFULENBQWEsVUFBU0MsT0FBVCxFQUFrQjtBQUN6QyxZQUFJQyxPQUFPVCxLQUFLVSxXQUFMLENBQWlCRixPQUFqQixDQUFYOztBQUVBLGVBQU9DLElBQVA7QUFDRCxPQUpXLENBRFo7O0FBT0EsYUFBT0gsS0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQlYsS0FBakI7O0FBRUEsU0FBU0csbUJBQVQsQ0FBNkJGLE9BQTdCLEVBQXNDO0FBQ3BDLE1BQUlDLFdBQVdELFFBQVFVLEtBQVIsQ0FBYyxJQUFkLEVBQW9CQyxNQUFwQixDQUEyQixVQUFVVixRQUFWLEVBQW9CSSxPQUFwQixFQUE2QjtBQUNyRSxRQUFJTyxPQUFKOztBQUVBQSxjQUFVUCxRQUFRUSxLQUFSLENBQWNoQixLQUFLaUIsb0JBQW5CLENBQVY7O0FBRUEsUUFBSUYsWUFBWSxJQUFoQixFQUFzQjtBQUNwQlgsZUFBU2MsSUFBVCxDQUFjVixPQUFkOztBQUVBLGFBQU9KLFFBQVA7QUFDRDs7QUFFQ1csY0FBVVAsUUFBUVEsS0FBUixDQUFjaEIsS0FBS21CLHlCQUFuQixDQUFWOztBQUVGLFFBQUlKLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsVUFBSUssa0JBQWtCaEIsU0FBU2lCLEdBQVQsRUFBdEI7QUFBQSxVQUNJQyxhQUFhQyxNQUFNUixPQUFOLENBRGpCO0FBQUEsVUFFSVMsc0JBQXNCRixVQUYxQjtBQUFBLFVBRXNDO0FBQ2xDRywwQkFBb0IsTUFBTUQsbUJBSDlCOztBQUtBaEIsZ0JBQVVZLGtCQUFrQkssaUJBQTVCOztBQUVBckIsZUFBU2MsSUFBVCxDQUFjVixPQUFkOztBQUVBLGFBQU9KLFFBQVA7QUFDRDs7QUFFRCxXQUFPQSxRQUFQO0FBQ0QsR0EzQmMsRUEyQlosRUEzQlksQ0FBZjs7QUE2QkEsU0FBT0EsUUFBUDtBQUNEOztBQUVELFNBQVNtQixLQUFULENBQWVHLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKTtcblxuY2xhc3MgTGV4ZXIge1xuICBzdGF0aWMgbGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgdmFyIGNvbnRlbnRzID0gY29udGVudHNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgdmFyIGxpbmUgPSBMaW5lLmZyb21Db250ZW50KGNvbnRlbnQpO1xuICAgICAgXG4gICAgICByZXR1cm4gbGluZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExleGVyO1xuXG5mdW5jdGlvbiBjb250ZW50c0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgdmFyIGNvbnRlbnRzID0gZ3JhbW1hci5zcGxpdCgnXFxuJykucmVkdWNlKGZ1bmN0aW9uIChjb250ZW50cywgY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzO1xuXG4gICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goTGluZS5uYW1lRXhwcmVzc2lvblJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcblxuICAgICAgcmV0dXJuIGNvbnRlbnRzO1xuICAgIH1cblxuICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goTGluZS5jb250aW51ZWRFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgcHJldmlvdXNDb250ZW50ID0gY29udGVudHMucG9wKCksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIGNvbnRpbnVlZEV4cHJlc3Npb24gPSBmaXJzdE1hdGNoLCAvLy9cbiAgICAgICAgICBjb250aW51aW5nQ29udGVudCA9ICcgJyArIGNvbnRpbnVlZEV4cHJlc3Npb247XG5cbiAgICAgIGNvbnRlbnQgPSBwcmV2aW91c0NvbnRlbnQgKyBjb250aW51aW5nQ29udGVudDtcblxuICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcblxuICAgICAgcmV0dXJuIGNvbnRlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjb250ZW50cztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=