const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// these routes have been provided for you. 
// you shouldn't have to change anything in this file.

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * from "shoppingList"
                        ORDER BY "id"`;

    pool.query(queryText).then((result) => {
        res.send(result.rows);
        console.log('This is rows:', result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

// POST Route
router.post(`/`, (req, res) => {
    // console.log(`We just got a letter in list`, req.body)
    const sqlText = `
    INSERT INTO "shoppingList"
        ("itemName", "itemQuantity", "itemUnit")
	    VALUES
	    ($1, $2, $3);`
    const sqlValues = [req.body.itemName, req.body.itemQuantity, req.body.itemUnit]
    pool.query(sqlText, sqlValues)
    .then(dbRes =>{
        res.sendStatus(201)
    })
    .catch(dbErr => {
        console.log(`Error in POSTlist`, dbErr)
        res.sendStatus(500)
    })
})
// PUT Route



// DELETE Route




module.exports = router;