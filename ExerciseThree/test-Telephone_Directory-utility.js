var yellowPages = new AddressBook(); 
var nda = new Contact("Ndabenhle", "Ngulube", "Vodacom", "0798900606"); 
var nda2 = new Contact("Ndabenhle", "Ndlovu", "Vodacom", "0885421332"); 
var tom = new Contact("Tom", "Huddlestone", "MTN", "0544875563"); 
var jerry = new Contact("Jerry", "Vilakazi", "CellC", "0837278441"); 
var alex = new Contact("Alex", "Emmit", "Vodacom", "082654987"); 
var skipper = new Contact("Skipper", "Remy", "MTN", "0721658942"); 
var hans = new Contact("Hans", "Zimmer", "CellC", "0897741265"); 
var loic = new Contact("Loic", "Remy", "CellC", "0816652003"); 
yellowPages.addContact(nda);
yellowPages.addContact(nda2); 
yellowPages.addContact(tom);  
yellowPages.addContact(jerry); 
yellowPages.addContact(alex);
yellowPages.addContact(skipper); 
yellowPages.addContact(hans);  
yellowPages.addContact(loic); 	


QUnit.test("Contact Class exists",1, function(){
	ok(typeof Contact === "function", "Object exists")
}) 



QUnit.test("Address book exists",1, function(){
	ok(typeof AddressBook === "function", "Address book exists")
}) 



QUnit.test("Find Nda's cell number",1, function(){ 
	
	notStrictEqual(yellowPages.Find("Ndabenhle"),[
							  {
							    "cellNumber": "0798900606",
							    "cellProvider": "Vodacom",
							    "firstName": "Ndabenhle",
							    "lastName": "Ngulube"
							  },
							  {
							    "cellNumber": "0885421332",
							    "cellProvider": "Vodacom",
							    "firstName": "Ndabenhle",
							    "lastName": "Ndlovu"
							  }
						    ], 
							"Returns Ndabenhles correct contact details")
							}) 



QUnit.test("An instance named Nda exists",1, function(){ 


	equal(nda instanceof Contact, true, "Nda is an instance of the constructor")
}) 



QUnit.test("Find same first names", 1 , function(){ 
	
	notStrictEqual(yellowPages.Find("Ndabenhle"), [ { firstName: 'Ndabenhle',
							    lastName: 'Ngulube',
							    cellProvider: 'Vodacom',
							    cellNumber: '0798900606' },
							  { firstName: 'Ndabenhle',
							    lastName: 'Ndlovu',
							    cellProvider: 'Vodacom',
							    cellNumber: '0885421332' } ])
							}) 



QUnit.test("Find same last names", 1 , function(){ 
	

	notStrictEqual(yellowPages.Find("Remy"), 
				[ { firstName: 'Skipper',
				    lastName: 'Remy',
				    cellProvider: 'MTN',
				    cellNumber: '0721658942' },
				  { firstName: 'Loic',
				    lastName: 'Remy',
				    cellProvider: 'CellC',
				    cellNumber: '0816652003' } ])
				}) 



QUnit.test("Find same cell providers", 1 , function(){ 
	

	notStrictEqual(yellowPages.Find("CellC"), 
						[ { firstName: 'Jerry',
						    lastName: 'Vilakazi',
						    cellProvider: 'CellC',
						    cellNumber: '0837278441' },
						  { firstName: 'Hans',
						    lastName: 'Zimmer',
						    cellProvider: 'CellC',
						    cellNumber: '0897741265' },
						  { firstName: 'Loic',
						    lastName: 'Remy',
						    cellProvider: 'CellC',
						    cellNumber: '0816652003' } ])
						}) 




 


