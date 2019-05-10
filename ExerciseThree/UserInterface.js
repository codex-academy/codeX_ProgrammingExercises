$(document).ready(function(){ 

$("#AddContactsPage").hide(); 

$("#SearchContactsPage").hide();

$("#ShowContactsPage").show(); 

$("#SearchResults").hide(); 

 
//creating Address Book Class
  
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

// Creating Contact Class

function Contact(firstName, lastName, cellProvider, cellNumber){
    	this.firstName = firstName;
	this.lastName = lastName;
	this.cellProvider = cellProvider;
	this.cellNumber = cellNumber;
	};

// Allowing Contacts to inherit special printing format

Contact.prototype.toString = function(){
	return this.firstName + " "+ this.lastName + ": " + this.cellNumber;
} 

//Adding method to jQuery Validation Library to check that inputs are alphabetical letters  

jQuery.validator.addMethod("alpha", function(value, element) {
return this.optional(element) || value == value.match(/^[a-zA-Z]+$/);
},"Only Characters Allowed.");

//Creating a new instance of the Address Book class

var yellowPages = new AddressBook(); 

//Creating the validation rules of the jQuery Validation plugin

$("#MyForm").validate({
      rules: {
	firstname: {
		required:true, 
		alpha:true 
		}, 
	lastname: {
		required:true, 
		alpha:true 
		}, 

	cellprovider: {
		required:true, 
		alpha:true 
		}, 
	cellnumber: {
		required:true, 
		number:true
		}  	
      }
}); 


$("#ButtonAddContact").click(function(){

	$("#ShowContactsPage").hide();	

	$("#AddContactsPage").show(); 

	
	
}) 

//Handling of the submitting of contact details in the html from

$("#MyForm").submit(function(){ 
	
	if($("#MyForm").valid() ){
 	
		var contact1 = new Contact($("#firstname").val(),$("#lastname").val(),$("#cellprovider").val(),$("#cellnumber").val());
		
		yellowPages.addContact(contact1); 
	
		yellowPages.print();
	
		$("#numbersList").append(

		"<li class='table-view-cell media'>"+ 
		"<img class='media-object pull-left' src='http://placehold.it/42x42'>"+
			"<div class='media-body'>" +
			contact1 +
			"<br><p>" +
			contact1.cellProvider + 
			"</p>" + 
			"</div>"+ 
		"<button class='DeleteContactButton' id='"+ contact1.cellNumber + "'>Delete</button>"+ 
			 "</li>");  
	
		$("#ItemsToBeSearched").append("<li id ='"+ contact1.cellNumber + "' class='table-view-cell'>" + contact1 + "</li>" 
		
		); 

		$("#firstname").val(""); 
	
		$("#lastname").val("");  

		$("#cellprovider").val("");  

		$("#cellnumber").val(""); 

		$("#AddContactsPage").hide(); 

		$("#ShowContactsPage").show(); 
	
		return false;
	} 

	else{ 

	alert("Oops! One or more fields are incorrectly entered."); 

	}	
	
}); 


$("#BackButton").click(function(){

	$("#AddContactsPage").hide(); 

	$("#ShowContactsPage").show();
	
})  

//Handles the deleting of a contact from the address book



$("#numbersList").on("click", ".DeleteContactButton", function(){

	var id = $(this).attr("id"); 

	//var id2 = (id.substring(2,id.length)); 
	
	$(this).parent('li').remove(); 

	$("#ItemsToBeSearched").find("li#" + id).remove();	

	yellowPages.deleteContact(id); 

	yellowPages.print(); 

	$("#ShowContactsPage").hide();  

	$("#ShowContactsPage").show();

	}); 

//handles search incon click 

$("#SearchIcon").click(function(){

	$("#AddContactsPage").hide(); 

	$("#ShowContactsPage").hide(); 

	$("#SearchContactsPage").show(); 

	$("#SearchResults").hide();  

	$("#ItemsToBeSearched").show();	

}) 

$("#SearchBackButton").click(function(){

	$("#SearchContactsPage").hide(); 

	$("#ShowContactsPage").show();

}) 

//Handles the search button of the address book

$("#RunSearch").click(function(){ 
	
	$("#SearchResults").empty();

	var FilteredList = yellowPages.Find($("#search").val()); 
	
	console.log(FilteredList);
	
	$("#ItemsToBeSearched").hide(); 
	
	$("#SearchResults").show(); 
	
	for(i=0; i < FilteredList.length; i++){
	
		$("#SearchResults").append(

		"<li class='table-view-cell'>" + FilteredList[i]+ "</li>");	
	} 

	return false; 

}); 
	
  
//Handles the refresh button of the address book

$("#refresh").click(function(){

	$("#SearchResults").empty();	
	
	$("#SearchResults").hide(); 

	$("#ItemsToBeSearched").show();
	
}); 

});
