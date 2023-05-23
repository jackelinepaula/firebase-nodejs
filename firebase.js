const config1 = { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const config2 = { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./projeto-web-5ea4d-firebase-adminsdk-pljt2-72544423c5.json');

const inicializar = config1.initializeApp({
    credential: config1.cert(serviceAccount)
});

const db = getFirestore();

module.exports = {
    config1: config1,
    config2: config2,
    serviceAccount: serviceAccount,
    initializeApp: inicializar,
    db: db,
}