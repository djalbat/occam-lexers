'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../../util/array'),
    CommentToken = require('../comment');

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
        var firstMatch = arrayUtil.first(matches);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zdGFydE9mLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJjb250ZW50IiwibGluZSIsImZyb21Db250ZW50QW5kTGluZSIsInN0YXJ0T2ZDb21tZW50VG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJyZWd1bGFyRXhwcmVzc2lvbiIsImZpcnN0TWF0Y2giLCJmaXJzdCIsInBvc2l0aW9uIiwic2VhcmNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLHdCQUFSLENBQWxCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSxZQUFSLENBRHJCOztJQUdNRSxtQjs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT0gsYUFBYUksS0FBYixDQUFtQkgsbUJBQW5CLEVBQXdDLElBQXhDLEVBQThDQyxhQUE5QyxFQUE2REMsV0FBN0QsQ0FBUDtBQUFtRjs7O3VDQUU3RkUsTyxFQUFTQyxJLEVBQU07QUFBRSxhQUFPTixhQUFhTyxrQkFBYixDQUFnQ04sbUJBQWhDLEVBQXFESSxPQUFyRCxFQUE4REMsSUFBOUQsQ0FBUDtBQUE2RTs7OzZDQUV4RkQsTyxFQUFTQyxJLEVBQU07QUFDN0MsVUFBSUUsc0JBQXNCLElBQTFCOztBQUVBLFVBQU1DLFVBQVVKLFFBQVFLLEtBQVIsQ0FBY1Qsb0JBQW9CVSxpQkFBbEMsQ0FBaEI7O0FBRUEsVUFBSUYsT0FBSixFQUFhO0FBQ1gsWUFBTUcsYUFBYWQsVUFBVWUsS0FBVixDQUFnQkosT0FBaEIsQ0FBbkI7O0FBRUFKLGtCQUFVTyxVQUFWLENBSFcsQ0FHVzs7QUFFdEJKLDhCQUFzQlAsb0JBQW9CTSxrQkFBcEIsQ0FBdUNGLE9BQXZDLEVBQWdEQyxJQUFoRCxDQUF0QjtBQUNEOztBQUVELGFBQU9FLG1CQUFQO0FBQ0Q7OzswQ0FFNEJILE8sRUFBUztBQUNwQyxVQUFNUyxXQUFXVCxRQUFRVSxNQUFSLENBQWVkLG9CQUFvQlUsaUJBQW5DLENBQWpCOztBQUVBLGFBQU9HLFFBQVA7QUFDRDs7OztFQXpCK0JkLFk7O0FBNEJsQ0Msb0JBQW9CVSxpQkFBcEIsR0FBd0MsT0FBeEM7O0FBRUFLLE9BQU9DLE9BQVAsR0FBaUJoQixtQkFBakIiLCJmaWxlIjoic3RhcnRPZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jbGFzcyBTdGFydE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZShTdGFydE9mQ29tbWVudFRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoU3RhcnRPZkNvbW1lbnRUb2tlbiwgY29udGVudCwgbGluZSk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgc3RhcnRPZkNvbW1lbnRUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goU3RhcnRPZkNvbW1lbnRUb2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGFycmF5VXRpbC5maXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdGFydE9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChTdGFydE9mQ29tbWVudFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5TdGFydE9mQ29tbWVudFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC9cXCovO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXJ0T2ZDb21tZW50VG9rZW47XG4iXX0=