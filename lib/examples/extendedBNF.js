'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    ExtendedBNFLexer = require('../extendedBNF/lexer');

var ExtendedBNFExample = function () {
  function ExtendedBNFExample() {
    _classCallCheck(this, ExtendedBNFExample);
  }

  _createClass(ExtendedBNFExample, null, [{
    key: 'run',
    value: function run() {
      var entries = ExtendedBNFLexer.entries,
          Lexer = ExtendedBNFLexer;

      Example.run(entries, Lexer);
    }
  }]);

  return ExtendedBNFExample;
}();

module.exports = ExtendedBNFExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9leHRlbmRlZEJORi5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicmVxdWlyZSIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJFeHRlbmRlZEJORkV4YW1wbGUiLCJlbnRyaWVzIiwiTGV4ZXIiLCJydW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLHNCQUFSLENBRHpCOztJQUdNRSxrQjs7Ozs7OzswQkFDUztBQUNYLFVBQU1DLFVBQVVGLGlCQUFpQkUsT0FBakM7QUFBQSxVQUNNQyxRQUFRSCxnQkFEZDs7QUFHQUYsY0FBUU0sR0FBUixDQUFZRixPQUFaLEVBQXFCQyxLQUFyQjtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQkwsa0JBQWpCIiwiZmlsZSI6ImV4dGVuZGVkQk5GLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgRXh0ZW5kZWRCTkZMZXhlciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL2xleGVyJyk7XG5cbmNsYXNzIEV4dGVuZGVkQk5GRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEV4dGVuZGVkQk5GTGV4ZXIuZW50cmllcyxcbiAgICAgICAgICBMZXhlciA9IEV4dGVuZGVkQk5GTGV4ZXI7XG5cbiAgICBFeGFtcGxlLnJ1bihlbnRyaWVzLCBMZXhlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRlZEJORkV4YW1wbGU7XG4iXX0=