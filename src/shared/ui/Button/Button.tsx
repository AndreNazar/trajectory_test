import type { PropsWithChildren } from "react"
import styles from "./Button.module.scss"
import ButtonIcon from "./ButtonIcon"
import type { IconsType } from "./Button.types"
import cn from "classnames"

interface Props extends PropsWithChildren {
  onClick?(): void
  icon?: IconsType
  w100?: boolean
}

export default function Button({ onClick, children, icon = null, w100 }: Props) {
  return (
    <div onClick={onClick} className={cn(styles.container, { [styles.w100]: w100 })}>
      <ButtonIcon icon={icon} />
      {children}
    </div>
  )
}
