import {ruswords} from "./words.js";
let proverka=document.getElementById("proverka");
let newGame=document.getElementById("newGame");
// let words=["осьминог","чайник","магазин","казуальный","энциклопедия"];
let words=ruswords;
let symbols="";
let secretWord=words[Math.floor(Math.random()*words.length)]
let userInput=document.getElementById("userInput");
let usedLetter=document.getElementById("usedLetter")
let cypher=document.getElementById("cypher");
let imgNumber=0;
let img=document.getElementById("img");
let singleButton=document.getElementById("singleButton");
let multiplayer=document.getElementById("multiplayer");
let modeButton=document.getElementById("modeButton");
let modal=document.getElementsByClassName("modal")[0];
let modal2=document.getElementsByClassName("modal2")[0];
let addWord=document.getElementById("addWord");
let winAndLose=document.getElementById("winAndLose");
let single=true;

userInput.select();
console.log(words[2][2]);
cypher.innerHTML="*".repeat(secretWord.length);

function game(){
	userInput.value="";
	userInput.select();
	imgNumber=0;
	img.src="snowman"+imgNumber+".jpg";
	proverka.disabled=false;
	proverka.style.opacity=1;
    winAndLose.innerHTML="";
	cypher.innerHTML="*".repeat(secretWord.length);
    symbols="";
    usedLetter.innerHTML="Использованые буквы: ";
}

proverka.onclick=function(event){
	event.preventDefault();
	console.log( );
	let letter=userInput.value;
	userInput.value="";
	userInput.select();
	if (!symbols.includes(letter)) {
		if (symbols.length==0) {
			symbols=symbols+letter;
		}else{
			symbols=symbols+", "+letter;
		}
		usedLetter.innerHTML="Использованые буквы: "+symbols;
	}
	if (secretWord.includes(letter)) {
		console.log("верно");
		let newCypher="";
        for (let i=0; i<secretWord.length; i++){
          if (secretWord[i]==letter) {
          	newCypher=newCypher+letter;

          }else{
          	newCypher=newCypher+cypher.innerHTML[i];
          }
        }
        cypher.innerHTML=newCypher;
        if (!newCypher.includes("*")) {
        	proverka.disabled=true;
        	proverka.style.opacity=0.5;
			// cypher.innerHTML="ты отгадал слово: "+newCypher;
			winAndLose.innerHTML="ты выиграл "
        }
	}else {
		console.log("неверно");
        imgNumber=imgNumber+1;

        img.src="snowman"+imgNumber+".jpg";
        if (imgNumber==7) {
        	proverka.disabled=true;
			proverka.style.opacity=0.5;
			winAndLose.innerHTML="Ты проиграл. Загаданое слово: "+secretWord;
        }
	}
}
newGame.onclick=function(event){
	event.preventDefault();
	if (single){
		secretWord=words[Math.floor(Math.random()*words.length)];
		game();
	}else{
		modal2.style.display="block";
		addWordInput.select()
	}


} 
singleButton.onclick=function(event){
	event.preventDefault();
 modal.style.display="none";
 single=true;
 secretWord=words[Math.floor(Math.random()*words.length)];
 game();
 
}
modeButton.onclick=function(event){
	event.preventDefault();
    modal.style.display="block";
}
multiplayer.onclick=function(event){
	event.preventDefault();
	modal2.style.display="block"
	modal.style.display="none";
	addWordInput.value="";
	addWordInput.select();
	single=false;
}
addWord.onclick=function(event){
	event.preventDefault();
	modal2.style.display="none";
	
	secretWord=addWordInput.value.toLowerCase() || words[Math.floor(Math.random()*words.length)];
	game();

	addWordInput.value="";
}
modal.onclick=function(){
	modal.style.display="none";

}

modal.children[0].onclick=function(event){
event.stopPropagation();
}
modal2.onclick=function(){
	modal2.style.display="none";
}
modal2.children[0].onclick=function(event){
	event.stopPropagation();
}