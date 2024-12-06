import { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,getFirestore, addDoc ,collection,serverTimestamp, db} from "./firebase.js"

let submit = ()=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user); 
    alert("your account create successfully")
  })
  .catch((error) => {
    console.log(error.message);
    alert("invalid email and password")
  });
}
let submit_user = document.getElementById("submit")
submit_user.addEventListener("click",submit)

let loginbtn = document.getElementById("login")
  loginbtn.addEventListener("click",()=>{
    window.location.href ="./login.html"
  })

let login=()=>{

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
  
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("wellcome")
      window.location.href ="./index.html"
    })
    .catch((error) => {
      console.log(error.code); 
    });
  }
  let loginUser = document.getElementById("login_btn")
  loginUser.addEventListener("click",login)

  let post =async()=>{

    let title = document.getElementById("title")
    let description = document.getElementById("description")
    try{
        const docRef = await addDoc(collection(db, "post"), {
               time:serverTimestamp(),
               title: title.value,
               description: description.value
              });
               console.log("Document written with ID: ", docRef.id);
               alert("you are successfully posted")
             } catch (e) {
                console.error("Error adding document: ", e);
             }
    

  }
  let posting = document.getElementById("post")
  posting.addEventListener(click,post)