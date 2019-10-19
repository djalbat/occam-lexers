'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    NonSignificantToken = require('../../../../token/nonSignificant');

var middleOfMultiLineCommentType = types.middleOfMultiLineCommentType;

var MiddleOfMultiLineCommentToken = function (_NonSignificantToken) {
  _inherits(MiddleOfMultiLineCommentToken, _NonSignificantToken);

  function MiddleOfMultiLineCommentToken() {
    _classCallCheck(this, MiddleOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(MiddleOfMultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken.prototype), 'clone', this).call(this, MiddleOfMultiLineCommentToken, startPosition, endPosition);
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      var inComment = true;

      return inComment;
    }
  }], [{
    key: 'match',
    value: function match(content) {
      return NonSignificantToken.match(MiddleOfMultiLineCommentToken, content);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(MiddleOfMultiLineCommentToken, content);
    }
  }]);

  return MiddleOfMultiLineCommentToken;
}(NonSignificantToken);

var type = middleOfMultiLineCommentType,
    ///
regularExpression = /^(?:.+?(?=\*\/)|.+$)/;

Object.assign(MiddleOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = MiddleOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIm1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsImNvbnRlbnQiLCJtYXRjaCIsImZyb21Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsbUJBQVIsQ0FBZDtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSxrQ0FBUixDQUQ1Qjs7SUFHUUUsNEIsR0FBaUNILEssQ0FBakNHLDRCOztJQUVGQyw2Qjs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsaUtBQW1CRiw2QkFBbkIsRUFBa0RDLGFBQWxELEVBQWlFQyxXQUFqRTtBQUFnRjs7O2tDQUV0RztBQUNaLFVBQU1DLFlBQVksSUFBbEI7O0FBRUEsYUFBT0EsU0FBUDtBQUNEOzs7MEJBRVlDLE8sRUFBUztBQUFFLGFBQU9OLG9CQUFvQk8sS0FBcEIsQ0FBMEJMLDZCQUExQixFQUF5REksT0FBekQsQ0FBUDtBQUEyRTs7O2dDQUVoRkEsTyxFQUFTO0FBQUUsYUFBT04sb0JBQW9CUSxXQUFwQixDQUFnQ04sNkJBQWhDLEVBQStESSxPQUEvRCxDQUFQO0FBQWlGOzs7O0VBWHJFTixtQjs7QUFjNUMsSUFBTVMsT0FBT1IsNEJBQWI7QUFBQSxJQUE0QztBQUN0Q1Msb0JBQW9CLHNCQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjViw2QkFBZCxFQUE2QztBQUMzQ08sWUFEMkM7QUFFM0NDO0FBRjJDLENBQTdDOztBQUtBRyxPQUFPQyxPQUFQLEdBQWlCWiw2QkFBakIiLCJmaWxlIjoibWlkZGxlT2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdHlwZXMnKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50KCkge1xuICAgIGNvbnN0IGluQ29tbWVudCA9IHRydWU7XG5cbiAgICByZXR1cm4gaW5Db21tZW50O1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ubWF0Y2goTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBtaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUeXBlLCAgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eKD86Lis/KD89XFwqXFwvKXwuKyQpLztcblxuT2JqZWN0LmFzc2lnbihNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XG4iXX0=