let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome!");
    return;
  }

  amigos.push(nome);
  input.value = ""; 
  mostrarAmigos();
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear!");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let sorteado = amigos[indice];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; 
  let item = document.createElement("li");
  item.textContent = "O amigo secreto sorteado foi: " + sorteado;
  resultado.appendChild(item);
}
