
### find
* syntax: `$ find [-H|-L] path... [operand_expression...]`
* file: `find . -name note.txt`
* dir: `-type d`
* exclude some dirs?

https://www.wikiwand.com/en/Find_(Unix) \
https://www.tecmint.com/35-practical-examples-of-linux-find-command/ \

see also - https://github.com/sharkdp/fd

### grep
* only get matched texts: `-o`, `--only-matching`
* ignore case: `-i`
* recursive: `-r` or `-R`
* invert match, select non-matching lines: `-v`, `--invert-match`
* exclude files: `--exclude=\*.o`
* exclude dirs: `--exclude-dir={dir1,dir2,*.dst}`
* regex / user patterns: `-e`. More see [Pattern Syntax](https://man.archlinux.org/man/grep.1.en#Pattern_Syntax) and [REGULAR EXPRESSIONS](https://man.archlinux.org/man/grep.1.en#REGULAR_EXPRESSIONS)
    * **Basic**: `-G` (**default**)
    *  **Extended**: `-E`
    *  **Pearl**-compatible: `-P`
    *  no regex, fixed strings: `-F`

https://man.archlinux.org/man/grep.1.en \
https://www.linode.com/docs/guides/how-to-grep-for-text-in-files/

### netstat

### top
* highlight **column** - `x`
* highlight **column** background - `b`
* Reverse the sorting order - `R`
* summary/task memory scale, change units - `E` & `e`
* full command path and arguments of process - `c`
* Forest mode, display the processes in a parent child hierarchy - `V`

https://linux.die.net/man/1/top <br/>
https://www.binarytides.com/linux-top-command/  <br/>
https://www.tecmint.com/12-top-command-examples-in-linux/

