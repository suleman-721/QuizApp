function login() {
    var name = document.getElementById('userName');
    var pass = document.getElementById('password');

    var inputName = "newuser";
    var inputPassword = "1234567";


    if (name.value === inputName && pass.value === inputPassword) {
        location.href = 'home.html';
    

        document.getElementById('userName').value = '';
        document.getElementById('password').value = '';
        alert("Login Successful..!! "+
        " To Pass The Quiz Out of 10 Question Your 5 Answers must be Correct. Best of Luck :)");
    }

    else {
        window.alert('The Username or Password you entered is Incorrect.');

        document.getElementById('userName').value = '';
        document.getElementById('password').value = '';

        var link=document.getElementById('submit').href="home.html"
    }
}

