'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentUtilities = require('../../../utilities/content'),
    NonSignificantToken = require('../nonSignificant');

var sanitiseContent = contentUtilities.sanitiseContent;

var CommentToken = function (_NonSignificantToken) {
  _inherits(CommentToken, _NonSignificantToken);

  function CommentToken() {
    _classCallCheck(this, CommentToken);

    return _possibleConstructorReturn(this, (CommentToken.__proto__ || Object.getPrototypeOf(CommentToken)).apply(this, arguments));
  }

  _createClass(CommentToken, [{
    key: 'merge',
    value: function merge(commentToken) {
      var content = this.getContent();

      var line = this.getLine(),
          commentTokenContent = commentToken.getContent();

      content += commentTokenContent;

      commentToken = CommentToken.fromContentAndLine(content, line); ///

      return commentToken;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(CommentToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CommentToken;
      var token = arguments[1];
      var startPosition = arguments[2];
      var endPosition = arguments[3];
      return NonSignificantToken.clone(Class, token, startPosition, endPosition);
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(Class, content, line) {
      if (line === undefined) {
        line = content;
        content = Class;
        Class = CommentToken;
      }

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      html = '<span class="comment">' + innerHTML + '</span>',
          commentToken = new Class(content, line, html);

      return commentToken;
    }
  }]);

  return CommentToken;
}(NonSignificantToken);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC5qcyJdLCJuYW1lcyI6WyJjb250ZW50VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJzYW5pdGlzZUNvbnRlbnQiLCJDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxpbmUiLCJnZXRMaW5lIiwiY29tbWVudFRva2VuQ29udGVudCIsImZyb21Db250ZW50QW5kTGluZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiQ2xhc3MiLCJ0b2tlbiIsInVuZGVmaW5lZCIsInNhbml0aXNlZENvbnRlbnQiLCJpbm5lckhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUJDLFFBQVEsNEJBQVIsQ0FBekI7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEsbUJBQVIsQ0FENUI7O0lBR1FFLGUsR0FBb0JILGdCLENBQXBCRyxlOztJQUVGQyxZOzs7Ozs7Ozs7OzswQkFDRUMsWSxFQUFjO0FBQ2xCLFVBQUlDLFVBQVUsS0FBS0MsVUFBTCxFQUFkOztBQUVBLFVBQU1DLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUMsc0JBQXNCTCxhQUFhRSxVQUFiLEVBRDVCOztBQUdBRCxpQkFBV0ksbUJBQVg7O0FBRUFMLHFCQUFlRCxhQUFhTyxrQkFBYixDQUFnQ0wsT0FBaEMsRUFBeUNFLElBQXpDLENBQWYsQ0FSa0IsQ0FROEM7O0FBRWhFLGFBQU9ILFlBQVA7QUFDRDs7OzBCQUVLTyxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9ULGFBQWFVLEtBQWIsQ0FBbUJWLFlBQW5CLEVBQWlDLElBQWpDLEVBQXVDUSxhQUF2QyxFQUFzREMsV0FBdEQsQ0FBUDtBQUE0RTs7OzRCQUUxQztBQUFBLFVBQXpERSxLQUF5RCx1RUFBakRYLFlBQWlEO0FBQUEsVUFBbkNZLEtBQW1DO0FBQUEsVUFBNUJKLGFBQTRCO0FBQUEsVUFBYkMsV0FBYTtBQUFFLGFBQU9YLG9CQUFvQlksS0FBcEIsQ0FBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3Q0osYUFBeEMsRUFBdURDLFdBQXZELENBQVA7QUFBNEU7Ozt1Q0FFMUhFLEssRUFBT1QsTyxFQUFTRSxJLEVBQU07QUFDOUMsVUFBSUEsU0FBU1MsU0FBYixFQUF3QjtBQUN0QlQsZUFBT0YsT0FBUDtBQUNBQSxrQkFBVVMsS0FBVjtBQUNBQSxnQkFBUVgsWUFBUjtBQUNEOztBQUVELFVBQU1jLG1CQUFtQmYsZ0JBQWdCRyxPQUFoQixDQUF6QjtBQUFBLFVBQ01hLFlBQVlELGdCQURsQjtBQUFBLFVBQ29DO0FBQzlCRSx3Q0FBZ0NELFNBQWhDLFlBRk47QUFBQSxVQUdNZCxlQUFlLElBQUlVLEtBQUosQ0FBVVQsT0FBVixFQUFtQkUsSUFBbkIsRUFBeUJZLElBQXpCLENBSHJCOztBQUtBLGFBQU9mLFlBQVA7QUFDRDs7OztFQS9Cd0JILG1COztBQWtDM0JtQixPQUFPQyxPQUFQLEdBQWlCbEIsWUFBakIiLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29udGVudFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9jb250ZW50JyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBzYW5pdGlzZUNvbnRlbnQgfSA9IGNvbnRlbnRVdGlsaXRpZXM7XG5cbmNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBtZXJnZShjb21tZW50VG9rZW4pIHtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIFxuICAgIGNvbnN0IGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgICBjb21tZW50VG9rZW5Db250ZW50ID0gY29tbWVudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgKz0gY29tbWVudFRva2VuQ29udGVudDtcblxuICAgIGNvbW1lbnRUb2tlbiA9IENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7ICAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKENvbW1lbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzID0gQ29tbWVudFRva2VuLCB0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUoQ2xhc3MsIHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUpIHtcbiAgICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsaW5lID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gQ29tbWVudFRva2VuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCJjb21tZW50XCI+JHtpbm5lckhUTUx9PC9zcGFuPmAsXG4gICAgICAgICAgY29tbWVudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiJdfQ==