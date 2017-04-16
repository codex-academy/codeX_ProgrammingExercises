function AddressBook(){
    var contactList = [];
    this.addContact = function(contact){
		contactList.push(contact); 
	};
	this.deleteContact = function(contact){
		var index = contactList.indexOf(contact);
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
        console.log(answer);
    };
}

function Contact(firstName, lastName, cellProvider, cellNumber){
    this.firstName = firstName;
	this.lastName = lastName;
	this.cellProvider = cellProvider;
	this.cellNumber = cellNumber;
} 
