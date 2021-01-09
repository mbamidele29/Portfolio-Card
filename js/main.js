$(document).ready(function(){
    const main=$('.about');
    main.toggleClass('back');
    const link=$('.link');
    link.on('click', function(){
        const target = $(this).data('target');
        
        $('.biz-card > .card').toggleClass('hidden', true);

        $('.biz-card .'+target).toggleClass('hidden', false);
        $('.biz-card').toggleClass('back', true);
    });
});