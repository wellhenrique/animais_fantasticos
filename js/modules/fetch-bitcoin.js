export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (110 / json.BRL.sell).toFixed(4);
    })
    .catch((err) => {
      console.log(Error(err));
    });
}
