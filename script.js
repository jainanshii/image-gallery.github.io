let image=document.getElementsByClassName("img1");
Array.from(image).forEach(element=>{
element.addEventListener('mouseover',()=>{
  element.style.width="300px";
   element.style.height="300px";
  element.style.filter="blur(0px)";
 
});

element.addEventListener('mouseout',()=>{
element.style.width="100px";
   element.style.height="200px";
  element.style.filter="blur(1.5px)";
  document.getElementsByClassName("content")[0].style.display="none";
  });

  element.addEventListener('click',()=>{
element.style.width="500px";
   element.style.height="500px";
  element.style.filter="blur(0px)";
    element.style.background="black";
    
  });
});
