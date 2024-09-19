function cadastrarlivro() {
  
    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;
    var ano = document.getElementById("ano").value;
    var genero = document.querySelectorAll("input[name='genero']:checked");

    var generoarray = Array.from(genero).map(g => g.value);

    var livros = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        genero: generoarray
    };
    var livrosdiv = document.getElementById("livro");
   
    document.writeln("Titulo: " + livros.titulo + " autor: " + livros.autor + "ano:" + livros.ano + "genero" ); 
    
    livrosdiv.innerHTML = ` <h3>informações do livro</h3>
        <p>titulo: ${livros.titulo}</p>
        <p>autor: ${livros.autor}</p>
        <p>ano: ${livros.ano}</p> 
        <p>genero: ${livros.genero.join(', ')} </p>`;
      
     
    
}