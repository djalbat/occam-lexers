'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../../token/significant');

var StringLiteralToken = function (_SignificantToken) {
  _inherits(StringLiteralToken, _SignificantToken);

  function StringLiteralToken() {
    _classCallCheck(this, StringLiteralToken);

    return _possibleConstructorReturn(this, (StringLiteralToken.__proto__ || Object.getPrototypeOf(StringLiteralToken)).apply(this, arguments));
  }

  _createClass(StringLiteralToken, [{
    key: 'clone',
    value: function clone(Class, startPosition, endPosition) {
      return _get(StringLiteralToken.prototype.__proto__ || Object.getPrototypeOf(StringLiteralToken.prototype), 'clone', this).call(this, Class, startPosition, endPosition);
    }
  }, {
    key: 'getString',
    value: function getString() {
      var content = this.getContent(),
          contentLength = content.length,
          start = 1,
          end = contentLength - 1,
          string = content.substring(start, end);

      return string;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Class, content) {
      return SignificantToken.fromContent(Class, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      return SignificantToken.fromWithinContent(Class, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      return SignificantToken.positionWithinContent(Class, content);
    }
  }]);

  return StringLiteralToken;
}(SignificantToken);

module.exports = StringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIlN0cmluZ0xpdGVyYWxUb2tlbiIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJlbmQiLCJzdHJpbmciLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudCIsImZyb21XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQkMsUUFBUSx5QkFBUixDQUF6Qjs7SUFFTUMsa0I7Ozs7Ozs7Ozs7OzBCQUNFQyxLLEVBQU9DLGEsRUFBZUMsVyxFQUFhO0FBQUUsMklBQW1CRixLQUFuQixFQUEwQkMsYUFBMUIsRUFBeUNDLFdBQXpDO0FBQXdEOzs7Z0NBRXZGO0FBQ1YsVUFBTUMsVUFBVSxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMsZ0JBQWdCRixRQUFRRyxNQUQ5QjtBQUFBLFVBRU1DLFFBQVEsQ0FGZDtBQUFBLFVBR01DLE1BQU1ILGdCQUFnQixDQUg1QjtBQUFBLFVBSU1JLFNBQVNOLFFBQVFPLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCQyxHQUF6QixDQUpmOztBQU1BLGFBQU9DLE1BQVA7QUFDRDs7O2dDQUVrQlQsSyxFQUFPRyxPLEVBQVM7QUFBRSxhQUFPTixpQkFBaUJjLFdBQWpCLENBQTZCWCxLQUE3QixFQUFvQ0csT0FBcEMsQ0FBUDtBQUFzRDs7O3NDQUVsRUgsSyxFQUFPRyxPLEVBQVM7QUFBRSxhQUFPTixpQkFBaUJlLGlCQUFqQixDQUFtQ1osS0FBbkMsRUFBMENHLE9BQTFDLENBQVA7QUFBNEQ7OzswQ0FFMUVILEssRUFBT0csTyxFQUFTO0FBQUUsYUFBT04saUJBQWlCZ0IscUJBQWpCLENBQXVDYixLQUF2QyxFQUE4Q0csT0FBOUMsQ0FBUDtBQUFnRTs7OztFQWpCaEZOLGdCOztBQW9CakNpQixPQUFPQyxPQUFQLEdBQWlCaEIsa0JBQWpCIiwiZmlsZSI6InN0cmluZ0xpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi90b2tlbi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBTdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGgsXG4gICAgICAgICAgc3RhcnQgPSAxLFxuICAgICAgICAgIGVuZCA9IGNvbnRlbnRMZW5ndGggLSAxLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nTGl0ZXJhbFRva2VuO1xuIl19