'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var significant = false;

var NonSignificantToken = function (_Token) {
  _inherits(NonSignificantToken, _Token);

  function NonSignificantToken() {
    _classCallCheck(this, NonSignificantToken);

    return _possibleConstructorReturn(this, (NonSignificantToken.__proto__ || Object.getPrototypeOf(NonSignificantToken)).apply(this, arguments));
  }

  _createClass(NonSignificantToken, [{
    key: 'isCommentToken',
    value: function isCommentToken() {
      var commentToken = false;

      return commentToken;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Class, content) {
      return Token.fromContent(Class, content, significant);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      return Token.fromWithinContent(Class, content, significant);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      return Token.positionWithinContent(Class, content);
    }
  }]);

  return NonSignificantToken;
}(Token);

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwic2lnbmlmaWNhbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiY29tbWVudFRva2VuIiwiQ2xhc3MiLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7O0FBRUEsSUFBTUMsY0FBYyxLQUFwQjs7SUFFTUMsbUI7Ozs7Ozs7Ozs7O3FDQUNhO0FBQ2YsVUFBTUMsZUFBZSxLQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7OztnQ0FFa0JDLEssRUFBT0MsTyxFQUFTO0FBQUUsYUFBT04sTUFBTU8sV0FBTixDQUFrQkYsS0FBbEIsRUFBeUJDLE9BQXpCLEVBQWtDSixXQUFsQyxDQUFQO0FBQXdEOzs7c0NBRXBFRyxLLEVBQU9DLE8sRUFBUztBQUFFLGFBQU9OLE1BQU1RLGlCQUFOLENBQXdCSCxLQUF4QixFQUErQkMsT0FBL0IsRUFBd0NKLFdBQXhDLENBQVA7QUFBOEQ7OzswQ0FFNUVHLEssRUFBT0MsTyxFQUFTO0FBQUUsYUFBT04sTUFBTVMscUJBQU4sQ0FBNEJKLEtBQTVCLEVBQW1DQyxPQUFuQyxDQUFQO0FBQXNEOzs7O0VBWHJFTixLOztBQWNsQ1UsT0FBT0MsT0FBUCxHQUFpQlIsbUJBQWpCIiwiZmlsZSI6Im5vblNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNvbnN0IHNpZ25pZmljYW50ID0gZmFsc2U7XG5cbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IGNvbW1lbnRUb2tlbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gVG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkgOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==