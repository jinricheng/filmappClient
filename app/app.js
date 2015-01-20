/**
 * Created by http://rhizomik.net/~roberto/
 */

(function(){
    var app = angular.module("greetingsJS", ["greetingTab","optionTab","greetingForm"]);


    app.directive('optionTab', function(){
        return {
            restrict: 'E',
            templateUrl: 'index.html',
            controller: function() {
                this.tab = 1;

                this.setTab = function (newValue) {
                    this.tab = newValue;
                };

                this.isSet = function (tabName) {
                    return this.tab === tabName;
                }
            },
            controllerAs: 'option'
        };
    });
    app.controller("FilmsController", ["$http",
        function($http) {
            this.FILMS_API = "https://filmsapp.herokuapp.com/films";
            this.SEARCH_API = "https://filmsapp.herokuapp.com/result/";
            this.newFilm = {'date': Date.now()};
            this.loading = false;
			this.deleteloading = false;
            var  filmCtrl = this;
            this.title = "";

            this.isLoading = function(){
                return this.loading;
            };

            this.noFilms = function(){
                return this.films === undefined;
            }

            this.listFilms = function(){
                this.loading = true;
                $http.get(this.FILMS_API)
                    .success(function (data) {
                        filmCtrl.films = data;
                    });
            };

			this.deleteFilm = function(id){
				this.deleteloading = true;
                this.loading = true;
                $http.delete(this.FILMS_API+"/"+id)
                    .then(function () {
						this.deleteloading = false;
                    });
                window.location.reload(false);
				
            };
            this.searchFilm = function(){

                $http.get(this.SEARCH_API+this.title)
                    .success(function (data) {
                        filmCtrl.result = data;
                    });

            }
            this.addFilm = function(){
                $http.post(this.FILMS_API, this.newFilm)
                    .then(function(){
                        filmCtrl.newFilm = {'date': Date.now()};
                        filmCtrl.listFilms();
                    });
            };
        }]);
		
}());
