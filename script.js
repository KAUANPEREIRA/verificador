function verificar(){
    var ano=new Date()
    var anoAtual=ano.getFullYear()

    var idade=document.querySelector('#idade')
    
    var imagem= document.querySelector('.img')
    var res=document.querySelector('.res')
    var i =Number(idade.value)
    
    //parte logica
    
    if(i==0 || i>anoAtual){
        alert('verifique os dados e tente novamente')
    }else{ 
       var fsex=document.getElementsByName('radsex')
       var idadeFinal= anoAtual- i
       var genero=' '
       if(fsex[0].checked){
           genero='homen'
            if(idadeFinal>1 && idadeFinal<10){
                
                res.innerHTML=` criança com a idade de ${idadeFinal} anos`
            }
            if(idadeFinal<21){
                imagem.src='jovemH.png'
                res.innerHTML=` jovem com a idade de ${idadeFinal} anos`
            }
            if(idadeFinal<65){
                imagem.src='homen.png'
                res.innerHTML=` homen com a idade de ${idadeFinal} anos`
            }
            if(idadeFinal>=65){
                imagem.src='idoso.png'
                res.innerHTML=` idoso com a idade de ${idadeFinal} anos`
            }
       }else if(fsex[1].checked){
           genero='mulher'
            if(idadeFinal>1 && idadeFinal<10){
                imagem.src='bebeM.png'
                res.innerHTML=` criança com a idade de ${idadeFinal} anos`
            }
            if(idadeFinal<21){
                imagem.src='jovemM.png'
                res.innerHTML=` jovem com a idade de ${idadeFinal} anos`
            }
            if(idadeFinal<65){
                imagem.src='mulher.png'
                res.innerHTML=` mulher com a idade de ${idadeFinal} anos`
            }
            if(idadeFinal>=65){
                imagem.src='idosa.png'
                res.innerHTML=` idoso com a idade de ${idadeFinal} anos`
            }
       }

       
}}


  
