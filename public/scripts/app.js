/*

 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


$(document).ready(function() {

  function createTweetElement(tweetObject) {
  // let $tweet = $("<article>").addClass("tweet");
  let $name = tweetObject["user"].name;
  let $img = tweetObject["user"]["avatars"].small;
  let $tag = tweetObject["user"].handle;
  let $content = tweetObject["content"].text;
  let $time = Math.round(tweetObject["created_at"] / 86400000000);


  let HTMlObj = `
    <article class="tweet">
      <header class="tweet-header">
        <div class="header-div">
          <img class="tweet-logos" src="${$img}" height="50px" width="50px">
          <span>${$name}</span>
        </div>

          <h4>${$tag}</h4>
          </header>
          <p>${$content}</p>
          <footer>
            <span class="timer">${$time} Days Ago</span>
            <div class = "icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
    </article>

  `
  $(".tweets").prepend(HTMlObj);

  }

  function renderTweet(tweets) {
    for(let tweet in tweets) {
      createTweetElement(tweets[tweet]);
    }
  }

renderTweet(data);
  //let $tweet = createTweetElement(tweetData);
  //console.log($tweet);

})










