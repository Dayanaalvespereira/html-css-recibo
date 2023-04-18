const btn = document.getElementById('btn')

btn.addEventListener("click",function(e){
    e.preventDefault()
    const nomepagou = document.getElementById('nomepagou').value
    const valorpagoextenso = document.getElementById('valorpagoextenso').value
    const valorpago = document.getElementById('valorpago').value
    const referente = document.getElementById('referente').value
    const data = document.getElementById('data').value
    const nomerecebeu = document.getElementById('nomerecebeu').value

    recibo.innerHTML = `
    <div id="declaracao-recibo">
        <div id="valorpago">Valor: R$ ${valorpago} </div>
        <div>
            Recebi de <spam id="nome"> ${nomepagou} </spam> 
            a importância de ${valorpagoextenso}
            referente a ${referente} na data ${data}.
        </div>
        <div id="assinatura">
            Assinatura: ________________________________________________    
        </div>
        <div id="recebedor">
            Nome: ${nomerecebeu}
        </div>
    </div>
    `
})

