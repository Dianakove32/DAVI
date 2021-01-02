const tegs=[
    {
        teg: " html  " ,
        descriptio: ' Указывает программе просмотра страниц, что это HTML документ',
    },
    {
        teg: "head",
        descriptio: 'Определяет место, где помещается различная информация не отображаемая в теле документа. ',
    },
     {
        teg: "body",
        descriptio: 'Определяет видимую часть документа',
    },
     {
        teg: "title",
        descriptio: 'Помещает название документа в оглавление программы просмотра страниц',
    },
     {
        teg: 'pre',
        descriptio: 'Обрамляет предварительно отформатированный текст. (как есть!) ',
    },
     {
        teg: 'h1',
        descriptio: 'Создает САМЫЙ БОЛЬШОЙ заголовок (как отдельный абзац)',
    },
     {
        teg: 'h6',
        descriptio: 'Создает САМЫЙ МАЛЕНЬКИЙ заголовок',
    },
     {
        teg: 'b',
        descriptio: 'Создает жирный текст',
    },
     {
        teg: 'i',
        descriptio: 'Создает наклонный текст',
    },
     {
        teg: 'em',
        descriptio: 'Используется для выделения из текста слова (наклонный или жирный текст)',
    },
     {
        teg: 'a   href="URL"',
        descriptio: 'Создает гиперссылку на другие документы или часть текущего документа.',
    },
     {
        teg: 'a  href="URL" ',
        descriptio: 'Создает гиперссылку на рисунок, находящийся по адресу imgURL.',
    },
     {
        teg: 'a  href="mailto:EMAIL" ',
        descriptio: 'Создает гиперссылку вызова почтовой программы для написания письма по указанному адресу.',
    },
     {
        teg: 'p',
        descriptio: 'Создает новый параграф',
    },
     {
        teg: 'br',
        descriptio: 'Вставляет перевод   строки.',
    },
     {
        teg: 'blockquote',
        descriptio: 'Создает отступы с обеих сторон текста.',
    },
     {
        teg: 'ol',
        descriptio: 'Создает нумерованный список',
    },
     {
        teg: 'li',
        descriptio: 'Определяет каждый элемент списка и присваивает номер',
    },
     {
        teg: 'ul',
        descriptio: 'Создает ненумерованный список',
    },
     {
        teg: 'hr',
        descriptio: 'Добавляет в HTML документ горизонтальную линию.',
    },
     {
        teg: 'table',
        descriptio: 'Создает таблицу.',
    },
     {
        teg: 'tr',
        descriptio: 'Определяет строку в таблице.',
    },
     {
        teg: 'td',
        descriptio: 'Определяет отдельную ячейку в таблице.',
    },
     {
        teg: 'th',
        descriptio: 'Определяет заголовок таблицы (нормальная ячейка с отцентрованным жирным текстом)',
    },
     {
        teg: 'form',
        descriptio: 'Создает формы',
    },
     {
        teg: 'option',
        descriptio: 'Указывает каждый отдельный элемент меню',
    },
     {
        teg: 'textarea  name="NAME"  cols=40  rows=8',
        descriptio: 'Создает окно для ввода текста. Columns указывает ширину окна; rows указывает его высоту.',
    },
     {
        teg: 'input   type="checkbox"   name="NAME"',
        descriptio: '	Создает checkbox. За тегом следует текст.',
    },
     {
        teg: 'input   type="radio"   name="NAME"   value="x" ',
        descriptio: 'Создает radio кнопку. За тегом следует текст.',
    },
     {
        teg: 'input   type=text   name="foo"   size=20 ',
        descriptio: 'Создает строку для ввода текста. Параметром Size указывается длина в символах.',
    },
     {
        teg: 'input   type="submit"   value="NAME"',
        descriptio: 'Создает кнопку "Принять"',
    },
     {
        teg: 'input   type="image"    border=0    name="NAME"   src="name.gif"',
        descriptio: 'Создает кнопку "Принять" - для этого используется изображение',
    },
     {
        teg: ' input  type="reset"',
        descriptio: 'Создает кнопку "Отмена"',
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

const count = (a,b) => a + b;
count(2,3)