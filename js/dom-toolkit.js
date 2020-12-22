/*! Domoscio Front-end Toolkit 1.0.2 | http://www.domoscio.com | (c) 2019 Domoscio | MIT License */

/* ========================================================================
   Component: List Timeline Active
 ========================================================================== */


this.DomListTimeline = class DomListTimeline {
    constructor() {

        $.each($('.dom-list-timeline[dom-active]'), function (i, list) {
            var li = $(list).children('li');
            if (!$(li).hasClass('dom-active'))
                li.first().addClass('dom-active');
        });

        $('.dom-list-timeline[dom-active] li').on('click', function () {
            var ul = $(this).parent();
            ul.children('li').removeClass('dom-active');
            $(this).addClass('dom-active');
        });

    }

};

new DomListTimeline;