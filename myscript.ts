// main class location

class Location{

	constructor(name,adress,zip,discription,img,data){
		this.name= name;
		this.adress= adress;
		this.zip=zip;
		this.discription=discription;
		this.img=img;
		this.data=data;
	}

 output(){

// create my Html elements with the output method
		main.innerHTML +=`<div class=" card col-sm-12 col-md-5 col-lg-3">
        	<img class="bild card-img-top" width="100%" height="250px" src="${this.img}" alt="">
        	<div class="card-body">
        	<h2 class="text-center ">${this.name}<h2>
        	<p class=" adress h5 ml-4 text-dark" >${this.adress} <br> ${this.zip} </p4 m-2
        	<p class="ml-4 text-dark">${this.discription}</p>
        	<p class="para h5 ml-4 ">${this.data}</p>
        	</div>
   
        </div>`;
	}

} 
// Location array with 6 different locations
let arr=[ new Location("Statue of Liberty","New York","NY 10004","Built in 1886, it remains a famous world symbol of freedom and one of the greatest American icons.","img/liberty.jpg","450,000 pounds"),
new Location("CentralPark","New York","NY","This huge park in the city center, a half-mile wide and 2.5 miles long, is one of the things that makes New York such a beautiful and livable city.","img/centralpark.jpg","2.5 miles long"),
new Location("Rockefeller Center","New York","NY 10111","When it comes to New York attractions, Rockefeller Center is on almost all tourist's itineraries.","img/Rockfellercenter.jpg","70th floors"),
new Location("Metropolitan Museum of Art","1000 5th Ave","NY 10028","The Metropolitan Museum of Art, or the Met, as it is commonly known, was founded in 1870, and is one of the most famous museums in the United States.","img/museum.jpg","period of 5,000 years"),
new Location("Empire State Building","20 W 34th St","NY 10001","The Empire State Building is one of New York's most famous landmark buildings and key tourist attractions.","img/empire.jpg","opened in 1931"),
new Location("Times Square","Broadway and 7th Avenue","NY","Lined with huge, brilliantly lit billboards and screens, Times Square is the place to go in New York in the evening, but still exciting at any time of day.","img/square.jpg"," named in 1904")	 
]

// for loop to show all elements from array location
for(one of arr){
	one.output();}

// child class restaurant 
class Restaurant extends Location{
	constructor(name,adress,zip,discription,img,data,tel){
		super(name,adress,zip,discription,img,data);
		this.tel= tel;
	}	
}

// second array with 6 different restaurants
let arr2=[ new Location("Katz","205 East Houston Street","NY 10002","In 1888 a small deli by the name of Iceland Brothers was established on Ludlow Street in New York’s Lower East Side by the Iceland brothers.","img/katz.jpg","+1 212-254-2246"),
		new Location("Daniel","60 E 65th St","NY 10065","Since opening in 1993, DANIEL has earned its place among the pillars of New York City’s bustling dining scene","img/daniel.jpg","+1 212-288-0033"),
		new Location("Tree Bistro","190 1st Avenue #4004","NY 10009","Tree serves thoughtfully prepared bistro fare in a casual romantic atmosphere,","img/treebistro.jpg","+1 212-358-7171"),
		new Location("The Modern","9 W 53rd St","NY 10019","The Modern is a two Michelin-starred, contemporary American restaurant at the Museum of Modern Art.","img/modern.jpg","+1 212-333-1220"),
		new Location("Ribalta","48 E 12th St","NY 10003","Rosario and Pasquale have brought Naples into the heart of New York to make you experience","img/ribalta.jpg","+1 212-777-7781"),
		new Location("Aqua","210 Spring St","NY 10012","Featuring 25 oyster varieties daily, exotic delicacies, and highlighting fish and seafood bounties from the clean waters and oceans found locally and around our country.","img/aqua.jpg","+1 212-274-0505")
]
// for loop for my second array to show all restaurants
for(two of arr2){
	two.output();}

// child class events
class Events extends Location{
	constructor(name,adress,zip,discription,img,data,date){
		super(name,adress,zip,discription,img,data);
		this.date= date;
	}	
}

// third array with 6 different events
let arr3=[ new Location("Trampled of Turtels","61 WYTHE AVENUE","NY 11249","Trampled by Turtles are from Duluth, Minnesota, where frontman Dave Simonett initially formed the group as a side project in 2003","img/tramplet.jpg","30.Oktober 2019"),
		new Location("Lion King","Minskoff Theatre","NY","More than 85 million people around the world have come to discover the thrill, the majesty, the truly one-of-a-kind musical that is THE LION KING","img/lionking.jpg","02.November 2019"),
		new Location("Salon du chocolat","Javits Center","NY","It’s a perfect event for family fun, a group experience, a unique date destination, or just some invaluable “me” time to discover exclusive vendors not available anywhere else","img/chocolate.jpg","17.-19.November 2019"),
		new Location("Christmas spectacular","1260 Avenue of the Americas","NY 10020","Radio City Christmas Spectacular features dancers, drones, fireworks, and a flying Santa at Radio City Music Hall.","img/christmas.jpg","8.November 2019 - 5.Jänner 2020"),
		new Location("Thanks Giving day","Central Park West and 6th Avenue","NY","Watch giant balloons, floats, marching bands, clowns, and performers as Macy’s Thanksgiving Day Parade.","img/tgd.jpg","28.November 2019"),
		new Location("Big apple circus","Lincoln Center","NY","The famous Big Apple Circus has high-wire aerialists, acrobats, jugglers, clowns, contortionists, rescue animals","img/bigapple.jpg","01.November 2019 - 20.Jänner 2020")
]
// for loop for my third array to show all events
for(three of arr3){
	three.output();}

// choose option with if schleife
$("#choose").on ("change",function () {
	if (this.value == "begin"){
		$(`#main`).empty();
// all 3 array to show at the begin 		
	for(three of arr3){
		three.output();}

	for(two of arr2){
		two.output();}

	for(one of arr){
		one.output();}
	}
// if click on location show only locations	
else if (this.value == "location"){ 
	$(`#main`).empty();

	for(one of arr){
		one.output();}
} 
// if click on location show only restaurants	
else if (this.value == "restaurants"){ 
	$(`#main`).empty();

	for(two of arr2){
		two.output();}
} 
// if click on location show only events
else if (this.value == "events"){ 
	$(`#main`).empty();
	for(three of arr3){
		three.output();}
} 
// if nothing happens than show arr 1
else{
	$(`#choose`).empty();
	for(one of arr){	
		one.output();}
}
})

// search function
$("#btn").on("click",function(){
	var input=$("#search").val();
	// 3 results because of my 3 arrays 
	result =[];
	result1 =[];
	result2=[];
	// filter to search for a letter for example 
	result= arr.filter(x => x.name.toLowerCase().startsWith(input.toLowerCase()));
	result1= arr2.filter(x => x.name.toLowerCase().startsWith(input.toLowerCase()));
	result2= arr3.filter(x => x.name.toLowerCase().startsWith(input.toLowerCase()));
 // 3for loops for the results and the output
for(one of result){
	$(`#main`).empty();
soutput(result);}

for(one of result1){
	$(`#main`).empty();
soutput(result1);}

for(one of result2){
	$(`#main`).empty();
soutput(result2);}

// function output and create html 
 function soutput(){

		main.innerHTML +=`<div class=" card col-sm-12 col-md-5 col-lg-3">
        	<img class="bild card-img-top" width="100%" height="250px" src="${one.img}" alt="">
        	<div class="card-body">
        	<h2 class="text-center">${one.name}<h2>
        	<p class=" adress h5 ml-4 text-dark">${one.adress} <br> ${one.zip} </p4 m-2
        	<p class="h5 ml-4 text-dark">${one.discription}</p>
        	<p class="para ml-4 ">${one.data}</p>
        	</div>
   
        </div>`;
	}
})
