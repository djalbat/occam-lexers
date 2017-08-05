'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var CommentToken = require('../comment');

var array = necessary.array,
    first = array.first;

var StartOfCommentToken = function (_CommentToken) {
  _inherits(StartOfCommentToken, _CommentToken);

  function StartOfCommentToken() {
    _classCallCheck(this, StartOfCommentToken);

    return _possibleConstructorReturn(this, (StartOfCommentToken.__proto__ || Object.getPrototypeOf(StartOfCommentToken)).apply(this, arguments));
  }

  _createClass(StartOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(StartOfCommentToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return CommentToken.fromContentAndLine(StartOfCommentToken, content, line);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var startOfCommentToken = null;

      var matches = content.match(StartOfCommentToken.regularExpression);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        startOfCommentToken = StartOfCommentToken.fromContentAndLine(content, line);
      }

      return startOfCommentToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(StartOfCommentToken.regularExpression);

      return position;
    }
  }]);

  return StartOfCommentToken;
}(CommentToken);

StartOfCommentToken.regularExpression = /^\/\*/;

module.exports = StartOfCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zdGFydE9mLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJhcnJheSIsImZpcnN0IiwiU3RhcnRPZkNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiY29udGVudCIsImxpbmUiLCJmcm9tQ29udGVudEFuZExpbmUiLCJzdGFydE9mQ29tbWVudFRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwicmVndWxhckV4cHJlc3Npb24iLCJmaXJzdE1hdGNoIiwicG9zaXRpb24iLCJzZWFyY2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLFlBQVIsQ0FBckI7O0FBRU0sSUFBRUUsS0FBRixHQUFZSCxTQUFaLENBQUVHLEtBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELEtBRFosQ0FDRUMsS0FERjs7SUFHQUMsbUI7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9MLGFBQWFNLEtBQWIsQ0FBbUJILG1CQUFuQixFQUF3QyxJQUF4QyxFQUE4Q0MsYUFBOUMsRUFBNkRDLFdBQTdELENBQVA7QUFBbUY7Ozt1Q0FFN0ZFLE8sRUFBU0MsSSxFQUFNO0FBQUUsYUFBT1IsYUFBYVMsa0JBQWIsQ0FBZ0NOLG1CQUFoQyxFQUFxREksT0FBckQsRUFBOERDLElBQTlELENBQVA7QUFBNkU7Ozs2Q0FFeEZELE8sRUFBU0MsSSxFQUFNO0FBQzdDLFVBQUlFLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNQyxVQUFVSixRQUFRSyxLQUFSLENBQWNULG9CQUFvQlUsaUJBQWxDLENBQWhCOztBQUVBLFVBQUlGLE9BQUosRUFBYTtBQUNYLFlBQU1HLGFBQWFaLE1BQU1TLE9BQU4sQ0FBbkI7O0FBRUFKLGtCQUFVTyxVQUFWLENBSFcsQ0FHVzs7QUFFdEJKLDhCQUFzQlAsb0JBQW9CTSxrQkFBcEIsQ0FBdUNGLE9BQXZDLEVBQWdEQyxJQUFoRCxDQUF0QjtBQUNEOztBQUVELGFBQU9FLG1CQUFQO0FBQ0Q7OzswQ0FFNEJILE8sRUFBUztBQUNwQyxVQUFNUSxXQUFXUixRQUFRUyxNQUFSLENBQWViLG9CQUFvQlUsaUJBQW5DLENBQWpCOztBQUVBLGFBQU9FLFFBQVA7QUFDRDs7OztFQXpCK0JmLFk7O0FBNEJsQ0csb0JBQW9CVSxpQkFBcEIsR0FBd0MsT0FBeEM7O0FBRUFJLE9BQU9DLE9BQVAsR0FBaUJmLG1CQUFqQiIsImZpbGUiOiJzdGFydE9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheTtcblxuY2xhc3MgU3RhcnRPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4uY2xvbmUoU3RhcnRPZkNvbW1lbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7IHJldHVybiBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKFN0YXJ0T2ZDb21tZW50VG9rZW4sIGNvbnRlbnQsIGxpbmUpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHN0YXJ0T2ZDb21tZW50VG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKFN0YXJ0T2ZDb21tZW50VG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdGFydE9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChTdGFydE9mQ29tbWVudFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5TdGFydE9mQ29tbWVudFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC9cXCovO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXJ0T2ZDb21tZW50VG9rZW47XG4iXX0=