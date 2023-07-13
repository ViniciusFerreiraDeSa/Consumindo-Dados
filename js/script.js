async function buscaEndereco(cep) {
    let mensagemDeErro= document.getElementById('erro');
    mensagemDeErro.innerHTML= "";
    try{
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCepConvertida = await consultaCep.json(); 
            if(consultaCepConvertida.erro){
                throw Error('Cep não existente!');
        }
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado')

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    }catch(erro){
            mensagemDeErro.innerHTML = `<p>O CEP que você escreveu está errado ou contém mais números verifique novamente por favor!</p>`
            console.log(erro);
    }
}
/*let ceps = ['01001000', '01001001'];
let conjuntoDeCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoDeCeps);

Promise.all(conjuntoDeCeps).then(respostas => console.log(respostas));*/
let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));