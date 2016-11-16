define([
    // Vue.js
    'vue',
    'text!app/components/app/footer/footer.html',
], function (Vue, template) {

    // Create component Footer class
    var Footer = Vue.extend({
        template: template,
        data: function () {
            return { 
                developer_copyright: '© 2016 by Sergei Beskorovainyi. All rights reserved',
                email: ' bsa2657@yandex.ru'
            }
        }
    })
    return Footer;
});