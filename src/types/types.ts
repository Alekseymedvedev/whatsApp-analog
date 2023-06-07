export interface Contacts{
    id:string
    name:string
    type:string
}
export interface Chat {
    archive: string
    ephemeralExpiration: number
    ephemeralSettingTimestamp: number
    id: string
    name: string
    notSpam: boolean
}

export interface Message {
    chatId:string
    idMessage:string
    sendByApi:boolean
    statusMessage:string
    textMessage:string
    timestamp:string
    type:string
    typeMessage:string
}

