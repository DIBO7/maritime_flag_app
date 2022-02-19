pretextToShare = "Conviniently learn the maritime flags with this free maritime flag app. Take the quizzer whenever you like!"

url = "https://maritime-flag-app.vercel.com"

//let sharedText = "(reference: " + summary.quotation[0].source + "):  \r\n\r\n" + summary.morals + " \r\n\r\n\r\n Source: https://muslimguide.herokuapp.com"

let tweetText = "(ref: " + summary.quotation[0].source + "):\n\n" + summary.morals.slice(0, 280 - summary.quotation[0].source.length - 60) + "... \n\nsee more https://muslimguide.herokuapp.com"
//the lenght of of tweet is 280, so the static texts are 52, 
//52 + the lenght of the quotation source string and the sliced lenght of the morals shouls be 280 or ;ess

//"):\n\n" -> newline for twitter

//%0a%0a" ->newline for whatsapp

let whatsAppText = "(ref: " + summary.quotation[0].source + "):  %0a%0a" + summary.morals.slice(0, 700 - summary.quotation[0].source.length - 200) + "... %0a%0a see more https://muslimguide.herokuapp.com"


href={"https://twitter.com/intent/tweet?text=" + escape(tweetText)} data-size="large">

href={"whatsapp://send?text=" + whatsAppText} data-action="share/whatsapp/share"

href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmuslimguide.herokuapp.com%2F&amp;src=sdkpreparse`}

href={"mailto:?subject=Sharing The Teachings Of Islam From Muslim Guide&body=" + sharedText} title="Share by Email">