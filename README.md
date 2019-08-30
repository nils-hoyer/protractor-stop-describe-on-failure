# protractor-stop-describe-on-failure 
'describe' function will stop executing further 'it' blocks after the first error.

# usage
The protractor-stop-describe-on-failurer is available via npm:

Protractor Version >= 6.0.0 ```npm i protractor-stop-describe-on-failure```
Protractor Version < 6.0.0 ```npm i protractor-stop-describe-on-failure@1.0.3```

In your protractor configuration file, register the reporter in jasmine:

```
const DescribeFailureReporter = require('protractor-stop-describe-on-failure');

exports.config = {
   onPrepare: function() {
      jasmine.getEnv().addReporter(DescribeFailureReporter(jasmine.getEnv()));
   }
}
```
