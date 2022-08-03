
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


