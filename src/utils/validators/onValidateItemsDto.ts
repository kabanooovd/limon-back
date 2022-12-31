import { NextFunction, Request, Response } from "express"

export interface IRule {
  field: string;
  isRequied: boolean;
  maLenght?: number
}

export const onValidateItemsDto = (rules: IRule[], dto: any) => {
  let response: any = []

  rules.forEach((rule: any) => {
    if (rule.isRequied && dto[rule.field]?.length < 1) {
      response = [...response, {
        message: `Field is requiered...`,
        fieldName: `${rule.field}`,
      }]
    }

    if (rule.maLenght && rule.maLenght < dto[rule.field]?.length) {
      response = [...response, {
        message: `The length can not exceed ${rule.maLenght} symbols...`,
        fieldName: `${rule.field}`,
      }]
    }
  })


  return response
}