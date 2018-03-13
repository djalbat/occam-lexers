'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    SignificantToken = require('../significant');

var endOfLineType = types.endOfLineType;

var EndOfLineSignificantToken = function (_SignificantToken) {
  _inherits(EndOfLineSignificantToken, _SignificantToken);

  function EndOfLineSignificantToken() {
    _classCallCheck(this, EndOfLineSignificantToken);

    return _possibleConstructorReturn(this, (EndOfLineSignificantToken.__proto__ || Object.getPrototypeOf(EndOfLineSignificantToken)).apply(this, arguments));
  }

  _createClass(EndOfLineSignificantToken, [{
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = '\n'; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(EndOfLineSignificantToken.prototype.__proto__ || Object.getPrototypeOf(EndOfLineSignificantToken.prototype), 'clone', this).call(this, EndOfLineSignificantToken, startPosition, endPosition);
    }
  }], [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUeXBlIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsImZpbGVQYXRoIiwiaHRtbCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNvbnRlbnQiLCJmcm9tQ29udGVudCIsImZyb21XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsYUFBUixDQUFkO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLGdCQUFSLENBRHpCOztJQUdRRSxhLEdBQWtCSCxLLENBQWxCRyxhOztJQUVGQyx5Qjs7Ozs7Ozs7Ozs7MkJBQ0dDLFEsRUFBVTtBQUNmLFVBQU1DLE9BQU8sSUFBYixDQURlLENBQ0s7O0FBRXBCLGFBQU9BLElBQVA7QUFDRDs7OzBCQUVLQyxhLEVBQWVDLFcsRUFBYTtBQUFFLHlKQUFtQkoseUJBQW5CLEVBQThDRyxhQUE5QyxFQUE2REMsV0FBN0Q7QUFBNEU7OztnQ0FFN0ZDLE8sRUFBUztBQUFFLGFBQU9QLGlCQUFpQlEsV0FBakIsQ0FBNkJOLHlCQUE3QixFQUF3REssT0FBeEQsQ0FBUDtBQUEwRTs7O3NDQUUvRUEsTyxFQUFTO0FBQUUsYUFBT1AsaUJBQWlCUyxpQkFBakIsQ0FBbUNQLHlCQUFuQyxFQUE4REssT0FBOUQsQ0FBUDtBQUFnRjs7OzBDQUV2RkEsTyxFQUFTO0FBQUUsYUFBT1AsaUJBQWlCVSxxQkFBakIsQ0FBdUNSLHlCQUF2QyxFQUFrRUssT0FBbEUsQ0FBUDtBQUFvRjs7OztFQWJ0RlAsZ0I7O0FBZ0J4QyxJQUFNVyxPQUFPVixhQUFiO0FBQUEsSUFBNEI7QUFDdEJXLG9CQUFvQixZQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjWix5QkFBZCxFQUF5QztBQUN2Q1MsUUFBTUEsSUFEaUM7QUFFdkNDLHFCQUFtQkE7QUFGb0IsQ0FBekM7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJkLHlCQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdHlwZXMnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGVuZE9mTGluZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGh0bWwgPSAnXFxuJzsgIC8vL1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBlbmRPZkxpbmVUeXBlLCAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL1xcclxcbnxcXHJ8XFxuLztcblxuT2JqZWN0LmFzc2lnbihFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuLCB7XG4gIHR5cGU6IHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uOiByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==