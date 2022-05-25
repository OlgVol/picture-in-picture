const videoElement = document.getElementById('video');
const button =document.getElementById('button');

async function selectMedeaStream () {
    try {
const mediaStream = await navigator.mediaDevices.getDisplayMedia();
videoElement.srcObject = mediaStream;
videoElement.onloadedmetadata = () => {
    videoElement.onplay();
};
    } catch (error) {

    }
}

button.addEventListener('click', async () => {
 button.disabled = true;
await videoElement.requestPictureInPicture();
button.disabled = false;


});

selectMedeaStream();