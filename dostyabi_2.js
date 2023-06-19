let girls_2 = [
{
   name: "Sara",
     age: 22,
     city: "teran"
   },
  {
    name: "Eli",
     age: 18
  },
   {
      name: "maryam",
      age: 20 
   },
  {
     name : "kimiya",
     age : 24
   }
]
for(let i=1;i<girls_2.length;i++){
    console.log(girls_2[i])
    girls_2[i].age = girls_2[i].age + 2
    console.log(girls_2[i])
    girls_2[i].skin= "black"
    console.log(girls_2[i])
}