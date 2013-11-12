/*global GLOBE, moment */
GLOBE.DataTableRenderer = {
    /**
     * @see {@link GLOBE.Util.UptimeCalculator}
     * @param length {String} 'short' or 'long'
     * @returns {Function} Formatter for length
     */
    uptime: function (length) {
        return function (data, type) {
            if (type === 'display') {
                return GLOBE.Util.UptimeCalculator(data, length).join(' ');
            }
            return moment(data, 'YYYY-MM-DD HH:mm:ss').valueOf();
        };
    },
    /**
     * @see {@link GLOBE.Formatter.bandwidth}
     * @param data {String|Number}
     * @param type
     * @returns {String|Number} formatted String or data if type equals 'display'
     */
    bandwidth: function (data, type) {
        if (type === 'display') {
            return GLOBE.Formatter.bandwidth(data);
        }
        return data;
    },
    /**
     * @see {@link GLOBE.Formatter.countryFlag}
     * @param data {String}
     * @param type
     * @returns {String} formatted country flag or
     */
    countryFlag: function (data, type) {
        if (type === 'display') {
            return GLOBE.Formatter.countryFlag(data);
        }
        return data;
    },
    /**
     * @see {@link GLOBE.Formatter.propFlag}
     * @param data {String}
     * @param type
     * @returns {String}
     */
    flags: function (data, type) {
        if (type === 'display') {
            var flagString = '';

            // create flag render
            if(!data.length){
                return '';
            }
            data.forEach(function(n){
                flagString += GLOBE.Formatter.propFlag(n);
            });
            return flagString;
        }
        return data;
    },
    /**
     * Uses {@link GLOBE.Formatter.extractPort} to extract a port from the first element of data
     *
     * @see {@link GLOBE.Formatter.extractPort}
     * @param data {Array}
     * @param type
     * @returns {String} extracted port
     */
    firstPort: function (data, type) {
        data = data[0];
        if (type === 'display') {
            return GLOBE.Formatter.extractPort(data);
        }
        return data;
    },
    /**
     * @see {@link GLOBE.Formatter.extractPort}
     * @param data {String}
     * @param type
     * @returns {String}
     */
    port: function (data, type) {
        if (type === 'display') {
            return GLOBE.Formatter.extractPort(data);
        }
        return data;
    }
};