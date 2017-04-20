

	var striker1=document.getElementById("striker1");
	var striker2=document.getElementById("striker2");
	var ballel=document.getElementById("ball");
	var tableel=document.getElementById("table");
	var amatuer=document.getElementById("amatuer");
	var pro=document.getElementById("pro");
	var ninja=document.getElementById("ninja");
	var slow=document.getElementById("slow");
	var medium=document.getElementById("medium");
	var fast=document.getElementById("fast");
	var begin=document.getElementById("begin");
	var reset=document.getElementById("reset");
	var scoreplayer1=0;
	var scoreplayer2=0;
	var score1el=document.getElementById("scoreValue1");
	var score2el=document.getElementById("scoreValue2");

	striker2.style.top=310;
	striker1.style.top=310;
	ballel.style.left=610;
	ballel.style.top=332;
	striker1.style.left=180;
	striker2.style.left=1080;
	score1el.innerHTML=scoreplayer1;
	score2el.innerHTML=scoreplayer2;
	var lengthstrikers=90;
	var margtop1=striker1.style.top;
	var margtop2=striker2.style.top;
	var margleft1=striker1.style.left;
	var margleft2=striker2.style.left;
	var ballleft=ballel.style.left;
	var balltop=ballel.style.top;
    	var ballright=ballleft+50;
	var right1=margleft1+30 
	var bottom2=margtop2+lengthstrikers;
	var bottom1=margtop1+lengthstrikers;
	var ballbottom=balltop+40;

	var topline=152;
	var bottomline=553;
	var leftupid;
	var leftdownid;
	var rightupid;
	var rightdownid;

	var x;
	var y;
	var id;
	var time=30;
	var flag=0;
	var map={87:false,83:false,38:false,40:false,13:false,82:false };

	var leftArrowUp=document.getElementById("leftArrowUp");
	var leftArrowDown=document.getElementById("leftArrowDown");
	var rightArrowUp=document.getElementById("rightArrowUp");
	var rightArrowDown=document.getElementById("rightArrowDown");

	leftArrowUp.addEventListener("mousedown",leftStrikerUpGenerator);
	leftArrowUp.addEventListener("mouseup",leftStrikerUpDestroyer);

	leftArrowDown.addEventListener("mousedown",leftStrikerDownGenerator);
	leftArrowDown.addEventListener("mouseup",leftStrikerDownDestroyer);

	rightArrowUp.addEventListener("mousedown",rightStrikerUpGenerator);
	rightArrowUp.addEventListener("mouseup",rightStrikerUpDestroyer);

	rightArrowDown.addEventListener("mousedown",rightStrikerDownGenerator);
	rightArrowDown.addEventListener("mouseup",rightStrikerDownDestroyer);


	
	document.addEventListener('keydown',func);
	document.addEventListener('keyup',func2);


	amatuer.addEventListener("click",amatuerfunc);
	pro.addEventListener("click",profunc);
	ninja.addEventListener("click",ninjafunc);
	slow.addEventListener("click",slowfunc);
	medium.addEventListener("click",mediumfunc);
	fast.addEventListener("click",fastfunc);
	begin.addEventListener("click",beginfunc);
	reset.addEventListener("click",resetfunc);


function getallvalues()
{
	margtop2=striker2.style.top;
	margtop2 = margtop2.replace("px", " ");           //remove px
    margtop2 = parseInt(margtop2);
    margtop1=striker1.style.top;
    margtop1 = margtop1.replace("px", " ");           //remove px
    margtop1 = parseInt(margtop1);

    margleft1=striker1.style.left;
    margleft1=margleft1.replace("px", " ");
    margleft1 = parseInt(margleft1);

    margleft2=striker2.style.left;
    margleft2=margleft2.replace("px", " ");
    margleft2 = parseInt(margleft2);
		
	ballleft=ballel.style.left;
	ballleft = ballleft.replace("px", " ");           //remove px
    ballleft = parseInt(ballleft);
	
	balltop=ballel.style.top;
    balltop = balltop.replace("px", " ");           //remove px
    balltop = parseInt(balltop);

    ballright=ballleft+50;

	ballbottom=balltop+40;

	right1=margleft1+30 ;
	
	bottom2=margtop2+lengthstrikers;

	bottom1=margtop1+lengthstrikers;


}

function leftStrikerUpGenerator(){
	leftupid=setInterval(leftStrikerUpFunc,50);
}

function leftStrikerUpDestroyer(){
	if(leftupid)
	clearInterval(leftupid);
}

