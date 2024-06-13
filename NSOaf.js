const imageUrls = [
    'stream_cho_anken_business1_000.png',
    'stream_cho_anken_business2_000.png',
    'stream_cho_otaku_superchat_006.png',
    'stream_cho_otaku_superchat_004.png',
    'stream_cho_anken_business4_000.png'
];

const randomTexts = [
  'The earth is round!',
  'The goverment made you a nerd!',
  'We live in a simulation!',
  'I am a fat little catarpiller!',
  "Stop crying, it won't help!"
];

const button = document.getElementById('pictureButton');
const image = document.getElementById('buttonImage');
const displayText = document.getElementById('buttonText');

button.addEventListener('click', () => {
  // Generate a random index within the imageUrls array
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  
  // Set the src attribute of the image to the randomly selected image URL
  image.src = imageUrls[randomIndex];

  const randomTextIndex = Math.floor(Math.random() * randomTexts.length);
  displayText.textContent = randomTexts[randomTextIndex];
});