'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    NonSignificantToken = require('../../../../token/nonSignificant');

var startOfMultiLineCommentType = types.startOfMultiLineCommentType;

var StartOfMultiLineCommentToken = function (_NonSignificantToken) {
  _inherits(StartOfMultiLineCommentToken, _NonSignificantToken);

  function StartOfMultiLineCommentToken() {
    _classCallCheck(this, StartOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (StartOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(StartOfMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(StartOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(StartOfMultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(StartOfMultiLineCommentToken.prototype), 'clone', this).call(this, StartOfMultiLineCommentToken, startPosition, endPosition);
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
      return NonSignificantToken.match(StartOfMultiLineCommentToken, content);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(StartOfMultiLineCommentToken, content);
    }
  }]);

  return StartOfMultiLineCommentToken;
}(NonSignificantToken);

var type = startOfMultiLineCommentType,
    ///
regularExpression = /^\/\*/;

Object.assign(StartOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = StartOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZi5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJOb25TaWduaWZpY2FudFRva2VuIiwic3RhcnRPZk11bHRpTGluZUNvbW1lbnRUeXBlIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsImNvbnRlbnQiLCJtYXRjaCIsImZyb21Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsbUJBQVIsQ0FBZDtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSxrQ0FBUixDQUQ1Qjs7SUFHUUUsMkIsR0FBZ0NILEssQ0FBaENHLDJCOztJQUVGQyw0Qjs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsK0pBQW1CRiw0QkFBbkIsRUFBaURDLGFBQWpELEVBQWdFQyxXQUFoRTtBQUErRTs7O2tDQUVyRztBQUNaLFVBQU1DLFlBQVksSUFBbEI7O0FBRUEsYUFBT0EsU0FBUDtBQUNEOzs7MEJBRVlDLE8sRUFBUztBQUFFLGFBQU9OLG9CQUFvQk8sS0FBcEIsQ0FBMEJMLDRCQUExQixFQUF3REksT0FBeEQsQ0FBUDtBQUEwRTs7O2dDQUUvRUEsTyxFQUFTO0FBQUUsYUFBT04sb0JBQW9CUSxXQUFwQixDQUFnQ04sNEJBQWhDLEVBQThESSxPQUE5RCxDQUFQO0FBQWdGOzs7O0VBWHJFTixtQjs7QUFjM0MsSUFBTVMsT0FBT1IsMkJBQWI7QUFBQSxJQUEyQztBQUNyQ1Msb0JBQW9CLE9BRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNWLDRCQUFkLEVBQTRDO0FBQzFDTyxZQUQwQztBQUUxQ0M7QUFGMEMsQ0FBNUM7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJaLDRCQUFqQiIsImZpbGUiOiJzdGFydE9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3R5cGVzJyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VHlwZSwgIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcL1xcKi87XG5cbk9iamVjdC5hc3NpZ24oU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiJdfQ==