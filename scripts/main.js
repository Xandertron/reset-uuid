const ui = require("ui-lib/library");
ui.addMenuButton("Reset UUID", "refresh", () => {
    Vars.ui.showConfirm("Are you sure you want to reset your UUID? This cannot be undone!",res=>{
	    Core.settings.put("uuid","")
        Vars.platform.getUUID()
    })
});
ui.addMenuButton("Set UUID", "wrench", () => {
	Vars.ui.showTextInput("[red]If you mess it up and cant join servers, you must reset it!\nIt will not check the UUID for validity\n[white]The current UUID has been placed in the text field for your convenience.","UUID:",Vars.platform.getUUID(), res => {
        Core.settings.put("uuid",res)
    })
});
