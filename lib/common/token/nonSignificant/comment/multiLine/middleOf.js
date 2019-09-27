'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    MultiLineCommentToken = require('../../comment/multiLine');

var commentType = types.commentType;

var MiddleOfMultiLineCommentToken = function (_MultiLineCommentToke) {
  _inherits(MiddleOfMultiLineCommentToken, _MultiLineCommentToke);

  function MiddleOfMultiLineCommentToken() {
    _classCallCheck(this, MiddleOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(MiddleOfMultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken.prototype), 'clone', this).call(this, MiddleOfMultiLineCommentToken, startPosition, endPosition);
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      var inComment = true;

      return inComment;
    }
  }], [{
    key: 'fromMatch',
    value: function fromMatch(match) {
      return MultiLineCommentToken.fromMatch(MiddleOfMultiLineCommentToken, match);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return MultiLineCommentToken.fromContent(MiddleOfMultiLineCommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return MultiLineCommentToken.fromWithinContent(MiddleOfMultiLineCommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return MultiLineCommentToken.positionWithinContent(MiddleOfMultiLineCommentToken, content);
    }
  }]);

  return MiddleOfMultiLineCommentToken;
}(MultiLineCommentToken);

var type = commentType; ///

Object.assign(MiddleOfMultiLineCommentToken, {
  type: type
});

module.exports = MiddleOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiY29tbWVudFR5cGUiLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsIm1hdGNoIiwiZnJvbU1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJ0eXBlIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsbUJBQVIsQ0FBZDtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSx5QkFBUixDQUQ5Qjs7SUFHUUUsVyxHQUFnQkgsSyxDQUFoQkcsVzs7SUFFRkMsNkI7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLGlLQUFtQkYsNkJBQW5CLEVBQWtEQyxhQUFsRCxFQUFpRUMsV0FBakU7QUFBZ0Y7OztrQ0FFdEc7QUFDWixVQUFNQyxZQUFZLElBQWxCOztBQUVBLGFBQU9BLFNBQVA7QUFDRDs7OzhCQUVnQkMsSyxFQUFPO0FBQUUsYUFBT04sc0JBQXNCTyxTQUF0QixDQUFnQ0wsNkJBQWhDLEVBQStESSxLQUEvRCxDQUFQO0FBQStFOzs7Z0NBRXRGRSxPLEVBQVM7QUFBRSxhQUFPUixzQkFBc0JTLFdBQXRCLENBQWtDUCw2QkFBbEMsRUFBaUVNLE9BQWpFLENBQVA7QUFBbUY7OztzQ0FFeEZBLE8sRUFBUztBQUFFLGFBQU9SLHNCQUFzQlUsaUJBQXRCLENBQXdDUiw2QkFBeEMsRUFBdUVNLE9BQXZFLENBQVA7QUFBeUY7OzswQ0FFaEdBLE8sRUFBUztBQUFFLGFBQU9SLHNCQUFzQlcscUJBQXRCLENBQTRDVCw2QkFBNUMsRUFBMkVNLE9BQTNFLENBQVA7QUFBNkY7Ozs7RUFmM0ZSLHFCOztBQWtCNUMsSUFBTVksT0FBT1gsV0FBYixDLENBQTJCOztBQUUzQlksT0FBT0MsTUFBUCxDQUFjWiw2QkFBZCxFQUE2QztBQUMzQ1U7QUFEMkMsQ0FBN0M7O0FBSUFHLE9BQU9DLE9BQVAsR0FBaUJkLDZCQUFqQiIsImZpbGUiOiJtaWRkbGVPZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi90eXBlcycpLFxuICAgICAgTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbWVudC9tdWx0aUxpbmUnKTtcblxuY29uc3QgeyBjb21tZW50VHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTXVsdGlMaW5lQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWF0Y2gobWF0Y2gpIHsgcmV0dXJuIE11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tTWF0Y2goTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIG1hdGNoKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBNdWx0aUxpbmVDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudChNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE11bHRpTGluZUNvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBjb21tZW50VHlwZTsgIC8vL1xuXG5PYmplY3QuYXNzaWduKE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCB7XG4gIHR5cGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuIl19