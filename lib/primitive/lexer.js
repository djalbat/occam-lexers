'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line');

var PrimitiveLexer = function () {
  function PrimitiveLexer() {
    _classCallCheck(this, PrimitiveLexer);
  }

  _createClass(PrimitiveLexer, null, [{
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

  return PrimitiveLexer;
}();

module.exports = PrimitiveLexer;

function contentsFromGrammar(grammar) {
  var contents = grammar.split('\n').reduce(function (contents, content) {
    var matches = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wcmltaXRpdmUvbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJQcmltaXRpdmVMZXhlciIsImdyYW1tYXIiLCJjb250ZW50cyIsImNvbnRlbnRzRnJvbUdyYW1tYXIiLCJsaW5lcyIsIm1hcCIsImNvbnRlbnQiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwic3BsaXQiLCJyZWR1Y2UiLCJtYXRjaGVzIiwibWF0Y2giLCJuYW1lRXhwcmVzc2lvblJlZ0V4cCIsInB1c2giLCJjb250aW51ZWRFeHByZXNzaW9uUmVnRXhwIiwicHJldmlvdXNDb250ZW50IiwicG9wIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiY29udGludWVkRXhwcmVzc2lvbiIsImNvbnRpbnVpbmdDb250ZW50IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjs7SUFFTUMsYzs7Ozs7OztxQ0FDb0JDLE8sRUFBUztBQUMvQixVQUFNQyxXQUFXQyxvQkFBb0JGLE9BQXBCLENBQWpCO0FBQUEsVUFDTUcsUUFBUUYsU0FBU0csR0FBVCxDQUFhLFVBQVNDLE9BQVQsRUFBa0I7QUFDckMsWUFBTUMsT0FBT1QsS0FBS1UsV0FBTCxDQUFpQkYsT0FBakIsQ0FBYjs7QUFFQSxlQUFPQyxJQUFQO0FBQ0QsT0FKTyxDQURkOztBQU9BLGFBQU9ILEtBQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJWLGNBQWpCOztBQUVBLFNBQVNHLG1CQUFULENBQTZCRixPQUE3QixFQUFzQztBQUNwQyxNQUFNQyxXQUFXRCxRQUFRVSxLQUFSLENBQWMsSUFBZCxFQUFvQkMsTUFBcEIsQ0FBMkIsVUFBVVYsUUFBVixFQUFvQkksT0FBcEIsRUFBNkI7QUFDdkUsUUFBSU8sZ0JBQUo7O0FBRUFBLGNBQVVQLFFBQVFRLEtBQVIsQ0FBY2hCLEtBQUtpQixvQkFBbkIsQ0FBVjs7QUFFQSxRQUFJRixZQUFZLElBQWhCLEVBQXNCO0FBQ3BCWCxlQUFTYyxJQUFULENBQWNWLE9BQWQ7O0FBRUEsYUFBT0osUUFBUDtBQUNEOztBQUVEVyxjQUFVUCxRQUFRUSxLQUFSLENBQWNoQixLQUFLbUIseUJBQW5CLENBQVY7O0FBRUEsUUFBSUosWUFBWSxJQUFoQixFQUFzQjtBQUNwQixVQUFNSyxrQkFBa0JoQixTQUFTaUIsR0FBVCxFQUF4QjtBQUFBLFVBQ01DLGFBQWFDLE1BQU1SLE9BQU4sQ0FEbkI7QUFBQSxVQUVNUyxzQkFBc0JGLFVBRjVCO0FBQUEsVUFFd0M7QUFDbENHLDBCQUFvQixNQUFNRCxtQkFIaEM7O0FBS0FoQixnQkFBVVksa0JBQWtCSyxpQkFBNUI7O0FBRUFyQixlQUFTYyxJQUFULENBQWNWLE9BQWQ7O0FBRUEsYUFBT0osUUFBUDtBQUNEOztBQUVELFdBQU9BLFFBQVA7QUFDRCxHQTNCZ0IsRUEyQmQsRUEzQmMsQ0FBakI7O0FBNkJBLFNBQU9BLFFBQVA7QUFDRDs7QUFFRCxTQUFTbUIsS0FBVCxDQUFlRyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKTtcblxuY2xhc3MgUHJpbWl0aXZlTGV4ZXIge1xuICBzdGF0aWMgbGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBjb250ZW50c0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBMaW5lLmZyb21Db250ZW50KGNvbnRlbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbGluZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByaW1pdGl2ZUxleGVyO1xuXG5mdW5jdGlvbiBjb250ZW50c0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgY29uc3QgY29udGVudHMgPSBncmFtbWFyLnNwbGl0KCdcXG4nKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbnRlbnRzLCBjb250ZW50KSB7XG4gICAgbGV0IG1hdGNoZXM7XG5cbiAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChMaW5lLm5hbWVFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpO1xuXG4gICAgICByZXR1cm4gY29udGVudHM7XG4gICAgfVxuXG4gICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goTGluZS5jb250aW51ZWRFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50cy5wb3AoKSxcbiAgICAgICAgICAgIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgIGNvbnRpbnVlZEV4cHJlc3Npb24gPSBmaXJzdE1hdGNoLCAvLy9cbiAgICAgICAgICAgIGNvbnRpbnVpbmdDb250ZW50ID0gJyAnICsgY29udGludWVkRXhwcmVzc2lvbjtcblxuICAgICAgY29udGVudCA9IHByZXZpb3VzQ29udGVudCArIGNvbnRpbnVpbmdDb250ZW50O1xuXG4gICAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpO1xuXG4gICAgICByZXR1cm4gY29udGVudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==