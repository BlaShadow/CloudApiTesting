"use strict";

import devConfig from './dev.json';
import prodConfig from './prod.json';
import testConfig from './test.json';

/** export **/
export default {
    dev: devConfig,
  
    prod: prodConfig,
  
    test: testConfig,
  
    current: function(){
        return devConfig;
    }
};
