
import { makeRandomNumber } from "../utils/makeRandumNumber"
import IPerson from "./IPerson"

export default class Person implements IPerson{
    constructor(public name: string, public age: number = makeRandomNumber()){}
}


export const makePerson = (name: string,
     age:number = makeRandomNumber()) => ({name, age})
