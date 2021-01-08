

const [myJsArea, myTextArea, myCssArea] = document.querySelectorAll('.js, .html, .css');

htmlEditor = CodeMirror.fromTextArea(myTextArea, {
  mode: 'htmlmixed',
  theme: 'material-darker',
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  matchTags: { bothTags: true },
  matchBrackets: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});
cssEditor = CodeMirror.fromTextArea(myCssArea, {
  mode: 'css',
  theme: 'material-darker',
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});
jsEditor = CodeMirror.fromTextArea(myJsArea, {
  mode: 'javascript',
  theme: 'material-darker',
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  matchBrackets: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});
const [button, iframe] = document.querySelectorAll('#run, iframe');
let title;
button.addEventListener('click', () => {
  const fullHTML = `
    <!doctype html><html>
      <head><meta charset="UTF-8"><style>${cssEditor.getValue()}</style><title>${title}</title></head>
      <body>${htmlEditor.getValue()}<script>${jsEditor.getValue()}</script></body>
    </html>`;
  iframe.src = 'data:text/html,' + encodeURIComponent(fullHTML);
});

const radioButtons = document.getElementsByName('radiotabs');
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', function () {
    const id = radioButtons[i].id;
    if (id === "jsEditor") {
      jsEditor.refresh();
    } else if (id === "htmlEditor") {
      htmlEditor.refresh();
    } else {
      cssEditor.refresh();
    }

  })
}

const caseLibrary = [
  {
    section: 'JavaScript Basics',
    title: 'Hello world!!!',
    html: '',
    css: '',
    js: 'var greet = "Hello World!"; document.write(greet); // Prints: Hello World!'
  },
  {
    section: 'JavaScript Basics',
    title: 'Starting point',
    html: "<p>К блоку ниже применятся анимации для свойств: width, height, background-color, transform. Наведите на него, чтоб увидеть, как они анимируются.</p><p>Клик по элементу приведёт к срабатыванию EventListener и обработке события 'click'. </p><div class='box'></div>",
    css: '.box {border-style: solid; border-width: 1px; display: block; margin: 20px; width: 100px; height: 100px; background-color: #0000FF; -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s; transition: width 2s, height 2s, background-color 2s, transform 2s; } .box:hover {background-color: #FFCCCC; width: 200px; height: 200px; -webkit-transform: rotate(360deg); transform: rotate(360deg); }',
    js: 'const box = document.querySelector(".box"); box.onclick = () => { box.style.backgroundColor = "green"; box.innerHTML = "<span style=\'color:white; font-size: 1.7rem\'>Зеленый квадрат Залевского</span>\"; }',
  },
  {
    section: 'JavaScript Basics',
    title: 'Second point',
    html: "<p>Привет, Мир! </p><div class='box'></div>",
    css: '.box {border-style: solid; border-width: 1px; display: block; margin: 20px; width: 100px; height: 100px; background-color: #0000FF; -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s; transition: width 2s, height 2s, background-color 2s, transform 2s; } .box:hover {background-color: #FFCCCC; width: 200px; height: 200px; -webkit-transform: rotate(360deg); transform: rotate(360deg); }',
    js: 'const box = document.querySelector(".box"); box.onclick = () => { box.style.backgroundColor = "green"; box.innerHTML = "<span style=\'color:white; font-size: 1.7rem\'>Зеленый квадрат Залевского</span>\"; }',
  },
  {
    section: 'JavaScript Functions',
    title: 'Functions',
    html: "Functions",
    css: '.box {border-style: solid; border-width: 1px; display: block; margin: 20px; width: 100px; height: 100px; background-color: #0000FF; -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s; transition: width 2s, height 2s, background-color 2s, transform 2s; } .box:hover {background-color: #FFCCCC; width: 200px; height: 200px; -webkit-transform: rotate(360deg); transform: rotate(360deg); }',
    js: 'Functions',
  }];
function listCases(cases) {
  const parentUl = document.querySelector('.linksList');
  let sectionName; //
  for (let key of cases) {
    if (sectionName !== key.section) {
      // we'll create a new section
      let section = document.createElement('h3');
      section.classList.add('sectionHeading');
      section.innerHTML = key.section;
      parentUl.appendChild(section);
      sectionContent = document.createElement('ul');
      sectionContent.classList.add('sectionContent');
      parentUl.appendChild(sectionContent);
      sectionName = key.section;

      let liCase = document.createElement('li');
      liCase.classList.add('instance');
      liCase.innerHTML = key.title;
      title = key.title;
      sectionContent.appendChild(liCase);
    } else {
      let liCase = document.createElement('li');
      liCase.classList.add('instance');
      liCase.innerHTML = key.title;
      title = key.title;
      sectionContent.appendChild(liCase);
    }
  }
}
function appendSandboxCase(jsonData, title) {
  for (let key of jsonData) {
    if (key.title === title) {
      htmlEditor.setValue(html_beautify(key.html));
      htmlEditor.refresh();
      cssEditor.setValue(css_beautify(key.css));
      cssEditor.refresh();
      jsEditor.setValue(js_beautify(key.js));
      jsEditor.refresh();
    }
  }
}
listCases(caseLibrary);
const triggerCase = document.querySelectorAll('.instance');
triggerCase.forEach(element => {
  element.addEventListener('click', () => {
    appendSandboxCase(caseLibrary, element.textContent);
  })
});