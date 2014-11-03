/**
 * Created by http://rhizomik.net/~roberto/
 */

(function(){
    var greetings = [{"id":1,"content":"Hello World!"},{"id":2,"content":"Bye bye!"}];

    var app = angular.module("greetingsJS", [ ]);

    app.controller('GreetingsController', function(){
        this.greetings = greetings;
    });

    app.controller('TabController', function(){
        this.tab = 1;

        this.setTab = function(newValue){
            this.tab = newValue;
        };

        this.isSet = function(tabName){
            return this.tab === tabName;
        };
    });

})();