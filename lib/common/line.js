'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

var Line = function () {
  function Line(content, number) {
    _classCallCheck(this, Line);

    this.content = content;
    this.number = number;

    this.tokens = undefined;
    this.inComment = undefined;
    this.previousNumber = undefined;

    this.removed = false;
  }

  _createClass(Line, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getNumber',
    value: function getNumber() {
      return this.number;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      return this.inComment;
    }
  }, {
    key: 'getPreviousNumber',
    value: function getPreviousNumber() {
      return this.previousNumber;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.tokens.reduce(function (html, token) {
        var tokenHTML = token.getHTML();

        html += tokenHTML;

        return html;
      }, '');

      html += '\n';

      return html;
    }
  }, {
    key: 'isRemoved',
    value: function isRemoved() {
      return this.removed;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.removed = true;
    }
  }, {
    key: 'setNumber',
    value: function setNumber(number) {
      this.number = number;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'setInComment',
    value: function setInComment(inComment) {
      this.inComment = inComment;
    }
  }, {
    key: 'setPreviousNumber',
    value: function setPreviousNumber(previousNumber) {
      this.previousNumber = previousNumber;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
      var lineNumber = context.getLineNumber(),
          number = lineNumber,
          ///
      line = new Line(content, number),
          tokensOrContents = [content],
          inComment = CommentTokens.pass(tokensOrContents, line, context),
          previousNumber = null;

      StringTokens.pass(tokensOrContents, line);
      WhitespaceTokens.pass(tokensOrContents, line);

      var tokens = SignificantTokens.pass(tokensOrContents, line, rules);

      line.setTokens(tokens);

      line.setInComment(inComment);

      line.setPreviousNumber(previousNumber);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJudW1iZXIiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJpbkNvbW1lbnQiLCJwcmV2aW91c051bWJlciIsInJlbW92ZWQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwicHVzaCIsImNvbnRleHQiLCJydWxlcyIsIkNvbW1lbnRUb2tlbnMiLCJTdHJpbmdUb2tlbnMiLCJXaGl0ZXNwYWNlVG9rZW5zIiwibGluZU51bWJlciIsImdldExpbmVOdW1iZXIiLCJsaW5lIiwidG9rZW5zT3JDb250ZW50cyIsInBhc3MiLCJzZXRUb2tlbnMiLCJzZXRJbkNvbW1lbnQiLCJzZXRQcmV2aW91c051bWJlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSxxQkFBUixDQUR4Qjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QjtBQUFBOztBQUMzQixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxTQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkQsU0FBakI7QUFDQSxTQUFLRSxjQUFMLEdBQXNCRixTQUF0Qjs7QUFFQSxTQUFLRyxPQUFMLEdBQWUsS0FBZjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLTixPQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRSxTQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLQyxjQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlFLE9BQU8sS0FBS0wsTUFBTCxDQUFZTSxNQUFaLENBQW1CLFVBQVNELElBQVQsRUFBZUUsS0FBZixFQUFzQjtBQUNsRCxZQUFJQyxZQUFZRCxNQUFNRSxPQUFOLEVBQWhCOztBQUVBSixnQkFBUUcsU0FBUjs7QUFFQSxlQUFPSCxJQUFQO0FBQ0QsT0FOVSxFQU1SLEVBTlEsQ0FBWDs7QUFRQUEsY0FBUSxJQUFSOztBQUVBLGFBQU9BLElBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRCxPQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtBLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7Ozs4QkFFU0wsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OEJBRVNDLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2lDQUVZRSxTLEVBQVc7QUFDdEIsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7O3NDQUVpQkMsYyxFQUFnQjtBQUNoQyxXQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNEOzs7OEJBRVNJLEssRUFBTztBQUNmLFdBQUtQLE1BQUwsQ0FBWVUsSUFBWixDQUFpQkgsS0FBakI7QUFDRDs7O2dDQUVrQlYsSSxFQUFNQyxPLEVBQVNhLE8sRUFBU0MsSyxFQUFPQyxhLEVBQWVDLFksRUFBY0MsZ0IsRUFBa0I7QUFDL0YsVUFBSUMsYUFBYUwsUUFBUU0sYUFBUixFQUFqQjtBQUFBLFVBQ0lsQixTQUFTaUIsVUFEYjtBQUFBLFVBQzBCO0FBQ3RCRSxhQUFPLElBQUlyQixJQUFKLENBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLENBRlg7QUFBQSxVQUdJb0IsbUJBQW1CLENBQUNyQixPQUFELENBSHZCO0FBQUEsVUFJSUksWUFBWVcsY0FBY08sSUFBZCxDQUFtQkQsZ0JBQW5CLEVBQXFDRCxJQUFyQyxFQUEyQ1AsT0FBM0MsQ0FKaEI7QUFBQSxVQUtJUixpQkFBaUIsSUFMckI7O0FBT0FXLG1CQUFhTSxJQUFiLENBQWtCRCxnQkFBbEIsRUFBb0NELElBQXBDO0FBQ0FILHVCQUFpQkssSUFBakIsQ0FBc0JELGdCQUF0QixFQUF3Q0QsSUFBeEM7O0FBRUEsVUFBSWxCLFNBQVNKLGtCQUFrQndCLElBQWxCLENBQXVCRCxnQkFBdkIsRUFBeUNELElBQXpDLEVBQStDTixLQUEvQyxDQUFiOztBQUVBTSxXQUFLRyxTQUFMLENBQWVyQixNQUFmOztBQUVBa0IsV0FBS0ksWUFBTCxDQUFrQnBCLFNBQWxCOztBQUVBZ0IsV0FBS0ssaUJBQUwsQ0FBdUJwQixjQUF2Qjs7QUFFQSxhQUFPZSxJQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCNUIsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5wcmV2aW91c051bWJlciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLnJlbW92ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0TnVtYmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgaXNJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c051bWJlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnByZXZpb3VzTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0SFRNTCgpIHtcclxuICAgIHZhciBodG1sID0gdGhpcy50b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XHJcbiAgICAgIHZhciB0b2tlbkhUTUwgPSB0b2tlbi5nZXRIVE1MKCk7XHJcbiAgICAgIFxyXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIGlzUmVtb3ZlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlbW92ZWQ7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLnJlbW92ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0TnVtYmVyKG51bWJlcikge1xyXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHNldEluQ29tbWVudChpbkNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNOdW1iZXIocHJldmlvdXNOdW1iZXIpIHtcclxuICAgIHRoaXMucHJldmlvdXNOdW1iZXIgPSBwcmV2aW91c051bWJlcjtcclxuICB9XHJcblxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICB2YXIgbGluZU51bWJlciA9IGNvbnRleHQuZ2V0TGluZU51bWJlcigpLFxyXG4gICAgICAgIG51bWJlciA9IGxpbmVOdW1iZXIsICAvLy9cclxuICAgICAgICBsaW5lID0gbmV3IExpbmUoY29udGVudCwgbnVtYmVyKSxcclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdLFxyXG4gICAgICAgIGluQ29tbWVudCA9IENvbW1lbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb250ZXh0KSxcclxuICAgICAgICBwcmV2aW91c051bWJlciA9IG51bGw7XHJcblxyXG4gICAgU3RyaW5nVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgdmFyIHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgcnVsZXMpO1xyXG5cclxuICAgIGxpbmUuc2V0VG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgbGluZS5zZXRJbkNvbW1lbnQoaW5Db21tZW50KTtcclxuXHJcbiAgICBsaW5lLnNldFByZXZpb3VzTnVtYmVyKHByZXZpb3VzTnVtYmVyKTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19