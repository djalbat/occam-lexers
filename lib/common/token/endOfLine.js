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

  _createClass(EndOfLineToken, [{
    key: 'toPosition',
    value: function toPosition(position) {
      return SignificantToken.toPosition(this, position, EndOfLineToken);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return SignificantToken.fromPosition(this, position, EndOfLineToken);
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line) {
      var content = '',
          endOfLineToken = SignificantToken.fromContentAndLine(content, line, EndOfLineToken);

      return endOfLineToken;
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var html = ''; ///

      return html;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

EndOfLineToken.type = SignificantToken.types.endOfLine;

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJwb3NpdGlvbiIsInRvUG9zaXRpb24iLCJmcm9tUG9zaXRpb24iLCJsaW5lIiwiY29udGVudCIsImVuZE9mTGluZVRva2VuIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwiaHRtbCIsInR5cGUiLCJ0eXBlcyIsImVuZE9mTGluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLGVBQVIsQ0FBdkI7O0lBRU1DLGM7Ozs7Ozs7Ozs7OytCQUNPQyxRLEVBQVU7QUFBRSxhQUFPSCxpQkFBaUJJLFVBQWpCLENBQTRCLElBQTVCLEVBQWtDRCxRQUFsQyxFQUE0Q0QsY0FBNUMsQ0FBUDtBQUFvRTs7O2lDQUU5RUMsUSxFQUFVO0FBQUUsYUFBT0gsaUJBQWlCSyxZQUFqQixDQUE4QixJQUE5QixFQUFvQ0YsUUFBcEMsRUFBOENELGNBQTlDLENBQVA7QUFBc0U7Ozs2QkFFL0VJLEksRUFBTTtBQUNwQixVQUFJQyxVQUFVLEVBQWQ7QUFBQSxVQUNJQyxpQkFBaUJSLGlCQUFpQlMsa0JBQWpCLENBQW9DRixPQUFwQyxFQUE2Q0QsSUFBN0MsRUFBbURKLGNBQW5ELENBRHJCOztBQUdBLGFBQU9NLGNBQVA7QUFDRDs7O29DQUVzQkQsTyxFQUFTO0FBQzlCLFVBQUlHLE9BQU8sRUFBWCxDQUQ4QixDQUNkOztBQUVoQixhQUFPQSxJQUFQO0FBQ0Q7Ozs7RUFoQjBCVixnQjs7QUFtQjdCRSxlQUFlUyxJQUFmLEdBQXNCWCxpQkFBaUJZLEtBQWpCLENBQXVCQyxTQUE3Qzs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQmIsY0FBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgRW5kT2ZMaW5lVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgdG9Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi50b1Bvc2l0aW9uKHRoaXMsIHBvc2l0aW9uLCBFbmRPZkxpbmVUb2tlbikgfVxuXG4gIGZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tUG9zaXRpb24odGhpcywgcG9zaXRpb24sIEVuZE9mTGluZVRva2VuKSB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUpIHtcbiAgICB2YXIgY29udGVudCA9ICcnLFxuICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIEVuZE9mTGluZVRva2VuKTtcbiAgICBcbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgaHRtbCA9ICcnOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5FbmRPZkxpbmVUb2tlbi50eXBlID0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5lbmRPZkxpbmU7XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lVG9rZW47XG4iXX0=