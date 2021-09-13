const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');
about.addEventListener('click',function(e){
    // It allows us to access all headings, 
    // paragraphs and buttons under the image.
    // console.log(e.target.dataset);
    // we can access data-i with dataset.i
    const id = e.target.dataset.i;
    if(id){  // if id is available, then code is continuous
        // remove active from other buttons
        btns.forEach(function(btn){
            // console.log(id);
            btn.classList.remove('active');
            // first we delete active class from all elements
            e.target.classList.add('active');
            // then we add the active class 
            // to the clicked elements
        })
        // hide other articles
        articles.forEach(function(article){
            // console.log(articles);
            // console.log("*********************");
            // console.log(article);
            article.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');

    }
})