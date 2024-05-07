#!/usr/bin/env node

const yargs = require('yargs/yargs');

const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv));

const { evaluate } = require('feelin');

let {
  expression,
  context = "{}",
} = argv;

try {
  context = JSON.parse(context);
} catch (e) {
  console.error('Invalid context', context, e);

  process.exit(1);
}

try {
  const result = evaluate(expression, context);

  console.log('Expression evaluated to', result);

  process.exit(0);
} catch (e) {
  console.error('Failed to evaluate expression', e);

  process.exit(1);
}