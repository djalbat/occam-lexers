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

      Example.contentTextareaOnKeyUp(function () {
        Example.updateTokens(florenceLexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment);
      });

      Example.updateTokens(florenceLexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment);
    }
  }]);

  return FlorenceExample;
}();

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicmVxdWlyZSIsIkZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZUxleGVyIiwiZnJvbU5vdGhpbmciLCJGbG9yZW5jZUV4YW1wbGUiLCJmaXJzdExpbmVJbmRleCIsIm1pbmltdW1MaW5lc0xlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImZvbGxvd2luZ0xpbmVJbkNvbW1lbnQiLCJjb250ZW50VGV4dGFyZWFPbktleVVwIiwidXBkYXRlVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ0lDLGdCQUFnQkQsUUFBUSxtQkFBUixDQURwQjs7QUFHQSxJQUFNRSxnQkFBZ0JELGNBQWNFLFdBQWQsRUFBdEI7O0lBRU1DLGU7Ozs7Ozs7MEJBQ1M7QUFDWCxVQUFNQyxpQkFBaUIsQ0FBdkI7QUFBQSxVQUNNQyxxQkFBcUIsQ0FEM0I7QUFBQSxVQUVNQyx3QkFBd0IsS0FGOUI7QUFBQSxVQUdNQyx5QkFBeUIsS0FIL0I7O0FBS0FULGNBQVFVLHNCQUFSLENBQStCLFlBQVc7QUFDeENWLGdCQUFRVyxZQUFSLENBQXFCUixhQUFyQixFQUFvQ0csY0FBcEMsRUFBb0RDLGtCQUFwRCxFQUF3RUMscUJBQXhFLEVBQStGQyxzQkFBL0Y7QUFDRCxPQUZEOztBQUlBVCxjQUFRVyxZQUFSLENBQXFCUixhQUFyQixFQUFvQ0csY0FBcEMsRUFBb0RDLGtCQUFwRCxFQUF3RUMscUJBQXhFLEVBQStGQyxzQkFBL0Y7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJSLGVBQWpCIiwiZmlsZSI6ImZsb3JlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9sZXhlcicpO1xuXG5jb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGZpcnN0TGluZUluZGV4ID0gMCxcbiAgICAgICAgICBtaW5pbXVtTGluZXNMZW5ndGggPSAyLFxuICAgICAgICAgIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGZhbHNlLFxuICAgICAgICAgIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPSBmYWxzZTtcblxuICAgIEV4YW1wbGUuY29udGVudFRleHRhcmVhT25LZXlVcChmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKGZsb3JlbmNlTGV4ZXIsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhmbG9yZW5jZUxleGVyLCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuIl19