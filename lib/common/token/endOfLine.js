'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('./significant');

var EndOfLineToken = function (_SignificantToken) {
  _inherits(EndOfLineToken, _SignificantToken);

  function EndOfLineToken() {
    _classCallCheck(this, EndOfLineToken);

    return _possibleConstructorReturn(this, (EndOfLineToken.__proto__ || Object.getPrototypeOf(EndOfLineToken)).apply(this, arguments));
  }

  _createClass(EndOfLineToken, null, [{
    key: 'fromNothing',
    value: function fromNothing(line) {
      var content = '',
          ///
      type = SignificantToken.types.END_OF_LINE,
          endOfLineToken = new EndOfLineToken(content, line, type);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJsaW5lIiwiY29udGVudCIsInR5cGUiLCJ0eXBlcyIsIkVORF9PRl9MSU5FIiwiZW5kT2ZMaW5lVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLG1CQUFtQkMsUUFBUSxlQUFSLENBQXZCOztJQUVNQyxjOzs7Ozs7Ozs7OztnQ0FDZUMsSSxFQUFNO0FBQ3ZCLFVBQUlDLFVBQVUsRUFBZDtBQUFBLFVBQW1CO0FBQ2ZDLGFBQU9MLGlCQUFpQk0sS0FBakIsQ0FBdUJDLFdBRGxDO0FBQUEsVUFFSUMsaUJBQWlCLElBQUlOLGNBQUosQ0FBbUJFLE9BQW5CLEVBQTRCRCxJQUE1QixFQUFrQ0UsSUFBbEMsQ0FGckI7O0FBSUEsYUFBT0csY0FBUDtBQUNEOzs7O0VBUDBCUixnQjs7QUFVN0JTLE9BQU9DLE9BQVAsR0FBaUJSLGNBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIEVuZE9mTGluZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZyhsaW5lKSB7XG4gICAgdmFyIGNvbnRlbnQgPSAnJywgIC8vL1xuICAgICAgICB0eXBlID0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5FTkRfT0ZfTElORSxcbiAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBuZXcgRW5kT2ZMaW5lVG9rZW4oY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lVG9rZW47XG4iXX0=