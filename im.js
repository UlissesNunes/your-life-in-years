
function verificar() {
    const data = new Date()
    const anoA = data.getFullYear()
    const nasc = document.querySelector('input#anas')
    const res = document.querySelector('div#res')
            //validação ao usuário
        if(nasc.value.length == 0 || Number(nasc.value) >= anoA) {
             alert('ERRO! Verifique os dados e tente novamente!')
         } else {
             
             const sexom = document.getElementById('mas')
             const sexof = document.getElementById('fem')
             const nascimento = anoA - Number(nasc.value)
             const img = document.createElement('img')
                img.setAttribute('id' , 'imagem')
                let genero = ''
                //Criação do elemento 'IMG' e ligação dos input com DOM

             if(sexom.checked) {
                  genero = 'homem'   
                
                 if (nascimento >= 0 && nascimento <= 9) {
                    //criança
                    img.setAttribute('src' , 'imagem/crianca-homem2.jpg')
                 } else if(nascimento >=10 && nascimento < 16) {
                    //adolescente 
                    img.setAttribute('src' , 'imagem/adolescente-homem2.jpg')
                   
                 } else if(nascimento < 26) {
                    //jovem
                    img.setAttribute('src' , 'imagem/jovem-homem.jpg')
                 } else if(nascimento < 44) {
                    //adulto
                    img.setAttribute('src' , 'imagem/adulto-homem.jpg')
                 } else if(nascimento <= 65) {
                    //Adulto senhor
                    img.setAttribute('src' , 'imagem/adulto-senhor-homem.jpg')
                 } else {
                    //idoso
                    img.setAttribute('src' , 'imagem/idoso-homem.jpg')
                 }
                 
                 
                
             } else if(sexof.checked) {
                 genero = 'mulher'
                
                 if (nascimento >= 0 && nascimento <= 9) {
                    //criança
                    img.setAttribute('src' , 'imagem/crianca-mulher.jpg')
                 } else if(nascimento < 16) {
                    //adolescente 
                    img.setAttribute('src' , 'imagem/adolescente-mulher.jpg')
                 } else if(nascimento < 26) {
                    //jovem
                    img.setAttribute('src' , 'imagem/jovem-mulher.jpg')
                 } else if(nascimento < 44) {
                    //adulto
                    img.setAttribute('src' , 'imagem/adulta-mulher.jpg')
                 } else if(nascimento <= 64) {
                    //Adulto senhor
                    img.setAttribute('src' , 'imagem/adulta-senhora-mulher.jpg')
                 } else {
                    //idoso
                    img.setAttribute('src' , 'imagem/idosa-mulher.jpg')
                 }
                   
            }
            
                 res.style.textAlign = 'center';
                 res.innerHTML = `<p>Detectamos ${genero} com ${nascimento} anos</p>`
                 res.appendChild(img)   
        
        }

}