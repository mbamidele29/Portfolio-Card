$(document).ready(function(){
    const link=$('.link');
    link.on('click', function(){
        const target = 'main';
        
        $('.biz-card.'+target).toggleClass('back', true);
    });
});