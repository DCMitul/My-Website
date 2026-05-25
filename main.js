// cursor
const cursor = document.querySelector('.custom-cursor.full-site');

document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

document.addEventListener('mousemove', trackcursor);

document.addEventListener('mousedown', () => cursor.classList.add('active'));
document.addEventListener('mouseup', () => cursor.classList.remove('active'));

function trackcursor(evt) {
    const width = cursor.clientWidth;
    const height = cursor.clientHeight;
    cursor.style.transform = `translate(${evt.clientX - width / 2}px, ${evt.clientY - height / 2}px)`;
}



