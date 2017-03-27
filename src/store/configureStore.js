/**
 * Created by BlisS on 26/03/17.
 */
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
