'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    NonSignificantToken = require('../../../../token/nonSignificant');

var commentType = types.commentType;

var EntireMultiLineCommentToken = function (_NonSignificantToken) {
  _inherits(EntireMultiLineCommentToken, _NonSignificantToken);

  function EntireMultiLineCommentToken() {
    _classCallCheck(this, EntireMultiLineCommentToken);

    return _possibleConstructorReturn(this, (EntireMultiLineCommentToken.__proto__ || Object.getPrototypeOf(EntireMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(EntireMultiLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(EntireMultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(EntireMultiLineCommentToken.prototype), 'clone', this).call(this, EntireMultiLineCommentToken, startPosition, endPosition);
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
      return NonSignificantToken.match(EntireMultiLineCommentToken, content);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(EntireMultiLineCommentToken, content);
    }
  }]);

  return EntireMultiLineCommentToken;
}(NonSignificantToken);

var type = commentType,
    ///
regularExpression = /^\/\*.*\*\//;

Object.assign(EntireMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EntireMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjb21tZW50VHlwZSIsIkVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsImNvbnRlbnQiLCJtYXRjaCIsImZyb21Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsbUJBQVIsQ0FBZDtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSxrQ0FBUixDQUQ1Qjs7SUFHUUUsVyxHQUFnQkgsSyxDQUFoQkcsVzs7SUFFRkMsMkI7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLDZKQUFtQkYsMkJBQW5CLEVBQWdEQyxhQUFoRCxFQUErREMsV0FBL0Q7QUFBOEU7OztrQ0FFcEc7QUFDWixVQUFNQyxZQUFZLEtBQWxCOztBQUVBLGFBQU9BLFNBQVA7QUFDRDs7OzBCQUVZQyxPLEVBQVM7QUFBRSxhQUFPTixvQkFBb0JPLEtBQXBCLENBQTBCTCwyQkFBMUIsRUFBdURJLE9BQXZELENBQVA7QUFBeUU7OztnQ0FFOUVBLE8sRUFBUztBQUFFLGFBQU9OLG9CQUFvQlEsV0FBcEIsQ0FBZ0NOLDJCQUFoQyxFQUE2REksT0FBN0QsQ0FBUDtBQUErRTs7OztFQVhyRU4sbUI7O0FBYzFDLElBQU1TLE9BQU9SLFdBQWI7QUFBQSxJQUEyQjtBQUNyQlMsb0JBQW9CLGFBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNWLDJCQUFkLEVBQTJDO0FBQ3pDTyxZQUR5QztBQUV6Q0M7QUFGeUMsQ0FBM0M7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJaLDJCQUFqQiIsImZpbGUiOiJlbnRpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdHlwZXMnKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGNvbW1lbnRUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50KCkge1xuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBjb21tZW50VHlwZSwgIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcL1xcKi4qXFwqXFwvLztcblxuT2JqZWN0LmFzc2lnbihFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiJdfQ==