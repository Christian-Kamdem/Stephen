document.addEventListener("DOMContentLoaded",()=>{init();}
,false);
function init(){
	const micro = document.getElementById("micro");
	//Micro events handler
		micro.addEventListener("mouseenter",(e)=>{
			if(e.target.id === "micro"){
				requestAnimationFrame(()=>{
					micro.innerHTML = '<img src="Images/microWhite.svg"/>';
					micro.style.backgroundColor = "#91dc5a";
				});
			}else{
				e.stopPropagation();
			}
		},false);
		micro.addEventListener("mouseleave",(e)=>{
		if(e.target.id === "micro"){
			requestAnimationFrame(()=>{
				micro.style.backgroundColor = "white";
				micro.innerHTML = '<img src="Images/micro2.svg"/>';
			});
		}else{
			e.stopPropagation();
		}
	},false);
}