"use strict";

import devConfig from './dev.json';
import prodConfig from './prod.json';
import testConfig from './test.json';

import databaseConfig from './database.json';

/** Setup database config each enviroment config **/
prodConfig.database = databaseConfig.production;
devConfig.database = databaseConfig.development;
testConfig.database = databaseConfig.test;

/** export **/
export default {
    dev: devConfig,
  
    prod: prodConfig,
  
    test: testConfig,

    current: function(){
        return devConfig;
    }
};
