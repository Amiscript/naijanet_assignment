
   
  /*Write  Javascript code using if statement to check if
  Grade A
   if payment is made,&&
    if Age is above &&
    if Name Contain A 
    
     Grade B
   if payment is made,&&
    if Age is above ||
    if Name Contain A


     Grade C
   if payment is made,||
    if Age is above &&
    if Name Contain A
    */
  /*let Payment = true;
  let Age = 17;
  let Name = "Edison";

  const verification_A = ()=>{
    // Grade A
    if (Payment && Age > 16 && Name.includes("a")){
      console.log(`Payment was successful,  year age is above ${Age} and your ${Name} and also contain letter "A"`);

    }
      // Grade B
    else if(Payment && Age > 16 || Name.includes("a")){
      console.log(`Payment was successful,  year age is above ${Age} and your ${Name} does not contain letter "A"`)
    }
  // Grade C
    else if(Payment=== false || Age > 16 && Name.includes("a")){
      console.log(`Payment was  not successful,  year age is above ${Age} and your ${Name}  contain letter "A"`)
    }

// default
 else{
  console.log(`Payment was not  successful , year age is less ${Age} and your ${Name} does not contain letter "A"`)
 }
  }
  verification_A()*/


// high array
// array.forEach(element => {
  
// });
// Map
// filter
// assignment
// using foreach cal the average using their subject
// after cal average return or fileter only those their average above 100
// when u cal the average return only names  of those  above 100 using map
// return only male
// return only female
// let students= [  
//   {  
//      name:'arun',
//      gender:'Male',
//      physics:88,
//      maths:87,
//      english:78
//   },
//   {  
//      name:'rajesh',
//      gender:'Male',
//      physics:96,
//      maths:100,
//      english:95
//   },
//   {  
//      name:'moorthy',
//      gender:'Male',
//      physics:89,
//      maths:90,
//      english:70
//   },
//   {  
//      name:'raja',
//      gender:'Male',
//      physics:30,
//      maths:25,
//      english:40
//   },
//   {  
//      name:'usha',
//      gender:'Female',
//      physics:67,
//      maths:45,
//      english:78
//   },
//   {  
//      name:'priya',
//      gender:'Female',
//      physics:56,
//      maths:46,
//      english:78
//   },
//   {  
//      name:'Sundar',
//      gender:'Male',
//      physics:12,
//      maths:67,
//      english:67
//   },
//   {  
//      name:'Kavitha',
//      gender:'Female',
//      physics:78,
//      maths:71,
//      english:67
//   },
//   {  
//      name:'Dinesh',
//      gender:'Male',
//      physics:56,
//      maths:45,
//      english:67
//   },
//   {  
//      name:'Hema',
//      gender:'Female',
//      physics:71,
//      maths:90,
//      english:23
//   },
//   {  
//      name:'Gowri',
//      gender:'Female',
//      physics:100,
//      maths:100,
//      english:100
//   },
//   {  
//      name:'Ram',
//      gender:'Male',
//      physics:78,
//      maths:55,
//      english:47
//   },
//   {  
//      name:'Murugan',
//      gender:'Male',
//      physics:34,
//      maths:89,
//      english:78
//   },
//   {  
//      name:'Jenifer',
//      gender:'Female',
//      physics:67,
//      maths:88,
//      english:90
//   }
// ]
// const general =()=>{

//   students.forEach((value)=>{
//     let average= Math.round((value.physics + value.maths + value.english)/3)  
//     console.log(`${value.name}  average score = ${average}`);
  
//   })


//   students.filter((value)=>{
//     let average= Math.round((value.physics + value.maths + value.english)/3)  
//     if(average >= 100){
//       console.log(average);
//     }
//     else{
//       console.log("You didnt score above 100");
//     }
  
//     })


//   students.map((value)=>{
//     let average= Math.round((value.physics + value.maths + value.english)/3)
//     if(average >=  100){
//       console.log(value.name);
//     }
//         })

      
//         students.filter((value)=>{
//           let female= value.gender
//           if ( female.includes("F")) {
//                         console.log(value.gender);   
//           }  })


//          students.filter((value)=>{
//           let female= value.gender
//           if ( !female.includes("F")) {
//                         console.log(value.gender);   
//           }  })
                 

// }
// general()

// let blog =[{

