const imagem = document.getElementById('imagem')

const botao1 = document.getElementById("botao1")
const botao2 = document.getElementById("botao2")
const botao3 = document.getElementById("botao3")

function trocarimagem (op){
imagem.src = op;
}

botao1.addEventListener('click',function() {
trocarimagem("imagem1.jpg")
})  

botao2.addEventListener('click',function() {
trocarimagem("imagem2.jpg")
})

botao3.addEventListener('click',function() {
trocarimagem("imagem3.jpg") 
})

botao4.addEventListener('click',function() {
trocarimagem("imagem4.jpg") 
})

botao5.addEventListener('click',function() {
trocarimagem("imagem5.jpg") 
})

botao6.addEventListener('click',function() {
trocarimagem("imagem6.jpg") 
})

botao7.addEventListener('click',function() {
trocarimagem("imagem7.jpg") 
})
    
botao8.addEventListener('click',function() {
trocarimagem("imagem8.jpg") 
})
    
botao9.addEventListener('click',function() {
trocarimagem("imagem9.jpg") 
})

botao10.addEventListener('click',function() {
trocarimagem("imagem10.jpg") 
})