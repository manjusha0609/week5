import {app} from './firebaseConfig.js'
// console.log(app)
import {getDatabase,get,ref,set,child,update,remove} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
const db=getDatabase();
// console.log(db)
console.log(ref(db))
// set(ref(db,"students/1"),{name:"abc",sid:"1"})
let name, sid,branch,mail,phone,count=1
function readDeatails(){
    name=document.getElementById("name").value
    sid=document.getElementById("sid").value
    // branch=document.getElementById("branch").value
    // mail=document.getElementById("mail").value
    // phone=document.getElementById("phone").value
}
let addBtn=document.getElementById("addBtn")
let uBtn=document.getElementById("uBtn")
let delBtn=document.getElementById("delBtn")
let readBtn=document.getElementById("readBtn")
let span=document.getElementById("span")
function addUser(){
    readDeatails();
    set(ref(db,"students/"+count),{name:name,sid:sid}).then(()=>{alert("insert success")}).catch(()=>alert("insert unsucessful"))
    count=count+1;
}
addBtn.addEventListener("click",addUser)
function readUsers(){
    get(child(ref(db),"students")).then((snapshot)=>{
        let arr=Object.values(snapshot.val())
        arr.forEach(ele=>{
            console.log(ele.name,ele.sid) 
            span.innerHTML+=`Name: ${ele.name} &nbsp 
            Roll number: ${ele.sid} <br>
            <hr><br>`


        })
        
    }).catch((err)=>console.log(err))
}
readBtn.addEventListener("click",readUsers)
function deleteUser(){
    
}
