// let DateOne = "06/20/2015";
// let dObj = new Date(DateOne);
// let date = dObj.getDate();
// let month = dObj.getMonth() + 1;
// let year = dObj.getFullYear();

let yourZodiac = document.querySelector(".zodiac");
let bday = document.getElementById("birthday");
let findBtn = document.querySelector(".zodiac-btn");
findBtn.addEventListener("click", findZodiac);

let zodiac = [
    ["Aquarius", "1/20", "2/18"],
    ["Pisces", "2/19", "3/20"],
    ["Aries", "3/21", "4/19"],
    ["Taurus", "4/20", "5/20"],
    ["Gemini", "5/21", "6/20"],
    ["Cancer", "6/21", "7/22"],
    ["Leo", "7/23", "8/22"],
    ["Virgo", "8/23", "9/22"],
    ["Libra", "9/23", "10/22"],
    ["Scorpio", "10/23", "11/21"],
    ["Sagittarius", "11/22", "12/21 "],
    ["Capricorn", "12/22", "1/19"]
]

function findZodiac() {
    let bdayFormatted = bday.value.replace(/-/g, "/");
    let dObj = new Date(bdayFormatted); // comes in hyphen format = 1 day off, so change to / to fix
    let year = dObj.getFullYear();
    // console.log(dObj);

    // CHECKPOINT - check to make sure the date are not off 
    for (i = 0; i < zodiac.length; i++) {
        // console.log(zodiac[i][0]);
        let d1 = new Date(zodiac[i][1] + "/" + year);
        let d2 = new Date(zodiac[i][2] + "/" + year);
        if (d1 <= dObj && dObj <= d2) {
            // console.log(d1);
            // console.log(dObj);
            // console.log(d2);
            // console.log(zodiac[i][0]);
            // console.log("Zodiac: " + zodiac[i][0]);
            yourZodiac.textContent = "Zodiac: " + zodiac[i][0];
            break;
        } else {
            if (i == 11) {
                // console.log("Zodiac: Capricorn");
                yourZodiac.textContent = "Zodiac: " + zodiac[i][0];
            }
        }
    }
}


// for (i = 0; i < zodiac.length; i++) {
//     // console.log(zodiac[i][0]);
//     let d1 = new Date(zodiac[i][1] + "/" + year);
//     let d2 = new Date(zodiac[i][2] + "/" + year);
//     if (d1 <= dObj && dObj <= d2) {
//         // console.log(d1);
//         // console.log(dObj);
//         // console.log(d2);
//         // console.log(zodiac[i][0]);
//         console.log("Zodiac: " + zodiac[i][0]);
//         break
//     } else {
//         // console.log("Not " + zodiac[i][0])
//         if (i == 11) {
//             console.log("Zodiac: Capricorn");
//         }
//     }
// }

