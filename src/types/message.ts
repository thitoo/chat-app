export interface Message {
    id: string;
    message: string;
    user: string;
    timestamp: string;
    isIncoming?: boolean;
}