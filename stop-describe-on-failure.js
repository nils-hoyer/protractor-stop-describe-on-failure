/**
 * returns the name of the describe block
 * @param spec
 * @returns {string}
 */
const getSpecParentName = (spec) => {
    return spec.fullName.replace(spec.description, '');
};

/**
 * returns if spec is part of describe block
 * @param specFullName
 * @param specParentName
 * @returns {boolean}
 */
const isSpecParent = (specFullName, specParentName) => {
    return  specFullName.indexOf(specParentName) !== -1;
};

/**
 * returns if spec is failed
 * @param spec
 * @returns {boolean}
 */
const isSpecFailed = (spec) => {
    return spec.failedExpectations.length > 0;
};

/**
 * describe will stop executing it blocks after first fail
 * @param env
 * @returns {*}
 * @constructor
 */
const StopDescribeReporter = (env) => {

    if (!env) {
        throw new Error('required parameter is missing');
    }

    let specs = [];
    let orgSpecFilter = env.specFilter;

    env.specFilter = (spec) => {
        specs.push(spec);
        return orgSpecFilter(spec);
    };

    this.specDone = (spec) => {

        if (isSpecFailed(spec)) {
            let specParentName = getSpecParentName(spec);

            specs.forEach( (spec) => {
                if (isSpecParent(spec.result.fullName, specParentName)) {
                    spec.disable();
                }
            });
        }
    };

    return this;
};

module.exports = StopDescribeReporter;
