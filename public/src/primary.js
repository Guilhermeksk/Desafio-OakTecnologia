function voltar(){
      window.open("index.html", "_blank");
}


mudanca();
function mudanca() {
    const db = firebase.firestore();
    const colecao = db.collection('cadastro');

colecao.get().then(snapshot => {
      
      const documentosComValores = snapshot.docs.map((doc, index) => ({
        nome: doc.id, 
        valor: doc.data().valor, 
        index: index 
      }));
    
      documentosComValores.sort((a, b) => a.valor - b.valor);
    
      
      const primeiro = documentosComValores[0];
      const segundo = documentosComValores[1];
      const terceiro = documentosComValores[2];
      const quarto = documentosComValores[3];
      const quinto = documentosComValores[4];
    
     



      const dado1 = document.getElementById('dado1');
      const dado2 = document.getElementById('dado2');
      const dado3 = document.getElementById('dado3');
      const dado4 = document.getElementById('dado4');
      const dado5 = document.getElementById('dado5');
      const valor1 = document.getElementById('valor1');
      const valor2 = document.getElementById('valor2');
      const valor3 = document.getElementById('valor3');
      const valor4 = document.getElementById('valor4');
      const valor5 = document.getElementById('valor5');

      
    // top-1
    dado1.textContent = primeiro.nome;  
    valor1.textContent = `R$ ${primeiro.valor}`; ;
    //top2
    dado2.textContent = segundo.nome;  
    valor2.textContent = `R$ ${segundo.valor}`; ;
    //top3
    dado3.textContent = terceiro.nome;  
    valor3.textContent = `R$ ${terceiro.valor}`; ;
    //top4
    dado4.textContent = quarto.nome;  
    valor4.textContent = `R$ ${quarto.valor}`; ;
    //top5
    dado5.textContent = quinto.nome;  
    valor5.textContent = `R$ ${quinto.valor}`; ;
    });

}
      
