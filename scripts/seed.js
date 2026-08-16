import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uri = process.env.MONGODB_URI;
if (!uri) {
    console.error("Please add MONGODB_URI to your .env file.");
    process.exit(1);
}

const client = new MongoClient(uri);

async function run() {
    try {
        console.log("Connecting to MongoDB Atlas...");
        await client.connect();
        console.log("Connected!");
        const db = client.db('sutracrochet');
        const collection = db.collection('products');

        const productsDir = path.join(__dirname, '../src/products');
        if (!fs.existsSync(productsDir)) {
            console.log("No products directory found. Skipping seed.");
            return;
        }

        const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.md'));
        
        for (const file of files) {
            const filePath = path.join(productsDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const parsed = matter(content);
            const data = parsed.data;

            // Upsert based on product ID to avoid duplicates
            await collection.updateOne(
                { id: data.id },
                { $set: data },
                { upsert: true }
            );
            console.log(`✓ Inserted/Updated product in MongoDB: ${data.title}`);
        }
        console.log("Migration complete!");
    } finally {
        await client.close();
    }
}

run().catch(console.error);
