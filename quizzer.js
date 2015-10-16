Quizz = new Mongo.Collection("quizz");

var numero = 1;
var count = 10;
//var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    var interval = setInterval(function () {
        count = count - 1;
        if (count <= 0)
        {
            clearInterval(interval);
            if (Router.current().route.getName() == "image1") {
                Router.go('/quizz1');
            }
            return;
        }
    }, 1000);
    //$("#timer").html(count);
}

if (Meteor.isClient) {

    //ROUTES
    Router.route('/', {
        template: 'accueil'
    });
    Router.route('/image1');
    Router.route('/quizz1');

    Router.route('/erreur');
    Router.route('/gagne');

    Router.route('/fin');

    Template.image1.rendered = function () {
        if (!this._rendered) {
            this._rendered = true;
        }
        timer();
    }



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
