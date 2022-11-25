// Mobile menu related elemnts declearations
const humbergar = document.getElementById('navagation');
const close = document.getElementById('closemenu');

const mobileNav = document.getElementsByClassName('mobileNav');

const news = document.getElementById('news');
const programClose = document.getElementById('programClose');
const joinClose = document.getElementById('joinClose');
const sponsorClose = document.getElementById('sponsorClose');

function closeFun() {
  mobileNav[0].classList.remove('open');
  humbergar.classList.remove('close');
  mobileNav[0].classList.add('close');
  humbergar.classList.add('open');
}

news.addEventListener('click', () => {
  closeFun();
});

programClose.addEventListener('click', () => {
  closeFun();
});

joinClose.addEventListener('click', () => {
  closeFun();
});

sponsorClose.addEventListener('click', () => {
  closeFun();
});

humbergar.addEventListener('click', () => {
  mobileNav[0].classList.remove('close');
  humbergar.classList.remove('open');
  mobileNav[0].classList.add('open');
  humbergar.classList.add('close');
});

close.addEventListener('click', () => {
  closeFun();
});

// Teacher related Elements declearation
const teacherSection = document.getElementById('teacherSection');

const teacherSectionh3 = document.createElement('h3');
teacherSectionh3.classList.add('teacherSectionh3');
teacherSectionh3.innerText = 'Program Teachers';

const underline = document.createElement('div');
underline.classList.add('mp-underline');

const allteacherDIv = document.createElement('div');
allteacherDIv.classList.add('allteacherDIv');

// Teacher Section related data array
const teachers = [
  {
    img: './images/teacher1.jpg',
    name: 'Naiem Khan',
    details: 'Master degree in English litrature and language from Kardan',
    decription: 'Certified of Test of English as a Foreign Language and iealts international',
  },

  {
    img: './images/teacher2.jpg',
    name: 'Naiem Khan',
    details: 'Master degree in English litrature and language from Kardan',
    decription: 'Certified of Test of English as a Foreign Language and iealts international',
  },

  {
    img: './images/teacher3.jpg',
    name: 'Naiem Khan',
    details: 'Master degree in English litrature and language from Kardan',
    decription: 'Certified of Test of English as a Foreign Language and iealts international',
  },

  {
    img: './images/teacher4.jpg',
    name: 'Naiem Khan',
    details: 'Master degree in English litrature and language from Kardan',
    decription: 'Certified of Test of English as a Foreign Language and iealts international',
  },

  {
    img: './images/teacher1.jpg',
    name: 'Naiem Khan',
    details: 'Master degree in English litrature and language from Kardan',
    decription: 'Certified of Test of English as a Foreign Language and iealts international',
  },

  {
    img: './images/teacher6.jpg',
    name: 'Naiem Khan',
    details: 'Master degree in English litrature and language from Kardan',
    decription: 'Certified of Test of English as a Foreign Language, iealts and dulingue and sat international',
  },
];

teachers.forEach((item) => {
  const teacherDetails = document.createElement('div');
  teacherDetails.classList.add('teacherDetails');

  const teacherImage = document.createElement('img');
  teacherImage.classList.add('teacherImage');
  teacherImage.setAttribute('src', item.img);

  const teacherDetailsRightDiv = document.createElement('div');
  teacherDetailsRightDiv.classList.add('teacherDetailsRightDiv');

  const teacherName = document.createElement('h2');
  teacherName.classList.add('teacherName');
  teacherName.innerText = item.name;

  const teacherNameTopP = document.createElement('p');
  teacherNameTopP.classList.add('teacherNameTopP');
  teacherNameTopP.innerText = item.details;

  const teacherDetailsUnderline = document.createElement('div');
  teacherDetailsUnderline.classList.add('teacherDetailsUnderline');

  const teacherNameBottomP = document.createElement('p');
  teacherNameBottomP.classList.add('teacherNameBottomP');
  teacherNameBottomP.innerText = item.decription;

  // Add Childs to the given divs
  teacherDetailsRightDiv.append(teacherName, teacherNameTopP,
    teacherDetailsUnderline, teacherNameBottomP);

  teacherDetails.append(teacherImage, teacherDetailsRightDiv);
  allteacherDIv.append(teacherDetails);
});

// Append All Childs to Section
teacherSection.append(teacherSectionh3, underline, allteacherDIv);
