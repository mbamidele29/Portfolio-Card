$(document).ready(function(){
    const main=$('.main');
    main.toggleClass('back');
    const link=$('.link');
    link.on('click', function(){
        const target = $(this).data('target');
        
        $('.biz-card > .card').toggleClass('hidden', true);

        // $(this).toggleClass('hidden', false);
        $('.biz-card').toggleClass('back', true);
        $('.biz-card .'+target).toggleClass('hidden', false);
    });
});