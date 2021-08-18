/**
 * <div class="lightbox">
        <div class="lightbox-content">
            <img src="https://images.pexels.com/photos/5038385/pexels-photo-5038385.jpeg?cs=srgb&dl=pexels-ave-calvar-martinez-5038385.jpg&fm=jpg" alt="" 
            class="lightbox-image">
        </div>
    </div>
 */
const images = document.querySelectorAll('.content img ');
images.forEach(item => item.addEventListener('click', handleZoomImage));

function handleZoomImage(event) {
    console.log(event.target);
    const image = event.target.getAttribute('src');
    const template = `<div class="lightbox">
    <div class="lightbox-content">
        <img src="${image}" alt="" 
        class="lightbox-image">
    </div>
</div>`;
    document.body.insertAdjacentHTML('beforeend', template);
}

document.body.addEventListener('click', function(e) {
    const lightImage = document.querySelector('.lightbox-image');
    let lightSrc = '';
    if (e.target.matches('.lightbox')) {
        e.target.parentNode.removeChild(e.target);

    }
});