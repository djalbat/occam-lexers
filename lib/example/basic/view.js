'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var BasicExampleView = function (_Element) {
  _inherits(BasicExampleView, _Element);

  function BasicExampleView() {
    _classCallCheck(this, BasicExampleView);

    return _possibleConstructorReturn(this, (BasicExampleView.__proto__ || Object.getPrototypeOf(BasicExampleView)).apply(this, arguments));
  }

  _createClass(BasicExampleView, [{
    key: 'childElements',
    value: function childElements(properties) {
      return ['Basic example'];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(BasicExampleView, properties, document);
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

/*
const Example = require('../../example'),
      BasicLexer = require('../../basic/lexer');

class BasicExample {
  static run() {
    const { entries } = BasicLexer,
          Lexer = BasicLexer;

    Example.run(entries, Lexer);
  }
}

    <h1>Basic example</h1>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiQmFzaWNFeGFtcGxlVmlldyIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsImRvY3VtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLGdCOzs7Ozs7Ozs7OztrQ0FDVUMsVSxFQUFZO0FBQ3hCLGFBQVEsQ0FDTixlQURNLENBQVI7QUFHRDs7O21DQUVxQkEsVSxFQUFZO0FBQUUsYUFBT0YsUUFBUUcsY0FBUixDQUF1QkYsZ0JBQXZCLEVBQXlDQyxVQUF6QyxFQUFxREUsUUFBckQsQ0FBUDtBQUF3RTs7OztFQVAvRUosTzs7QUFVL0JLLE9BQU9DLE1BQVAsQ0FBY0wsZ0JBQWQsRUFBZ0M7QUFDOUJNLFdBQVMsS0FEcUI7QUFFOUJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRlcsQ0FBaEM7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJWLGdCQUFqQjs7QUFFQSIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZVZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIChbXG4gICAgICAnQmFzaWMgZXhhbXBsZSdcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJhc2ljRXhhbXBsZVZpZXcsIHByb3BlcnRpZXMsIGRvY3VtZW50KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEJhc2ljRXhhbXBsZVZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYmFzaWMgZXhhbXBsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlVmlldztcblxuLypcbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlJyksXG4gICAgICBCYXNpY0xleGVyID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMvbGV4ZXInKTtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IEJhc2ljTGV4ZXIsXG4gICAgICAgICAgTGV4ZXIgPSBCYXNpY0xleGVyO1xuXG4gICAgRXhhbXBsZS5ydW4oZW50cmllcywgTGV4ZXIpO1xuICB9XG59XG5cbiAgICA8aDE+QmFzaWMgZXhhbXBsZTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICA8ZGl2IGlkPVwic2l6ZWFibGVFbGVtZW50XCI+XG4gICAgICAgIDxoMj5FbnRyaWVzPC9oMj5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiZW50cmllc1wiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiY29udGVudFwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImxlZnQgdmVydGljYWwgc3BsaXR0ZXJcIiBpZD1cInZlcnRpY2FsU3BsaXR0ZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxoMj5Ub2tlbnM8L2gyPlxuICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjMwXCIgaWQ9XCJ0b2tlbnNcIiByZWFkT25seT48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaW5kZXguaHRtbFwiPi4uLmJhY2s8L2E+XG4gICAgPC9wPlxuXG4gKi8iXX0=