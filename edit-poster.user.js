// ==UserScript==
// @name         Shikimori edit poster button
// @namespace    http://tampermonkey.net/
// @version      2024-10-27
// @description  Добавляет кнопку быстрого перехода на редактирование постера
// @author       admin@shikimori.one
// @match        *://shikimori.local/*
// @match        *://shikimori.one/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shikimori.one
// @downloadURL  https://raw.githubusercontent.com/shikimori/userscripts/refs/heads/master/edit-poster.user.js
// @updateURL    https://raw.githubusercontent.com/shikimori/userscripts/refs/heads/master/edit-poster.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const $ = window.$;

    $(document).on('turbolinks:load', ready);
    ready();

    function ready() {
        if (!window.location.pathname.match(/\/(?:animes|mangas|ranobe|characters|people)\//')) { return; }

        const $container = $('.b-subposter-actions');
        if (!$container.length) { return; }

        $('.b-subposter-action[data-custom="poster"]').remove();
        $(`
          <a class="b-subposter-action edit-alt b-tooltipped unprocessed" data-custom="poster" title="Постер" href="${$container.find('a.edit').attr('href')}/poster" data-direction="top">
          </a>
        `)
            .appendTo($container)
            .process();
    }

})();
