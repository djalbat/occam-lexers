'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../types'),
    StringLiteralToken = require('../../significant/stringLiteral');

var stringLiteralType = types.stringLiteralType;

var SinglyQuotedStringLiteralToken = function (_StringLiteralToken) {
  _inherits(SinglyQuotedStringLiteralToken, _StringLiteralToken);

  function SinglyQuotedStringLiteralToken() {
    _classCallCheck(this, SinglyQuotedStringLiteralToken);

    return _possibleConstructorReturn(this, (SinglyQuotedStringLiteralToken.__proto__ || Object.getPrototypeOf(SinglyQuotedStringLiteralToken)).apply(this, arguments));
  }

  _createClass(SinglyQuotedStringLiteralToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(SinglyQuotedStringLiteralToken.prototype.__proto__ || Object.getPrototypeOf(SinglyQuotedStringLiteralToken.prototype), 'clone', this).call(this, SinglyQuotedStringLiteralToken, startPosition, endPosition);
    }
  }], [{
    key: 'match',
    value: function match(content) {
      return StringLiteralToken.match(SinglyQuotedStringLiteralToken, content);
    }
  }, {
    key: 'fromMatch',
    value: function fromMatch(match) {
      return StringLiteralToken.fromMatch(SinglyQuotedStringLiteralToken, match);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return StringLiteralToken.fromContent(SinglyQuotedStringLiteralToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return StringLiteralToken.fromWithinContent(SinglyQuotedStringLiteralToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return StringLiteralToken.positionWithinContent(SinglyQuotedStringLiteralToken, content);
    }
  }]);

  return SinglyQuotedStringLiteralToken;
}(StringLiteralToken);

var type = stringLiteralType,
    ///
regularExpression = /^'(?:\\.|[^'])*'/;

Object.assign(SinglyQuotedStringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = SinglyQuotedStringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiU3RyaW5nTGl0ZXJhbFRva2VuIiwic3RyaW5nTGl0ZXJhbFR5cGUiLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwibWF0Y2giLCJmcm9tTWF0Y2giLCJmcm9tQ29udGVudCIsImZyb21XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsZ0JBQVIsQ0FBZDtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxpQ0FBUixDQUQzQjs7SUFHUUUsaUIsR0FBc0JILEssQ0FBdEJHLGlCOztJQUVGQyw4Qjs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsbUtBQW1CRiw4QkFBbkIsRUFBbURDLGFBQW5ELEVBQWtFQyxXQUFsRTtBQUFpRjs7OzBCQUV4R0MsTyxFQUFTO0FBQUUsYUFBT0wsbUJBQW1CTSxLQUFuQixDQUF5QkosOEJBQXpCLEVBQXlERyxPQUF6RCxDQUFQO0FBQTJFOzs7OEJBRWxGQyxLLEVBQU87QUFBRSxhQUFPTixtQkFBbUJPLFNBQW5CLENBQTZCTCw4QkFBN0IsRUFBNkRJLEtBQTdELENBQVA7QUFBNkU7OztnQ0FFcEZELE8sRUFBUztBQUFFLGFBQU9MLG1CQUFtQlEsV0FBbkIsQ0FBK0JOLDhCQUEvQixFQUErREcsT0FBL0QsQ0FBUDtBQUFpRjs7O3NDQUV0RkEsTyxFQUFTO0FBQUUsYUFBT0wsbUJBQW1CUyxpQkFBbkIsQ0FBcUNQLDhCQUFyQyxFQUFxRUcsT0FBckUsQ0FBUDtBQUF1Rjs7OzBDQUU5RkEsTyxFQUFTO0FBQUUsYUFBT0wsbUJBQW1CVSxxQkFBbkIsQ0FBeUNSLDhCQUF6QyxFQUF5RUcsT0FBekUsQ0FBUDtBQUEyRjs7OztFQVh4Rkwsa0I7O0FBYzdDLElBQU1XLE9BQU9WLGlCQUFiO0FBQUEsSUFBZ0M7QUFDMUJXLG9CQUFvQixrQkFEMUI7O0FBR0FDLE9BQU9DLE1BQVAsQ0FBY1osOEJBQWQsRUFBOEM7QUFDNUNTLFlBRDRDO0FBRTVDQztBQUY0QyxDQUE5Qzs7QUFLQUcsT0FBT0MsT0FBUCxHQUFpQmQsOEJBQWpCIiwiZmlsZSI6InNpbmdseVF1b3RlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi8uLi90eXBlcycpLFxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZSgnLi4vLi4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbCcpO1xuXG5jb25zdCB7IHN0cmluZ0xpdGVyYWxUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIGV4dGVuZHMgU3RyaW5nTGl0ZXJhbFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21NYXRjaChtYXRjaCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLmZyb21NYXRjaChTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sIG1hdGNoKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTdHJpbmdMaXRlcmFsVG9rZW4uZnJvbUNvbnRlbnQoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBTdHJpbmdMaXRlcmFsVG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBzdHJpbmdMaXRlcmFsVHlwZSwgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eJyg/OlxcXFwufFteJ10pKicvO1xuXG5PYmplY3QuYXNzaWduKFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xuIl19