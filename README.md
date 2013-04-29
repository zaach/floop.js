# floop.js

This is an example compiler for FlooP programs that can generate JavaScript or asm.js code.

## Install

Grab the source code from github:

    git clone git://github.com/zaach/floop.js.git

Then you need the source code for the modified LLJS to asm.js compiler:

    git clone git://github.com/zaach/LLJS.git

Add the `ljc` executable to your path, or export it in the `LJC_PATH` environmental variable:

    cd LLJS
    export LJC_PATH=`pwd`/bin/ljc

To use the command-line JavaScript shell with asm.js support, grab a jsshell binary from the [Firefox Nightly build directory](http://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/latest-trunk/). The Nightly Firefox builds also support asm.js.

## CLI
Use the `floopc` CLI to compile your FlooP programs.

    node ./bin/floopc [options] <file>

    Options:
      -b, --backend         Backend to use for code generation [asmjs, js, lljs]  [default: "asmjs"]
      -e, --exported-funcs  The functions to export (comma-delimited)
      -a, --ast             Print only an ast                                     [boolean]
      -p, --parse           Parse only                                            [boolean]
      -m, --module-name     Export the module with this name

## Usage

Generate an asm.js module of your FlooP program:

    cd floop.js
    ./bin/floopc examples/fibo.bloop -e FIBO -m fibo > fibo.js

Include this module in a webpage to run:

  <script src="fibo.js"></script>
  <script>
    // log the 8th fibonacci number
    console.log(fibo.FIBO(8));
  </script>

If you want the script to execute from the command-line, don't specify any functions to export and it will run the `MAIN` function defined in the FLooP module.

    ./bin/floopc examples/fibo.bloop > fibo-shell.js

Then run it from the command-line:

    $ node fibo-shell.js
    17711
    10

You should see any output you have printed from the module, followed by the number of miliseconds it took to execute the program (10 in this case).

If you use a `js` executable with asm.js support, you'll also get feedback on the correctness of the asm.js module after it goes through its checks:

    $ js fibo.js
    warning: Successfully compiled asm.js code
    17711
    1

Wow, just look at how fast that is.


## License

MIT
