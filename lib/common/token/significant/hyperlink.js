'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    SignificantToken = require('../significant');

var hyperlinkType = types.hyperlinkType;

var HyperlinkToken = function (_SignificantToken) {
  _inherits(HyperlinkToken, _SignificantToken);

  function HyperlinkToken() {
    _classCallCheck(this, HyperlinkToken);

    return _possibleConstructorReturn(this, (HyperlinkToken.__proto__ || Object.getPrototypeOf(HyperlinkToken)).apply(this, arguments));
  }

  _createClass(HyperlinkToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(HyperlinkToken.prototype.__proto__ || Object.getPrototypeOf(HyperlinkToken.prototype), 'clone', this).call(this, HyperlinkToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return SignificantToken.fromContent(HyperlinkToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return SignificantToken.fromWithinContent(HyperlinkToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return SignificantToken.positionWithinContent(HyperlinkToken, content);
    }
  }]);

  return HyperlinkToken;
}(SignificantToken);

var type = hyperlinkType,
    ///
regularExpression = /http:\/\/[-_\w]+(?:\.[-_\w]+)+(?:\/[-_\w]+)*\/?(?:\?(?:\w+(?:=\w+)?&)*(?:\w+(?:=\w+)?))?/;

Object.assign(HyperlinkToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = HyperlinkToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvaHlwZXJsaW5rLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJoeXBlcmxpbmtUeXBlIiwiSHlwZXJsaW5rVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSxnQkFBUixDQUR6Qjs7SUFHUUUsYSxHQUFrQkgsSyxDQUFsQkcsYTs7SUFFRkMsYzs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsbUlBQW1CRixjQUFuQixFQUFtQ0MsYUFBbkMsRUFBa0RDLFdBQWxEO0FBQWlFOzs7Z0NBRWxGQyxPLEVBQVM7QUFBRSxhQUFPTCxpQkFBaUJNLFdBQWpCLENBQTZCSixjQUE3QixFQUE2Q0csT0FBN0MsQ0FBUDtBQUErRDs7O3NDQUVwRUEsTyxFQUFTO0FBQUUsYUFBT0wsaUJBQWlCTyxpQkFBakIsQ0FBbUNMLGNBQW5DLEVBQW1ERyxPQUFuRCxDQUFQO0FBQXFFOzs7MENBRTVFQSxPLEVBQVM7QUFBRSxhQUFPTCxpQkFBaUJRLHFCQUFqQixDQUF1Q04sY0FBdkMsRUFBdURHLE9BQXZELENBQVA7QUFBeUU7Ozs7RUFQdEZMLGdCOztBQVU3QixJQUFNUyxPQUFPUixhQUFiO0FBQUEsSUFBNEI7QUFDdEJTLG9CQUFvQiwwRkFEMUI7O0FBR0FDLE9BQU9DLE1BQVAsQ0FBY1YsY0FBZCxFQUE4QjtBQUM1Qk8sWUFENEI7QUFFNUJDO0FBRjRCLENBQTlCOztBQUtBRyxPQUFPQyxPQUFQLEdBQWlCWixjQUFqQiIsImZpbGUiOiJoeXBlcmxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdHlwZXMnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGh5cGVybGlua1R5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBIeXBlcmxpbmtUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoSHlwZXJsaW5rVG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEh5cGVybGlua1Rva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21XaXRoaW5Db250ZW50KEh5cGVybGlua1Rva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoSHlwZXJsaW5rVG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBoeXBlcmxpbmtUeXBlLCAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL2h0dHA6XFwvXFwvWy1fXFx3XSsoPzpcXC5bLV9cXHddKykrKD86XFwvWy1fXFx3XSspKlxcLz8oPzpcXD8oPzpcXHcrKD86PVxcdyspPyYpKig/OlxcdysoPzo9XFx3Kyk/KSk/LztcblxuT2JqZWN0LmFzc2lnbihIeXBlcmxpbmtUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSHlwZXJsaW5rVG9rZW47XG4iXX0=