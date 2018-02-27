'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EndOfCommentToken = require('../token/nonSignificant/comment/endOf'),
    StartOfCommentToken = require('../token/nonSignificant/comment/startOf'),
    MiddleOfCommentToken = require('../token/nonSignificant/comment/middleOf');

var CommentTokens = function () {
  function CommentTokens() {
    _classCallCheck(this, CommentTokens);
  }

  _createClass(CommentTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, inComment) {
      var content = tokensOrContents.pop(),
          commentToken = void 0,
          commentTokenLength = void 0;

      while (content !== '') {
        var contentLength = content.length;

        if (inComment) {
          var endOfCommentTokenPositionWithinContent = EndOfCommentToken.positionWithinContent(content);

          if (endOfCommentTokenPositionWithinContent === 0) {
            inComment = false;

            commentToken = EndOfCommentToken.fromWithinContent(content);

            commentTokenLength = commentToken.getLength();
          } else {
            var middleOfCommentTokenLength = minimumBarMinusOne(endOfCommentTokenPositionWithinContent, contentLength);

            commentToken = MiddleOfCommentToken.fromContent(content, middleOfCommentTokenLength);

            commentTokenLength = middleOfCommentTokenLength;
          }

          var previousCommentToken = tokensOrContents.pop();

          commentToken = previousCommentToken === undefined ? commentToken : previousCommentToken.merge(commentToken);

          tokensOrContents.push(commentToken);

          content = content.substring(commentTokenLength);
        } else {
          var startOfCommentTokenPositionWithinContent = StartOfCommentToken.positionWithinContent(content);

          if (startOfCommentTokenPositionWithinContent === 0) {
            inComment = true;

            commentToken = StartOfCommentToken.fromWithinContent(content);

            commentTokenLength = commentToken.getLength();

            tokensOrContents.push(commentToken);

            content = content.substring(commentTokenLength);
          } else {
            contentLength = minimumBarMinusOne(startOfCommentTokenPositionWithinContent, contentLength);

            var remainingContent = content.substring(contentLength);

            content = content.substring(0, contentLength);

            tokensOrContents.push(content);

            content = remainingContent;
          }
        }
      }

      return inComment;
    }
  }]);

  return CommentTokens;
}();

module.exports = CommentTokens;

