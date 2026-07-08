var video = document.getElementById("video");
var returnBtn = document.getElementById("return-btn");
var captureBtn = document.getElementById("capture-btn");
captureBtn.textContent = "Capture";
var fotoBtn = document.getElementById("fotoBtn");
fotoBtn.disabled = true;

var fertigBingo = document.getElementById("fertigMitBingo");
fertigBingo.disabled = true;

captureBtn.disabled = true;
returnBtn.disabled = false;

var photosContainer = document.getElementById("photos");
var promtH2 = document.getElementById("textPromt");
var textPromt = promtH2.textContent;

var inEnglish = false;

var options = ["du täglich benutzt", "einrastet", "du schieben kannst", "dich warnt", "drückbar ist", "auf Bewegung reagiert",
                "drehbar ist", "auf Berührung reagiert", "mit dir kommuniziert", "digital ist", "versteckte Funktionen besitzt",
                "Geräusche macht", "sich bewegt", "du bedienen kannst ohne hinzusehen", "Strom benötigt", "früher mechanisch, heute digital ist",
                /* englische Optionen */ "you use daily", "locks in", "can slide", "warns you", "requires power", "reacts to movement",
                "twists or turns", "reacts to touch", "talks to you", "is digital", "has hidden features", "makes noise", "moves",
                "can be used without looking", "can be pressed down", "used to be analogue and now is digital"];

var bingoDivs = [document.getElementById("box1"), document.getElementById("box2"), document.getElementById("box3"), document.getElementById("box4"),
                document.getElementById("box5"), document.getElementById("box6"), document.getElementById("box7"), document.getElementById("box8"),
                document.getElementById("box9"), document.getElementById("box10"), document.getElementById("box11"), document.getElementById("box12"),
                document.getElementById("box13"), document.getElementById("box14"), document.getElementById("box15"), document.getElementById("box16")];


//Access the camera and stream to video
navigator.mediaDevices.getUserMedia({ video: true}, {facingMode: {exact: 'environment'} }).then((stream) => {
    video.srcObject = stream;
});


// Choose a Box and display its condition
bingoDivs.forEach.call(bingoDivs, function(elem, index) {
    elem.addEventListener('click', () => {
        fotoBtn.disabled = false;
        captureBtn.disabled = false;
        switch(index){
            case 0:
                promtH2.textContent = inEnglish == false ? options[0] : options[16];
                break;
            case 1:
                promtH2.textContent = inEnglish == false ? options[1] : options[17];
                break;
            case 2:
                promtH2.textContent = inEnglish == false ? options[2] : options[18];
                break;
            case 3:
                promtH2.textContent = inEnglish == false ? options[3] : options[19];
                break;
            case 4:
                promtH2.textContent = inEnglish == false ? options[4] : options[20];
                break;
            case 5:
                promtH2.textContent = inEnglish == false ? options[5] : options[21];
                break;
            case 6:
                promtH2.textContent = inEnglish == false ? options[6] : options[22];
                break;
            case 7:
                promtH2.textContent = inEnglish == false ? options[7] : options[23];
                break;
            case 8:
                promtH2.textContent = inEnglish == false ? options[8] : options[24];
                break;
            case 9:
                promtH2.textContent = inEnglish == false ? options[9] : options[25];
                break;
            case 10:
                promtH2.textContent = inEnglish == false ? options[10] : options[26];
                break;
            case 11:
                promtH2.textContent = inEnglish == false ? options[11] : options[27];
                break;
            case 12:
                promtH2.textContent = inEnglish == false ? options[12] : options[28];
                break;
            case 13:
                promtH2.textContent = inEnglish == false ? options[13] : options[29];
                break;
            case 14:
                promtH2.textContent = inEnglish == false ? options[14] : options[30];
                break;
            case 15:
                promtH2.textContent = inEnglish == false ? options[15] : options[31];
                break;
            default:
                promtH2.textContent = textPromt;
        }
    });
});


// download-Btn > take another picture


// Capture photo with timer
captureBtn.addEventListener("click", () => {
    var count = 1;
    if (count > 0){
        captureBtn.disabled = true;
        fotoBtn.disabled = true;
        captureBtn.textContent = "...";

        var countdown = setInterval(() => {            
            count--;
            if (count <= 0){
                clearInterval(countdown);
                captureBtn.disabled = false;
                capturePhoto();
                bingo();
                count = 1;
                captureBtn.textContent = "Capture";
                checkBingo();
            }
        }, 1000);
    } else {
        capturePhoto();
        bingo();
        count = 1;
        captureBtn.textContent = "Capture";
        checkBingo();
    }
});

function capturePhoto(){
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame to the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL("image/png");

    // Create image list from captured photo
    var photoDiv = document.createElement("div");       // this is the picture!
    photoDiv.classList.add("photo");

    var img = document.createElement("img");
    img.src = dataURL;
    photoDiv.appendChild(img);

    // Draw the picture to the chosen Box
    switch(promtH2.textContent){
        case options[0]:
            bingoDivs[0].appendChild(photoDiv);
            break;
        case options[1]:
            bingoDivs[1].appendChild(photoDiv);
            break;
        case options[2]:
            bingoDivs[2].appendChild(photoDiv);
            break;
        case options[3]:
            bingoDivs[3].appendChild(photoDiv);
            break;
        case options[4]:
            bingoDivs[4].appendChild(photoDiv);
            break;
        case options[5]:
            bingoDivs[5].appendChild(photoDiv);
            break;
        case options[6]:
            bingoDivs[6].appendChild(photoDiv);
            break;
        case options[7]:
            bingoDivs[7].appendChild(photoDiv);
            break;
        case options[8]:
            bingoDivs[8].appendChild(photoDiv);
            break;
        case options[9]:
            bingoDivs[9].appendChild(photoDiv);
            break;
        case options[10]:
            bingoDivs[10].appendChild(photoDiv);
            break;
        case options[11]:
            bingoDivs[11].appendChild(photoDiv);
            break;
        case options[12]:
            bingoDivs[12].appendChild(photoDiv);
            break;
        case options[13]:
            bingoDivs[13].appendChild(photoDiv);
            break;
        case options[14]:
            bingoDivs[14].appendChild(photoDiv);
            break;
        case options[15]:
            bingoDivs[15].appendChild(photoDiv);
            break;
        default:
            break;
    }

    captureBtn.disabled = true;
}

// Check if conditions for a Bingo are met
function checkBingo(){              // 4 Zeilen + 4 Spalten + 2 Diagonalen = 10 Chancen zu gewinnen.
    var bingoYes = [bingoDivs[0].childNodes.length !== 0, bingoDivs[1].childNodes.length !== 0, bingoDivs[2].childNodes.length !== 0, bingoDivs[3].childNodes.length !== 0,
                    bingoDivs[4].childNodes.length !== 0, bingoDivs[5].childNodes.length !== 0, bingoDivs[6].childNodes.length !== 0, bingoDivs[7].childNodes.length !== 0, 
                    bingoDivs[8].childNodes.length !== 0, bingoDivs[9].childNodes.length !== 0, bingoDivs[10].childNodes.length !== 0, bingoDivs[11].childNodes.length !== 0,
                    bingoDivs[12].childNodes.length !== 0, bingoDivs[13].childNodes.length !== 0, bingoDivs[14].childNodes.length !== 0, bingoDivs[15].childNodes.length !== 0, ]

    
    if (bingoYes[0] && bingoYes[1] && bingoYes[2] && bingoYes[3] || bingoYes[4] && bingoYes[5] && bingoYes[6] && bingoYes[7] ||
        bingoYes[8] && bingoYes[9] && bingoYes[10] && bingoYes[11] || bingoYes[12] && bingoYes[13] && bingoYes[14] && bingoYes[15] ||           // alle Zeilen 4x4
        bingoYes[0] && bingoYes[4] && bingoYes[8] && bingoYes[12] || bingoYes[1] && bingoYes[5] && bingoYes[9] && bingoYes[13] ||
        bingoYes[2] && bingoYes[6] && bingoYes[10] && bingoYes[14] || bingoYes[3] && bingoYes[7] && bingoYes[11] && bingoYes[15] ||             // alle Spalten 4x4
        bingoYes[0] && bingoYes[5] && bingoYes[10] && bingoYes[15] || bingoYes[3] && bingoYes[6] && bingoYes[9] && bingoYes[12] )               // die zwei diagonalen
    {

        var timing = 3;

        fertigBingo.disabled = false;
        titlePrompts.textContent = 'BINGO!!';
        promtH2.textContent = 'Yippie!';

        var id = setInterval(function() {
            timing--;
            if (timing == 0) {
                titlePrompts.textContent = 'Finde etwas, das...';
                promtH2.textContent = textPromt;

                clearInterval(id);
            }
        }, 1000);
    }
}


