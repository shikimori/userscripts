// ==UserScript==
// @name         Shikimori edit fandubbers button
// @namespace    http://tampermonkey.net/
// @version      2024-10-27
// @description  Добавляет кнопку быстрого перехода на редактирование озвучки
// @author       admin@shikimori.one
// @match        *://shikimori.local/*
// @match        *://shikimori.one/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shikimori.one
// @downloadURL  https://github.com/shikimori/userscripts/blob/master/edit-fandubbers.user.js
// @updateURL    https://github.com/shikimori/userscripts/raw/refs/heads/master/edit-fandubbers.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const $ = window.$;

    $(document).on('turbolinks:load', ready);
    ready();

    function ready() {
        if (!window.location.pathname.startsWith('/animes/')) { return; }

        const $container = $('.b-subposter-actions');
        if (!$container.length) { return; }

        $('.b-subposter-action[data-custom="fandubbers"]').remove();
        $(`
          <a class="b-subposter-action edit-alt b-tooltipped unprocessed" data-custom="fandubbers" title="Озвучка" href="${$container.find('a.edit').attr('href')}/fandubbers" data-direction="top">
          </a>
        `)
            .appendTo($container)
            .process();
    }

})();
