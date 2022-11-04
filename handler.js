const puppeteer = require('puppeteer');
const { Sequelize } = require('sequelize');

exports.handler = function ( event, context, callback ) {
    context.callbackWaitsForEmptyEventLoop = false;
};

module.exports.robots = async ({
    method1:async function robot(){
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();
        const vezpaTijucaUrl = `https://www.tripadvisor.com/Restaurant_Review-g303506-d9969088-Reviews-Vezpa_Pizzas_Tijuca-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
        await page.goto(vezpaTijucaUrl);
        await page.evaluate(()=>document.querySelector('span.taLnk.ulBlueLinks').click());
        const arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
        const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
        const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
        await browser.close();
    
        //while(await page.$('a.nav.next.ui_button.primary')){
        //    await page.evaluate(()=>document.querySelector('a.nav.next.ui_button.primary').click());
        //    arrayDate += await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
        //    break;
        //};   
    
        //GRAVAR DADOS NO BANCO
        arrayDate.forEach((dateDb, index) => {
            const titleDb = arrayTitle[index];
            const commentDb = arrayComment[index];
            console.log(dateDb,titleDb, commentDb);
    
            review.create({
                dateReview: dateDb,
                titleReview: titleDb,
                commentReview: commentDb
            });
        })  
    },
    //robot();
    method2:async function robotUrl2(){
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();
        const url = `https://www.tripadvisor.com/Restaurant_Review-g303631-d15679554-Reviews-Vezpa_Pizzas_Pinheiros-Sao_Paulo_State_of_Sao_Paulo.html`
        await page.goto(url);
        await page.evaluate(()=>document.querySelector('span.taLnk.ulBlueLinks').click());
    
        const arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
        const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
        const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
        //const arrayName = await page.evaluate(() => Array.from(document.querySelectorAll('.info_text.pointer_cursor div'), element => element.textContent));
        await browser.close();
    
        arrayDate.forEach((dateDb, index) => {
            const titleDb = arrayTitle[index];
            const commentDb = arrayComment[index];
            console.log(dateDb,titleDb, commentDb);
    
            review2.create({
                dateReview: dateDb,
                titleReview: titleDb,
                commentReview: commentDb
            });
        })
    },
    //robotUrl2();    
    method3:async function robotUrl3(){
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();
        const url = `https://www.tripadvisor.com/Restaurant_Review-g303506-d17542367-Reviews-Nema-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
        await page.goto(url);
        await page.evaluate(()=>document.querySelector('span.taLnk.ulBlueLinks').click());
    
        const arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
        const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
        const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
        await browser.close();
    
        arrayDate.forEach((dateDb, index) => {
            const titleDb = arrayTitle[index];
            const commentDb = arrayComment[index];
            console.log(dateDb);
    
            review3.create({
                dateReview: dateDb,
                titleReview: titleDb,
                commentReview: commentDb
            });
        })
    },
    //robotUrl3();
    method3:async function robotUrl3(){
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();
        const url = `https://www.tripadvisor.com/Restaurant_Review-g303506-d17542367-Reviews-Nema-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
        await page.goto(url);
        await page.evaluate(()=>document.querySelector('span.taLnk.ulBlueLinks').click());
    
        const arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
        const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
        const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
        await browser.close();
    
        arrayDate.forEach((dateDb, index) => {
            const titleDb = arrayTitle[index];
            const commentDb = arrayComment[index];
            console.log(dateDb);
    
            review3.create({
                dateReview: dateDb,
                titleReview: titleDb,
                commentReview: commentDb
            });
        })
    },
    //robotUrl3();
    method4:async function robotUrl4(){
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();
        const url = `https://www.tripadvisor.com/Restaurant_Review-g303506-d1636662-Reviews-Vezpa_Pizzas-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
        await page.goto(url);
        await page.evaluate(()=>document.querySelector('span.taLnk.ulBlueLinks').click());
    
        const arrayDate = await page.evaluate(() => Array.from(document.querySelectorAll('.ratingDate'), element => element.textContent));
        const arrayTitle = await page.evaluate(() => Array.from(document.querySelectorAll('.noQuotes'), element => element.textContent));
        const arrayComment = await page.evaluate(() => Array.from(document.querySelectorAll('.partial_entry'), element => element.textContent)); 
        await browser.close();
    
        arrayDate.forEach((dateDb, index) => {
            const titleDb = arrayTitle[index];
            const commentDb = arrayComment[index];
            console.log(dateDb);
    
            review4.create({
                dateReview: dateDb,
                titleReview: titleDb,
                commentReview: commentDb
            });
        })
    }
    //robotUrl4();            
})

