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

  var storageRef = firebase.storage().ref();

var imgref;
var i=0;

storageRef.listAll().then(function(result)
{
  result.items.forEach(function(imageRef){
    //console.log("Image REference"+imageRef.toString());
    i++;
    displayImage(imageRef);

  });
});



function displayImage(imageRef) {
            imageRef.getDownloadURL().then(function (url) {
                imageRef.getMetadata().then(function (metadata) {
                    console.log(metadata.contentType);

                    dv = metadata.customMetadata.downvote;
                    uv = metadata.customMetadata.upvote;
                    cnt = metadata.customMetadata.view;

                    console.log("Downvote", metadata.customMetadata.downvote);
                    console.log("Upvote", metadata.customMetadata.upvote);
                    console.log("ViewCount", metadata.customMetadata.view);
                    //"'+ url + '" 
                    let render = '';
                    render += '<tr><td>';
                    render += '<br><img class="img-responsive" src = "'+url+'" onclick="ar(this)" width="100px" style="float: right">&nbsp;&nbsp;&nbsp;&nbsp;';
                    render += ' </td><td>';
                    
                    render += ' Views: </td><td>';
                    render += cnt;
                    render += ' Upvote: </td><td>';
                    render += uv;
                    render += '</td><td>';
                    render += ' Downvotes : </td><td>';
                    render += dv;
                    render += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="call-me-upvote" class="btn btn-info">Upvote</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                    render += '<button id="call-me-downvote" class="btn btn-danger">Downvote</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                    render += '</tr >';
                    $('#List').find('tbody').append(render);

                    document.getElementById("call-me-upvote").addEventListener('click',
                        function upvote() {
                            console.log("Upvote Called");
                            //console.log(img);
                            imageRef.getMetadata().then(function (metadata) {

                                dv = metadata.customMetadata.downvote;
                                uv = metadata.customMetadata.upvote;
                                cnt = metadata.customMetadata.view;

                                console.log("init Downvote", metadata.customMetadata.downvote);
                                console.log("init Upvote", metadata.customMetadata.upvote);
                                console.log("init ViewCount", metadata.customMetadata.view);
                            })
                            var uv = parseInt(metadata.customMetadata.upvote);
                            uv += 1;
                            var newMetadata = {
                                customMetadata: {
                                    'upvote': uv
                                }
                            }
                            // Update metadata properties
                            imageRef.updateMetadata(newMetadata).then(function (metadata) {
                                console.log("Updated Upvote", metadata.customMetadata.upvote);
                                window.location.href = "Epxlore.html";
                            }).catch(function (error) {
                                console.log(error);
                            });

                        });
                    document.getElementById('call-me-downvote').addEventListener('click',
                        function downvote() {
                            console.log("Downvote Called");
                            imageRef.getMetadata().then(function (metadata) {

                                dv = metadata.customMetadata.downvote;
                                uv = metadata.customMetadata.upvote;
                                cnt = metadata.customMetadata.view;

                                console.log("Downvote", metadata.customMetadata.downvote);
                                console.log("Upvote", metadata.customMetadata.upvote);
                                console.log("ViewCount", metadata.customMetadata.view);
                            })
                            var dv = parseInt(metadata.customMetadata.downvote);
                            dv += 1;
                            var newMetadata = {
                                customMetadata: {
                                    'downvote': dv
                                }
                            }
                            imageRef.updateMetadata(newMetadata).then(function (metadata) {
                                console.log("Updated Downvote", metadata.customMetadata.downvote);
                                window.location.href = "Epxlore.html";
                            }).catch(function (error) {
                                console.log(error);
                            });
                        });
                })
            })
        }



function ar(img)
{
  console.log(img);
let new_html='';
new_html+='<a-scene>';  
new_html+='<a-sky src="'+img.src+'">';
new_html+='</a-sky>';   
new_html+='</a-scene>';
$('#panaroma').append(new_html);
}
