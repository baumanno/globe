;(function(window){

    window.prepareForTesting = function(App){

        document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
        document.write('<style>#ember-testing-container { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 800px; height: 800px} #ember-testing { display: block }</style>');

        // Test api fixtures
        App.TESTING_FIXTURES = {
            // search for 'ec2' without specific filter
            '/details?limit=50&search=ec2&fields=fingerprint,nickname,advertised_bandwidth,last_restarted,country,flags,or_addresses,dir_address,running,hashed_fingerprint': {
                'relays_published':'2014-01-01 01:00:00',
                'relays':[{'nickname':'nick','fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'dir_address':'127.0.0.1:9002','running':true,'flags':['Exit','Fast','Running','V2Dir','Valid'],'country':'pl','last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Named','Running','Stable','Valid'],'country':'us','last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'dir_address':'127.0.0.1:9002','running':true,'flags':['Fast','Guard','HSDir','Named','Running','Stable','V2Dir','Valid'],'country':'us','last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'dir_address':'127.0.0.1:9002','running':true,'flags':['Fast','HSDir','Named','Running','Stable','V2Dir','Valid'],'country':'us','last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'dir_address':'127.0.0.1:9002','running':true,'flags':['Fast','Running','V2Dir','Valid'],'country':'se','last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Running','Valid'],'country':'us','last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Fast','Running','Valid'],'country':'us','last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'dir_address':'127.0.0.1:9002','running':false,'flags':['Running','V2Dir','Valid'],'country':'se','last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456}],
                'bridges_published':'2014-01-01 01:00:00',
                'bridges':[{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':false,'flags':['Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456},{'nickname':'nick','hashed_fingerprint':'0000000000000000000000000000000000000000','or_addresses':['127.0.0.1:9001'],'running':true,'flags':['Fast','Guard','Running','Stable','Valid'],'last_restarted':'1970-08-20 01:00:00','advertised_bandwidth':123456}]
            },
            // search for 'globe integration test search expecting to find nothing' without specific filter
            '/details?limit=50&search=globe integration test search expecting to find nothing&fields=fingerprint,nickname,advertised_bandwidth,last_restarted,country,flags,or_addresses,dir_address,running,hashed_fingerprint': {
                'relays_published':'2013-12-11 20:00:00',
                'relays': [],
                'bridges_published':'2013-12-11 19:37:04',
                'bridges':[]
            }
        };

        App.rootElement = '#ember-testing';
        App.setupForTesting();
        App.injectTestHelpers();

        console.log('test bootstrap loaded');
    }

}(window));

