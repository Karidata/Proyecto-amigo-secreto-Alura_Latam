let amigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo")
  const nombreAmigo = inputAmigo.value.trim();

  if(nombreAmigo === "") {
     alert("Por Favor, inserte un nombre válido");
     return;

  }

  amigos.push(nombreAmigo);

  actualizarLista();

  inputAmigo.value = "";
  inputAmigo.focus();

}

function actualizarLista() {
  const listaAmigoUl =document.getElementById("listaAmigos")
  listaAmigoUl.innerHTML = "";

  amigos.forEach(amigo => {
  const li =document.createElement("li");
  li.textContent =amigo;
  listaAmigoUl.appendChild(li);
    });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Agrega nombres por favor.");
    return
    
  }

  const indiceAleatoreo = Math.floor(Math.random() *amigos.length);

  const amigoSorteado = amigos[indiceAleatoreo];

  const resultadoUl = document.getElementById("resultado");
  resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
  
}

 document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
  });
