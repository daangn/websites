import { atom } from 'recoil'

export const toastAtom = atom<{ id: string | number; message: string }[]>({
  key: 'ToastAtom',
  default: [],
})
