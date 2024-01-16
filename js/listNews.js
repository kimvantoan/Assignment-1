const articles = [
    "Content & Display Patterns with Expressive CSS",
    "More code review tools (on GitHub)",
    "Resolution Independent Pixel Illustrations",
    "What's the deal with declaring font properties on @font-face?"
]
const listNews=document.querySelector('.listNews')
for(let i=0;i<articles.length;i++){
    let article=articles[i]
    let li=document.createElement('li')
    let a=document.createElement('a')
    a.appendChild(document.createTextNode(article))
    li.appendChild(a)
    listNews.appendChild(li)
}
