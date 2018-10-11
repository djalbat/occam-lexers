'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement;


var BNFLexer = require('../../bnf/lexer'),
    TokensTextarea = require('../common/textarea/tokens'),
    EntriesTextarea = require('../common/textarea/entries'),
    ContentTextarea = require('../common/textarea/content'),
    LeftVerticalSplitter = require('../common/verticalSplitter/left');

var BNFExampleView = function (_Element) {
  _inherits(BNFExampleView, _Element);

  function BNFExampleView() {
    _classCallCheck(this, BNFExampleView);

    return _possibleConstructorReturn(this, (BNFExampleView.__proto__ || Object.getPrototypeOf(BNFExampleView)).apply(this, arguments));
  }

  _createClass(BNFExampleView, [{
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      try {
        var entries = this.getEntries(),
            content = this.getContent(),
            bnfLexer = BNFLexer.fromEntries(entries),
            tokens = bnfLexer.tokenise(content);

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
        'BNF Example'
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

      var entries = BNFLexer.entries;


      this.setEntries(entries);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var bnfExampleView = Element.fromProperties(BNFExampleView, properties);

      bnfExampleView.initialise();

      return bnfExampleView;
    }
  }]);

  return BNFExampleView;
}(Element);

Object.assign(BNFExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'bnf example'
  }
});

module.exports = BNFExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2JuZi92aWV3LmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJCTkZMZXhlciIsIlRva2Vuc1RleHRhcmVhIiwiRW50cmllc1RleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiTGVmdFZlcnRpY2FsU3BsaXR0ZXIiLCJCTkZFeGFtcGxlVmlldyIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJibmZMZXhlciIsImZyb21FbnRyaWVzIiwidG9rZW5zIiwidG9rZW5pc2UiLCJoaWRlRXJyb3IiLCJzZXRUb2tlbnMiLCJlcnJvciIsInNob3dFcnJvciIsImNsZWFyVG9rZW5zIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJhc3NpZ25Db250ZXh0Iiwic2V0RW50cmllcyIsImJuZkV4YW1wbGVWaWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHTSxJQUFFRSxPQUFGLEdBQWNILElBQWQsQ0FBRUcsT0FBRjtBQUFBLElBQ0VDLGVBREYsR0FDc0JGLFVBRHRCLENBQ0VFLGVBREY7OztBQUdOLElBQU1DLFdBQVdKLFFBQVEsaUJBQVIsQ0FBakI7QUFBQSxJQUNNSyxpQkFBaUJMLFFBQVEsMkJBQVIsQ0FEdkI7QUFBQSxJQUVNTSxrQkFBa0JOLFFBQVEsNEJBQVIsQ0FGeEI7QUFBQSxJQUdNTyxrQkFBa0JQLFFBQVEsNEJBQVIsQ0FIeEI7QUFBQSxJQUlNUSx1QkFBdUJSLFFBQVEsaUNBQVIsQ0FKN0I7O0lBTU1TLGM7Ozs7Ozs7Ozs7O21DQUNXO0FBQ2IsVUFBSTtBQUNGLFlBQU1DLFVBQVUsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFlBQ01DLFVBQVUsS0FBS0MsVUFBTCxFQURoQjtBQUFBLFlBRU1DLFdBQVdWLFNBQVNXLFdBQVQsQ0FBcUJMLE9BQXJCLENBRmpCO0FBQUEsWUFHTU0sU0FBU0YsU0FBU0csUUFBVCxDQUFrQkwsT0FBbEIsQ0FIZjs7QUFLQSxhQUFLTSxTQUFMOztBQUVBLGFBQUtDLFNBQUwsQ0FBZUgsTUFBZjtBQUNELE9BVEQsQ0FTRSxPQUFPSSxLQUFQLEVBQWM7QUFDZCxhQUFLQyxTQUFMOztBQUVBLGFBQUtDLFdBQUw7QUFDRDtBQUNGOzs7a0NBRWFDLFUsRUFBWTtBQUN4QixVQUFNQyxlQUFlLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXJCOztBQUVBLGFBQVEsQ0FFTjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRk0sRUFHTjtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFDLHlCQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxlQUFELElBQWlCLFNBQVNELFlBQTFCLEdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUFJRSw4QkFBQyxlQUFELElBQWlCLFNBQVNBLFlBQTFCO0FBSkYsU0FERjtBQU9FLDRCQUFDLG9CQUFELE9BUEY7QUFRRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxjQUFEO0FBRkY7QUFSRixPQUhNLENBQVI7QUFrQkQ7OztpQ0FFWTtBQUNYLFdBQUtFLGFBQUw7O0FBRFcsVUFHSGhCLE9BSEcsR0FHU04sUUFIVCxDQUdITSxPQUhHOzs7QUFLWCxXQUFLaUIsVUFBTCxDQUFnQmpCLE9BQWhCO0FBQ0Q7OzttQ0FFcUJhLFUsRUFBWTtBQUNoQyxVQUFNSyxpQkFBaUIxQixRQUFRMkIsY0FBUixDQUF1QnBCLGNBQXZCLEVBQXVDYyxVQUF2QyxDQUF2Qjs7QUFFQUsscUJBQWVFLFVBQWY7O0FBRUEsYUFBT0YsY0FBUDtBQUNEOzs7O0VBdkQwQjFCLE87O0FBMEQ3QjZCLE9BQU9DLE1BQVAsQ0FBY3ZCLGNBQWQsRUFBOEI7QUFDNUJ3QixXQUFTLEtBRG1CO0FBRTVCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZTLENBQTlCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCNUIsY0FBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY29uc3QgQk5GTGV4ZXIgPSByZXF1aXJlKCcuLi8uLi9ibmYvbGV4ZXInKSxcbiAgICAgIFRva2Vuc1RleHRhcmVhID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHRhcmVhL3Rva2VucycpLFxuICAgICAgRW50cmllc1RleHRhcmVhID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHRhcmVhL2VudHJpZXMnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBMZWZ0VmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi92ZXJ0aWNhbFNwbGl0dGVyL2xlZnQnKTtcblxuY2xhc3MgQk5GRXhhbXBsZVZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzKCksXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBibmZMZXhlciA9IEJORkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxoMT5CTkYgRXhhbXBsZTwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkVudHJpZXM8L2gyPlxuICAgICAgICAgIDxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxMZWZ0VmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5Ub2tlbnM8L2gyPlxuICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBCTkZMZXhlcjtcblxuICAgIHRoaXMuc2V0RW50cmllcyhlbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgYm5mRXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJORkV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIGJuZkV4YW1wbGVWaWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBibmZFeGFtcGxlVmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GRXhhbXBsZVZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYm5mIGV4YW1wbGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORkV4YW1wbGVWaWV3O1xuIl19