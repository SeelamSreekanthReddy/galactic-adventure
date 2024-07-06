sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'galactic/test/integration/FirstJourney',
		'galactic/test/integration/pages/SpacefarerList',
		'galactic/test/integration/pages/SpacefarerObjectPage'
    ],
    function(JourneyRunner, opaJourney, SpacefarerList, SpacefarerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('galactic') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSpacefarerList: SpacefarerList,
					onTheSpacefarerObjectPage: SpacefarerObjectPage
                }
            },
            opaJourney.run
        );
    }
);