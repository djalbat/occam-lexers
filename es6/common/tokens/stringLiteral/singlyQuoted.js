'use strict';

const tokens = require('../../tokens'),
      SinglyQuotedStringLiteralToken = require('../../token/significant/stringLiteral/singlyQuoted');

const { tokeniseByToken } = tokens;

function tokenise(tokensAndContents) { tokeniseByToken(tokensAndContents, SinglyQuotedStringLiteralToken); }

module.exports = {
  tokenise
};
