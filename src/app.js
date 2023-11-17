// src/app.js
const web3 = new Web3(Web3.givenProvider);

const contractAddress = 'CONTRACT_ADDRESS'; // Kontratın gerçek Ethereum adresini buraya ekleyin
const contractABI = [/* Kontrat ABI'si buraya eklenir */];

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function proveKnowledge() {
    const guessedNumber = document.getElementById('guessedNumber').value;

    // TODO: Sıfır bilgi ispatını üretmek ve kontrata göndermek için gerekli adımları yapın

    // Örnek olarak, kontrat fonksiyonunu çağırabilir ve sonucu ekrana yazabilirsiniz
    const result = await contract.methods.proveKnowledge(guessedNumber).call();

    document.getElementById('result').innerText = result ? 'İspat başarılı!' : 'İspat başarısız.';
}
