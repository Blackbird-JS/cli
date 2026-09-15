# @blackbirdjs/cli

The official, zero-configuration command-line interface for the BlackbirdJS framework ecosystem. It handles project scaffolding, dependency installation, and local development orchestration out of the box.

While optimized for BlackbirdJS, the development environment is **completely modular and plug-and-play**, making it an excellent standalone tool for spinning up rapid, lightweight Vanilla JS web applications.

## Features

- **Plug-and-Play Scaffolding**: Generate fresh application foundations in seconds with clean structural best practices.
- **Native Cross-Platform Installation**: Installs standard package dependencies via a clean, secure sub-process terminal stream without unhandled OS shell bugs.
- **Zero-Config Dev Server**: Boots an ultra-fast local development workspace rigidly locked at port `4123`.
- **Clean Visual Foundation**: Scaffolded instances render a minimal, bold, perfectly centered typographic layout out-of-the-box.

## Global Installation

Install the CLI globally via your package manager to use the `bird` terminal command anywhere on your system:

```bash
npm install -g @blackbirdjs/cli
```

---

## Getting Started

Scaffold and run a brand new frontend runtime workspace in just four terminal commands:

### 1. Initialize a Project
Create a self-contained directory populated with standard framework wiring files:
```bash
bird init my-awesome-app
```

### 2. Enter and Install Dependencies
Navigate into your newly minted application structure and pull down required packages (`@blackbirdjs/http` is injected by default):
```bash
cd my-awesome-app
bird install
```

### 3. Launch the Workspace Engine
Fire up the local development compilation layer with hot module replacement (HMR) active:
```bash
bird run
# Or use the alias:
bird dev
```

Your system will lock cleanly onto **`http://localhost:4123`**, bringing up a centered canvas presenting your application landing layout.

---

## Scaffolded Project Structure

Running `bird init` generates a modern, minimal footprint designed around native standard web specifications:

```text
my-awesome-app/
├── package.json    # Standard framework script maps & dependency manifests
└── index.html      # Main viewport canvas featuring typography layouts
```

---

## Terminal Commands Blueprint

```text
Usage:
  bird init [dir-name]   - Scaffolds a new project structure (Defaults to 'blackbird-app')
  bird install           - Installs all project dependencies safely via child processes
  bird run / bird dev    - Boots up the dev server at port 4123
```

---

## License

Licensed under the **Apache-2.0** License.
