
const searchIcon=document.querySelector('.search-icon')
const model=document.querySelector('.model')
const model_container=document.querySelector('.model-container')


searchIcon.addEventListener('click',()=>{
    model.classList.replace('d-none','d-block')
})
model.addEventListener('click',()=>{
    model.classList.replace('d-block','d-none')
})
model_container.addEventListener('click',(event)=>{
    event.stopPropagation()
})