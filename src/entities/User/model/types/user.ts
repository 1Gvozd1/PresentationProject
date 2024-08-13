export interface User {
    id: string;
    name: string;
}

export interface UserSchema { // интерефейс для стейта
    authData?: User;
}
