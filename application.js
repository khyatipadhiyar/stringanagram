function checkString()

{
	var stringOne=document.getElementById('stringOne').value;
	var stringTwo=document.getElementById('stringTwo').value;

	var splitCharOne= stringOne.split("").sort().join("");
	var splitCharTwo= stringTwo.split("").sort().join("");


	console.log(splitCharOne);
	console.log(splitCharTwo);

	//var uniqueCharOne=uniqueCharacter(splitCharOne);
	//var uniqueCharTwo=uniqueCharacter(splitCharTwo);
	//console.log(uniqueCharOne);
	//console.log(uniqueCharTwo);

	var msg;

	if(splitCharOne!=splitCharTwo)
	{
		msg="Strings Are Not Anagaram !";

	}else
	{
		
		msg="String Are Anagaram !";

	}
	document.getElementById('demo').innerHTML=msg;
}

// following is for returning unique charcter of string
// not useing in code, just for experiment

function uniqueCharacter(str1)
{
	var str=str1;
	var unique="";

	for (var i = 0; i<str.length; i++)
	{
		if(unique.indexOf(str.charAt(i))==-1)
		{
			unique=unique+str[i];

		}
	} 
	return unique;
}