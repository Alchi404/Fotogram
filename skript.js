const dialogRef = document.getElementById("full_img_dialog")

function renderPictures(){
    let imgContainer = document.getElementById('content')

    for (let i = 0; i < myImgs.length; i++) {
        imgContainer.innerHTML += /*html*/`
           <div class="test"></div>
        `
    }
}


function openDialog() {
    dialogRef.showModal();
}

function closeDialog(){
    dialogRef.close()
}