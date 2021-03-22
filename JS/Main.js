const video = document.getElementById("video");

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/MODELS"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/MODELS"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/MODELS"),
    faceapi.nets.FaceExpressionNet.loadFromUri("/MODELS"),
    faceapi.nets.ageGenderNet.loadFromUri("/MODELS")
]).then(startVideo)

function startVideo() {
    navigator.getUserMedia(
    { video: {} },
        stream => (video.srcObject = stream),
        err => console.log(err)
    )
}
