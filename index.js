const cheerio = require("cheerio");
const axios = require("axios");

const firstPage ="https://www.irs.gov/efile-index-taxpayer-search?zip=93030&state=6"
const baseUrl = "https://www.irs.gov"
const list_data = []

async function getList(url){
    try{
        const response = await axios.get(url);
        const $=cheerio.load(response.data);

        const list = $("tr");
        list.each(function(){
            content = $(this).find(".views-align-left").text().trim();

            list_data.push({content})
        });

        if($(".next a").length > 0){
            next_page = baseUrl + $(".next a").attr("href");
            console.log(next_page)
            getList(next_page);
        }

        console.log(list_data);
    }
    catch(error){
        console.error(error);
    }

}

getList(firstPage);