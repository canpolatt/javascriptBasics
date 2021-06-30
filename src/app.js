//var,let,const
//file-based programlama -- dili yukarıdan aşağıya doğru taranır.
let sayi1=10;
sayi1="Engin Demiroğ";
let student={id:1,name:"Engin"}
//console.log(student);
//JSON : Javascript Object Notation

function save(puan=10,ogrenci) { //default deger
    console.log(ogrenci.name+" : "+puan)
}
//save(undefined,student);

let students=["Engin Demiroğ","Halit Kalaycı","Engin Toprak","Büşra"]

let students2=[student,{id:1,name:"Halit"},"Ankara",{city:"İstanbul"}]

//console.log(students2)

//rest - geriye kalanlar rest parameters params,varArgs
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}
//restte gönderdiğimiz değerler arraydir
//console.log(typeof showProducts)
//showProducts(10,"Elma","Armut","Karpuz")

//spread -- ayrıştırmak
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//destructuring -- elimizdeki arrayin değerlerini değişkenlere atıyoruz
let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)
}

someFunction(populations)

let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)

