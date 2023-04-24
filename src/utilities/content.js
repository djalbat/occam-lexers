"use strict";

import { characters } from "necessary";

const { LESS_THAN_CHARACTER, AMPERSAND_CHARACTER, GREATER_THAN_CHARACTER } = characters;

export function sanitiseContent(content) {
  const sanitisedContent = content
                            .replace(/&/g, AMPERSAND_CHARACTER)
                            .replace(/</g, LESS_THAN_CHARACTER)
                            .replace(/>/g, GREATER_THAN_CHARACTER);

  return sanitisedContent;
}
