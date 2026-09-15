#!/usr/bin/env node

import { handleInit } from '../src/init-command.js';
import { handleInstall } from '../src/install-command.js';
import { handleDevServer } from '../src/dev-server.js';

const [, , command, ...args] = process.argv;

switch (command) {
  case 'init': {
    const targetDir = args[0] || 'blackbird-app';
    handleInit(targetDir);
    break;
  }

  case 'install':
    handleInstall();

  case 'run':
  case 'dev':
    handleDevServer();
    break;

  default:
    console.log('\n🐦 \x1b[36mBlackbirdJS CLI\x1b[0m');
    console.log('Usage:');
    console.log('  blackbird init [dir-name]   - Scaffolds a new project structure');
    console.log('  blackbird run / blackbird dev    - Boots up the dev server at port 4123\n');
    process.exit(0);
}
