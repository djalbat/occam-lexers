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
    key: 'match',
    value: function match(content) {
      return MultiLineCommentToken.match(EntireMultiLineCommentToken, content);
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImNvbW1lbnRUeXBlIiwiRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaW5Db21tZW50IiwiY29udGVudCIsIm1hdGNoIiwiZnJvbU1hdGNoIiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLG1CQUFSLENBQWQ7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEseUJBQVIsQ0FEOUI7O0lBR1FFLFcsR0FBZ0JILEssQ0FBaEJHLFc7O0lBRUZDLDJCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSw2SkFBbUJGLDJCQUFuQixFQUFnREMsYUFBaEQsRUFBK0RDLFdBQS9EO0FBQThFOzs7a0NBRXBHO0FBQ1osVUFBTUMsWUFBWSxLQUFsQjs7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7OzswQkFFWUMsTyxFQUFTO0FBQUUsYUFBT04sc0JBQXNCTyxLQUF0QixDQUE0QkwsMkJBQTVCLEVBQXlESSxPQUF6RCxDQUFQO0FBQTJFOzs7OEJBRWxGQyxLLEVBQU87QUFBRSxhQUFPUCxzQkFBc0JRLFNBQXRCLENBQWdDTiwyQkFBaEMsRUFBNkRLLEtBQTdELENBQVA7QUFBNkU7OztnQ0FFcEZELE8sRUFBUztBQUFFLGFBQU9OLHNCQUFzQlMsV0FBdEIsQ0FBa0NQLDJCQUFsQyxFQUErREksT0FBL0QsQ0FBUDtBQUFpRjs7O3NDQUV0RkEsTyxFQUFTO0FBQUUsYUFBT04sc0JBQXNCVSxpQkFBdEIsQ0FBd0NSLDJCQUF4QyxFQUFxRUksT0FBckUsQ0FBUDtBQUF1Rjs7OzBDQUU5RkEsTyxFQUFTO0FBQUUsYUFBT04sc0JBQXNCVyxxQkFBdEIsQ0FBNENULDJCQUE1QyxFQUF5RUksT0FBekUsQ0FBUDtBQUEyRjs7OztFQWpCM0ZOLHFCOztBQW9CMUMsSUFBTVksT0FBT1gsV0FBYjtBQUFBLElBQTJCO0FBQ3JCWSxvQkFBb0IsYUFEMUI7O0FBR0FDLE9BQU9DLE1BQVAsQ0FBY2IsMkJBQWQsRUFBMkM7QUFDekNVLFlBRHlDO0FBRXpDQztBQUZ5QyxDQUEzQzs7QUFLQUcsT0FBT0MsT0FBUCxHQUFpQmYsMkJBQWpCIiwiZmlsZSI6ImVudGlyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi90eXBlcycpLFxuICAgICAgTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbWVudC9tdWx0aUxpbmUnKTtcblxuY29uc3QgeyBjb21tZW50VHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIE11bHRpTGluZUNvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50KCkge1xuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tTWF0Y2gobWF0Y2gpIHsgcmV0dXJuIE11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tTWF0Y2goRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuLCBtYXRjaCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50KEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE11bHRpTGluZUNvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gY29tbWVudFR5cGUsICAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC9cXCouKlxcKlxcLy87XG5cbk9iamVjdC5hc3NpZ24oRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbnRpcmVNdWx0aUxpbmVDb21tZW50VG9rZW47XG4iXX0=