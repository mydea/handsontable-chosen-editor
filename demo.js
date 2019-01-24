var data = [];

$(document).ready(function () {

    new Handsontable(document.getElementById("handsontable"), {
        data: data,
        minSpareRows: 1,
        minRows: 5,
        rowHeaders: true,
        columns: [
            {
                renderer: customDropdownRenderer,
                editor: "chosen",
                width: 150,
                chosenOptions: {
                    data: [
                        {
                            id: "SPOT",
                            label: "Spot"
                        }, {
                            id: "AFLOAT",
                            label: "Afloat"
                        }, {
                            id: "PREORDER",
                            label: "Preorder"
                        }, {
                            id: "FORWARD",
                            label: "Forward"
                        }
                    ]
                }
            },
            {
                renderer: customDropdownRenderer,
                editor: "chosen",
                width: 150,
                chosenOptions: {
                    multiple: true,
                    data: [
                        {
                            id: "1",
                            label: "Catuai"
                        }, {
                            id: "2",
                            label: "Bourbone"
                        }, {
                            id: "3",
                            label: "Geisha"
                        }
                    ]
                }
            },
            {}
        ]
    });
});

function customDropdownRenderer(instance, td, row, col, prop, value, cellProperties) {
    var selectedId;
    var optionsList = cellProperties.chosenOptions.data;

    if(typeof optionsList === "undefined" || typeof optionsList.length === "undefined" || !optionsList.length) {
        Handsontable.cellTypes.text.renderer(instance, td, row, col, prop, value, cellProperties);
        return td;
    }

    var values = (value + "").split(",");
    value = [];
    for (var index = 0; index < optionsList.length; index++) {

        if (values.indexOf(optionsList[index].id + "") > -1) {
            selectedId = optionsList[index].id;
            value.push(optionsList[index].label);
        }
    }
    value = value.join(", ");

    Handsontable.cellTypes.text.renderer(instance, td, row, col, prop, value, cellProperties);
    return td;
}
