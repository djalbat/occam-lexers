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
      Example.contentTextAreaOnKeyUp(function () {
        var minimumLinesLength = 2,
            previousLineInComment = false,
            followingLineInComment = false;

        Example.updateTokens(florenceLexer, minimumLinesLength, previousLineInComment, followingLineInComment);
      });

      Example.updateTokens(florenceLexer);
    }
  }]);

  return FlorenceExample;
}();

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJyZXF1aXJlIiwiRmxvcmVuY2VMZXhlciIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsIkZsb3JlbmNlRXhhbXBsZSIsImNvbnRlbnRUZXh0QXJlYU9uS2V5VXAiLCJtaW5pbXVtTGluZXNMZW5ndGgiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwidXBkYXRlVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsWUFBUixDQUFkO0FBQUEsSUFDSUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBRHBCOztBQUdBLElBQUlFLGdCQUFnQkQsY0FBY0UsV0FBZCxFQUFwQjs7SUFFTUMsZTs7Ozs7OzswQkFDUztBQUNYTCxjQUFRTSxzQkFBUixDQUErQixZQUFXO0FBQ3hDLFlBQUlDLHFCQUFxQixDQUF6QjtBQUFBLFlBQ0lDLHdCQUF3QixLQUQ1QjtBQUFBLFlBRUlDLHlCQUF5QixLQUY3Qjs7QUFJQVQsZ0JBQVFVLFlBQVIsQ0FBcUJQLGFBQXJCLEVBQW9DSSxrQkFBcEMsRUFBd0RDLHFCQUF4RCxFQUErRUMsc0JBQS9FO0FBQ0QsT0FORDs7QUFRQVQsY0FBUVUsWUFBUixDQUFxQlAsYUFBckI7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJQLGVBQWpCIiwiZmlsZSI6ImZsb3JlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICBGbG9yZW5jZUxleGVyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvbGV4ZXInKTtcblxudmFyIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgRXhhbXBsZS5jb250ZW50VGV4dEFyZWFPbktleVVwKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1pbmltdW1MaW5lc0xlbmd0aCA9IDIsXG4gICAgICAgICAgcHJldmlvdXNMaW5lSW5Db21tZW50ID0gZmFsc2UsXG4gICAgICAgICAgZm9sbG93aW5nTGluZUluQ29tbWVudCA9IGZhbHNlO1xuXG4gICAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhmbG9yZW5jZUxleGVyLCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhmbG9yZW5jZUxleGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==