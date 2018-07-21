var config = {
    apiKey: "AIzaSyCn317-Xg7Ags-BvooYZsZ0mDPzpG4xinM",
    authDomain: "firstproject-5cc0d.firebaseapp.com",
    databaseURL: "https://firstproject-5cc0d.firebaseio.com",
    projectId: "firstproject-5cc0d",
    storageBucket: "firstproject-5cc0d.appspot.com",
    messagingSenderId: "153982621342"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#form-submit").on("click", function () {
    database.ref().push({
        trainName: $("#formGroupExampleInput").val().trim(),
        destination: $("#formGroupExampleInput2").val().trim(),
        firstTrainTime: $("#formGroupExampleInput3").val().trim(),
        frequency: $("#formGroupExampleInput4").val().trim()
    });
});

database.ref().on("value", function (snapshot) {

}, function (errorObject) {
    console.log("The read failure: " + errorObject.code)

});


database.ref().on("child_added", function (snapshot) {

    var trainName = snapshot.val().trainName;
    var destination = snapshot.val().destination;
    var frequency = snapshot.val().frequency;
    var firstTrainTime = snapshot.val().nextArrival;

    var minutesAway = moment().diff(minutesAway, "minutes");



    var newRow = $("<tr>").append (
        $("<tr>").text(trainName),
        $("<tr>").text(destination),
        $("<tr>").text(frequency),
        $("<tr>").text(nextArrival)
);

    $("table"), append(newRow);

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});