// Button functions
var aufgabe = document.getElementById("aufgabenstellung");
var boxPropmts = document.getElementById("boxPropmts");
var bingoContainer = document.getElementById("bingoContainer");
var bingoBtnContainer = document.getElementById("bingoBtnContainer");
var controlBtns = document.getElementById("controlBtns");

var inheritBingo = document.getElementById("inheritBingo");
var downloadSection = document.getElementById("download-section");
var downloadCard = document.getElementById("download-card");

/* Dark & Light Mode */                                                 // change this to dark as default
var colorMode = document.getElementById("colorMode");
var colorSwitch = true;

colorMode.addEventListener("click", () =>{
    if (colorSwitch == true){
        document.querySelectorAll('*').forEach(el => el.style.color = '#022371')
        video.style.border = '2px solid #022371';
        bingoDivs.forEach.call(bingoDivs, function(dive, index) {
            dive.style.border = '2px solid #022371';
            switch (index) {
                case 1:
                case 3:
                case 4:
                case 6:
                case 9:
                case 11:
                case 12:
                case 14:
                    dive.style.backgroundColor = '#022371';
                    break;
            }
        });
        document.body.style.backgroundColor = '#fff';
        downloadCard.style.border = '4px solid #022371';
        document.querySelectorAll('button').forEach(el => {
            el.style.color = '#fff';
            el.style.backgroundColor = '#022371';
        });
        colorMode.innerHTML = inEnglish ? 'Dark' : 'Dunkel';

    } else if (colorSwitch == false) {
        document.querySelectorAll('*').forEach(el => el.style.color = '#fff')
        video.style.border = '2px solid #fff';
        bingoDivs.forEach.call(bingoDivs, function(div, index) {
            div.style.border = '2px solid #fff';
            switch (index) {
                case 1:
                case 3:
                case 4:
                case 6:
                case 9:
                case 11:
                case 12:
                case 14:
                    div.style.backgroundColor = '#fff';
                    break;
            }
        });
        document.body.style.backgroundColor = '#022371';
        downloadCard.style.border = '4px solid #fff';
        document.querySelectorAll('button').forEach(el => {
            el.style.color = '#022371';
            el.style.backgroundColor = '#fff';
        });
        colorMode.innerHTML = inEnglish ? 'Light' : 'Hell';
    }

    colorSwitch = !colorSwitch;
});

