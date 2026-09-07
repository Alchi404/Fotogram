const dialogRef = document.getElementById("full_img_dialog")
let opendImg = 0

function openDialog(index) {
    opendImg = index

    dialogRef.showModal();
    console.log(opendImg)

    let img = document.getElementById("full_img")
    img.src = myImgs[index]

    let side = document.getElementById("test")
    side.innerHTML = index + "/" + myImgs.length

    return opendImg
}

function nextImg(index){
    
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