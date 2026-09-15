import { spawn } from 'child_process';

export function handleInstall() {
  console.log('\n\x1b[36m BlackbirdJS: Running package installation...\x1b[0m\n');

  // Safely target the correct binary executable across OS environments
  const isWindows = process.platform === 'win32';
  const npmCommand = isWindows ? 'npm.cmd' : 'npm';
  const child = spawn(npmCommand, ['install'], { stdio: 'inherit' });

  child.on('close', (code) => {
    if (code === 0) {
      console.log('\n\x1b[32m Dependencies installed successfully!\x1b[0m');
      console.log('You can now run your project using: \x1b[36mbird run\x1b[0m\n');
    } else {
      console.error(`\n\x1b[31mError: Installation failed with exit code ${code}\x1b[0m\n`);
      process.exit(code);
    }
  });
}
