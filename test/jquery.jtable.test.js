var basicForm;

module('jquery.jtable.js', {
    setup: function() {
        // html code for basic form
        basicForm = $('<div id="simpleTable"></div>');

        $("body").append(basicForm);
    },
    teardown: function() {
        // cleanup
        basicForm.remove();
    }
});
test("test edit popup hide after submit", function(){
    $("#simpleTable").jtable({
        clientOnly: true,
        closeEditDialogAfterSaving: true,
        actions: {
            listAction: 'testdata_simpleTable.json'
        },
        fields: {
            roles: {
                title: '&nbsp;'
            },
            personId: {
                key: true,
                title: 'ID'
            },
            nickname: {
                title: 'Nickname'
            },
            agent: {
                title: 'Agent'
            },
            firstName: {
                title: 'First Name'
            },
            lastName: {
                title: 'Last Name'
            },
            email: {
                title: 'Email'
            },
            reportingLevel: {
                title: 'Reporting Level',
                options: {"DisplayText":"testDisplay","Value":"testValue"}
            }
        }
    });

    $('button[title="Edit Record"]').click();
    $('button[id="EditDialogSaveButton"]').click();

    equal($("div.ui-dialog").is(":visible"), false, "The dialog is not showing.");
});
test("test edit popup dont hide after submit", function(){
    $("#simpleTable").jtable({
        clientOnly: true,
        closeEditDialogAfterSaving: false,
        actions: {
            listAction: 'testdata_simpleTable.json'
        },
        fields: {
            roles: {
                title: '&nbsp;'
            },
            personId: {
                key: true,
                title: 'ID'
            },
            nickname: {
                title: 'Nickname'
            },
            agent: {
                title: 'Agent'
            },
            firstName: {
                title: 'First Name'
            },
            lastName: {
                title: 'Last Name'
            },
            email: {
                title: 'Email'
            },
            reportingLevel: {
                title: 'Reporting Level',
                options: {"DisplayText":"testDisplay","Value":"testValue"}
            }
        }
    });

    $('button[title="Edit Record"]').click();
    $('button[id="EditDialogSaveButton"]').click();

    equal($("div.ui-dialog").is(":visible"), true, "The dialog is showing.");
});

