
import * as cheerio from 'cheerio';
import axios from "axios";

const url = process.env.NEXT_PUBLIC_EGYBEST_URL;


// Async function which scrapes the data


export async function scrapeLeft() {


    try {
        const { data } = await axios.get(url);
        const leftData = []

        const $ = cheerio.load(data);

        $("#left .ba a[href^='https://www.egybest.kim/movies']").each((_, el) => {
            const link = {}
            const param = $(el).attr("href").split("/")
            link.path = param[param.length - 2] + "/" + param[param.length - 1]
            link.text = $(el).text()
            leftData.push(link)
        })

        console.log(leftData)
        return leftData


    } catch (err) {
        console.log(err);
    }
}

export async function getPage(){
    try {
        const dataPage = {
            title: "",
            movies: []
        }
        const url=process.env.NEXT_PUBLIC_EGYBEST_URL
        const { data } = await axios.get(url);
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        // Select all the list items in plainlist class
    
        dataPage.title = $("title").text()
    
        $("#mainLoad .mbox").each((i, el) => {
            const cards = []
            const box = {}
            const title = $(".pda strong", el).text()
            const moreLink = $(".pda a", el).attr("href")
            console.log(title)
            console.log(moreLink)
    
            $(".h_scroll .contents a", el).each((i, card) => {
                const cardData = {}
                cardData.link = $(card).attr("href")
                cardData.title = $(".title", card).text()
                cardData.imageSrc = $("img", card).attr("src")
                cardData.ribbonText = $(".ribbon", card).text()
                cardData.rate = $(".r", card).text()
    
                cards.push(cardData)
            })
            box.moreLink = moreLink
            box.title = title
            box.cards = cards
            dataPage.movies.push(box)
            console.log("__________________________________________")
        })
    
    
      return dataPage
    
    
    } catch (err) {
        console.error(err);
    }
}


