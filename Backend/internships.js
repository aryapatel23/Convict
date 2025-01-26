const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
require('dotenv').config();

const uri = process.env.MONGO_URI; 
const dbName = process.env.DB_NAME;
const port = process.env.PORT || 3000;


// Middleware
app.use(express.json());

let db, internships;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = new MongoClient(uri, { useUnifiedTopology: true });
        await client.connect();
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        internships = db.collection("internships");

        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if database connection fails
    }
}

// Initialize Database
initializeDatabase();

// Routes

// 🔹 GET all internships
app.get('/internships', async (req, res) => {
    try {
        const allInternships = await internships.find().toArray();
        res.status(200).json(allInternships);
    } catch (err) {
        res.status(500).json({ error: "Error fetching internships", details: err.message });
    }
});

// 🔹 GET single internship by ID
app.get('/internships/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const internship = await internships.findOne({ _id: new ObjectId(id) });

        if (!internship) {
            return res.status(404).json({ error: "Internship not found" });
        }

        res.status(200).json(internship);
    } catch (err) {
        res.status(500).json({ error: "Error fetching internship", details: err.message });
    }
});

// 🔹 POST: Create new internship
app.post('/internships', async (req, res) => {
    try {
        const newInternship = req.body;
        const result = await internships.insertOne(newInternship);
        res.status(201).json({ message: "Internship added", id: result.insertedId });
    } catch (err) {
        res.status(500).json({ error: "Error adding internship", details: err.message });
    }
});

// 🔹 PATCH: Partially update an internship
app.patch('/internships/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const result = await internships.updateOne(
            { _id: new ObjectId(id) },
            { $set: updates }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ error: "Internship not found or no changes made" });
        }

        res.status(200).json({ message: "Internship updated", modifiedCount: result.modifiedCount });
    } catch (err) {
        res.status(500).json({ error: "Error updating internship", details: err.message });
    }
});

// 🔹 DELETE: Remove an internship
app.delete('/internships/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const result = await internships.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Internship not found" });
        }

        res.status(200).json({ message: "Internship deleted" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting internship", details: err.message });
    }
});
