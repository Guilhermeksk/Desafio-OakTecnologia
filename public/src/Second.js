function cadastrar() {

confirmar();

}
const dados = {
  nome: () => document.getElementById("produto"),
  valor: () => document.getElementById("valor"),
  
};
function confirmar() {
  const formulario = {
    preco: dados.valor().value,
    nome: dados.nome().value,}

  if (formulario.nome === null || formulario.nome === "" || formulario.preco === null || formulario.preco === "") {
    const minhaDivVazia = document.getElementById("erro");

    
    const codigoHTML = `
      <span class="text-sm text-black">
         <span class="text-red-600">Erro! </span>preencha todos os campos.
      </span>
    `;
  
    
    minhaDivVazia.innerHTML = codigoHTML;
  }else
 {
  const db = firebase.firestore();
    db.collection('cadastro').doc(formulario.nome).set({
      valor:formulario.preco,
   
  })
  .then(() => {
    const minhaDivVazia2 = document.getElementById("erro");

   
    const codigoHTML2 = `
      <span class="text-sm text-black">
         <span class="text-green-600">Sucesso! </span>veja sua lista.
      </span>
    `;
  
    
    minhaDivVazia2.innerHTML = codigoHTML2;
    const delay = 1000; //


setTimeout(function() {
  window.open("listagem.html", "_blank");
}, delay);
  })
  .catch((error) => {
      alert.error("Error writing document: ", error);
  });
 
}
} 


  