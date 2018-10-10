'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var FlorenceExampleView = function (_Element) {
  _inherits(FlorenceExampleView, _Element);

  function FlorenceExampleView() {
    _classCallCheck(this, FlorenceExampleView);

    return _possibleConstructorReturn(this, (FlorenceExampleView.__proto__ || Object.getPrototypeOf(FlorenceExampleView)).apply(this, arguments));
  }

  _createClass(FlorenceExampleView, [{
    key: 'childElements',
    value: function childElements(properties) {
      return ['Florence example'];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(FlorenceExampleView, properties, document);
    }
  }]);

  return FlorenceExampleView;
}(Element);

Object.assign(FlorenceExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'florence example'
  }
});

module.exports = FlorenceExampleView;

/*
const Example = require('../../example'),
      FlorenceLexer = require('../../florence/lexer');

class FlorenceExample {
  static run() {
    const { entries } = FlorenceLexer,
          Lexer = FlorenceLexer;

    Example.run(entries, Lexer);
  }
}


    <h1>Florence example</h1>
    <div className="columns">
      <div id="sizeableElement">
        <h2>Entries</h2>
        <textarea id="entries" spellCheck="false"></textarea>
        <h2>Content</h2>
        <textarea id="content" spellCheck="false"></textarea>
      </div><div className="left vertical splitter" id="verticalSplitter"></div>
      <div className="column">
        <h2>Tokens</h2>
        <textarea rows="30" id="tokens" readOnly></textarea>
      </div>
    </div>
    <p>
      <a href="index.html">...back</a>
    </p>

 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiRmxvcmVuY2VFeGFtcGxlVmlldyIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsImRvY3VtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLG1COzs7Ozs7Ozs7OztrQ0FDVUMsVSxFQUFZO0FBQ3hCLGFBQVEsQ0FDTixrQkFETSxDQUFSO0FBR0Q7OzttQ0FFcUJBLFUsRUFBWTtBQUFFLGFBQU9GLFFBQVFHLGNBQVIsQ0FBdUJGLG1CQUF2QixFQUE0Q0MsVUFBNUMsRUFBd0RFLFFBQXhELENBQVA7QUFBMkU7Ozs7RUFQL0VKLE87O0FBVWxDSyxPQUFPQyxNQUFQLENBQWNMLG1CQUFkLEVBQW1DO0FBQ2pDTSxXQUFTLEtBRHdCO0FBRWpDQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZjLENBQW5DOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCVixtQkFBakI7O0FBRUEiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGVWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIHJldHVybiAoW1xuICAgICAgJ0Zsb3JlbmNlIGV4YW1wbGUnXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhGbG9yZW5jZUV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzLCBkb2N1bWVudCk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZUV4YW1wbGVWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2Zsb3JlbmNlIGV4YW1wbGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZVZpZXc7XG5cbi8qXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZScpLFxuICAgICAgRmxvcmVuY2VMZXhlciA9IHJlcXVpcmUoJy4uLy4uL2Zsb3JlbmNlL2xleGVyJyk7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBGbG9yZW5jZUxleGVyLFxuICAgICAgICAgIExleGVyID0gRmxvcmVuY2VMZXhlcjtcblxuICAgIEV4YW1wbGUucnVuKGVudHJpZXMsIExleGVyKTtcbiAgfVxufVxuXG5cbiAgICA8aDE+RmxvcmVuY2UgZXhhbXBsZTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICA8ZGl2IGlkPVwic2l6ZWFibGVFbGVtZW50XCI+XG4gICAgICAgIDxoMj5FbnRyaWVzPC9oMj5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiZW50cmllc1wiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiY29udGVudFwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImxlZnQgdmVydGljYWwgc3BsaXR0ZXJcIiBpZD1cInZlcnRpY2FsU3BsaXR0ZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxoMj5Ub2tlbnM8L2gyPlxuICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjMwXCIgaWQ9XCJ0b2tlbnNcIiByZWFkT25seT48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaW5kZXguaHRtbFwiPi4uLmJhY2s8L2E+XG4gICAgPC9wPlxuXG4gKi8iXX0=