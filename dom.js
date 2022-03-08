
function count(event){

 const count_value =  event.target.value ;
 tweetlength(count_value);

}

function tweetlength(count_value){
   
  //  console.log(count_value);
  const counter = document.querySelector(".counter");
  counter.innerText = `${count_value.length}/42`;
  window.localStorage.setItem("count_value",count_value);

}

const storing_tweet = window.localStorage.getItem("count_value");
document.querySelector(".tweet").innerText= storing_tweet;
tweetlength(storing_tweet);

//event.target -   element which started the event
//event.target.value -  word typed

