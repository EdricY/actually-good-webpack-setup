
import qwer from "./qwer.csv";


function myComponent() {
  console.log(qwer);
  const divElement = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.innerText = 'Nice' + qwer;
  const img = document.createElement('img');
  img.src = "./assets/asdf.png";
  divElement.appendChild(h2);
  divElement.appendChild(img);
  return divElement;
}
document.body.appendChild(myComponent());