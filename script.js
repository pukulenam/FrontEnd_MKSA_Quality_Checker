

const getValueInput = () =>{
    const inputValueMksa = document.querySelector("#textMksa").value;
    console.log(inputValueMksa);
    const inputValueArtikel = document.querySelector("#textArtikel").value;
    console.log(inputValueArtikel);
    document.querySelector('#valueInput').innerHTML = `<b> MK:SA input value :</b> <br> ${inputValueMksa} <br> <b>Artikel Input Value :</b> <br> ${inputValueArtikel}`;
    const x = [inputValueMksa, inputValueArtikel];
    return x;
}
sample1=[];

//------------------------------------------------------
// code di bawah cuma buat nge check variable yg di input ke box
//------------------------------------------------------





document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode !== 65) {
    return;
  }
  myFunction();
});
function myFunction() {
  y=length(sample1[0])+length(sample1[1]);
  var sample1 = getValueInput();
  alert(`cok ${sample1}`);
  console.log(sample1[1]);
  console.log("test");
  console.log(y);
}

console.log(sample1);
