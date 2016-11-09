$(function(){
   var ul1=$(".ul1");
   var ul2=$(".ul2");
   var flag=true;
   for(var i=0;i<ul1.length;i++){
   	     ul1[i].index=i;
   	     ul1[i].onclick=function(){
   	     	if(flag){
   	     		ul2[this.index].style.width="auto";
   	     		flag=false;
   	     	}else{
   	     		return flag=true;
   	     	}
   	     }
   }
})