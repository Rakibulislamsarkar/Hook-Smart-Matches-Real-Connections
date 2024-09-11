let user = [
    {
        profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        displayPic: "https://images.unsplash.com/photo-1585598007006-2995ea95e22a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        chats: "6",
        likes: "49",
        posts: "",
        explore: "",
        location: "Pune, India",
        name: "Aditi",
        age: "23",
        interests: [{
            icon: `<i class="ri-disc-line"></i>`,
            interest:"Music"
        },{
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest:"Painting"
        },
        {
            icon: `<i class="ri-roadster-line"></i>`,
            interest:"Travel"
        }],
        bio: "I'm ready to chat about the mysteries of the universe and share some laughs along the way. Let's dive into astrophysics while enjoying some good memes!.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluZGlhbiUyMHRlZW5hZ2VlciUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D",
        chats: "4",
        likes: "35",
        posts: "",
        explore: "",
        location: "Indore, India",
        name: "Meera",
        age: "22",
        interests: [{
            icon: `<i class="ri-movie-line"></i>`,
            interest:"Movie"
        },{
            icon: `<i class="ri-tent-fill"></i>`,
            interest:"Camping"
        },
        {
            icon: `<i class="ri-restaurant-line"></i>`,
            interest:"Food"
        }],
        bio: "I can quote Shakespeare 'til the cows come home and be the first on the dance floor at karaoke. Looking for someone who enjoys deep conversations and terrible puns. Bonus points if you can beat me at Mario Kart!.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1693846720431-caccd1bbaa78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1693846720436-5a7163156e92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        chats: "7",
        likes: "45",
        posts: "",
        explore: "",
        location: "Jaipur, India",
        name: "Saanvi",
        age: "21",
        interests: [{
            icon: `<i class="ri-movie-line"></i>`,
            interest:"Movie"
        },{
            icon: `<i class="ri-tent-fill"></i>`,
            interest:"Camping"
        },
        {
            icon: `<i class="ri-restaurant-line"></i>`,
            interest:"Food"
        }],
        bio: "I'm ready to chat about the mysteries of the universe and share some laughs along the way. Let's dive into astrophysics while enjoying some good memes!.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1693846720620-f8395fce330d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGdpcmwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1693846720591-65697df6723c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGdpcmwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        chats: "7",
        likes: "45",
        posts: "",
        explore: "",
        location: "Jaipur, India",
        name: "Shejal",
        age: "22",
        interests: [{
            icon: `<i class="ri-bell-line"></i>`,
            interest:"Concert"
        },{
            icon: `<i class="ri-luggage-cart-fill"></i>`,
            interest:"Travel"
        },
        {
            icon: `<i class="ri-video-on-fill"></i>`,
            interest:"Movie"
        }],
        bio: "By day, I code; by night, I volunteer at the animal shelter. Looking for someone who loves making a difference and binge-watching documentaries. Let's explore the universe and cuddle!.",
        isFriend: null
    },
];

function select(elem){
    return document.querySelector(elem);
}

function setData(index){
    select(".profileimg img").src = user[index].profilePic;
    select(".badge h5").textContent = user[index].chats;
    select(".badge2 h5").textContent = user[index].likes;
    select(".location h3").textContent = user[index].location;
    select(".name h1:nth-child(1)").textContent = user[index].name;
    select(".name h1:nth-child(2)").textContent = user[index].age;

    let clutter = "";
    user[index].interests.forEach(function(interest){
        clutter += `<div class="tag flex items-center bg-white/30 px-4 py-2 rounded-full gap-2">
            ${interest.icon}
            <h3 class="text-sm tracking-tight">${interest.interest}</h3>
        </div>`
    });

    select(".tags").innerHTML = clutter;
    select(".profileinfo p").textContent = user[index].bio;
}


let currentIndex = 0;
let isAnimating = false;

(function setInitial() {
    select('.mainCard img').src = user[currentIndex].displayPic;
    select(".incomingCard img").src = user[currentIndex + 1]?.displayPic || "";
    setData(currentIndex); // Update initial data
    currentIndex = 2;
})();

function imageChanger() {
    if (!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main = select(".mainCard");
                let incoming = select(".incomingCard");
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingCard");

                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                });

                // Check if currentIndex exceeds user array length
                if (currentIndex === user.length) 
                    currentIndex = 0;

                select(".mainCard img").src = user[currentIndex].displayPic;
                currentIndex++;
                main.classList.remove("mainCard");
                incoming.classList.add("mainCard");
                main.classList.add("incomingCard");
            }
        });

        tl.to(".mainCard", {
            scale: 1.1,
            opacity: 0,
            duration: 0.9,
            ease: Circ
        }, "a")
        .from(".incomingCard", {
            scale: 0.9,
            opacity: 0,
            duration: 1.1,
            ease: Circ
        }, "a");
    }
}


let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function(){
    imageChanger();
    setData(currentIndex - 1); // Update with currentIndex - 1
    gsap.from(".details .element", {
        y: "100%",
        stagger: 0.06,
        ease: "power4.easeInout",
        duration: 0.5,
    });
});

accept.addEventListener("click", function(){
    setTimeout(function(){
        imageChanger();
    }, 2000);
});



let con = select(".accept");
let love = select(".like");

con.addEventListener("click", function(){
    love.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
    love.style.opacity = '0.8'
    setTimeout(function(){
        love.style.transform = 'translateX(-50%) translateY(-50%) scale(0)'
    }, 3000)
    setTimeout(function(){
        love.style.opacity = '0'
        imageChanger();
        setData(currentIndex - 1);
        gsap.from(".details .element", {
            y: "100%",
            stagger: 0.06,
            ease: "power4easeInout",
            duration: 0.5,
         }
         )
    }, 1000)
});

love.addEventListener("click", function(){
    love.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
    love.style.opacity = '0.8'
    setTimeout(function(){
        love.style.transform = 'translateX(-50%) translateY(-50%) scale(0)'
    }, 3000)
    setTimeout(function(){
        love.style.opacity = '0'
        imageChanger();
    }, 1000)
});

(function containerCreation() {
    document.querySelectorAll(".element").forEach(function(element){
       let div =  document.createElement("div");
       div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
       div.appendChild(element);
       select(".details").appendChild(div);
});
})  (  ); 
