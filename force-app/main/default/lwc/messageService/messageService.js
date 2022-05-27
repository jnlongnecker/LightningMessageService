/*
    Created by: Jared Longnecker
    Last modified: 5/27/2022
    Description: Web Component to showcase communication between UI frameworks using LMS
*/

import { LightningElement, wire } from 'lwc';

// Note the import of the MessageContext and the Message Channel
import myChannel from '@salesforce/messageChannel/myChannel__c';
import { subscribe, publish, MessageContext } from 'lightning/messageService';

export default class MessageService extends LightningElement {
    @wire(MessageContext)
    context;

    messageServiceMessage = "No Messages Yet";
    messageCameFrom = "No Messages Yet";

    // Subscription can happen anywhere, but it's convenient to subscribe ASAP
    connectedCallback() {
        this.subscription = subscribe(
            this.context, myChannel, (message) => this.messagePosted(message)
        );
    }

    // Callback to run whenever a message gets posted to store the message contents
    messagePosted(message) {
        this.messageServiceMessage = message.myMessage;
        this.messageCameFrom = message.from;
    }

    // Post a static message to the message channel. Note this can be non-static, but be careful
    // about posting non-primitives! Those are passed by reference
    postMessage() {
        const data = { myMessage: 'LWC is fun!', from: 'Web Component' };
        publish(this.context, myChannel, data);
    }
}