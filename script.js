let cnicButton = document.getElementById("cnicButton");
//event listner
cnicButton.addEventListener("click", (e) => {
  let displayCnic = document.getElementById("displayCnic");
  let cnicValue = document.getElementById("cnicValue").value;
  displayCnic.innerHTML = `Your Cnic Number is: ${cnicValue}`;
  e.preventDefault();
});

//func
const func = () => {
  let cnicValue = document.getElementById("cnicValue").value;
  let cnic = "";
  for (let i = 0; i < cnicValue.length; i++) {
    if (cnicValue[i] == "-") {
      continue;
    } else {
      cnic += cnicValue[i];
    }
  }
  func2(cnic);
};
//func2
const func2 = (cnic) => {
  let cnicValue = document.getElementById("cnicValue");
  cnicValue.value = "";

  for (let i = 0; i < cnic.length; i++) {
    if (i == 5 || i == 12) {
      cnicValue.value += "-" + cnic[i];
    } else {
      cnicValue.value += cnic[i];
    }
  }
};
