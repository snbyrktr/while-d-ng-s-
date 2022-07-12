let user_name="sena"
let user_password="1357"
let log=false;

while(log==false){
    let username=prompt("kullanıcı adı gririniz: ")
    let password=prompt("şifrre giriniz: ")

 if((username==user_name)&&(password==user_password)){
    console.log("giriş yapıldı")
    log=true;

 }
 else{
    console.log("hatalı kullanıcı veya parola")
 }
}