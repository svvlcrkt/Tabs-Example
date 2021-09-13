const btns = $('.tab-btn');
const about = $('.about');
const articles = $('.content');

about.click(function(e){
    const id = e.target.dataset.i;
    const i = e.target.dataset;
    if(id){
        btns.each(function(index,btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        articles.each(function(ind,article){
            article.classList.remove('active');
        })
        const element = $(`#${id}`);
        element.addClass('active');
       
    }

})