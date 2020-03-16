//Initialize Your Firebase config


//Reference for form collection(3)



function sendMessage() 
{
  const ref = firebase.storage().ref();
const file = document.querySelector('#file').files[0]
const name = (+new Date()) + '-' + file.name;
console("Image is Uploading");
const metadata = {
  contentType: file.type,
  customMetadata:{
    'upvote': '0',
  'downvote': '0',
  'view': '0'
}
}; 
const task = ref.child(name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    console.log(url);
    document.querySelector('#someImageTagID').src = url;
  })
  .catch(console.error);
}
