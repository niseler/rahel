import { NavElementEnum } from './NavElementEnum.tsx'
import { SubNavEnum } from './SubNavEnum.tsx'

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