/* Switch english and german */
function engLanguage(){
    var languageSwitch = document.getElementById('language');

    var lageplan = document.getElementById("lageplan");
    var weiter = document.getElementById("weiterZuBingo");
    var zurückzurAufgabe = document.getElementById("zurückZurAufgabe");
    var zurückZuBingo = document.getElementById("zurückZuBingo");
    
    var titlePrompts = document.getElementById("titlePrompts");
    var breakPoint = document.createElement("br");
    var textParagraph = document.getElementById("textParagraph");
    inEnglish = !inEnglish;

    if (inEnglish == true){
        titlePrompts.textContent = 'Find something, which...';
        promtH2.textContent = '(Click on one of the boxes)';
        // textParagraph.textContent = '';

        /* change all button-names */
        languageSwitch.innerHTML = 'Deutsch';
        lageplan.innerHTML = 'Site Map';
        colorMode.innerHTML = colorSwitch ? 'Light' : 'Dark';
        fotoBtn.innerHTML = 'Photo';
        weiter.innerHTML = 'continue';
        zurückzurAufgabe.innerHTML = 'back';
        fertigBingo.innerHTML = 'Done';
        returnBtn.innerHTML = 'back';
        zurückZuBingo.innerHTML = 'back';
        downloadBtn.innerHTML = 'Download';
        
        /* Download Card */
        document.getElementById("downloadCard-title").innerHTML = "Your visit<br>at the Zeche Zollern Collary";
        document.getElementById("downloadCard-subtitle").textContent = 'Could you find all the interfaces?';
        document.getElementById("downloadCard-ps").textContent = "(Ps. I hope there aren't any duplicates, I can't check)";
    } else if (inEnglish == false){
        titlePrompts.textContent = 'Finde etwas, das...';
        promtH2.textContent = textPromt;
        // textParagraph.textContent = '';
        
        /* change all button-names */
        languageSwitch.innerHTML = 'English';
        lageplan.innerHTML = 'Lageplan';
        colorMode.innerHTML = colorSwitch ? 'Hell' : 'Dunkel';
        fotoBtn.innerHTML = 'Foto';
        weiter.innerHTML = 'weiter';
        zurückzurAufgabe.innerHTML = 'zurück';
        fertigBingo.innerHTML = 'Fertig';
        returnBtn.innerHTML = 'zurück';
        zurückZuBingo.innerHTML = 'zurück';
        downloadBtn.innerHTML = 'Herunterladen';

        /* Download Card */
        document.getElementById("downloadCard-title").innerHTML = 'Dein Besuch<br>bei der Zeche Zollern';
        document.getElementById("downloadCard-subtitle").textContent = 'Konntest du alle Interfaces gut finden?';
        document.getElementById("downloadCard-ps").textContent = '(Ps. Ich hoffe, da ist nichts doppelt, ich kann es nicht überprüfen)';
    }
}

/* show & hide the different sections */
boxPropmts.style.display = 'none';
bingoContainer.style.display = 'none';
bingoBtnContainer.style.display = 'none';
video.style.display = 'none';
controlBtns.style.display = 'none';
downloadSection.style.display ='none';

function aufgabenstellung(){
    aufgabe.style.display = 'block';

    boxPropmts.style.display = 'none';
    bingoContainer.style.display = 'none';
    bingoBtnContainer.style.display = 'none';
    video.style.display = 'none';
    controlBtns.style.display = 'none';
    downloadSection.style.display ='none';
}
function bingo(){
    boxPropmts.style.display = 'block';
    bingoContainer.style.display = 'grid';
    bingoBtnContainer.style.display = 'block';
    takeBackBingo.appendChild(bingoContainer);

    aufgabe.style.display = 'none';
    video.style.display = 'none';
    controlBtns.style.display = 'none';
    downloadSection.style.display ='none';
}
function camera(){
    video.style.display = 'block';
    controlBtns.style.display = 'block';

    aufgabe.style.display = 'none';
    boxPropmts.style.display = 'none';
    bingoContainer.style.display = 'none';
    bingoBtnContainer.style.display = 'none';
    downloadSection.style.display ='none';
}
function fertigBtn(){
    boxPropmts.style.display = 'none';
    bingoBtnContainer.style.display = 'none';

    inheritBingo.appendChild(bingoContainer);
    downloadSection.style.display = 'block';
}


/* Download Function */
var downloadBtn = document.getElementById("download-btn");

downloadBtn.addEventListener("click", (div) => {
    // html2canvas library

    html2canvas(downloadCard).then(canvas => {
        var a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "image.png";
        a.click();
    });
});



// Für Bingo muss mit dem Klick auf dem Kästchen das Video-Feed geöffnet werden

// Got it!      -- 1. 9 leere Kästchen und je nach welcher angeklickt wurde, wird ein Text unter dem Video gezeigt
// Got it!      -- 2. wenn ein Foto aufgenommen wird, wird es auf das Kästchen gezogen
// Got it!      -- 3. wenn drei in einer Zeile/Spalte/Diagonale ein Bild haben > Bingo! -- if/else or switch ob bestimmte Zeile/Spalte/Diagonalen erfüllt sind
// 4. ab Bingo und/oder bis alle voll sind, kann man weiter und eine Karte herunterladen, Keywords jeweils?
//      ask for confirmation before leaving the picture unchanged

// if there already was a picture, delete the previous one

