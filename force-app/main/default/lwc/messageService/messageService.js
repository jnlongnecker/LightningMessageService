import { LightningElement, wire } from 'lwc';

import myChannel from '@salesforce/messageChannel/myChannel__c';
import { subscribe, publish, MessageContext } from 'lightning/messageService';

export default class MessageService extends LightningElement {
    @wire(MessageContext)
    context;

    messageServiceMessage = "No Messages Yet";
    messageCameFrom = "No Messages Yet";

    connectedCallback() {
        this.subscription = subscribe(
            this.context, myChannel, (message) => this.messagePosted(message)
        );
    }

    messagePosted(message) {
        this.messageServiceMessage = message.myMessage;
        this.messageCameFrom = message.from;
    }

    postMessage() {
        const data = { myMessage: 'LWC is fun!', from: 'Web Component' };
        publish(this.context, myChannel, data);
    }
}