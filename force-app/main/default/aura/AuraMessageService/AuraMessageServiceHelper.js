({
    storeMessage: function (component, event) {
        if (event == null) return;

        component.set("v.message", event.getParam("myMessage"));
        component.set("v.from", event.getParam("from"));
    },

    postMessage: function (component) {
        const data = { myMessage: 'Aura is cool!', from: 'Aura Component' };
        component.find("msgChannel").publish(data);
    }
})