function minimumBarMinusOne() {
  var values = Array.prototype.slice.call(arguments),
      minimumBarMinusOne = values.reduce(function (minimumBarMinusOne, value) {
    if (value > -1) {
      minimumBarMinusOne = minimumBarMinusOne !== null ? Math.min(minimumBarMinusOne, value) : value;
    }

    return minimumBarMinusOne;
  }, null);

  return minimumBarMinusOne;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW5zL2NvbW1lbnQuanMiXSwibmFtZXMiOlsiRW5kT2ZDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiU3RhcnRPZkNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mQ29tbWVudFRva2VuIiwiQ29tbWVudFRva2VucyIsInRva2Vuc09yQ29udGVudHMiLCJpbkNvbW1lbnQiLCJjb250ZW50IiwicG9wIiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuTGVuZ3RoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJnZXRMZW5ndGgiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCIsIm1pbmltdW1CYXJNaW51c09uZSIsImZyb21Db250ZW50IiwicHJldmlvdXNDb21tZW50VG9rZW4iLCJ1bmRlZmluZWQiLCJtZXJnZSIsInB1c2giLCJzdWJzdHJpbmciLCJzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50IiwicmVtYWluaW5nQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ2YWx1ZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsInJlZHVjZSIsInZhbHVlIiwiTWF0aCIsIm1pbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG9CQUFvQkMsUUFBUSx1Q0FBUixDQUExQjtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSx5Q0FBUixDQUQ1QjtBQUFBLElBRU1FLHVCQUF1QkYsUUFBUSwwQ0FBUixDQUY3Qjs7SUFJTUcsYTs7Ozs7Ozt5QkFDUUMsZ0IsRUFBa0JDLFMsRUFBVztBQUN2QyxVQUFJQyxVQUFVRixpQkFBaUJHLEdBQWpCLEVBQWQ7QUFBQSxVQUNJQyxxQkFESjtBQUFBLFVBRUlDLDJCQUZKOztBQUlBLGFBQU9ILFlBQVksRUFBbkIsRUFBdUI7QUFDckIsWUFBSUksZ0JBQWdCSixRQUFRSyxNQUE1Qjs7QUFFQSxZQUFJTixTQUFKLEVBQWU7QUFDYixjQUFNTyx5Q0FBeUNiLGtCQUFrQmMscUJBQWxCLENBQXdDUCxPQUF4QyxDQUEvQzs7QUFFQSxjQUFJTSwyQ0FBMkMsQ0FBL0MsRUFBa0Q7QUFDaERQLHdCQUFZLEtBQVo7O0FBRUFHLDJCQUFlVCxrQkFBa0JlLGlCQUFsQixDQUFvQ1IsT0FBcEMsQ0FBZjs7QUFFQUcsaUNBQXFCRCxhQUFhTyxTQUFiLEVBQXJCO0FBQ0QsV0FORCxNQU1PO0FBQ0wsZ0JBQU1DLDZCQUE2QkMsbUJBQW1CTCxzQ0FBbkIsRUFBMkRGLGFBQTNELENBQW5DOztBQUVBRiwyQkFBZU4scUJBQXFCZ0IsV0FBckIsQ0FBaUNaLE9BQWpDLEVBQTBDVSwwQkFBMUMsQ0FBZjs7QUFFQVAsaUNBQXFCTywwQkFBckI7QUFDRDs7QUFFRCxjQUFNRyx1QkFBdUJmLGlCQUFpQkcsR0FBakIsRUFBN0I7O0FBRUFDLHlCQUFnQlcseUJBQXlCQyxTQUExQixHQUNHWixZQURILEdBRUtXLHFCQUFxQkUsS0FBckIsQ0FBMkJiLFlBQTNCLENBRnBCOztBQUlBSiwyQkFBaUJrQixJQUFqQixDQUFzQmQsWUFBdEI7O0FBRUFGLG9CQUFVQSxRQUFRaUIsU0FBUixDQUFrQmQsa0JBQWxCLENBQVY7QUFDRCxTQTFCRCxNQTBCTztBQUNMLGNBQU1lLDJDQUEyQ3ZCLG9CQUFvQlkscUJBQXBCLENBQTBDUCxPQUExQyxDQUFqRDs7QUFFQSxjQUFJa0IsNkNBQTZDLENBQWpELEVBQW9EO0FBQ2xEbkIsd0JBQVksSUFBWjs7QUFFQUcsMkJBQWVQLG9CQUFvQmEsaUJBQXBCLENBQXNDUixPQUF0QyxDQUFmOztBQUVBRyxpQ0FBcUJELGFBQWFPLFNBQWIsRUFBckI7O0FBRUFYLDZCQUFpQmtCLElBQWpCLENBQXNCZCxZQUF0Qjs7QUFFQUYsc0JBQVVBLFFBQVFpQixTQUFSLENBQWtCZCxrQkFBbEIsQ0FBVjtBQUNELFdBVkQsTUFVTztBQUNMQyw0QkFBZ0JPLG1CQUFtQk8sd0NBQW5CLEVBQTZEZCxhQUE3RCxDQUFoQjs7QUFFQSxnQkFBTWUsbUJBQW1CbkIsUUFBUWlCLFNBQVIsQ0FBa0JiLGFBQWxCLENBQXpCOztBQUVBSixzQkFBVUEsUUFBUWlCLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJiLGFBQXJCLENBQVY7O0FBRUFOLDZCQUFpQmtCLElBQWpCLENBQXNCaEIsT0FBdEI7O0FBRUFBLHNCQUFVbUIsZ0JBQVY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT3BCLFNBQVA7QUFDRDs7Ozs7O0FBR0hxQixPQUFPQyxPQUFQLEdBQWlCeEIsYUFBakI7O0FBRUEsU0FBU2Msa0JBQVQsR0FBOEI7QUFDNUIsTUFBTVcsU0FBU0MsTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLElBQXRCLENBQTJCQyxTQUEzQixDQUFmO0FBQUEsTUFDTWhCLHFCQUFxQlcsT0FBT00sTUFBUCxDQUFjLFVBQVNqQixrQkFBVCxFQUE2QmtCLEtBQTdCLEVBQW9DO0FBQ3JFLFFBQUlBLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2RsQiwyQkFBc0JBLHVCQUF1QixJQUF4QixHQUNFbUIsS0FBS0MsR0FBTCxDQUFTcEIsa0JBQVQsRUFBNkJrQixLQUE3QixDQURGLEdBRUlBLEtBRnpCO0FBR0Q7O0FBRUQsV0FBT2xCLGtCQUFQO0FBQ0QsR0FSb0IsRUFRbEIsSUFSa0IsQ0FEM0I7O0FBV0EsU0FBT0Esa0JBQVA7QUFDRCIsImZpbGUiOiJjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mJyksXHJcbiAgICAgIFN0YXJ0T2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3N0YXJ0T2YnKSxcclxuICAgICAgTWlkZGxlT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L21pZGRsZU9mJyk7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBpbkNvbW1lbnQpIHtcclxuICAgIGxldCBjb250ZW50ID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKSxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICBsZXQgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKGluQ29tbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGggPSBtaW5pbXVtQmFyTWludXNPbmUoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IE1pZGRsZU9mQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29tbWVudFRva2VuID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKTtcclxuXHJcbiAgICAgICAgY29tbWVudFRva2VuID0gKHByZXZpb3VzQ29tbWVudFRva2VuID09PSB1bmRlZmluZWQpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VG9rZW4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb21tZW50VG9rZW4ubWVyZ2UoY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBTdGFydE9mQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRMZW5ndGggPSBtaW5pbXVtQmFyTWludXNPbmUoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuXHJcbmZ1bmN0aW9uIG1pbmltdW1CYXJNaW51c09uZSgpIHtcclxuICBjb25zdCB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxyXG4gICAgICAgIG1pbmltdW1CYXJNaW51c09uZSA9IHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24obWluaW11bUJhck1pbnVzT25lLCB2YWx1ZSkge1xyXG4gICAgICAgICAgaWYgKHZhbHVlID4gLTEpIHtcclxuICAgICAgICAgICAgbWluaW11bUJhck1pbnVzT25lID0gKG1pbmltdW1CYXJNaW51c09uZSAhPT0gbnVsbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKG1pbmltdW1CYXJNaW51c09uZSwgdmFsdWUpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgcmV0dXJuIG1pbmltdW1CYXJNaW51c09uZTtcclxuICAgICAgICB9LCBudWxsKTtcclxuXHJcbiAgcmV0dXJuIG1pbmltdW1CYXJNaW51c09uZTtcclxufVxyXG4iXX0=