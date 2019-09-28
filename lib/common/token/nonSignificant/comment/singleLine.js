'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../types'),
    NonSignificantToken = require('../../../token/nonSignificant');

var commentType = types.commentType;

var SingleLineCommentToken = function (_NonSignificantToken) {
  _inherits(SingleLineCommentToken, _NonSignificantToken);

  function SingleLineCommentToken() {
    _classCallCheck(this, SingleLineCommentToken);

    return _possibleConstructorReturn(this, (SingleLineCommentToken.__proto__ || Object.getPrototypeOf(SingleLineCommentToken)).apply(this, arguments));
  }

  _createClass(SingleLineCommentToken, [{
    key: 'clone',
    value: function clone(Class, startPosition, endPosition) {
      return _get(SingleLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(SingleLineCommentToken.prototype), 'clone', this).call(this, Class, startPosition, endPosition);
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      var inComment = false;

      return inComment;
    }
  }], [{
    key: 'match',
    value: function match(content) {
      return NonSignificantToken.match(SingleLineCommentToken, content);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(SingleLineCommentToken, content);
    }
  }]);

  return SingleLineCommentToken;
}(NonSignificantToken);

var type = commentType,
    regularExpression = /^\/\/.*/;

Object.assign(SingleLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = SingleLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjb21tZW50VHlwZSIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsImNvbnRlbnQiLCJtYXRjaCIsImZyb21Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsZ0JBQVIsQ0FBZDtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSwrQkFBUixDQUQ1Qjs7SUFHUUUsVyxHQUFnQkgsSyxDQUFoQkcsVzs7SUFFRkMsc0I7Ozs7Ozs7Ozs7OzBCQUNFQyxLLEVBQU9DLGEsRUFBZUMsVyxFQUFhO0FBQUUsbUpBQW1CRixLQUFuQixFQUEwQkMsYUFBMUIsRUFBeUNDLFdBQXpDO0FBQXdEOzs7a0NBRXJGO0FBQ1osVUFBTUMsWUFBWSxLQUFsQjs7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7OzswQkFFWUMsTyxFQUFTO0FBQUUsYUFBT1Asb0JBQW9CUSxLQUFwQixDQUEwQk4sc0JBQTFCLEVBQWtESyxPQUFsRCxDQUFQO0FBQW9FOzs7Z0NBRXpFQSxPLEVBQVM7QUFBRSxhQUFPUCxvQkFBb0JTLFdBQXBCLENBQWdDUCxzQkFBaEMsRUFBd0RLLE9BQXhELENBQVA7QUFBMEU7Ozs7RUFYckVQLG1COztBQWNyQyxJQUFNVSxPQUFPVCxXQUFiO0FBQUEsSUFDTVUsb0JBQW9CLFNBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNYLHNCQUFkLEVBQXNDO0FBQ3BDUSxZQURvQztBQUVwQ0M7QUFGb0MsQ0FBdEM7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJiLHNCQUFqQiIsImZpbGUiOiJzaW5nbGVMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3R5cGVzJyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBjb21tZW50VHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgaXNJbkNvbW1lbnQoKSB7XG4gICAgY29uc3QgaW5Db21tZW50ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gaW5Db21tZW50O1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ubWF0Y2goU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gY29tbWVudFR5cGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvXFwvLiovO1xuXG5PYmplY3QuYXNzaWduKFNpbmdsZUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbmdsZUxpbmVDb21tZW50VG9rZW47XG4iXX0=