//   blogImage:'https://nigeriaworld.com/news/source/2023/oct/images/small/naira-dollar-348.jpg',
//   blogParagraph:"Tinubu presides over second FEC meeting, swears in three newly appointed ministers" 
// },

// {

//   blogImage:'https://nigeriaworld.com/news/source/2023/oct/images/small/ondo-state-amotekun-patrol-vehicles-autojosh-3.jpg',
//   blogParagraph: "Portable and show promoter fight in Italy"
// },
// {

//   blogImage:'https://nigeriaworld.com/news/source/2023/oct/images/small/ndemu-CoTAGoTEA.jpg',
//   blogParagraph: "United Nigeria Airlines adds Airbus 320 aircraft to fleet"
// },
// {

//   blogImage:'https://nigeriaworld.com/news/source/2023/oct/images/small/Mercy-BBNaija.jpg',
//   blogParagraph:"Gov Soludo celebrates his secondary school teacher at 90"
// },
// {

//   blogImage:'https://nigeriaworld.com/news/source/2023/oct/images/small/img-Ayra-socialshare-750x375.jpg',
//   blogParagraph:"Resume or resign, PDP issues ultimatum to Governor Akeredolu" 
// },
// {

//   blogImage:'https://nigeriaworld.com/news/source/2023/oct/images/small/Prof.-Yakub-Mahmood.jpg',
//   blogParagraph:"Oby Ezekwesili reacts to purchase of new exotic vehicles for lawmakers" 
// },
// {

//   blogImage:'https://nigeriaworld.com/news/source/2023/oct/images/small/Alex-Otti.jpg',
//   blogParagraph:"Despite outcry, Reps confirm moves to allocate SUVs to members" 
// },
// {

//   blogImage:'https://nigeriaworld.com/news/source/2023/oct/images/small/akeredolu.jpg',
//   blogParagraph:"BUA Foods raises prices of commodities after cement 'slash'" 
// },
// {

//   blogImage:'https://nigeriaworld.com/news/source/2023/oct/images/small/Screenshot_20231017-125221.jpg',
//   blogParagraph:"FOR 8 YEARS: I apologise for supporting Buhari, in error of judgment  Momodu" 
// },
// ]
// let collection=document.querySelector('.container')

// blog.forEach( (each)=>{
//    collection.innerHTML +=
//   `
//    <div class="container ">
//    <img  src="${each.blogImage}"  class=" images">
//    <p >${each.blogParagraph}</p>
//    </div>
//   `
// })

const mybody = document.querySelector("body")
const button = document.querySelector(".btn")

const toogledarkmode= ()=>{
  mybody.classList.toggle ("dark")
  
}

button.addEventListener("click", toogledarkmode)


 const button2=document.querySelector(".btn")

//  const handleform= (event)=>{
//   event.preventDefault()// this is to prevent the  form not to submit automatically
//   const Entermail = document.querySelector("#email").value
//   const Enterpassword = document.querySelector("#password").value

//   const errorone = document.querySelector("#error1").value
//   const errortwo = document.querySelector("#error2").value





//   if(!email){
//     errorone.textContent = "Please enter your email"
//   }

//   if(!Password){
//     errorone.textContent = "Please enter your email"
//   }
//  }

 // get rquest
 //post - 
 //put request- rquesting to chang the whole data
 // patch - requsting  for change or editing of a particular data
// delete
// Api- typeicode api
// ajax-
//fetch-
// promise- .  
//Async-
//Await-



const data = async()=>{

  // await fetch("https://swapi.dev/api/people")
  // .then( people => people.json())
  // .then(coverted => user = coverted)

  const data = await fetch("https://swapi.dev/api/people");
  const json = await data.json();
 console.log(json);


 const contain = document.querySelector(".container")
  json.results.forEach((each, i) => {
    contain.innerHTML +=`
     <div class=" shadow">
      <h3>Name:${each.name}</h3> 
      <p> Height: ${ each.height}</P>
      <p> Hair-color:${ each.hair_color}</P>
      <p>  Gender: ${ each.gender}</P>
      <p> Eye-color:${ each.eye_color}</P>
      <p> Skin-color:${ each.skin_color}</P>
      <p> Mass:${ each.mass}</P>

     </div>
    `
  
    
  });

}
data()
// const button= document.querySelector('.btn')
// button.addEventListener("click", )

