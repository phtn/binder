Meteor.startup(() => {
	if (Panels.find({}).count() === 0) {
		Panels.insert({
			panel: [
				{
					name: 'peers',
					icon: 'ion-person-stalker side-icons',
					title: 'PEERS'
				},
				{
					name: 'classes',
					icon: 'ion-ios-folder side-icons',
					title: 'CLASSES'
				},
				{
					name: 'projects',
					icon: 'ion-erlenmeyer-flask side-icons',
					title: 'PROJECTS'
				},
				{
					name: 'schedule',
					icon: 'ion-calendar side-icons',
					title: 'SCHEDULE'
				},
				{
					name: 'events',
					icon: 'ion-pound side-icons',
					title: 'EVENTS'
				}
			]
		})
	}
});