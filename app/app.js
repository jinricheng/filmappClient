/**
 * Created by http://rhizomik.net/~roberto/
 */

(function(){
    var greetings = [
        {"id":1, "content":"Hello World!", "user":"determined@greetings.com", "when":Date.UTC(1970,1,1)},
        {"id":2, "content":"This is a way to extend the farewell before saying... goodbye!",
            "user":"hesitant@greetings.com", "when":Date.UTC(2000,1,1)} ];

    var app = angular.module("greetingsJS", ["greetingTab","greetingForm"]);

    app.controller("GreetingsController", function(){
        this.greetings = greetings;


        this.clearGreeting = function(){
            return {"content":"Greeting text...", "user":"Your E-Mail", "when":Date.now()};
        }

        this.newGreeting = this.clearGreeting();

        this.addGreeting = function(){
            this.newGreeting.id = greetings.length + 1;
            this.newGreeting.when = Date.now();
            this.greetings.push(this.newGreeting);
            this.newGreeting = this.clearGreeting();
        };
    });

})();
