
QUnit.test("Contact Class exists",1, function(){
	ok(typeof Contact === "function", "Object exists")
}) 

QUnit.test("Address book exists",1, function(){
	ok(typeof AddressBook === "object", "Address book exists")
}) 

QUnit.test("Find Nda's cell number",1, function(){
	deepEqual(findCellNumber("Ndabenhle"),"0798900606", "Returns Ndabenhles correct contact details")
}) 

QUnit.test("Instance Nda exists",1, function(){
	ok(nda instanceof Contact === "true", "Nda is an instance of the constructor")
})

 


