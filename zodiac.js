let zodiacImg = document.querySelector(".zodiac-img");
// let yourZodiac = document.querySelector(".zodiac");
let bday = document.getElementById("birthday");
let findBtn = document.querySelector(".zodiac-btn");
findBtn.addEventListener("click", findZodiac);

let zodiac = [
    ["Aquarius", "1/20", "2/18", "img/aquarius.jpg"],
    ["Pisces", "2/19", "3/20", "img/pisces.jpg"],
    ["Aries", "3/21", "4/19", "img/aries.jpg"],
    ["Taurus", "4/20", "5/20", "img/taurus.jpg"],
    ["Gemini", "5/21", "6/20", "img/gemini.jpg"],
    ["Cancer", "6/21", "7/22", "img/cancer.jpg"],
    ["Leo", "7/23", "8/22", "img/leo.jpg"],
    ["Virgo", "8/23", "9/22", "img/virgo.jpg"],
    ["Libra", "9/23", "10/22", "img/libra.jpg"],
    ["Scorpio", "10/23", "11/21", "img/scorpio.jpg"],
    ["Sagittarius", "11/22", "12/21 ", "img/sagittarius.jpg"],
    ["Capricorn", "12/22", "1/19", "img/capricorn.jpg"]
]

function findZodiac() {
    let bdayFormatted = bday.value.replace(/-/g, "/");
    let dObj = new Date(bdayFormatted); // comes in hyphen format = 1 day off, so change to / to fix
    let year = dObj.getFullYear();

    for (i = 0; i < zodiac.length; i++) {
        let d1 = new Date(zodiac[i][1] + "/" + year);
        let d2 = new Date(zodiac[i][2] + "/" + year);
        if (d1 <= dObj && dObj <= d2) {
            // yourZodiac.textContent = "Zodiac: " + zodiac[i][0];
            zodiacImg.src = zodiac[i][zodiac[i].length - 1];
            break;
        } else {
            if (i == 11) {
                // yourZodiac.textContent = "Zodiac: " + zodiac[i][0];
                zodiacImg.src = zodiac[i][zodiac[i].length - 1];
            }
        }
    }
    zodiacImg.width = "500";
}

// maybe useful 
// https://stackoverflow.com/questions/34838954/change-image-width-height-with-javascript
