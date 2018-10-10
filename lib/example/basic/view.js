'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement;


var BasicLexer = require('../../basic/lexer'),
    TokensTextarea = require('../common/textarea/tokens'),
    EntriesTextarea = require('../common/textarea/entries'),
    ContentTextarea = require('../common/textarea/content'),
    LeftVerticalSplitter = require('../common/verticalSplitter/left');

var BasicExampleView = function (_Element) {
  _inherits(BasicExampleView, _Element);

  function BasicExampleView() {
    _classCallCheck(this, BasicExampleView);

    return _possibleConstructorReturn(this, (BasicExampleView.__proto__ || Object.getPrototypeOf(BasicExampleView)).apply(this, arguments));
  }

  _createClass(BasicExampleView, [{
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      try {
        var entries = this.getEntries(),
            content = this.getContent(),
            basicLexer = BasicLexer.fromEntries(entries),
            tokens = basicLexer.tokenise(content);

        this.hideError();

        this.setTokens(tokens);
      } catch (error) {
        this.showError();

        this.clearTokens();
      }
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);

      return [React.createElement(
        'h1',
        null,
        'Basic Example'
      ), React.createElement(
        'div',
        { className: 'columns' },
        React.createElement(
          SizeableElement,
          null,
          React.createElement(
            'h2',
            null,
            'Entries'
          ),
          React.createElement(EntriesTextarea, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
        ),
        React.createElement(LeftVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Tokens'
          ),
          React.createElement(TokensTextarea, null)
        )
      )];
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      var entries = BasicLexer.entries;


      this.setEntries(entries);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var basicExampleView = Element.fromProperties(BasicExampleView, properties);

      basicExampleView.initialise();

      return basicExampleView;
    }
  }]);

  return BasicExampleView;
}(Element);

Object.assign(BasicExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'basic example'
  }
});

module.exports = BasicExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsIkJhc2ljTGV4ZXIiLCJUb2tlbnNUZXh0YXJlYSIsIkVudHJpZXNUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIkxlZnRWZXJ0aWNhbFNwbGl0dGVyIiwiQmFzaWNFeGFtcGxlVmlldyIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsImhpZGVFcnJvciIsInNldFRva2VucyIsImVycm9yIiwic2hvd0Vycm9yIiwiY2xlYXJUb2tlbnMiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJzZXRFbnRyaWVzIiwiYmFzaWNFeGFtcGxlVmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR00sSUFBRUUsT0FBRixHQUFjSCxJQUFkLENBQUVHLE9BQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NCRixVQUR0QixDQUNFRSxlQURGOzs7QUFHTixJQUFNQyxhQUFhSixRQUFRLG1CQUFSLENBQW5CO0FBQUEsSUFDTUssaUJBQWlCTCxRQUFRLDJCQUFSLENBRHZCO0FBQUEsSUFFTU0sa0JBQWtCTixRQUFRLDRCQUFSLENBRnhCO0FBQUEsSUFHTU8sa0JBQWtCUCxRQUFRLDRCQUFSLENBSHhCO0FBQUEsSUFJTVEsdUJBQXVCUixRQUFRLGlDQUFSLENBSjdCOztJQU1NUyxnQjs7Ozs7Ozs7Ozs7bUNBQ1c7QUFDYixVQUFJO0FBQ0YsWUFBTUMsVUFBVSxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsWUFDTUMsVUFBVSxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsWUFFTUMsYUFBYVYsV0FBV1csV0FBWCxDQUF1QkwsT0FBdkIsQ0FGbkI7QUFBQSxZQUdNTSxTQUFTRixXQUFXRyxRQUFYLENBQW9CTCxPQUFwQixDQUhmOztBQUtBLGFBQUtNLFNBQUw7O0FBRUEsYUFBS0MsU0FBTCxDQUFlSCxNQUFmO0FBQ0QsT0FURCxDQVNFLE9BQU9JLEtBQVAsRUFBYztBQUNkLGFBQUtDLFNBQUw7O0FBRUEsYUFBS0MsV0FBTDtBQUNEO0FBQ0Y7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFVBQU1DLGVBQWUsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckI7O0FBRUEsYUFBUSxDQUVOO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGTSxFQUdOO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLDhCQUFDLGVBQUQsSUFBaUIsU0FBU0QsWUFBMUIsR0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRjtBQUlFLDhCQUFDLGVBQUQsSUFBaUIsU0FBU0EsWUFBMUI7QUFKRixTQURGO0FBT0UsNEJBQUMsb0JBQUQsT0FQRjtBQVFFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLDhCQUFDLGNBQUQ7QUFGRjtBQVJGLE9BSE0sQ0FBUjtBQWtCRDs7O2lDQUVZO0FBQ1gsV0FBS0UsYUFBTDs7QUFEVyxVQUdIaEIsT0FIRyxHQUdTTixVQUhULENBR0hNLE9BSEc7OztBQUtYLFdBQUtpQixVQUFMLENBQWdCakIsT0FBaEI7QUFDRDs7O21DQUVxQmEsVSxFQUFZO0FBQ2hDLFVBQU1LLG1CQUFtQjFCLFFBQVEyQixjQUFSLENBQXVCcEIsZ0JBQXZCLEVBQXlDYyxVQUF6QyxDQUF6Qjs7QUFFQUssdUJBQWlCRSxVQUFqQjs7QUFFQSxhQUFPRixnQkFBUDtBQUNEOzs7O0VBdkQ0QjFCLE87O0FBMEQvQjZCLE9BQU9DLE1BQVAsQ0FBY3ZCLGdCQUFkLEVBQWdDO0FBQzlCd0IsV0FBUyxLQURxQjtBQUU5QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGVyxDQUFoQzs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjVCLGdCQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0O1xuXG5jb25zdCBCYXNpY0xleGVyID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMvbGV4ZXInKSxcbiAgICAgIFRva2Vuc1RleHRhcmVhID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHRhcmVhL3Rva2VucycpLFxuICAgICAgRW50cmllc1RleHRhcmVhID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHRhcmVhL2VudHJpZXMnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBMZWZ0VmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi92ZXJ0aWNhbFNwbGl0dGVyL2xlZnQnKTtcblxuY2xhc3MgQmFzaWNFeGFtcGxlVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMoKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPkJhc2ljIEV4YW1wbGU8L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5FbnRyaWVzPC9oMj5cbiAgICAgICAgICA8RW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TGVmdFZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+VG9rZW5zPC9oMj5cbiAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQmFzaWNMZXhlcjtcblxuICAgIHRoaXMuc2V0RW50cmllcyhlbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgYmFzaWNFeGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQmFzaWNFeGFtcGxlVmlldywgcHJvcGVydGllcyk7XG5cbiAgICBiYXNpY0V4YW1wbGVWaWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBiYXNpY0V4YW1wbGVWaWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCYXNpY0V4YW1wbGVWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2Jhc2ljIGV4YW1wbGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZVZpZXc7XG4iXX0=