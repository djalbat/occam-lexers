'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../token/significant');

var StringToken = function (_SignificantToken) {
  _inherits(StringToken, _SignificantToken);

  function StringToken() {
    _classCallCheck(this, StringToken);

    return _possibleConstructorReturn(this, (StringToken.__proto__ || Object.getPrototypeOf(StringToken)).apply(this, arguments));
  }

  _createClass(StringToken, null, [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/"[^"]*"/);

      return position;
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var stringToken = null,
          matches = content.match(/("[^"]*")/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        stringToken = SignificantToken.fromContentAndLine(content, line, StringToken);
      }

      return stringToken;
    }
  }]);

  return StringToken;
}(SignificantToken);

StringToken.type = SignificantToken.types.string;

module.exports = StringToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc3RyaW5nLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiU3RyaW5nVG9rZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJzZWFyY2giLCJsaW5lIiwic3RyaW5nVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJmcm9tQ29udGVudEFuZExpbmUiLCJ0eXBlIiwidHlwZXMiLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLHNCQUFSLENBQXZCOztJQUVNQyxXOzs7Ozs7Ozs7Ozs2QkFDWUMsTyxFQUFTO0FBQ3ZCLFVBQUlDLFdBQVdELFFBQVFFLE1BQVIsQ0FBZSxTQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7dUNBRXlCRCxPLEVBQVNHLEksRUFBTTtBQUN2QyxVQUFJQyxjQUFjLElBQWxCO0FBQUEsVUFDSUMsVUFBVUwsUUFBUU0sS0FBUixDQUFjLFdBQWQsQ0FEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCOztBQUVBTCxrQkFBVU8sVUFBVixDQUhXLENBR1c7O0FBRXRCSCxzQkFBY1AsaUJBQWlCWSxrQkFBakIsQ0FBb0NULE9BQXBDLEVBQTZDRyxJQUE3QyxFQUFtREosV0FBbkQsQ0FBZDtBQUNEOztBQUVELGFBQU9LLFdBQVA7QUFDRDs7OztFQXBCdUJQLGdCOztBQXVCMUJFLFlBQVlXLElBQVosR0FBbUJiLGlCQUFpQmMsS0FBakIsQ0FBdUJDLE1BQTFDOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCZixXQUFqQjs7QUFFQSxTQUFTUyxLQUFULENBQWVPLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgU3RyaW5nVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXCJbXlwiXSpcIi8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIHN0cmluZ1Rva2VuID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhcIlteXCJdKlwiKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgc3RyaW5nVG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBTdHJpbmdUb2tlbik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdHJpbmdUb2tlbjtcbiAgfVxufVxuXG5TdHJpbmdUb2tlbi50eXBlID0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5zdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nVG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19