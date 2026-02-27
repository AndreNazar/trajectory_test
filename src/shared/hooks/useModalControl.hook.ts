import { useState } from "react"

export default function useModalControl() {
  const [isOpen, setIsOpen] = useState(false)

  return {
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false),
    isOpen,
  }
}
