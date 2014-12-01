/**
 * Created by http://rhizomik.net/~roberto/
 */

(function(){
    var app = angular.module("greetingsJS", ["greetingTab","greetingForm"]);

    app.controller("GreetingsController", ["$http",
        function($http) {
            this.GREETINGS_API = "http://greetings-app.herokuapp.com/greetings";
            this.newGreeting = {'date': Date.now()};
            var greetingCtrl = this;

            this.listGreetings = function()
            {
                $http.get("http://greetings-app.herokuapp.com/greetings.json")
                    .success(function (data) {
                        greetingCtrl.greetings = data;
                    });
            }
            this.listGreetings();

            this.addGreeting = function(){
                $http.post("http://greetings-app.herokuapp.com/greetings", this.newGreeting)
                    .then(function(){
                        greetingCtrl.newGreeting = {'date': Date.now()};
                        greetingCtrl.listGreetings();
                    });
            };
        }]);
}());
