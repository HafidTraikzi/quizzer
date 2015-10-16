Quizz = new Mongo.Collection("quizz");

var count = 30;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    if (count <= 0)
    {
        clearInterval(counter);
        Router.go('/quizz');
        return;
    }

    document.getElementById("timer").innerHTML = count;
}

if (Meteor.isClient) {

    //ROUTES
    Router.route('/', {
        template: 'accueil'
    });
    Router.route('/image');
    Router.route('/quizz');

    Router.route('/erreur');
    Router.route('/gagne');

    Router.route('/fin');

    Template.image.rendered = function () {
        if (!this._rendered) {
            this._rendered = true;
        }
        timer();
    }

    Template.image.helpers({
        image1: function () {
            if (numero == "1") {
                return true;
            }
        },
        image2: function () {
            if (numero == "2") {
                return true;
            }
        },
        image3: function () {
            if (numero == "3") {
                return true;
            }
        }
    });

    Template.erreur.helpers({
        image1: function () {
            if (numero == "1") {
                return true;
            }
        },
        image2: function () {
            if (numero == "2") {
                return true;
            }
        },
        image3: function () {
            if (numero == "3") {
                return true;
            }
        }
    });

    Template.gagne.helpers({
        image1: function () {
            if (numero == "1") {
                return true;
            }
        },
        image2: function () {
            if (numero == "2") {
                return true;
            }
        },
        image3: function () {
            if (numero == "3") {
                return true;
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
