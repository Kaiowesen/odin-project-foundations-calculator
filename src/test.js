
let htmlString = "";
let counter = 0;
let divTagCheck = "<div>"
let startString = "<";


function divCloser(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "<") {
            let j = 1;
            while (j < 5) {
                startString += string[i + j];
                j++;

            }
            console.log("startstr" + startString);
            console.log("divtag" + divTagCheck);
            if (startString == divTagCheck) {

                counter++
                console.log(counter);
                if (counter % 2 == 0) {
                    onsole.log("counter");
                    htmlString += "</div>"
                }
            }
            startString = "";
        } else {
            htmlString += string[i];
        }
    }
    console.log("html" + htmlString)
    return htmlString;
}

divCloser("<div>testing<div>");