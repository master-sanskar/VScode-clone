function chaluband() {
    document.querySelectorAll('input').forEach((e) => {
        e.style.display = 'none'
    })
}

function fileopen(e) {
    chaluband()
    document.querySelector('.file').style.display = 'flex'
}

function folderopen(e) {
    chaluband()
    document.querySelector('.folder').style.display = 'flex'
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        document.querySelectorAll('input').forEach((e) => {
            e.style.display = 'none'
        });
    };
});

// ------------------------------------------------------------------------------------------------

document.querySelector("#creater").addEventListener("mouseenter", function () {

    document.querySelector("#iconCover").style.display = "initial";
})
document.querySelector("#creater").addEventListener("mouseleave", function () {

    document.querySelector("#iconCover").style.display = "none";
})


document.querySelectorAll(".file").forEach(function (filu) {

    filu.addEventListener("mouseenter", function (dets) {

        gsap.to(dets.target.children[1], {
            display: "initial",
            duration: 0,
        })
    })

    filu.addEventListener("mouseleave", function (dets) {
        gsap.to(dets.target.children[1], {
            display: "none",
            duration: 0,
        })
    })
})

document.querySelectorAll(".file").forEach(function (file) {
    file.addEventListener("mouseenter", function () {
        document.querySelector(".editDelete").style.display = "initial";
    })
})

function fideForm() {
    document.querySelectorAll(".typeBar").forEach(function (typeBar) {
        typeBar.style.display = "none"
    })
}

document.querySelector("#createFile").addEventListener("click", function () {
    fideForm();
    document.querySelector("#enterFile").style.display = "initial";
})

document.querySelector("#createFolder").addEventListener("click", function () {
    fideForm();

    document.querySelector("#enterFolder").style.display = "initial";
})

window.addEventListener("keydown", function (k) {

    if (k.keyCode === 27) {
        fideForm();
        document.querySelectorAll(".typeBar form input").forEach(function (elem) {
            elem.value = "";
        })
    }
});

