// import html2canvas from 'html2canvas';

var video = document.getElementById("video");
var returnBtn = document.getElementById("return-btn");
var captureBtn = document.getElementById("capture-btn");
captureBtn.textContent = "Capture";

var photosContainer = document.getElementById("photos");
var promtH2 = document.getElementById("textPromt");
var textPromt = promtH2.textContent;

var options = ["man drehen kann", "einrastet", "auf Berührung reagiert", "digital ist", "früher mechanisch war & heute digital ist",
                "man drücken kann", "mit dir kommuniziert", "du bedienen kannst, ohne hinzusehen", "auf Bewegung reagiert",
                /* 9 - 15 */ "noch kein Prompt :)", "noch kein Prompt :", "noch kein Prompt ", "noch kein Prompt", "noch kein Promp",
                "noch kein Prom", "noch kein Pro"];

var bingoDivs = [document.getElementById("box1"), document.getElementById("box2"), document.getElementById("box3"), document.getElementById("box4"),
                document.getElementById("box5"), document.getElementById("box6"), document.getElementById("box7"), document.getElementById("box8"),
                document.getElementById("box9"), document.getElementById("box10"), document.getElementById("box11"), document.getElementById("box12"),
                document.getElementById("box13"), document.getElementById("box14"), document.getElementById("box15"), document.getElementById("box16")];

//Access the camera and stream to video
navigator.mediaDevices.getUserMedia({ video: true, facingMode: 'environment' }).then((stream) => {
    video.srcObject = stream;
});

var clicks = 0;

// Choose a Box and display its condition
bingoDivs.forEach.call(bingoDivs, function(elem, index) {
    elem.addEventListener('click', () => {
        bingoDivs.forEach(function(lol) {
            lol.style.backgroundColor = '';
        });
        clicks++;
        switch(index){
            case 0:
                promtH2.textContent = options[0];
                elem.style.backgroundColor = '#022371';
                break;
            case 1:
                promtH2.textContent = options[1];
                elem.style.backgroundColor = '#fff';
                break;
            case 2:
                promtH2.textContent = options[2];
                break;
            case 3:
                promtH2.textContent = options[3];
                break;
            case 4:
                promtH2.textContent = options[4];
                break;
            case 5:
                promtH2.textContent = options[5];
                break;
            case 6:
                promtH2.textContent = options[6];
                break;
            case 7:
                promtH2.textContent = options[7];
                break;
            case 8:
                promtH2.textContent = options[8];
                break;
            case 9:
                promtH2.textContent = options[9];
                break;
            case 10:
                promtH2.textContent = options[10];
                break;
            case 11:
                promtH2.textContent = options[11];
                break;
            case 12:
                promtH2.textContent = options[12];
                break;
            case 13:
                promtH2.textContent = options[13];
                break;
            case 14:
                promtH2.textContent = options[14];
                break;
            case 15:
                promtH2.textContent = options[15];
                break;
            default:
                textPromt;
        }
        if (clicks == 2){
            captureBtn.disabled = false;
            camera();
        }
    });
});

// if one is clicked, deactivate function for all other elements
// .
// download-Btn > take another picture
// new canvas to download a card


captureBtn.disabled = true;
returnBtn.disabled = false;

// Capture photo with timer
captureBtn.addEventListener("click", () => {
    var count = 1;
    if (count > 0){
        returnBtn.disabled = true;
        captureBtn.disabled = true;
        captureBtn.textContent = "...";

        var countdown = setInterval(() => {            
            count--;
            if (count <= 0){
                clearInterval(countdown);
                captureBtn.disabled = false;
                returnBtn.disabled = false;
                capturePhoto();
                count = 1;
                captureBtn.textContent = "Capture";
            }
        }, 1000);
    } else {
        capturePhoto();
        count = 1;
        captureBtn.textContent = "Capture";
    }
    bingo();
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
    checkBingo();

}

// Check if conditions for a Bingo are met -- Brauchen wir das
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
        console.log(`Bingo!`);
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

var colorMode = document.getElementById("colorMode");
var colorSwitch = true;

colorMode.addEventListener("click", () =>{
    if (colorSwitch == true){
        document.body.style.backgroundColor ='#022371';
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
        downloadCard.style.border = '4px solid #fff';
        document.querySelectorAll('button').forEach(el => el.style.backgroundColor = '#022371')
    } else if (colorSwitch == false) {
        document.body.style.backgroundColor ='#fff';
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
        downloadCard.style.border = '4px solid #022371';
        document.querySelectorAll('button').forEach(el => el.style.backgroundColor = '#fff')
    }
    colorSwitch = !colorSwitch;
});

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
    bingoDivs.forEach(function(lol) {
        lol.style.backgroundColor = '';
    });
    boxPropmts.style.display = 'block';
    bingoContainer.style.display = 'grid';
    bingoBtnContainer.style.display = 'block';
    takeBackBingo.appendChild(bingoContainer);

    aufgabe.style.display = 'none';
    video.style.display = 'none';
    controlBtns.style.display = 'none';
    downloadSection.style.display ='none';

    clicks = 0;
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

var downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", (div) => {


    define(["html2canvas"], function(html2canvas) // This parameter is important.
    {
        html2canvas(document.body).then(function(canvas)
        {
            /*onrendered: function(canvas) {
                var img = canvas.toDataURL();
                window.open(img);
            }*/
            console.log("This works.");
        });
    });


    /*var cardCanvas = document.createElement("canvas");
    var cardContext = cardCanvas.getContext("2d");

    cardCanvas.width = downloadCard.downloadCardWidth;
    cardCanvas.height = downloadCard.downloadCardHeight;
    
    cardCanvas.appendChild("downloadCard");
    cardContext.drawImage(downloadCard, cardCanvas.width, cardCanvas.height);

    var a = document.createElement("a");

    a.href = cardCanvas.toDataURL();

    a.download = "Interfaces.png";
    a.click();*/
});

/*
function downloadCardImage(){

    // Draw the current video frame to the canvas
    var cardDataURL = canvas.toDataURL("image/png");

    // Create image list from captured photo
    // photoDiv.classList.add("photo");

    var cardImg = document.createElement("img");
    cardImg.src = cardDataURL;
    // photoDiv.appendChild(img);

    // Create download image feature
    
}



// Für Bingo muss mit dem Klick auf dem Kästchen das Video-Feed geöffnet werden

// Got it!      -- 1. 9 leere Kästchen und je nach welcher angeklickt wurde, wird ein Text unter dem Video gezeigt
// Got it!      -- 2. wenn ein Foto aufgenommen wird, wird es auf das Kästchen gezogen
// Got it!      -- 3. wenn drei in einer Zeile/Spalte/Diagonale ein Bild haben > Bingo! -- if/else or switch ob bestimmte Zeile/Spalte/Diagonalen erfüllt sind
// 4. ab Bingo und/oder bis alle voll sind, kann man weiter und eine Karte herunterladen, Keywords jeweils?
//      ask for confirmation before leaving the picture unchanged

*/