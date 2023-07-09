const product = [
    {
        id: 0,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22120556/2023/2/25/986d6f97-fe9b-487a-9c64-f577e0a32c491677314970316KhushalKwomenEmbroideryKurtaandpalazzowithdupattaset7.jpg',
        title: 'Khushal K',
        description: 'Kurta with Palazzos and dupatta',
        discountPrice: 1999,
        originalPrice: 2555,
        offer: '(30% Off)'
    },
    {
        id: 1,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20576332/2023/1/25/ba095322-5fea-4639-bcc8-6d3080e0fd261674627359062-Red-Tape-Men-White-Mesh-High-Top-Walking-Shoes-6331674627358-1.jpg',
        title: 'RedTape',
        description: 'Men Walking Shoes',
        discountPrice: 1359,
        originalPrice: 6799,
        offer: '(70% Off)'
    },
    {
        id: 2,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22770560/2023/4/21/0e113bff-0905-4bc9-af94-fcebfab3ba8b1682075076722-Fire-Boltt-Unisex-Smart-Watches-7601682075076097-1.jpg',
        title: 'FireBolt',
        description: 'Ninja call ultra smartwatch',
        discountPrice: 1299,
        originalPrice: 9999,
        offer: '(80% Off)'
    },
    {
        id: 3,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19655246/2022/8/25/a9c57728-7dfd-45e9-b9c0-48147896f2d11661417580002RedTapeMenBlackMeshHigh-TopWalkingNon-MarkingShoes1.jpg',
        title: 'RedTape',
        description: 'Men Walking Shoes',
        discountPrice: 899,
        originalPrice: 4999,
        offer: '(80% Off)'
    },
    {
        
        id: 4,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22725240/2023/4/11/045c090d-deb4-4357-b2db-8a1e9c2a00da1681196735789MINIWESSTBlackOversizedBucketShoulderBag1.jpg',
        title: 'Mini Weist',
        description: 'Oversize Tote Bag',
        discountPrice: 990,
        originalPrice: 5500,
        offer: '(82% Off)'
    },
    {
        
        id: 5,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12764080/2020/10/14/337a83d4-5f3c-4efd-a619-1290b24c36fe1602668155326-Safari-grey-2491602668153530-7.jpg',
        title: 'Safari',
        description: 'SuitCase Bag',
        discountPrice: 1699,
        originalPrice: 8699,
        offer: 'Rs.7000 Off'
    },
    
    {
        id: 6,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22204500/2023/3/2/f58e4754-a41e-4b70-8157-f5cc5de0d3c61677770699685Tshirts1.jpg',
        title: 'HellCat',
        description: 'Pack of 5 cotton tshirt',
        discountPrice: 899,
        originalPrice: 6499,
        offer: '88% Off'
    }
    ,
    {
        id: 7,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19165014/2022/10/10/150ffd71-986b-441a-98ad-823390e3a8a51665400406172LibasWomenPinkBandhaniPrintedMirrorWorkLaceDetailKurtawithTr5.jpg',
        title: 'Libad',
        description: 'Women Printed Kurta',
        discountPrice: 899,
        originalPrice: 4499,
        offer: '80% Off'
    }
    ,
    {
        id: 8,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1823100/2022/12/2/9b89ce5e-2a50-4752-b288-268392c475ae1669981847470WildHornMenBrownGenuineLeatherWallet1.jpg',
        title: 'Wallet',
        description: 'tyuo ddokrfrv jorjf',
        discountPrice: 899,
        originalPrice: 2999,
        offer: '68% Off'
    }
    ,
    {
        id: 9,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21404416/2023/1/3/27c01274-7dce-4e92-b426-4526ea85acf81672766317992Backpacks1.jpg',
        title: 'Wrogn',
        description: 'Brand logo backpack',
        discountPrice: 1299,
        originalPrice: 3999,
        offer: '60% Off'
    } ,
    {
        id: 10,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16297738/2022/4/13/6ec641a2-f35e-4700-991b-84c33735b9641649839030102-BOULT-AUDIO-GearPods-True-Wireless-Earbuds-Blue-454164983902-1.jpg',
        title: 'Boult Audio',
        description: 'Sound loud',
        discountPrice: 1299,
        originalPrice: 4999,
        offer: '70% Off'
    } ,
    {
        id: 11,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19072882/2022/7/27/a746e32f-fa5f-44bc-968a-c8dd8bf156de1658903584685-GERUA-Women-Black-Floral-Printed-Pleated-Gotta-Patti-Kurta-w-1.jpg',
        title: 'Gerua',
        description: 'Kurta',
        discountPrice: 1599,
        originalPrice: 4999,
        offer: '65% Off'
    }
    ,
    {
        id: 12,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12937474/2022/9/16/1424fb96-470f-4f36-b4e9-fada239b459a1663313812243KLOTTHEMulticolouredGeometric300TCFittedDoubleBedsheetwith2P1.jpg',
        title: 'Klotthe',
        description: 'Bedsheet',
        discountPrice: 1099,
        originalPrice: 4999,
        offer: '65% Off'
    },
    {
        id: 13,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17843020/2022/4/11/8a1ad795-f177-47e2-b2ec-733e2167161a1649657323997KAEZRIMenBlackBelts1.jpg',
        title: 'Kazzeri',
        description: 'Men Leather Belt',
        discountPrice: 599,
        originalPrice: 2999,
        offer: '45% Off'
    }
    ,{
        id: 14,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19165014/2022/10/10/150ffd71-986b-441a-98ad-823390e3a8a51665400406172LibasWomenPinkBandhaniPrintedMirrorWorkLaceDetailKurtawithTr5.jpg',
        title: 'Libad',
        description: 'Women Printed Kurta',
        discountPrice: 899,
        originalPrice: 4499,
        offer: '80% Off'
    },
    {
        id: 15,
        image: ' https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12105758/2022/4/20/e354c93a-f039-4c53-95fe-5328b73908f91650457134170-JOKER--WITCH-Women-Black-Analogue-Watch-AMWW239-702165045713-7.jpg',
        title: 'Joker And Witch',
        description: 'Women Analog Watch',
        discountPrice: 1599,
        originalPrice: 4999,
        offer: '65% Off'
    },
    {
        id: 16,
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21084928/2022/12/6/db1bc5bb-15a2-430c-8e2a-a9e1b51cf2321670268970035KALINICottonKurtawithRayonSkirtSet1.jpg',
        title: 'Kalini',
        description: 'Printed Kurta',
        discountPrice: 899,
        originalPrice: 3999,
        offer: '75% Off'
    }
    
    
   
]

