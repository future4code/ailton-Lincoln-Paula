export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getEmail = () => {
        return this.email
    }

    public getPassword = () => {
        return this.password
    }

    public getRole = () => {
        return this.role
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setPassword = (newPassword: string) => {
        this.password = newPassword
    }

    public setRole = (newRole: USER_ROLES) => {
        this.role = newRole
    }
}

export interface UserInputSignupDTO extends UserInputLoginDTO {
        name: string,
        // email: string,
        // password: string
}

export interface UserOutputDTO {
    message: string,
    token: string
}

export interface UserInputLoginDTO {
    email: string,
    password: string
}

export interface GetUserInput {
    token: string,
    search: string,
    order: string,
    sort:  string,
    limit: number,
    page: number

}

export interface GetUserOutput {
    id: string,
    name: string,
    email: string
}

export interface UserInputDeleteDTO {
    token: string,
    idToDelete: string

}

export interface UserOutputDeleteDTO {
    message: string
}

export interface UserInputEditDTO {
    token: string,
    idToEdit: string,
    name: string,
    email: string,
    password: string
}

export interface UserOutputEditDTO {
    message:string
}

