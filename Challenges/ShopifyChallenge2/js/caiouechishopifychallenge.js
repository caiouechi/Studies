
    //If the user has already a favorit list, it will be shown
    $(document).ready(function () {
        updateFavoritesDiv()
    });

        function updateFavoritesDiv() {

        resetFavoritesTable();

    var listFavorite = localStorage.getItem('listFavorite');
    var jsonListFavorite = JSON.parse(listFavorite);

    //the favorite list will be loaded according to the local storage
            if (jsonListFavorite != null && jsonListFavorite != "") {
        jsonListFavorite.forEach(waste => {

            var div = document.createElement("divDescription");
            var divTitle = document.createElement("divTitle");

            //creating dynamically the table row
            var newTr = "<tr>\
                              <td class='tableHeaderFirstColumn'>\
                                 <img src='img/greenstar.png' id='###ID###' title='###TITLE###' data-status='gray' data-keywords='' onclick='starClick(this);' class='imgStarSize img-fluid'>\
                                      <span class=;align-top;>###TITLE###</span>\
                                      </td>\
                                  <td class='mediumPaddingTop;'>\
                                      ###CONTENTREPLACE###\
                                  </td>\
                                  </tr>";

            newTr = newTr.replace('###TITLE###', waste.title);
            newTr = newTr.replace('###TITLE###', waste.title);
            newTr = newTr.replace('###ID###', waste.id);
            newTr = newTr.replace('###CONTENTREPLACE###', waste.description);

            $('#tblFavorites > tbody:last-child').append(newTr);

        });
    } else {
        //if the localstorage is empty, the favourites list will be empty
        resetFavoritesTable();
    }
}

//adding one object to the local storage
        function saveObject(id, title, description, keywords) {

            var newWasteObject = {"id": id, "title": title, "description": description, "keyword": keywords };

    var listFavorite = localStorage.getItem('listFavorite');

            if (listFavorite != null && listFavorite != "") {
                var jsonListFavorite = JSON.parse(listFavorite);
    jsonListFavorite.push(newWasteObject);

    localStorage.setItem('listFavorite', JSON.stringify(jsonListFavorite));
            } else {
                var newList = "[]";
    var jsonListFavorite = JSON.parse(newList);
    jsonListFavorite.push(newWasteObject);

    localStorage.setItem('listFavorite', JSON.stringify(jsonListFavorite));
}

updateFavoritesDiv();
}

//method to check if the object is in the local storage
        function verifyObjectInFavoriteList(id, title) {
            var objectInList = false;

    var listFavorite = localStorage.getItem('listFavorite');
            if (listFavorite != null && listFavorite != "") {
                var jsonListFavorite = JSON.parse(listFavorite);

                for (var i = 0; i <= jsonListFavorite.length - 1; i++) {
                    //I realise some objects dont have id, that is why I am always checking title as well
                    if (((jsonListFavorite[i].id == id) || (jsonListFavorite[i].id == "")) && jsonListFavorite[i].title == title) {
        objectInList = true;
    }
}
}

return objectInList;
}

//remove the object in the favorite list, when the user unfavorite the waste product
        function removeObject(id, title) {

            var listFavorite = localStorage.getItem('listFavorite');
    var jsonListFavorite = JSON.parse(listFavorite);

            for (var i = 0; i <= jsonListFavorite.length - 1; i++) {
                //I realise some objects dont have id, that is why I am always checking title as well
                if (jsonListFavorite[i].id == id && jsonListFavorite[i].title == title) {
        jsonListFavorite.splice(i, 1);
    }
}

localStorage.setItem('listFavorite', JSON.stringify(jsonListFavorite));

updateFavoritesDiv();
}

//main method which is responsible to add or remove the objects in the favorit list local storage
        function starClick(e) {
            var favorited = "img/greenstar.png";
    var notFavorited = "img/graystar.png";

    var id = $(e).attr("id");
    var title = $(e).attr("title");

            if ($(e).attr("src") == favorited) {
        removeObject(id, title);
    $(e).attr("src", notFavorited);

    //scenario 8 of unit tests
    search_click();

            } else {
                //become favorited
                var description = $(e).parent().parent().find("td")[1].innerHTML;
    var keywords = $(e).attr("keywords");
    saveObject(id, title, description, keywords);
    $(e).attr("src", favorited);
}
};

//clear the results table
        function resetResultsTable() {
        $("#tblResults tr").remove();
    };

    //clear the favorites table
        function resetFavoritesTable() {
        $("#tblFavorites tr").remove();
    };

    //handle the enter key pressed
        function runScript(e) {
            if (e.keyCode == 13 || e.keyCode == 10) {
        //form standar behaviour submit when pressing key enter.
        e.preventDefault();

    //Era local storage
    if ($("#inputText").val().toUpperCase() == "##CLEAR##") {
        localStorage.setItem('listFavorite', []);
    }
    search_click();
};
};

//triggers the api and handles the callback inserting the items in the results table
        function search_click() {
        resetResultsTable();

    if ($("#inputText").val() == null || $("#inputText").val() == "") {
                // alert("Please fill the input");
                return ;
}

var request = new XMLHttpRequest();

request.open('GET', 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000', true);

            request.onload = function () {

                // Begin accessing JSON data here
                var data = JSON.parse(this.response);
    var wasteArray = [];

                if (request.status >= 200 && request.status < 400) {
                    var recordsFound = false;

                    data.forEach(waste => {
                        var newWasteObject = {title: waste.title, keyword: waste.keywords, id: waste.id, body: waste.body };

    // if there keyword contains the word, need to show it
    var inputUpperCase = $("#inputText").val().toUpperCase();
                        if (!waste.keywords.toUpperCase().includes(inputUpperCase)) {
                            return ;
                        } else {
        recordsFound = true;
    }
    wasteArray.push(newWasteObject);

    //four columns namely: Title, Alt words (alternative words), Desc Id (description ID), and Description
    //title, keywords, id, body

    var div = document.createElement("divDescription");
    var divTitle = document.createElement("divTitle");
    var divId = document.createElement("divId");

    // Temp div to render html internally
                        var decodeBody = $('<div />').html(waste.body).text();
                        var decodeTitle = $('<divTitle />').html(waste.title).text();
                        var decodeId = $('<divId />').html(waste.id).text();

    //if the item is in the favorit list, it will show green star

                        var newTr = "<tr>\
                              <td class='tableHeaderFirstColumn'>\
                                           <img src='img/graystar.png' id='###ID###' title='###TITLE###' data-status='gray' keywords='' onclick='starClick(this);' class='imgStarSize img-fluid'>\
                                          <span class='align-top'>###TITLE###</span >\
                                      </td>\
                                  <td class='description mediumPaddingTop'>\
                ###CONTENTREPLACE###\
                                  </td>\
                                  </tr>";

//if object is in the favorite list, the image will be green
                        if (verifyObjectInFavoriteList(waste.id, waste.title)) {
            newTr = newTr.replace('graystar.png', 'greenstar.png');
        }

        newTr = newTr.replace('###ID###', decodeId);
        newTr = newTr.replace('###TITLE###', decodeTitle);
        newTr = newTr.replace('###TITLE###', decodeTitle)
        newTr = newTr.replace('###CONTENTREPLACE###', decodeBody);

        $('#tblResults > tbody:last-child').append(newTr);
    });
                } else {
            console.log('error');
        }

                if (!recordsFound) {
            alert("No records found");
        }

        console.log(wasteArray);
    }

    request.send();
}

   