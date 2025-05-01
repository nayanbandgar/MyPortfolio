 
 const nameinput = document.getElementById('name');
 const numberinput = document.getElementById('contact');
 const section1 = document.getElementById('listofcontact');
 let listOfContact = []
 

 function next () {
            listOfContact.push("<li class='list-item'>"+nameinput.value+"<br/>"+numberinput.value+" <button onclick='delate()'><i  class='fa fa-trash'></i></button> </li>")
            section1.innerHTML = listOfContact.join(" ")
            nameinput.value=""
            numberinput.value = ""
 }

 function search () {

    let searchtext = document.getElementById('search').value;
    console.log(listOfContact)
    let newarr = listOfContact.filter((v)=>v.includes(searchtext))
    section1.innerHTML= newarr.join(" ")
 }


 function delate () {
   
 }

