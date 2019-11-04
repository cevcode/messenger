export interface IUser {
    id: string;
    name: string;
    surName: string;
    email: string;
    photo?: string | null;
    isOnline: boolean;
}