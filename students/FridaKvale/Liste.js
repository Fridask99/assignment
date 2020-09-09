const fs = require("fs");

if (process.argv.length >= 3){
    let file = process.argv[2];
    let tekst = fs.readFileSync(file,"utf-8");
    let listeMedAlleOrd = allTekstFraFil.split("");

    let ordbok = [];

    listeMedAlleOrd.forEach(ord => {
        if (ordbok[ord] != undefined) {
            ordbok[ord] = ordbok[ord] + 1;
        } else {
            ordbok[ord]= 1;
        }
    
    })

    let sortDir = 0;
    if(process.argv.length > 5 && process.argv[3] == "S"){
        sortDir = process.argv[4];
        }

    }

    let sortert = ordbok.sort((a, b) => {
        return a - b;

    });

    console.log(sortert);


} else {
    console.log("Nah trenger en fil jeg kan jobbe på...")
}





