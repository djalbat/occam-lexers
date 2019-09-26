'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement;


var TokensTextarea = require('./common/textarea/tokens'),
    EntriesTextarea = require('./common/textarea/entries'),
    ContentTextarea = require('./common/textarea/content'),
    MainVerticalSplitter = require('./common/verticalSplitter/main');

var ExampleView = function (_Element) {
  _inherits(ExampleView, _Element);

  function ExampleView() {
    _classCallCheck(this, ExampleView);

    return _possibleConstructorReturn(this, (ExampleView.__proto__ || Object.getPrototypeOf(ExampleView)).apply(this, arguments));
  }

  _createClass(ExampleView, [{
    key: 'getTokens',
    value: function getTokens() {
      var Lexer = this.getLexer(),
          entries = this.getEntries(),
          content = this.getContent(),
          lexer = Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

      return tokens;
    }
  }, {
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      // try {
      var tokens = this.getTokens();

      this.hideError();

      this.setTokens(tokens);
      // } catch (error) {
      //   this.showError();
      //
      //   this.clearTokens();
      // }
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var title = this.getTitle(),
          keyUpHandler = this.keyUpHandler.bind(this);

      return [React.createElement(
        'h1',
        null,
        title
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
        React.createElement(MainVerticalSplitter, null),
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

      var Lexer = this.getLexer(),
          initialContent = this.getInitialContent(),
          content = initialContent,
          entries = Lexer.entries;


      this.setContent(content);
      this.setEntries(entries);

      this.keyUpHandler();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var exampleView = Element.fromProperties(Class, properties);

      exampleView.initialise();

      return exampleView;
    }
  }]);

  return ExampleView;
}(Element);

Object.assign(ExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'example'
  }
});

module.exports = ExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsIlRva2Vuc1RleHRhcmVhIiwiRW50cmllc1RleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJFeGFtcGxlVmlldyIsIkxleGVyIiwiZ2V0TGV4ZXIiLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInRva2VucyIsInRva2VuaXNlIiwiZ2V0VG9rZW5zIiwiaGlkZUVycm9yIiwic2V0VG9rZW5zIiwicHJvcGVydGllcyIsInRpdGxlIiwiZ2V0VGl0bGUiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiZ2V0SW5pdGlhbENvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0RW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdNLElBQUVFLE9BQUYsR0FBY0gsSUFBZCxDQUFFRyxPQUFGO0FBQUEsSUFDRUMsZUFERixHQUNzQkYsVUFEdEIsQ0FDRUUsZUFERjs7O0FBR04sSUFBTUMsaUJBQWlCSixRQUFRLDBCQUFSLENBQXZCO0FBQUEsSUFDTUssa0JBQWtCTCxRQUFRLDJCQUFSLENBRHhCO0FBQUEsSUFFTU0sa0JBQWtCTixRQUFRLDJCQUFSLENBRnhCO0FBQUEsSUFHTU8sdUJBQXVCUCxRQUFRLGdDQUFSLENBSDdCOztJQUtNUSxXOzs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFVBQU1DLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsVUFBVSxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsVUFBVSxLQUFLQyxVQUFMLEVBRmhCO0FBQUEsVUFHTUMsUUFBUU4sTUFBTU8sV0FBTixDQUFrQkwsT0FBbEIsQ0FIZDtBQUFBLFVBSU1NLFNBQVNGLE1BQU1HLFFBQU4sQ0FBZUwsT0FBZixDQUpmOztBQU1BLGFBQU9JLE1BQVA7QUFDRDs7O21DQUVjO0FBQ2I7QUFDRSxVQUFNQSxTQUFTLEtBQUtFLFNBQUwsRUFBZjs7QUFFQSxXQUFLQyxTQUFMOztBQUVBLFdBQUtDLFNBQUwsQ0FBZUosTUFBZjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7O2tDQUVhSyxVLEVBQVk7QUFDeEIsVUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxlQUFlLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRHJCOztBQUdBLGFBQVEsQ0FFTjtBQUFBO0FBQUE7QUFBS0g7QUFBTCxPQUZNLEVBR047QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQyx5QkFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsZUFBRCxJQUFpQixTQUFTRSxZQUExQixHQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGO0FBSUUsOEJBQUMsZUFBRCxJQUFpQixTQUFTQSxZQUExQjtBQUpGLFNBREY7QUFPRSw0QkFBQyxvQkFBRCxPQVBGO0FBUUU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsY0FBRDtBQUZGO0FBUkYsT0FITSxDQUFSO0FBa0JEOzs7aUNBRVk7QUFDWCxXQUFLRSxhQUFMOztBQUVNLGtCQUFRLEtBQUtqQixRQUFMLEVBQVI7QUFBQSxVQUNBa0IsY0FEQSxHQUNpQixLQUFLQyxpQkFBTCxFQURqQjtBQUFBLFVBRUFoQixPQUZBLEdBRVVlLGNBRlY7QUFBQSxVQUdFakIsT0FIRixHQUdjRixLQUhkLENBR0VFLE9BSEY7OztBQUtOLFdBQUttQixVQUFMLENBQWdCakIsT0FBaEI7QUFDQSxXQUFLa0IsVUFBTCxDQUFnQnBCLE9BQWhCOztBQUVBLFdBQUtjLFlBQUw7QUFDRDs7O21DQUVxQk8sSyxFQUFPVixVLEVBQVk7QUFDdkMsVUFBTVcsY0FBYy9CLFFBQVFnQyxjQUFSLENBQXVCRixLQUF2QixFQUE4QlYsVUFBOUIsQ0FBcEI7O0FBRUFXLGtCQUFZRSxVQUFaOztBQUVBLGFBQU9GLFdBQVA7QUFDRDs7OztFQXJFdUIvQixPOztBQXdFMUJrQyxPQUFPQyxNQUFQLENBQWM3QixXQUFkLEVBQTJCO0FBQ3pCOEIsV0FBUyxLQURnQjtBQUV6QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGTSxDQUEzQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmxDLFdBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IFRva2Vuc1RleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvdG9rZW5zJyksXG4gICAgICBFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9lbnRyaWVzJyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vY29tbW9uL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpO1xuXG5jbGFzcyBFeGFtcGxlVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllcygpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgdGhpcy5zaG93RXJyb3IoKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhclRva2VucygpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPnt0aXRsZX08L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5FbnRyaWVzPC9oMj5cbiAgICAgICAgICA8RW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+VG9rZW5zPC9oMj5cbiAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIGluaXRpYWxDb250ZW50ID0gdGhpcy5nZXRJbml0aWFsQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcjtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB0aGlzLnNldEVudHJpZXMoZW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhhbXBsZVZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnZXhhbXBsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZVZpZXc7XG4iXX0=