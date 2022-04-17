var image1 = document.getElementById("img1")
    var image2 = document.getElementById("img2")
    var image3 = document.getElementById("img3")
    var image4 = document.getElementById("img4")
    var image5 = document.getElementById("img5")
    console.log(image1)

    var a = 0;

    


const slide = () => {
            if (a === 0) {
                image1.style.transform = "translateX(0vw)"
                image2.style.transform = "translateX(0vw)"
                image3.style.transform = "translateX(0vw)"
                image4.style.transform = "translateX(0vw)" 
                image5.style.transform = "translateX(0vw)"
                a = 1
                // console.log(i)
    
                setTimeout('slide()', 3000);
            } else if (a === 1) {
                image1.style.transform = "translateX(-80vw)"
                image2.style.transform = "translateX(-80vw)"
                image3.style.transform = "translateX(-80vw)"
                image4.style.transform = "translateX(-80vw)"
                image5.style.transform = "translateX(-80vw)"
                a = 2
    
                // console.log(i)
                setTimeout('slide()', 3000);
            } else if (a === 2) {
                image1.style.transform = "translateX(-160vw)"
                image2.style.transform = "translateX(-160vw)"
                image3.style.transform = "translateX(-160vw)"
                image4.style.transform = "translateX(-160vw)"
                image5.style.transform = "translateX(-160vw)"
                a = 3
    
                // console.log(i)
                setTimeout('slide()', 3000);
            } else if (a === 3) {
                image1.style.transform = "translateX(-240vw)"
                image2.style.transform = "translateX(-240vw)"
                image3.style.transform = "translateX(-240vw)"
                image4.style.transform = "translateX(-240vw)"
                image5.style.transform = "translateX(-240vw)"
                a = 4
                // console.log(i)
    
                setTimeout('slide()', 3000);
            } else if (a === 4) {
                image1.style.transform = "translateX(-320vw)"
                image2.style.transform = "translateX(-320vw)"
                image3.style.transform = "translateX(-320vw)"
                image4.style.transform = "translateX(-320vw)"
                image5.style.transform = "translateX(-320vw)"
                a = 0
                // console.log(i)
    
                setTimeout('slide()', 3000);
            }
        }
    
        function back(){
            if (a === 0) {
                image1.style.transform = "translateX(0vw)"
                image2.style.transform = "translateX(0vw)"
                image3.style.transform = "translateX(0vw)"
                image4.style.transform = "translateX(0vw)"
                image5.style.transform = "translateX(0vw)"
                a = 1
            } else if (a === 1) {
                image1.style.transform = "translateX(-80vw)"
                image2.style.transform = "translateX(-80vw)"
                image3.style.transform = "translateX(-80vw)"
                image4.style.transform = "translateX(-80vw)"
                image5.style.transform = "translateX(-80vw)"
                a = 2
            } else if (a === 2) {
                image1.style.transform = "translateX(-160vw)"
                image2.style.transform = "translateX(-160vw)"
                image3.style.transform = "translateX(-160vw)"
                image4.style.transform = "translateX(-160vw)"
                image5.style.transform = "translateX(-160vw)"
                a = 3
            } else if (a === 3) {
                image1.style.transform = "translateX(-240vw)"
                image2.style.transform = "translateX(-240vw)"
                image3.style.transform = "translateX(-240vw)"
                image4.style.transform = "translateX(-240vw)"
                image5.style.transform = "translateX(-240vw)"
                a = 4
            } else if (a === 4) {
                image1.style.transform = "translateX(-320vw)"
                image2.style.transform = "translateX(-320vw)"
                image3.style.transform = "translateX(-320vw)"
                image4.style.transform = "translateX(-320vw)"
                image5.style.transform = "translateX(-320vw)"
                a = 0
            }
        }
    
    

    var im1 = ['https://i.ibb.co/G7gLQmZ/xl-c301-white-dennis-lingo-original-imaff64h5mca5ysw.jpg',
        "https://i.ibb.co/2txQq3R/m-mss21eppsh1015c-metronaut-original-imag8f6kkh84wdzh.jpg",
        "https://i.ibb.co/R69j1m7/m-pk19sh09g-surhi-original-imaft8vgvhmhbhsy.jpg",
        "https://i.ibb.co/x89200t/l-c301-dustygreen-dennis-lingo-original-imafzvvr7q8zn9kh.jpg"
    ]

    var im2 = ["https://i.ibb.co/sKC6d63/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpg",
        "https://i.ibb.co/pdh8tfx/s-black-5-jai-textiles-original-imag42m5hcfue7np.jpg",
        "https://i.ibb.co/JdKZwYW/44-8985565-roadster-original-imafjvyvqzycq8gf.jpg",
        "https://i.ibb.co/8x0BDJH/xl-c301-b-green-dennis-lingo-original-imag42z8fxqvxgzu.jpg"
    ]


    var i = 0

    function show() {
        var imag1 = document.getElementById("im1")
        var imag2 = document.getElementById("im2")
        setInterval(function () {
            imag1.src = im1[i]
            imag2.src = im2[i]
            //  image.style.transition(0.7)
            i++
            if (i == im2.length) {
                i = 0
            }
        }, 2000)
    }
    show()

    var shop_by_category = ["https://i.ibb.co/wcwNV6k/PC-1-Desktop-Men-05-Mar2022.jpg",
        "https://i.ibb.co/qC5T43q/PC-2-Desktop-Men-05-Mar2022.jpg",
        "https://i.ibb.co/58Bfvj7/PC-3-Desktop-Men-05-Mar2022.jpg",
        "https://i.ibb.co/GknvK9m/PC-4-Desktop-Men-05-Mar2022.jpg",
        "https://i.ibb.co/BVpbRKf/PC-6-Desktop-Men-05-Mar2022.jpg",
        "https://i.ibb.co/TRjW5ch/PC-7-Desktop-Men-05-Mar2022.jpg",
        "https://i.ibb.co/9nBnqh8/PC-8-Desktop-Men-05-Mar2022.jpg",
        "https://i.ibb.co/VMhjskp/PC-9-Desktop-Men-16-Mar2022.jpg",
        "https://i.ibb.co/yBPbh0k/PC-11-Desktop-Men-05-Mar2022.jpg",
        "https://i.ibb.co/4frLZjJ/PC-12-Desktop-Men-05-Mar2022.jpg"
    ]

    var images = document.getElementById("inner_shop_by_cate")
    images.innerHTML = ``
    shop_by_category.forEach((ele) => {
        // console.log(ele)
        let im = document.createElement("img")
        im.src = ele
        images.append(im)
    })

    var top_brand = ["https://i.ibb.co/svnHXvT/PC1-Men-categorybanner1-04-March2022.jpg",
        "https://i.ibb.co/xfKwjpR/PC1-Men-categorybanner2-04-March2022.jpg",
        "https://i.ibb.co/S0hHbG9/PC1-Men-categorybanner3-23-March2022.jpg",
        "https://i.ibb.co/F812DrK/PC1-Men-categorybanner4-04-March2022.jpg",
        "https://i.ibb.co/VNMxQS1/PC1-Men-categorybanner5-04-March2022.jpg",
        "https://i.ibb.co/Tt9r69y/PC1-Men-categorybanner6-04-March2022.jpg"
    ]

    var images2 = document.getElementById("inner_top_brand")
    images2.innerHTML = ``
    top_brand.forEach((ele) => {
        // console.log(ele)
        let im = document.createElement("img")
        im.src = ele
        images2.append(im)
    })

    var arrival = ["https://i.ibb.co/N9BcYCw/PC3-Men-banner1-04-March2022.jpg",
        'https://i.ibb.co/84w6VqK/PC3-Men-banner2-04-March2022.jpg',
        'https://i.ibb.co/DGB9zyM/PC3-Men-banner3-04-March2022.jpg',
        "https://i.ibb.co/LRWyNpG/PC3-Men-banner4-04-March2022.jpg",
        "https://i.ibb.co/9nYK11g/PC3-Men-banner5-04-March2022.jpg",
        "https://i.ibb.co/GvY3xZh/PC3-Men-banner6-04-March2022.jpg"
    ]

    var images3 = document.getElementById("arrival")
    images3.innerHTML = ``
    top_brand.forEach((ele) => {
        // console.log(ele)
        let im = document.createElement("img")
        im.src = ele
        images3.append(im)
    })

    var top_pics = ["https://i.ibb.co/hydBrj7/desktop-Men-3modularblock-1-one-Bythree-04-March2022.jpg",
        "https://i.ibb.co/QH27bfT/desktop-Men-3modularblock-2-one-Bythree-04-March2022.jpg",
        "https://i.ibb.co/5xtcPs1/desktop-Men-3modularblock-3-one-Bythree-23-March2022-A.jpg"
    ]

    var images4 = document.getElementById("top_pics")
    images4.innerHTML = ``
    top_pics.forEach((ele) => {
        // console.log(ele)
        let im = document.createElement("img")
        im.src = ele
        images4.append(im)
    })

    var top_pics2 = ["https://i.ibb.co/2nqb2VC/desktop-Men-3modblck-1-one-Bythree-A-04-March2022.jpg",
        "https://i.ibb.co/CMt95pX/desktop-Men-3modblck-2-one-Bythree-A-04-March2022.jpg",
        "https://i.ibb.co/NKJz5mG/desktop-Men-3modblck-3-one-Bythree-A-04-March2022.jpg"
    ]



    var images5 = document.getElementById("top_pics2")
    images5.innerHTML = ``
    top_pics2.forEach((ele) => {
        // console.log(ele)
        let im = document.createElement("img")
        im.src = ele
        images5.append(im)
    })

    var top_pics3 = ["https://i.ibb.co/VvHb0nK/LS-MEN-11modularblock-one-Bythree-A-Men-04-March2022.jpg",
        "https://i.ibb.co/N2KDh0M/LS-MEN-11modularblock-one-Bythree-B-Men-04-March2022.jpg",
        "https://i.ibb.co/ZV8msYd/LS-MEN-11modularblock-one-Bythree-C-Men-11-March2022.jpg"
    ]

    var images6 = document.getElementById("top_pics3")
    images6.innerHTML = ``
    top_pics3.forEach((ele) => {
        // console.log(ele)
        let im = document.createElement("img")
        im.src = ele
        images6.append(im)
    })

    var top_pics4 = ["https://i.ibb.co/dDjTBNW/desktop-Men-4modularblock-1-one-Bythree-06-Mar2022.jpg",
        "https://i.ibb.co/WVQRyCw/desktop-Men-4modularblock-2-one-Bythree-06-Mar2022.jpg",
        "https://i.ibb.co/28z30wG/desktop-Men-4modularblock-3-one-Bythree-30-Mar2022.jpg"
    ]
    var images7 = document.getElementById("top_pics4")
    images7.innerHTML = ``
    top_pics4.forEach((ele) => {
        // console.log(ele)
        let im = document.createElement("img")
        im.src = ele
        images7.append(im)
    })

