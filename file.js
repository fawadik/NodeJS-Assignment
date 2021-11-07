// json assignment here

const fs = require("fs");

fs.readFile("countries.json", (error, data)=> {
    if (error) {
        console.log("error", error);
        return
    }
    const stringData = Buffer.from(data).toString(); 

    const jsonData = JSON.parse(stringData)   

   const countryNames = jsonData.map((country => {
        return ({country: country.name});
    }));

    const newData = JSON.stringify(countryNames);

    fs.writeFile("countryNames.json", newData, error => {
        if(error) {
        console.log("error", error);
        }
    });
});

