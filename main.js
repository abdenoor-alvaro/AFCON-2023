

let userTimezone = getUserTimezone();
console.log(userTimezone);

const currentPage = window.location.pathname;
console.log(currentPage)

const body = document.querySelector("body")
// Start Global Functions

function capitalize(sentence) {
    let teamName = sentence.split(" ")
    for (let j = 0; j < teamName.length; j++) {
        teamName[j] = `${teamName[j].charAt(0).toUpperCase()}${teamName[j].slice(1).toLowerCase()}`
    }
    return  teamName.join(" ")
}
function getUserTimezone() {
    try {
        // Create a date object and retrieve the timezone from the format
        const offsetMinutes = new Date().getTimezoneOffset();
        const offsetHours = -offsetMinutes / 60;
        const offsetSign = offsetHours >= 0 ? '+' : '-';

        // Format the result as "GMT+HH:MM"
        const userTimezone = `${offsetSign}${pad(Math.abs(offsetHours))}:${pad(Math.abs(offsetMinutes % 60))}`;
        return userTimezone;
    } catch (error) {
        console.error('Error detecting user timezone:', error);
        // Return a default timezone or handle the error as needed
        return 'GMT+00:00';
    }
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
function convertTime(gmtTime) {
    let gmtTimeArray = gmtTime.split(":")
    let splitedUserTimezone = userTimezone.split(":")
    let houreTime = parseInt(gmtTimeArray[0]) + parseInt(splitedUserTimezone[0])
    let minuteTime = parseInt(gmtTimeArray[1]) + parseInt(splitedUserTimezone[1])
    if (houreTime > 23) {
        houreTime = houreTime - 24
    }
    if (houreTime < 10) {
        houreTime = `0${houreTime}`
    }
    if (minuteTime < 10) {
        minuteTime = `${minuteTime}0`
    }
    return `${houreTime}:${minuteTime}`
}

let indicator = true
function disableScrolling() {
    if (indicator) {
        body.style.overflow = "hidden"
        indicator = false
        return
    }
    indicator = true
    body.style.overflow = "visible"
}
function openImage(imageSrc) {
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = imageSrc;
    const selectedImage = new Image()
    selectedImage.src = imageSrc
    let widthDifference = screen.width - selectedImage.width
    let heightDifference = screen.height - selectedImage.height

    if (widthDifference < heightDifference) {
        fullscreenImage.style.width = "90%"
    } else {
        fullscreenImage.style.height = "90%"
        fullscreenImage.style.width = "unset"
    }
    body.style.overflow = "hidden"
    fullscreen.style.display = 'block';
}
function closeFullscreen() {
    const fullscreen = document.getElementById('fullscreen');
    fullscreen.style.display = 'none';
    body.style.overflow = "visible"
}
function openVideoFullscreen(id) {
    const fullscreen = document.getElementById('fullscreenn');
    fullscreen.style.display = 'block';
    const videoIdOrUrl = id;

    const iframe = document.getElementById('fullscreen-video');
    if (videoIdOrUrl.includes('youtube.com')) {
        const videoId = videoIdOrUrl.split('v=')[1];
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
    } else {
        iframe.src = `https://www.youtube.com/embed/${videoIdOrUrl}`;
    }
}
function openHighlightNTFullscreen() {
    const fullscreenHighlightNT = document.getElementById('fullscreenHighlightNT');
    fullscreenHighlightNT.style.display = 'block';
}
function closeFullscreenn() {
    const fullscreen = document.getElementById('fullscreenn');
    fullscreen.style.display = 'none';
    const fullscreenHighlightNT = document.getElementById('fullscreenHighlightNT');
    fullscreenHighlightNT.style.display = 'none';

    // Pause the YouTube video by resetting the iframe source
    const iframe = document.getElementById('fullscreen-video');
    iframe.src = '';
}
// End Global Functions
// Example usage
// Start page Header
let pageHeaderHtml = `
    <!-- Start Header -->
    <header>
        <div class="container">
            <div class="logo"><a href="index.html">AFCON-2023</a></div>
            <input type="checkbox" id="burger">
            <label class="burger" for="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="games-and-scores.html">Fixtures & Results</a></li>
                <li><a href="group-stage.html">Standing</a></li>
                <li><a href="knockout.html">Knockout</a></li>
                <li><a href="all-news.html">News</a></li>
                <li><a href="teams.html">Teams</a></li>
            </ul>
        </div>
    </header>
    <!-- End Header -->
`
let pageHeader = document.createElement("div")
let pageBody = document.querySelector("body")
if (!currentPage.includes("games-and-scores.html")) {
    pageHeader.innerHTML = pageHeaderHtml
    pageBody.prepend(pageHeader)
}
// End page Header
// Start Page Footer
let pageFooterHtml = `
        <div class="footer">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
            <div class="container footer-content">
                <div class="left-side">
                    <a href="index.html" class="logo">
                        <img src="images/AFCON_Logo_Port_OnDark_RGB_FR-897x1024.png" alt="">

                    </a>
                    <div class="contact-us-btn"><span>Need The Developer?</span><a href="https://www.facebook.com/abdenoor.alvaro" target="_blank">CONTACT US</a></div> 
                </div>
                <div class="right-side">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="games-and-scores.html">Fixtures & Results</a></li>
                        <li><a href="group-stage.html">Standing</a></li>
                        <li><a href="knockout.html">Knockout</a></li>
                        <li><a href="all-news.html">News</a></li>
                        <li><a href="teams.html">Teams</a></li>
                    </ul>
                </div>
            </div>
            <p class="bottom-footer">Made With <i class="fa-solid fa-heart" style="color: #ff0000;"></i> By Alvaro</p>
        </div>
`
let pageFooter = document.querySelector("footer")
if (!currentPage.includes("index.html")) {
    pageFooter.innerHTML = pageFooterHtml

    if (currentPage.includes("games-and-scores.html") || currentPage.includes("knockout.html")) {
        document.querySelector(".shape-fill").style.fill = "#f1f0d8"
    } else if (currentPage.includes("all-news.html")) {
        document.querySelector(".shape-fill").style.fill = "#020f2a"
    } else if (currentPage.includes("game-generate.html")) {
        document.querySelector(".shape-fill").style.fill = "white"
    }
}
// End Page Footer


// Start Teams Data 
let allTeams = [
    {
        name: "ivory coast",
        subName: "CIV",
        flagPic: "Flag-Cote-dIvoire.webp",
        // players: {
        //     p1: {
        //         fName: "Santana",
        //         lName: "EDERSON",
        //         position: "GOALKEEPER",
        //         photo: "ederson.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p2: {
        //         fName: "Ruben",
        //         lName: "DIAS",
        //         position: "DEFENDER",
        //         photo: "ruben-dias.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p3: {
        //         fName: "Kyle",
        //         lName: "WALKER",
        //         position: "DEFENDER",
        //         photo: "kyle-walker.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
            // p4: {
            //     fName: "Kevin",
            //     lName: "DE BRUYNE",
            //     position: "MIDFIELDER",
            //     photo: "kevin-de-bruyne.webp",
            //     city: "SI hawes",
            //     age: "52yo",
            //     height: "178cm",
            //     proClub: "without club"
            // },
            // p5: {
            //     fName: "Hernandez",
            //     lName: "RODRIGO",
            //     position: "MIDFIELDER",
            //     photo: "rodrigo.webp",
            //     city: "SI hawes",
            //     age: "52yo",
            //     height: "178cm",
            //     proClub: "without club"
            // },
            // p6: {
            //     fName: "Riyad",
            //     lName: "MAHREZ",
            //     position: "FORWARD",
            //     photo: "riyad-mahrez.webp",
            //     city: "SI hawes",
            //     age: "52yo",
            //     height: "178cm",
            //     proClub: "without club"
            // },
            // p7: {
            //     fName: "Erling",
            //     lName: "HAALAND",
            //     position: "FORWARD",
            //     photo: "erling-haaland.webp",
            //     city: "SI hawes",
            //     age: "52yo",
            //     height: "178cm",
            //     proClub: "without club"
            // },
        //     manager: {
        //         fName: "Pep",
        //         lName: "GUARDIOLA",
        //         position: "MANAGER",
        //         photo: "ma.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     }
        // }
    },{
        name: "morocco",
        subName: "MAR",
        flagPic: "ma.png",
        // players: {
        //     p1: {
        //         fName: "Thibaut",
        //         lName: "COURTOIS",
        //         position: "GOALKEEPER",
        //         photo: "COURTOISthumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p2: {
        //         fName: "Daniel",
        //         lName: "CARVAJAL",
        //         position: "DEFENDER",
        //         photo: "CARVAJALThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p3: {
        //         fName: "Eder",
        //         lName: "MILITAO",
        //         position: "DEFENDER",
        //         photo: "MILITAO.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p4: {
        //         fName: "Luka",
        //         lName: "MODRIC",
        //         position: "MIDFIELDER",
        //         photo: "MODRICThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p5: {
        //         fName: "Toni",
        //         lName: "KROOS",
        //         position: "MIDFIELDER",
        //         photo: "KROOSThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p6: {
        //         fName: "Paixao de Oliveira",
        //         lName: "VINICIUS JR.",
        //         position: "FORWARD",
        //         photo: "VINICIUSThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p7: {
        //         fName: "Goes",
        //         lName: "RODRYGO",
        //         position: "FORWARD",
        //         photo: "RODRYGOThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     manager: {
        //         fName: "Carlo",
        //         lName: "ANCELOTTI",
        //         position: "MANAGER",
        //         photo: "ANCELOTTIThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     }
        // }
    },{
        name: "algeria",
        subName: "ALG",
        flagPic: "Flag_of_Algeria.svg",
        players: {
            // p1: {
            //     fName: "moustafa",
            //     lName: "ZEGHBA",
            //     position: "GOALKEEPER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "33",
            //     height: "1.90",
            //     proClub: "Damac F.C",
            //     proClubCountry: "Saudi Arabia"
            // },
            // p2: {
            //     fName: "Anthony Louis",
            //     lName: "Mandrea",
            //     position: "GOALKEEPER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "27",
            //     height: "1.86",
            //     proClub: "S.M. Caen",
            //     proClubCountry: "France"
            // },
            // p3: {
            //     fName: "MBOLHI ",
            //     lName: "RAIS",
            //     position: "GOALKEEPER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "37",
            //     height: "1.88",
            //     proClub: "CR Belouizdad",
            //     proClubCountry: "algeria"
            // },
            // p4: {
            //     fName: "Oussama",
            //     lName: "Benbot",
            //     position: "GOALKEEPER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "29",
            //     height: "1.88",
            //     proClub: "USM Alger",
            //     proClubCountry: "algeria"
            // },
            // p5: {
            //     fName: "Aïssa",
            //     lName: "Mandi",
            //     position: "DEFENDER",
            //     photo: "mandi.png",
            //     age: "32",
            //     height: "1.84",
            //     proClub: "Villarreal",
            //     proClubCountry: "spain"
            // },
            // p6: {
            //     fName: "Kevin Daniel",
            //     lName: "Guitoun",
            //     position: "DEFENDER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "27",
            //     height: "1.90",
            //     proClub: "Metz",
            //     proClubCountry: "France"
            // },
            // p7: {
            //     fName: "Mohamed Amine",
            //     lName: "Tougai",
            //     position: "DEFENDER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "23",
            //     height: "1.91",
            //     proClub: "Espérance de Tunis",
            //     proClubCountry: "tunisia"
            // },
            // p8: {
            //     fName: "Ahmed",
            //     lName: "Touba",
            //     position: "DEFENDER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "25",
            //     height: "1.84",
            //     proClub: "Lecce",
            //     proClubCountry: "italy"
            // },
            // p9: {
            //     fName: "RAYAN",
            //     lName: "AIT NOURI",
            //     position: "DEFENDER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "22",
            //     height: "1.80",
            //     proClub: "Wolverhampton Wanderers",
            //     proClubCountry: "england"
            // },
            p10: {
                fName: "youcef",
                lName: "Atal",
                position: "DEFENDER",
                photo: "atal.jpg",
                age: "27",
                height: "1.76",
                proClub: "O.G.C Nice",
                proClubCountry: "france"
            },
            p11: {
                fName: "Ramy",
                lName: "Bensebaïni",
                position: "DEFENDER",
                photo: "bensabini.jpg",
                age: "28",
                height: "1.87",
                proClub: "Borussia Dortmund",
                proClubCountry: "germany"
            },
            // p12: {
            //     fName: "Zineddine",
            //     lName: "Belaïd",
            //     position: "DEFENDER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "24",
            //     height: "1.87",
            //     proClub: "USM Alger",
            //     proClubCountry: "algeria"
            // },
            // p13: {
            //     fName: "Yasser",
            //     lName: "Larouci",
            //     position: "DEFENDER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "23",
            //     height: "1.76",
            //     proClub: "Sheffield United",
            //     proClubCountry: "England"
            // },
            p14: {
                fName: "Ramiz",
                lName: "Zerrouki",
                position: "MIDFIELDER",
                photo: "zeroki.jpg",
                age: "25",
                height: "1.90",
                proClub: "Feyenoord",
                proClubCountry: "Netherlands"
            },
            p15: {
                fName: "Sofiane",
                lName: "Feghouli",
                position: "MIDFIELDER",
                photo: "fegholi.jpg",
                age: "34",
                height: "1.77",
                proClub: "Fatih Karagümrük",
                proClubCountry: "turkey"
            },
            p16: {
                fName: "Houssem",
                lName: "Aouar",
                position: "MIDFIELDER",
                photo: "aoura.jpg",
                age: "25",
                height: "1.75",
                proClub: "a.C Roma",
                proClubCountry: "italy"
            },
            p17: {
                fName: "Hicham",
                lName: "Boudaoui",
                position: "MIDFIELDER",
                photo: "boudawi.jpg",
                age: "24",
                height: "1.75",
                proClub: "O.G.C Nice",
                proClubCountry: "france"
            },
            // p18: {
            //     fName: "Farès",
            //     lName: "Chaïbi",
            //     position: "MIDFIELDER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "21",
            //     height: "1.83",
            //     proClub: "Eintracht Frankfurt",
            //     proClubCountry: "germany"
            // },
            // p19: {
            //     fName: "Nabil",
            //     lName: "Bentaleb",
            //     position: "MIDFIELDER",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "29",
            //     height: "1.87",
            //     proClub: "Lille",
            //     proClubCountry: "france"
            // },
            p20: {
                fName: "Ismaël",
                lName: "Bennacer",
                position: "MIDFIELDER",
                photo: "bennacer.jpg",
                age: "26",
                height: "1.75",
                proClub: "AC Milan",
                proClubCountry: "italy"
            },
            p21: {
                fName: "Riyad",
                lName: "Mahrez",
                position: "FORWARD",
                photo: "mahrez.jpg",
                age: "32",
                height: "1.79",
                proClub: "Al Ahly Jeddah",
                proClubCountry: "Saudi Arabia"
            },
            p22: {
                fName: "Baghdad",
                lName: "Bounedjah",
                position: "FORWARD",
                photo: "bounejah.jpg",
                age: "32",
                height: "1.85",
                proClub: "Al Saad S.C(",
                proClubCountry: "Qatar"
            },
            p23: {
                fName: "Mohamed Youcef",
                lName: "Belaïli",
                position: "FORWARD",
                photo: "belaili.jpg",
                age: "31",
                height: "1.79",
                proClub: "MC Alger",
                proClubCountry: "algeria"
            },
            // p24: {
            //     fName: "Adam",
            //     lName: "Ounas",
            //     position: "FORWARD",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "27",
            //     height: "1.72",
            //     proClub: "Lille",
            //     proClubCountry: "france"
            // },
            // p25: {
            //     fName: "Islam",
            //     lName: "Slimani",
            //     position: "FORWARD",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "35",
            //     height: "1.88",
            //     proClub: "Coritiba",
            //     proClubCountry: "brazil"
            // },
            // p26: {
            //     fName: "Mohamed El Amine",
            //     lName: "Amoura",
            //     position: "FORWARD",
            //     photo: "zaghba-removebg-preview.png",
            //     age: "23",
            //     height: "1.68",
            //     proClub: "Union Saint Gilloise",
            //     proClubCountry: "Belgium"
            // },
            manager: {
                fName: "Djamel",
                lName: "Belmadi",
                position: "MANAGER",
                photo: "belmadi.png",
                age: "47",
                height: "1.75",
                proClub: "algeria",
            }
        }
    },{
        name: "south africa",
        subName: "RSA",
        flagPic: "Flag_of_South_Africa.svg.png"
    },{
        name: "senegal",
        subName: "SEN",
        flagPic: "Flag-Senegal.webp"
    },{
        name: "burkina faso",
        subName: "BFA",
        flagPic: "Flag-Burkina-Faso.webp"
    },{
        name: "tunisia",
        subName: "TUN",
        flagPic: "1024px-Flag_of_Tunisia.png"
    },{
        name: "egypt",
        subName: "EGY",
        flagPic: "553_1600x.webp"
    },{
        name: "zambia",
        subName: "ZAM",
        flagPic: "download.jpg"
    },{
        name: "equatorial guinea",
        subName: "EQG",
        flagPic: "Flag-Equatorial-Guinea.webp"
    },{
        name: "nigeria",
        subName: "NGA",
        flagPic: "nigeria-flag__68388.1639690373.1280.1280.webp"
    },{
        name: "guinea-bissau",
        subName: "GNB",
        flagPic: "istockphoto-1457742800-612x612.jpg"
    },{
        name: "cape verde",
        subName: "CPV",
        flagPic: "Flag-of-Cape-Verde-01.png"
    },{
        name: "mali",
        subName: "MLI",
        flagPic: "download.png"
    },{
        name: "guinea",
        subName: "GUI",
        flagPic: "Flag-Guinea.webp"
    },{
        name: "ghana",
        subName: "GHA",
        flagPic: "Flag-Ghana.webp"
    },{
        name: "angola",
        subName: "ANG",
        flagPic: "Flag-Angola.webp"
    },{
        name: "tanzania",
        subName: "TAN",
        flagPic: "Flag-Tanzania.webp"
    },{
        name: "mozambique",
        subName: "MOZ",
        flagPic: "Flag-Mozambique.webp"
    },{
        name: "dr congo",
        subName: "COD",
        flagPic: "Flag-Democratic-Republic-of-the-Congo.webp"
    },{
        name: "mauritania",
        subName: "MTN",
        flagPic: "Flag-Mauritania.webp"
    },{
        name: "gambia",
        subName: "GAM",
        flagPic: "Flag-of-The-Gambia.webp"
    },{
        name: "cameroon",
        subName: "CMR",
        flagPic: "download (1).png"
    },{
        name: "namibia",
        subName: "NAM",
        flagPic: "Flag-Namibia.webp"
    },
]
let AllTeams = Object.values(allTeams)
// End Teams Data


// Start All Games & Scores Data
let days = {
    day1: {
        date: "Saturday 13 January 2024",
        game1: {
            teamOne: {
                name: allTeams[0].name,
                // name: "ivory coast",
                flag: "Flag-Cote-dIvoire.webp",
                score: "2",
                goals: {
                     goal1: {
                         minute: "4'",
                         player: "Seko Fofana",
                         assist:"Frank Kessié",
                         penalty: false
                     },
                     goal2: {
                         minute: "58'",
                         player: "Jean-Philippe Krasso",
                         assist:false,
                         penalty: false
                     },     
                    // goal3: {
                    //     minute: "45'",
                    //     player: "havertz",
                    //     assist: "bokayo saka",
                    //     penalty: false
                    // },
                }
            },
            teamTwo: {
                name: "guinea-bissau",
                flag: "istockphoto-1457742800-612x612.jpg",
                score: "0",
                goals: {
                },
            },
            group: "Group A",
            time: "20:00 GMT",
            match: "01",
            city: "Abidjan",
            stadium: "Alassane Ouattara Stadium",
            highlight: "gFKnJXkqVX4?si=ZOqO7H3_vhApJynd"
        }
    },
    day2: {
        date: "Sunday 14 January 2024",
        game1: {
            teamOne: {
                name: "nigeria",
                flag: "nigeria-flag__68388.1639690373.1280.1280.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "38'",
                         player: "Victor Osimhen",
                         assist:"Ademola Lookman",
                         penalty: false 
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            teamTwo: {
                name: "equatorial guinea",
                flag: "Flag-Equatorial-Guinea.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "36'",
                         player: "lban Salvador",
                         assist:"Jose Machin",
                         penalty: false
                      },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            group: "Group A",
            time: "14:00 GMT",
            match: "02",
            city: "Abidjan",
            stadium: "Alassane Ouattara Stadium",
            highlight: "RyhUiuA7Dq4?si=2Vo72Sabd6v0tWZU"
        },
        game2: {
            teamOne: {
                name: "egypt",
                flag: "553_1600x.webp",
                score: 2,
                goals: {
                     goal1: {
                         minute: "2'",
                         player: "Mustapha Mohamed",
                         assist:"Mohamed Salah",
                         penalty: false
                     },
                     goal2: {
                         minute: "90'+7",
                         player: "Mohamed Salah",
                         assist: false,
                         penalty: "(p)"
                     },
                },
            },
            teamTwo: {
                name: "mozambique",
                flag: "Flag-Mozambique.webp",
                score: 2,
                goals: {
                     goal1: {
                         minute: "55'",
                         player: "witi",
                         assist:"Domingos Macandza",
                         penalty: false
                     },
                     goal2: {
                         minute: "58'",
                         player: "	Clesio Bauque",
                         assist: "guima",
                         penalty: false
                     },
                },
            },
            group: "Group B",
            time: "17:00 GMT",
            match: "03",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "aOlbVjGJ59o?si=R8fTZw3Tt0xbYh9h"
        },
        game4: {
            teamOne: {
                name: "ghana",
                flag: "Flag-Ghana.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "56'",
                         player: "Alexander Djiku",
                         assist:"Jordan Ayew",
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                    
                }
            },
            teamTwo: {
                name: "cape verde",
                flag: "Flag-of-Cape-Verde-01.png",
                score: 2,
                goals: {
                     goal1: {
                         minute: "17'",
                         player: "Jamiro Monteiro",
                         assist:false,
                         penalty: false
                     },
                     goal2: {
                         minute: "90'+2",
                         player: "Garry Rodrigues",
                         assist: "Gilson Tavares",
                         penalty: false
                     },
                },
            },
            group: "Group B",
            time: "20:00 GMT",
            match: "04",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "5y7RFKkfTdE?si=_fXgErH4LLTT8Res"
        },
    },
    day3: {
        date: "Monday 15 January 2024",
        game3: {
            teamOne: {
                name: "gambia",
                flag: "Flag-of-The-Gambia.webp",
                score: 0,
                goals: {
                },
            },
            teamTwo: {
                name: "senegal",
                flag: "Flag-Senegal.webp",
                score: 3,
                goals: {
                     goal1: {
                         minute: "4'",
                         player: "Pape Gueye",
                         assist:"Sadio Mane",
                         penalty: false
                     },
                     goal2: {
                         minute: "52'",
                         player: "Lamine Camara",
                         assist: "Ismaila Sarr",
                         penalty: false
                     },
                
                 goal3: {
                         minute: "86'",
                         player: "Lamine Camara",
                         assist:"Iliman Ndiaye",
                         penalty: false
                     },
                },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
            },
            group: "Group C",
            time: "14:00 GMT",
            match: "05",
            city: "Yamoussoukro",
            stadium: "Charles Konan Banny Stadium",
            highlight: "ncTf16XuerI?si=eIHCM1QVomb54r5P"
        },
        game2: {
            teamOne: {
                name: "cameroon",
                flag: "download (1).png",
                score: 1,
                goals: { 
                 goal1: {
                         minute: "51'",
                         player: "Frank Magri",
                         assist:"Georges-Kevin N'Koudou",
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            teamTwo: {
                name: "guinea",
                flag: "Flag-Guinea.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "10'",
                         player: "Mohamed Bayo",
                         assist:false,
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            group: "Group C",
            time: "17:00 GMT",
            match: "06",
            city: "Yamoussoukro",
            stadium: "Charles Konan Banny Stadium",
            highlight: "xjv1_wN492Y?si=jkXsRjvhr7h8NQ49"
        },
        game4: {
            teamOne: {
                name: "angola",
                flag: "Flag-Angola.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "68'",
                         player: "Mabululu",
                         assist: false,
                         penalty: "(p)"
                     },
                },
            },
            teamTwo: {
                name: "algeria",
                flag: "Flag_of_Algeria.svg",
                score: 1,
                goals: {
                     goal1: {
                         minute: "18'",
                         player: "Baghdad Bounedjah",
                         assist:"Youcef Belaili",
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            group: "Group D",
            time: "20:00 GMT",
            match: "07",
            city: "Bouaké",
            stadium: "Stade de Paix",
            highlight: "LLTqWwPFSqc?si=GlvVCSXCVyenFJYg"
        },
        
    },
    day4: {
        date: "Tuesday 16 January 2024",
        game1: {
            teamOne: {
                name: "mauritania",
                flag: "Flag-Mauritania.webp",
                score: 0,
                goals: {
                },
            },
            teamTwo: {
                name: "burkina faso",
                flag: "Flag-Burkina-Faso.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "90'+6",
                         player: "Bertrand Traore",
                         assist:false,
                         penalty: "(P)"
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            group: "Group D",
            time: "14:00 GMT",
            match: "08",
            city: "Bouaké",
            stadium: "Stade de Paix",
            highlight: "L21NxvN_tI0?si=Sk0XWLB31X8LkRCT"
        },
        game2: {
            teamOne: {
                name: "namibia",
                flag: "Flag-Namibia.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "88'",
                         player: "Deon Hotto",
                         assist:"Bethuel Muzeu",
                         penalty: false 
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            teamTwo: {
                name: "tunisia",
                flag: "1024px-Flag_of_Tunisia.png",
                score: 0,
                goals: {
                },
            },
            group: "Group E",
            time: "17:00 GMT",
            match: "09",
            city: "Korhogo",
            stadium: "Amadou Gon Coulibaly Stadium",
            highlight: "07iYScoHvtQ?si=HJRnW69f5Ag3Pi5X"
        },
        game3: {
            teamOne: {
                name: "mali",
                flag: "download.png",
                score: 2,
                goals: {
                     goal1: {
                         minute: "60'",
                         player: "Hamari Traore",
                         assist:false,
                         penalty: false
                     },
                     goal2: {
                         minute: "66'",
                         player: "Lassine Sinayoko",
                         assist: "Kamory Doumbia",
                         penalty: false
                     },
                },
            },
            teamTwo: {
                name: "south africa",
                flag: "Flag_of_South_Africa.svg.png",
                score: 0,
                goals: {
                },
            },
            group: "Group E",
            time: "20:00 GMT",
            match: "10",
            city: "Korhogo",
            stadium: "Amadou Gon Coulibaly Stadium",
            highlight: "35WBkPG6z7U?si=7DoI_USg2ZGUaXoo"
        },
    },
    day5: {
        date: "Wednsday 17 January 2024",
        game1: {
            teamOne: {
                name: "morocco",
                flag: "ma.png",
                score: 3,
                goals: {
                    goals1:{
                         minute: "30'",
                         player: "Romain Saiss",
                         assist:false,
                         penalty:false
                     }, 
                     goal2: {
                         minute: "77'",
                         player: "Azzedine Ounahi",
                         assist:"Amine Adli",
                         penalty: false
                     },
                     goal3: {
                         minute: "80'",
                         player: "Youssef En-Nesyri",
                         assist: "Achraf Hakimi",
                         penalty: false
                     },
                },
            },
            teamTwo: {
                name: "tanzania",
                flag: "Flag-Tanzania.webp",
                score: 0,
                goals: {
                },
            },
            group: "Group F",
            time: "17:00 GMT",
            match: "11",
            city: "San Pedro",
            stadium: "Laurent Pokou Stadium",
            highlight: "CYzCUXDrD6c?si=0XKy7dsvGEoisS9Z"
        },
        game2: {
            teamOne: {
                name: "dr congo",
                flag: "Flag-Democratic-Republic-of-the-Congo.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "27'",
                         player: "Yoane Wissa",
                         assist:"Cedric Bakambu",
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            teamTwo: {
                name: "zambia",
                flag: "download.jpg",
                score: 1,
                goals: {
                     goal1: {
                         minute: "23'",
                         player: "Kings Kangwa",
                         assist:"Patson Daka",
                         penalty: false 
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            group: "Group F",
            time: "20:00 GMT",
            match: "12",
            city: "San Pedro",
            stadium: "Laurent Pokou Stadium",
            highlight: "iN29D8C-t78?si=bAZuwr_fvsBiZIWc"
        }
    },
    day6: {
        date: "Thursday 18 January 2024",
        game1: {
            teamOne: {
                name: "equatorial guinea",
                flag: "Flag-Equatorial-Guinea.webp",
                score: 4,
                goals: {
                    goal1: {
                         minute: "21'",
                         player: "Emilio Nsue",
                         assist:"Pablo Ganet",
                         penalty: false
                     },
                     goal2: {
                         minute: "46'",
                         player: "Josete Miranda",
                         assist: "Jesus Owono",
                         penalty: false
                     },
                     goal3: {
                         minute: "51'",
                         player: "Emilio Nsue",
                         assist:"Basilio Ndong",
                         penalty: false
                     },
                     goal4: {
                         minute: "61'",
                         player: "Emilio Nsue",
                         assist: "Jose Machin",
                         penalty: false
                     }, 
                },
            },
            teamTwo: {
                name: "guinea-bissau",
                flag: "istockphoto-1457742800-612x612.jpg",
                score: 2,
                goals: {
                     goal1: {
                         minute: "37'",
                         player: "Esteban Orozco",
                         assist:"Own goal",
                         penalty: false
                     },
                     goal2: {
                         minute: "90'+3",
                         player: "Ze Turbo",
                         assist: "Dalcio Gomes",
                         penalty: false
                     },
                },
            },
            group: "Group A",
            time: "14:00 GMT",
            match: "13",
            city: "Abidjan",
            stadium: "Alassane Ouattara Stadium",
            highlight: "tXGIyC4W5gA?si=MRvQw--KH6SOGO0v"
        },
        game2: {
            teamOne: {
                name: "nigeria",
                flag: "nigeria-flag__68388.1639690373.1280.1280.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "55'",
                         player: "William Troost-Ekong",
                         assist:false,
                         penalty: "(P)"
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            teamTwo: {
                name: "ivory coast",
                flag: "Flag-Cote-dIvoire.webp",
                score: 0,
                goals: {
                },
            },
            group: "Group A",
            time: "17:00 GMT",
            match: "14",
            city: "Abidjan",
            stadium: "Alassane Ouattara Stadium",
            highlight: "KaOO0somVe4?si=S3XlTEW8TWGCvwKE"
        },
        
        game4: {
            teamOne: {
                name: "egypt",
                flag: "553_1600x.webp",
                score: 2,
                goals: {
                     goal1: {
                         minute: "69'",
                         player: "Omar Marmoush",
                         assist:false,
                         penalty: false
                     },
                     goal2: {
                         minute: "74'",
                         player: "Mostafa Mohamed",
                         assist: " Mohamed Trezeguet",
                         penalty: false
                     },
                },
            },
            teamTwo: {
                name: "ghana",
                flag: "Flag-Ghana.webp",
                score: 2,
                goals: {
                     goal1: {
                         minute: "45'",
                         player: "Mohamed Kudus",
                         assist:"Salis Abdul Samed",
                         penalty: false
                     },
                     goal2: {
                         minute: "70'",
                         player: "Mohamed Kudus",
                         assist: "Denis Odoi",
                         penalty: false
                     },
                },
            },
            group: "Group B",
            time: "20:00 GMT",
            match: "16",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "CUdQIT_Bj1s?si=oE5-xgdAn3qHPnfU"
        },
        
    },
    day7: {
        date: "Friday 19 January 2024",
        game1: {
            teamOne: {
                name: "mozambique",
                flag: "Flag-Mozambique.webp",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "cape verde",
                flag: "Flag-of-Cape-Verde-01.png",
                score: 3,
                goals: {
                     goal1: {
                         minute: "32'",
                         player: "Bebe",
                         assist:false,
                         penalty: false
                     },
                     goal2: {
                         minute: "51'",
                         player: "Ryan Mendes",
                         assist: false,
                         penalty: false
                    },
                     goal3: {
                         minute: "69'",
                         player: "Kevin Lenini",
                         assist:"Deroy Duarte",
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            group: "Group B",
            time: "14:00 GMT",
            match: "18",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "cameroon",
                flag: "download (1).png",
                score: 1,
                goals: {
                     goal1: {
                         minute: "83'",
                         player: "Jean-Charles Castelletto",
                         assist:"Olivier Ntcham",
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            teamTwo: {
                name: "senegal",
                flag: "Flag-Senegal.webp",
                score: 3,
                goals: {
                     goal1: {
                         minute: "17'",
                         player: "Ismaila Sarr",
                         assist:"Pape Sarr",
                         penalty: false
                     },
                     goal2: {
                         minute: "71'",
                         player: "Habibou Mouhamadou Diallo",
                         assist: "Ismaila Sarr",
                         penalty: false
                     },
                     goal3: {
                         minute:"90'+5",
                         player: "Sadio Mane",
                         assist:"Idrissa Gana Gueye",
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            group: "Group C",
            time: "17:00 GMT",
            match: "15",
            city: "Yamoussoukro",
            stadium: "Charles Konan Banny Stadium",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "gambia",
                flag: "Flag-of-The-Gambia.webp",
                score: 0,
                goals: {
                },
            },
            teamTwo: {
                name: "guinea",
                flag: "Flag-Guinea.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "70'",
                         player: "Aguibou Camara",
                         assist:"Morgan Guilavogui",
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            group: "Group C",
            time: "20:00 GMT",
            match: "17",
            city: "Yamoussoukro",
            stadium: "Charles Konan Banny Stadium",
            highlight: "#"
        },
        
    },
    day8: {
        date: "Saturday 20 January 2024",
        game1: {
            teamOne: {
                name: "burkina faso",
                flag: "Flag-Burkina-Faso.webp",
                score: 2,
                goals: {
                     goal1: {
                         minute: "45'+3",
                         player: "Mohamed Konate",
                         assist:"Abdoul Fessal Tapsoba",
                         penalty: false
                     },
                     goal2: {
                         minute: "71'",
                         player: "Bertrand Traore",
                         assist: false,
                         penalty: "(p)"
                     },
                },
            },
            teamTwo: {
                name: "algeria",
                flag: "Flag_of_Algeria.svg",
                score: 2,
                goals: {
                     goal1: {
                         minute: "51'",
                         player: "Baghdad Bounedjah",
                         assist:false,
                         penalty: false
                     },
                     goal2: {
                         minute: "90'+5",
                         player: "Baghdad Bounedjah",
                         assist: "Adam Ounas",
                         penalty: false
                     },
                },
            },
            group: "Group D",
            time: "14:00 GMT",
            match: "19",
            city: "Bouaké",
            stadium: "Stade de Paix",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "mauritania",
                flag: "Flag-Mauritania.webp",
                score: 2,
                goals: {
                     goal1: {
                         minute: "43'",
                         player: "Sidi Amar",
                         assist:"Omare Gassama",
                         penalty: false
                     },
                     goal2: {
                         minute: "58'",
                         player: "Aboubakary Koita",
                         assist: "Khadim Diaw",
                         penalty: false
                     },
                },
            },
            teamTwo: {
                name: "angola",
                flag: "Flag-Angola.webp",
                score: 3,
                goals: {
                     goal1: {
                         minute: "30'",
                         player: "Dala Gelson",
                         assist:false,
                         penalty: false
                     },
                     goal2: {
                         minute: "50'",
                         player: "Dala Gelson",
                         assist: false,
                         penalty: false
                     },
                     goal3: {
                         minute: "53'",
                         player: "Gilberto",
                         assist:false,
                         penalty: false
                     },
                
                },
            },
            group: "Group D",
            time: "17:00 GMT",
            match: "20",
            city: "Bouaké",
            stadium: "Stade de Paix",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "mali",
                flag: "download.png",
                score: 1,
                goals: {
                     goal1: {
                         minute: "10'",
                         player: "Lassine Sinayoko",
                         assist:"Kamory Doumbia",
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            teamTwo: {
                name: "tunisia",
                flag: "1024px-Flag_of_Tunisia.png",
                score: 1,
                goals: {
                     goal1: {
                         minute: "20'",
                         player: "Hamza Rafia",
                         assist:"Ali Abdi",
                         penalty: false
                     },
                    // goal4: {
                    //     minute: "02'",
                    //     player: "bokayo saka",
                    //     assist: "odegard",
                    //     penalty: false
                    // },
                },
            },
            group: "Group E",
            time: "20:00 GMT",
            match: "21",
            city: "Korhogo",
            stadium: "Amadou Gon Coulibaly Stadium",
            highlight: "#"
        },
    },
    day9: {
        date: "Sunday 21 January 2024",
        game1: {
            teamOne: {
                name: "morocco",
                flag: "ma.png",
                score: 1,
                goals: {
                     goal1: {
                         minute: "6'",
                         player: "Achraf Hakimi",
                         assist:"Hakim Ziyech",
                         penalty: false
                     },
                },
            },
            teamTwo: {
                name: "dr congo",
                flag: "Flag-Democratic-Republic-of-the-Congo.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "76'",
                         player: "Silas Katompa Mvumpa",
                         assist:"Meschack Elia",
                         penalty: false
                     },
                },
            },
            group: "Group F",
            time: "14:00 GMT",
            match: "22",
            city: "San Pedro",
            stadium: "Laurent Pokou Stadium",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "tanzania",
                flag: "Flag-Tanzania.webp",
                score: 1,
                goals: {
                     goal1: {
                         minute: "11'",
                         player: "Simon Msuva",
                         assist:"Mbwana Samatta",
                         penalty: false
                     },
                },
            },
            teamTwo: {
                name: "zambia",
                flag: "download.jpg",
                score: 1,
                goals: {
                     goal1: {
                         minute: "88'",
                         player: "Patson Daka",
                         assist:"Clatous Chama",
                         penalty: false
                     },
                },
            },
            group: "Group F",
            time: "17:00 GMT",
            match: "23",
            city: "San Pedro",
            stadium: "Laurent Pokou Stadium",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "namibia",
                flag: "Flag-Namibia.webp",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "south africa",
                flag: "Flag_of_South_Africa.svg.png",
                score: false,
                goals: {
                },
            },
            group: "Group E",
            time: "20:00 GMT",
            match: "24",
            city: "Korhogo",
            stadium: "Amadou Gon Coulibaly Stadium",
            highlight: "#"
        },
    },
    day10: {
        date: "Monday 22 January 2024",
        game1: {
            teamOne: {
                name: "equatorial guinea",
                flag: "Flag-Equatorial-Guinea.webp",
                score: false,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "ivory coast",
                flag: "Flag-Cote-dIvoire.webp",
                score: false,
                goals: {
                },
            },
            group: "Group A",
            time: "17:00 GMT",
            match: "25",
            city: "Abidjan",
            stadium: "Alassane Ouattara Stadium",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "nigeria",
                flag: "nigeria-flag__68388.1639690373.1280.1280.webp",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "guinea-bissau",
                flag: "istockphoto-1457742800-612x612.jpg",
                score: false,
                goals: {
                },
            },
            group: "Group A",
            time: "17:00 GMT",
            match: "26",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "egypt",
                flag: "553_1600x.webp",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "cape verde",
                flag: "Flag-of-Cape-Verde-01.png",
                score: false,
                goals: {
                },
            },
            group: "Group B",
            time: "20:00 GMT",
            match: "27",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "mozambique",
                flag: "Flag-Mozambique.webp",
                score: false,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "ghana",
                flag: "Flag-Ghana.webp",
                score: false,
                goals: {
                },
            },
            group: "Group B",
            time: "20:00 GMT",
            match: "28",
            city: "Abidjan",
            stadium: "Alassane Ouattara Stadium",
            highlight: "#"
        },
    },
    day11: {
        date: "Tuesday 23 January 2024",
        game1: {
            teamOne: {
                name: "guinea",
                flag: "Flag-Guinea.webp",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "senegal",
                flag: "Flag-Senegal.webp",
                score: false,
                goals: {
                },
            },
            group: "Group C",
            time: "17:00 GMT",
            match: "29",
            city: "Yamoussoukro",
            stadium: "Charles Konan Banny Stadium",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "gambia",
                flag: "Flag-of-The-Gambia.webp",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "cameroon",
                flag: "download (1).png",
                score: false,
                goals: {
                },
            },
            group: "Group C",
            time: "17:00 GMT",
            match: "30",
            city: "Bouaké",
            stadium: "Stade de Paix",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "burkina faso",
                flag: "Flag-Burkina-Faso.webp",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "angola",
                flag: "Flag-Angola.webp",
                score: false,
                goals: {
                },
            },
            group: "Group D",
            time: "20:00 GMT",
            match: "31",
            city: "Yamoussoukro",
            stadium: "Charles Konan Banny Stadium",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "mauritania",
                flag: "Flag-Mauritania.webp",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "algeria",
                flag: "Flag_of_Algeria.svg",
                score: false,
                goals: {
                },
            },
            group: "Group D",
            time: "20:00 GMT",
            match: "32",
            city: "Bouaké",
            stadium: "Stade de Paix",
            highlight: "#"
        },
    },
    day12: {
        date: "Wednesday 24 January 2024",
        game1: {
            teamOne: {
                name: "mali",
                flag: "download.png",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "namibia",
                flag: "Flag-Namibia.webp",
                score: false,
                goals: {
                },
            },
            group: "Group E",
            time: "17:00 GMT",
            match: "33",
            city: "San Pedro",
            stadium: "Laurent Pokou Stadium",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "tunisia",
                flag: "1024px-Flag_of_Tunisia.png",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "south africa",
                flag: "Flag_of_South_Africa.svg.png",
                score: false,
                goals: {
                },
            },
            group: "Group E",
            time: "17:00 GMT",
            match: "34",
            city: "Korhogo",
            stadium: "Amadou Gon Coulibaly Stadium",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "tanzania",
                flag: "Flag-Tanzania.webp",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "dr congo",
                flag: "Flag-Democratic-Republic-of-the-Congo.webp",
                score: false,
                goals: {
                },
            },
            group: "Group F",
            time: "20:00 GMT",
            match: "35",
            city: "Korhogo",
            stadium: "Amadou Gon Coulibaly Stadium",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "morocco",
                flag: "ma.png",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "zambia",
                flag: "download.jpg",
                score: false,
                goals: {
                },
            },
            group: "Group F",
            time: "20:00 GMT",
            match: "36",
            city: "San Pedro",
            stadium: "Laurent Pokou Stadium",
            highlight: "#"
        },
    },
    day13: {
        date: "Saturday 27 January 2024",
        game1: {
            teamOne: {
                name: "1D",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "3/BEF",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Round Of 16",
            time: "17:00 GMT",
            match: "37",
            city: "Bouaké",
            stadium: "Stade de Paix",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "2A",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "2C",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Round Of 16",
            time: "20:00 GMT",
            match: "38",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "#"
        },
    },
    day14: {
        date: "Sunday 28 January 2024",
        game1: {
            teamOne: {
                name: "1A",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "3/CDE",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Round Of 16",
            time: "17:00 GMT",
            match: "39",
            city: "Abidjan",
            stadium: "Alassane Ouattara Stadium",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "2F",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "2B",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Round Of 16",
            time: "20:00 GMT",
            match: "40",
            city: "San Pedro",
            stadium: "Laurent Pokou Stadium",
            highlight: "#"
        },
    },
    day15: {
        date: "Monday 29 January 2024",
        game1: {
            teamOne: {
                name: "cape verde",
                flag: "Flag-of-Cape-Verde-01.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "3/ACD",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Round Of 16",
            time: "17:00 GMT",
            match: "41",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "1C",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "3/ABF",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Round Of 16",
            time: "20:00 GMT",
            match: "42",
            city: "Yamoussoukro",
            stadium: "Charles Konan Banny Stadium",
            highlight: "#"
        },
    },
    day16: {
        date: "Tuesday 30 January 2024",
        game1: {
            teamOne: {
                name: "1E",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "2D",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Round Of 16",
            time: "17:00 GMT",
            match: "43",
            city: "Korhogo",
            stadium: "Amadou Gon Coulibaly Stadium",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "1F",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "2E",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Round Of 16",
            time: "20:00 GMT",
            match: "44",
            city: "San Pedro",
            stadium: "Laurent Pokou Stadium",
            highlight: "#"
        },
    },
    day17: {
        date: "Friday 02 February 2024",
        game1: {
            teamOne: {
                name: "Winner 37",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "Winner 38",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Quarter Final",
            time: "17:00 GMT",
            match: "45",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "Winner 39",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "Winner 40",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Quarter Final",
            time: "20:00 GMT",
            match: "46",
            city: "Abidjan",
            stadium: "Alassane Ouattara Stadium",
            highlight: "#"
        },
    },
    day18: {
        date: "Saturday 03 February 2024",
        game1: {
            teamOne: {
                name: "Winner 42",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "Winner 43",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Quarter Final",
            time: "17:00 GMT",
            match: "47",
            city: "Bouaké",
            stadium: "Stade de Paix",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "Winner 41",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "Winner 44",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Quarter Final",
            time: "20:00 GMT",
            match: "48",
            city: "Yamoussoukro",
            stadium: "Charles Konan Banny Stadium",
            highlight: "#"
        },
    },
    day19: {
        date: "Wednesday 07 February 2024",
        game1: {
            teamOne: {
                name: "Winner 48",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "Winner 45",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Semi Final",
            time: "17:00 GMT",
            match: "49",
            city: "Bouaké",
            stadium: "Stade de Paix",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "Winner 47",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "Winner 46",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Semi Final",
            time: "20:00 GMT",
            match: "50",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "#"
        },
    },
    day21: {
        date: "Saturday 10 February 2024",
        game1: {
            teamOne: {
                name: "Loser 50",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "Loser 49",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Third Place",
            time: "20:00 GMT",
            match: "51",
            city: "Abidjan",
            stadium: "Houphouët-Boigny Stadium",
            highlight: "#"
        },
    },
    day22: {
        date: "Sunday 11 February 2024",
        game1: {
            teamOne: {
                name: "Winner 50",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "Winner 49",
                flag: "empty.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Final",
            time: "20:00 GMT",
            match: "52",
            city: "Abidjan",
            stadium: "Alassane Ouattara Stadium",
            highlight: "#"
        },
    },
}
let dayss = Object.values(days)
// End All Games & Scores Data



// Start Groups Data
let groupA = ["ivory coast", "nigeria", "equatorial guinea", "guinea-bissau"]
let groupB = [ "egypt","ghana", "cape verde", "mozambique"]
let groupC = ["senegal", "cameroon", "gambia", "guinea"]
let groupD = ["algeria", "burkina faso", "angola", "mauritania"]
let groupE = ["tunisia", "mali", "south africa", "namibia"]
let groupF = ["morocco", "dr congo", "zambia", "tanzania"]
// let thirdRanked = ["A3", "B3", "C3", "D3", "E3", "F3"]
// End Groups Data





// Start Latest News Data
let newsData = {
    news3: {
        img: "news3.webp",
        header: "PHOTOS: AFCON 2023 Opening Ceremony",
        description: `
        <style>
        .n3 a,
        .n3 b {
            margin-bottom: 16;
            display:block;
        }
        .n3 img {
            width:100%;
            margin-bottom: 16;
        }
        </style>
        <b>An electric opening ceremony kicked off the TotalEnergies CAF Africa Cup of Nations Cote d'Ivoire 2023 in thrilling style on Saturday night in Abidjan.</b>
        <a>A capacity 60,000 crowd at the Alassane Ouattara Olympic Stadium soaked up the colours and culture of Cote d'Ivoire ahead of the tournament opener between the hosts and Guinea Bissau.</a>
        <a>The celebration featured singers, acrobats and dancers in a vibrant showcase of Ivorian tradition and African unity.</a>
        <img src="images/news3+.webp" alt="" class="thumbnail" onclick="openImage('images/news3+.webp')">
        
        <a>Fireworks in the Ivorian national colours lit up the Abidjan sky at the end of the ceremony to launch Africa's biggest football party in spectacular fashion. </a>
        
        <a>The stunning spectacle whipped fans into a frenzy moments before kick-off as the continental showpiece got underway.</a>
        
`,
        date: "13 Jan 2024",
        lan: "english",
        postId: "n3",
        // video: "TVV95Cw05og?si=Vl6BRuQVvy3K1I77"
    },
    news2: {
        img: "news2.webp",
        header: "Final Squad Lists for AFCON 2023 ",
        description: `
        <style>
        .n2 a{
            color: #189e4b;
        }
        </style>
        With seven days to kick-off of Africa's biggest event, the  TotalEnergies CAF Africa Cup of Nations Cote d'Ivoire 2023, CAF today released the final squad list for the 24 qualified teams.
        <br>
The opening match of the TotalEnergies CAF Africa Cup of Nations Cote d'Ivoire 2023 will be played in Abidjan on 13 January 2023.
<br>
In line with the new Regulations, each Participating Member Association ("PMA") is permitted to submit a final squad of up to 27 players; with only 23 available for selection for each match during the Tournament.
<br>
A player in the final squad can only be replaced after a serious injury no less than 24 hours before the team’s first match.
<br>
Click <b>BELOW</b> for the TotalEnergies CAF AFCON squads.
<br>
<br>

<a href="https://www.cafonline.com/media/0qva0o20/angola.pdf" target="_blank" >Angola</a>
<br>
<a href="https://www.cafonline.com/media/sanb2r2g/algeria.pdf" target="_blank" >Algeria</a>
<br>
<a href="https://www.cafonline.com/media/213c0wwp/burkina-faso.pdf" target="_blank" >Burkina Faso</a>
<br>
<a href="https://www.cafonline.com/media/tdcd0g0y/cameroon.pdf" target="_blank" >Cameroon</a>
<br>
<a href="https://www.cafonline.com/media/dzmc1iov/cap-vert.pdf" target="_blank" >Cape Verde</a>
<br>
<a href="https://www.cafonline.com/media/3dtf23jl/congo-dr.pdf" target="_blank" >DR Congo</a>
<br>
<a href="https://www.cafonline.com/media/ow2obxrw/c%C3%B4te-divoire.pdf" target="_blank" >Cote d'Ivoire</a>
<br>
<a href="https://www.cafonline.com/media/derfauez/eq-guinea.pdf" target="_blank" >Eq Guinea</a>
<br>
<a href="https://www.cafonline.com/media/d2ub1hek/gambia.pdf" target="_blank" >Gambia</a>
<br>
<a href="https://www.cafonline.com/media/0s5e3tiy/egypt.pdf" target="_blank" >Egypt</a>
<br>
<a href="https://www.cafonline.com/media/nwzj0ybn/ghana.pdf" target="_blank" >Ghana</a>
<br>
<a href="https://www.cafonline.com/media/ptwhwwt0/guinea-bissau.pdf" target="_blank" >Guinea Bissau</a>
<br>
<a href="https://www.cafonline.com/media/kxtbufgs/guinea.pdf" target="_blank" >Guinea</a>
<br>
<a href="https://www.cafonline.com/media/5uln1hek/mali.pdf" target="_blank" >Mali</a>
<br>
<a href="https://www.cafonline.com/media/12bbys2g/maroc.pdf" target="_blank" >Morocco</a>
<br>
<a href="https://www.cafonline.com/media/3sfnq3az/mauritania.pdf" target="_blank" >Mauritania</a>
<br>
<a href="https://www.cafonline.com/media/q2fbupse/mozambique.pdf" target="_blank" >Mozambique</a>
<br>
<a href="https://www.cafonline.com/media/e0zbjymc/namibia.pdf" target="_blank" >Namibia</a>
<br>
<a href="https://www.cafonline.com/media/4diducuu/nigeria.pdf" target="_blank" >Nigeria</a>
<br>
<a href="https://www.cafonline.com/media/xizpgqe1/senegal.pdf" target="_blank" >Senegal</a>
<br>
<a href="https://www.cafonline.com/media/fjmhqgv2/south-africa.pdf" target="_blank" >South Africa</a>
<br>
<a href="https://cafonline.com/media/1uqpjqua/tanzania.pdf" target="_blank" >Tanzania</a>
<br>
<a href="https://www.cafonline.com/media/t54he35q/tunisie.pdf" target="_blank" >Tunisia</a>
<br>
<a href="https://www.cafonline.com/media/vtggqnwq/zambia.pdf" target="_blank" >Zambia</a>
<br>
`,
        date: "06 Jan 2024",
        lan: "english",
        postId: "n2",
        // video: "TVV95Cw05og?si=Vl6BRuQVvy3K1I77"
    },
    news1: {
        img: "news1.jpeg",
        header: "AFCON 2023 | FINAL DRAW",
        description: `<b>Groups:</b>
<br>
<b>Group A:</b> Ivory Coast, Nigeria, Equatorial Guinea, Guinea Bissau
<br>
<b>Group B:</b> Egypt, Ghana, Cape Verde Islands, Mozambique
<br>
<b>Group C:</b> Senegal, Cameroon, Guinea, Gambia
<br>
<b>Group D:</b> Algeria, Burkina Faso, Mauritania, Angola
<br>
<b>Group E:</b> Tunisia, Mali, South Africa, Namibia
<br>
<b>Group F:</b> Morocco, DR Congo, Zambia, Tanzania`,
        date: "12 Oct 2023",
        lan: "english",
        postId: "n1",
        // video: "TVV95Cw05og?si=Vl6BRuQVvy3K1I77"
    },
}
let news = Object.values(newsData)
// End Latest News Data


// Start All News Page
if (currentPage.includes("all-news.html")) {
    function allNewsPageHtml(newsBoxes) {
        let allNewsPageHtml = `
        <div class="all-news-page">
            <div class="all-news-header">Latest News</div>
            <div class="all-news">
                ${newsBoxes}
            </div>
        </div>
        `
        document.querySelector(".all-news-content").innerHTML = allNewsPageHtml
    }
    function newsBoxes(...list) {
        let newsBox = `
        <a href="#" class="news-box forNewsPage" id="${list[3]}" title="Read More">
            <div class="image">
                ${list[5]}
                <img src="images/${list[0]}" alt="">
            </div>
            <div class="news-header ${list[2]}">
                <p>${list[1]}</p>
            </div>
        </a>
        `
        list[4].innerHTML += newsBox
        console.log(list[4])
        return list[4].innerHTML
    }


    let newsBoxLocation = document.createElement("div")
    for (let i = 0; i < news.length; i++) {
        let post = Object.values(news[i])
        let video = " "
        if (post[6] !== undefined) {
            video = `<div class="video-icon-in-news-page"></div> `
        }
        let list = [post[0], post[1], post[4], post[5], newsBoxLocation, video]
        if (i === news.length - 1) {
            allNewsPageHtml(newsBoxes(...list))
        } else {
            newsBoxes(...list)
        }
    }
}

// End All News Page


// Start Latest News In Home Page
function postHtml(...list) {
    let postHtml = `
                <div class="post-slide">
                    <div class="post-img">
                        ${list[8]}
                        <img src="images/${list[0]}" alt="">
                        <a href="${list[5]}" class="over-layer forNewsPage" id="${list[7]}"><i class="fa fa-link"></i></a>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title ${list[4]}">
                            <a href="${list[5]}" class="forNewsPage" id="${list[7]}">${list[1]}</a>
                        </h3>
                        <p class="post-description ${list[4]}">${list[2]}</p>
                        <span class="post-date"><i class="fa fa-clock"></i>${list[3]}</span>
                        <a href="${list[5]}" class="read-more forNewsPage" id="${list[7]}">read more</a>
                    </div>
                </div>
    `
    list[6].innerHTML += postHtml
}
if (currentPage.includes("index.html") || currentPage === "/" || currentPage === "/AFCON-2023/") {
    let position = document.querySelector("#news-slider")
    let newsContainer = document.querySelector(".news-container")
    let seeAllBtn = document.querySelectorAll(".see-all-btn")
    if (news.length === 0) {
        newsContainer.style.margin = "0px auto 20px"
        newsContainer.style.fontWeight = "500"
        seeAllBtn.forEach(element => {
            element.style.display = "none"
        });
        newsContainer.innerHTML += "No News Available Yet"
    }
    for (let i = 0; i < news.length; i++) {
        if (i === 6) {
            break;
        }
        let post = Object.values(news[i])
        let file = "#"
        let video = " "
        if (post[6] !== undefined) {
            video = `<a href="${file}" class="forNewsPage" id="${post[5]}"><div class="video-icon-in-post-slide"></div></a> `
        }
        let list = [post[0], post[1], post[2], post[3], post[4], file, position, post[5], video]
        
        postHtml(...list)
    }
    $(document).ready(function() {
        $("#news-slider").owlCarousel({
            items : 3,
            itemsDesktop:[1199,3],
            itemsDesktopSmall:[980,2],
            itemsMobile : [600,1],
            navigation:true,
            navigationText:["",""],
            pagination:true,
            autoPlay:true
        });
    });
}

// End Latest News In Home Page
// Start News Generate
function newsGenerateHtml(...list) {
    let newsGenerateHtml = `
    <div class="news-generate-page">
        <div class="container">
            <div class="header-section">
                <div class="news-header ${list[4]}">${list[1]}</div>
                <div class="date-section">
                    <p>published:</p>
                    <div class="date">${list[3]}</div>
                </div>
            </div>
            <div class="image">
                ${list[5]}
            </div>
            <div class="news ${list[4]} ${list[6]}">
            ${list[2]}
            </div>
            <div class="fullscreen" id="fullscreen">
                <span class="close" onclick="closeFullscreen()">&times;</span>
                <img src="" alt="Fullscreen Image" class="fullscreen-image"id="fullscreen-image">
            </div>
            <div class="fullscreenHighlightNT" id="fullscreenHighlightNT">
                <span class="closee" onclick="closeFullscreenn()">&times;</span>
                Highlight Not Available
            </div>
        </div>
    </div>
    `
    document.querySelector(".news-generate-content").innerHTML = newsGenerateHtml
}
let clickednews = document.querySelectorAll('.forNewsPage');
let newsUrlParams = new URLSearchParams(window.location.search);
let newsId = newsUrlParams.get('id');

if (currentPage.includes("index.html") || currentPage.includes("all-news.html") || currentPage === "/" || currentPage === "/AFCON-2023/") {
    clickednews.forEach(element => {
        element.addEventListener("click", () => window.location.href = `news-generate.html?id=${element.id}` );
    });
}

for (let i = 0; i < news.length; i++) {
    let post = Object.values(news[i])
    let newsMedia = `<img src="images/${post[0]}" alt="" class="thumbnail" onclick="openImage('images/${post[0]}')"></img>`
    if (post[6] !== undefined) {
        newsMedia = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${post[6]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
    if (newsId === post[5]) {
        let list = [post[0], post[1], post[2], post[3], post[4], newsMedia, post[5]]
        newsGenerateHtml(...list)
    }
}

// End News Generate








// Start Games & Scores
// Start Games & Scores Functions
function dayHtml(location, date, games, groupsOrBrackets) {
    let day = `
                <div class="day">
                    <div class="day-info">
                        <div class="date">${date}</div>
                        ${groupsOrBrackets}
                    </div>
                    <div class="games">
                        ${games}
                    </div>
                </div>  `
    location.innerHTML += day
}
function gameHtml(penalties, playedOrNot, ...list) {
    let game = `        
                            <div class="game" id="g${list[10]}">
                                <div class="game-body">
                                    <div class="game-number">Match ${list[10]}, ${list[1]}</div>
                                    <div class="game-score">
                                        <div class="left-team">
                                            <div class="team-name">
                                                <div class="name">${list[3]}
                                                    ${list[13]}
                                                </div>
                                                <div class="flag" ${list[11]}><img src="images/${list[4]}" alt=""></div>
                                            </div>
                                            ${list[8]}
                                            ${list[7]}
                                        </div>
                                        <div class="right-team">
                                        ${list[9]}
                                            <div class="team-name">
                                                <div class="flag" ${list[12]}><img src="images/${list[6]}" alt=""></div>
                                                <div class="name">${list[5]}
                                                    ${list[14]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="${playedOrNot} time">${list[2]}</div>
                                </div>
                                ${penalties}
                            </div>
                        
    `
        list[0].innerHTML += game
        return list[0].innerHTML
}
function createDay(day, today, specialTeam) {
    let daysLocation = document.querySelector(".days-js")
    let div = document.createElement("div")
    let num =0
    for (let i = 0; i < day.length - 1; i++) {
        let forbid = 0
        for (let t = 0; t < day.length - 1; t++) {
            let game = Object.values(day[t + 1])
            let teamOne = Object.values(game[0])
            let teamTwo = Object.values(game[1])
            if (!(specialTeam === undefined)) {
                if (teamOne[0].toLowerCase() === specialTeam || teamTwo[0].toLowerCase() === specialTeam) {
                    forbid += 1
                }
            }
        }
        let game = Object.values(day[i + 1])
        let teamOne = Object.values(game[0])
        let teamTwo = Object.values(game[1])
        let time = convertTime(game[3])
        let vs = " "
        let scoreOne = `<div class="team-score">${teamOne[2]}</div>`
        let scoreTwo = `<div class="team-score">${teamTwo[2]}</div>`
        let flagOne = `full`
        let flagTwo = `full`
        let groupsOrBrackets = `<a href="knockout.html">View Brackets</a>`
        let playedOrNot = ""
        let penalties = ``
        let winnerOne = " "
        let winnerTwo = " "


        if (teamOne[2] === false || teamTwo[2] === false) {
            vs = '<div class="vs">VS</div>'
            scoreOne = ``
            scoreTwo = ``
            playedOrNot = "notPlayedYet"
        } 

        if (teamOne[1] === "empty.png") {
            flagOne = `style="border: 3px solid rgb(16, 30, 63);"`
        } 
        if (teamTwo[1] === "empty.png") {
            flagTwo = `style="border: 3px solid rgb(16, 30, 63);"`
        }
        
        if (teamOne[4] !== undefined) {
            winnerOne =  `<div class="winner"></div>`
        }
        if (teamTwo[4] !== undefined) {
            winnerTwo =  `<div class="winner"></div>`
        } 

        list = [div, game[2], time, teamOne[0], teamOne[1], teamTwo[0], teamTwo[1], vs, scoreOne, scoreTwo, game[4], flagOne, flagTwo, winnerOne, winnerTwo]


        if (game[2].includes("Group")) {
            groupsOrBrackets = `<a href="group-stage.html">View Groups</a>`
        }

        if (game[8] !== undefined) {
            let drawInfo = Object.values(game[8])
            penalties = `
            <div class="penalties">
                <div class="penalties-score">${drawInfo[1]} <span class="empty-span"></span> <span class="dot-span">.</span> ${drawInfo[2]}</div>
                <p>${drawInfo[0]} wins ${drawInfo[1]} - ${drawInfo[2]} on penalties</p>
            </div>
            `
        }
        
        if (specialTeam === undefined) {
            if (i === day.length - 2) {
                dayHtml(daysLocation, today, gameHtml(penalties, playedOrNot, ...list), groupsOrBrackets)
            } else {
                gameHtml(penalties, playedOrNot, ...list)
            }
        } else {
            if (teamOne[0].toLowerCase() === specialTeam || teamTwo[0].toLowerCase() === specialTeam) {
                num += 1
                if ((forbid === 1)) {
                    dayHtml(daysLocation, today, gameHtml(penalties, playedOrNot, ...list), groupsOrBrackets)    
                }
                if ((forbid >= 2)) {
                    if (num === forbid) {
                        dayHtml(daysLocation, today, gameHtml(penalties, playedOrNot, ...list), groupsOrBrackets)    
                        
                    } else {
                        gameHtml(penalties, playedOrNot, ...list)
                        
                    }
                }
                
                
            }
        }
        
    }
}
// End Games & Scores Functions

// Start Games And Scores In Home Page
function dateConventer(dayName, dayNumber, month, year) {
    switch (dayName) {
        case 0:
            dayName = "Sunday"
            break
        case 1:
            dayName = "Monday"
            break
        case 2:
            dayName = "Tuesday"
            break
        case 3:
            dayName = "Wednesday"
            break
        case 4:
            dayName = "Thursday"
            break
        case 5:
            dayName = "Friday"
            break
        case 6: 
            dayName = "Saturday"
    }
    switch (month) {
        case 1:
            month = "January";
            break
        case 2:
            month = "February";
            break
        case 3:
            month = "March";
            break
        case 4:
            month = "April";
            break
        case 5:
            month = "May";
            break
        case 6:
            month = "June";
            break
        case 7:
            month = "July";
            break
        case 8:
            month = "August";
            break
        case 9:
            month = "September";
            break
        case 10:
            month = "October";
            break
        case 11:
            month = "November";
            break
        case 12:
            month = "December";
            break
    }

    let fullDate = `${dayName} ${dayNumber} ${month} ${year}`
    let dateNumber = fullDate.split(" ")[1]
    if (dateNumber.length < 2) {
        fullDate = `${dayName} 0${dayNumber} ${month} ${year}`
    }
    return fullDate
}

var date = new Date()
let dayName = date.getDay()
let dayNumber = date.getDate() 
let month = date.getMonth() + 1
let year = date.getFullYear()
fullDate = dateConventer(dayName, dayNumber, month, year)

let fullDateForScroll = ""
let num = 0
for (let j = 0; j < dayss.length; j++) {
    let day = Object.values(dayss[j])
    if (day[0] === fullDate) {
        fullDateForScroll = day[0]
        if (currentPage.includes("index.html") || currentPage === "/" || currentPage === "/AFCON-2023/") {
            if (dayss[j - 1] !== undefined) {
                let day = Object.values(dayss[j - 1])
                createDay(day, `${day[0]} (Yesterday)`)
            }
            createDay(day, `${day[0]} (Today)`)
        }
        num += 1
    } 
}
if (num === 0) {
    if (new Date(fullDate) < new Date(dayss[0].date)) {
        fullDateForScroll = Object.values(dayss[0])[0]
        if (currentPage.includes("index.html") || currentPage === "/" || currentPage === "/AFCON-2023/") {
            createDay(Object.values(dayss[0]), Object.values(dayss[0])[0])
            createDay(Object.values(dayss[1]), Object.values(dayss[1])[0])            
        }
    } else if (new Date(fullDate) > new Date(dayss[dayss.length - 1].date)) {
        fullDateForScroll = Object.values(dayss[dayss.length - 2])[0]
        if (currentPage.includes("index.html") || currentPage === "/" || currentPage === "/AFCON-2023/") {
            createDay(Object.values(dayss[dayss.length -2]), Object.values(dayss[dayss.length -2])[0])
            createDay(Object.values(dayss[dayss.length -1]), Object.values(dayss[dayss.length -1])[0])            
        }
    } else {
        for (let j = 0; j < dayss.length; j++) {
            let day = Object.values(dayss[j])
            if (new Date(day[0]) > new Date(fullDate)) {
                fullDateForScroll = Object.values(dayss[j - 2])[0]
                if (currentPage.includes("index.html") || currentPage === "/" || currentPage === "/AFCON-2023/") {
                    createDay(Object.values(dayss[j - 2]), Object.values(dayss[j - 2])[0])
                    createDay(Object.values(dayss[j - 1]), Object.values(dayss[j - 1])[0])
                }
                break
            } 
        }
    }
}
// End Games And Scores In Home Page

// Start scroll to todays date function in Games & Scores
function getElementPosition(element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return rect.top + scrollTop
}
if (currentPage.includes("games-and-scores.html")) {
    let position = 0
    for (let j = 0; j < dayss.length; j++) {
        let day = Object.values(dayss[j])
        createDay(day, day[0])
    }
    
    let special = document.querySelectorAll(".date")
    let fixed = document.querySelector(".fixed")
    for (let i = 0; i < special.length; i++) {
        if (special[i].innerText === fullDateForScroll) {
            position = getElementPosition(special[i]) - 130;

            if (i !== 0) {
                window.scrollTo({ top: position, behavior: "auto" });
            }
            break
        } 
    }
    window.onscroll = function () {
        if (window.scrollY - 1 < position) {
            fixed.style.position = "fixed"
            fixed.style.top = "0"
            fixed.style.marginTop = `0`
        } else {
            fixed.style.marginTop = `${position}`
            fixed.style.position = "absolute"
        }
    }
    
    
}
// End scroll to todays date function in Games & Scores
// End Games & Scores



// Start Group Stage
// Start Group Stage Functions
function groupCreat(groupName, location, teamLine, gs, gc) {
    let boxHeader = `
                        <h3>${groupName}</h3>
                        <div class="spans">
                            <span title="Played">P</span>
                            <span title="Win">W</span>
                            <span title="Draw">D</span>
                            <span title="Lose">L</span>
                            ${gs}
                            ${gc}
                            <span title="Goal Diffirence">GD</span>
                            <span title="Points">Pts</span>
                        </div>
                    `
    let groupBox = `
                <div class="box">
                    <div class="box-header box-header-js">
                        ${boxHeader}
                    </div>
                    <div class="teams">
                        ${teamLine}
                    </div>
                </div>
                `
    location.innerHTML += groupBox
}
function teamlines(...list) {
    let teamLine = `
                        <div class="team" ${list[12]} title="${list[15]}">
                            <div class="info">
                                <span class="qualified">${list[8]}</span>
                                <a href="team-profile-generate.html?id=${list[10]}" class="teamForProfile" id="${list[10]}" >
                                    <div class="flag"><img src="images/${list[7]}" alt=""></div>
                                    <div class="name">${list[6]}
                                    <div class="qualifiedText">${list[11]}</div>
                                    </div>
                                </a>
                            </div>
                            <div class="stats">
                                <span>${list[0]}</span> <!-- games played -->
                                <span>${list[1]}</span> <!-- games win -->
                                <span>${list[2]}</span> <!-- games draw -->
                                <span>${list[3]}</span> <!-- games lose -->
                                ${list[13]} <!-- goals scored -->
                                ${list[14]} <!-- goals conceded -->
                                <span>${list[4]}</span> <!-- goal difference -->
                                <span>${list[5]}</span> <!-- points -->
                            </div>
                        </div>
                `
    list[9].innerHTML += teamLine
    return list[9].innerHTML
}
function alreadyQualified(group) {
    let firtsTeamQualified = 0
    let secondTeamQualified = 0
    let thirdTeamQualified = 0
    let forthTeamQualified = 0
    let fifthTeamQualified = 0
    let totalGamesInGroupStageForOneTeam = group.length - 1
    let actualPoints = []
    let maxPoints = []
    let playedArray = []
    for (let b = 0; b < group.length; b++) {
        let teamName = group[b]
        let played = 0
        let win = 0
        let draw = 0
        let lose = 0
        let points = 0
        let totalGoalScored = 0
        let totalGoalConceded = 0
        for (let i = 0; i < dayss.length; i++) {
            let day = Object.values(dayss[i])
            for (let j = 0; j < day.length - 1; j++) {
                let game = Object.values(day[j + 1])
                let teamOne = Object.values(game[0])
                let teamTwo = Object.values(game[1])
                if ((teamOne[0] === teamName && teamOne[2] !== false) && (game[2].includes("Group"))) {
                    played += 1
                    let goalScored = parseInt(teamOne[2])
                    let goalConceded = parseInt(teamTwo[2])
                    totalGoalScored += parseInt(teamOne[2])
                    totalGoalConceded += parseInt(teamTwo[2])
                    if (goalScored > goalConceded) {
                        win += 1
                    }
                    if (goalScored < goalConceded) {
                        lose += 1
                    }
                    if (goalScored === goalConceded) {
                        draw += 1
                    }
                }
                if ((teamTwo[0] === teamName && teamTwo[2] !== false) && (game[2].includes("Group"))) {
                    played += 1
                    let goalScored = parseInt(teamTwo[2])
                    let goalConceded = parseInt(teamOne[2])
                    totalGoalScored += parseInt(teamTwo[2])
                    totalGoalConceded += parseInt(teamOne[2])
                    if (goalScored > goalConceded) {
                        win += 1
                    }
                    if (goalScored < goalConceded) {
                        lose += 1
                    }
                    if (goalScored === goalConceded) {
                        draw += 1
                    }
                }
            }
        }
        goalDifference = totalGoalScored - totalGoalConceded
        points = win * 3 + lose * 0 + draw * 1
        if (b === 0) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 1) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 2) {
            actualPoints.push(points)
            maxPoints.push( points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 3) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 4) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
    }
    
    for (let h = 0; h < actualPoints.length; h++) {
        let teamPoints = actualPoints[h]
        let aboveFirst = []
        for (let u = 0; u < maxPoints.length; u++) {
            if (h !== u) {
                if (teamPoints <= maxPoints[u]) {
                    if (h === 0) {
                        if (((teamPoints === maxPoints[u]) && (playedArray[0] === totalGamesInGroupStageForOneTeam && playedArray[u] === totalGamesInGroupStageForOneTeam))) {
                            firtsTeamQualified -= 1
                        }
                        aboveFirst.push(group[u])
                        firtsTeamQualified += 1
                    }
                    if (h === 1) {
                        secondTeamQualified += 1
                    }
                    if (h === 2) {
                        thirdTeamQualified += 1
                    }
                    if (h === 3) {
                        forthTeamQualified += 1
                    }
                    if (h === 4) {
                        fifthTeamQualified += 1
                    }
                }
            }
        }
        if (aboveFirst.length === 2) {
            for (let i = 0; i < dayss.length; i++) {
                let day = Object.values(dayss[i])
                for (let j = 0; j < day.length - 1; j++) {
                    let game = Object.values(day[j + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if (((teamOne[0] === aboveFirst[0] || teamTwo[0] === aboveFirst[0]) && (teamOne[0] === aboveFirst[1] || teamTwo[0] === aboveFirst[1])) && (teamOne[2] === false && teamTwo[2] === false)) {
                        firtsTeamQualified -= 1
                    }
                }
            }
        }
        
    }
    if (firtsTeamQualified > 1) {
        firtsTeamQualified = false
    } else {
        firtsTeamQualified = true
    }
    if (secondTeamQualified > 1) {
        secondTeamQualified = false
    } else {
        secondTeamQualified = true
    }
    if (thirdTeamQualified > 1) {
        thirdTeamQualified = false
    } else {
        thirdTeamQualified = true
    }
    if (forthTeamQualified > 1) {
        forthTeamQualified = false
    } else {
        forthTeamQualified = true
    }
    if (fifthTeamQualified > 1) {
        fifthTeamQualified = false
    } else {
        fifthTeamQualified = true
    }
    let totalNumberOfGroupGames = sortedGroups[0].length * (sortedGroups[0].length - 1)
    let playedNumberOfGroupGames = 0
    for (let j = 0; j < playedArray.length; j++){
        playedNumberOfGroupGames += playedArray[j]
    }
    
    if (totalNumberOfGroupGames === playedNumberOfGroupGames) {
        firtsTeamQualified = true
        secondTeamQualified = true
    }
    return [firtsTeamQualified , secondTeamQualified]
}
// End Group Stage Functions
// Start Sorting Group Teams
let groups = [groupA, groupB, groupC, groupD, groupE, groupF]
for (let n = 0; n < groups.length; n++) {
    let sortedGroup = []
    for (let x = 0; x < groups[n].length; x++) {
        let firstP = " "
        let pointsFirstP = -1
        let goalDifferenceFirstP = 0
        let totalGoalScoredFirstP = 0
        for (let b = 0; b < groups[n].length; b++) {
            let teamName = groups[n][b]
            let played = 0
            let win = 0
            let draw = 0
            let lose = 0
            let points = 0
            let totalGoalScored = 0
            let totalGoalConceded = 0
            let goalDifference = 0
                for (let i = 0; i < dayss.length; i++) {
                let day = Object.values(dayss[i])
                for (let j = 0; j < day.length - 1; j++) {
                    let game = Object.values(day[j + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if ((teamOne[0] === teamName && teamOne[2] !== false) && (game[2].includes("Group"))) {
                        played += 1
                        let goalScored = parseInt(teamOne[2])
                        let goalConceded = parseInt(teamTwo[2])
                        totalGoalScored += parseInt(teamOne[2])
                        totalGoalConceded += parseInt(teamTwo[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                        if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                    if ((teamTwo[0] === teamName && teamTwo[2] !== false) && (game[2].includes("Group"))) {
                        played += 1
                        let goalScored = parseInt(teamTwo[2])
                        let goalConceded = parseInt(teamOne[2])
                        totalGoalScored += parseInt(teamTwo[2])
                        totalGoalConceded += parseInt(teamOne[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                            if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                }
                goalDifference = totalGoalScored - totalGoalConceded
                points = win * 3 + lose * 0 + draw * 1
            }
            if (sortedGroup.includes(teamName)) {
                // console.log("heloo")
            } else {
                if (points > pointsFirstP) {
                    pointsFirstP = points
                    goalDifferenceFirstP = goalDifference
                    totalGoalScoredFirstP = totalGoalScored
                    firstP = teamName
                } else if (points === pointsFirstP) {
                    if (goalDifference > goalDifferenceFirstP) {
                        firstP = teamName
                        totalGoalScoredFirstP = totalGoalScored
                    } else if (goalDifference === goalDifferenceFirstP) {
                        if (totalGoalScored > totalGoalScoredFirstP) {
                            totalGoalScoredFirstP = totalGoalScored
                            firstP = teamName
                        }
                    }
                }
            }
        }
        sortedGroup.push(firstP)
    }
    if (n === 0) {
        groupA = sortedGroup
    } else if (n === 1) {
        groupB = sortedGroup
    } else if (n === 2) {
        groupC = sortedGroup
    } else if (n === 3) {
        groupD = sortedGroup
    } else if (n === 4) {
        groupE = sortedGroup
    } else if (n === 5) {
        groupF = sortedGroup
    } 
}
let sortedGroups = [groupA, groupB, groupC, groupD, groupE, groupF]
// End Sorting Group Teams
// Start Group Stage Page
if (currentPage.includes("group-stage.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage === "/AFCON-2023/") {
    let groupNames = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F"]
    for (let n = 0; n < sortedGroups.length; n++) {
        let div = document.createElement("div")
        for (let b = 0; b < sortedGroups[n].length; b++) {
            let teamName = sortedGroups[n][b]
            let file = teamNameId(sortedGroups[n][b])
            let changeBg = " "
            let qualified = " "
            let gs = " "
            let gc = " "
            let gsScore = " "
            let gcScore = " "
            let played = 0
            let win = 0
            let draw = 0
            let lose = 0
            let points = 0
            let totalGoalScored = 0
            let totalGoalConceded = 0
            let goalDifference = 0
            let subName = " "
            let flagPic = " "
            allTeams.forEach(team => {
                if (teamName === team.name) {
                    subName = team.subName
                    flagPic = team.flagPic
                }
            })
            for (let i = 0; i < dayss.length; i++) {
                let day = Object.values(dayss[i])
                for (let j = 0; j < day.length - 1; j++) {
                    let game = Object.values(day[j + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if (teamOne[0] === teamName && teamOne[2] !== false) {
                        played += 1
                        let goalScored = parseInt(teamOne[2])
                        let goalConceded = parseInt(teamTwo[2])
                        totalGoalScored += parseInt(teamOne[2])
                        totalGoalConceded += parseInt(teamTwo[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                        if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                    if (teamTwo[0] === teamName && teamTwo[2] !== false) {
                        played += 1
                        let goalScored = parseInt(teamTwo[2])
                        let goalConceded = parseInt(teamOne[2])
                        totalGoalScored += parseInt(teamTwo[2])
                        totalGoalConceded += parseInt(teamOne[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                        if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                }
            }
            goalDifference = totalGoalScored - totalGoalConceded
            points = win * 3 + lose * 0 + draw * 1
            
            
            if (b === 0) {
                if (alreadyQualified(sortedGroups[n])[0] === true) {
                    qualified = "qualified"
                }
            }
            if (b === 1) {
                if (alreadyQualified(sortedGroups[n])[1] === true) {
                    qualified = "qualified"
                }
            }
            let infoList = [played, win, draw, lose, goalDifference, points, subName, flagPic, b + 1, div, file, qualified, changeBg, gsScore, gcScore, capitalize(teamName)]
            let location = document.querySelector(".bjs")
            if (b === sortedGroups[n].length - 1) {
                groupCreat(groupNames[n], location, teamlines(...infoList), gs, gc)
                
                break
            } else {
                teamlines(...infoList)
            }
        }
        
    }
    
    let qualifiedElement = document.querySelectorAll(".qualifiedText")
    for (let i = 0; i < qualifiedElement.length; i++) {
        if (qualifiedElement[i].innerHTML > " ") {
            qualifiedElement[i].style.color = "#76b300"
            qualifiedElement[i].style.fontSize = "10px"
        }
    }
    
    let qualified = document.querySelectorAll(".qualified")

    for (let i = 0; i < qualified.length; i++) {
        if (qualified[i].innerHTML === "1" || qualified[i].innerHTML === "2") {
            qualified[i].style.borderLeft = "2px solid #76b300"
        }
        if (qualified[i].innerHTML === "3") {
            qualified[i].style.borderLeft = "2px solid #f59e0b"
        }
    }
}
// End Group Stage Page
// End Group Stage



// Start Knockout
// Start Knockout Functions
function addKnockoutBox(...list) {
    let knockoutBox = `
                        <div class="box game" id="g${list[11]}" title="Match ${list[11]}">
                        ${list[8]}
                            <div class="box-body">
                                <div class="left-team" title="${list[12]}">
                                    <div class="flag"><img ${list[9]} src="images/${list[1]}" alt=""></div>
                                    <div class="name">${list[0]}</div>
                                </div>
                                ${list[4]}
                                <div class="right-team" title="${list[13]}">
                                    <div class="flag"><img ${list[10]} src="images/${list[3]}" alt=""></div>
                                    <div class="name">${list[2]}</div>
                                </div>
                            </div>
                            <span>${list[5]}</span>
                            ${list[6]}
                        </div>
`
list[7].innerHTML += knockoutBox
}
function gameInfo(gameNumber, stage, final) {
    for (let j = 0; j < dayss.length; j++) {
        let day = Object.values(dayss[j])
        for (let i = 0; i < day.length - 1; i++) {
            let game = Object.values(day[i + 1])
            let teamOne = Object.values(game[0])
            let teamTwo = Object.values(game[1])
            if (game[4] === gameNumber) {
                let teamOneName = teamOne[0];
                let teamTwoName = teamTwo[0];
                let time = `<!-- -->`
                let penalties = `<!-- -->`
                let score = `<div class="score">${teamOne[2]} - ${teamTwo[2]}</div>`
                let flagTeamOne = ` `
                let flagTeamTwo = ` `
                if (teamOne[0].toLowerCase().includes("winner") || teamOne[0].toLowerCase().includes("loser")) {
                    let winner = teamOne[0].split(" ")
                    teamOneName = winner[0][0] + winner[1]
                }
                if (teamTwo[0].toLowerCase().includes("winner") || teamTwo[0].toLowerCase().includes("loser")) {
                    let winner = teamTwo[0].split(" ")
                    teamTwoName = winner[0][0] + winner[1]
                }
                allTeams.forEach(team => {
                    if (teamOne[0].toLowerCase() === team.name) {
                        teamOneName = team.subName
                    } else if (teamTwo[0].toLowerCase() === team.name) {
                        teamTwoName = team.subName
                    }
                })
        
                if (teamOne[2] === false || teamTwo[2] === false) {
                    if (day[0] === "NY") {
                        score = day[0]
                    } else {
                        let dayDate = day[0].split(" ")
                        let dayNum = dayDate[1]
                        let year = dayDate[3].slice(2)
                        let month = dayDate[2]
                
                        switch (month) {
                            case "January":
                                month = "01";
                                break
                            case "February":
                                month = "02";
                                break
                            case "March":
                                month = "03";
                                break
                            case "April":
                                month = "04";
                                break
                            case "May":
                                month = "05";
                                break
                            case "June":
                                month = "06";
                                break
                            case "July":
                                month = "07";
                                break
                            case "August":
                                month = "08";
                                break
                            case "September":
                                month = "09";
                                break
                            case "October":
                                month = "10";
                                break
                            case "November":
                                month = "11";
                                break
                            case "December":
                                month = "12";
                                break
                        }
                        // if (game[3].split(" ").length > 1) {
                        //     time = game[3].split(" ")[0]
                        // } else {
                        //     time = game[3]
                        // }
                        
                        score = `<div class="score">${dayNum}/${month}/${year}</div>`
                    }
                }
                if (game[8] !== undefined) {
                    let drawInfo = Object.values(game[8])
                    penalties = `<p>${drawInfo[0]} wins <span>${drawInfo[1]} - ${drawInfo[2]}</span> on penalties</p>`
                }
                if (final === undefined) {
                    final = `<!-- -->`
                }

        
                if (teamOne[1] === "empty.png") {
                    flagTeamOne = `style="border: 3px solid rgb(16, 30, 63);"`
                } 
                if (teamTwo[1] === "empty.png") {
                    flagTeamTwo =`style="border: 3px solid rgb(16, 30, 63);"`
                } 

                let list = [teamOneName, teamOne[1], teamTwoName, teamTwo[1], score, convertTime(game[3]), penalties, stage, final, flagTeamOne, flagTeamTwo, game[4], teamOne[0], teamTwo[0]]
        
                addKnockoutBox(...list)
            }
        }
    }
}
// End Knockout Functions
// Start Knockout Page
if (currentPage.includes("knockout.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage === "/AFCON-2023/") {
    let finalHeader = `<h3>FINAL</h3>`

    let leftRoundOf16Upper = document.querySelector(".leftRoundOf16Upper")
    gameInfo("37", leftRoundOf16Upper)
    gameInfo("38", leftRoundOf16Upper)

    let leftRoundOf16Lower = document.querySelector(".leftRoundOf16Lower")
    gameInfo("41", leftRoundOf16Lower)
    gameInfo("44", leftRoundOf16Lower)

    let rightRoundOf16Upper = document.querySelector(".rightRoundOf16Upper")
    gameInfo("40", rightRoundOf16Upper)
    gameInfo("39", rightRoundOf16Upper)
    
    let rightRoundOf16Lower = document.querySelector(".rightRoundOf16Lower")
    gameInfo("42", rightRoundOf16Lower)
    gameInfo("43", rightRoundOf16Lower)

    let leftQuarterFinal = document.querySelector('.leftQuarterFinal')
    gameInfo("45", leftQuarterFinal)
    gameInfo("48", leftQuarterFinal)

    let rightQuarterFinal = document.querySelector('.rightQuarterFinal')
    gameInfo("46", rightQuarterFinal)
    gameInfo("47", rightQuarterFinal)

    let rightSemiFinal = document.querySelector(".rightSemiFinal")
    gameInfo("50", rightSemiFinal)

    let leftSemiFinal = document.querySelector(".leftSemiFinal")
    gameInfo("49", leftSemiFinal)
    
    let thirdPlace = document.querySelector(".third-place")
    gameInfo("51", thirdPlace)
    
    let final = document.querySelector(".final")
    gameInfo("52", final, finalHeader)
}
// End Knockout Page
// End Knockout



// Start Teams
// Start Teams Functions
function addTeam(...list) {
    teamBox = `
                <a href="team-profile-generate.html?id=${list[3]}"class="team teamForProfile" id="${list[3]}">
                    <img src="images/${list[2]}" alt="">
                    <h3>${list[0]}</h3>
                    <span>(${list[1]})</span>
                </a>
    `
    list[4].innerHTML += teamBox
}
// End Teams Functions
// Start Teams Page
if (currentPage.includes("teams.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage === "/AFCON-2023/") {
    let teamsLocation = document.querySelector(".teamsJs")
    allTeams.forEach(team => {
        let teamName = team.name.split(" ")
        let teamNameWithoutSpaceForId = team.name
        if (teamName.length > 1) {
            teamNameWithoutSpaceForId = `${teamName[0]}_${teamName[1]}`
        }
        let list = [capitalize(team.name), team.subName.toUpperCase(), team.flagPic, teamNameWithoutSpaceForId, teamsLocation]
        addTeam(...list)
    })
}
// End Teams Page
// End Teams



// Start Teams Profiles
// Start Teams Profiles Functions

function redirectToTeamPage(teamId) {
    window.location.href = `team-profile-generate.html?id=${teamId}`;
}
function teamNameId(teamName) {
    let teamNameSplited = teamName.split("")
    let teamNameWithoutSpaceForId =""
    for (let j = 0; j < teamNameSplited.length; j++) {
        if (teamNameSplited[j] === " ") {
            teamNameSplited[j] = "_"
        }
        teamNameWithoutSpaceForId += teamNameSplited[j] 
    }
    return teamNameWithoutSpaceForId
}


    
function teamHtml(...list) {
    let struct = `
    <div class="fullscreen" id="fullscreen">
        <span class="close" onclick="closeFullscreen()">&times;</span>
        <img src="" class="fullscreen-image"  alt="Fullscreen Image" id="fullscreen-image">
    </div>
    <div class="header">
        <img src="images/bg-orange-big.jpg" alt="orang background">
        <div class="container" >
            <img src="images/${list[0]}" alt="" class="thumbnail" onclick="openImage('images/${list[0]}')">
            <p>${list[1]}</p>
        </div>
    </div>
    <div class="body">
        <div class="container">
            <div class="games-score">
                <h2 class="special-header">Games & Scores</h2>
                <div class="inner-container days-js">
                    
                </div>
            </div>

            <!-- Start Group Stage -->
            <div class="group-stage" id="group-stage">
                <div class="container" style="padding: 0">
                    <h2 class="special-header">Group</h2>
                    <div class="boxes bjs">
                        
                    </div>
                </div>
            </div>
            <!-- End Group Stage -->

            <div class="manager">
                <h2 class="special-header">Manager</h2>
                <div class="boxes manager-box">
                    
                </div>
            </div>
            <div class="squad-list">
                <h2 class="special-header">Squad List</h2>
                <div class="boxes squad-list-boxes">
                    
                </div>
            </div>
        </div>
    </div>
    `
    document.querySelector(".team-profile-generate-content").innerHTML += struct
}
function playerCardHTML(...infolist) {
    let playerCardHTML =`
                    <div class="card">
                        <div class="content">
                            <div class="front">
                                <!-- <img src="images/${infolist[7]}" alt=""> -->
                                <div class="player-image">
                                    <img src="images/${infolist[3]}" alt="">
                                </div>
                                <div class="info">
                                    <span>${infolist[0]}</span>
                                    <span>${infolist[1]}</span>
                                    <span>${infolist[2]}</span>
                                </div>
                            </div>
                            <div class="back">
                                <div class="personal-details">Personal Details</div>
                                <div class="pd">
                                    <p>Position</p>
                                    <p>${infolist[2]}</p>
                                </div>
                                <div class="pd">
                                    <p>Age</p>
                                    <p>${infolist[4]}yo</p>
                                </div>
                                <div class="pd">
                                    <p>Height</p>
                                    <p>${infolist[5]}m</p>
                                </div>
                                ${infolist[6]}
                            </div>
                        </div>
                    </div>
                    `
    infolist[8].innerHTML += playerCardHTML
}
// End Teams Profiles Functions

let clickedTeam = document.querySelectorAll('.teamForProfile');
let teamUrlParams = new URLSearchParams(window.location.search);
let teamId = teamUrlParams.get('id');

if (currentPage.includes("teams.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage.includes("group-stage.html")   ) {
    clickedTeam.forEach(element => {
        element.addEventListener("click", () => redirectToTeamPage(element.id));
    });
}

if (currentPage.includes("team-profile-generate.html")) {
    allTeams.forEach(team => {
    // for (let i = 0; i < AllTeams.length; i++) {
        // let team = Object.values(AllTeams[i])
        let teamName = teamNameId(team.name)
        if (teamId === teamName) {
            let list = [team.flagPic, capitalize(team.name)]
            teamHtml(...list)
            let teamName = team.name.toLowerCase()
            for (let j = 0; j < dayss.length; j++) {
                let day = Object.values(dayss[j])
                let replecatedDate = " "
                for (let i = 0; i < day.length - 1; i++) {
                    let game = Object.values(day[i + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if (teamOne[0].toLowerCase() === teamName || teamTwo[0].toLowerCase() === teamName) {
                        document.querySelector('title').textContent = teamName.toUpperCase()
                        if (replecatedDate !== day[0]) {
                            createDay(day, day[0], teamName)
                            replecatedDate = day[0]
                        }
                        
                    }
                }
            }

            let groupNames = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F"]
            for (let n = 0; n < sortedGroups.length; n++) {
                let div = document.createElement("div")
                
                for (let b = 0; b < sortedGroups[n].length; b++) {
                    let teamName = sortedGroups[n][b]
                    if (teamName === team.name) {
                        for (let b = 0; b < sortedGroups[n].length; b++) {
                            let location = document.querySelector(".bjs")
                            let teamName = sortedGroups[n][b]
                            let file = teamNameId(sortedGroups[n][b])
                            let changeBg = " "
                            let qualified = " "
                            let gs = " "
                            let gc = " "
                            let gsScore = " "
                            let gcScore = " "
                            let played = 0
                            let win = 0
                            let draw = 0
                            let lose = 0
                            let points = 0
                            let totalGoalScored = 0
                            let totalGoalConceded = 0
                            let goalDifference = 0
                            let subName = " "
                            let flagPic = " "
                            allTeams.forEach(team => {
                                if (teamName === team.name) {
                                    subName = team.name.toUpperCase()
                                    flagPic = team.flagPic
                                    if (screen.width < 768) {
                                        subName = team.subName
                                    }
                                }
                            })
                            for (let i = 0; i < dayss.length; i++) {
                                let day = Object.values(dayss[i])
                                for (let j = 0; j < day.length - 1; j++) {
                                    let game = Object.values(day[j + 1])
                                    let teamOne = Object.values(game[0])
                                    let teamTwo = Object.values(game[1])
                                    
                                    if ((teamOne[0] === teamName && teamOne[2] !== false) && (game[2].includes("Group"))) {
                                        played += 1
                                        let goalScored = parseInt(teamOne[2])
                                        let goalConceded = parseInt(teamTwo[2])
                                        totalGoalScored += parseInt(teamOne[2])
                                        totalGoalConceded += parseInt(teamTwo[2])
                                        if (goalScored > goalConceded) {
                                            win += 1
                                        }
                                        if (goalScored < goalConceded) {
                                            lose += 1
                                        }
                                        if (goalScored === goalConceded) {
                                            draw += 1
                                        }
                                    }
                                    if ((teamTwo[0] === teamName && teamTwo[2] !== false) && (game[2].includes("Group"))) {
                                        played += 1
                                        let goalScored = parseInt(teamTwo[2])
                                        let goalConceded = parseInt(teamOne[2])
                                        totalGoalScored += parseInt(teamTwo[2])
                                        totalGoalConceded += parseInt(teamOne[2])
                                        if (goalScored > goalConceded) {
                                            win += 1
                                        }
                                        if (goalScored < goalConceded) {
                                            lose += 1
                                        }
                                        if (goalScored === goalConceded) {
                                            draw += 1
                                        }
                                    }
                                }
                            }
                            goalDifference = totalGoalScored - totalGoalConceded
                            points = win * 3 + lose * 0 + draw * 1
                            
                            if (teamName === team[0]) {
                                changeBg = `style="background-color:#faf7f7;"`                               
                            }
                            if (screen.width > 399) {
                                gs = "<span>GS</span>"
                                gc = "<span>GC</span>"
                                gsScore = `<span>${totalGoalScored}</span>`
                                gcScore = `<span>${totalGoalConceded}</span>`
                            }
                            if (b === 0) {
                                if (alreadyQualified(sortedGroups[n])[0] === true) {
                                    qualified = "qualified"
                                }
                            }
                            if (b === 1) {
                                if (alreadyQualified(sortedGroups[n])[1] === true) {
                                    qualified = "qualified"
                                }
                            }
                            let infoList = [played, win, draw, lose, goalDifference, points, subName, flagPic, b + 1, div, file, qualified, changeBg, gsScore, gcScore, capitalize(teamName)]
                            
                            location.style.gridTemplateColumns = "1fr"
                            if (b === sortedGroups[n].length - 1) {
                                groupCreat(groupNames[n], location, teamlines(...infoList), gs, gc)
                                break
                            } else {
                                teamlines(...infoList)
                            }
                        }
                        let qualifiedElement = document.querySelectorAll(".qualifiedText")
                        for (let i = 0; i < qualifiedElement.length; i++) {
                        if (qualifiedElement[i].innerHTML > " ") {
                                qualifiedElement[i].style.color = "#76b300"
                                qualifiedElement[i].style.fontSize = "10px"
                            }
                        }
                        
                        let qualified = document.querySelectorAll(".qualified")
                    
                        for (let i = 0; i < qualified.length; i++) {
                            if (qualified[i].innerHTML === "1" || qualified[i].innerHTML === "2") {
                                qualified[i].style.borderLeft = "2px solid #76b300"
                            }
                            if (qualified[i].innerHTML === "3") {
                                qualified[i].style.borderLeft = "2px solid #f59e0b"
                            }
                        }
                    }
                }
            }


            let teame = Object.values(team)
            console.log(team.players !== undefined)
            if (team.players !== undefined) {
                let players = Object.values(team.players)
                let manager = Object.values(players[players.length -1])
                let clubFlag = team.flagPic
                let playersLocation = document.querySelector(".squad-list-boxes")
                let managerLocation = document.querySelector(".manager-box")
                let club = `
                        <div class="pd">
                            <p>Team</p>
                            <p>${manager[6]}</span></p>
                        </div>
                    `
                let infoListManager = [capitalize(manager[0]), manager[1].toUpperCase(), manager[2], manager[3], manager[4], manager[5], club, clubFlag, managerLocation]
                playerCardHTML(...infoListManager)
                for (let i = 0; i < players.length - 1; i++) {
                    let player = Object.values(players[i])
                    club = `
                        <div class="pd">
                            <p>Profesional Club</p>
                            <p>${player[6]} <span>(${capitalize(player[7])})</span></p>
                        </div>
                    `
                    let infoListPlayer = [capitalize(player[0]), player[1].toUpperCase(), player[2], player[3], player[4], player[5], club, clubFlag, playersLocation]
                    playerCardHTML(...infoListPlayer)
                }
            }
        }
    })

    
}
// End Teams Profiles




// Start Game Profiles
// Start Game Profiles Functions



function gameProfileHtml(leftTeamGoals, rightTeamGoals, ...list) {
    gameHtml = `
            
            <div class="stage-and-date">
                <div class="stage">Match ${list[7]}, ${list[5]}</div>
                <div class="date">${list[6]}, ${list[8]}</div>
            </div>
            <div class="teams">
                <div class="left-team">
                    <a href="team-profile-generate.html?id=${list[18]}" class="team teamForProfile" id="${list[18]}">
                        <div class="team-name" >${list[1]} ${list[20]}</div>
                        <div class="flag"><img ${list[12]} src="images/${list[2]}" alt=""></div>
                    </a>
                </div>
                <div class="score">
                    ${list[9]}
                </div>
                <div class="right-team">
                    <a href="team-profile-generate.html?id=${list[19]}" class="team teamForProfile" id="${list[19]}">
                        <div class="flag"><img ${list[13]} src="images/${list[4]}" alt=""></div>
                        <div class="team-name">${list[3]} ${list[21]}</div>
                    </a>
                </div>
            </div>
            ${list[10]}
            ${list[11]}
            <div class="goals">
                <div class="left-team-goals">
                    ${leftTeamGoals}
                </div>
                <div class="empty-div"></div>
                <div class="right-team-goals">
                    ${rightTeamGoals}
                </div>
            </div>
            
            <div class="competition">
                african cup of nation's
            </div>
            <div class="location">
                <div class="city"><p>${list[16]}</p></div>
                <div class="dot">●</div>
                <div class="stadium">${list[17]}</div>
            </div>
            ${list[15]}
            <div class="fullscreenn" id="fullscreenn">
                <span class="closee" onclick="closeFullscreenn()">&times;</span>
                <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id="fullscreen-video"></iframe>
            </div>
            <div class="fullscreenHighlightNT" id="fullscreenHighlightNT">
                <span class="closee" onclick="closeFullscreenn()">&times;</span>
                Highlight Not Available
            </div>

    `
    list[0].innerHTML = gameHtml
}
function goalHtmlTeamOne(...list) {
    let goal = `
                        <div class="goal">
                            <div class="penalty">${list[4]}</div>
                            <div class="minute">${list[1]}</div>
                            <div class="player">
                                <div class="player-goal">${list[2].toUpperCase()}</div>
                                <div class="player-assist">${list[3]}</div>
                            </div>
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>    
                        </div>
    `
    list[0].innerHTML += goal
    return list[0].innerHTML
}
function goalHtmlTeamTwo(...list) {
    let goal = `
                        <div class="goal">
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div> 
                            <div class="player">
                                <div class="player-goal">${list[2].toUpperCase()}</div>
                                <div class="player-assist">${list[3]}</div>
                            </div>   
                            <div class="minute">${list[1]}</div>
                            <div class="penalty">${list[4]}</div>
                        </div>
    `
    list[0].innerHTML += goal
    return list[0].innerHTML
}    
function redirectToGamePage(gameId) {
    window.location.href = `game-generate.html?id=${gameId}`;
}
// End Game Profiles Functions

const clickedGame = document.querySelectorAll('.game');
clickedGame.forEach(element => {
    element.addEventListener("click", () => redirectToGamePage(element.id));
});
let gameContent = document.querySelector(".gameGenerateJs")
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id');


for (let i = 0; i < dayss.length; i++) {
    let day = Object.values(dayss[i])
    for (let j = 0; j < day.length - 1; j++) {
        let game = Object.values(day[j + 1])
        let teamOne = Object.values(game[0])
        let teamTwo = Object.values(game[1])
        if (gameId === `g${game[4]}`) {
            let goalsTeamOne = []
            let goalsTeamTwo = []
            if (teamOne[3] !== undefined) {
                goalsTeamOne = Object.values(teamOne[3])
            }
            if (teamTwo[3] !== undefined) {
                goalsTeamTwo = Object.values(teamTwo[3])
            }
            let date = "NY"
            if (day[0] !== "NY") {
                let dateArray = day[0].split(" ")
                date = `${dateArray[1]} ${dateArray[2].slice(0, 3).toUpperCase()} ${dateArray[3]}`
            }
            let score
            let penalties = ` `
            let fullTime = `<div class="full-time">Full Time</div>`
            let time = convertTime(game[3])
            const currentDate = new Date();

            // Get the current time
            const currentHours = currentDate.getHours();
            const currentMinutes = currentDate.getMinutes();
            const currentSeconds = currentDate.getSeconds();

            // Display the current time
            console.log(`Current time: ${currentHours}:${currentMinutes}:${currentSeconds}`);
            console.log(time)
            let leftTeamName = teamOne[0]
            let rightTeamName = teamTwo[0]
            let leftTeamPageLink = `${teamOne[0]}.html`
            let rightTeamPageLink = `${teamTwo[0]}.html`
            let leftFlag = ` `
            let rightFlag = ` `
            let winnerTeamLeft = ` `
            let winnerTeamRight = ` `
            let divTeamOne = document.createElement("div")
            let divTeamTwo = document.createElement("div")
            let goals = `
            <div class="goals">
                    <div class="left-team-goals">
                        <div>
                            <div class="goal">
                                <div class="penalty">(P)</div>
                                <div class="minute">42'</div>
                                <div class="player">
                                    <div class="player-goal">ORSIC</div>
                                    <div class="player-assist">ORSIC</div>
                                </div>
                                <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>    
                            </div>
                            <div class="goal">
                                <div class="penalty">(P)</div>
                                <div class="minute">42'</div>
                                <div class="player">Mislav</div>
                                <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>    
                            </div>
                        </div>
                    </div>
                    <div class="empty-div"></div>
                    <div class="right-team-goals">
                        <div class="goal">
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>  
                            <div class="player">ORSSAFSHJ</div>
                            <div class="minute">42'</div>  
                            <div class="penalty">(P)</div>
                        </div>
                    </div>
                </div>
            `
            let highlight = `
                <div class="highlights-btn">
                    <a href="#" id="playButton" onclick="openVideoFullscreen('${game[7]}')">
                        <i class="fa fa-play"></i>
                    highlights
                    </a>
                </div>
            `
            if (game[7] === "#") {

                highlight = `
                <div class="highlights-btn">
                    <a href="#" id="playButton"  onclick="openHighlightNTFullscreen()">
                        <i class="fa fa-play"></i>
                    highlights
                    </a>
                </div>
                `
            }
            // console.log(highlight)
            if (screen.width < 768) {
                allTeams.forEach(team => {
                    if (team.name === teamOne[0].toLowerCase()) {
                        leftTeamName = team.subName
                    }
                    if (team.name === teamTwo[0].toLowerCase()) {
                        rightTeamName = team.subName
                    }
                })
                if (teamTwo[0].toLowerCase().includes("loser") || teamTwo[0].toLowerCase().includes("winner")) {
                    rightTeamName = `${teamTwo[0].split(" ")[0].charAt(0)}${teamTwo[0].split(" ")[1]}`
                }
                if (teamOne[0].toLowerCase().includes("loser") || teamOne[0].toLowerCase().includes("winner")) {
                    leftTeamName = `${teamOne[0].split(" ")[0].charAt(0)}${teamOne[0].split(" ")[1]}`
                }
            }


            if (teamOne[2] === false || teamTwo[2] === false) {
                score = `<p>VS</p>`
                goals = " "
                highlight = " "
                fullTime =  " "
            } else {
                score = `<p>${teamOne[2]}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;${teamTwo[2]}</p>`
                
            }

            if (game[8] !== undefined) {
                let drawInfo = Object.values(game[8])
                penalties = `<div class="penalties">${drawInfo[0]} wins ${drawInfo[1]} - ${drawInfo[2]} on penalties</div>`
                score = `
                <span>(${drawInfo[2]})</span>
                <p>${teamOne[2]}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;${teamTwo[2]}</p>
                <span>(${drawInfo[1]})</span>
                `
            }
            if (teamOne[1] === "empty.png") {
                leftFlag = `style="border: 5px solid rgb(16, 30, 63);"`
            }
            if (teamTwo[1] === "empty.png") {
                rightFlag = `style="border: 5px solid rgb(16, 30, 63);"`
            }
            
            if (teamOne[4] !== undefined) {
                winnerTeamLeft = `<div class="winner"></div>`
            }
            if (teamTwo[4] !== undefined) {
                winnerTeamRight = `<div class="winner"></div>`
            }

            if (goalsTeamOne.length > 0) {
                for (let n = 0; n < goalsTeamOne.length; n++) {
                    let goal = Object.values(goalsTeamOne[n])
                    let assist = goal[2]
                    let penalty = goal[3]
                    let goalScorer = goal[1]
                    if (screen.width < 768 && goal[2] !== false) {
                        assist = goal[2].split(" ")
                        assist = assist[assist.length - 1]
                    }
                    if (goal[2] === false) {
                        assist = ` `
                    }
                    if (goal[3] === false) {
                        penalty = ` `
                    }
                    if (screen.width < 768) {
                        goalScorer = goal[1].split(" ")
                        goalScorer = goalScorer[goalScorer.length - 1]
                    }
                    let listTeamOne = [divTeamOne, goal[0], goalScorer, assist, penalty]


                    if (goalsTeamOne.length - 1 === n) {
                        break
                    } else {
                        goalHtmlTeamOne(...listTeamOne)
                    }
                }
            } 
            for (let n = 0; n < goalsTeamTwo.length; n++) {
                let goal = Object.values(goalsTeamTwo[n])
                let goalScorer = goal[1]
                let assist = goal[2]
                let penalty = goal[3]
                if (screen.width < 768 && goal[2] !== false) {
                    assist = goal[2].split(" ")
                    assist = assist[assist.length - 1]
                }
                if (goal[2] === false) {
                    assist = ` `
                }
                if (goal[3] === false) {
                    penalty = ` `
                }
                if (screen.width < 768) {
                    goalScorer = goal[1].split(" ")
                    goalScorer = goalScorer[goalScorer.length - 1]
                }
                let listTeamTwo = [divTeamTwo, goal[0], goalScorer, assist, penalty]


                if (goalsTeamTwo.length - 1 === n) {
                    break
                } else {
                    
                    goalHtmlTeamTwo(...listTeamTwo)
                }
            }

            
            let functionCallTeamOne = " " 
            let functionCallTeamTwo = " " 
            if (goalsTeamOne.length > 0) {
                let goal = Object.values(goalsTeamOne[goalsTeamOne.length - 1])
                let assist = goal[2]
                let penalty = goal[3]
                let goalScorer = goal[1]
                if (screen.width < 768 && goal[2] !== false) {
                    assist = goal[2].split(" ")
                    assist = assist[assist.length - 1]
                }
                if (goal[2] === false) {
                    assist = ` `
                }
                if (goal[3] === false) {
                    penalty = ` `
                }
                if (screen.width < 768) {
                    goalScorer = goal[1].split(" ")
                    goalScorer = goalScorer[goalScorer.length - 1]
                }
                let listTeamOne = [divTeamOne, goal[0], goalScorer, assist, penalty]

                functionCallTeamOne = goalHtmlTeamOne(...listTeamOne)
                
            }
            if (goalsTeamTwo.length > 0) {
                let goal = Object.values(goalsTeamTwo[goalsTeamTwo.length - 1])
                let goalScorer = goal[1]
                let assist = goal[2]
                let penalty = goal[3]
                if (screen.width < 768 && goal[2] !== false) {
                    assist = goal[2].split(" ")
                    assist = assist[assist.length - 1]
                }
                if (goal[2] === false) {
                    assist = ` `
                }
                if (goal[3] === false) {
                    penalty = ` `
                }
                if (screen.width < 768) {
                    goalScorer = goal[1].split(" ")
                    goalScorer = goalScorer[goalScorer.length - 1]
                }
                let listTeamTwo = [divTeamTwo, goal[0], goalScorer, assist, penalty]
                functionCallTeamTwo = goalHtmlTeamTwo(...listTeamTwo)
            }
        
            document.querySelector('title').textContent = `MATCH ${game[4]}`
            let list = [gameContent, leftTeamName, teamOne[1], rightTeamName, teamTwo[1], game[2], time, game[4], date, score, penalties, fullTime, leftFlag, rightFlag, goals, highlight, game[5], game[6], teamNameId(teamOne[0]), teamNameId(teamTwo[0]), winnerTeamLeft, winnerTeamRight]
            gameProfileHtml(functionCallTeamOne, functionCallTeamTwo, ...list)
        }
    } 
}


// End Game Profiles








let clickedTeamm = document.querySelectorAll('.teamForProfile');
if (currentPage.includes("news-generate.html")) {
    clickedTeamm.forEach(element => {
        element.addEventListener("click", () => redirectToNewsPage(element.id));
    });
}
