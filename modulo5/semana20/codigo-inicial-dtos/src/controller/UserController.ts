import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import {UserInputSignupDTO, UserOutputDTO, UserInputLoginDTO, 
    GetUserInput, GetUserOutput, UserInputDeleteDTO, UserOutputDeleteDTO,
    UserInputEditDTO,    
    UserOutputEditDTO   } from './../models/User'

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const input: UserInputSignupDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()

            const response:UserOutputDTO = await userBusiness.signup(input)

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: UserInputLoginDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response: UserOutputDTO = await userBusiness.login(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const input: GetUserInput = {
                token: req.headers.authorization,
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: Number(req.query.limit),
                page: Number(req.query.page)
            }

            const userBusiness = new UserBusiness()
            const response: GetUserOutput[] = await userBusiness.getUsers(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const input: UserInputDeleteDTO = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const userBusiness = new UserBusiness()
            const response: UserOutputDeleteDTO = await userBusiness.deleteUser(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public editUser = async (req: Request, res: Response) => {
        try {
            const input: UserInputEditDTO = {
                token: req.headers.authorization,
                idToEdit: req.params.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response: UserOutputEditDTO = await userBusiness.editUser(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}