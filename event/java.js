function send(){
    alert("Your message has been sent. We will contact you soon.")
}
function contact(a){
    if(a==1){
alert("Facebook Link")
    }
    else if(a==2){
        alert("Google Link");
    }
    else if(a==3){
        alert("Instagram Link");
    }
    else{
        alert("Twitter Link");
    }

}
function join(){
    choice=confirm("Are you ready for interview?");
    if(choice){
        alert("You are ready to go.");
    }
    else{
        alert("Sorry, You can't join without interview.");
    }
}