Quizz = new Mongo.Collection("quizz");

function timer() {
    var interval = setInterval(function () {
        var timer = $('span.timer').html();
        timer = timer.split(':');
        minutes = parseInt(timer[0], 10);
        seconds = parseInt(timer[1], 10);
        seconds -= 1;
        if (minutes < 0)
            return clearInterval(interval);
        if (minutes < 10 && minutes.length != 2)
            minutes = '0' + minutes;
        if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2)
            seconds = '0' + seconds;
        $('span.timer').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) {
            clearInterval(interval);
  
            Router.go('/quizz' + numero);
        }
    }, 1000);
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
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
