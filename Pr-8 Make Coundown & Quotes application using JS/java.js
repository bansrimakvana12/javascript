let value = 0;
const val = document.getElementById('value');

const increment = () => {
  value++;
  val.textContent = value;
};

const reset = () => {
  value = 0;
  val.textContent = value;
};

const deccrement = () => {
  value--;
  val.textContent = value;
};

