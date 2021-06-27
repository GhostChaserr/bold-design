export type ModalPresetTypes =
  'center' |
  'top' |
  'bottom'



export type ModalProps = {
  preset?: ModalPresetTypes
  open: boolean
  handleClose: () => void
  height?: string
}