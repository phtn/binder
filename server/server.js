Meteor.startup(() => {
	if (Panels.find({}) === 0) {
		Panels.insert(
			{
				name: 'peers',
				title: 'Peers',
				icon: 'ion-person-stalker.side-icons'
			}
		)
	}
});