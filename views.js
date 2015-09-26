var GUI = (function(){ //IIFE for all Views

var IssueView = Backbone.View.extend({
  render: function () {
		var title = this.model.get("title");
		var description = this.model.get("description");
		var creator = this.model.get("creator");
		var assignee = this.model.get("assignee");
		var status = this.model.get("status");
        this.$el.html("<div>Task:<br>" + title + " " + description + "</div>");
    },
});

var CreateTaskView = Backbone.View.extend({

});

var UnassignedTasksView = Backbone.View.extend({
	render: function () {
		var issues = this.collection;
		var self = this;
		issues.forEach(function(issue){
			var issueView = new IssueView({model: issue});
			issueView.render();
			self.$el.append(issueView.$el);
		});
	}
});

var UserTasksView = Backbone.View.extend({

});

var UserView = Backbone.View.extend({

});

var LoginView = Backbone.View.extend ({
	
	initialize: function() {
		console.log(this.collection);
		console.log(this.collection.findWhere({username:'Person1'}));
		var username=this.collection.findWhere({username:'Person1'});
		console.log(username.attributes.password);
		console.log($(this.el));
	},
	render: function () {
		var certainUserName = ($('#typedName').val());
		var username = this.collection.findWhere({username:'Person1'}).attributes.username;
		var userSelf = this;
		var inputUsername = '<input type="text" id="typedName" value=" input username  " />'
		console.log($('#typedName'));
		var password = this.collection;
		var inputPassword = '<input type="text" value=" '  + password + '" />'
		// userSelf.$el.html("<div>Login:<br>" + inputUsername + "</div>");
		// userSelf.$el.html("<div>Password:<br>" + inputPassword + "</div>");
		userSelf.$el.html("<div>Login:<br>" + inputUsername + "</div>" + "<div>Password:<br>" + inputPassword + "</div>")
		//maybe can combine lines 43 & 44 but starting with two separate divs.//
	// this.model.get('word');	
	}
});


// generic ctor to represent interface:
function GUI(users,issues,el) {
	var unAssignedTasks = new UnassignedTasksView({collection: issues});
	unAssignedTasks.render();
	$(el).append(unAssignedTasks.$el);

	var login = new LoginView({collection: users});
	login.render();
	$(el).append(login.$el);
};

return GUI;
}())
