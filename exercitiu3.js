'use strict'; 
    const fs = require('fs'); 
    fs.readFile('student.json', (err, data) => { 
        if (err) throw err; 
        let student = JSON.parse(data); 
        console.log(student); }); 
    console.log('Lamborgini huracan ochii pe noi si cancan'); 