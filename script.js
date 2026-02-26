const testimonials = [
{
text:"Sigma gave me global exposure and confidence!",
name:"– Priya Mehta"
},
{
text:"Best campus life and excellent placements!",
name:"– Arjun Patel"
},
{
text:"Supportive faculty and industry-ready curriculum.",
name:"– Sneha Verma"
}
];

let index = 0;

setInterval(()=>{
index = (index+1)%testimonials.length;
document.getElementById("testimonialText").textContent = `"${testimonials[index].text}"`;
document.getElementById("testimonialName").textContent = testimonials[index].name;
},3000);

document.getElementById("leadForm").addEventListener("submit",function(e){
e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const course=document.getElementById("course").value;
const errorMsg=document.getElementById("errorMsg");

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const phonePattern=/^[0-9]{10}$/;

if(name===""||email===""||phone===""||course===""){
errorMsg.textContent="All fields are required!";
errorMsg.style.color="red";
return;
}
if(!email.match(emailPattern)){
errorMsg.textContent="Enter valid email!";
errorMsg.style.color="red";
return;
}
if(!phone.match(phonePattern)){
errorMsg.textContent="Phone must be 10 digits!";
errorMsg.style.color="red";
return;
}

errorMsg.style.color="lightgreen";
errorMsg.textContent="Application submitted successfully!";
});
