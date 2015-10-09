Meteor.subscribe('showPanels');

Template.sidebar.events({
	'click .brand-div': () => FlowRouter.go('/'),
	'click #peers': () => FlowRouter.go('/peers'),
	'click #classes': () => FlowRouter.go('/classes'),
	'click #projects': () => FlowRouter.go('/projects'),
	'click #schedule': () => FlowRouter.go('/schedule'),
	'click #events': () => FlowRouter.go('/events'),
});

Template.sidebar.helpers({

	sideBarPanel: () => {

		return Panels.find({})
	}
});
Template.sidebar.events({
	'click .panel-div': (e) => {
		console.log(e.target.id);
		Session.set('whichPanel', e.target.id)
	} 
});