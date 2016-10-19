'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../token/significant');

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken(str, line) {
    _classCallCheck(this, WhitespaceToken);

    var type = SignificantToken.types.WHITESPACE;

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).call(this, str, line, type));
  }

  _createClass(WhitespaceToken, [{
    key: 'getHTML',
    value: function getHTML() {
      var str = this.getString(),
          html = str; ///

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
          str = firstMatch,
          ///
      whitespaceToken = new WhitespaceToken(str, line);

      return whitespaceToken;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

module.exports = WhitespaceToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsInN0ciIsImxpbmUiLCJ0eXBlIiwidHlwZXMiLCJXSElURVNQQUNFIiwiZ2V0U3RyaW5nIiwiaHRtbCIsImNvbnRlbnQiLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsIndoaXRlc3BhY2VUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsc0JBQVIsQ0FBdkI7O0lBRU1DLGU7OztBQUNKLDJCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QjtBQUFBOztBQUNyQixRQUFJQyxPQUFPTCxpQkFBaUJNLEtBQWpCLENBQXVCQyxVQUFsQzs7QUFEcUIsNkhBR2ZKLEdBSGUsRUFHVkMsSUFIVSxFQUdKQyxJQUhJO0FBSXRCOzs7OzhCQUVTO0FBQ1IsVUFBSUYsTUFBTSxLQUFLSyxTQUFMLEVBQVY7QUFBQSxVQUNJQyxPQUFPTixHQURYLENBRFEsQ0FFUTs7QUFFaEIsYUFBT00sSUFBUDtBQUNEOzs7NkJBRWVDLE8sRUFBUztBQUN2QixVQUFJQyxXQUFXRCxRQUFRRSxNQUFSLENBQWUsUUFBZixDQUFmOztBQUVBLGFBQU9ELFFBQVA7QUFDRDs7O2dDQUVrQkQsTyxFQUFTTixJLEVBQU07QUFDaEMsVUFBSVMsVUFBVUgsUUFBUUksS0FBUixDQUFjLFdBQWQsQ0FBZDs7QUFFQSxVQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxVQUNJVixNQUFNWSxVQURWO0FBQUEsVUFDc0I7QUFDbEJFLHdCQUFrQixJQUFJZixlQUFKLENBQW9CQyxHQUFwQixFQUF5QkMsSUFBekIsQ0FGdEI7O0FBSUEsYUFBT2EsZUFBUDtBQUNEOzs7O0VBaEMyQmpCLGdCOztBQW1DOUJrQixPQUFPQyxPQUFQLEdBQWlCakIsZUFBakI7O0FBRUEsU0FBU2MsS0FBVCxDQUFlSSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoid2hpdGVzcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBXaGl0ZXNwYWNlVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyLCBsaW5lKSB7XG4gICAgdmFyIHR5cGUgPSBTaWduaWZpY2FudFRva2VuLnR5cGVzLldISVRFU1BBQ0U7XG4gICAgXG4gICAgc3VwZXIoc3RyLCBsaW5lLCB0eXBlKTtcbiAgfVxuICBcbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgaHRtbCA9IHN0cjsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbihjb250ZW50KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1tcXHQgXSsvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKFtcXHQgXSspLyk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgIHN0ciA9IGZpcnN0TWF0Y2gsIC8vL1xuICAgICAgICB3aGl0ZXNwYWNlVG9rZW4gPSBuZXcgV2hpdGVzcGFjZVRva2VuKHN0ciwgbGluZSk7XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2hpdGVzcGFjZVRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==