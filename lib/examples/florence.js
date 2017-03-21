'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    FlorenceLexer = require('../florence/lexer');

var florenceLexer = FlorenceLexer.fromNothing();

var FlorenceExample = function () {
  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      var firstLineIndex = 0,
          minimumLinesLength = 2,
          previousLineInComment = false,
          followingLineInComment = false;

      Example.contentTextAreaOnKeyUp(function () {
        Example.updateTokens(florenceLexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment);
      });

      Example.updateTokens(florenceLexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment);
    }
  }]);

  return FlorenceExample;
}();

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicmVxdWlyZSIsIkZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZUxleGVyIiwiZnJvbU5vdGhpbmciLCJGbG9yZW5jZUV4YW1wbGUiLCJmaXJzdExpbmVJbmRleCIsIm1pbmltdW1MaW5lc0xlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImZvbGxvd2luZ0xpbmVJbkNvbW1lbnQiLCJjb250ZW50VGV4dEFyZWFPbktleVVwIiwidXBkYXRlVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsWUFBUixDQUFkO0FBQUEsSUFDSUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBRHBCOztBQUdBLElBQUlFLGdCQUFnQkQsY0FBY0UsV0FBZCxFQUFwQjs7SUFFTUMsZTs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLGlCQUFpQixDQUFyQjtBQUFBLFVBQ0lDLHFCQUFxQixDQUR6QjtBQUFBLFVBRUlDLHdCQUF3QixLQUY1QjtBQUFBLFVBR0lDLHlCQUF5QixLQUg3Qjs7QUFLQVQsY0FBUVUsc0JBQVIsQ0FBK0IsWUFBVztBQUN4Q1YsZ0JBQVFXLFlBQVIsQ0FBcUJSLGFBQXJCLEVBQW9DRyxjQUFwQyxFQUFvREMsa0JBQXBELEVBQXdFQyxxQkFBeEUsRUFBK0ZDLHNCQUEvRjtBQUNELE9BRkQ7O0FBSUFULGNBQVFXLFlBQVIsQ0FBcUJSLGFBQXJCLEVBQW9DRyxjQUFwQyxFQUFvREMsa0JBQXBELEVBQXdFQyxxQkFBeEUsRUFBK0ZDLHNCQUEvRjtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQlIsZUFBakIiLCJmaWxlIjoiZmxvcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9sZXhlcicpO1xuXG52YXIgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB2YXIgZmlyc3RMaW5lSW5kZXggPSAwLFxuICAgICAgICBtaW5pbXVtTGluZXNMZW5ndGggPSAyLFxuICAgICAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBmYWxzZSxcbiAgICAgICAgZm9sbG93aW5nTGluZUluQ29tbWVudCA9IGZhbHNlO1xuXG4gICAgRXhhbXBsZS5jb250ZW50VGV4dEFyZWFPbktleVVwKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVUb2tlbnMoZmxvcmVuY2VMZXhlciwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKGZsb3JlbmNlTGV4ZXIsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGU7XG4iXX0=