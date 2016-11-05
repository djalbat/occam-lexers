'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../token/significant');

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken(content, line) {
    _classCallCheck(this, WhitespaceToken);

    var type = SignificantToken.types.whitespace;

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).call(this, content, line, type));
  }

  _createClass(WhitespaceToken, [{
    key: 'clone',
    value: function clone() {
      var content = this.getContent(),
          line = this.getLine(),
          type = this.getType(),
          whitespaceToken = new WhitespaceToken(content, line, type);

      return whitespaceToken;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var content = this.getContent(),
          html = content; ///

      return html;
    }
  }], [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/[\t ]+/);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content, line) {
      var whitespaceToken = null,
          matches = content.match(/^([\t ]+)/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        whitespaceToken = new WhitespaceToken(content, line);
      }

      return whitespaceToken;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

module.exports = WhitespaceToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsInR5cGVzIiwid2hpdGVzcGFjZSIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsImh0bWwiLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsc0JBQVIsQ0FBdkI7O0lBRU1DLGU7OztBQUNKLDJCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUN6QixRQUFJQyxPQUFPTCxpQkFBaUJNLEtBQWpCLENBQXVCQyxVQUFsQzs7QUFEeUIsNkhBR25CSixPQUhtQixFQUdWQyxJQUhVLEVBR0pDLElBSEk7QUFJMUI7Ozs7NEJBRU87QUFDTixVQUFJRixVQUFVLEtBQUtLLFVBQUwsRUFBZDtBQUFBLFVBQ0lKLE9BQU8sS0FBS0ssT0FBTCxFQURYO0FBQUEsVUFFSUosT0FBTyxLQUFLSyxPQUFMLEVBRlg7QUFBQSxVQUdJQyxrQkFBa0IsSUFBSVQsZUFBSixDQUFvQkMsT0FBcEIsRUFBNkJDLElBQTdCLEVBQW9DQyxJQUFwQyxDQUh0Qjs7QUFLQSxhQUFPTSxlQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlSLFVBQVUsS0FBS0ssVUFBTCxFQUFkO0FBQUEsVUFDSUksT0FBT1QsT0FEWCxDQURRLENBRVk7O0FBRXBCLGFBQU9TLElBQVA7QUFDRDs7OzZCQUVlVCxPLEVBQVM7QUFDdkIsVUFBSVUsV0FBV1YsUUFBUVcsTUFBUixDQUFlLFFBQWYsQ0FBZjs7QUFFQSxhQUFPRCxRQUFQO0FBQ0Q7OztnQ0FFa0JWLE8sRUFBU0MsSSxFQUFNO0FBQ2hDLFVBQUlPLGtCQUFrQixJQUF0QjtBQUFBLFVBQ0lJLFVBQVVaLFFBQVFhLEtBQVIsQ0FBYyxXQUFkLENBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjs7QUFFQVosa0JBQVVjLFVBQVYsQ0FIVyxDQUdXOztBQUV0Qk4sMEJBQWtCLElBQUlULGVBQUosQ0FBb0JDLE9BQXBCLEVBQTZCQyxJQUE3QixDQUFsQjtBQUNEOztBQUdELGFBQU9PLGVBQVA7QUFDRDs7OztFQTNDMkJYLGdCOztBQThDOUJtQixPQUFPQyxPQUFQLEdBQWlCbEIsZUFBakI7O0FBRUEsU0FBU2dCLEtBQVQsQ0FBZUcsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6IndoaXRlc3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgV2hpdGVzcGFjZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgdHlwZSA9IFNpZ25pZmljYW50VG9rZW4udHlwZXMud2hpdGVzcGFjZTtcbiAgICBcbiAgICBzdXBlcihjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgfVxuICBcbiAgY2xvbmUoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IG5ldyBXaGl0ZXNwYWNlVG9rZW4oY29udGVudCwgbGluZSwgIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cbiAgXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgaHRtbCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9bXFx0IF0rLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciB3aGl0ZXNwYWNlVG9rZW4gPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXihbXFx0IF0rKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgd2hpdGVzcGFjZVRva2VuID0gbmV3IFdoaXRlc3BhY2VUb2tlbihjb250ZW50LCBsaW5lKTtcbiAgICB9XG5cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19