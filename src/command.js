const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');

module.exports = class Command {
  #optionDefinitions = [
    {
      name: 'debug',
      alias: 'd',
      type: Boolean,
      description: 'debug mode flag',
    },
    {
      name: 'url',
      alias: 'u',
      type: String,
      description: 'URL',
    },
    {
      name: 'charThreshold',
      alias: 'c',
      type: Number,
      description: 'Readability option charThreshold',
    },
    {
      name: 'nbTopCandidates',
      alias: 'n',
      type: Number,
      description: 'Readability option nbTopCandidates',
    },
    {
      name: 'maxElemsToParse',
      alias: 'm',
      type: Number,
      description: 'Readability option maxElemsToParse',
    },
    {
      name: 'help',
      alias: 'h',
      type: Boolean,
      description: 'show help',
    },
  ];

  #sections = [
    {
      header: 'readability-cli',
      content: 'Readability CLI parser',
    },
    {
      header: 'Options',
      optionList: this.#optionDefinitions,
    },
  ];

  #options = {};

  showHelp() {
    const usage = commandLineUsage(this.#sections);
    console.log(usage);
  }

  parseArgs() {
    const options = new commandLineArgs(this.#optionDefinitions);
    if (!options.url) {
      throw new Error('URL must specify');
    }
    this.#options = options;
  }

  get debug() {
    return !!this.#options.debug;
  }

  get help() {
    return !!this.#options.help;
  }

  get url() {
    return this.#options.url;
  }

  get charThreshold() {
    return this.#options.charThreshold;
  }

  get nbTopCandidates() {
    return this.#options.nbTopCandidates;
  }
  get maxElemsToParse() {
    return this.#options.maxElemsToParse;
  }
};
