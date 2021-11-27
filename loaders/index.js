const expressLoader = require('./express')
const mongoLoader = require('./mongo')

module.exports = async (expressApp)=> {
  const mongoConnection = await mongoLoader();
  console.log('MongoDB Initialized');
  await expressLoader(expressApp);
  console.log('Express Initialized');

}