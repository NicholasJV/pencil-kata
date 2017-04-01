## Pencil Kata
#### TDD exercise

You need [node](https://nodejs.org/en/) installed to run this. There are many ways to do this, but you can use Homebrew on OSX.
See node notes below for some more info.

-----

### Setup:
Clone and install from your chosen parent directory:

`git clone https://github.com/NicholasJV/pencil-writer-kata.git`

`npm install`

(Note: I used [yarn](https://yarnpkg.com/en/), a great alternative to npm that uses the same npm registry but uses a more deterministic install process -- that's why there is a `yarn.lock` file in the project. The equivalent to `npm install` is simply `yarn`)

To run tests:

`npm test`

This will launch Chrome as the browser environment by default. It will automatically close when you stop the test process in terminal (and vice versa -- closing the browser will stop the test process). `Ctrl-C` will stop the test process manually, but you probably guessed that.

Safari and Firefox launchers will also install by default; to specify which ones launch automatically, uncomment them in the `browsers` property of `karma.conf.js`

The tests will reload automatically on changes to the files. You can view the test output in the console, or use

`npm run browserTestOutput` to open an html file that displays the test output in a clear format.

The html file should be overwritten every file change, so just refresh the browser to see updated test output.

Test coverage is automatically generated into an html report inside test/coverage/[subfolder], with a subfolder for each browser enabled. Use

`npm run coverage`

to automatically open the report(s).

To start the tests in a debug mode:

`npm run debug`

This runs the tests as before but disables coverage so that the code is not minified and you can step through clearly.

-----

#### node notes:

some people have issues with homebrew installation:

https://gist.github.com/DanHerbert/9520689

version managers are considered best practice by reputable sources:

[nvm](https://github.com/creationix/nvm/) or [n](https://www.npmjs.com/package/n2)
