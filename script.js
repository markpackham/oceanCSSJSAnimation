const trashContainer = document.querySelector(".trash-container");
const moneyElem = document.querySelector(".money");
const currencyFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const trashFormatter = new Intl.NumberFormat("en-us", {
  minimumIntegerDigits: 8,
  maximumFractionDigits: 0,
  useGrouping: false,
});

// fund raising goal
const MAX_MONEY_RAISED = 30000000;

setupTrash();

async function setupTrash() {
  const amountRaised = await fetch("https://tscache.com/donation_total.json")
    .then((res) => res.json())
    .then((data) => data.count);
  moneyElem.innerText = currencyFormatter.format(amountRaised);
}
