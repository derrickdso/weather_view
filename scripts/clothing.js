var puppeteer = require('puppeteer');
var stringify = require('csv-stringify');
var fs = require('fs');
var moment = require('moment');

const _urbn = {
    LIVE:false,
    ID:"",
    title:
        {selector: "" },
    views:"",
    date:
        {selector: "" },
    budget:
        {selector: "" },
    email:
        { 
            selector:"" 
        },
    category:
        { 
            main:"default", 
            imported:"default" 
        },
    description:
        {selector:"" },
    URL:
        { 
            main:"https://www.urbanoutfitters.com", 
            jacket:"https://www.urbanoutfitters.com/shop/herschel-supply-co-forecast-rain-coat?adpos=1o1&cm_mmc=SEM-_-Google-_-PLA-_-414308617111_condition_new_product_type_womens_product_type_apparel_product_t&color=001&creative=251335296627&device=c&gclid=Cj0KCQjwxbzdBRCoARIsACzIK2mRgqGCIGcgLAtM_P8BMNuNBC7JPlFSeqMIqArTKE1XQ4B4HiFP3NsaAtBvEALw_wcB&inventoryCountry=US&matchtype=&mrkgadid=3275540864&mrkgcl=671&network=g&product_id=44524031&utm_campaign=BRAND_SHOPPING"
        },
    production:false,
    list_title:
        {selector:"" },
    length:
        {selector:"" },
    log:
        { 
            dev:"../log/urbn.log" 
        },
    csv:
        {
            dev:"../output/leads.csv" 
        },
    jacket:
    {
        selector:"",
    },
    page_count:1
}


if(_urbn.LIVE){
    var log = require('simple-node-logger').createSimpleFileLogger(_urbn.log.live);
    var csv_path = _urbn.csv.live;
}
else{
    var log = require('simple-node-logger').createSimpleFileLogger(_urbn.log.dev);
    var csv_path = _urbn.csv.dev;
}

async function urbn() {
    var data = [];
    log.info('. . . Starting urbn Scraping Process');
    const browser = await puppeteer.launch({
        headless: false
      });
    const page = await browser.newPage()
    await page.goto(_urbn.URL.main)
                //scraping
    let title = await page.evaluate((sel) => document.querySelector(sel).innerText, '#u-skip-anchor > div.c-product-container__outer.dom-pdp > div:nth-child(2) > div.o-row.c-product-container.dom-main-product > div.c-product-container__info-wrap-reverse > div.o-column.o-extra-small--12.o-small--6.c-product-container__inner > div > div > div.js-product-meta > div.s-product-meta.c-product-meta > h1 > span');
    
    log.info('All Leads Scraped Successfully!');
    await browser.close();
    return title;
}
//Executable
urbn();