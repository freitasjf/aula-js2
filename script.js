const elementoh1 = document.querySelector("h1")
elementoh1.innerText = "Título por JS"

const link = document.querySelector("a")
link.innerText = "Proz!"
link.style.fontSize = "30px"

const listaUl = document.querySelector("ul")
listaUl.innerHTML = `
<li>Lista não ordenada JS 01</li>
<li>Lista não ordenada JS 02</li>
<li>Lista não ordenada JS 03</li>
`

const listaOl = document.querySelector("ol")
listaOl.innerHTML = `
<li> <a href="https://stackoverflow.com/"> StackOverFlow</a> </li>
<li> <a href="https://pt.wikipedia.org/"> Wikipedia</a> </li>
<li> <a href="https://www.netflix.com/br/"> Netflix</a> </li>
`

