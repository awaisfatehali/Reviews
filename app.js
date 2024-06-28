 // local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'img1.png',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'img2.png',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'img3.png',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'img4.png',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const img1 = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
let count =0;

randomBtn.addEventListener("click", () =>{
  count = get_rendom_number();
  show();
  console.log(count);
})


prevBtn.addEventListener("click", () =>{
  if(count === 0)
    {
      count=3;
      show();
    }
    else if(count>0){
      count--;
      show();
    }
    console.log(count);
});
nextBtn.addEventListener("click", () =>{
  if(count === 3)
    {
      count=0;
      show();
    
    }
    else if(count < 3)
      {
        count++;
        show();
      }

  console.log(count);
});


function show(){
  img1.src = reviews[count].img;
  author.textContent = reviews[count].name;
  job.textContent = reviews[count].job;
  info.textContent = reviews[count].text;
}
function get_rendom_number(){
  return Math.floor(Math.random() * reviews.length);

}

