Quizz = new Mongo.Collection("quizz");

var numero = 1;
var count = 5;
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    if (count <= 0)
    {
        clearInterval(counter);
        Router.go('/tplimg1');
        return;
    }

  //  $("#timer").html(count);
}

if (Meteor.isClient) {

    //ROUTES
    Router.route('/', {
        template: 'accueil'
    });
    Router.route('/image',{
        template: 'image'+numero
     });
    Router.route('/quizz',{
        template: 'quizz'+numero
     });

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
    
    Template.quizz.helpers({
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

    Template.quizz1.events({
       "click a.next": function(e){
                console.log($(".true").is(':checked'));

        if($(".true").is(':checked')){
            Router.go('/gagne');

        }else{
            Router.go('/erreur');
        }

       }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
