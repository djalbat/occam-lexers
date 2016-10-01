'use strict';

var unicode_letter = '\\u{c0}-\\u{ff}\\u{180}-\\u{24f}\\u{391}-\\u{3ff}\\u{400}-\\u{4ff}\\u{2100}-\\u{214f}\\u{2070}-\\u{2079}\\u{2080}-\\u{2089}',
    unicode_id_part = '',
    ///
first_letter = '[a-zA-Z_' + unicode_letter + ']',
    subsequent_letter = '[a-zA-Z_0-9_’' + unicode_letter + unicode_id_part + ']';

var grammar = {

  string: /^("[^"]*")/,

  keyword: /^(_|as|at|cofix|else|end|exists|exists2|fix|for|forall|fun|if|IF|in|let|match|mod|Prop|return|Set|then|Type|using|where|with)/,

  special: /^(!|%|&&|&|@|~|\(\)|\(|\)|\*|\+\+|\+|,|\.\(|\.\.|\.|\\\/|\/\\|\/|::|:<|:=|:>|:|;|<->|>->|<-|->|-|<:|<=|<>|<|=>|=_D|=|>=|>|\?|\?=|\[|\]|\^|\{|\}|\|\||\|-|\|)/,

  ident: new RegExp('^(' + first_letter + subsequent_letter + '*)', 'u'),

  num: /^([0-9]+)/

};

module.exports = grammar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2dyYW1tYXIuanMiXSwibmFtZXMiOlsidW5pY29kZV9sZXR0ZXIiLCJ1bmljb2RlX2lkX3BhcnQiLCJmaXJzdF9sZXR0ZXIiLCJzdWJzZXF1ZW50X2xldHRlciIsImdyYW1tYXIiLCJzdHJpbmciLCJrZXl3b3JkIiwic3BlY2lhbCIsImlkZW50IiwiUmVnRXhwIiwibnVtIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBSUEsOElBQUo7QUFBQSxJQUNJQyxvQkFESjtBQUFBLElBQzBCO0FBQ3RCQyw0QkFBMEJGLGNBQTFCLE1BRko7QUFBQSxJQUdJRyxzQ0FBb0NILGNBQXBDLEdBQXFEQyxlQUFyRCxNQUhKOztBQUtBLElBQUlHLFVBQVU7O0FBRVpDLFVBQWdCLFlBRko7O0FBSVpDLFdBQWdCLCtIQUpKOztBQU1aQyxXQUFnQiw4SkFOSjs7QUFRWkMsU0FBZ0IsSUFBSUMsTUFBSixRQUFnQlAsWUFBaEIsR0FBK0JDLGlCQUEvQixTQUFzRCxHQUF0RCxDQVJKOztBQVVaTyxPQUFnQjs7QUFWSixDQUFkOztBQWNBQyxPQUFPQyxPQUFQLEdBQWlCUixPQUFqQiIsImZpbGUiOiJncmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHVuaWNvZGVfbGV0dGVyID0gYFxcXFx1e2MwfS1cXFxcdXtmZn1cXFxcdXsxODB9LVxcXFx1ezI0Zn1cXFxcdXszOTF9LVxcXFx1ezNmZn1cXFxcdXs0MDB9LVxcXFx1ezRmZn1cXFxcdXsyMTAwfS1cXFxcdXsyMTRmfVxcXFx1ezIwNzB9LVxcXFx1ezIwNzl9XFxcXHV7MjA4MH0tXFxcXHV7MjA4OX1gLFxyXG4gICAgdW5pY29kZV9pZF9wYXJ0ID0gYGAsIC8vL1xyXG4gICAgZmlyc3RfbGV0dGVyID0gYFthLXpBLVpfJHt1bmljb2RlX2xldHRlcn1dYCxcclxuICAgIHN1YnNlcXVlbnRfbGV0dGVyID0gYFthLXpBLVpfMC05X+KAmSR7dW5pY29kZV9sZXR0ZXJ9JHt1bmljb2RlX2lkX3BhcnR9XWA7XHJcblxyXG52YXIgZ3JhbW1hciA9IHtcclxuXHJcbiAgc3RyaW5nICAgICAgICA6IC9eKFwiW15cIl0qXCIpLyxcclxuXHJcbiAga2V5d29yZCAgICAgICA6IC9eKF98YXN8YXR8Y29maXh8ZWxzZXxlbmR8ZXhpc3RzfGV4aXN0czJ8Zml4fGZvcnxmb3JhbGx8ZnVufGlmfElGfGlufGxldHxtYXRjaHxtb2R8UHJvcHxyZXR1cm58U2V0fHRoZW58VHlwZXx1c2luZ3x3aGVyZXx3aXRoKS8sXHJcblxyXG4gIHNwZWNpYWwgICAgICAgOiAvXighfCV8JiZ8JnxAfH58XFwoXFwpfFxcKHxcXCl8XFwqfFxcK1xcK3xcXCt8LHxcXC5cXCh8XFwuXFwufFxcLnxcXFxcXFwvfFxcL1xcXFx8XFwvfDo6fDo8fDo9fDo+fDp8O3w8LT58Pi0+fDwtfC0+fC18PDp8PD18PD58PHw9Pnw9X0R8PXw+PXw+fFxcP3xcXD89fFxcW3xcXF18XFxefFxce3xcXH18XFx8XFx8fFxcfC18XFx8KS8sXHJcblxyXG4gIGlkZW50ICAgICAgICAgOiBuZXcgUmVnRXhwKGBeKCR7Zmlyc3RfbGV0dGVyfSR7c3Vic2VxdWVudF9sZXR0ZXJ9KilgLCAndScpLFxyXG5cclxuICBudW0gICAgICAgICAgIDogL14oWzAtOV0rKS9cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXI7XHJcbiJdfQ==