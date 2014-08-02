/*global GLOBE, Em */

/**
 * $.ajax wrapper that uses Ember.run to run async code.
 * Necessary for async Ember testing.
 * Inspired by discourse ajax wrapper.
 *
 * @see {@link https://github.com/discourse/discourse/blob/master/app/assets/javascripts/discourse/mixins/ajax.js}
 * @param {Object} settings
 * @returns {Promise}
 */
GLOBE.ajax = function (settings) {
    return new Em.RSVP.Promise(function(resolve, reject) {

            // prefix url
            settings.url = GLOBE.get('api') + settings.url;

            settings.success = function(response) {
                Em.run(null, resolve, response);
            };
            settings.error = function(jqXHR, textStatus) {
                Em.run(null, reject, textStatus);
            };
            Em.$.ajax(settings);

    });
};
/**
 * Calls GLOBE.ajax with parameters to imitate $.getJSON
 * @see {@link GLOBE.ajax}
 * @param {String} url
 * @param {Object} [data]
 * @returns {Promise}
 */
GLOBE.getJSON = function (url, data) {
    return GLOBE.ajax({
        dataType: 'json',
        data: data || {},
        url: url
    });
};