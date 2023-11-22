import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import { Request, Response } from "express";

import dotenv from 'dotenv'

dotenv.config()

const CLASH_ROYALE_API_CLANS = process.env.CLASH_ROYALE_API_CLANS
const CLASH_ROYALE_KEY = process.env.CLASH_ROYALE_KEY

// console.log('CLASH_ROYALE_API_CLANS:', CLASH_ROYALE_API_CLANS);
// console.log('CLASH_ROYALE_KEY:', CLASH_ROYALE_KEY)

const buildUrl = (clanTag: string) => `${CLASH_ROYALE_API_CLANS}%23${clanTag}`

const buildAxiosConfig = (url: string): AxiosRequestConfig => ({
    method:'get',
    maxBodyLength: Infinity,
    url,
    headers:{
        'Authorization' : `Bearer ${CLASH_ROYALE_KEY}`
    }
})

const handleSuccess = (res: Response, data: any)=>{
    console.log('Dados recebidos: ', data)
    res.json({'Dados recebidos : ': data})
}

const handleFailure = (res: Response, error: any) => {
    console.error('Erro na solicitação: ', error.message)
    res.status(500).json({error: 'Erro na solicitação', details: error.message})
}

export const clanMembers = async (req: Request, res: Response) => {
    const clanTag = req.body.clanTag
    const url = buildUrl(clanTag)+`/members`

    try {
        const response: AxiosResponse = await axios.request(buildAxiosConfig(url))
        handleSuccess(res, response.data)
    }catch (error){
        handleFailure(res, error)
    }
}

export const currentRiverRace = async (req: Request, res: Response) => {
    const clanTag = req.body.clanTag
    const url = buildUrl(clanTag)+`/currentriverrace`

    try {
        const response: AxiosResponse = await axios.request(buildAxiosConfig(url))
        handleSuccess(res, response.data)
    } catch (error){
        handleFailure(res, error)
    }
}

export const riverRaceLog = async (req: Request, res: Response)=> {
    const clanTag = req.body.clanTag
    const url = buildUrl(clanTag)+`/riverracelog`

    try {
        const response: AxiosResponse = await axios.request(buildAxiosConfig(url))
        handleSuccess(res, response.data)
    } catch (error){
        handleFailure(res, error)
    }
}

export const searchClans = async (req: Request, res: Response) => {
    const clanName = req.query.name?.toString()
    if (!clanName) {
        return res.status(400).json({ message: "O parâmetro 'name' está faltando" });
      }
    const url = `https://api.clashroyale.com/v1/clans?name=${encodeURIComponent(clanName)}`

    try {
        const response: AxiosResponse = await axios.request(buildAxiosConfig(url))
        handleSuccess(res, response.data)
    } catch (error) {
        handleFailure(res, error)
    }
}

export const clanInformation = async (req: Request, res: Response) => {
    const clanTag = req.body.clanTag
    const url = buildUrl(clanTag)

    try {
        const response: AxiosResponse = await axios.request(buildAxiosConfig(url))
        handleSuccess(res, response.data)
    } catch (error){
        handleFailure(res, error)
    }
}