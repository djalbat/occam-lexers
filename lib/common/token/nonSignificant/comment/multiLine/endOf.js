'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    MultiLineCommentToken = require('../../comment/multiLine');

var commentType = types.commentType;

var EndOfMultiLineCommentToken = function (_MultiLineCommentToke) {
  _inherits(EndOfMultiLineCommentToken, _MultiLineCommentToke);

  function EndOfMultiLineCommentToken() {
    _classCallCheck(this, EndOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (EndOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(EndOfMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(EndOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(EndOfMultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(EndOfMultiLineCommentToken.prototype), 'clone', this).call(this, EndOfMultiLineCommentToken, startPosition, endPosition);
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
      return MultiLineCommentToken.fromMatch(EndOfMultiLineCommentToken, match);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return MultiLineCommentToken.fromContent(EndOfMultiLineCommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return MultiLineCommentToken.fromWithinContent(EndOfMultiLineCommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return MultiLineCommentToken.positionWithinContent(EndOfMultiLineCommentToken, content);
    }
  }]);

  return EndOfMultiLineCommentToken;
}(MultiLineCommentToken);

var type = commentType,
    ///
regularExpression = /\*\//;

Object.assign(EndOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiY29tbWVudFR5cGUiLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsIm1hdGNoIiwiZnJvbU1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxtQkFBUixDQUFkO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLHlCQUFSLENBRDlCOztJQUdRRSxXLEdBQWdCSCxLLENBQWhCRyxXOztJQUVGQywwQjs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsMkpBQW1CRiwwQkFBbkIsRUFBK0NDLGFBQS9DLEVBQThEQyxXQUE5RDtBQUE2RTs7O2tDQUVuRztBQUNaLFVBQU1DLFlBQVksS0FBbEI7O0FBRUEsYUFBT0EsU0FBUDtBQUNEOzs7OEJBRWdCQyxLLEVBQU87QUFBRSxhQUFPTixzQkFBc0JPLFNBQXRCLENBQWdDTCwwQkFBaEMsRUFBNERJLEtBQTVELENBQVA7QUFBNEU7OztnQ0FFbkZFLE8sRUFBUztBQUFFLGFBQU9SLHNCQUFzQlMsV0FBdEIsQ0FBa0NQLDBCQUFsQyxFQUE4RE0sT0FBOUQsQ0FBUDtBQUFnRjs7O3NDQUVyRkEsTyxFQUFTO0FBQUUsYUFBT1Isc0JBQXNCVSxpQkFBdEIsQ0FBd0NSLDBCQUF4QyxFQUFvRU0sT0FBcEUsQ0FBUDtBQUFzRjs7OzBDQUU3RkEsTyxFQUFTO0FBQUUsYUFBT1Isc0JBQXNCVyxxQkFBdEIsQ0FBNENULDBCQUE1QyxFQUF3RU0sT0FBeEUsQ0FBUDtBQUEwRjs7OztFQWYzRlIscUI7O0FBa0J6QyxJQUFNWSxPQUFPWCxXQUFiO0FBQUEsSUFBMkI7QUFDckJZLG9CQUFvQixNQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjYiwwQkFBZCxFQUEwQztBQUN4Q1UsWUFEd0M7QUFFeENDO0FBRndDLENBQTFDOztBQUtBRyxPQUFPQyxPQUFQLEdBQWlCZiwwQkFBakIiLCJmaWxlIjoiZW5kT2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdHlwZXMnKSxcbiAgICAgIE11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1lbnQvbXVsdGlMaW5lJyk7XG5cbmNvbnN0IHsgY29tbWVudFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIE11bHRpTGluZUNvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgaXNJbkNvbW1lbnQoKSB7XG4gICAgY29uc3QgaW5Db21tZW50ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gaW5Db21tZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXRjaChtYXRjaCkgeyByZXR1cm4gTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21NYXRjaChFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgbWF0Y2gpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50KEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTXVsdGlMaW5lQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IGNvbW1lbnRUeXBlLCAgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9cXCpcXC8vO1xuXG5PYmplY3QuYXNzaWduKEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiJdfQ==