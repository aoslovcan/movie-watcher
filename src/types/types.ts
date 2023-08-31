export interface ValidationType {
  string:
    | {
    required?: {
      value: boolean
      message: string
    }
  }
    | undefined
}
