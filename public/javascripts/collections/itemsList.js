App.Collections = App.Collections || {};

(function () {
    'use strict';

    App.Collections.ItemsList = Backbone.Collection.extend({

        model: App.Models.Item

    });

})();
