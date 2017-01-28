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

  _createClass(StringToken, [{
    key: 'toPosition',
    value: function toPosition(position) {
      return SignificantToken.toPosition(this, position, StringToken);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return SignificantToken.fromPosition(this, position, StringToken);
    }
  }], [{
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
  }, {
    key: 'position',
    value: function position(content) {
      var position = content.search(/"[^"]*"/);

      return position;
    }
  }]);

  return StringToken;
}(SignificantToken);

StringToken.type = SignificantToken.types.string;

module.exports = StringToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc3RyaW5nLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiU3RyaW5nVG9rZW4iLCJwb3NpdGlvbiIsInRvUG9zaXRpb24iLCJmcm9tUG9zaXRpb24iLCJjb250ZW50IiwibGluZSIsInN0cmluZ1Rva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwic2VhcmNoIiwidHlwZSIsInR5cGVzIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLG1CQUFtQkMsUUFBUSxzQkFBUixDQUF2Qjs7SUFFTUMsVzs7Ozs7Ozs7Ozs7K0JBQ09DLFEsRUFBVTtBQUFFLGFBQU9ILGlCQUFpQkksVUFBakIsQ0FBNEIsSUFBNUIsRUFBa0NELFFBQWxDLEVBQTRDRCxXQUE1QyxDQUFQO0FBQWlFOzs7aUNBRTNFQyxRLEVBQVU7QUFBRSxhQUFPSCxpQkFBaUJLLFlBQWpCLENBQThCLElBQTlCLEVBQW9DRixRQUFwQyxFQUE4Q0QsV0FBOUMsQ0FBUDtBQUFtRTs7O3VDQUVsRUksTyxFQUFTQyxJLEVBQU07QUFDdkMsVUFBSUMsY0FBYyxJQUFsQjtBQUFBLFVBQ0lDLFVBQVVILFFBQVFJLEtBQVIsQ0FBYyxXQUFkLENBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjs7QUFFQUgsa0JBQVVLLFVBQVYsQ0FIVyxDQUdXOztBQUV0Qkgsc0JBQWNSLGlCQUFpQmEsa0JBQWpCLENBQW9DUCxPQUFwQyxFQUE2Q0MsSUFBN0MsRUFBbURMLFdBQW5ELENBQWQ7QUFDRDs7QUFFRCxhQUFPTSxXQUFQO0FBQ0Q7Ozs2QkFFZUYsTyxFQUFTO0FBQ3ZCLFVBQUlILFdBQVdHLFFBQVFRLE1BQVIsQ0FBZSxTQUFmLENBQWY7O0FBRUEsYUFBT1gsUUFBUDtBQUNEOzs7O0VBeEJ1QkgsZ0I7O0FBMkIxQkUsWUFBWWEsSUFBWixHQUFtQmYsaUJBQWlCZ0IsS0FBakIsQ0FBdUJDLE1BQTFDOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCakIsV0FBakI7O0FBRUEsU0FBU1UsS0FBVCxDQUFlUSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFN0cmluZ1Rva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHRvUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4udG9Qb3NpdGlvbih0aGlzLCBwb3NpdGlvbiwgU3RyaW5nVG9rZW4pIH1cblxuICBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uLCBTdHJpbmdUb2tlbikgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzdHJpbmdUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC8oXCJbXlwiXSpcIikvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIHN0cmluZ1Rva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgU3RyaW5nVG9rZW4pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RyaW5nVG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9cIlteXCJdKlwiLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuU3RyaW5nVG9rZW4udHlwZSA9IFNpZ25pZmljYW50VG9rZW4udHlwZXMuc3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1Rva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==