var firebaseConfig = {
    apiKey: "AIzaSyB0wvsMig0uU4leN_05sxDdXDAkw3_oD6U",
    authDomain: "scalevr-4d9c9.firebaseapp.com",
    databaseURL: "https://scalevr-4d9c9.firebaseio.com",
    projectId: "scalevr-4d9c9",
    storageBucket: "scalevr-4d9c9.appspot.com",
    messagingSenderId: "226638434033",
    appId: "1:226638434033:web:09805222626254247c2350"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


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