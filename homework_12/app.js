var rootNode = document.getElementById('root');


function createListOfTanks(arr) {
    var header = document.createElement('h1');
    header.textContent = 'Most popular tanks';
    var thumbnails = document.createElement('div');
    thumbnails.setAttribute('class', 'grid container');
    thumbnails.appendChild(header);

    for (var i = 0; i < arr.length; i++) {
        var divForTank = document.createElement('a');
        divForTank.setAttribute('href', '#' + arr[i].model);
        divForTank.setAttribute('class', 'divForTank');
        var pictureTank = document.createElement('img');
        pictureTank.setAttribute('src', arr[i].preview);
        pictureTank.setAttribute('class', 'pictureTank');
        var flag = document.createElement('img');
        flag.setAttribute('src', arr[i].country_image);
        flag.setAttribute('title', arr[i].country);
        flag.setAttribute('class', 'pictureFlag');
        var tankInfo = document.createElement('p');
        var model = document.createElement('span');
        model.textContent = arr[i].model;
        var level = document.createElement('span');
        level.textContent = arr[i].level + ' ';

        tankInfo.appendChild(level);
        tankInfo.appendChild(model);
        divForTank.appendChild(pictureTank);
        divForTank.appendChild(flag);
        divForTank.appendChild(tankInfo);
        thumbnails.appendChild(divForTank);
    }

    return thumbnails;
}

function createTankInfo(tank) {
    var container = document.createElement('div');
    container.setAttribute('class', 'containerDetails grid');
    header = document.createElement('h1');
    header.textContent = tank.model.toUpperCase() + ' (level ' + tank.level + ')';
    var divForHeader = document.createElement('div');
    divForHeader.setAttribute('class', 'divForHeader')
    var flag = document.createElement('img');
    flag.setAttribute('src', tank.country_image);
    flag.setAttribute('title', tank.country);
    flag.setAttribute('class', 'pictureFlagDet');

    divForHeader.appendChild(flag);
    divForHeader.appendChild(header);
    container.appendChild(divForHeader);

    var imgTank = document.createElement('div');
    var preview = document.createElement('h2');
    preview.textContent = 'Preview';
    var pictTank = document.createElement('img');
    pictTank.setAttribute('src', tank.preview);

    imgTank.appendChild(preview);
    imgTank.appendChild(pictTank);
    container.appendChild(imgTank);

    var detailsTank = document.createElement('div');
    var charact = document.createElement('h2');
    charact.textContent = 'Characteristic';
    var table = document.createElement('table');

    for (key in tank.details) {
        var tr = "<tr>";
        tr += "<td>" + key + "</td>" + "<td>" + tank.details[key] + "</td></tr>";
        table.innerHTML += tr;
    }

    var span = document.createElement('span');
    span.textContent = 'Back to list view';
    detailsTank.appendChild(charact);
    detailsTank.appendChild(table);
    container.appendChild(detailsTank);
    container.appendChild(span);

    return container;
}

var thumbnails = createListOfTanks(tanks);
rootNode.appendChild(thumbnails);

function hashchanged(e) {
    if (location.hash) {
        var hashModel = location.hash.slice(1);
        var selectedTank = tanks.find((t) => t.model === hashModel);
        var det = createTankInfo(selectedTank);
        rootNode.replaceChild(det, thumbnails);
    }

    var span = document.getElementsByTagName('span');
    span[0].addEventListener("click", function() {
        rootNode.replaceChild(thumbnails, det);
        location.hash = "";
    });
}

window.onhashchange = hashchanged;