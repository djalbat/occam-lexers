'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../../common/token/significant');

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
          type = 'EOL',
          endOfLineToken = new EndOfLineToken(str, line, type);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbiIsInJlcXVpcmUiLCJFbmRPZkxpbmVUb2tlbiIsImxpbmUiLCJzdHIiLCJ0eXBlIiwiZW5kT2ZMaW5lVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLG1CQUFtQkMsUUFBUSxnQ0FBUixDQUF2Qjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7Z0NBQ2VDLEksRUFBTTtBQUN2QixVQUFJQyxNQUFNLEVBQVY7QUFBQSxVQUNJQyxPQUFPLEtBRFg7QUFBQSxVQUVJQyxpQkFBaUIsSUFBSUosY0FBSixDQUFtQkUsR0FBbkIsRUFBd0JELElBQXhCLEVBQThCRSxJQUE5QixDQUZyQjs7QUFJQSxhQUFPQyxjQUFQO0FBQ0Q7Ozs7RUFQMEJOLGdCOztBQVU3Qk8sT0FBT0MsT0FBUCxHQUFpQk4sY0FBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcobGluZSkge1xuICAgIHZhciBzdHIgPSAnJyxcbiAgICAgICAgdHlwZSA9ICdFT0wnLFxuICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IG5ldyBFbmRPZkxpbmVUb2tlbihzdHIsIGxpbmUsIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VuO1xuIl19