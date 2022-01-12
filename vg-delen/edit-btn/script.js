
       function updateItemStatus() {
        var cbId = this.id.replace("cb_", "");
        var itemText = document.getElementById("item_" + cbId);

        }



    function addNewItem(list, itemText) {

        totalItems++

        var date = new Date();
        var id = "" + date.getMinutes(); + date.getSeconds() + date.getMilliseconds() + "";

        var listItem = document.createElement("li");
        listItem.id = "li_" + id;

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "cb_" + totalItems;
        // rutan.onclick = updateItemStatus;

        var span = document.createElement("span");
        span.id = "item_" + totalItems;
        span.innerHTML = itemText;

        var edit = document.createElement("a");
        edit.href = "#";
        edit.innerHTML = " edit |";
        edit.addEventListener('click', editItem, false);

        var deleteBtn = document.createElement("a");
        deleteBtn.href = "#";
        deleteBtn.innerHTML = " delete";
        deleteBtn.addEventListener('click', removeItem, false);


        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(edit);
        listItem.appendChild(deleteBtn);

        list.appendChild(listItem);
    }


    var totalItems = 0;
    var lastUpdatedItemId = '';
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById( 'lastName');
    // const lastName =document.querySelector('#lastName');
    firstName.focus();

    var btnNew = document.getElementById("btnAdd");
    btnNew.onclick = function() {
        if (this.innerHTML == 'ADD') {
            var firstName = document.getElementById("firstName");
            var lastName = document.getElementById( 'lastName');

            var InnerText = (firstName.value+ '  ' + ( lastName.value) );
            if (!InnerText || InnerText === "" || InnerText === " ") {
                return false;
            }

            addNewItem(document.getElementById("person"), InnerText);
        } else if (this.innerHTML == 'EDIT') {
            this.innerHTML = 'ADD';
            var firstName = document.getElementById("firstName");
            var lastName = document.getElementById( 'lastName');

            var InnerText = firstName.value+ '  ' + ( lastName.value);
            if (!InnerText || InnerText === "" || InnerText === " ") {
                return false;
            }
            document.getElementById(lastUpdatedItemId).innerHTML = InnerText;
           firstName.value = "";
           lastName.value = "";
        }
    }
    firstName.onkeyup = function(event) {

        if (event.which == 13) {
            var InnerText = firstName.value;
            var InnerText = lastName.value;

            if (!InnerText || InnerText === "" || InnerText === " ") {
                return false;
            }

            addNewItem(document.getElementById("person"), InnerText);

            firstName.focus();
            firstName.select();
            lastName.focus();
            lastName.select();
        }

    };

    function removeItem() {
        var li = this.parentNode;
        li.remove();
    }

    function editItem() {
        btnNew.innerHTML = 'EDIT';
        var li = this.parentNode;
        var item = li.getElementsByTagName("*");
        firstName.value = item[1].innerHTML;
        lastName.value = item[1].innerHTML;
        lastUpdatedItemId = item[1].id;
        
        
        console.log(item);
    }
   