'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var WhitespaceToken = function (_Token) {
  _inherits(WhitespaceToken, _Token);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).apply(this, arguments));
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
    value: function fromContent(content) {
      var matches = content.match(/^([\t ]+)/);

      if (!matches) {
        return null;
      }

      var firstMatch = first(matches),
          str = firstMatch,
          ///
      whitespaceToken = new WhitespaceToken(str);

      return whitespaceToken;
    }
  }]);

  return WhitespaceToken;
}(Token);

module.exports = WhitespaceToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJXaGl0ZXNwYWNlVG9rZW4iLCJzdHIiLCJnZXRTdHJpbmciLCJodG1sIiwiY29udGVudCIsInBvc2l0aW9uIiwic2VhcmNoIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0Iiwid2hpdGVzcGFjZVRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxlOzs7Ozs7Ozs7Ozs4QkFDTTtBQUNSLFVBQUlDLE1BQU0sS0FBS0MsU0FBTCxFQUFWO0FBQUEsVUFDSUMsT0FBT0YsR0FEWCxDQURRLENBRVE7O0FBRWhCLGFBQU9FLElBQVA7QUFDRDs7OzZCQUVlQyxPLEVBQVM7QUFDdkIsVUFBSUMsV0FBV0QsUUFBUUUsTUFBUixDQUFlLFFBQWYsQ0FBZjs7QUFFQSxhQUFPRCxRQUFQO0FBQ0Q7OztnQ0FFa0JELE8sRUFBUztBQUMxQixVQUFJRyxVQUFVSCxRQUFRSSxLQUFSLENBQWMsV0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLFVBQ0lOLE1BQU1RLFVBRFY7QUFBQSxVQUNzQjtBQUNsQkUsd0JBQWtCLElBQUlYLGVBQUosQ0FBb0JDLEdBQXBCLENBRnRCOztBQUlBLGFBQU9VLGVBQVA7QUFDRDs7OztFQTFCMkJiLEs7O0FBNkI5QmMsT0FBT0MsT0FBUCxHQUFpQmIsZUFBakI7O0FBRUEsU0FBU1UsS0FBVCxDQUFlSSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoid2hpdGVzcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgV2hpdGVzcGFjZVRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBnZXRIVE1MKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBodG1sID0gc3RyOyAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvW1xcdCBdKy8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL14oW1xcdCBdKykvKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgc3RyID0gZmlyc3RNYXRjaCwgLy8vXG4gICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IG5ldyBXaGl0ZXNwYWNlVG9rZW4oc3RyKTtcblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19