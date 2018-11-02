'use strict';

const entries = [

  {
    "special": ";|,|/|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]"
  },
  {
    "keyword": "(?:!important|@media)"
  },
  {
    "colour": "#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})"
  },
  {
    "percentage": "(?:[0-9]+|[0-9]*\\.[0-9]+)\\%"
  },
  {
    "frequency": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:hz|khz)"
  },
  {
    "length": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:px|cm|mm|in|pt|pc)"
  },
  {
    "angle": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:deg|rad|grad)"
  },
  {
    "time": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:s|ms)"
  },
  {
    "rems": "(?:[0-9]+|[0-9]*\\.[0-9]+)rem"
  },
  {
    "ems": "(?:[0-9]+|[0-9]*\\.[0-9]+)em"
  },
  {
    "number": "[0-9]+|[0-9]*\\.[0-9]+"
  },
  {
    "pseudoElement": "::[_a-z][_a-z0-9-]*"
  },
  {
    "pseudoClass": ":[_a-z][_a-z0-9-]*"
  },
  {
    "class": "\\.[_a-z][_a-z0-9-]*"
  },
  {
    "operator": "^and|not|only|not$"
  },
  {
    "identifier": "[_a-z][_a-z0-9-]*"
  },
  {
    "unaryOperator": "\\+|\\-"
  },
  {
    "unassigned": "^.*$"
  }

];

module.exports = entries;
