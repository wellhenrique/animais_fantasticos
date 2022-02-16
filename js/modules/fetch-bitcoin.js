export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((resp) => resp.json())
    .then((json) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (110 / json.BRL.sell).toFixed(4);
    })
    .catch((err) => {
      console.log(Error(err));
    });
}
