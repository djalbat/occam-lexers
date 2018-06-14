'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    SingleLineCommentToken = require('../../comment/singleLine');

var singleLineCommentType = types.singleLineCommentType;

var StartOfSingleLineCommentToken = function (_SingleLineCommentTok) {
  _inherits(StartOfSingleLineCommentToken, _SingleLineCommentTok);

  function StartOfSingleLineCommentToken() {
    _classCallCheck(this, StartOfSingleLineCommentToken);

    return _possibleConstructorReturn(this, (StartOfSingleLineCommentToken.__proto__ || Object.getPrototypeOf(StartOfSingleLineCommentToken)).apply(this, arguments));
  }

  _createClass(StartOfSingleLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(StartOfSingleLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(StartOfSingleLineCommentToken.prototype), 'clone', this).call(this, StartOfSingleLineCommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return SingleLineCommentToken.fromContent(StartOfSingleLineCommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return SingleLineCommentToken.fromWithinContent(StartOfSingleLineCommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return SingleLineCommentToken.positionWithinContent(StartOfSingleLineCommentToken, content);
    }
  }]);

  return StartOfSingleLineCommentToken;
}(SingleLineCommentToken);

var type = singleLineCommentType,
    regularExpression = /\/\//;

Object.assign(StartOfSingleLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = StartOfSingleLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL3N0YXJ0T2YuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsInNpbmdsZUxpbmVDb21tZW50VHlwZSIsIlN0YXJ0T2ZTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY29udGVudCIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxtQkFBUixDQUFkO0FBQUEsSUFDTUMseUJBQXlCRCxRQUFRLDBCQUFSLENBRC9COztJQUdRRSxxQixHQUEwQkgsSyxDQUExQkcscUI7O0lBRUZDLDZCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxpS0FBbUJGLDZCQUFuQixFQUFrREMsYUFBbEQsRUFBaUVDLFdBQWpFO0FBQWdGOzs7Z0NBRWpHQyxPLEVBQVM7QUFBRSxhQUFPTCx1QkFBdUJNLFdBQXZCLENBQW1DSiw2QkFBbkMsRUFBa0VHLE9BQWxFLENBQVA7QUFBb0Y7OztzQ0FFekZBLE8sRUFBUztBQUFFLGFBQU9MLHVCQUF1Qk8saUJBQXZCLENBQXlDTCw2QkFBekMsRUFBd0VHLE9BQXhFLENBQVA7QUFBMEY7OzswQ0FFakdBLE8sRUFBUztBQUFFLGFBQU9MLHVCQUF1QlEscUJBQXZCLENBQTZDTiw2QkFBN0MsRUFBNEVHLE9BQTVFLENBQVA7QUFBOEY7Ozs7RUFQNUZMLHNCOztBQVU1QyxJQUFNUyxPQUFPUixxQkFBYjtBQUFBLElBQ01TLG9CQUFvQixNQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjViw2QkFBZCxFQUE2QztBQUMzQ08sWUFEMkM7QUFFM0NDO0FBRjJDLENBQTdDOztBQUtBRyxPQUFPQyxPQUFQLEdBQWlCWiw2QkFBakIiLCJmaWxlIjoic3RhcnRPZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi90eXBlcycpLFxuICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1lbnQvc2luZ2xlTGluZScpO1xuXG5jb25zdCB7IHNpbmdsZUxpbmVDb21tZW50VHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIFN0YXJ0T2ZTaW5nbGVMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShTdGFydE9mU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpbmdsZUxpbmVDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoU3RhcnRPZlNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpbmdsZUxpbmVDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoU3RhcnRPZlNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaW5nbGVMaW5lQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChTdGFydE9mU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IHNpbmdsZUxpbmVDb21tZW50VHlwZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL1xcL1xcLy87XG5cbk9iamVjdC5hc3NpZ24oU3RhcnRPZlNpbmdsZUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXJ0T2ZTaW5nbGVMaW5lQ29tbWVudFRva2VuO1xuIl19