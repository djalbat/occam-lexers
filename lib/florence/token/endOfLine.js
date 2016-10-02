'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var EndOfLineToken = function (_Token) {
  _inherits(EndOfLineToken, _Token);

  function EndOfLineToken(line) {
    _classCallCheck(this, EndOfLineToken);

    var str = undefined;

    return _possibleConstructorReturn(this, (EndOfLineToken.__proto__ || Object.getPrototypeOf(EndOfLineToken)).call(this, str, line));
  }

  _createClass(EndOfLineToken, [{
    key: 'getHTML',
    value: function getHTML() {
      var html = '<span class="endOfLine"></span>';

      return html;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(line) {
      var endOfLineToken = new EndOfLineToken(line);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(Token);

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJsaW5lIiwic3RyIiwidW5kZWZpbmVkIiwiaHRtbCIsImVuZE9mTGluZVRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLGM7OztBQUNKLDBCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFFBQUlDLE1BQU1DLFNBQVY7O0FBRGdCLDJIQUdWRCxHQUhVLEVBR0xELElBSEs7QUFJakI7Ozs7OEJBRVM7QUFDUixVQUFJRyxPQUFPLGlDQUFYOztBQUVBLGFBQU9BLElBQVA7QUFDRDs7O2dDQUVrQkgsSSxFQUFNO0FBQ3ZCLFVBQUlJLGlCQUFpQixJQUFJTCxjQUFKLENBQW1CQyxJQUFuQixDQUFyQjs7QUFFQSxhQUFPSSxjQUFQO0FBQ0Q7Ozs7RUFqQjBCUCxLOztBQW9CN0JRLE9BQU9DLE9BQVAsR0FBaUJQLGNBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuJyk7XG5cbmNsYXNzIEVuZE9mTGluZVRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihsaW5lKSB7XG4gICAgdmFyIHN0ciA9IHVuZGVmaW5lZDtcbiAgICBcbiAgICBzdXBlcihzdHIsIGxpbmUpO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgaHRtbCA9ICc8c3BhbiBjbGFzcz1cImVuZE9mTGluZVwiPjwvc3Bhbj4nO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm90aGluZyhsaW5lKSB7XG4gICAgdmFyIGVuZE9mTGluZVRva2VuID0gbmV3IEVuZE9mTGluZVRva2VuKGxpbmUpO1xuICAgIFxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VuO1xuIl19