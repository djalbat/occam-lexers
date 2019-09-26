'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rules = require('./rules');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiUnVsZXMiLCJyZXF1aXJlIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJ0b2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwidG9rZW5pc2VDb250ZW50cyIsInRva2VucyIsImluQ29tbWVudCIsImluZGV4IiwidG9rZW5zT3JDb250ZW50c0xlbmd0aCIsImxlbmd0aCIsInRva2VuT3JDb250ZW50IiwidG9rZW5PckNvbnRlbnRTdHJpbmciLCJ0b2tlbk9yQ29udGVudENvbnRlbnQiLCJ0b2tlbnNGcm9tQ29udGVudCIsInRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJDbGFzcyIsImVudHJpZXMiLCJsZXhlciIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkOztJQUVNQyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzZCQUVRQyxPLEVBQVM7QUFDaEIsVUFBTUMsbUJBQW1CLEtBQUtDLGtCQUFMLENBQXdCRixPQUF4QixDQUF6Qjs7QUFFQSxXQUFLRyxnQkFBTCxDQUFzQkYsZ0JBQXRCOztBQUVBLFVBQU1HLFNBQVNILGdCQUFmLENBTGdCLENBS2tCOztBQUVsQyxhQUFPRyxNQUFQO0FBQ0Q7OztxQ0FFZ0JILGdCLEVBQWtCO0FBQ2pDLFVBQUlJLFlBQVksS0FBaEI7O0FBRUEsVUFBSUMsUUFBUSxDQUFaO0FBQUEsVUFDSUMseUJBQXlCTixpQkFBaUJPLE1BRDlDOztBQUdBLGFBQU9GLFFBQVFDLHNCQUFmLEVBQXVDO0FBQ3JDLFlBQU1FLGlCQUFpQlIsaUJBQWlCSyxLQUFqQixDQUF2QjtBQUFBLFlBQ01JLHVCQUF3QixPQUFPRCxjQUFQLEtBQTBCLFFBRHhEO0FBQUEsWUFFTUUsd0JBQXdCRCxvQkFGOUIsQ0FEcUMsQ0FHZTs7QUFFcEQsWUFBSUMscUJBQUosRUFBMkI7QUFDekIsY0FBTVAsU0FBUyxFQUFmO0FBQUEsY0FDTUosVUFBVVMsY0FEaEIsQ0FEeUIsQ0FFTzs7QUFFaENKLHNCQUFZLEtBQUtPLGlCQUFMLENBQXVCUixNQUF2QixFQUErQkosT0FBL0IsRUFBd0NLLFNBQXhDLENBQVo7O0FBRUEsY0FBTVEsZUFBZVQsT0FBT0ksTUFBNUI7QUFBQSxjQUNNTSxRQUFRUixLQURkO0FBQUEsY0FDc0I7QUFDaEJTLHdCQUFjLENBRnBCOztBQUlBQyxpQkFBT2YsZ0JBQVAsRUFBeUJhLEtBQXpCLEVBQWdDQyxXQUFoQyxFQUE2Q1gsTUFBN0M7O0FBRUFHLG9DQUEwQk0sZUFBZSxDQUF6Qzs7QUFFQVAsbUJBQVNPLGVBQWUsQ0FBeEI7QUFDRDs7QUFFRFA7QUFDRDtBQUNGOzs7Z0NBRWtCVyxLLEVBQU87QUFDbEIsVUFBRUMsT0FBRixHQUFjRCxLQUFkLENBQUVDLE9BQUY7QUFBQSxVQUNBQyxLQURBLEdBQ1FyQixZQUFZc0IsV0FBWixDQUF3QkgsS0FBeEIsRUFBK0JDLE9BQS9CLENBRFI7OztBQUdOLGFBQU9DLEtBQVA7QUFDRDs7O2dDQUVrQkYsSyxFQUFPQyxPLEVBQVM7QUFDakMsVUFBTW5CLFFBQVFILE1BQU13QixXQUFOLENBQWtCRixPQUFsQixDQUFkO0FBQUEsVUFDTUMsUUFBUSxJQUFJRixLQUFKLENBQVVsQixLQUFWLENBRGQ7O0FBR0EsYUFBT29CLEtBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJ4QixXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50KSB7XHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzID0gdGhpcy50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCk7XHJcblxyXG4gICAgdGhpcy50b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHM7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBsZXQgaW5Db21tZW50ID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gMCxcclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoID0gdG9rZW5zT3JDb250ZW50cy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aCkge1xyXG4gICAgICBjb25zdCB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbaW5kZXhdLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudFN0cmluZyA9ICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRDb250ZW50ID0gdG9rZW5PckNvbnRlbnRTdHJpbmc7IC8vL1xyXG5cclxuICAgICAgaWYgKHRva2VuT3JDb250ZW50Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudDsgLy8vXHJcblxyXG4gICAgICAgIGluQ29tbWVudCA9IHRoaXMudG9rZW5zRnJvbUNvbnRlbnQodG9rZW5zLCBjb250ZW50LCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIGxleGVyID0gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=