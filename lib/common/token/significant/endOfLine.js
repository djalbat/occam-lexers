'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    SignificantToken = require('../../token/significant');

var endOfLineType = types.endOfLineType;

var EndOfLineSignificantToken = function (_SignificantToken) {
  _inherits(EndOfLineSignificantToken, _SignificantToken);

  function EndOfLineSignificantToken() {
    _classCallCheck(this, EndOfLineSignificantToken);

    return _possibleConstructorReturn(this, (EndOfLineSignificantToken.__proto__ || Object.getPrototypeOf(EndOfLineSignificantToken)).apply(this, arguments));
  }

  _createClass(EndOfLineSignificantToken, [{
    key: 'asHTML',
    value: function asHTML() {
      var html = '\n'; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(EndOfLineSignificantToken.prototype.__proto__ || Object.getPrototypeOf(EndOfLineSignificantToken.prototype), 'clone', this).call(this, EndOfLineSignificantToken, startPosition, endPosition);
    }
  }], [{
    key: 'match',
    value: function match(content) {
      return NonSignificantToken.match(EndOfLineSignificantToken, content);
    }
  }, {
    key: 'fromMatch',
    value: function fromMatch(match) {
      return NonSignificantToken.fromMatch(EndOfLineSignificantToken, match);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return SignificantToken.fromContent(EndOfLineSignificantToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return SignificantToken.fromWithinContent(EndOfLineSignificantToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return SignificantToken.positionWithinContent(EndOfLineSignificantToken, content);
    }
  }]);

  return EndOfLineSignificantToken;
}(SignificantToken);

var type = endOfLineType,
    ///
regularExpression = /\r\n|\r|\n/;

Object.assign(EndOfLineSignificantToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfLineSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUeXBlIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsImh0bWwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiZnJvbU1hdGNoIiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSx5QkFBUixDQUR6Qjs7SUFHUUUsYSxHQUFrQkgsSyxDQUFsQkcsYTs7SUFFRkMseUI7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBTUMsT0FBTyxJQUFiLENBRE8sQ0FDYTs7QUFFcEIsYUFBT0EsSUFBUDtBQUNEOzs7MEJBRUtDLGEsRUFBZUMsVyxFQUFhO0FBQUUseUpBQW1CSCx5QkFBbkIsRUFBOENFLGFBQTlDLEVBQTZEQyxXQUE3RDtBQUE0RTs7OzBCQUVuR0MsTyxFQUFTO0FBQUUsYUFBT0Msb0JBQW9CQyxLQUFwQixDQUEwQk4seUJBQTFCLEVBQXFESSxPQUFyRCxDQUFQO0FBQXVFOzs7OEJBRTlFRSxLLEVBQU87QUFBRSxhQUFPRCxvQkFBb0JFLFNBQXBCLENBQThCUCx5QkFBOUIsRUFBeURNLEtBQXpELENBQVA7QUFBeUU7OztnQ0FFaEZGLE8sRUFBUztBQUFFLGFBQU9OLGlCQUFpQlUsV0FBakIsQ0FBNkJSLHlCQUE3QixFQUF3REksT0FBeEQsQ0FBUDtBQUEwRTs7O3NDQUUvRUEsTyxFQUFTO0FBQUUsYUFBT04saUJBQWlCVyxpQkFBakIsQ0FBbUNULHlCQUFuQyxFQUE4REksT0FBOUQsQ0FBUDtBQUFnRjs7OzBDQUV2RkEsTyxFQUFTO0FBQUUsYUFBT04saUJBQWlCWSxxQkFBakIsQ0FBdUNWLHlCQUF2QyxFQUFrRUksT0FBbEUsQ0FBUDtBQUFvRjs7OztFQWpCdEZOLGdCOztBQW9CeEMsSUFBTWEsT0FBT1osYUFBYjtBQUFBLElBQTRCO0FBQ3RCYSxvQkFBb0IsWUFEMUI7O0FBR0FDLE9BQU9DLE1BQVAsQ0FBY2QseUJBQWQsRUFBeUM7QUFDdkNXLFlBRHVDO0FBRXZDQztBQUZ1QyxDQUF6Qzs7QUFLQUcsT0FBT0MsT0FBUCxHQUFpQmhCLHlCQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdHlwZXMnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi90b2tlbi9zaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGVuZE9mTGluZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gJ1xcbic7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tTWF0Y2gobWF0Y2gpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbU1hdGNoKEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sIG1hdGNoKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBlbmRPZkxpbmVUeXBlLCAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL1xcclxcbnxcXHJ8XFxuLztcblxuT2JqZWN0LmFzc2lnbihFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuO1xuIl19