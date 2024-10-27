// ==UserScript==
// @name         Shikimori edit external_links button
// @namespace    http://tampermonkey.net/
// @version      2024-10-27
// @description  Добавляет кнопку быстрого перехода на редактирование ссылок
// @author       admin@shikimori.one
// @match        *://shikimori.local/*
// @match        *://shikimori.one/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shikimori.one
// @downloadURL  https://raw.githubusercontent.com/shikimori/userscripts/refs/heads/master/edit-external_links.user.js
// @updateURL    https://raw.githubusercontent.com/shikimori/userscripts/refs/heads/master/edit-external_links.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const $ = window.$;

    $(document).on('turbolinks:load', ready);
    ready();

    function ready() {
        if (!window.location.pathname.match(/\/(?:animes|mangas|ranobe)\//)) { return; }

        const $container = $('.b-subposter-actions');
        if (!$container.length) { return; }

        $('.b-subposter-action[data-userscript="external_links"]').remove();
        $(`
          <a
            href="${$container.find('a.edit').attr('href')}/external_links"
            class="b-subposter-action edit-alt b-tooltipped unprocessed"
            title="Ссылки"
            data-direction="top"
            data-userscript="external_links"
          >
          </a>
        `)
            .appendTo($container)
            .process();
    }

})();
