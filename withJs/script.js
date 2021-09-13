const btns = $('.tab-btn');
const about = $('.about');
const articles = $('.content');

about.click(function(e){
    const id = $(e.target).data('i');
    // console.log(id);
    if(id){
        btns.each(function(index,btn){
            $(btn).removeClass('active');
            $(e.target).addClass('active');
        })
        articles.each(function(ind,article){
            // with jQuery we can write a variable inside a dolar sign 
            $(article).removeClass('active');
        })
        const element = $(`#${id}`);
        element.addClass('active');
       
    }

})