'use strict';

const tokens = require('../../tokens'),
      DoublyQuotedStringLiteralToken = require('../../token/significant/stringLiteral/doublyQuoted');

const { tokeniseByToken } = tokens;

function tokenise(tokensAndContents) { tokeniseByToken(tokensAndContents, DoublyQuotedStringLiteralToken); }

module.exports = {
  tokenise
};
