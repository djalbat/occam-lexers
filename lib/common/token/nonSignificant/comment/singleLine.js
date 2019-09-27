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
    key: 'fromMatch',
    value: function fromMatch(match) {
      return NonSignificantToken.fromMatch(SingleLineCommentToken, match);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(SingleLineCommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return NonSignificantToken.fromWithinContent(SingleLineCommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return NonSignificantToken.positionWithinContent(SingleLineCommentToken, content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjb21tZW50VHlwZSIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsImNvbnRlbnQiLCJtYXRjaCIsImZyb21NYXRjaCIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxnQkFBUixDQUFkO0FBQUEsSUFDTUMsc0JBQXNCRCxRQUFRLCtCQUFSLENBRDVCOztJQUdRRSxXLEdBQWdCSCxLLENBQWhCRyxXOztJQUVGQyxzQjs7Ozs7Ozs7Ozs7MEJBQ0VDLEssRUFBT0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxtSkFBbUJGLEtBQW5CLEVBQTBCQyxhQUExQixFQUF5Q0MsV0FBekM7QUFBd0Q7OztrQ0FFckY7QUFDWixVQUFNQyxZQUFZLEtBQWxCOztBQUVBLGFBQU9BLFNBQVA7QUFDRDs7OzBCQUVZQyxPLEVBQVM7QUFBRSxhQUFPUCxvQkFBb0JRLEtBQXBCLENBQTBCTixzQkFBMUIsRUFBa0RLLE9BQWxELENBQVA7QUFBb0U7Ozs4QkFFM0VDLEssRUFBTztBQUFFLGFBQU9SLG9CQUFvQlMsU0FBcEIsQ0FBOEJQLHNCQUE5QixFQUFzRE0sS0FBdEQsQ0FBUDtBQUFzRTs7O2dDQUU3RUQsTyxFQUFTO0FBQUUsYUFBT1Asb0JBQW9CVSxXQUFwQixDQUFnQ1Isc0JBQWhDLEVBQXdESyxPQUF4RCxDQUFQO0FBQTBFOzs7c0NBRS9FQSxPLEVBQVM7QUFBRSxhQUFPUCxvQkFBb0JXLGlCQUFwQixDQUFzQ1Qsc0JBQXRDLEVBQThESyxPQUE5RCxDQUFQO0FBQWdGOzs7MENBRXZGQSxPLEVBQVM7QUFBRSxhQUFPUCxvQkFBb0JZLHFCQUFwQixDQUEwQ1Ysc0JBQTFDLEVBQWtFSyxPQUFsRSxDQUFQO0FBQW9GOzs7O0VBakJ6RlAsbUI7O0FBb0JyQyxJQUFNYSxPQUFPWixXQUFiO0FBQUEsSUFDTWEsb0JBQW9CLFNBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNkLHNCQUFkLEVBQXNDO0FBQ3BDVyxZQURvQztBQUVwQ0M7QUFGb0MsQ0FBdEM7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJoQixzQkFBakIiLCJmaWxlIjoic2luZ2xlTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi8uLi90eXBlcycpLFxuICAgICAgTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgY29tbWVudFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBTaW5nbGVMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50KCkge1xuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKFNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21NYXRjaChtYXRjaCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tTWF0Y2goU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgbWF0Y2gpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudChTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IGNvbW1lbnRUeXBlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcL1xcLy4qLztcblxuT2JqZWN0LmFzc2lnbihTaW5nbGVMaW5lQ29tbWVudFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaW5nbGVMaW5lQ29tbWVudFRva2VuO1xuIl19