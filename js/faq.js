$(document).ready(function () {
    $(".faq_item .faq_question").click(function () {
        let parent = $(this).parent();

        if (parent.hasClass("active")) {
            parent.removeClass("active");
            parent.find(".faq-answer").slideUp(300); 
            parent.find(".icon").text("+");
        } else {
            $(".faq_item").removeClass("active");
            $(".faq_answer").slideUp(300); 
            $(".icon").text("+");

            parent.addClass("active");
            parent.find(".faq_answer").slideDown(300); 
            parent.find(".icon").text("-");
        }
    });
});

