

const getValueInput = () =>{
    const inputValueMksa = document.querySelector("#textMksa").value;
    console.log(inputValueMksa);
    const inputValueArtikel = document.querySelector("#textArtikel").value;
    console.log(inputValueArtikel);
    document.querySelector('#valueInput').innerHTML = `MK:SA input value: <br> ${inputValueMksa} <br> Artikel Input Value: <br> ${inputValueArtikel}`;
    const x = [inputValueMksa, inputValueArtikel];
    return x;
}
sample1=[];

document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode !== 65) {
    return;
  }
  myFunction();
});
function myFunction() {
  var sample1 = getValueInput();
  alert(`cok ${sample1}`);
  console.log(sample1[1]);
  console.log("test");
  console.log(sample1[0]);
}

console.log(sample1);
