'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var BNFExampleView = function (_Element) {
  _inherits(BNFExampleView, _Element);

  function BNFExampleView() {
    _classCallCheck(this, BNFExampleView);

    return _possibleConstructorReturn(this, (BNFExampleView.__proto__ || Object.getPrototypeOf(BNFExampleView)).apply(this, arguments));
  }

  _createClass(BNFExampleView, [{
    key: 'childElements',
    value: function childElements(properties) {
      return ['BNF example'];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(BNFExampleView, properties, document);
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

/*

const Example = require('../../example'),
      BNFLexer = require('../../bnf/lexer');

class BNFExample {
  static run() {
    const { entries } = BNFLexer,
          Lexer = BNFLexer;

    Example.run(entries, Lexer);
  }
}


    <h1>BNF example</h1>
    <div class="columns">
      <div id="sizeableElement">
        <h2>Entries</h2>
        <textarea id="entries" spellcheck="false"></textarea>
        <h2>Content</h2>
        <textarea id="content" spellcheck="false"></textarea>
      </div><div class="left vertical splitter" id="verticalSplitter"></div>
      <div class="column">
        <h2>Tokens</h2>
        <textarea rows="30" id="tokens" readonly></textarea>
      </div>
    </div>
    <p>
      <a href="index.html">...back</a>
    </p>

 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2JuZi92aWV3LmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiRWxlbWVudCIsIkJORkV4YW1wbGVWaWV3IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiZG9jdW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxPLEdBQVlGLEksQ0FBWkUsTzs7SUFFRkMsYzs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUN4QixhQUFRLENBQ04sYUFETSxDQUFSO0FBR0Q7OzttQ0FFcUJBLFUsRUFBWTtBQUFFLGFBQU9GLFFBQVFHLGNBQVIsQ0FBdUJGLGNBQXZCLEVBQXVDQyxVQUF2QyxFQUFtREUsUUFBbkQsQ0FBUDtBQUFzRTs7OztFQVAvRUosTzs7QUFVN0JLLE9BQU9DLE1BQVAsQ0FBY0wsY0FBZCxFQUE4QjtBQUM1Qk0sV0FBUyxLQURtQjtBQUU1QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGUyxDQUE5Qjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQlYsY0FBakI7O0FBRUEiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBCTkZFeGFtcGxlVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gKFtcbiAgICAgICdCTkYgZXhhbXBsZSdcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJORkV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzLCBkb2N1bWVudCk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihCTkZFeGFtcGxlVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdibmYgZXhhbXBsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GRXhhbXBsZVZpZXc7XG5cbi8qXG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlJyksXG4gICAgICBCTkZMZXhlciA9IHJlcXVpcmUoJy4uLy4uL2JuZi9sZXhlcicpO1xuXG5jbGFzcyBCTkZFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IEJORkxleGVyLFxuICAgICAgICAgIExleGVyID0gQk5GTGV4ZXI7XG5cbiAgICBFeGFtcGxlLnJ1bihlbnRyaWVzLCBMZXhlcik7XG4gIH1cbn1cblxuXG4gICAgPGgxPkJORiBleGFtcGxlPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuICAgICAgPGRpdiBpZD1cInNpemVhYmxlRWxlbWVudFwiPlxuICAgICAgICA8aDI+RW50cmllczwvaDI+XG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cImVudHJpZXNcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3RleHRhcmVhPlxuICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cImNvbnRlbnRcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cImxlZnQgdmVydGljYWwgc3BsaXR0ZXJcIiBpZD1cInZlcnRpY2FsU3BsaXR0ZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgPGgyPlRva2VuczwvaDI+XG4gICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiMzBcIiBpZD1cInRva2Vuc1wiIHJlYWRvbmx5PjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJpbmRleC5odG1sXCI+Li4uYmFjazwvYT5cbiAgICA8L3A+XG5cbiAqLyJdfQ==