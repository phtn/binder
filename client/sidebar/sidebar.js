Template.sidebar.events({
	'click .brand-div': () => FlowRouter.go('/'),
	'click #peers': () => FlowRouter.go('/peers'),
	'click #classes': () => FlowRouter.go('/classes'),
	'click #projects': () => FlowRouter.go('/projects'),
	'click #schedule': () => FlowRouter.go('/schedule'),
	'click #events': () => FlowRouter.go('/events'),
})