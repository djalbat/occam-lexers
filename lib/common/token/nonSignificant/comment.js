'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonSignificantToken = require('../nonSignificant');

var CommentToken = function (_NonSignificantToken) {
  _inherits(CommentToken, _NonSignificantToken);

  function CommentToken() {
    _classCallCheck(this, CommentToken);

    return _possibleConstructorReturn(this, (CommentToken.__proto__ || Object.getPrototypeOf(CommentToken)).apply(this, arguments));
  }

  _createClass(CommentToken, [{
    key: 'isCommentToken',
    value: function isCommentToken() {
      var commentToken = true;

      return commentToken;
    }
  }, {
    key: 'merge',
    value: function merge(commentToken) {
      var content = this.getContent();

      var commentTokenContent = commentToken.getContent();

      content = '' + content + commentTokenContent; ///

      commentToken = NonSignificantToken.fromContent(CommentToken, content);

      return commentToken;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(CommentToken.prototype.__proto__ || Object.getPrototypeOf(CommentToken.prototype), 'clone', this).call(this, CommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return SignificantToken.fromContent(CommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return SignificantToken.fromWithinContent(CommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return SignificantToken.positionWithinContent(CommentToken, content);
    }
  }]);

  return CommentToken;
}(NonSignificantToken);

var type = 'comment';

Object.assign(CommentToken, {
  type: type
});

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC5qcyJdLCJuYW1lcyI6WyJOb25TaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIkNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29tbWVudFRva2VuQ29udGVudCIsImZyb21Db250ZW50Iiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwidHlwZSIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBNUI7O0lBRU1DLFk7Ozs7Ozs7Ozs7O3FDQUNhO0FBQ2YsVUFBTUMsZUFBZSxJQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7OzswQkFFS0EsWSxFQUFjO0FBQ2xCLFVBQUlDLFVBQVUsS0FBS0MsVUFBTCxFQUFkOztBQUVBLFVBQU1DLHNCQUFzQkgsYUFBYUUsVUFBYixFQUE1Qjs7QUFFQUQscUJBQWFBLE9BQWIsR0FBdUJFLG1CQUF2QixDQUxrQixDQUs0Qjs7QUFFOUNILHFCQUFlSCxvQkFBb0JPLFdBQXBCLENBQWdDTCxZQUFoQyxFQUE4Q0UsT0FBOUMsQ0FBZjs7QUFFQSxhQUFPRCxZQUFQO0FBQ0Q7OzswQkFFS0ssYSxFQUFlQyxXLEVBQWE7QUFBRSwrSEFBbUJQLFlBQW5CLEVBQWlDTSxhQUFqQyxFQUFnREMsV0FBaEQ7QUFBK0Q7OztnQ0FFaEZMLE8sRUFBUztBQUFFLGFBQU9NLGlCQUFpQkgsV0FBakIsQ0FBNkJMLFlBQTdCLEVBQTJDRSxPQUEzQyxDQUFQO0FBQTZEOzs7c0NBRWxFQSxPLEVBQVM7QUFBRSxhQUFPTSxpQkFBaUJDLGlCQUFqQixDQUFtQ1QsWUFBbkMsRUFBaURFLE9BQWpELENBQVA7QUFBbUU7OzswQ0FFMUVBLE8sRUFBUztBQUFFLGFBQU9NLGlCQUFpQkUscUJBQWpCLENBQXVDVixZQUF2QyxFQUFxREUsT0FBckQsQ0FBUDtBQUF1RTs7OztFQXpCdEZKLG1COztBQTRCM0IsSUFBTWEsT0FBTyxTQUFiOztBQUVBQyxPQUFPQyxNQUFQLENBQWNiLFlBQWQsRUFBNEI7QUFDMUJXLFFBQU1BO0FBRG9CLENBQTVCOztBQUlBRyxPQUFPQyxPQUFQLEdBQWlCZixZQUFqQiIsImZpbGUiOiJjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IGNvbW1lbnRUb2tlbiA9IHRydWU7XG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgbWVyZ2UoY29tbWVudFRva2VuKSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICBcbiAgICBjb25zdCBjb21tZW50VG9rZW5Db250ZW50ID0gY29tbWVudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7Y29tbWVudFRva2VuQ29udGVudH1gOyAvLy9cblxuICAgIGNvbW1lbnRUb2tlbiA9IE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ29tbWVudFRva2VuLCBjb250ZW50KTtcblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gJ2NvbW1lbnQnO1xuXG5PYmplY3QuYXNzaWduKENvbW1lbnRUb2tlbiwge1xuICB0eXBlOiB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW47XG4iXX0=