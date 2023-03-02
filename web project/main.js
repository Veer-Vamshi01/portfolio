var typed =new Typed(".auto",{
    strings:[  "  an Engineer"," a developer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
  
  });

 $("input").on("focus",function(){
  $(this).css("background-color","grey");
 });
 $("input").on("blur",function(){
  $(this).css("background-color","white");
 })
  