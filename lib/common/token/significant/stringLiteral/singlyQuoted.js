'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../types'),
    StringLiteralToken = require('../../significant/stringLiteral');

var stringLiteralType = types.stringLiteralType;

var SinglyQuotedStringLiteralToken = function (_StringLiteralToken) {
  _inherits(SinglyQuotedStringLiteralToken, _StringLiteralToken);

  function SinglyQuotedStringLiteralToken() {
    _classCallCheck(this, SinglyQuotedStringLiteralToken);

    return _possibleConstructorReturn(this, (SinglyQuotedStringLiteralToken.__proto__ || Object.getPrototypeOf(SinglyQuotedStringLiteralToken)).apply(this, arguments));
  }

  _createClass(SinglyQuotedStringLiteralToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(SinglyQuotedStringLiteralToken.prototype.__proto__ || Object.getPrototypeOf(SinglyQuotedStringLiteralToken.prototype), 'clone', this).call(this, SinglyQuotedStringLiteralToken, startPosition, endPosition);
    }
  }], [{
    key: 'match',
    value: function match(content) {
      return StringLiteralToken.match(SinglyQuotedStringLiteralToken, content);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return StringLiteralToken.fromContent(SinglyQuotedStringLiteralToken, content);
    }
  }]);

  return SinglyQuotedStringLiteralToken;
}(StringLiteralToken);

var type = stringLiteralType,
    ///
regularExpression = /^'(?:\\.|[^'])*'/;

Object.assign(SinglyQuotedStringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = SinglyQuotedStringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiU3RyaW5nTGl0ZXJhbFRva2VuIiwic3RyaW5nTGl0ZXJhbFR5cGUiLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGdCQUFSLENBQWQ7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsaUNBQVIsQ0FEM0I7O0lBR1FFLGlCLEdBQXNCSCxLLENBQXRCRyxpQjs7SUFFRkMsOEI7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLG1LQUFtQkYsOEJBQW5CLEVBQW1EQyxhQUFuRCxFQUFrRUMsV0FBbEU7QUFBaUY7OzswQkFFeEdDLE8sRUFBUztBQUFFLGFBQU9MLG1CQUFtQk0sS0FBbkIsQ0FBeUJKLDhCQUF6QixFQUF5REcsT0FBekQsQ0FBUDtBQUEyRTs7O2dDQUVoRkEsTyxFQUFTO0FBQUUsYUFBT0wsbUJBQW1CTyxXQUFuQixDQUErQkwsOEJBQS9CLEVBQStERyxPQUEvRCxDQUFQO0FBQWlGOzs7O0VBTHBFTCxrQjs7QUFRN0MsSUFBTVEsT0FBT1AsaUJBQWI7QUFBQSxJQUFnQztBQUMxQlEsb0JBQW9CLGtCQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjVCw4QkFBZCxFQUE4QztBQUM1Q00sWUFENEM7QUFFNUNDO0FBRjRDLENBQTlDOztBQUtBRyxPQUFPQyxPQUFQLEdBQWlCWCw4QkFBakIiLCJmaWxlIjoic2luZ2x5UXVvdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3R5cGVzJyksXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi8uLi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsJyk7XG5cbmNvbnN0IHsgc3RyaW5nTGl0ZXJhbFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTdHJpbmdMaXRlcmFsVG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLmZyb21Db250ZW50KFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IHN0cmluZ0xpdGVyYWxUeXBlLCAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL14nKD86XFxcXC58W14nXSkqJy87XG5cbk9iamVjdC5hc3NpZ24oU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XG4iXX0=