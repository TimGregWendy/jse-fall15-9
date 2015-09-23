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

var LoginView = Backbone.View.extend({

});


// generic ctor to represent interface:
function GUI(users,issues,el) {
	var unAssignedTasks = new UnassignedTasksView({collection: issues});
	unAssignedTasks.render();
	$(el).append(unAssignedTasks.$el);
};

return GUI;
}())
