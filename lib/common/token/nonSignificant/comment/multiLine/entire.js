'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    MultiLineCommentToken = require('../../comment/multiLine');

var commentType = types.commentType;

var EntireMultiLineCommentToken = function (_MultiLineCommentToke) {
  _inherits(EntireMultiLineCommentToken, _MultiLineCommentToke);

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
    key: 'fromMatch',
    value: function fromMatch(match) {
      return MultiLineCommentToken.fromMatch(EntireMultiLineCommentToken, match);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return MultiLineCommentToken.fromContent(EntireMultiLineCommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return MultiLineCommentToken.fromWithinContent(EntireMultiLineCommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return MultiLineCommentToken.positionWithinContent(EntireMultiLineCommentToken, content);
    }
  }]);

  return EntireMultiLineCommentToken;
}(MultiLineCommentToken);

var type = commentType,
    ///
regularExpression = /^\/\*.*\*\//;

Object.assign(EntireMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EntireMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImNvbW1lbnRUeXBlIiwiRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaW5Db21tZW50IiwibWF0Y2giLCJmcm9tTWF0Y2giLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLG1CQUFSLENBQWQ7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEseUJBQVIsQ0FEOUI7O0lBR1FFLFcsR0FBZ0JILEssQ0FBaEJHLFc7O0lBRUZDLDJCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSw2SkFBbUJGLDJCQUFuQixFQUFnREMsYUFBaEQsRUFBK0RDLFdBQS9EO0FBQThFOzs7a0NBRXBHO0FBQ1osVUFBTUMsWUFBWSxLQUFsQjs7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7Ozs4QkFFZ0JDLEssRUFBTztBQUFFLGFBQU9OLHNCQUFzQk8sU0FBdEIsQ0FBZ0NMLDJCQUFoQyxFQUE2REksS0FBN0QsQ0FBUDtBQUE2RTs7O2dDQUVwRkUsTyxFQUFTO0FBQUUsYUFBT1Isc0JBQXNCUyxXQUF0QixDQUFrQ1AsMkJBQWxDLEVBQStETSxPQUEvRCxDQUFQO0FBQWlGOzs7c0NBRXRGQSxPLEVBQVM7QUFBRSxhQUFPUixzQkFBc0JVLGlCQUF0QixDQUF3Q1IsMkJBQXhDLEVBQXFFTSxPQUFyRSxDQUFQO0FBQXVGOzs7MENBRTlGQSxPLEVBQVM7QUFBRSxhQUFPUixzQkFBc0JXLHFCQUF0QixDQUE0Q1QsMkJBQTVDLEVBQXlFTSxPQUF6RSxDQUFQO0FBQTJGOzs7O0VBZjNGUixxQjs7QUFrQjFDLElBQU1ZLE9BQU9YLFdBQWI7QUFBQSxJQUEyQjtBQUNyQlksb0JBQW9CLGFBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNiLDJCQUFkLEVBQTJDO0FBQ3pDVSxZQUR5QztBQUV6Q0M7QUFGeUMsQ0FBM0M7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJmLDJCQUFqQiIsImZpbGUiOiJlbnRpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdHlwZXMnKSxcbiAgICAgIE11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1lbnQvbXVsdGlMaW5lJyk7XG5cbmNvbnN0IHsgY29tbWVudFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBNdWx0aUxpbmVDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hdGNoKG1hdGNoKSB7IHJldHVybiBNdWx0aUxpbmVDb21tZW50VG9rZW4uZnJvbU1hdGNoKEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiwgbWF0Y2gpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudChFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBNdWx0aUxpbmVDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IGNvbW1lbnRUeXBlLCAgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvXFwqLipcXCpcXC8vO1xuXG5PYmplY3QuYXNzaWduKEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuIl19