
let box = document.getElementById('main_div')





let arr = [

	{nkar:"https://www.mobilecentre.am/img/prodpic/114231.jpg",name:"iphone11",},

	{nkar:"https://www.mobilecentre.am/img/prodpic/114231.jpg",name:"iphone11",},

	{nkar:"https://www.mobilecentre.am/img/prodpic/114231.jpg",name:"iphone11",},

	{nkar:"https://www.mobilecentre.am/img/prodpic/114231.jpg",name:"iphone11",},

	{nkar:"https://www.mobilecentre.am/img/prodpic/114231.jpg",name:"iphone11",},

	{nkar:"https://www.mobilecentre.am/img/prodpic/114231.jpg",name:"iphone11",},

	{nkar:"https://www.mobilecentre.am/img/prodpic/114231.jpg",name:"iphone11",},

	{nkar:"https://www.mobilecentre.am/img/prodpic/114231.jpg",name:"iphone11",},






]

for (let i = 0; i < arr.length; i++) {

	let div = document.createElement("div")

	div.className = "div"


	let img = document.createElement("img")

	img.src=arr[i].nkar


	div.append(img)

	document.getElementById("main_div").append(div)

	let h3 = document.createElement("h3")

	h3.innerHTML = "IPHONE 11"

	div.append(h3)

	let h4 = document.createElement("h4")

	h4.innerHTML = "Green,256GB,8GB/RAM"

	div.append(h4)

	let h5 = document.createElement("h5")

	h5.innerHTML = "260.000AMD"

	div.append(h5)








 


}


















