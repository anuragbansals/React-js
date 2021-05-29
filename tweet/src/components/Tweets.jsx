import React, { useState } from 'react'
import Tweet from './Tweet'


const Tweets = () => {
    const [tweets, setTweets] = useState([
        {
            id: 1,                                                       
            name : "Charles Martin",
            twitterHandle : "@charlie",
            tweet:"This is charlie!",
            phoneNumber : "9163223322",
            emailAddress : "charlie123@gmail.com",
            likes: 0
        },
        {
            id: 2,
            name:"Johnes Phileppe",
            twitterHandle : "@johnnie",
            tweet:"This is John here!",
            phoneNumber : "9163223322",
            emailAddress : "johnnie123@gmail.com",
            likes: 0
        },
        {
            id: 3,
            name:"Bruno Mars",
            twitterHandle : "@bruno",
            tweet:"This is Bruno!",
            phoneNumber : "9163223322",
            emailAddress : "bruno123@gmail.com",
            likes: 0
        },
        {
            id: 4,
            name:"Johnes Phileppe",
            twitterHandle : "@johnnie",
            tweet:"This is John here!",
            phoneNumber : "9163223322",
            emailAddress : "johnnie123@gmail.com",
            likes: 0
        },
        {
            id: 5,
            name:"Johnes Phileppe",
            twitterHandle : "@johnnie",
            tweet:"This is John here!",
            phoneNumber : "9163223322",
            emailAddress : "johnnie123@gmail.com",
            likes: 0
        }
    ])
    const handleUpVote = (id) => {
        const newState = [...tweets]
        const index = tweets.findIndex(el=> el.id===id)
        newState[index].likes+=1;
        setTweets(newState)
    }
    const handleDownVote = (id) => {
        const newState = [...tweets]
        const index = tweets.findIndex(el=> el.id===id)
        if(newState[index].likes>0){
            newState[index].likes-=1;
        }
        setTweets(newState);
    }

    const renderTweets = () => {
        return tweets.map(ele => {
            return (
                <Tweet
                    handleDownVote = {handleDownVote}
                    handleUpVote = {handleUpVote}
                    tweet = {ele}
                />
            )
        })
    }

    return <div>{renderTweets()}</div>
    
}

export default Tweets;