var deal_corner=[
    {img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009813654-Var8-Black-Black-1000009813654-Var8_01-2100.jpg",
      price:899, title:"KAPPA Men solid Elasticated Track Pants", id:50},
      {img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000005621959-Kira-Rib-Grey-Grey-Melange-1000005621959_01-2100.jpg",
    price:849, title:"Kappa Pocketed Jogger Trackpants",id:51},
    {img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882590-Green-Green-1000010882590_01-2100.jpg",
    price:1195,title:"FAHRENHIETE Men Striped Polo T-Shirt",id:52},
    {img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007642445-Black-GREYBLACK-1000007642445_01-2100.jpg",
price:719, title:"KAPPA Textured Crew Neck Regular fit T-shirts of 2-pcs.",id:53},
{img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010436293-Red-Red-1000010436293_01-2100.jpg",
  price:419, title:"KAPPA Men Printed Regular Neck crew T-shirt",id:54},
  {img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010435815-Green-1000010435815_01-2100.jpg",
price:799, title:"DENIMIZE Men Ombre Pattern  Regular Neck crew T-shirt",id:55},
{img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000005621928-Kira-Open-Grey-Charcoal-Melange-1000005621928_01-2100.jpg",
price:999, title:"KAPPA Men solid Elasticated Track Pants",id:56},
{img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007979748-Red-RED-1000007979748_01-2100.jpg",
price:999, title:"ADIDAS Solid Tape Detail Regula Fit T-shirt.", id:57}
]

