$(document).ready(function(){
    const main=$('.main');
    const prev=$('.prev');
    main.toggleClass('back');
    const link=$('.link');
    link.on('click', function(){
        const target = $(this).data('target');
        
        $('.biz-card > .card').toggleClass('hidden', true);

        $('.biz-card .'+target).toggleClass('hidden', false);
        $('.biz-card').toggleClass('back', true);

        prev.toggleClass('hidden', false);
    });

    prev.on('click', function(){
        prev.toggleClass('hidden', true);
        $('.biz-card').toggleClass('back', false);
    });
});