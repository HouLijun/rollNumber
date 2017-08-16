$(function(){
	var numberList=$(".rollNumber");
	var date="20170816";
	var arr=[];
	for(var i=0;i<date.length;i++){
		arr.push(date.substr(i,1));
	}
	for(var j=0;j<numberList.length;j++){
		animateNumber(numberList[j],arr[j],0.51);
	}
	function animateNumber(ele,num,step){
		$(ele).animate({"backgroundPositionY":-num*step+"rem"},1000);
	}
})
