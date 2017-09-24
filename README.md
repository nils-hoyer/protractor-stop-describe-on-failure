# protractor-stop-describe-on-failure 
describe block will stop executing it blocks after first fail to minimize test runtime.

# usage
The protractor-stop-describe-on-failurer is available via npm:

```npm install protractor-stop-describe-on-failure --save-dev```

In your protractor configuration file, register the reporter in jasmine:

```
const DescribeFailureReporter = require('protractor-stop-describe-on-failure');

exports.config = {
   onPrepare: function() {
      jasmine.getEnv().addReporter(DescribeFailureReporter(jasmine.getEnv()));
   }
}
```
