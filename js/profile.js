function openProfileUser() { //не работает font-weight
    var x = document.getElementById('profile');
    var y = document.getElementById('notifications__main');
    var z = document.getElementById('settings');
    var w = document.getElementById('sign__out');

    var textX = document.getElementById('profile__text');
    var textY = document.getElementById('notifications__text');
    var textZ = document.getElementById('settings__text');

    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
        w.style.display = 'none';
        textY.style.fontWeight = '400';
        textZ.style.fontWeight = '400';
        textX.style.fontWeight = '600';
    } else {
        x.style.display = 'none';
        textX.style.fontWeight = '400';
    }
}

function openNotificationsUser() {
    var x = document.getElementById('profile');
    var y = document.getElementById('notifications__main');
    var z = document.getElementById('settings');
    var w = document.getElementById('sign__out');

    var textX = document.getElementById('profile__text');
    var textY = document.getElementById('notifications__text');
    var textZ = document.getElementById('settings__text');

    if (y.style.display == 'none') {
        y.style.display = 'block';
        x.style.display = 'none';
        z.style.display = 'none';
        w.style.display = 'none';
        textX.style.fontWeight = '400';
        textZ.style.fontWeight = '400';
        textY.style.fontWeight = '600';
    } else {
        y.style.display = 'none';
        textY.style.fontWeight = '400';
    }
}

function openSettings() {
    var x = document.getElementById('profile');
    var y = document.getElementById('notifications__main');
    var z = document.getElementById('settings');
    var w = document.getElementById('sign__out');

    var text = document.getElementById('settings__text');

    if (z.style.display == 'none') {
        z.style.display = 'block';
        x.style.display = 'none';
        y.style.display = 'none';
        w.style.display = 'none';
        text.style.fontWeight = '600';
    } else {
        z.style.display = 'none';
        text.style.fontWeight = '400';
    }
}

function SignOut(){
    $.ajax({
        url: 'singOut.php', //перенаправить пользователя на эту страницу
            method: 'POST',

            success: function(response) {
                //обработка успешного ответа
                window.location.href = 'login.php' //перенаправление на страницу входа
            },
            error: function(xhr, status, error) {
                //обработка ответ об ошибке
                console.log(error);
            }
    });
}