
* bash
* sh
* fish
* zsh
* xsh + oh my zsh
* nushell


# Nushell
Purpose: Use as interactive shell, not for scripting/programming. If xxx, tend to use bash or python or others.

.... that even you just want to use if for interactive shell, the tools (funcs, shorthands) you made previously based on bash are still scripts/programs, need to migrate as well if you want a seamless switch.

good
* result rendering - tables
* new commands - http
* working with data, results - post pipeline processing
* look, UI

not so good
* $PATH += ?
* complexity?
* interpolation - see example below

just different
* well, differences, need to learn
* `echo "hi" > a.txt`  -->  `"hi" | save a.txt`
* not such command.. see - https://www.nushell.sh/book/coming_from_bash.html
  * cat --> open

## Notes

* `help commands | explore`  or `help commands`
* interpolation

```shell
let size=3;
print $"hi ($size)"
```

vs. bash:

```bash
size=3;
echo "hi $size"
```

