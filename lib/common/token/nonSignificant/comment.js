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
    value: function clone(Class, startPosition, endPosition) {
      return _get(CommentToken.prototype.__proto__ || Object.getPrototypeOf(CommentToken.prototype), 'clone', this).call(this, Class, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Class, content) {
      return NonSignificantToken.fromContent(Class, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      return NonSignificantToken.fromWithinContent(Class, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      return NonSignificantToken.positionWithinContent(Class, content);
    }
  }]);

  return CommentToken;
}(NonSignificantToken);

var type = 'comment';

Object.assign(CommentToken, {
  type: type
});

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC5qcyJdLCJuYW1lcyI6WyJOb25TaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIkNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29tbWVudFRva2VuQ29udGVudCIsImZyb21Db250ZW50IiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsc0JBQXNCQyxRQUFRLG1CQUFSLENBQTVCOztJQUVNQyxZOzs7Ozs7Ozs7OztxQ0FDYTtBQUNmLFVBQU1DLGVBQWUsSUFBckI7O0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7MEJBRUtBLFksRUFBYztBQUNsQixVQUFJQyxVQUFVLEtBQUtDLFVBQUwsRUFBZDs7QUFFQSxVQUFNQyxzQkFBc0JILGFBQWFFLFVBQWIsRUFBNUI7O0FBRUFELHFCQUFhQSxPQUFiLEdBQXVCRSxtQkFBdkIsQ0FMa0IsQ0FLNEI7O0FBRTlDSCxxQkFBZUgsb0JBQW9CTyxXQUFwQixDQUFnQ0wsWUFBaEMsRUFBOENFLE9BQTlDLENBQWY7O0FBRUEsYUFBT0QsWUFBUDtBQUNEOzs7MEJBRUtLLEssRUFBT0MsYSxFQUFlQyxXLEVBQWE7QUFBRSwrSEFBbUJGLEtBQW5CLEVBQTBCQyxhQUExQixFQUF5Q0MsV0FBekM7QUFBd0Q7OztnQ0FFaEZGLEssRUFBT0osTyxFQUFTO0FBQUUsYUFBT0osb0JBQW9CTyxXQUFwQixDQUFnQ0MsS0FBaEMsRUFBdUNKLE9BQXZDLENBQVA7QUFBeUQ7OztzQ0FFckVJLEssRUFBT0osTyxFQUFTO0FBQUUsYUFBT0osb0JBQW9CVyxpQkFBcEIsQ0FBc0NILEtBQXRDLEVBQTZDSixPQUE3QyxDQUFQO0FBQStEOzs7MENBRTdFSSxLLEVBQU9KLE8sRUFBUztBQUFFLGFBQU9KLG9CQUFvQlkscUJBQXBCLENBQTBDSixLQUExQyxFQUFpREosT0FBakQsQ0FBUDtBQUFtRTs7OztFQXpCekZKLG1COztBQTRCM0IsSUFBTWEsT0FBTyxTQUFiOztBQUVBQyxPQUFPQyxNQUFQLENBQWNiLFlBQWQsRUFBNEI7QUFDMUJXLFFBQU1BO0FBRG9CLENBQTVCOztBQUlBRyxPQUFPQyxPQUFQLEdBQWlCZixZQUFqQiIsImZpbGUiOiJjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IGNvbW1lbnRUb2tlbiA9IHRydWU7XG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgbWVyZ2UoY29tbWVudFRva2VuKSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICBcbiAgICBjb25zdCBjb21tZW50VG9rZW5Db250ZW50ID0gY29tbWVudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7Y29tbWVudFRva2VuQ29udGVudH1gOyAvLy9cblxuICAgIGNvbW1lbnRUb2tlbiA9IE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ29tbWVudFRva2VuLCBjb250ZW50KTtcblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gJ2NvbW1lbnQnO1xuXG5PYmplY3QuYXNzaWduKENvbW1lbnRUb2tlbiwge1xuICB0eXBlOiB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW47XG4iXX0=