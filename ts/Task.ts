import { v4 as uuid, validate } from 'uuid'

export const statusMap = {
  todo: 'TODO',
  doing: 'DOING',
  done: 'DONE'
} as const
export type Status = typeof statusMap[keyof typeof statusMap]

export type TaskObject = {
  id: string
  title: string
  status: Status
}

export class Task {
  readonly id
  title
  status

  static validate(value: any) {
    if(!value) return false //valueに値有無
    if(!validate(value.id)) return false //uuidのvalidateメソッド利用
    if(!value.title) return false //title存在有無
    if(!Object.values(statusMap).includes(value.status)) return false //statusがtodo,doing,doneのどれか
    return true
  }

  constructor(properties: {id?: string, title: string, status?: Status}) {
    this.id = properties.id || uuid()
    this.title = properties.title
    this.status = properties.status || statusMap.todo
  }

  update(properties: {title?: string, status?: Status}) {
    this.title = properties.title || this.title
    this.status = properties.status || this.status
  }
}