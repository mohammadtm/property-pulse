import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    //If the DB is already connected; don't connect again

    if (connected) {
        console.log('MongoDb already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log('MongoDb connected');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;