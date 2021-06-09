type MessageType = "user" | "reservation" | "location";
type MessageUserType = "sender" | "receiver";

export interface Message {
    type: MessageType;
    text: string;
    userType?: MessageUserType;
    image?: string;
}

export interface PhoneMockUpChatData {
    header: {
        name: string;
        temperature: number;
        info: string;
    };
    item: {
        image: string;
        name: string;
        price: string;
    };
    messages: Message[];
}
