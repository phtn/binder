
function renderThisTemplate(page) {
	BlazeLayout.render('layout', {sidebar: "sidebar", topbar: "topbar", body: page})
};

FlowRouter.route('/', {
	name: "Landing",
	action(params) {
		renderThisTemplate('landing')
	}
});

FlowRouter.route('/peers', {
	name: "Peers",
	action(params) {
		renderThisTemplate('peers')
	}
});

FlowRouter.route('/classes', {
	name: "Classes",
	action(params) {
		renderThisTemplate('classes')
	}
});

FlowRouter.route('/projects', {
	name: "Projects",
	action(params) {
		renderThisTemplate('projects')
	}
});

FlowRouter.route('/schedule', {
	name: "Schedule",
	action(params) {
		renderThisTemplate('schedule')
	}
});

FlowRouter.route('/events', {
	name: "Events",
	action(params) {
		renderThisTemplate('events')
	}
});