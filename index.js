const ModuleClass = require("module-test");

/** @module Bcd */
/**
 * @memberOf module:Bcd
 */
class App extends ModuleClass {

}

const app = new App;
//app.someAMethod(1) <- no code completion

/** @module Bcd */
/**
 * @memberOf module:Bcd
 * @extends modle:Abc.A
 */
class App2 extends ModuleClass {

}

const app2 = new App2;
//app2.someAMethod(1) <- code completion works
