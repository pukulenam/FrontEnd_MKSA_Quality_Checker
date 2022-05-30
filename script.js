sample1=[];
function getValueInput1() {
  const inputValueMksa = document.getElementById("textMksa").value; 
  document.getElementById("valueInput1").innerHTML = `<b> MK:SA input value :</b> <br> ${inputValueMksa} </b>`; 
  sample1[0]=inputValueMksa;
  return inputValueMksa;
};
function getValueInput2() {
  const inputValueArtikel = document.getElementById("textArtikel").value; 
  document.getElementById("valueInput2").innerHTML = `<b>Artikel Input Value :</b> <br> ${inputValueArtikel} </b>`; 
  sample1[1]=inputValueArtikel;
  return inputValueArtikel;
}

const getValueInput = () =>{
  console.log(sample1);
  getValueInput1();
  getValueInput2();  
  return;
}

const key = {"artikel": sample1[1], "mksa": sample1[0]};

