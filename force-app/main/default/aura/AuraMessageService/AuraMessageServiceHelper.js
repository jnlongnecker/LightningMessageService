({
    // This function handles a publish to the channel and saves the contents
    storeMessage: function (component, event) {
        if (event == null) return;

        // Note that the event object contains the channel message
        component.set("v.message", event.getParam("myMessage"));
        component.set("v.from", event.getParam("from"));
    },

    // Posts a static message to the message channel
    postMessage: function (component) {
        const data = { myMessage: 'Aura is cool!', from: 'Aura Component' };

        // Note we get a reference to the message channel component and call the publish() method on it
        component.find("msgChannel").publish(data);
    }
})
