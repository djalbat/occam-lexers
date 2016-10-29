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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsInN0cmluZyIsImxpbmUiLCJ0eXBlIiwidHlwZXMiLCJXSElURVNQQUNFIiwiZ2V0U3RyaW5nIiwiaHRtbCIsImNvbnRlbnQiLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsIndoaXRlc3BhY2VUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsc0JBQVIsQ0FBdkI7O0lBRU1DLGU7OztBQUNKLDJCQUFZQyxNQUFaLEVBQW9CQyxJQUFwQixFQUEwQjtBQUFBOztBQUN4QixRQUFJQyxPQUFPTCxpQkFBaUJNLEtBQWpCLENBQXVCQyxVQUFsQzs7QUFEd0IsNkhBR2xCSixNQUhrQixFQUdWQyxJQUhVLEVBR0pDLElBSEk7QUFJekI7Ozs7OEJBRVM7QUFDUixVQUFJRixTQUFTLEtBQUtLLFNBQUwsRUFBYjtBQUFBLFVBQ0lDLE9BQU9OLE1BRFgsQ0FEUSxDQUVXOztBQUVuQixhQUFPTSxJQUFQO0FBQ0Q7Ozs2QkFFZUMsTyxFQUFTO0FBQ3ZCLFVBQUlDLFdBQVdELFFBQVFFLE1BQVIsQ0FBZSxRQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7Z0NBRWtCRCxPLEVBQVNOLEksRUFBTTtBQUNoQyxVQUFJUyxVQUFVSCxRQUFRSSxLQUFSLENBQWMsV0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLFVBQ0lWLFNBQVNZLFVBRGI7QUFBQSxVQUN5QjtBQUNyQkUsd0JBQWtCLElBQUlmLGVBQUosQ0FBb0JDLE1BQXBCLEVBQTRCQyxJQUE1QixDQUZ0Qjs7QUFJQSxhQUFPYSxlQUFQO0FBQ0Q7Ozs7RUFoQzJCakIsZ0I7O0FBbUM5QmtCLE9BQU9DLE9BQVAsR0FBaUJqQixlQUFqQjs7QUFFQSxTQUFTYyxLQUFULENBQWVJLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ3aGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGxpbmUpIHtcbiAgICB2YXIgdHlwZSA9IFNpZ25pZmljYW50VG9rZW4udHlwZXMuV0hJVEVTUEFDRTtcbiAgICBcbiAgICBzdXBlcihzdHJpbmcsIGxpbmUsIHR5cGUpO1xuICB9XG4gIFxuICBnZXRIVE1MKCkge1xuICAgIHZhciBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBodG1sID0gc3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvW1xcdCBdKy8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL14oW1xcdCBdKykvKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgc3RyaW5nID0gZmlyc3RNYXRjaCwgLy8vXG4gICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IG5ldyBXaGl0ZXNwYWNlVG9rZW4oc3RyaW5nLCBsaW5lKTtcblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19