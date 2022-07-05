const quotes = [
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        author:"Nelson Mandela",
    },
    {
        quote:"In the end, it's not the years in your life that count. It's the life in your years.",
        author:"Abraham Lincoln",
    },
    {
        quote:" Never let the fear of striking out keep you from playing the game.",
        author:"Babe Ruth",
    },
    {
        quote:"Many of life's failures are people who did not realize how close they were to success when they gave up. ",
        author:"Thomas A. Edison",
    },
    {
        quote:"Life is either a great adventure or nothing.",
        author:"Helen Keller",
    },
    {
        quote:"Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
        author:"Barbara Bush",
    },
    {
        quote:"Despite the forecast, live like it's spring.",
        author:"Lilly Pulitzer",
    },
    {
        quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author:"Winston S. Churchill",
    },
    {
        quote:"When you go through hardships and decide not to surrender, that is strength. ",
        author:"Arnold Schwarzenegger",
    },
    {
        quote:"I’ve failed over and over and over again in my life and that is why I succeed. ",
        author:"Michael Jordan",
    },
    {
        quote:"If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is. ",
        author:"Angelina Jolie",
    },   
    {
        quote:"I am able to do all things through him who gives me strength ",
        author:"(Philippians 4:13)",
    }, 
    {
        quote:"But he knows what I am doing, and when he tests me, I will be pure as gold.",
        author:"(Job 23:10)",
    },
    {
        quote:"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life",
        author:"(John 3:16)",
    },
    {
        quote:"We make our own plans, but the LORD decides where we will go.",
        author:"(Proverbs 16:9)",
    },
    {
        quote:"For now there are faith, hope, and love. But of these three, the greatest is love ",
        author:"(1 Corinthians 13:13)",
    },
    {
        quote:"Respect and obey the LORD! This is the beginning of wisdom. To have understanding, you must know the Holy God ",
        author:"(Proverbs 9:10)",
    },
    {
        quote:"Yet to all who did received him, to those who believed his name, he gave the right to become children of God",
        author:"(John 1:12)",
    },
    {
        quote:"Don't worry about anything, but pray about everything. With thankful hearts offer up your prayers and requests to God ",
        author:"(Philippians 4:6)",
    },
    {
        quote:"Call to me and I will answer you and tell you great and unsearchable things you do not know",
        author:"(Jeremiah 33:3)",
    },
    {
        quote:"but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        author:"(Isaiah 40:31)",
    },
    {
        quote:"And we know that in all things God works for the good of those who love him, who have been called according to his purpose.​",
        author:"Romans 8:28",
    },
    {
        quote:"Why are you downcast, O my soul? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.",
        author:"(Psalms 42:11)",
    },  
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author