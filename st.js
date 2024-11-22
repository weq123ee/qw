const { MongoClient } = require('mongodb');
const fs = require('fs');
const csv = require('csv-parser');

const uri = "mongodb://localhost:27017"; // 替換為你的 MongoDB URI
const dbName = "412637216"; // 替換為你的資料庫名稱
const collectionName = "STU"; // 替換為你的集合名稱

async () => {
    const client = new MongoClient(uri);


    try {
        // 讀取 CSV 檔案
        fs.createReadStream('studentslist.csv') // 替換為你的 CSV 檔案路徑
            .pipe(csv())
            .on('data', (data) => results.push(data)) // 將每一列加入 results
            .on('end', async () => {
                console.log("CSV 資料讀取完成，準備插入到 MongoDB");

                // 連接 MongoDB
                await client.connect();
                const db = client.db(dbName);
                const collection = db.collection(collectionName);

                // 插入資料
                const insertResult = await collection.insertMany(results);
                console.log(`成功插入 ${insertResult.insertedCount} 筆資料！`);

                // 關閉連接
                await client.close();
            });
    } catch (error) {
        console.error("發生錯誤：", error);
    }
}


