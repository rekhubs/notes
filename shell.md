
* bash
* sh
* fish
* zsh
* xsh + oh my zsh
* nushell


# Nushell
Purpose: Use as interactive shell, not for scripting/programming. If xxx, tend to use bash or python or others.

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

<img width="422" height="431" alt="image" src="https://github.com/user-attachments/assets/d697b3ff-859f-4cf9-934e-63f131f36d81" />
vs.
```bash
size=3;
echo "hi $size"
```

