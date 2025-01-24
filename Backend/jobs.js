const express = require('express');
const { MongoClient , ObjectId } = require('mongodb');

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
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
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

// GET: List all students
app.get('/internships', async (req, res) => {
    try {
        const allinternship = await internships.find().toArray();
        res.status(200).json(allinternship);
    } catch (err) {
        res.status(500).send("Error fetching jobs: " + err.message);
    }
});


app.get('/internships/:id', async (req, res) => {
    try {
        const  id=req.params.id
        const allinternships = await internships.find({_id:new ObjectId(id)}).toArray();
        res.status(200).json(allinternships);
    } catch (err) {
        res.status(500).send("Error fetching jobs: " + err.message);
    }
});


// POST: Add a new student
app.post('/internships', async (req, res) => {
    try {
        const newinternship = req.body;
        const result = await internships.insertOne(newinternship);
        res.status(201).send(`user added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding jobs: " + err.message);
    }
});


// PATCH: Partially update a student
app.patch('/internships/:id', async (req, res) => {
    try {
        const internshipsId = req.params.id;
        const updates = req.body;
        const result = await jobs.updateOne({_id: new ObjectId (internshipsId) }, { $set: updates });
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating student: " + err.message);
    }
});

// DELETE: Remove a student
app.delete('/internships/:id', async (req, res) => {
    try {
        const internshipId = req.params.id;
        const result = await jobs.deleteOne({_id:new ObjectId (internshipId) });
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});
