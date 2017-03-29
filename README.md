
You need [node.js](https://nodejs.org/en/) installed to run this. There are many ways to do this, but you can use Homebrew on OSX.
See node notes below for some more info.

-----
#### Setup:
clone and install from your chosen parent directory:
`git clone https://github.com/NicholasJV/pencil-writer-kata.git`
`npm install`
(Note: I used [yarn](https://yarnpkg.com/en/), a great alternative to npm that uses the same npm registry but uses a more deterministic install process -- that's why there is a `yarn.lock` file in the project)

To run tests:
`npm test`

This will launch chrome as the browser environment by default. It will automatically close when you stop the test process in terminal (and vice versa -- closing the browser will stop the test process).

The tests will reload automatically on changes to the files. You can view the test output in the console, or use
`npm run browserTestOutput`

The html file should be overwritten every file change, so just refresh the browser to see updated test output.


-----
##### node notes:
some people have issues with homebrew installation:
https://gist.github.com/DanHerbert/9520689
version managers can be a good idea:
[nvm](https://github.com/creationix/nvm/) or [n](https://www.npmjs.com/package/n2)
