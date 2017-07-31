'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    SignificantToken = require('../significant');

var StringLiteralToken = function (_SignificantToken) {
  _inherits(StringLiteralToken, _SignificantToken);

  function StringLiteralToken() {
    _classCallCheck(this, StringLiteralToken);

    return _possibleConstructorReturn(this, (StringLiteralToken.__proto__ || Object.getPrototypeOf(StringLiteralToken)).apply(this, arguments));
  }

  _createClass(StringLiteralToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(StringLiteralToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(StringLiteralToken, content, line, type);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var stringLiteralToken = null;

      var matches = content.match(StringLiteralToken.regularExpression);

      if (matches) {
        var firstMatch = arrayUtil.first(matches);

        content = firstMatch; ///

        var type = StringLiteralToken.type;

        stringLiteralToken = StringLiteralToken.fromContentLineAndType(content, line, type);
      }

      return stringLiteralToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(StringLiteralToken.regularExpression);

      return position;
    }
  }]);

  return StringLiteralToken;
}(SignificantToken);

StringLiteralToken.type = 'string';

StringLiteralToken.regularExpression = /"(?:\\.|[^"])*"/;

module.exports = StringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsIlN0cmluZ0xpdGVyYWxUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiY29udGVudCIsImxpbmUiLCJ0eXBlIiwiZnJvbUNvbnRlbnRMaW5lQW5kVHlwZSIsInN0cmluZ0xpdGVyYWxUb2tlbiIsIm1hdGNoZXMiLCJtYXRjaCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwicG9zaXRpb24iLCJzZWFyY2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEscUJBQVIsQ0FBbEI7QUFBQSxJQUNNQyxtQkFBbUJELFFBQVEsZ0JBQVIsQ0FEekI7O0lBR01FLGtCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPSCxpQkFBaUJJLEtBQWpCLENBQXVCSCxrQkFBdkIsRUFBMkMsSUFBM0MsRUFBaURDLGFBQWpELEVBQWdFQyxXQUFoRSxDQUFQO0FBQXNGOzs7MkNBRTVGRSxPLEVBQVNDLEksRUFBTUMsSSxFQUFNO0FBQUUsYUFBT1AsaUJBQWlCUSxzQkFBakIsQ0FBd0NQLGtCQUF4QyxFQUE0REksT0FBNUQsRUFBcUVDLElBQXJFLEVBQTJFQyxJQUEzRSxDQUFQO0FBQTBGOzs7NkNBRS9HRixPLEVBQVNDLEksRUFBTTtBQUM3QyxVQUFJRyxxQkFBcUIsSUFBekI7O0FBRUEsVUFBTUMsVUFBVUwsUUFBUU0sS0FBUixDQUFjVixtQkFBbUJXLGlCQUFqQyxDQUFoQjs7QUFFQSxVQUFJRixPQUFKLEVBQWE7QUFDWCxZQUFNRyxhQUFhZixVQUFVZ0IsS0FBVixDQUFnQkosT0FBaEIsQ0FBbkI7O0FBRUFMLGtCQUFVUSxVQUFWLENBSFcsQ0FHVzs7QUFFdEIsWUFBTU4sT0FBT04sbUJBQW1CTSxJQUFoQzs7QUFFQUUsNkJBQXFCUixtQkFBbUJPLHNCQUFuQixDQUEwQ0gsT0FBMUMsRUFBbURDLElBQW5ELEVBQXlEQyxJQUF6RCxDQUFyQjtBQUNEOztBQUVELGFBQU9FLGtCQUFQO0FBQ0Q7OzswQ0FFNEJKLE8sRUFBUztBQUNwQyxVQUFNVSxXQUFXVixRQUFRVyxNQUFSLENBQWVmLG1CQUFtQlcsaUJBQWxDLENBQWpCOztBQUVBLGFBQU9HLFFBQVA7QUFDRDs7OztFQTNCOEJmLGdCOztBQThCakNDLG1CQUFtQk0sSUFBbkIsR0FBMEIsUUFBMUI7O0FBRUFOLG1CQUFtQlcsaUJBQW5CLEdBQXVDLGlCQUF2Qzs7QUFFQUssT0FBT0MsT0FBUCxHQUFpQmpCLGtCQUFqQiIsImZpbGUiOiJzdHJpbmdMaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgU3RyaW5nTGl0ZXJhbFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKFN0cmluZ0xpdGVyYWxUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCwgbGluZSwgdHlwZSk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgc3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaChTdHJpbmdMaXRlcmFsVG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBhcnJheVV0aWwuZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cbiAgICAgIFxuICAgICAgY29uc3QgdHlwZSA9IFN0cmluZ0xpdGVyYWxUb2tlbi50eXBlO1xuXG4gICAgICBzdHJpbmdMaXRlcmFsVG9rZW4gPSBTdHJpbmdMaXRlcmFsVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZ0xpdGVyYWxUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goU3RyaW5nTGl0ZXJhbFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5TdHJpbmdMaXRlcmFsVG9rZW4udHlwZSA9ICdzdHJpbmcnO1xuXG5TdHJpbmdMaXRlcmFsVG9rZW4ucmVndWxhckV4cHJlc3Npb24gPSAvXCIoPzpcXFxcLnxbXlwiXSkqXCIvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ0xpdGVyYWxUb2tlbjtcbiJdfQ==