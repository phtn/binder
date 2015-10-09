Meteor.startup(() => {
	if (Panels.find({}).count() === 0) {
		Panels.insert({
			panel: [
				{
					name: 'peers',
					icon: 'ion-person-stalker side-icons',
					title: ' PEERS'
				},
				{
					name: 'classes',
					icon: 'ion-ios-folder side-icons',
					title: ' CLASSES'
				},
				{
					name: 'projects',
					icon: 'ion-erlenmeyer-flask side-icons',
					title: ' PROJECTS'
				},
				{
					name: 'schedule',
					icon: 'ion-calendar side-icons',
					title: ' SCHEDULE'
				},
				{
					name: 'events',
					icon: 'ion-pound side-icons',
					title: ' EVENTS'
				}
			]
		})
	}

	if (TopBarFilters.find({}).count() === 0) {
		TopBarFilters.insert(
			[
				//'ALL','GROUPS','EXPLORE'
				{name: 'peers',filters: ['ALL','GROUPS','EXPLORE']},
				{name: 'classes',filters: [ 'PREVIOUS', 'ON-GOING', 'UP-COMING' ] }
			]
		)
	}

});