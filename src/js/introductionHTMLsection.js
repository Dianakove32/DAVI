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