const categories = [...new Set(product.map((item)=>{return item}))]
console.log(categories);
let i = 0 ;
document.getElementsByClassName('grid-container')[0].innerHTML = categories.map((item)=>
    {

        var {id , image , title , description , discountPrice , originalPrice , offer} = item;
        console.log(id);
        console.log(offer);
        console.log(title);
        console.log(description);
        console.log(discountPrice);
        console.log(originalPrice);
        return(
            `<div class='grid-item'>
                <img src='${image}' alt='' srcset=''>
                <div class='productInfo'>
            
                    <h3>${title} K</h3>
                    <h4>${description}</h4>
                    <span class='discount-price'>Rs.${discountPrice}</span><span class='original-price'>Rs.${originalPrice}}</span><span class='offer'>(${offer})</span>
                    <div class = 'addToCart'><i class='fa-regular fa-heart ' onclick = 'addToCart(${id})'></i></div>
                </div>
            </div>`
        )
    }

).join('');



const bag = document.querySelector('.bag');
bag.addEventListener('click' , ()=>

    {
        if(document.getElementsByClassName('card')[0].classList.length==2){
            document.getElementsByClassName('card')[0].classList.remove('active');
        }
        else document.getElementsByClassName('card')[0].classList.add('active');
    }
)
const closeShopping = document.querySelector('.closeShopping');
closeShopping.addEventListener('click' , ()=>

{
    if(document.getElementsByClassName('card')[0].classList.length==2){
        document.getElementsByClassName('card')[0].classList.remove('active');
    }
    else document.getElementsByClassName('card')[0].classList.add('active');
}
)
let quantity = document.querySelector('.quantity');
let listCards  = [];
let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
function addToCart(key){
    let i = 0;
    let found = false;
    console.log(listCards.length);
    while(i<listCards.length){
        if(listCards[i]!=null && listCards[i].id == key){
            changeQuantity(i ,listCards[i].quantity+1);
            found = true;
        }
        i++;
    }
    if(found == false){

        i=listCards.length;
        if(listCards[i] == null){
            // copy product form list to list card
            listCards[i] = JSON.parse(JSON.stringify(product[key]));
            listCards[i].quantity = 1;
        }
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.discountPrice;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div>${value.title}</div>
                <div style="font-weight:600">Rs.${value.discountPrice.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = 'Total : ' + totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];

    }else{
        listCards[key].quantity = quantity;
        listCards[key].discountPrice = quantity * product[listCards[key].id].discountPrice;
    }
    reloadCard();
}
