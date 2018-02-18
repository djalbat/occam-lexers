'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../significant');

var EndOfLineToken = function (_SignificantToken) {
  _inherits(EndOfLineToken, _SignificantToken);

  function EndOfLineToken() {
    _classCallCheck(this, EndOfLineToken);

    return _possibleConstructorReturn(this, (EndOfLineToken.__proto__ || Object.getPrototypeOf(EndOfLineToken)).apply(this, arguments));
  }

  _createClass(EndOfLineToken, [{
    key: 'getLength',
    value: function getLength() {
      var length = 0; ///

      return length;
    }
  }, {
    key: 'isEndOfLineToken',
    value: function isEndOfLineToken() {
      var endOfLineToken = true;

      return endOfLineToken;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = ''; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return EndOfLineToken.clone(this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone(endOfLineToken) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : endOfLineToken.getLength();

      var clonedEndOfLineToken = null;

      if (startPosition !== endPosition) {
        var content = null,
            line = endOfLineToken.getLine(),
            _type = endOfLineToken.getType(),
            _clonedEndOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, _type);
      }

      return clonedEndOfLineToken;
    }
  }, {
    key: 'fromLine',
    value: function fromLine(line) {
      var content = null,
          type = EndOfLineToken.type,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);

      return endOfLineToken;
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var innerHTML = null,
          ///
      endOfLineToken = new EndOfLineToken(content, line, type, innerHTML);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

var type = 'endOfLine';

Object.assign(EndOfLineToken, {
  type: type
});

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJsZW5ndGgiLCJlbmRPZkxpbmVUb2tlbiIsImZpbGVQYXRoIiwiaHRtbCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiZ2V0TGVuZ3RoIiwiY2xvbmVkRW5kT2ZMaW5lVG9rZW4iLCJjb250ZW50IiwibGluZSIsImdldExpbmUiLCJ0eXBlIiwiZ2V0VHlwZSIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJpbm5lckhUTUwiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQkMsUUFBUSxnQkFBUixDQUF6Qjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7Z0NBQ1E7QUFDVixVQUFNQyxTQUFTLENBQWYsQ0FEVSxDQUNROztBQUVsQixhQUFPQSxNQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsaUJBQWlCLElBQXZCOztBQUVBLGFBQU9BLGNBQVA7QUFDRDs7OzJCQUVNQyxRLEVBQVU7QUFDZixVQUFNQyxPQUFPLEVBQWIsQ0FEZSxDQUNHOztBQUVsQixhQUFPQSxJQUFQO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPTixlQUFlTyxLQUFmLENBQXFCLElBQXJCLEVBQTJCRixhQUEzQixFQUEwQ0MsV0FBMUMsQ0FBUDtBQUFnRTs7OzBCQUV2RkosYyxFQUE2RTtBQUFBLFVBQTdERyxhQUE2RCx1RUFBN0MsQ0FBNkM7QUFBQSxVQUExQ0MsV0FBMEMsdUVBQTVCSixlQUFlTSxTQUFmLEVBQTRCOztBQUN4RixVQUFJQyx1QkFBdUIsSUFBM0I7O0FBRUEsVUFBSUosa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFNSSxVQUFVLElBQWhCO0FBQUEsWUFDTUMsT0FBT1QsZUFBZVUsT0FBZixFQURiO0FBQUEsWUFFTUMsUUFBT1gsZUFBZVksT0FBZixFQUZiO0FBQUEsWUFJQUwsd0JBQXVCVCxlQUFlZSxzQkFBZixDQUFzQ0wsT0FBdEMsRUFBK0NDLElBQS9DLEVBQXFERSxLQUFyRCxDQUp2QjtBQUtEOztBQUVELGFBQU9KLG9CQUFQO0FBQ0Q7Ozs2QkFFZUUsSSxFQUFNO0FBQ2Qsb0JBQVUsSUFBVjtBQUFBLFVBQ0VFLElBREYsR0FDV2IsY0FEWCxDQUNFYSxJQURGO0FBQUEsVUFFQVgsY0FGQSxHQUVpQkYsZUFBZWUsc0JBQWYsQ0FBc0NMLE9BQXRDLEVBQStDQyxJQUEvQyxFQUFxREUsSUFBckQsQ0FGakI7O0FBSU4sYUFBT1gsY0FBUDtBQUNEOzs7MkNBRTZCUSxPLEVBQVNDLEksRUFBTUUsSSxFQUFNO0FBQ2pELFVBQU1HLFlBQVksSUFBbEI7QUFBQSxVQUF3QjtBQUNsQmQsdUJBQWlCLElBQUlGLGNBQUosQ0FBbUJVLE9BQW5CLEVBQTRCQyxJQUE1QixFQUFrQ0UsSUFBbEMsRUFBd0NHLFNBQXhDLENBRHZCOztBQUdBLGFBQU9kLGNBQVA7QUFDRDs7OztFQWhEMEJKLGdCOztBQW1EN0IsSUFBTWUsT0FBTyxXQUFiOztBQUVBSSxPQUFPQyxNQUFQLENBQWNsQixjQUFkLEVBQThCO0FBQzVCYSxRQUFNQTtBQURzQixDQUE5Qjs7QUFJQU0sT0FBT0MsT0FBUCxHQUFpQnBCLGNBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIEVuZE9mTGluZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSAwOyAvLy9cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVRva2VuID0gdHJ1ZTtcblxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGh0bWwgPSAnJzsgIC8vL1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIEVuZE9mTGluZVRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbmRPZkxpbmVUb2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gZW5kT2ZMaW5lVG9rZW4uZ2V0TGVuZ3RoKCkpIHtcbiAgICBsZXQgY2xvbmVkRW5kT2ZMaW5lVG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbnVsbCxcbiAgICAgICAgICAgIGxpbmUgPSBlbmRPZkxpbmVUb2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgICB0eXBlID0gZW5kT2ZMaW5lVG9rZW4uZ2V0VHlwZSgpLFxuXG4gICAgICBjbG9uZWRFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZEVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gbnVsbCwgLy8vXG4gICAgICAgICAgeyB0eXBlIH0gPSBFbmRPZkxpbmVUb2tlbixcbiAgICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IG51bGwsIC8vL1xuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gbmV3IEVuZE9mTGluZVRva2VuKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCk7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cbn1cblxuY29uc3QgdHlwZSA9ICdlbmRPZkxpbmUnO1xuXG5PYmplY3QuYXNzaWduKEVuZE9mTGluZVRva2VuLCB7XG4gIHR5cGU6IHR5cGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VuO1xuIl19