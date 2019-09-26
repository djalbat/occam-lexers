'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    tokenUtilities = require('../utilities/token'),
    EndOfLineNonSignificantToken = require('../common/token/nonSignificant/endOfLine');

var tokenise = tokenUtilities.tokenise,
    rules = Rules.fromEntries(entries);

var BasicLexer = function (_CommonLexer) {
  _inherits(BasicLexer, _CommonLexer);

  function BasicLexer() {
    _classCallCheck(this, BasicLexer);

    return _possibleConstructorReturn(this, (BasicLexer.__proto__ || Object.getPrototypeOf(BasicLexer)).apply(this, arguments));
  }

  _createClass(BasicLexer, [{
    key: 'tokensFromContent',
    value: function tokensFromContent(tokens, content, inComment) {
      var _loop = function _loop() {
        var significantToken = null;

        rules.some(function (rule) {
          significantToken = rule.match(content);

          if (significantToken !== null) {
            return true;
          }
        });

        if (significantToken === null) {
          throw new Error('The content \'' + content + '\' cannot be tokenised.');
        }

        var token = significantToken; ///

        tokens.push(token);

        var tokenContentLength = token.getContentLength(),
            start = tokenContentLength; ///

        content = content = content.substring(start);
      };

      while (content !== '') {
        _loop();
      }

      return inComment;
    }
  }, {
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(content) {
      return tokenise(content, EndOfLineNonSignificantToken);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(BasicLexer);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(BasicLexer, entries);
    }
  }]);

  return BasicLexer;
}(CommonLexer);

Object.assign(BasicLexer, {
  entries: entries
});

module.exports = BasicLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIlJ1bGVzIiwiQ29tbW9uTGV4ZXIiLCJ0b2tlblV0aWxpdGllcyIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJ0b2tlbmlzZSIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJCYXNpY0xleGVyIiwidG9rZW5zIiwiY29udGVudCIsImluQ29tbWVudCIsInNpZ25pZmljYW50VG9rZW4iLCJzb21lIiwicnVsZSIsIm1hdGNoIiwiRXJyb3IiLCJ0b2tlbiIsInB1c2giLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwic3RhcnQiLCJzdWJzdHJpbmciLCJmcm9tTm90aGluZyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxpQkFBUixDQURkO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxpQkFBUixDQUZwQjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxvQkFBUixDQUh2QjtBQUFBLElBSU1JLCtCQUErQkosUUFBUSwwQ0FBUixDQUpyQzs7QUFNTSxJQUFFSyxRQUFGLEdBQWVGLGNBQWYsQ0FBRUUsUUFBRjtBQUFBLElBQ0FDLEtBREEsR0FDUUwsTUFBTU0sV0FBTixDQUFrQlIsT0FBbEIsQ0FEUjs7SUFHQVMsVTs7Ozs7Ozs7Ozs7c0NBQ2NDLE0sRUFBUUMsTyxFQUFTQyxTLEVBQVc7QUFBQTtBQUUxQyxZQUFJQyxtQkFBbUIsSUFBdkI7O0FBRUFOLGNBQU1PLElBQU4sQ0FBVyxVQUFDQyxJQUFELEVBQVU7QUFDbkJGLDZCQUFtQkUsS0FBS0MsS0FBTCxDQUFXTCxPQUFYLENBQW5COztBQUVBLGNBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixtQkFBTyxJQUFQO0FBQ0Q7QUFDRixTQU5EOztBQVFBLFlBQUlBLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixnQkFBTSxJQUFJSSxLQUFKLG9CQUEwQk4sT0FBMUIsNkJBQU47QUFDRDs7QUFFRCxZQUFNTyxRQUFRTCxnQkFBZCxDQWhCMEMsQ0FnQlY7O0FBRWhDSCxlQUFPUyxJQUFQLENBQVlELEtBQVo7O0FBRUEsWUFBTUUscUJBQXFCRixNQUFNRyxnQkFBTixFQUEzQjtBQUFBLFlBQ01DLFFBQVFGLGtCQURkLENBcEIwQyxDQXFCUjs7QUFFbENULGtCQUFVQSxVQUFVQSxRQUFRWSxTQUFSLENBQWtCRCxLQUFsQixDQUFwQjtBQXZCMEM7O0FBQzVDLGFBQU9YLFlBQVksRUFBbkIsRUFBdUI7QUFBQTtBQXVCdEI7O0FBRUQsYUFBT0MsU0FBUDtBQUNEOzs7dUNBRWtCRCxPLEVBQVM7QUFBRSxhQUFPTCxTQUFTSyxPQUFULEVBQWtCTiw0QkFBbEIsQ0FBUDtBQUF5RDs7O2tDQUVsRTtBQUFFLGFBQU9GLFlBQVlxQixXQUFaLENBQXdCZixVQUF4QixDQUFQO0FBQTZDOzs7Z0NBRWpEVCxPLEVBQVM7QUFBRSxhQUFPRyxZQUFZSyxXQUFaLENBQXdCQyxVQUF4QixFQUFvQ1QsT0FBcEMsQ0FBUDtBQUFzRDs7OztFQWxDN0RHLFc7O0FBcUN6QnNCLE9BQU9DLE1BQVAsQ0FBY2pCLFVBQWQsRUFBMEI7QUFDeEJUO0FBRHdCLENBQTFCOztBQUlBMkIsT0FBT0MsT0FBUCxHQUFpQm5CLFVBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICB0b2tlblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90b2tlbicpLFxyXG4gICAgICBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZScpO1xyXG5cclxuY29uc3QgeyB0b2tlbmlzZSB9ID0gdG9rZW5VdGlsaXRpZXMsXHJcbiAgICAgIHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG5jbGFzcyBCYXNpY0xleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2Vuc0Zyb21Db250ZW50KHRva2VucywgY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgcnVsZXMuc29tZSgocnVsZSkgPT4ge1xyXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudExlbmd0aCA9IHRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgICAgc3RhcnQgPSB0b2tlbkNvbnRlbnRMZW5ndGg7IC8vL1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7IHJldHVybiB0b2tlbmlzZShjb250ZW50LCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhCYXNpY0xleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQmFzaWNMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihCYXNpY0xleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmFzaWNMZXhlcjtcclxuIl19