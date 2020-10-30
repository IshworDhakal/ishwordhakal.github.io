
//.gallery.item.filter
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;
console.log(items)
for(let i=0; i<filterButtons.length; i++){
	filterButtons[i].addEventListener("click",function(){
		for(let j=0; j<filterButtons.length; j++){
			filterButtons[j].classList.remove("active")
		}
		this.classList.add("active");
		const target=this.getAttribute("data-target")

		for(let k=0; k<items.length; k++){
			items[k].style.display="none";
			if(target==items[k].getAttribute("data-id"))
			 {
			 	items[k].style.display="block";
	
			}
			if(target=="all"){
				items[k].style.display="block";
			}
			
		}



	})
}
// lightbox

const closeLightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lightboxImage=lightbox.querySelector("img")


closeLightbox.addEventListener("click",function(){
	lightbox.classList.remove("show");
	lightbox.classList.add("hide");
})
const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
	element.querySelector(".fa-plus").addEventListener("click",function(){
    lightbox.classList.remove("hide");
     lightbox.classList.add("show");
     lightboxImage.src=element.querySelector("img").getAttribute("src")
     })
})
// navbar links

const navbar = document.querySelector(".navbar");
       a=navbar.querySelectorAll("a");

       a.forEach(function(element){
       	element.addEventListener("click",function(){
       		for(let i=0; i<a.length; i++){
       		a[i].classList.remove("active");
       	}
       		this.classList.add("active")

       		})
       	})

       // ham-burger
       const hamBurger=document.querySelector(".ham-burger")

       hamBurger.addEventListener("click",function(){
       	   document.querySelector(".navbar").classList.toggle("show");
       })
       // contact
       
	function validateForm() {
		var fname = document.forms["messageForm"]["fname"].value;
		var lname = document.forms["messageForm"]["lname"].value;
		var address = document.forms["messageForm"]["address"].value;
		var comment = document.forms["messageForm"]["comment"].value;
		
		if (fname =="" ||lname =="" ||address =="" ||comment =="") {
			alert("Please fill the field");
		}else{
			
			alert("Thank you "+fname+" "+lname);
			alert("Your details: "+
				"Firstname: "+fname+" "+
				"Lastname: "+lname+" "+
				"Address: "+address+" "+
				"Comment: "+ comment);
		}
	}
       	
       	

       
   