function leftStrikerUpFunc()
{
	
	getallvalues();
	if (margtop1> topline)
    {	
		striker1.style.top=(margtop1 - 20 )+ "px";
	}

	else
	{
		if(leftupid)
		clearInterval(leftupid);
	}	
}

function leftStrikerDownGenerator(){
	leftdownid=setInterval(leftStrikerDownFunc,50);
}

function leftStrikerDownDestroyer(){
	if(leftdownid)
	clearInterval(leftdownid);
}

function leftStrikerDownFunc()
{
	getallvalues();
	if(lengthstrikers==50 || lengthstrikers==70)   
	{
		if (bottom1<bottomline)
	    {
			striker1.style.top=(margtop1 + 20 )+ "px";
		}

		else
		{
			if(leftdownid)
			clearInterval(leftdownid);
		}	
	}
			
	else if(lengthstrikers==90)
	{
		if (bottom1<bottomline-1)
	    {
			striker1.style.top=(margtop1 + 20 )+ "px";
		}
		else
		{
			if(leftdownid)
			clearInterval(leftdownid);
		}		
	}
}

function rightStrikerUpGenerator()
{	
	rightupid=setInterval(rightStrikerUpFunc,50);
}

function rightStrikerUpDestroyer()
{	if(rightupid)
	clearInterval(rightupid);
}

function rightStrikerUpFunc()
{	
	getallvalues();
	if (margtop2>topline)
    {	
		striker2.style.top=(margtop2 - 20 )+ "px";
	}	

	else
	{
		if(rightupid)
		clearInterval(rightupid);
	}	
}

function rightStrikerDownGenerator()
{
	rightdownid=setInterval(rightStrikerDownFunc,50);
}

function rightStrikerDownDestroyer()
{	if(rightdownid)
	clearInterval(rightdownid);
}
function rightStrikerDownFunc()
{
	getallvalues();
	if(lengthstrikers==50 || lengthstrikers==70)
	{	
		if (bottom2<bottomline)
		{
			striker2.style.top=(margtop2 + 20 )+ "px";
		}

		else
		{
			if(rightdownid)
			clearInterval(rightdownid);
		}		
	}	
	else if(lengthstrikers==90)
	{
		if (bottom2<bottomline-1)
		{
			striker2.style.top=(margtop2 + 20 )+ "px";
		}	

		else
		{
			if(rightdownid)
			clearInterval(rightdownid);
		}	
	}
}

function positionagain()
{
	ballel.style.left=610;
	ballel.style.top=332;
	striker2.style.top=332;
	striker1.style.top=332;
	striker1.style.left=180;
	striker2.style.left=1080;

	getallvalues();
	flag=0;
}

function amatuerfunc()
{
	amatuer.style.backgroundColor="yellow";
	ninja.style.backgroundColor="transparent";
	pro.style.backgroundColor="transparent";
	positionagain();
	lengthstrikers=90;
	striker1.style.height=90;
	striker2.style.height=90;
	getallvalues();
	clearInterval(id);
}	

function profunc()
{	
	pro.style.backgroundColor="yellow";
	amatuer.style.backgroundColor="transparent";
	ninja.style.backgroundColor="transparent";
	positionagain();
	lengthstrikers=70;
	striker1.style.height=70;
	striker2.style.height=70;
	getallvalues();
	clearInterval(id);
}	

function ninjafunc()
{
	ninja.style.backgroundColor="yellow";
	pro.style.backgroundColor="transparent";
	amatuer.style.backgroundColor="transparent";
	positionagain();
	lengthstrikers=50;
	striker1.style.height=50;
	striker2.style.height=50;
	getallvalues();
	clearInterval(id);
}

function slowfunc()
{
	medium.style.backgroundColor="transparent";
	fast.style.backgroundColor="transparent";
	slow.style.backgroundColor="yellow";
	time=80;
	positionagain();
	getallvalues();
	clearInterval(id);
}

function mediumfunc()
{
	slow.style.backgroundColor="transparent";
	fast.style.backgroundColor="transparent";
	medium.style.backgroundColor="yellow";
	time=30;
	positionagain();
	getallvalues();
	clearInterval(id);
	
}

function fastfunc()
{
	slow.style.backgroundColor="transparent";
	medium.style.backgroundColor="transparent";
	fast.style.backgroundColor="yellow";
	time=20;
	positionagain();
	getallvalues();
	clearInterval(id);
	
}

