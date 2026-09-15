export async function handleDevServer() {
  console.log('\n\x1b[36m Starting BlackbirdJS Dev Server...\x1b[0m');

  try {
    // Dynamic import to pull in Vite programmatically
    const { createServer } = await import('vite');

    const server = await createServer({
      configFile: false,
      root: process.cwd(),
      server: {
        port: 4123,
        staticPort: true, // Throws an error if port 4123 is locked, rather than shifting automatically
        host: true
      }
    });

    await server.listen();
    console.log(`\x1b[32m🚀 Server starting at port 4123...\x1b[0m\n`);
  } catch {
    console.error(`\x1b[31mFailed to run dev server engine:\x1b[0m`, error.message);
    process.exit(1);
  }
}
