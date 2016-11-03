'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../token/significant');

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken(string, line) {
    _classCallCheck(this, WhitespaceToken);

    var type = SignificantToken.types.WHITESPACE;

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).call(this, string, line, type));
  }

  _createClass(WhitespaceToken, [{
    key: 'clone',
    value: function clone() {
      var string = this.getString(),
          line = this.getLine(),
          type = this.getType(),
          whitespaceToken = new WhitespaceToken(string, line, type);

      return whitespaceToken;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var string = this.getString(),
          html = string; ///

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
      var matches = content.match(/^([\t ]+)/);

      if (!matches) {
        return null;
      }

      var firstMatch = first(matches),
          string = firstMatch,
          ///
      whitespaceToken = new WhitespaceToken(string, line);

      return whitespaceToken;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

module.exports = WhitespaceToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsInN0cmluZyIsImxpbmUiLCJ0eXBlIiwidHlwZXMiLCJXSElURVNQQUNFIiwiZ2V0U3RyaW5nIiwiZ2V0TGluZSIsImdldFR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJodG1sIiwiY29udGVudCIsInBvc2l0aW9uIiwic2VhcmNoIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLG1CQUFtQkMsUUFBUSxzQkFBUixDQUF2Qjs7SUFFTUMsZTs7O0FBQ0osMkJBQVlDLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCO0FBQUE7O0FBQ3hCLFFBQUlDLE9BQU9MLGlCQUFpQk0sS0FBakIsQ0FBdUJDLFVBQWxDOztBQUR3Qiw2SEFHbEJKLE1BSGtCLEVBR1ZDLElBSFUsRUFHSkMsSUFISTtBQUl6Qjs7Ozs0QkFFTztBQUNOLFVBQUlGLFNBQVMsS0FBS0ssU0FBTCxFQUFiO0FBQUEsVUFDSUosT0FBTyxLQUFLSyxPQUFMLEVBRFg7QUFBQSxVQUVJSixPQUFPLEtBQUtLLE9BQUwsRUFGWDtBQUFBLFVBR0lDLGtCQUFrQixJQUFJVCxlQUFKLENBQW9CQyxNQUFwQixFQUE0QkMsSUFBNUIsRUFBbUNDLElBQW5DLENBSHRCOztBQUtBLGFBQU9NLGVBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSVIsU0FBUyxLQUFLSyxTQUFMLEVBQWI7QUFBQSxVQUNJSSxPQUFPVCxNQURYLENBRFEsQ0FFVzs7QUFFbkIsYUFBT1MsSUFBUDtBQUNEOzs7NkJBRWVDLE8sRUFBUztBQUN2QixVQUFJQyxXQUFXRCxRQUFRRSxNQUFSLENBQWUsUUFBZixDQUFmOztBQUVBLGFBQU9ELFFBQVA7QUFDRDs7O2dDQUVrQkQsTyxFQUFTVCxJLEVBQU07QUFDaEMsVUFBSVksVUFBVUgsUUFBUUksS0FBUixDQUFjLFdBQWQsQ0FBZDs7QUFFQSxVQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxVQUNJYixTQUFTZSxVQURiO0FBQUEsVUFDeUI7QUFDckJQLHdCQUFrQixJQUFJVCxlQUFKLENBQW9CQyxNQUFwQixFQUE0QkMsSUFBNUIsQ0FGdEI7O0FBSUEsYUFBT08sZUFBUDtBQUNEOzs7O0VBekMyQlgsZ0I7O0FBNEM5Qm9CLE9BQU9DLE9BQVAsR0FBaUJuQixlQUFqQjs7QUFFQSxTQUFTaUIsS0FBVCxDQUFlRyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoid2hpdGVzcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBXaGl0ZXNwYWNlVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBsaW5lKSB7XG4gICAgdmFyIHR5cGUgPSBTaWduaWZpY2FudFRva2VuLnR5cGVzLldISVRFU1BBQ0U7XG4gICAgXG4gICAgc3VwZXIoc3RyaW5nLCBsaW5lLCB0eXBlKTtcbiAgfVxuICBcbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICB3aGl0ZXNwYWNlVG9rZW4gPSBuZXcgV2hpdGVzcGFjZVRva2VuKHN0cmluZywgbGluZSwgIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cbiAgXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGh0bWwgPSBzdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9bXFx0IF0rLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXihbXFx0IF0rKS8pO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICBzdHJpbmcgPSBmaXJzdE1hdGNoLCAvLy9cbiAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gbmV3IFdoaXRlc3BhY2VUb2tlbihzdHJpbmcsIGxpbmUpO1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=