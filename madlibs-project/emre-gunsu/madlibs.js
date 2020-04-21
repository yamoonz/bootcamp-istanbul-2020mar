document.addEventListener("DOMContentLoaded", function() {
    //hotkeys, second assignment
    let blankSpaces = document.querySelectorAll(".inputs");
    let inputCount;
    document.addEventListener("keydown", function(e){
      for(let i=0; i < blankSpaces.length; i++) {
        blankSpaces[i].index = i;
        inputCount = parseInt(e.target.index);

      }

      if(e.key === "Enter"){
        console.log("entered");
        if(inputCount>=blankSpaces.length-1){
          inputCount=-1;
        }
        blankSpaces[++inputCount].focus();
      }

    });
  //-------------------------------------------------------\\
  });

//live update, forth assignment
/*
function setupUpdater(){
 let inputOne=document.getElementsByTagName('input')[0];
 let divPreview=document.getElementsByClassName('forStory')[1];

 let oldText=inputOne.value;
 let timeout=null;
  function handleChange(){
  let newText=input.value;
  if (newText==oldText) return;
  else oldText=newText;
  set(divPreview, newText);
 }
 function eventHandler(){
  if(timeout) clearTimeout(timeout);
  timeout=setTimeout(handleChange, 50);
 }
  inputOne.onkeydown=inputOne.onkeyup=inputOne.onclick=eventHandler;
}
setupUpdater();
document.getElementsByTagName('input')[0].focus();


function set(el,text){
 while(el.firstChild)el.removeChild(el.firstChild);
 el.appendChild(document.createTextNode(text))}*/
//-------------------------------------------------------\\




/*
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *
 */


function parseStory(rawStory) {
  let madLibsAll = [];

let re =/([.,]|\b\w+\[(n|v|a|adv)\]|\b\w+\b)/g;
let items = rawStory.match(re);

let reForPunctuation=re =/[.,]/;
let reForMadLibz = /\b\w+\[(n|v|a|adv)\]/g;
let reForWords = /\b\w+\b/g;
reForWords.test("is");

for(let i = 0; i<items.length;i++){
  let objecT = {};
  if(reForPunctuation.test(items[i])){
   madLibsAll.push(createObjectWord(objecT, items[i]));

  }
  else if(reForMadLibz.test(items[i])){
    if(items[i].includes("[n]")){
      let item= items[i].substring(0, items[i].length-3);
      madLibsAll.push(createObjectWordAndPOS(objecT, item, "noun"));
    }
    else if(items[i].includes("[v]")){
      let item= items[i].substring(0, items[i].length-3);
      madLibsAll.push(createObjectWordAndPOS(objecT, item, "verb" ));
    }
    else if(items[i].includes("[a]")){
      let item= items[i].substring(0, items[i].length-3);
      madLibsAll.push(createObjectWordAndPOS(objecT, item,"adjective" ));
    }
    else{
      console.log("error in else");
    }
  }
  else if(reForWords.test(items[i])){
   madLibsAll.push(createObjectWord(objecT, items[i]));
  }
  else{
   // console.log("unlisted: "+ items[i])
    if(reForWords.test(items[i])){
          madLibsAll.push(createObjectWord(objecT, items[i]));
    }
  }
}
  return madLibsAll; // This line is currently wrong :)
}



function createObjectWord(obj, val){
  obj["word"]= val;
  //console.log(obj);
  return obj;
}
function createObjectWordAndPOS(obj, wordVal, posVal){
  obj["word"]= wordVal;
  obj["pos"]= posVal;
  //console.log(obj);
  return obj;
}



getRawStory().then(parseStory).then((processedStory) => {
//hikayeyi forma dönüiştürmetliy, inputlar ve paragraf içleri
    let edit = document.getElementsByClassName("forStory")[0];
    let preview=document.getElementsByClassName("forStory")[1];
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    edit.appendChild(p1);
    preview.appendChild(p2);

    var pEdit = document.querySelector(".forStory").getElementsByTagName("p")[0];

  for(let i =0;i<processedStory.length;i++){


    if(processedStory[i].pos==="adjective"|| processedStory[i].pos==="noun" ||processedStory[i].pos==="verb"){

      let val = processedStory[i].word;
      pEdit.innerHTML+=` <input class = "inputs" type="text" value = ${val}>`;

    }
    else if(processedStory[i].word==="."|| processedStory[i].word===","){

        let val = processedStory[i].word;
        pEdit.appendChild(document.createTextNode(val));
        document.querySelector(".forStory").appendChild(pEdit);

    }
    else{

      //console.log("maybe?!?!??")
       let val = processedStory[i].word;
      pEdit.appendChild(document.createTextNode(" "+val));
      document.querySelector(".forStory").appendChild(pEdit);
    }




  }
  /*
let entry = document.createElement("p");
entry.appendChild(document.createTextNode(içerik));
document.getElementById("solution").appendChild(entry);
*/



  console.log(processedStory);
});

//:enabled 	input:enabled 	Selects every enabled <input> element
//focus 	The event occurs when an element gets focus
