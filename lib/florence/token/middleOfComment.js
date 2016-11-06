'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/comment');

var MiddleOfCommentToken = function (_CommentToken) {
  _inherits(MiddleOfCommentToken, _CommentToken);

  function MiddleOfCommentToken() {
    _classCallCheck(this, MiddleOfCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfCommentToken, [{
    key: 'clone',
    value: function clone() {
      return _get(MiddleOfCommentToken.prototype.__proto__ || Object.getPrototypeOf(MiddleOfCommentToken.prototype), 'clone', this).call(this, MiddleOfCommentToken);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, line, middleOfCommentTokenLength) {
      var middleOfCommentTokenContent = content.substring(middleOfCommentTokenLength);

      content = middleOfCommentTokenContent; ///

      var middleOfCommentToken = new MiddleOfCommentToken(content, line);

      return middleOfCommentToken;
    }
  }]);

  return MiddleOfCommentToken;
}(CommentToken);

module.exports = MiddleOfCommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9taWRkbGVPZkNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIk1pZGRsZU9mQ29tbWVudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCIsIm1pZGRsZU9mQ29tbWVudFRva2VuQ29udGVudCIsInN1YnN0cmluZyIsIm1pZGRsZU9mQ29tbWVudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsNEJBQVIsQ0FBbkI7O0lBRU1DLG9COzs7Ozs7Ozs7Ozs0QkFDSTtBQUFFLCtJQUFtQkEsb0JBQW5CO0FBQTJDOzs7Z0NBRWxDQyxPLEVBQVNDLEksRUFBTUMsMEIsRUFBNEI7QUFDNUQsVUFBSUMsOEJBQThCSCxRQUFRSSxTQUFSLENBQWtCRiwwQkFBbEIsQ0FBbEM7O0FBRUFGLGdCQUFVRywyQkFBVixDQUg0RCxDQUdwQjs7QUFFeEMsVUFBSUUsdUJBQXVCLElBQUlOLG9CQUFKLENBQXlCQyxPQUF6QixFQUFrQ0MsSUFBbEMsQ0FBM0I7O0FBRUEsYUFBT0ksb0JBQVA7QUFDRDs7OztFQVhnQ1IsWTs7QUFjbkNTLE9BQU9DLE9BQVAsR0FBaUJSLG9CQUFqQiIsImZpbGUiOiJtaWRkbGVPZkNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4vY29tbWVudCcpO1xuXG5jbGFzcyBNaWRkbGVPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoTWlkZGxlT2ZDb21tZW50VG9rZW4pOyB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpIHtcbiAgICB2YXIgbWlkZGxlT2ZDb21tZW50VG9rZW5Db250ZW50ID0gY29udGVudC5zdWJzdHJpbmcobWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xuXG4gICAgY29udGVudCA9IG1pZGRsZU9mQ29tbWVudFRva2VuQ29udGVudDsgIC8vL1xuXG4gICAgdmFyIG1pZGRsZU9mQ29tbWVudFRva2VuID0gbmV3IE1pZGRsZU9mQ29tbWVudFRva2VuKGNvbnRlbnQsIGxpbmUpO1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mQ29tbWVudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZDb21tZW50VG9rZW47XG4iXX0=