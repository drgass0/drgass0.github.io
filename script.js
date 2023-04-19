function showMore(){ 
	let moreDiv=document.getElementById("ptwo"); 
	let link=document.getElementById("showtext"); 
	
	if (link.innerHTML=="Show more..."){ 
		moreDiv.classList.remove("hidden"); 
		link.innerHTML="Show less..."; 
	}else {
		moreDiv.classList.add("hidden"); 
		link.innerHTML="Show more..."; 
	} 
}


function showResults(){
	let question1=document.getElementById("q1-ans");
	let q1ans=question1.value; 
	let question2=document.getElementById("q2-ans");
	let q2ans=question2.value; 
	let question3=document.getElementById("q3-ans");
	let q3ans=question3.value; 
	let question4=document.getElementById("q4-ans");
	let q4ans=question4.value; 
	let resultDiv=document.getElementById("result"); 
	let total=0; 
	if (q1ans=="p"){
		total+=1;
		resultDiv.innerHTML+="question 1:correct"+"<br>"; } 
	else{ 
		resultDiv.innerHTML+="question 1:incorrect"+"<br>"; } 
		if (q2ans=="4"){
		total+=1;
		resultDiv.innerHTML+=" question 2:correct"+"<br>"; } 
	else{ 
		resultDiv.innerHTML+=" question 2:incorrect"+"<br>"; } 
		if (q3ans=="styles.css"){
		total+=1;
		resultDiv.innerHTML+=" question 3:correct"+"<br>"; } 
	else{ 
		resultDiv.innerHTML+=" question 3:incorrect"+"<br>"; } 
			if (q4ans=="all lowercase"){
		total+=1;
		resultDiv.innerHTML+=" question 4:correct"+"<br>"; } 
	else{ 
		resultDiv.innerHTML+=" question 4:incorrect"+"<br>"; } 
}

setInterval(changeSlide, 10000); 
function changeSlide(){ 
	let corgi=document.getElementById("corgi");
	let city=document.getElementById("city");
	let cheer=document.getElementById("cheer");
	let church=document.getElementById("church");
	if (!corgi.classList.contains("hidden")){ 
		corgi.classList.add("hidden"); 
		church.classList.remove("hidden"); 
	} 
	else if(!church.classList.contains("hidden")){ 
		church.classList.add("hidden"); 
		cheer.classList.remove("hidden"); 
	} 
	else if(!cheer.classList.contains("hidden")){ 
		cheer.classList.add("hidden"); 
		city.classList.remove("hidden"); 
	} 
	else{
			city.classList.add("hidden");
			corgi.classList.remove("hidden"); 
	}
		
} 