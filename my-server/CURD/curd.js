const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'nubia';
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function (err, client) {
            assert.equal(null, err);
            err ? reject(err) : resolve(client)
        });
    })
}
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs)
        });
        client.close();
    })
}

const update = (col, query, query2) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.updateMany({
            ...query
        }, {
            $set: {
                ...query2
            }
        }, function (err, result) {
            err ? reject(err) : resolve(result)
        })
    })
}

const remove = (col, query) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.deleteMany(query, function (err, result) {
            err ? reject(err) : resolve(result)
        })
    })
}

const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, result) {
            err ? reject(err) : resolve(result)
        });
    })
}

module.exports = {
    connect,
    find,
    update,
    remove,
    insert
}