const MongoClient = require('mongodb').MongoClient;
const password = 'Pratim%402001'; 
const url = `mongodb+srv://pratimrana688:${password}@cluster0.fpy0oym.mongodb.net/`

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker');
    return connection.collection('IssueTracker2023'); 
}

module.exports = getEmpData;
