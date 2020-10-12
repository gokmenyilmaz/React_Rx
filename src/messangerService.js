import { BehaviorSubject, Subject } from 'rxjs';

const subject = new BehaviorSubject({ text: 'ilk' });

export const messangerService = {
    sendMessage: message => subject.next({ text: message }),
    clearMessages: () => subject.next(),
    getMessage: () => subject.asObservable(),

};