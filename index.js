let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let number = document.getElementById("number")
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")


let array = []

let mood ="submit"
btn2.style.display="none"
let index;
//create :
btn.onclick=function(){
 if(firstname.value!="" && lastname.value!="" && email.value!="" && number.value!="")
   {
      let object={
         firstname:firstname.value,
         lastname:lastname.value,
         email:email.value,
         number:number.value,
      }                   
    
      if(mood==="submit"){
         array.push(object)
      }else{
         array[index]=object
         btn.innerHTML="submit"
         mood="submit"
      }
   }

if(firstname.value!="" && lastname.value!="" && email.value!="" && number.value!=""){
   firstname.value=""
   lastname.value=""
   email.value=""
   number.value=""

}else{
   if(firstname.value ==="" && lastname.value ==="" && email.value ==="" && number.value ===""){
      alert("please enter all your informations")
   }else if(firstname.value ==="" || lastname.value ==="" || email.value ==="" || number.value ===""){
       alert("your informations not complete")
   }
}
  showdata() 
}
//showdata :
function showdata(){
   let table =""
   for(let i=0;i<array.length;i++){
     table+=`
        <tr>
            <td>${array[i].firstname}</td>
            <td>${array[i].lastname}</td>
            <td>${array[i].email}</td>
            <td>${array[i].number}</td>
            <td><button onclick="Delete(${i})">Delete</button></td>
            <td><button onclick="update(${i})">update</button></td>
        </tr>
     
            `
   }

let tbody = document.getElementById("tbody")
tbody.innerHTML=table
if(tbody.innerHTML!=""){
   btn2.style.display="block"
}else{
   btn2.style.display="none"
}
}
//delete :
function Delete(i){
array.splice(i,1)
showdata()
}
//update :
function update(i){
firstname.value=array[i].firstname,
lastname.value=array[i].lastname,
email.value=array[i].email,
number.value=array[i].number,
index=i
mood="update"
btn.innerHTML="update"
showdata()

}

//deleteAll :

function deleteAll(){
   array.splice(0)
   btn2.style.display="none"
  showdata()
}































