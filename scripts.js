var rgms = [];
var nomes = [];


window.onload = function cadastrar() {

    var nom = "null";

    while (nom != null) {
        var nom = prompt("Digite o nome da cidade: ");
        if (!!nom) {
            nomes.push(nom);
        }
        
    }
    


    var content = document.getElementById("tabela");
    var quantidade = nomes.length;

    var itens = "";
    for (let i = 0; i < quantidade; i++) {


        var aux = `
            <tr>
                <td>${i + 1}</td>
				<td>${nomes[i]}</td>
				
				
			</tr>
        `
        itens += aux;
    }

    var table = `
        <table>
            <thead>
                <tr>
                    <th>Indice</th>
                    <th>Nome</th>
                    
                </tr>
            </thead>
            <tbody>
                ${itens}
            </tbody>
        </table>
    `;

    content.innerHTML = table;
}