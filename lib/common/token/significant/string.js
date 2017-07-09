'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    SignificantToken = require('../significant');

var StringToken = function (_SignificantToken) {
  _inherits(StringToken, _SignificantToken);

  function StringToken() {
    _classCallCheck(this, StringToken);

    return _possibleConstructorReturn(this, (StringToken.__proto__ || Object.getPrototypeOf(StringToken)).apply(this, arguments));
  }

  _createClass(StringToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, StringToken);
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(content, line, type, StringToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var stringToken = null;

      var matches = content.match(/("(?:[^\\"]|\\.)*")/);

      if (matches) {
        var firstMatch = arrayUtil.first(matches);

        content = firstMatch; ///

        var type = StringToken.type;

        stringToken = StringToken.fromContentLineAndType(content, line, type);
      }

      return stringToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(/"[^"]*"/);

      return position;
    }
  }]);

  return StringToken;
}(SignificantToken);

module.exports = StringToken;

StringToken.type = 'string';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiU3RyaW5nVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJzdHJpbmdUb2tlbiIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsInBvc2l0aW9uIiwic2VhcmNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLHFCQUFSLENBQWxCO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLGdCQUFSLENBRHpCOztJQUdNRSxXOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPSCxpQkFBaUJJLEtBQWpCLENBQXVCLElBQXZCLEVBQTZCRixhQUE3QixFQUE0Q0MsV0FBNUMsRUFBeURGLFdBQXpELENBQVA7QUFBK0U7OzsyQ0FFckZJLE8sRUFBU0MsSSxFQUFNQyxJLEVBQU07QUFBRSxhQUFPUCxpQkFBaUJRLHNCQUFqQixDQUF3Q0gsT0FBeEMsRUFBaURDLElBQWpELEVBQXVEQyxJQUF2RCxFQUE2RE4sV0FBN0QsQ0FBUDtBQUFtRjs7OzZDQUV4R0ksTyxFQUFTQyxJLEVBQU07QUFDN0MsVUFBSUcsY0FBYyxJQUFsQjs7QUFFQSxVQUFNQyxVQUFVTCxRQUFRTSxLQUFSLENBQWMscUJBQWQsQ0FBaEI7O0FBRUEsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBTUUsYUFBYWQsVUFBVWUsS0FBVixDQUFnQkgsT0FBaEIsQ0FBbkI7O0FBRUFMLGtCQUFVTyxVQUFWLENBSFcsQ0FHVzs7QUFFdEIsWUFBTUwsT0FBT04sWUFBWU0sSUFBekI7O0FBRUFFLHNCQUFjUixZQUFZTyxzQkFBWixDQUFtQ0gsT0FBbkMsRUFBNENDLElBQTVDLEVBQWtEQyxJQUFsRCxDQUFkO0FBQ0Q7O0FBRUQsYUFBT0UsV0FBUDtBQUNEOzs7MENBRTRCSixPLEVBQVM7QUFDcEMsVUFBTVMsV0FBV1QsUUFBUVUsTUFBUixDQUFlLFNBQWYsQ0FBakI7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7O0VBM0J1QmQsZ0I7O0FBOEIxQmdCLE9BQU9DLE9BQVAsR0FBaUJoQixXQUFqQjs7QUFFQUEsWUFBWU0sSUFBWixHQUFtQixRQUFuQiIsImZpbGUiOiJzdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBTdHJpbmdUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU3RyaW5nVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIFN0cmluZ1Rva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBzdHJpbmdUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhcIig/OlteXFxcXFwiXXxcXFxcLikqXCIpLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGFycmF5VXRpbC5maXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuICAgICAgXG4gICAgICBjb25zdCB0eXBlID0gU3RyaW5nVG9rZW4udHlwZTtcblxuICAgICAgc3RyaW5nVG9rZW4gPSBTdHJpbmdUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RyaW5nVG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9cIlteXCJdKlwiLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdUb2tlbjtcblxuU3RyaW5nVG9rZW4udHlwZSA9ICdzdHJpbmcnO1xuIl19