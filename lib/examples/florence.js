'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    FlorenceLexer = require('../florence/lexer');

var FlorenceExample = function () {
  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      var entries = FlorenceLexer.entries,
          Lexer = FlorenceLexer;


      Example.run(entries, Lexer);
    }
  }]);

  return FlorenceExample;
}();

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicmVxdWlyZSIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZUV4YW1wbGUiLCJlbnRyaWVzIiwiTGV4ZXIiLCJydW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBRHRCOztJQUdNRSxlOzs7Ozs7OzBCQUNTO0FBQ0wsVUFBRUMsT0FBRixHQUFjRixhQUFkLENBQUVFLE9BQUY7QUFBQSxVQUNBQyxLQURBLEdBQ1FILGFBRFI7OztBQUdORixjQUFRTSxHQUFSLENBQVlGLE9BQVosRUFBcUJDLEtBQXJCO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCTCxlQUFqQiIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIEZsb3JlbmNlTGV4ZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9sZXhlcicpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gRmxvcmVuY2VMZXhlcixcbiAgICAgICAgICBMZXhlciA9IEZsb3JlbmNlTGV4ZXI7XG5cbiAgICBFeGFtcGxlLnJ1bihlbnRyaWVzLCBMZXhlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGU7XG4iXX0=