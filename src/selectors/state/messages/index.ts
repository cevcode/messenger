import { createStateSelector } from 'selectors/helpers';

const messages = {
    messageList: createStateSelector('messages.messageList'),
};

export { messages };
