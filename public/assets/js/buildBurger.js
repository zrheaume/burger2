$(document).ready(function () {
    $("#buildBurger").on('click', function () {
        let newBurger = {
            name: $("#burger_name").val(),
            meat: $("#select_meat").val(),
            bun: $("#select_bun").val(),
            lettuce: $("#check_lettuce").is(":checked"),
            toms: $("#check_tomatoes").is(":checked"),
            onions: $("#check_onions").is(":checked"),
            pickles: $("#check_pickles").is(":checked"),
            bacon: $("#check_bacon").is(":checked"),
            ketchup: $("#check_ketchup").is(":checked"),
            mustard: $("#check_mustard").is(":checked"),
            mayo: $("#check_mayo").is(":checked"),
            bbq: $("#check_bbq").is(":checked")
        }

        if (newBurger.name) {
            console.log(newBurger);
            $.post("/build", newBurger, function (res) {
                if(res === "OK"){
                    $.get("/")
                }
            });
        } else {
            console.log("Please name your burger")
        }
    })
})

