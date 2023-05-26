let a = { name: "usama", age: 30, degree: "bsse" };
let b = a; // it is deep copy
let c = { ...a }; // it is shalllow copy
c.age = 200;
// b.age=800;
// console.log(a, "first");
// console.log(b, "second");
// console.log(c, "third");
// in deep copy if we chang in copy  object. then original object will automatically change and in shallow copy vice versa;
 // but in nested object or array  not happen same like single object or array;  like

 let d={
    adress:{

        district:"chakwal",
        street:22
    }
 }

 let e={...d};
  let f=JSON.parse(JSON.stringify(d)); // it will make deep copy
//  e.adress.street=66;
 f.adress.street=99;
//  console.log(d," nested first shallow")

//  console.log(e,"nested second shallow")


 console.log(d," nested first deep")

 console.log(f,"nested second deep")