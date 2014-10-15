
casper.test.begin "Sample Test", 2, (test) ->
   casper.start "http://localhost:3000", ->
      this.waitForSelector "body", ->
         test.assert true, "True is true"

   casper.then ->
      test.assertNot false, "False is false"

   casper.run -> test.done()
