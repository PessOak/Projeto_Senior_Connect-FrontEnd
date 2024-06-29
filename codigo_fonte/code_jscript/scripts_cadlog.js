var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
    .addEventListener('click', () => {
        formSignin.style.left = "25px"
        formSignup.style.left = "450px"
        btnColor.style.left = "0px"
    })

document.querySelector('#btnSignup')
    .addEventListener('click', () => {
        formSignin.style.left = "-450px"
        formSignup.style.left = "25px"
        btnColor.style.left = "110px"
    })


function gerarId() {
    var randomGuid = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    return randomGuid;
}


function saveData(){
    let name, email, password, password2;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;

    if(password !== password2) {
        alert("As senhas não coincidem!");
        return;
    }

    //let user_records= new Array();
   //user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    let users_records = JSON.parse(localStorage.getItem("users")) || [];
    if(users_records.some((v)=>{
        return v.email==email
    })) {
        alert("Email já registrado")
    }
    else {
        let id = gerarId();
        users_records.push({
            "id": id,
            "name":name,
            "email":email,
            "password":password,
            "password2":password2
        })
        localStorage.setItem("users",JSON.stringify(users_records));
    }
}

function saveData2(){
    let email2, password3;
    email2=document.getElementById("email2").value;
    password3=document.getElementById("password3").value;

    //let user_record= new Array;
    //user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    let user_record = JSON.parse(localStorage.getItem("users")) || [];
    if(user_record.some((v)=>{
        return v.email==email2 && v.password==password3;
    })) {
        let current_user=user_record.filter((v)=>{
            return v.email==email2 && v.password==password3;
        })[0];
        localStorage.setItem("usuario_logado", JSON.stringify({"name": current_user.name, "email": current_user.email}));
        // localStorage.setItem("name",current_user.name);
        // localStorage.setItem("email",current_user.email);
         
        // ARRUMAR AQUI -> ARRUMAR A PASTA DAR DEPLOY NOVAMENTE
        window.location.replace("html_perfil.html");
    }
    else {
        alert("Login Fail");
    }
    return false;

}
