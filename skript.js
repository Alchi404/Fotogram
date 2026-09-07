const dialogRef = document.getElementById("full_img_dialog")

function openDialog() {
    dialogRef.showModal();
}

function closeDialog(){
    dialogRef.close()
}

function renderPictures(){
    let imgContainer = document.getElementById('content')

    for (let i = 0; i < myImgs.length; i++) {
        imgContainer.innerHTML += /*html*/`
           <img id="img${i}" class="preview_img" onclick="openDialog()">
        `
    }
}

    function loadIMG() {
       for (let i = 0; i < myImgs.length; i++) {
        let img = document.getElementById(`img${i}`);
        img.src = myImgs[i];
       }
}