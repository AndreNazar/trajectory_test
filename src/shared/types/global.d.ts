declare module "*.svg?react" {
  import type { FC, SVGProps } from "react"
  const SVG: FC<SVGProps<SVGSVGElement>>
  export default SVG
}
