Meteor.subscribe('showTopBarFilters');

Template.topbar.helpers({
	topBarFilter: () => {
		return TopBarFilters.find()
	}

})