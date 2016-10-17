'use strict';

var unicode_letter = '\\u{c0}-\\u{ff}\\u{180}-\\u{24f}\\u{391}-\\u{3ff}\\u{400}-\\u{4ff}\\u{2100}-\\u{214f}\\u{2070}-\\u{2079}\\u{2080}-\\u{2089}',
    unicode_id_part = '',
    ///
first_letter = '[a-zA-Z_' + unicode_letter + ']',
    subsequent_letter = '[a-zA-Z_0-9_\u2019' + unicode_letter + unicode_id_part + ']';

'use strict';

var grammar = [{ string: /"[^"]*"/ }, { keyword: /_|as|at|cofix|else|end|exists|exists2|fix|for|forall|fun|if|IF|in|let|match|mod|Prop|return|Set|then|Type|using|where|with/ }, { special: /!|%|&&|&|@|~|\(\)|\(|\)|\*|\+\+|\+|,|\.\(|\.\.|\.|\\\/|\/\\|\/|::|:<|:=|:>|:|;|<->|>->|<-|->|-|<:|<=|<>|<|=>|=_D|=|>=|>|\?|\?=|\[|\]|\^|\{|\}|\|\||\|-|\|/ }, { ident: new RegExp('' + first_letter + subsequent_letter + '*', 'u') }, { num: /[0-9]+/ }];

grammar.type = function (entry) {
  var type = Object.keys(entry)[0]; ///

  return type;
};

grammar.findRegExp = function (type) {
  var regExp = grammar.find(function (entry) {
    var grammarType = grammar.type(entry),
        found = grammarType === type;

    return found;
  });

  return regExp;
};

module.exports = grammar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2dyYW1tYXIuanMiXSwibmFtZXMiOlsidW5pY29kZV9sZXR0ZXIiLCJ1bmljb2RlX2lkX3BhcnQiLCJmaXJzdF9sZXR0ZXIiLCJzdWJzZXF1ZW50X2xldHRlciIsImdyYW1tYXIiLCJzdHJpbmciLCJrZXl3b3JkIiwic3BlY2lhbCIsImlkZW50IiwiUmVnRXhwIiwibnVtIiwidHlwZSIsImVudHJ5IiwiT2JqZWN0Iiwia2V5cyIsImZpbmRSZWdFeHAiLCJyZWdFeHAiLCJmaW5kIiwiZ3JhbW1hclR5cGUiLCJmb3VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQUlBLDhJQUFKO0FBQUEsSUFDSUMsb0JBREo7QUFBQSxJQUMwQjtBQUN0QkMsNEJBQTBCRixjQUExQixNQUZKO0FBQUEsSUFHSUcsMkNBQW9DSCxjQUFwQyxHQUFxREMsZUFBckQsTUFISjs7QUFLQTs7QUFFQSxJQUFJRyxVQUFVLENBRVosRUFBRUMsUUFBWSxTQUFkLEVBRlksRUFJWixFQUFFQyxTQUFZLDRIQUFkLEVBSlksRUFNWixFQUFFQyxTQUFZLDJKQUFkLEVBTlksRUFRWixFQUFFQyxPQUFZLElBQUlDLE1BQUosTUFBY1AsWUFBZCxHQUE2QkMsaUJBQTdCLFFBQW1ELEdBQW5ELENBQWQsRUFSWSxFQVVaLEVBQUVPLEtBQVksUUFBZCxFQVZZLENBQWQ7O0FBY0FOLFFBQVFPLElBQVIsR0FBZSxVQUFTQyxLQUFULEVBQWdCO0FBQzdCLE1BQUlELE9BQU9FLE9BQU9DLElBQVAsQ0FBWUYsS0FBWixFQUFtQixDQUFuQixDQUFYLENBRDZCLENBQ007O0FBRW5DLFNBQU9ELElBQVA7QUFDRCxDQUpEOztBQU1BUCxRQUFRVyxVQUFSLEdBQXFCLFVBQVNKLElBQVQsRUFBZTtBQUNsQyxNQUFJSyxTQUFTWixRQUFRYSxJQUFSLENBQWEsVUFBU0wsS0FBVCxFQUFnQjtBQUN4QyxRQUFJTSxjQUFjZCxRQUFRTyxJQUFSLENBQWFDLEtBQWIsQ0FBbEI7QUFBQSxRQUNJTyxRQUFTRCxnQkFBZ0JQLElBRDdCOztBQUdBLFdBQU9RLEtBQVA7QUFDRCxHQUxZLENBQWI7O0FBT0EsU0FBT0gsTUFBUDtBQUNELENBVEQ7O0FBV0FJLE9BQU9DLE9BQVAsR0FBaUJqQixPQUFqQiIsImZpbGUiOiJncmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHVuaWNvZGVfbGV0dGVyID0gYFxcXFx1e2MwfS1cXFxcdXtmZn1cXFxcdXsxODB9LVxcXFx1ezI0Zn1cXFxcdXszOTF9LVxcXFx1ezNmZn1cXFxcdXs0MDB9LVxcXFx1ezRmZn1cXFxcdXsyMTAwfS1cXFxcdXsyMTRmfVxcXFx1ezIwNzB9LVxcXFx1ezIwNzl9XFxcXHV7MjA4MH0tXFxcXHV7MjA4OX1gLFxyXG4gICAgdW5pY29kZV9pZF9wYXJ0ID0gYGAsIC8vL1xyXG4gICAgZmlyc3RfbGV0dGVyID0gYFthLXpBLVpfJHt1bmljb2RlX2xldHRlcn1dYCxcclxuICAgIHN1YnNlcXVlbnRfbGV0dGVyID0gYFthLXpBLVpfMC05X+KAmSR7dW5pY29kZV9sZXR0ZXJ9JHt1bmljb2RlX2lkX3BhcnR9XWA7XHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZ3JhbW1hciA9IFtcclxuXHJcbiAgeyBzdHJpbmcgICAgOiAvXCJbXlwiXSpcIi8gfSxcclxuXHJcbiAgeyBrZXl3b3JkICAgOiAvX3xhc3xhdHxjb2ZpeHxlbHNlfGVuZHxleGlzdHN8ZXhpc3RzMnxmaXh8Zm9yfGZvcmFsbHxmdW58aWZ8SUZ8aW58bGV0fG1hdGNofG1vZHxQcm9wfHJldHVybnxTZXR8dGhlbnxUeXBlfHVzaW5nfHdoZXJlfHdpdGgvIH0sXHJcblxyXG4gIHsgc3BlY2lhbCAgIDogLyF8JXwmJnwmfEB8fnxcXChcXCl8XFwofFxcKXxcXCp8XFwrXFwrfFxcK3wsfFxcLlxcKHxcXC5cXC58XFwufFxcXFxcXC98XFwvXFxcXHxcXC98Ojp8Ojx8Oj18Oj58Onw7fDwtPnw+LT58PC18LT58LXw8Onw8PXw8Pnw8fD0+fD1fRHw9fD49fD58XFw/fFxcPz18XFxbfFxcXXxcXF58XFx7fFxcfXxcXHxcXHx8XFx8LXxcXHwvIH0sXHJcblxyXG4gIHsgaWRlbnQgICAgIDogbmV3IFJlZ0V4cChgJHtmaXJzdF9sZXR0ZXJ9JHtzdWJzZXF1ZW50X2xldHRlcn0qYCwgJ3UnKSB9LFxyXG5cclxuICB7IG51bSAgICAgICA6IC9bMC05XSsvIH1cclxuXHJcbl07XHJcblxyXG5ncmFtbWFyLnR5cGUgPSBmdW5jdGlvbihlbnRyeSkge1xyXG4gIHZhciB0eXBlID0gT2JqZWN0LmtleXMoZW50cnkpWzBdOyAgLy8vXHJcblxyXG4gIHJldHVybiB0eXBlO1xyXG59O1xyXG5cclxuZ3JhbW1hci5maW5kUmVnRXhwID0gZnVuY3Rpb24odHlwZSkge1xyXG4gIHZhciByZWdFeHAgPSBncmFtbWFyLmZpbmQoZnVuY3Rpb24oZW50cnkpIHtcclxuICAgIHZhciBncmFtbWFyVHlwZSA9IGdyYW1tYXIudHlwZShlbnRyeSksXHJcbiAgICAgICAgZm91bmQgPSAoZ3JhbW1hclR5cGUgPT09IHR5cGUpO1xyXG5cclxuICAgIHJldHVybiBmb3VuZDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlZ0V4cDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hcjtcclxuIl19