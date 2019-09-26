'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rules = require('./rules');

var arrayUtilities = necessary.arrayUtilities,
    splice = arrayUtilities.splice;

var CommonLexer = function () {
  function CommonLexer(rules) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
  }

  _createClass(CommonLexer, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'tokenise',
    value: function tokenise(content) {
      var tokensOrContents = this.tokeniseEndOfLines(content);

      this.tokeniseContents(tokensOrContents);

      var tokens = tokensOrContents; ///

      return tokens;
    }
  }, {
    key: 'tokeniseContents',
    value: function tokeniseContents(tokensOrContents) {
      var inComment = false;

      var index = 0,
          tokensOrContentsLength = tokensOrContents.length;

      while (index < tokensOrContentsLength) {
        var tokenOrContent = tokensOrContents[index],
            tokenOrContentString = typeof tokenOrContent === 'string',
            tokenOrContentContent = tokenOrContentString; ///

        if (tokenOrContentContent) {
          var tokens = [],
              content = tokenOrContent; ///

          inComment = this.tokensFromContent(tokens, content, inComment);

          var tokensLength = tokens.length,
              start = index,
              ///
          deleteCount = 1;

          splice(tokensOrContents, start, deleteCount, tokens);

          tokensOrContentsLength += tokensLength - 1;

          index += tokensLength - 1;
        }

        index++;
      }
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(Class) {
      var entries = Class.entries,
          lexer = CommonLexer.fromEntries(Class, entries);


      return lexer;
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(Class, entries) {
      var rules = Rules.fromEntries(entries),
          lexer = new Class(rules);

      return lexer;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJ1bGVzIiwiYXJyYXlVdGlsaXRpZXMiLCJzcGxpY2UiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsInRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJ0b2tlbmlzZUNvbnRlbnRzIiwidG9rZW5zIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsInRva2Vuc0Zyb21Db250ZW50IiwidG9rZW5zTGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsIkNsYXNzIiwiZW50cmllcyIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsU0FBUixDQUFkOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxNQURGLEdBQ2FELGNBRGIsQ0FDRUMsTUFERjs7SUFHQUMsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUUMsTyxFQUFTO0FBQ2hCLFVBQU1DLG1CQUFtQixLQUFLQyxrQkFBTCxDQUF3QkYsT0FBeEIsQ0FBekI7O0FBRUEsV0FBS0csZ0JBQUwsQ0FBc0JGLGdCQUF0Qjs7QUFFQSxVQUFNRyxTQUFTSCxnQkFBZixDQUxnQixDQUtrQjs7QUFFbEMsYUFBT0csTUFBUDtBQUNEOzs7cUNBRWdCSCxnQixFQUFrQjtBQUNqQyxVQUFJSSxZQUFZLEtBQWhCOztBQUVBLFVBQUlDLFFBQVEsQ0FBWjtBQUFBLFVBQ0lDLHlCQUF5Qk4saUJBQWlCTyxNQUQ5Qzs7QUFHQSxhQUFPRixRQUFRQyxzQkFBZixFQUF1QztBQUNyQyxZQUFNRSxpQkFBaUJSLGlCQUFpQkssS0FBakIsQ0FBdkI7QUFBQSxZQUNNSSx1QkFBd0IsT0FBT0QsY0FBUCxLQUEwQixRQUR4RDtBQUFBLFlBRU1FLHdCQUF3QkQsb0JBRjlCLENBRHFDLENBR2U7O0FBRXBELFlBQUlDLHFCQUFKLEVBQTJCO0FBQ3pCLGNBQU1QLFNBQVMsRUFBZjtBQUFBLGNBQ01KLFVBQVVTLGNBRGhCLENBRHlCLENBRU87O0FBRWhDSixzQkFBWSxLQUFLTyxpQkFBTCxDQUF1QlIsTUFBdkIsRUFBK0JKLE9BQS9CLEVBQXdDSyxTQUF4QyxDQUFaOztBQUVBLGNBQU1RLGVBQWVULE9BQU9JLE1BQTVCO0FBQUEsY0FDTU0sUUFBUVIsS0FEZDtBQUFBLGNBQ3NCO0FBQ2hCUyx3QkFBYyxDQUZwQjs7QUFJQWxCLGlCQUFPSSxnQkFBUCxFQUF5QmEsS0FBekIsRUFBZ0NDLFdBQWhDLEVBQTZDWCxNQUE3Qzs7QUFFQUcsb0NBQTBCTSxlQUFlLENBQXpDOztBQUVBUCxtQkFBU08sZUFBZSxDQUF4QjtBQUNEOztBQUVEUDtBQUNEO0FBQ0Y7OztnQ0FFa0JVLEssRUFBTztBQUNsQixVQUFFQyxPQUFGLEdBQWNELEtBQWQsQ0FBRUMsT0FBRjtBQUFBLFVBQ0FDLEtBREEsR0FDUXBCLFlBQVlxQixXQUFaLENBQXdCSCxLQUF4QixFQUErQkMsT0FBL0IsQ0FEUjs7O0FBR04sYUFBT0MsS0FBUDtBQUNEOzs7Z0NBRWtCRixLLEVBQU9DLE8sRUFBUztBQUNqQyxVQUFNbEIsUUFBUUosTUFBTXdCLFdBQU4sQ0FBa0JGLE9BQWxCLENBQWQ7QUFBQSxVQUNNQyxRQUFRLElBQUlGLEtBQUosQ0FBVWpCLEtBQVYsQ0FEZDs7QUFHQSxhQUFPbUIsS0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQnZCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XHJcblxyXG5jb25zdCBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKTtcclxuXHJcbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBzcGxpY2UgfSA9IGFycmF5VXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gdGhpcy50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBsZXQgaW5Db21tZW50ID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gMCxcclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoID0gdG9rZW5zT3JDb250ZW50cy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aCkge1xyXG4gICAgICBjb25zdCB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbaW5kZXhdLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudFN0cmluZyA9ICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRDb250ZW50ID0gdG9rZW5PckNvbnRlbnRTdHJpbmc7IC8vL1xyXG5cclxuICAgICAgaWYgKHRva2VuT3JDb250ZW50Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudDsgLy8vXHJcblxyXG4gICAgICAgIGluQ29tbWVudCA9IHRoaXMudG9rZW5zRnJvbUNvbnRlbnQodG9rZW5zLCBjb250ZW50LCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIGxleGVyID0gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=