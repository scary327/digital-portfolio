function openSearch() {
    var x = document.getElementById('search__box');

    if (x.style.display == 'none'){
        x.style.display = 'block';
    }
    else{
        x.style.display = 'none';
    }
}

function openNotifications() {
    var x = document.getElementById('notifications');

    if (x.style.display == 'none'){
        x.style.display = 'flex';
    }
    else{
        x.style.display = 'none';
    }
}