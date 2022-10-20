const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlPArser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            poolSize: 50,
            autoIndex: false,
            retryWrites: false,
        },
        url: 'mongodb+srv://mikey-mongo-user:Purple41Blue@cluster0.e7ckytu.mongodb.net/blog-db?retryWrites=true&w=majority'
    },
    server: {
        host: 'localhost',
        port: 8000
    }
}


export default config;