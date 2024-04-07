
import { SubNavEnum } from './SubNavEnum.tsx'
import {NavElementEnum} from "./Navigation/NavElementEnum.tsx";

export interface NavElementInterface {
  label: NavElementEnum
  active: boolean
  cb: (e: any) => void
}

export interface SubNavElementInterface {
  label: SubNavEnum
  active: boolean
  cb: (e: any) => void
}

export interface Get2KnowData {
  header: string;
  data: string[],
  date: Date
}

