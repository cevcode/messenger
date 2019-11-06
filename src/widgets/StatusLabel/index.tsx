import { Icon } from 'ui/Icon';
import React from 'react';
import { MessageStatus } from 'models/message';
import { ColorTypes } from 'helpers/enums';

function getIconByStatus(status) {
    switch (status) {
        default:
        case MessageStatus.sending:
            return { name: 'access_time', color: ColorTypes.grey };
        case MessageStatus.sent:
            return { name: 'done', color: ColorTypes.blue };
        case MessageStatus.read:
            return { name: 'done_all', color: ColorTypes.blue };
    }
}

interface IStatusLabel {
    status: MessageStatus;
    isMe: boolean;
}

const StatusLabel: React.FC<IStatusLabel> = ({ status, isMe }) => {
    if (isMe) {
        return <Icon name={getIconByStatus(status).name} color={getIconByStatus(status).color} size="14px" />;
    }
    return null;
};

export { StatusLabel };