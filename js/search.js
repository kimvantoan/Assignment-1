
const searchBtn=document.querySelector('.model-search button')
const listItem=document.querySelectorAll('.listNews li')
const input=document.querySelector('.model-search input')

searchBtn.addEventListener('click',()=>{
    const filter=input.value.toLocaleLowerCase()
    listItem.forEach((item)=>{
        let text = item.textContent
        if(text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
            item.style.display=''
        }
        else{
            item.style.display='none'
        }
    })
})





