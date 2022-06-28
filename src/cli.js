'use strict';
const Readability = require('@mozilla/readability').Readability;
const JSDOM = require('jsdom').JSDOM;
const VirtualConsole = require('jsdom').VirtualConsole;
const Command = require('./command');

function getCommand() {
  const command = new Command();
  const isExit = (() => {
    try {
      command.parseArgs();
      if (command.help) {
        command.showHelp();
        return true;
      }
    } catch (error) {
      if (error.message) {
        console.error(error.message);
      }
      command.showHelp();
      return true;
    }
    return false;
  })();
  if (isExit) {
    process.exit(0);
  }
  return command;
}

function parse(command, html) {
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('error', () => {
    console.error(`JSDOM error: ${error.message}`);
  });
  const doc = new JSDOM(html, {
    url: command.url,
    virtualConsole: virtualConsole,
  });
  const options = {
    charThreshold: command.charThreshold,
    nbTopCandidates: command.nbTopCandidates,
    maxElemsToParse: command.maxElemsToParse,
    debug: command.debug,
  };

  const reader = new Readability(doc.window.document, options);
  return reader.parse();
}

function strip(content) {
  return content.replace(/\n+/g, ' ').replace(/( |\t){2,}/g, ' ');
}

function main() {
  const command = getCommand();
  const parsedObject = (() => {
    try {
      const inputHTML = require('fs').readFileSync('/dev/stdin', 'utf8');
      return parse(command, inputHTML);
    } catch (error) {
      console.error(error.message);
      command.showHelp();
    }
  })();
  if (!parsedObject) {
    return;
  }

  if (parsedObject.content) {
    parsedObject.content = strip(parsedObject.content);
  }
  if (parsedObject.textContent) {
    parsedObject.textContent = strip(parsedObject.textContent);
  }
  console.log(JSON.stringify(parsedObject));
}

main();
