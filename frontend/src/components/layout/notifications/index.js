const notify = (notifyContext, message, enumAction) => {
    var actionType = ["success","warning", "danger"];
    var title = ["Sucesso!","Atenção!","Ocorreu um erro!"]
    var icons = ["ti-check","ti-alert", "ti-close"]
    notifyContext({
        title : title[enumAction],
        message: message,
        type: actionType[enumAction],
        //icon: icons[enumAction]        
    });
}

export default {
    notify
}