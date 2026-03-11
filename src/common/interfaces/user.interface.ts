export interface User {
    uid: string;
    email: string;
    name?: string;
    role: 'guest' | 'user' | 'admin';
    createdAt?: Date;
    lastLogin?: Date;
}

export interface FirebaseUser {
    uid: string;
    email: string;
    email_verified: boolean;
    name?: string;
    picture?: string;
}