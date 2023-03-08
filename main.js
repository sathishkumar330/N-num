let array=[1,6,7,3,5,9,2];
temp=[];

let n=parseInt(prompt("enter the index"));
function nsmall(array,n){
	for(i=0;i<array.length;i++){
		
		for(j=i+1;j<array.length;j++){
			
		if(array[i]>array[j]){
			
			temp=array[j];
			array[j]=array[i];
			array[i]=temp;
		}
	}
	//console.log(array[i]);
}
let small=array[n-1]

return small;
}
console.log(nsmall(array,n));