var deal_corner_footer=document.getElementById("deal_corner_footer")
deal_corner_footer.innerHTML=``
deal_corner.forEach((ele)=>{
    let div=document.createElement("div")

    let image=document.createElement("img")
    image.src=ele.img

    let p=document.createElement("p")
    p.innerText=ele.price

    let child_div=document.createElement("div")
    child_div.innerHTML=ele.title

    let btn=document.createElement("button")
    btn.innerText=`Add To Cart`
    div.append(image,p,child_div,btn)
    deal_corner_footer.append(div)
})

var slide_left=document.getElementsByClassName("slide_left")

const left =()=>{
    console.log(1)
    document.getElementById("deal_corner_footer").style.transition='2s'
    document.getElementById("deal_corner_footer").style.transform='translateX(-55vw)'
    document.getElementById("sr").style.display=' inline';
    document.getElementById("sl").style.display=' none';
}

const right=()=>{
    console.log(1)
    document.getElementById("deal_corner_footer").style.transition='2s'
    document.getElementById("deal_corner_footer").style.transform='translateX(0vw)'
    document.getElementById("sr").style.display=' none';
    document.getElementById("sl").style.display=' inline';
}


const submit_email=()=>{
    var email=document.getElementById("email").value
    console.log(email)
    var local=localStorage.getItem("subscribers_through_Emails")
    if(local === null ){
        localStorage.setItem("subscribers_through_Emails",'[]')
    }
    var arr=JSON.parse(localStorage.getItem("subscribers_through_Emails"))
    arr.push(email)
    localStorage.setItem("subscribers_through_Emails",JSON.stringify(arr))
    alert(`Thank You for Subscribing Us`)
    document.getElementById("email").value=``
}

var d=JSON.parse(localStorage.getItem("cartProducts"))
document.getElementById("cart").innerText=d.length

