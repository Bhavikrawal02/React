function customRender(reactElement,container){
    // const domele=document.createElement(reactElement.type)
    // domele.innerHTML=reactElement.children
    // domele.setAttribute('href',reactElement.props.href)
    // domele.setAttribute('target',reactElement.props.target)
    // container.appendChild(domele)
    const domele=document.createElement(reactElement.type)
    domele.innerHTML=reactElement.children

    for (const prop in reactElement.props) {
        if(prop==='children') continue;

       domele.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domele)

}
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)