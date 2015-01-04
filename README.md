# meteor-casperjs

[CasperJS](http://casperjs.org) end to end test integration for [meteor](https://www.meteor.com) using [velocity](https://github.com/meteor-velocity/velocity).

## Installation
`meteor add nblazer:casperjs`

## Caution
This package doesn't ship with [CasperJS](http://casperjs.org). You need to have a running CasperJS [installation](http://docs.casperjs.org/en/latest/installation.html) on your system!

## Usage
Create tests in your tests directory `tests/casperjs/[*.js|*.coffee]`
Sample file:
```coffeescript
casper.test.begin "Sample Test", 2, (test) ->
   casper.start casper.cli.get('rootUrl'), ->
      @waitForSelector "body", ->
         test.assert true, "True is true"

   casper.then ->
      test.assertNot false, "False is false"

   casper.run -> test.done()
```
Integrates with [velocity:html-reporter](https://github.com/meteor-velocity/html-reporter/).

Run your tests with `meteor run --test`.

In your tests, parse the `--rootUrl=<URL>` option with `casper.cli.get('rootUrl')` to hit the [soft-mirror](https://github.com/meteor-velocity/node-soft-mirror).
