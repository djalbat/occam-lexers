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
      Example.contentTextareaOnKeyUp(function () {
        Example.updateTokens(florenceLexer);
      });

      Example.updateTokens(florenceLexer);
    }
  }]);

  return FlorenceExample;
}();

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicmVxdWlyZSIsIkZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZUxleGVyIiwiZnJvbU5vdGhpbmciLCJGbG9yZW5jZUV4YW1wbGUiLCJjb250ZW50VGV4dGFyZWFPbktleVVwIiwidXBkYXRlVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUR0Qjs7QUFHQSxJQUFNRSxnQkFBZ0JELGNBQWNFLFdBQWQsRUFBdEI7O0lBRU1DLGU7Ozs7Ozs7MEJBQ1M7QUFDWEwsY0FBUU0sc0JBQVIsQ0FBK0IsWUFBVztBQUN4Q04sZ0JBQVFPLFlBQVIsQ0FBcUJKLGFBQXJCO0FBQ0QsT0FGRDs7QUFJQUgsY0FBUU8sWUFBUixDQUFxQkosYUFBckI7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJKLGVBQWpCIiwiZmlsZSI6ImZsb3JlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgRmxvcmVuY2VMZXhlciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL2xleGVyJyk7XG5cbmNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgRXhhbXBsZS5jb250ZW50VGV4dGFyZWFPbktleVVwKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVUb2tlbnMoZmxvcmVuY2VMZXhlcik7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhmbG9yZW5jZUxleGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==