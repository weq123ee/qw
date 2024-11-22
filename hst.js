const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // 替換為你的 MongoDB URI
const dbName = "412637216"; // 替換為你的資料庫名稱
const collectionName = "STU"; // 替換為你的集合名稱

(async ()=>{
    const client = new MongoClient(uri);
    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const students =await collection.find().toArray();
        console.log("學生資料表");
        students.forEach(students=>{
            console.log(students);
        })      
    } catch (error) {
        console.error("發生錯誤：", error);
    } finally{
        await client.close();
        console.log("以斷開MongoDB連接");
    }

})();