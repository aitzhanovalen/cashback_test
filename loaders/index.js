// import expressLoader from './express';
import mongoLoader from './mongo';

export default async ({ expressApp }) => {
  const mongoConnection = await mongoLoader();
  console.log('MongoDB Initialized');
//   await expressLoader({ app: expressApp });
//   console.log('Express Initialized');

}