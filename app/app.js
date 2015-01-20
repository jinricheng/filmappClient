/**
 * Created by http://rhizomik.net/~roberto/
 */

(function(){
    var app = angular.module("greetingsJS", ["greetingTab","greetingForm"]);

    app.controller("FilmsController", ["$http",
        function($http) {
            this.FILMS_API = "https://filmsapp.herokuapp.com/films";
            this.newFilm = {'date': Date.now()};
            this.loading = false;
			this.deleteloading = false;
            var  filmCtrl = this;

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
                        $route.reload();
                    });
				
            };
            this.addFilm = function(){
                $http.post(this.FILMS_API, this.newFilm)
                    .then(function(){
                        filmCtrl.newFilm = {'date': Date.now()};
                        filmCtrl.listFilms();
                    });
            };
        }]);
		
}());
