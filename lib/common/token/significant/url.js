'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    SignificantToken = require('../significant');

var urlType = types.urlType;

var URLToken = function (_SignificantToken) {
  _inherits(URLToken, _SignificantToken);

  function URLToken() {
    _classCallCheck(this, URLToken);

    return _possibleConstructorReturn(this, (URLToken.__proto__ || Object.getPrototypeOf(URLToken)).apply(this, arguments));
  }

  _createClass(URLToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(URLToken.prototype.__proto__ || Object.getPrototypeOf(URLToken.prototype), 'clone', this).call(this, URLToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return SignificantToken.fromContent(URLToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return SignificantToken.fromWithinContent(URLToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return SignificantToken.positionWithinContent(URLToken, content);
    }
  }]);

  return URLToken;
}(SignificantToken);

var type = urlType,
    ///
regularExpression = /http:\/\/[-_\w]+(?:\.[-_\w]+)+(?:\/[-_\w]+)*\/?(?:\?(?:\w+(?:=\w+)?&)*(?:\w+(?:=\w+)?))?/;

Object.assign(URLToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = URLToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvdXJsLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJ1cmxUeXBlIiwiVVJMVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSxnQkFBUixDQUR6Qjs7SUFHUUUsTyxHQUFZSCxLLENBQVpHLE87O0lBRUZDLFE7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLHVIQUFtQkYsUUFBbkIsRUFBNkJDLGFBQTdCLEVBQTRDQyxXQUE1QztBQUEyRDs7O2dDQUU1RUMsTyxFQUFTO0FBQUUsYUFBT0wsaUJBQWlCTSxXQUFqQixDQUE2QkosUUFBN0IsRUFBdUNHLE9BQXZDLENBQVA7QUFBeUQ7OztzQ0FFOURBLE8sRUFBUztBQUFFLGFBQU9MLGlCQUFpQk8saUJBQWpCLENBQW1DTCxRQUFuQyxFQUE2Q0csT0FBN0MsQ0FBUDtBQUErRDs7OzBDQUV0RUEsTyxFQUFTO0FBQUUsYUFBT0wsaUJBQWlCUSxxQkFBakIsQ0FBdUNOLFFBQXZDLEVBQWlERyxPQUFqRCxDQUFQO0FBQW1FOzs7O0VBUHRGTCxnQjs7QUFVdkIsSUFBTVMsT0FBT1IsT0FBYjtBQUFBLElBQXNCO0FBQ2hCUyxvQkFBb0IsMEZBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNWLFFBQWQsRUFBd0I7QUFDdEJPLFlBRHNCO0FBRXRCQztBQUZzQixDQUF4Qjs7QUFLQUcsT0FBT0MsT0FBUCxHQUFpQlosUUFBakIiLCJmaWxlIjoidXJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uL3R5cGVzJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyB1cmxUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgVVJMVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKFVSTFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChVUkxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudChVUkxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KFVSTFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gdXJsVHlwZSwgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9odHRwOlxcL1xcL1stX1xcd10rKD86XFwuWy1fXFx3XSspKyg/OlxcL1stX1xcd10rKSpcXC8/KD86XFw/KD86XFx3Kyg/Oj1cXHcrKT8mKSooPzpcXHcrKD86PVxcdyspPykpPy87XG5cbk9iamVjdC5hc3NpZ24oVVJMVG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVSTFRva2VuO1xuIl19