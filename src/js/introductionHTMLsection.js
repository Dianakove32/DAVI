const contLinks = document.querySelector('.introduction-links');
const links = document.querySelectorAll('.introduction-item');
const outPutLinks = document.querySelectorAll('.outPut-html__info');
const otputInfo = document.getElementById('otPutInfo')
const outputTitle = document.getElementById('output-title')

let arrLink = [];
let arrOutPutLinks = [];



links.forEach(element => {

    element.addEventListener('click', (e) => {
        let target = 'outPut-html__info ' + e.target.textContent.toLowerCase();
        for (let i = 0; i < outPutLinks.length; i++) {
            let name = outPutLinks[i].className
            console.log(e.target.innerHTML)

            if (name == target) {
                otputInfo.innerHTML = outPutLinks[i].outerHTML
                outputTitle.innerText = e.target.innerText
                break;
            } else {
                otputInfo.innerHTML = "nothing"
            }
        }
    })
})


// const accordion = document.querySelectorAll('.contentBt')

// for (let i = 0; i < accordion.length; i++) {

//     accordion[i].addEventListener('click', function () {

//         this.classList.toggle('activTask')

//     })

// }
// function closeAccord(el,state){
//     for (let i = 0; i < el.length; i++) {
//         if (state === "activTask") {
//           elm[i].classList.remove("activTask");
//         } else {
//           elm[i].style.maxHeight = null;
//         }
//       }
// }
// closeAccord()

const acc = document.getElementsByClassName("contentBt");
const accPanel = document.getElementsByClassName("contentTask");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        let setClasses = !this.classList.contains('activTask');
        setPanelStyle(acc, "activTask");
        setPanelStyle(accPanel, "hide");

        if (setClasses) {
            this.classList.toggle('activTask');
            this.nextElementSibling.style.maxHeight = accPanel[i].scrollHeight + "px";
        }
    });
}
function setPanelStyle(elm, state) {
    for (let i = 0; i < elm.length; i++) {
        if (state === "activTask") {
            elm[i].classList.remove("activTask");
        } else {
            elm[i].style.maxHeight = null;
        }
    }
}

const addTagsClickHandler = () => {
    document.querySelector('.workshop-tags').addEventListener('click', (e) => {

        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickTag(clickedTag);
            if (clickedTag.innerHTML == "All") {
                showAllTask();
            } else {
                filterTaskBySelectedTag(clickedTag.innerHTML);
            }
        }
    })

}
addTagsClickHandler();
const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.workshop-tags .tag')
    console.log(tags)
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered')

    })
}
const selectClickTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered')
}

const showAllTask = () => {
    let task = document.querySelectorAll('.outPut__workshop .contentBt')
    console.log(task)
    task.forEach(task => {
        task.classList.remove('contentBt_hidden');
    })


}
const filterTaskBySelectedTag = (selectedTag) => {
    let task = document.querySelectorAll('.outPut__workshop .contentBt')
    console.log(task)
    task.forEach(task => {
        task.classList.add('contentBt_hidden');
        task.querySelectorAll('.tag').forEach(tag => {
            if (tag.innerHTML == selectedTag) {
                task.classList.remove('contentBt_hidden');

            }
        })

    })
}




particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;