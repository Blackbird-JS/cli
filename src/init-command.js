import fs from 'fs';
import path from 'path';

export function handleInit(targetDir) {
  const projectPath = path.resolve(process.cwd(), targetDir);

  if (fs.existsSync(projectPath)) {
    console.error(`\x1b[31mError: Directory "${targetDir}" already exists.\x1b[0m`);
    process.exit(1);
  }

  console.log(`\n\x1b[33mCreating project directory structure at ./${targetDir}...\x1b[0m`);

  // Create folders
  fs.mkdirSync(projectPath, { recursive: true });
  fs.mkdirSync(path.join(projectPath, 'src'));

  // Generate package.json boilerplate
  const pkgJson = {
    name: targetDir,
    version: "1.0.0",
    type: "module",
    scripts: {
      "dev": "blackbird dev"
    },
    dependencies: {}
  };

  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(pkgJson, null, 2)
  );

  // Generate a baseline HTML file
  const sampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${targetDir}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            overflow: hidden;
        }
        #app {
            font-size: 4rem;
            font-weight: 800;
            color: #000000;
            letter-spacing: -0.05em;
            user-select: none;
        }
    </style>
</head>
<body>
    <div id="app">BlackbirdJS</div>
</body>
</html>`;

  fs.writeFileSync(path.join(projectPath, 'index.html'), sampleHtml);

  console.log(`\n\x1b[32m Project successfully scaffolded!\x1b[0m`);
  console.log(`To get started, execute:\n`);
  console.log(`  \x1b[36mcd ${targetDir}\x1b[0m`);
  console.log(`  \x1b[36mbird install\x1b[0m`);
  console.log(`  \x1b[36mbird dev\x1b[0m\n`);
}
