let openSlide = () => {
  let slideElement = document.getElementById('nav2').style = 'display: initial; transition: 2s;';
  let mainSection = document.getElementById('main-doc').style = 'margin-left: 300px;';
  document.getElementById('navbar').style = 'display: none;';
  document.getElementById('name-heading').style = 'margin-left: 300px;';

}

let closeSlide = () => {
  let slide = document.getElementById('nav2').style = 'display: hidden;';
  let mainSection = document.getElementById('main-doc').style = 'margin-left: 0;';
  document.getElementById('navbar').style = 'display: initial;';
}