function beginfunc()
{	
	if(flag==0)
	{
		getallvalues();
		var random = Math.floor(Math.random() * 4);
			flag=1;
			if(random == 0)
				{ y = 10;
		 		  x = 10;
				}
			else if(random == 1)
				{ y = -10;
				  x = 10;
				}
			else if(random == 2)
				{ y =10;
				  x = -10;
				}
			else if(random == 3)
				{ y = -10;
				  x = -10;
				}
			
		id=setInterval(move, time);
	}	
}

function func(event)
{
	event.preventDefault();
	getallvalues();
	
	if (event.keyCode in map) {
        map[event.keyCode] = true;
	}

	

	if(map[40]==true && map[38]==false)			//downarrow and not uparrow
	{
		rightStrikerDownFunc();

		if(map[87]==true && map[83]==false)		//w pressed along withdownarrow & not uparrow & not s
		{
			leftStrikerUpFunc();
		}

		else if(map[83]==true && map[87]==false) //s pressed along withdownarrow & not uparrow & not w
		{
			leftStrikerDownFunc();
		}
	}

	if(map[38]==true && map[40]==false)	//uparrow and not downarrow
	{
		rightStrikerUpFunc();

		if(map[87]==true && map[83]==false)		//w pressed along withdownarrow & not uparrow & not s
		{
			leftStrikerUpFunc();
		}

		else if(map[83]==true && map[87]==false) //s pressed along withdownarrow & not uparrow & not w
		{
			leftStrikerDownFunc();
		}
	}


	if(map[87]==true && map[83]==false)		//w and not s
	{

		leftStrikerUpFunc();
		
		if(map[38]==true && map[40]==false)		//uparrow pressed along with w & not downarrow & not s
		{
			rightStrikerUpFunc();
		}

		else if(map[40]==true && map[38]==false) //downarrow pressed along with w & not uparrow & not s
		{
			rightStrikerDownFunc();
		}

	}	

	if(map[83]==true && map[87]==false)		//s and not w
	{

		leftStrikerDownFunc();
		
		if(map[38]==true && map[40]==false)		//uparrow pressed along with s & not downarrow & not w
		{
			rightStrikerUpFunc();
		}

		else if(map[40]==true && map[38]==false) //downarrow pressed along with s & not uparrow & not w
		{
			rightStrikerDownFunc();
		}

	}	


	else if(map[13]==true && flag===0)	//enter key pressed
	{
		beginfunc();
		
	}

	else if(map[82]==true)	//if r key is pressed 
	{
		resetfunc();
	}

	
}

function func2(event)
{
	 if (event.keyCode in map) {
        map[event.keyCode] = false;
    }

}
function move()
	{	
		getallvalues();
		
		
		if(ballbottom>(bottomline) || balltop<(topline+10))
		{
			y=-y;

		}	

		if (ballright > margleft2 +12 )
		{
			if(collisionRight()==true)
			{	
				clearInterval(id);
				id=null;
				positionagain();
				if (scoreplayer1<50)
					scoreplayer1+=10;

				score1el.innerHTML=scoreplayer1;
				score2el.innerHTML=scoreplayer2;
				if(scoreplayer1==50)
					{ alert("PLAYER1 WINS!");
					   resetfunc();	
					}

			}
			else if (collisionRight()==false)
				x=-x;		
		}

		if(ballleft < right1 -12)
		{
			if(collisionLeft()==true)
			{	
				clearInterval(id);
				id=null;
				positionagain();
				if (scoreplayer2<50)
					scoreplayer2+=10;
				score1el.innerHTML=scoreplayer1;
				score2el.innerHTML=scoreplayer2;
				if(scoreplayer2==50)
					{ alert("PLAYER2 WINS!");
					  resetfunc();	
					}
			}	
			else if (collisionLeft()==false)
				x=-x;
		}
		
		ballel.style.top=(balltop + y )+ "px";

		ballel.style.left=(ballleft + x )+ "px";


	}


function collisionLeft()
{	
	getallvalues();
	
    if(margtop1 > ballbottom || balltop>bottom1)
	{
		return true;
	}	
	else
	{
		return false;
	}

}

function collisionRight()
{	

	getallvalues();
	
	if(margtop2 > ballbottom || balltop>bottom2)
    	return true;

	else
		return false;
	
}	

function resetfunc()
{
	positionagain();
	clearInterval(id);
	scoreplayer1=0;
	scoreplayer2=0;
	score1el.innerHTML=scoreplayer1;
	score2el.innerHTML=scoreplayer2;
	mediumfunc();
	amatuerfunc();

}


