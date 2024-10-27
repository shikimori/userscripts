// ==UserScript==
// @name         Shikimori increment episodes_aired button
// @namespace    http://tampermonkey.net/
// @version      2024-10-27
// @description  Добавляет кнопку увеличения числа вышедших эпизодов
// @author       admin@shikimori.one
// @match        *://shikimori.local/*
// @match        *://shikimori.one/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shikimori.one
// @downloadURL  https://raw.githubusercontent.com/shikimori/userscripts/refs/heads/master/increment-episodes_aired.user.js
// @updateURL    https://raw.githubusercontent.com/shikimori/userscripts/refs/heads/master/increment-episodes_aired.user.js
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

        $('.b-subposter-action[data-userscript="increment-episodes_aired"]').remove();
        $(`
          <a
            href="${$container.find('a.edit').attr('href').replace('/edit', '/increment_episode')}"
            class="b-subposter-action increment-episodes_aired b-tooltipped unprocessed"
            title="Увеличить Эпизодов вышло"
            data-direction="top"
            data-userscript="increment-episodes_aired"
            data-confirm="Увеличить?"
            data-method="post"
            style='font-size: 24px; font-weight: bold; line-height: 1;'
          >
            +
          </a>
        `)
            .appendTo($container)
            .process();
    }
})();
