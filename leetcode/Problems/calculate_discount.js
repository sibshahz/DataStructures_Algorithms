/*
If user is premium and product category is furniture
    discount rate is: 10%
Agar user premium hai aur product furniture category ka hai tou
    discount 10 fesad hoga

If user is premium and product category is not furniute
    discount rate is: 8%
Agar user premium hai aur product furniture category ka nahi tou
    discount 8 fesad hoga

If user is not premium:
    discount rate is: 5%
Agar user premium nahi tou
    discount 5 fesad hoga

Check if promoCode exists and valid
    add it's value into discount
Dekehin agar promoCode mojod hai aur sahi hai tou 
    uski value discount me add kardein

*/
const products=[
    {
        name: "Chair",
        category:"furniute",
        price: 10000
    },
    {
        name: "Phone",
        category: "electronics",
        price: 25000
    },
    {
        name: "Electric vaccum",
        category: "electronics",
        price: 20000
    },
    {
        name: "C++ Book",
        category: "book",
        price: 5000
    }
]

const user1={
    name: "Zia",
    type: "premium"
}
const user2={
    name: "Faraz",
    type: "normal"
}

const promoCode1={
    //invalid promocode
}
const promoCode2={
    name: "November Sale",
    promoCode: "1111",
    value: 3
}
function calculateDiscount(products,user,promoCode){
    //make a discount variable
    //loop through products
        //apply if else conditions and add respective discounts to discount variable
    
    //check if promocode is valid
        //if valid add it's value to discount variable
    
    //return discount variable 

}
