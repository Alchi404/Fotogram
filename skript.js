const dialogRef = document.getElementById("full_img_dialog")
let opendImg = 0

function openDialog(index) {
    opendImg = index

    dialogRef.showModal();
    updateDialog()
}

function updateDialog() {
    let img = document.getElementById("full_img")
    img.src = myImgs[opendImg]
    img.alt = myImgsAlt[opendImg]

    let title = document.getElementById("dialogTitle")
    title.innerHTML = myImgsTitle[opendImg]

    let side = document.getElementById("slideCounter")
    side.innerHTML = (opendImg + 1) + "/" + myImgs.length
}

function nextImg(){
    opendImg++
    if (opendImg > myImgs.length - 1) {
        opendImg = 0
    }
    updateDialog()
}

function previousImg() {
    opendImg--
    if (opendImg < 0 ) {
        opendImg = 11
    }
    updateDialog()
}

function closeDialog() {
    dialogRef.close()
}

function renderPictures() {
    let imgContainer = document.getElementById('content')

    for (let i = 0; i < myImgs.length; i++) {
        imgContainer.innerHTML += /*html*/`
           <img id="img${i}" class="preview_img" onclick="openDialog(${i})">
        `
    }
}

function loadIMG() {
    for (let i = 0; i < myImgs.length; i++) {
        let img = document.getElementById(`img${i}`);
        img.src = myImgs[i];
    }
}