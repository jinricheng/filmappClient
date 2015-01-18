/**
 * Created by http://rhizomik.net/~roberto/
 */

(function(){
    var app = angular.module("greetingsJS", ["greetingTab","greetingForm"]);

    app.controller("GreetingsController", ["$http",
        function($http) {
            this.FILMS_API = "https://filmsapp.herokuapp.com/films";
            this.newGreeting = {'date': Date.now()};
            this.loading = false;
            var  filmCtrl = this;

            this.isLoading = function(){
                return this.loading;
            };

            this.noGreetings = function(){
                return this.films === undefined;
            }

            this.listGreetings = function(){
                this.loading = true;
                $http.get(this.FILMS_API)
                    .success(function (data) {
                        filmCtrl.films = data;
                    });
            };

            this.addGreeting = function(){
                $http.post(this.FILMS_API, this.newGreeting)
                    .then(function(){
                        filmCtrl.newGreeting = {'date': Date.now()};
                        filmCtrl.listGreetings();
                    });
            };
        }]);
}());
