function currencyConverter() {
  const amount = document.querySelector(".amount");
  const from = document.querySelector(".from");
  const to = document.querySelector(".to");
  const resultDiv = document.querySelector(".result");

  if (amount && from && to) {
    fetch(
      `https://v6.exchangerate-api.com/v6/bf5c642b8c87156952a53575/latest/${from.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const rate = data.conversion_rates[to.value];
        const result = (amount.value * rate).toFixed(2);
        resultDiv.innerHTML = `${amount.value} ${from.value} = ${result} ${to.value}`;
      })
      .catch((error) => {
        resultDiv.innerHTML = `something went wrong ${error}`;
      });
  } else {
    resultDiv.innerHTML = "Please fill all fields";
  }
}
