const reviews = [{
        id: 0,
        name: "susan smith",
        job: "web developer",
        img: "./kadin.GIF",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus?',
    },
    {
        id: 1,
        name: "sn smith",
        job: "web developer",
        img: "./kadin.GIF",
        text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque qui cum illo repudiandae pariatur commodi odit dolorum ullam! Ducimus qui nam doloremque, cumque impedit a labore repudiandae maiores voluptatum consequatur.',
    }, {
        id: 2,
        name: "san smith",
        job: "web developer",
        img: "./kadin.GIF",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque atque culpa doloremque ipsa esse id earum praesentium amet similique! Eaque, quasi numquam. Iste veniam velit alias amet corrupti iusto aut quisquam eius ipsam assumenda beatae possimus aaliquam explicabo,illo perferendis nihil officia odio.Necessitatibus magni illo nam maxime nihil ? ',
    }, {
        id: 3,
        name: "an smith",
        job: "web dever",
        img: "./kadin.GIF",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem! Quisquam maxime totam illum? Ex.',
    },


]

const author = document.querySelector('#author')
const job = document.querySelector('#job')
const info = document.querySelector('#info')
const img = document.querySelector('#person-img')



const prevbtn = document.querySelector('.prev-btn')
const nextbtn = document.querySelector('.next-btn')
const randombtn = document.querySelector('.random-btn')

///set starting

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem)

})


function showPerson(person) {

    var item = reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
}

nextbtn.addEventListener('click', function() {
    if (currentItem < 3) {
        currentItem++;
        showPerson(currentItem)
    } else if (currentItem == 3) {
        currentItem = 0
        showPerson(currentItem)
    }


})

prevbtn.addEventListener('click', function() {
    if (currentItem > 0) {
        currentItem--;
        showPerson(currentItem)
    } else {
        currentItem = 0
        showPerson(currentItem)
    }
})
randombtn.addEventListener('click', function() {


    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)
})

//