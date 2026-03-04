// Countdown Timer
function updateCountdown() {
    const birthday = new Date('2026-03-05T00:00:00'); // Replace with actual birthday
    const now = new Date();
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// Image Slideshow
let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
function showImage(index) {
    images.forEach((img, i) => {
        img.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
showImage(currentIndex);

// Guest Messages
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${name}:</strong> ${message}`;
    document.getElementById('messageList').appendChild(messageDiv);
    this.reset();
});