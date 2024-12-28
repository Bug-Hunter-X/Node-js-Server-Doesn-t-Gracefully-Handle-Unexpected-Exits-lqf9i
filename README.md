# Node.js Server Unexpected Exit Handling Bug

This repository demonstrates a common issue in Node.js applications where the server doesn't gracefully shut down when the program terminates unexpectedly (e.g., via Ctrl+C, or a crash).

The `bug.js` file shows the problematic code.  The `bugSolution.js` provides a solution using `process.on('SIGINT')` and `server.close()` for proper cleanup.

## How to Reproduce the Bug

1. Clone this repository.
2. Run `node bug.js`.
3. Observe that the server starts listening on port 8080.
4. Press Ctrl+C to terminate the program.
5. The server might continue running, which can be verified by attempting to access `http://localhost:8080/` in a web browser. This indicates that the server didn't close gracefully.

## Solution

The solution is to use event listeners to handle the `SIGINT` signal (Ctrl+C) and gracefully shut down the server before exiting.  This is demonstrated in `bugSolution.js`.

## License

MIT