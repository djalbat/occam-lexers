'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExampleView = require('../../example/view'),
    FlorenceLexer = require('../../florence/lexer');

var FlorenceExampleView = function (_ExampleView) {
  _inherits(FlorenceExampleView, _ExampleView);

  function FlorenceExampleView() {
    _classCallCheck(this, FlorenceExampleView);

    return _possibleConstructorReturn(this, (FlorenceExampleView.__proto__ || Object.getPrototypeOf(FlorenceExampleView)).apply(this, arguments));
  }

  _createClass(FlorenceExampleView, [{
    key: 'getTokens',
    value: function getTokens() {
      var entries = this.getEntries(),
          content = this.getContent(),
          florenceLexer = FlorenceLexer.fromEntries(entries),
          tokens = florenceLexer.tokenise(content);

      return tokens;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'Florence lexer example';

      return title;
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      _get(FlorenceExampleView.prototype.__proto__ || Object.getPrototypeOf(FlorenceExampleView.prototype), 'initialise', this).call(this);

      var entries = FlorenceLexer.entries;


      this.setEntries(entries);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(FlorenceExampleView, properties);
    }
  }]);

  return FlorenceExampleView;
}(ExampleView);

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: 'florence'
  }
});

module.exports = FlorenceExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlL3ZpZXcuanMiXSwibmFtZXMiOlsiRXhhbXBsZVZpZXciLCJyZXF1aXJlIiwiRmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlRXhhbXBsZVZpZXciLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZmxvcmVuY2VMZXhlciIsImZyb21FbnRyaWVzIiwidG9rZW5zIiwidG9rZW5pc2UiLCJ0aXRsZSIsInNldEVudHJpZXMiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjQyxRQUFRLG9CQUFSLENBQXBCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCOztJQUdNRSxtQjs7Ozs7Ozs7Ozs7Z0NBQ1E7QUFDVixVQUFNQyxVQUFVLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNNQyxVQUFVLEtBQUtDLFVBQUwsRUFEaEI7QUFBQSxVQUVNQyxnQkFBZ0JOLGNBQWNPLFdBQWQsQ0FBMEJMLE9BQTFCLENBRnRCO0FBQUEsVUFHTU0sU0FBU0YsY0FBY0csUUFBZCxDQUF1QkwsT0FBdkIsQ0FIZjs7QUFLQSxhQUFPSSxNQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1FLFFBQVEsd0JBQWQ7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7aUNBRVk7QUFDWDs7QUFEVyxVQUdIUixPQUhHLEdBR1NGLGFBSFQsQ0FHSEUsT0FIRzs7O0FBS1gsV0FBS1MsVUFBTCxDQUFnQlQsT0FBaEI7QUFDRDs7O21DQUVxQlUsVSxFQUFZO0FBQUUsYUFBT2QsWUFBWWUsY0FBWixDQUEyQlosbUJBQTNCLEVBQWdEVyxVQUFoRCxDQUFQO0FBQW9FOzs7O0VBeEJ4RWQsVzs7QUEyQmxDZ0IsT0FBT0MsTUFBUCxDQUFjZCxtQkFBZCxFQUFtQztBQUNqQ2UscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEYyxDQUFuQzs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQmxCLG1CQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFeGFtcGxlVmlldyA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUvdmlldycpLFxuICAgICAgRmxvcmVuY2VMZXhlciA9IHJlcXVpcmUoJy4uLy4uL2Zsb3JlbmNlL2xleGVyJyk7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSAnRmxvcmVuY2UgbGV4ZXIgZXhhbXBsZSc7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHN1cGVyLmluaXRpYWxpc2UoKTtcblxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gRmxvcmVuY2VMZXhlcjtcblxuICAgIHRoaXMuc2V0RW50cmllcyhlbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhGbG9yZW5jZUV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzKTt9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VFeGFtcGxlVmlldywge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2Zsb3JlbmNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGVWaWV3O1xuIl19