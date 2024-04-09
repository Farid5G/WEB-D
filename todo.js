const form = document.querySelector("form");
const input = document.querySelector("#tasks");
const submit = document.querySelector("#submit");
submit.disabled = true;

input.onkeyup = function (e) {
  if (input.value.length > 0) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};

form.onsubmit = function (e) {
  e.preventDefault();
  const ol = document.querySelector("ol");
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let value = input.value;
  checkbox.type = "checkbox";
  li.textContent = value;
  li.appendChild(checkbox);
  ol.appendChild(li);
  input.value = "";
  submit.disabled = true;
  checkbox.onchange = function (e) {
    if (this.checked) {
      ol.removeChild(li);
    }
  };
};
