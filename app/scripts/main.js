





 $('.form1').on('submit', function  (event) {
Parse.initialize("V1ZN54fnfyDsgUUzmbCWycnZIP7F9BV50HRmxrEK", "c4P7hEzLmJzuhTDld5yIovRV2bufaULxlfGjzq4x");


event.preventDefault();

var user = new Parse.User();
user.set("username", $("#name").val());
user.set("password", $("#password").val());
user.set("email", $("#email").val());


user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.

  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});

$(this).trigger('reset');
});


