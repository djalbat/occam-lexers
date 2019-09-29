'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../types'),
    SignificantToken = require('../../significant');

var brokenStringLiteralType = types.brokenStringLiteralType;

var DoublyQuotedBrokenStringLiteralToken = function (_SignificantToken) {
  _inherits(DoublyQuotedBrokenStringLiteralToken, _SignificantToken);

  function DoublyQuotedBrokenStringLiteralToken() {
    _classCallCheck(this, DoublyQuotedBrokenStringLiteralToken);

    return _possibleConstructorReturn(this, (DoublyQuotedBrokenStringLiteralToken.__proto__ || Object.getPrototypeOf(DoublyQuotedBrokenStringLiteralToken)).apply(this, arguments));
  }

  _createClass(DoublyQuotedBrokenStringLiteralToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(DoublyQuotedBrokenStringLiteralToken.prototype.__proto__ || Object.getPrototypeOf(DoublyQuotedBrokenStringLiteralToken.prototype), 'clone', this).call(this, DoublyQuotedBrokenStringLiteralToken, startPosition, endPosition);
    }
  }], [{
    key: 'match',
    value: function match(content) {
      return SignificantToken.match(DoublyQuotedBrokenStringLiteralToken, content);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return SignificantToken.fromContent(DoublyQuotedBrokenStringLiteralToken, content);
    }
  }]);

  return DoublyQuotedBrokenStringLiteralToken;
}(SignificantToken);

var type = brokenStringLiteralType,
    ///
regularExpression = /^"/;

Object.assign(DoublyQuotedBrokenStringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = DoublyQuotedBrokenStringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWQuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImJyb2tlblN0cmluZ0xpdGVyYWxUeXBlIiwiRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY29udGVudCIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxnQkFBUixDQUFkO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLG1CQUFSLENBRHpCOztJQUdRRSx1QixHQUE0QkgsSyxDQUE1QkcsdUI7O0lBRUZDLG9DOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSwrS0FBbUJGLG9DQUFuQixFQUF5REMsYUFBekQsRUFBd0VDLFdBQXhFO0FBQXVGOzs7MEJBRTlHQyxPLEVBQVM7QUFBRSxhQUFPTCxpQkFBaUJNLEtBQWpCLENBQXVCSixvQ0FBdkIsRUFBNkRHLE9BQTdELENBQVA7QUFBK0U7OztnQ0FFcEZBLE8sRUFBUztBQUFFLGFBQU9MLGlCQUFpQk8sV0FBakIsQ0FBNkJMLG9DQUE3QixFQUFtRUcsT0FBbkUsQ0FBUDtBQUFxRjs7OztFQUxsRUwsZ0I7O0FBUW5ELElBQU1RLE9BQU9QLHVCQUFiO0FBQUEsSUFBc0M7QUFDaENRLG9CQUFvQixJQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjVCxvQ0FBZCxFQUFvRDtBQUNsRE0sWUFEa0Q7QUFFbERDO0FBRmtELENBQXBEOztBQUtBRyxPQUFPQyxPQUFQLEdBQWlCWCxvQ0FBakIiLCJmaWxlIjoiZG91Ymx5UXVvdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3R5cGVzJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vc2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBicm9rZW5TdHJpbmdMaXRlcmFsVHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gYnJva2VuU3RyaW5nTGl0ZXJhbFR5cGUsIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXlwiLztcblxuT2JqZWN0LmFzc2lnbihEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbjtcbiJdfQ==