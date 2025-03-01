"use strict";

export function rulesAsEntries(rules) {
  const entries = rules.map((rule) => {
    const entry = ruleAsEntry(rule);

    return entry;
  });

  return entries;
}

export default {
  rulesAsEntries
};

function ruleAsEntry(rule) {
  const type = rule.getType(),
        regularExpression = rule.getRegularExpression(),
        { source } = regularExpression,
        entry = {
          [type]: source
        };

  return entry;
}
