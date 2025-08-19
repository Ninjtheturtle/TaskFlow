# MyLanguage

A minimal scripting language interpreter implemented in TypeScript for Deno.

## Features

- **Variables:** `let` and `const` for mutable/immutable bindings
- **Functions:** First-class, closures, higher-order functions
- **Arithmetic:** `+`, `-`, `*`, `/`, `%`
- **Objects:** Object literals, property access (`obj.prop`, `obj["prop"]`)
- **Function Calls:** Direct and higher-order calls
- **Built-in Functions:** `print`, `time`
- **Strings:** String literal support
- **Scoping:** Lexical scoping, closures
- **REPL:** Interactive shell
- **Script Execution:** Run scripts from files

## Example

```plaintext
fn makeAdder (offset) {
    fn add (x, y) {
        x + y + offset
    }
    add 
}

const adder = makeAdder(1);
print (adder(10, 5))
```

## Getting Started

1. **Install [Deno](https://deno.land/).**
2. **Run a script:**
   ```
   deno run -A main.ts
   ```
   By default, this runs `test.txt`.

3. **Start REPL:**
   Uncomment `repl();` in `main.ts` and run:
   ```
   deno run -A main.ts
   ```

## Project Structure

- `frontend/lexer.ts` — Tokenizer
- `frontend/parser.ts` — Parser (AST builder)
- `frontend/ast.ts` — AST node definitions
- `runtime/interpreter.ts` — AST evaluator
- `runtime/environment.ts` — Variable/function scope
- `main.ts` — Entry point
- `test.txt` — Example script

## License

MIT
