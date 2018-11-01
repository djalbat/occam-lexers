'use strict';

const entries = [


  { "special"      : ":|;|!|\\{|\\}|\\(|\\)" },


  { "hexColour"    : "^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$" },


  { "functionName" : "^(?:attr|calc|cubic-bezier|hsl|hsla|linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|rgb|rgba|var)$" },


  { "keyword"      : "^(?:important)$" },


  { "name"         : "^[_a-z][_a-z0-9-]*$" },


  { "unassigned"   : "^.*$" }


];

module.exports = entries;
