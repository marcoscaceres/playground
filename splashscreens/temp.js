(function() {
    var splash = document.querySelector('#splash'),
        main = document.querySelector('main');

    window.addEventListener('load', showSplash);

    function showSplash() {
        splash.classList.add('show');
        loadContent();
    }

    function fadeOut() {
        splash.removeEventListener('transitionend', fadeOut);
        splash.addEventListener('transitionend', removeSplash);
        splash.classList.remove('show');
        main.classList.remove('hide');
    }

    function removeSplash() {
        splash.removeEventListener('transitionend', removeSplash);
        this.parentElement.removeChild(this);
    }

    function loadContent() {
        var feed = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml'",
        newsContainer = document.querySelector('#newsItems'),
        newsContent = '',
        ajaxOps = {
            url: feed
        };

        function loadFail(e) {
            var msg = "Sorry, there was an error. Can't load news!";
            newsContainer.innerHTML = msg;
            splash.addEventListener('transitionend', fadeOut);
        }

        function showNews(data) {
            var items = $(data).find('item');
            $(items).each(processNewsItem);
            newsContainer.innerHTML = newsContent;
            splash.addEventListener('transitionend', fadeOut);
        }

        function processNewsItem(index, item) {
            var title = $(item).find('title').text(),
                desc = $(item).find('description').text(),
                pubDate = $(item).find('pubDate').text(),
                thumb = $(item).find('thumbnail').attr('url'),
                link = $(item).find('link').text(),
                content = '',
                headline = "<h2><a href='" + link + "'>" + title + '</a></h2>';

            thumb = thumb ? "<img class='thumb' src='" + thumb + "'>" : '';
            desc = '<p>' + thumb + desc + '</p>';
            pubDate = "<p class='date'>" + pubDate + '</p>';

            //add content to page
            content = '<article>' + headline + desc + pubDate + '</article>';
            newsContent += content;
        }
        $.ajax(ajaxOps).fail(loadFail).done(showNews);
    }
}());
