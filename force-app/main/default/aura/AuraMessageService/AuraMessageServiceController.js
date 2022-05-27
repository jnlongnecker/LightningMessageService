({
    handleMessage: function (component, event, helper) {
        helper.storeMessage(component, event);
    },

    handlePost: function (component, event, helper) {
        helper.postMessage(component);
    }
})
