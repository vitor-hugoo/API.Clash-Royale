import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Request, Response } from 'express'

import dotenv from 'dotenv'

dotenv.config()

const CLASH_ROYALE_API_PLAYERS = process.env.CLASH_ROYALE_API_PLAYERS
const CLASH_ROYALE_KEY = process.env.CLASH_ROYALE_KEY

const buildUrl = (playerTag: string) => `${CLASH_ROYALE_API_PLAYERS}%23${playerTag}`

const buildAxiosConfig = (url: string): AxiosRequestConfig => ({
    method:'get',
    maxBodyLength: Infinity,
    url,
    headers:{
        'Authorization' : `Bearer ${CLASH_ROYALE_KEY}`
    }
})

const handleSuccess = (res: Response, data: any) => {
    console.log('Dados recebidos: ', data)
    res.json({'Dados recebidos: ': data})
}

const handleFailure = (res: Response, error: any) => {
    console.error('Erro na solicitação: ', error.message)
    res.status(500).json({error: 'Erro na solicitação', details: error.message})
}

export const playerInformation = async (req: Request, res: Response) => {
    const playerTag = req.body.playerTag
    const url = buildUrl(playerTag)

    try {
        const response: AxiosResponse = await axios.request(buildAxiosConfig(url))
        handleSuccess(res, response.data)
    } catch (error){
        handleFailure(res, error)
    }
}