$(document).ready(function(){
  
function AddressBook(){
    
	var contactList = [];
   	
	this.addContact = function(contact){
		contactList.push(contact); 
	};
	
	this.deleteContact = function(cellnumber){ 

		for(i = 0; i < contactList.length; i++){
            		if(contactList[i]['cellNumber'] == cellnumber){
                		var index = i
            		}
        	}
		
		contactList.splice(index, 1);   
	};
	
	this.print = function(){
		console.log(contactList);	
	}; 
    
        this.Find = function(Needed){
        
	var answer = contactList.filter(function(x){

        for(var field in x){
    		
		    if(x[field] === Needed){
    	        return x[field];   
		    }  
	   }
       
        }); 
        
	return(answer);
    	};
};

function Contact(firstName, lastName, cellProvider, cellNumber){
    	this.firstName = firstName;
	this.lastName = lastName;
	this.cellProvider = cellProvider;
	this.cellNumber = cellNumber;
	};

Contact.prototype.toString = function(){
	return this.firstName + " "+ this.lastName + ": " + this.cellNumber;
}
 

var yellowPages = new AddressBook();

console.log("We are ready!");	

$("#add").click(function(){ 

	var contact1 = new Contact($("#firstname").val(),$("#lastname").val(),$("#cellprovider").val(),$("#cellnumber").val());
		
	yellowPages.addContact(contact1);
	
	$("#numbers").append("<div class='AddedContacts'>"+contact1 +" "+ "<a href='#/"+ contact1.cellNumber + "' class='remove_field'>Delete</a>"+"</div>") 
	
	$("#searchBox").animate({height: "+=25px"},'fast'); 

	$("#container").animate({height: "+=25px"},'fast'); 

	$("#firstname").val(""); 
	$("#lastname").val("");  
	$("#cellprovider").val("");  
	$("#cellnumber").val(""); 

	yellowPages.print();		 

	}); 

$('#numbers').on('click', '.remove_field',function(){

	$(this).parent('div').remove() 

	var id = $(this).attr("href"); 

	var id2 = (id.substring(2,id.length)); 

	alert("Contact has been deleted!") 

	yellowPages.deleteContact(id2); 

	$("#searchBox").animate({height: "-=25px"},'fast'); 

	$("#container").animate({height: "-=25px"},'fast'); 

	yellowPages.print(); 


	}); 

$("#RunSearch").click(function(){

	var FilteredList = yellowPages.Find($("#search").val()); 
	
	console.log(FilteredList);
	
	$("#numbers").hide(); 
	
	$("#numbers2").show(); 
	
	//$("#boundary").append("<div id='numbers2'> </div>")  

	//$("div#numbers").attr("id", "numbers2");
	//yellowPages.Find($("#search").val())
	

	for(i=0; i < FilteredList.length; i++){
	
		$("#numbers2").append(FilteredList[i]+ "<br>");	
	} 

});
  

$("#refresh").click(function(){
	
	$("#numbers2").empty();
	$("#numbers2").hide(); 
	$("#numbers").show();
	
}) 

});
