export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps {
    nativeType?: NativeType
    type?: ButtonType
    size?: ButtonSize
    plain?: boolean
    round?: boolean
    circle?: boolean
    disabled?: boolean
    loading?: boolean
    autofocus?: boolean
}

export interface ButtonInstance {
    ref: HTMLButtonElement
}
