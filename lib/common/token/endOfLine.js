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
      var str = '',
          type = SignificantToken.types.END_OF_LINE,
          endOfLineToken = new EndOfLineToken(str, line, type);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJsaW5lIiwic3RyIiwidHlwZSIsInR5cGVzIiwiRU5EX09GX0xJTkUiLCJlbmRPZkxpbmVUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLGVBQVIsQ0FBdkI7O0lBRU1DLGM7Ozs7Ozs7Ozs7O2dDQUNlQyxJLEVBQU07QUFDdkIsVUFBSUMsTUFBTSxFQUFWO0FBQUEsVUFDSUMsT0FBT0wsaUJBQWlCTSxLQUFqQixDQUF1QkMsV0FEbEM7QUFBQSxVQUVJQyxpQkFBaUIsSUFBSU4sY0FBSixDQUFtQkUsR0FBbkIsRUFBd0JELElBQXhCLEVBQThCRSxJQUE5QixDQUZyQjs7QUFJQSxhQUFPRyxjQUFQO0FBQ0Q7Ozs7RUFQMEJSLGdCOztBQVU3QlMsT0FBT0MsT0FBUCxHQUFpQlIsY0FBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgRW5kT2ZMaW5lVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKGxpbmUpIHtcbiAgICB2YXIgc3RyID0gJycsXG4gICAgICAgIHR5cGUgPSBTaWduaWZpY2FudFRva2VuLnR5cGVzLkVORF9PRl9MSU5FLFxuICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IG5ldyBFbmRPZkxpbmVUb2tlbihzdHIsIGxpbmUsIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VuO1xuIl19