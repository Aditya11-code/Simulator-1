var width = 100;
var ret=[];
function startCode(){
	var num = Number(document.getElementById('number').value);
	width = width/(num) ;
	if(Number.isNaN(num) || typeof num ==='string' || num<=0 || num>20 )
		alert("Input Field is invalid");
	else{
		document.getElementById('start').disabled = true;
		document.getElementById('start').style.backgroundColor ="#d6d6d6";
		document.getElementById('next').disabled = false;
		document.getElementById('next').style.backgroundColor ="#229954";
		document.getElementById("shw-n").style.visibility='visible';
		document.getElementById("shw-n").innerHTML = num;
		main();
	}
}
function fib(n){
	id.push('one');
	if(n <= 1){
		id.push('two');
		return n;
	}
	else if(n === 2){
		id.push('three');
		return 1;
	}
	else{
		id.push('four');
		ret.push([(n-2),(n-1)]);
		console.log((n-2),(n-1));
		return fib(n-2) + fib(n-1);
	}
}
var array=[],n,cf=0;
function main(){
	var num = Number(document.getElementById('number').value);
	var i, fibonacci;
	console.log('main');
	for(i=1; i<=num; i++){		
		id.push('eight');
		id.push('nine');
		fibonacci = fib(i);		
		array.push(fibonacci);
		id.push('ten');
	}
	id.push("eleven");
	id.push("twelve");
}
var count=0, id=['include','functionDef','five','six','seven'], countnine=0;
function hightlight(){
	var num = Number(document.getElementById('number').value);
	for(var i=0;i<count;i++){
		document.getElementById(id[i]).style.color='black';
	}
	if(count<id.length){
		document.getElementById(id[count]).style.color = 'red';
		console.log(count,id[count]);
		if(id[count]=='six'){
			document.querySelector(".nab").style.visibility = "visible";
			//document.getElementById("id").style.visibility = "visible";
		}		
		if(id[count]=='seven'){
			document.getElementById("inputField").style.display = "block";
			document.getElementById('start').disabled = false;
			document.getElementById('start').style.backgroundColor ="#0D85C9";
			document.getElementById('next').disabled = true;
			document.getElementById('next').style.backgroundColor ="#d6d6d6";
		}
		if(id[count]=='two') document.querySelector('#outerStack').innerHTML += "<div class='stack'>"+1+"<br>";		
		if(id[count]=='three') document.querySelector('#outerStack').innerHTML += "<div class='stack'>"+1+"<br>";
		if(id[count]=='four'){
			document.querySelector('#outerStack').innerHTML += "<div class='stack'>fib("+(ret[cf][1])+")<br>";
			document.querySelector('#outerStack').innerHTML += "<div class='stack'>fib("+(ret[cf][0])+")<br>";
			cf++;
		}
		if(id[count]=='eight') {
			document.querySelector('#outerStack').innerHTML = "";
			document.querySelector('#outerStack').innerHTML = "";
		}
		if(id[count]=='ten'){
			if(countnine > 1){
				var cont = document.querySelector(".cont");
				document.getElementById("next").disabled = true;
				cont.innerHTML += '<div class="some" style = "width:'+width+'%"><div class="fib">Fib('+(countnine+1)+')</div><div class="a"><b>fib('+(countnine - 1)+')</b></div>	<div class="b"><b>fib('+(countnine)+')</b></div><div class="c cee"><b>'+array[countnine]+'</b></div>	</div>';

				document.getElementById("shw-a").innerHTML = "fib("+(countnine - 1)+") = "+ array[countnine - 2];
				document.getElementById("shw-b").innerHTML = "fib("+(countnine)+") = "+ array[countnine - 1];
				if(num <= 6){
					document.querySelector(".a").style.animation = "down 1s";
					document.querySelector(".b").style.animation = "up 1s";
				}else if (num > 6 && num < 11){
					document.querySelector(".a").style.animation = "downnine 1s";
					document.querySelector(".b").style.animation = "upnine 1s";
				}
				else{
					document.querySelector(".a").style.animation = "downfif 1s";
					document.querySelector(".b").style.animation = "upfif 1s";
				}
				setTimeout(function (){
					document.querySelector(".a").remove();
					document.querySelector(".b").remove();
					document.querySelector(".cee").style.visibility = "visible";
					document.querySelector(".cee").classList.remove("cee");
					document.getElementById("next").disabled = false;
				},1000);

			}
			else{
				var cont = document.querySelector(".cont");
				document.getElementById("next").disabled = true;
				if(countnine==0){
					document.getElementById("sa").style.display='block';
					document.getElementById("shw-a").innerHTML = "fib("+(countnine + 1) +") = "+ array[countnine];
				}
				else{
					document.getElementById("sb").style.display='block';
					document.getElementById("shw-b").innerHTML = "fib("+(countnine + 1 )+") = "+ array[countnine];
				}
				cont.innerHTML += '<div class="some" style = "width:'+width+'%"><div class="fib">Fib('+(countnine+1)+')</div>  <div class="c cee"><b>'+array[countnine]+'</b></div>	</div>';
				setTimeout(function (){
					document.getElementById("next").disabled = false;
					document.querySelector(".cee").style.visibility = "visible";
					document.querySelector(".cee").classList.remove("cee");
				},500);
			}
			document.getElementById('res').innerHTML += array[countnine++];
		}
		count++;
	}
	if(count==id.length){
		document.getElementById('next').disabled = true;
		document.getElementById('next').style.backgroundColor = "#d6d6d6";
		//alert('End of function');
		var code = document.getElementById('code');
		var div = code.getElementsByTagName('div');
		for(var i=0;i<div.length;i++){
			div[i].style.color='black';
		}
	}
}
function formula (){
	var formulaCont = document.getElementById("form");
	if(formulaCont.style.display === "block"){
		formulaCont.style.display = "none";
	}
	else {
		formulaCont.style.display = "block";
	}
}
