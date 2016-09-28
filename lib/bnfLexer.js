'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BNFLine = require('./bnf/line');

var BNFLexer = function () {
  function BNFLexer() {
    _classCallCheck(this, BNFLexer);
  }

  _createClass(BNFLexer, null, [{
    key: 'linesFromGrammar',
    value: function linesFromGrammar(grammar) {
      var contents = contentsFromGrammar(grammar),
          lines = contents.map(function (content) {
        var line = BNFLine.fromContent(content);

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

    matches = content.match(BNFLine.nameExpressionRegExp);

    if (matches !== null) {
      contents.push(content);

      return contents;
    }

    matches = content.match(BNFLine.continuedExpressionRegExp);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZMZXhlci5qcyJdLCJuYW1lcyI6WyJCTkZMaW5lIiwicmVxdWlyZSIsIkJORkxleGVyIiwiZ3JhbW1hciIsImNvbnRlbnRzIiwiY29udGVudHNGcm9tR3JhbW1hciIsImxpbmVzIiwibWFwIiwiY29udGVudCIsImxpbmUiLCJmcm9tQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzcGxpdCIsInJlZHVjZSIsIm1hdGNoZXMiLCJtYXRjaCIsIm5hbWVFeHByZXNzaW9uUmVnRXhwIiwicHVzaCIsImNvbnRpbnVlZEV4cHJlc3Npb25SZWdFeHAiLCJwcmV2aW91c0NvbnRlbnQiLCJwb3AiLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJjb250aW51ZWRFeHByZXNzaW9uIiwiY29udGludWluZ0NvbnRlbnQiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsWUFBUixDQUFkOztJQUVNQyxROzs7Ozs7O3FDQUNvQkMsTyxFQUFTO0FBQy9CLFVBQUlDLFdBQVdDLG9CQUFvQkYsT0FBcEIsQ0FBZjtBQUFBLFVBQ0lHLFFBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTQyxPQUFULEVBQWtCO0FBQ3pDLFlBQUlDLE9BQU9ULFFBQVFVLFdBQVIsQ0FBb0JGLE9BQXBCLENBQVg7O0FBRUEsZUFBT0MsSUFBUDtBQUNELE9BSlcsQ0FEWjs7QUFPQSxhQUFPSCxLQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCVixRQUFqQjs7QUFFQSxTQUFTRyxtQkFBVCxDQUE2QkYsT0FBN0IsRUFBc0M7QUFDcEMsTUFBSUMsV0FBV0QsUUFBUVUsS0FBUixDQUFjLElBQWQsRUFBb0JDLE1BQXBCLENBQTJCLFVBQVVWLFFBQVYsRUFBb0JJLE9BQXBCLEVBQTZCO0FBQ3JFLFFBQUlPLE9BQUo7O0FBRUFBLGNBQVVQLFFBQVFRLEtBQVIsQ0FBY2hCLFFBQVFpQixvQkFBdEIsQ0FBVjs7QUFFQSxRQUFJRixZQUFZLElBQWhCLEVBQXNCO0FBQ3BCWCxlQUFTYyxJQUFULENBQWNWLE9BQWQ7O0FBRUEsYUFBT0osUUFBUDtBQUNEOztBQUVDVyxjQUFVUCxRQUFRUSxLQUFSLENBQWNoQixRQUFRbUIseUJBQXRCLENBQVY7O0FBRUYsUUFBSUosWUFBWSxJQUFoQixFQUFzQjtBQUNwQixVQUFJSyxrQkFBa0JoQixTQUFTaUIsR0FBVCxFQUF0QjtBQUFBLFVBQ0lDLGFBQWFDLE1BQU1SLE9BQU4sQ0FEakI7QUFBQSxVQUVJUyxzQkFBc0JGLFVBRjFCO0FBQUEsVUFFc0M7QUFDbENHLDBCQUFvQixNQUFNRCxtQkFIOUI7O0FBS0FoQixnQkFBVVksa0JBQWtCSyxpQkFBNUI7O0FBRUFyQixlQUFTYyxJQUFULENBQWNWLE9BQWQ7O0FBRUEsYUFBT0osUUFBUDtBQUNEOztBQUVELFdBQU9BLFFBQVA7QUFDRCxHQTNCYyxFQTJCWixFQTNCWSxDQUFmOztBQTZCQSxTQUFPQSxRQUFQO0FBQ0Q7O0FBRUQsU0FBU21CLEtBQVQsQ0FBZUcsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImJuZkxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQk5GTGluZSA9IHJlcXVpcmUoJy4vYm5mL2xpbmUnKTtcblxuY2xhc3MgQk5GTGV4ZXIge1xuICBzdGF0aWMgbGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgdmFyIGNvbnRlbnRzID0gY29udGVudHNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgdmFyIGxpbmUgPSBCTkZMaW5lLmZyb21Db250ZW50KGNvbnRlbnQpO1xuICAgICAgXG4gICAgICByZXR1cm4gbGluZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxleGVyO1xuXG5mdW5jdGlvbiBjb250ZW50c0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgdmFyIGNvbnRlbnRzID0gZ3JhbW1hci5zcGxpdCgnXFxuJykucmVkdWNlKGZ1bmN0aW9uIChjb250ZW50cywgY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzO1xuXG4gICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goQk5GTGluZS5uYW1lRXhwcmVzc2lvblJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcblxuICAgICAgcmV0dXJuIGNvbnRlbnRzO1xuICAgIH1cblxuICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goQk5GTGluZS5jb250aW51ZWRFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgcHJldmlvdXNDb250ZW50ID0gY29udGVudHMucG9wKCksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIGNvbnRpbnVlZEV4cHJlc3Npb24gPSBmaXJzdE1hdGNoLCAvLy9cbiAgICAgICAgICBjb250aW51aW5nQ29udGVudCA9ICcgJyArIGNvbnRpbnVlZEV4cHJlc3Npb247XG5cbiAgICAgIGNvbnRlbnQgPSBwcmV2aW91c0NvbnRlbnQgKyBjb250aW51aW5nQ29udGVudDtcblxuICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcblxuICAgICAgcmV0dXJuIGNvbnRlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjb250ZW50cztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=