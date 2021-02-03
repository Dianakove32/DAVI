const tegs = [



    {
        teg: 'a',
        descriptio: 'Defines a hyperlink',
    },
    {
        teg: 'b',
        descriptio: 'Defines bold text',
    },
    {
        teg: "body",
        descriptio: '	Defines the documents body',
    },
    {
        teg: 'br',
        descriptio: 'Inserts a single line break',
    },
    {
        teg: 'blockquote',
        descriptio: 'tag specifies a section that is quoted from another source',
    },
    {
        teg: 'button',
        descriptio: 'tag defines a clickable button ',
    },
    {
        teg: 'caption',
        descriptio: 'tag defines a table caption',
    },
    {
        teg: 'code',
        descriptio: 'Tag is used to define a piece of computer code',
    },
    {
        teg: 'div',
        descriptio: 'tag defines a division or a section in an HTML document ',
    },
    {
        teg: 'em',
        descriptio: 'tag is used to define emphasized text',
    },
    {
        teg: 'form',
        descriptio: 'tag is used to create an HTML form for user input',
    },
    {
        teg: 'footer',
        descriptio: 'tag defines a footer for a document or section',
    },
    {
        teg: "head",
        descriptio: 'Contains metadata/information for the document ',
    },
    {
        teg: 'header',
        descriptio: 'element represents a container for introductory content or a set of navigational links',
    },
    {
        teg: 'hr',
        descriptio: 'tag defines a thematic break in an HTML page ',
    },
    {
        teg: 'h1 - h6',
        descriptio: ' tags are used to define HTML headings',
    },
    {
        teg: " html  ",
        descriptio: ' Defines an HTML document',
    },
    {
        teg: 'i',
        descriptio: 'tag defines a part of text in an alternate voice or mood',
    },
    {
        teg: 'img',
        descriptio: 'tag is used to embed an image in an HTML page',
    },
    {
        teg: 'input',
        descriptio: 'tag specifies an input field where the user can enter data',
    },
    {
        teg: 'label',
        descriptio: ' tag defines a label for several elements',
    },
    {
        teg: 'li',
        descriptio: ' tag defines a list item',
    },
    {
        teg: 'link',
        descriptio: 'tag defines the relationship between the current document and an external resource',
    },
    {
        teg: 'map',
        descriptio: 'tag is used to define an image map',
    },
    {
        teg: 'nav',
        descriptio: 'tag defines a set of navigation links',
    }, {
        teg: 'object',
        descriptio: 'tag defines a container for an external resource',
    },
    {
        teg: 'ol',
        descriptio: 'tag defines an ordered list.An ordered list can be numerical or alphabetical',
    },
    {
        teg: 'option',
        descriptio: 'tag defines an option in a select list',
    },
    {
        teg: 'output',
        descriptio: 'tag is used to represent the result of a calculation (like one performed by a script)',
    },
    {
        teg: 'p',
        descriptio: 'tag defines a paragraph',
    },
    {
        teg: 'pre',
        descriptio: 'tag defines preformatted text',
    },
    {
        teg: 'script',
        descriptio: 'tag is used to embed a client-side script ',
    },
    {
        teg: 'section',
        descriptio: ' tag defines a section in a document',
    },
    {
        teg: 'span',
        descriptio: ' tag is an inline container used to mark up a part of a text, or a part of a document',
    },
    {
        teg: 'strong',
        descriptio: 'tag is used to define text with strong importance',
    },
    {
        teg: 'style',
        descriptio: 'tag is used to define style information (CSS) for a document',
    },
    {
        teg: 'table',
        descriptio: ' tag defines an HTML table',
    },
    {
        teg: 'tr',
        descriptio: 'tag defines a row in an HTML table',
    },
    {
        teg: 'td',
        descriptio: 'tag defines a standard data cell in an HTML table',
    },
    {
        teg: 'th',
        descriptio: ' tag defines a header cell in an HTML table',
    },
    {
        teg: 'tbody',
        descriptio: 'tag is used to group the body content in an HTML table',
    },
    {
        teg: "title",
        descriptio: '	Defines a title for the document',
    },
    {
        teg: 'thead',
        descriptio: 'tag is used to group header content in an HTML table',
    },
    {
        teg: 'textarea',
        descriptio: 'tag defines a multi-line text input control',
    },
    {
        teg: 'tfoot',
        descriptio: 'tag is used to group footer content in an HTML table',
    },
    {
        teg: 'title',
        descriptio: 'tag defines the title of the document',
    },
    {
        teg: 'ul',
        descriptio: 'tag defines an unordered (bulleted) list',
    },
    {
        teg: 'video',
        descriptio: ' tag is used to embed video content in a document, such as a movie clip or other video streams.',
    }, {
        teg: 'xmp',
        descriptio: 'tag defines preformatted text',
    },
]




function getHTMLtegs(tegs) {
    let parent = document.querySelector('#parent')
    for (let key of tegs) {
        let divMain = document.createElement('div')
        divMain.classList.add('divMain')

        divMain.innerHTML = key.teg;
        let p = document.createElement('div')
        p.classList.add('descriptio')

        p.innerHTML = key.descriptio
        divMain.appendChild(p)
        parent.appendChild(divMain)
    }
}
getHTMLtegs(tegs)
const divM = document.querySelectorAll('.divMain')
const tegCont = document.querySelectorAll('.tegs')
const desrCont = document.querySelectorAll('.descriptio')
const mainWrap = document.querySelector('#parent')
divM.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        if (event.target.firstElementChild !== null) {
            let target = event.target.firstElementChild;
            target.style.visibility = 'unset';
        }
    })
    element.addEventListener('mouseleave', () => {
        desrCont.forEach(el => el.style.visibility = 'hidden')
    })
})


const list = document.getElementsByClassName('.divMain')


function myFunction() {
    const searchInput = document.getElementById('search');
    let filter = searchInput.value.toUpperCase()
    console.log(filter)
    // for (let key of tegs)

    //  console.log(teg )
    divM.forEach(element => {
        console.log(element)
        let targ = element.innerText
        console.log(targ)
        if (targ.toUpperCase().indexOf(filter) >= 0) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }

    })
}

