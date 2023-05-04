function dataForm(){

        // const submit = document.querySelector('button');
        const name = document.querySelector('#name').value;
        const address = document.querySelector('#add').value;
        const email = document.querySelector('#email').value;
        const comment = document.querySelector('#comment').value;


        if (!(name==='' && address ==='' && email && comment ==='')) {
            localStorage.setItem("name",name)
            localStorage.setItem("address",address)
            localStorage.setItem("email",email)
            localStorage.setItem("comment",comment)

            // alert(`Your name is ${localStorage.getItem("name")} and use this email to login ${localStorage.getItem("email")} and password use your ${localStorage.getItem("address")}`)
            
            window.location.href('login.html');
        }
    }    
   
    
    function login(){


        let Name =querySelector('#Name');
        let ddress = querySelector('#Address');
        let mail = querySelector('#Email');
        let Comment = querySelector('#Comment');

        let name = localStorage.getItem('name');
        let address = localStorage.getItem('address');
        let email = localStorage.getItem('email');
        let comment = localStorage.getItem('comment');

        const Address = document.querySelector('#address').value;
        const Email = document.querySelector('#email').value;

        if(email===Email && Address===address){

            Name.innerHTML = `name: ${name} `;
          ddress.innerHTML = `address: ${address} `;
            mail.innerHTML = `email: ${email} `;
            Comment.innerHTML = `comment: ${comment} `;
        }


    }


  

  
    // submit.disabled=true;
    // newtask.onkeyup=()=>{
    //     //console.log("Test");
    //     if(newtask.value.length>0){
    //         submit.disabled=false;
    //     }else{
    //         submit.disabled=true;
    //     }
    // }



   

