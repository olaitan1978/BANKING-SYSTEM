let outy= document.getElementById("puto")
let proceed_button= document.getElementById("pro")
let first_output= document.getElementById("op")
let withrawal_button= document.getElementById("witho")
let deposit_button= document.getElementById("depo")
let imos= document.getElementById("imo")
let money=['1k.jpg','2h.jpg','5.jpg','10.jpg','20.jpg','50.jpg','100.jpg','500h.jpg']

let excel = ()=>{
    let selecto= document.getElementById("se").value
    if (selecto=="withdrawal"){
        first_output.innerHTML=" PLEASE INPUT THE AMOUNT YOU WANT TO WITHDRAW AND CLICK THE WITHDRAWAL BUTTON. THANK YOU "
    }else if(selecto=="deposit"){
        first_output.innerHTML=" PLEASE INPUT THE AMOUNT YOU WANT TO DEPOSIT AND CLICK THE DEPOSIT BUTTON. THANK YOU "
    }else{
        alert("YOU HAVE CHOSEN THE WRONG OPTION, PLEASE TRY AGAIN")
    }
    outy.style.display="block"
    withrawal_button.style.display="block"
    deposit_button.style.display="block"

}
proceed_button.addEventListener("click",excel)
 
let solo = () =>{
    let selecto= document.getElementById("se").value
    let outin= document.getElementById("opp")
    let outy2= parseFloat(document.getElementById("puto").value)
    if (selecto==="withdrawal"){
        if(outy2>1000){
            outin.innerHTML="THE AMOUNT YOU ENTERED IS MORE THAN YOUR CURRENT BALANCE OF =N= 1,000"                
        }else{
            outin.innerHTML="YOU HAVE SUCCESSFULLY MADE YOUR WITHDRAWAL, PLEASE PRINT OUT YOUR MONEY" 
        }
    }else{
        alert("you have either chosen the wrong option or you are clicking the wrong button")
    }

    if (outy2==1000){
        imos.setAttribute('src',money[0])
    }else if(outy2==200){
        imos.setAttribute('src',money[1])
    }else if(outy2==5){
        imos.setAttribute('src',money[2])
    }else if(outy2==10){
        imos.setAttribute('src',money[3])
    }else if(outy2==20){
        imos.setAttribute('src',money[4])
    }else if(outy2==50){
        imos.setAttribute('src',money[5])
    }else if(outy2==100){
        imos.setAttribute('src',money[6])
    }else if(outy2==500){
        imos.setAttribute('src',money[7])
    }

}
withrawal_button.addEventListener("click",solo)

let didi = ()=>{
    let outin= document.getElementById("opp")
    let selecto= document.getElementById("se").value
    let outy2= parseFloat(document.getElementById("puto").value)
    if (selecto=="deposit" && outy2!=null){
        outin.innerHTML="YOU HAVE SUCCESSFULLY DEPOSITED YOUR MONEY. THANK YOU FOR BANKING WITH US"
    }else{
        alert("you have either chosen the wrong option or you are clicking the wrong button")
    }

    if (outy2==1000){
        imos.setAttribute('src',money[0])
    }else if(outy2==200){
        imos.setAttribute('src',money[1])
    }else if(outy2==5){
        imos.setAttribute('src',money[2])
    }else if(outy2==10){
        imos.setAttribute('src',money[3])
    }else if(outy2==20){
        imos.setAttribute('src',money[4])
    }else if(outy2==50){
        imos.setAttribute('src',money[5])
    }else if(outy2==100){
        imos.setAttribute('src',money[6])
    }else if(outy2==500){
        imos.setAttribute('src',money[7])
    }
}
deposit_button.addEventListener("click",didi)

