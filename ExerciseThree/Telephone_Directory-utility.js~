var AddressBook = []; 

function Contact(firstName, lastName, cellProvider, cellNumber){
    this.firstName = firstName;
	this.lastName = lastName;
	this.cellProvider = cellProvider;
	this.cellNumber = cellNumber; 
	this.addToBook = function(){
		AddressBook.push(this);		
		}; 
    this.deleteFromBook = function(){
        var index = AddressBook.indexOf(this); 
        AddressBook.splice(index,index);
    };
} 

/* var filterednames = AddressBook.filter(function(obj) {
    if (obj.firstName === "Ndabenhle"){
        console.log(obj.cellNumber);
    }
}); 
 */ 
 
 function findCellNumber(contactName){ 
     AddressBook.filter(function(obj){
     if(obj.firstName == contactName){
         return(obj.cellNumber);
            }
         }
     );
 }


var nda = new Contact("Ndabenhle", "Ngulube", "Vodacom", "0798900606"); 
var nhla = new Contact("Nhlanhla", "Ngulube", "MTN", "0798900607"); 
var thomas = new Contact("Thomas","Razuko", "CellC", "0832546071");
nda.addToBook(); 
nhla.addToBook(); 
thomas.addToBook();
console.log(AddressBook); 
console.log()
thomas.deleteFromBook();
console.log(AddressBook); 

findCellNumber("Ndabenhle");
