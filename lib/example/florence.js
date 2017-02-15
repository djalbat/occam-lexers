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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJyZXF1aXJlIiwiRmxvcmVuY2VMZXhlciIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsIkZsb3JlbmNlRXhhbXBsZSIsImZpcnN0TGluZUluZGV4IiwibWluaW11bUxpbmVzTGVuZ3RoIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiZm9sbG93aW5nTGluZUluQ29tbWVudCIsImNvbnRlbnRUZXh0QXJlYU9uS2V5VXAiLCJ1cGRhdGVUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxZQUFSLENBQWQ7QUFBQSxJQUNJQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FEcEI7O0FBR0EsSUFBSUUsZ0JBQWdCRCxjQUFjRSxXQUFkLEVBQXBCOztJQUVNQyxlOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBSUMsaUJBQWlCLENBQXJCO0FBQUEsVUFDSUMscUJBQXFCLENBRHpCO0FBQUEsVUFFSUMsd0JBQXdCLEtBRjVCO0FBQUEsVUFHSUMseUJBQXlCLEtBSDdCOztBQUtBVCxjQUFRVSxzQkFBUixDQUErQixZQUFXO0FBQ3hDVixnQkFBUVcsWUFBUixDQUFxQlIsYUFBckIsRUFBb0NHLGNBQXBDLEVBQW9EQyxrQkFBcEQsRUFBd0VDLHFCQUF4RSxFQUErRkMsc0JBQS9GO0FBQ0QsT0FGRDs7QUFJQVQsY0FBUVcsWUFBUixDQUFxQlIsYUFBckIsRUFBb0NHLGNBQXBDLEVBQW9EQyxrQkFBcEQsRUFBd0VDLHFCQUF4RSxFQUErRkMsc0JBQS9GO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCUixlQUFqQiIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgRmxvcmVuY2VMZXhlciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL2xleGVyJyk7XG5cbnZhciBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciBmaXJzdExpbmVJbmRleCA9IDAsXG4gICAgICAgIG1pbmltdW1MaW5lc0xlbmd0aCA9IDIsXG4gICAgICAgIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGZhbHNlLFxuICAgICAgICBmb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gZmFsc2U7XG5cbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0QXJlYU9uS2V5VXAoZnVuY3Rpb24oKSB7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhmbG9yZW5jZUxleGVyLCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS51cGRhdGVUb2tlbnMoZmxvcmVuY2VMZXhlciwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==