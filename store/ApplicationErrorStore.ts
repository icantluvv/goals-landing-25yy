import { create } from "zustand"
import { nanoid } from "nanoid"

type ErrorModal = {
  id: string
  isVisible: boolean
}

interface ApplicationErrorModalState {
  modals: ErrorModal[]
  addModal: () => void
  hideModal: (id: string) => void
  removeModal: (id: string) => void
}

export const useApplicationErrorModalStore = create<ApplicationErrorModalState>((set) => ({
  modals: [],
  addModal: () => {
    const id = nanoid()
    set((state) => ({
      modals: [...state.modals, { id, isVisible: true }]
    }))

    setTimeout(() => {
      set((state) => ({
        modals: state.modals.map((modal) =>
          modal.id === id ? { ...modal, isVisible: false } : modal
        )
      }))
    }, 3000)

    setTimeout(() => {
      set((state) => ({
        modals: state.modals.filter((modal) => modal.id !== id)
      }))
    }, 3500)
  },
  hideModal: (id) =>
    set((state) => ({
      modals: state.modals.map((modal) =>
        modal.id === id ? { ...modal, isVisible: false } : modal
      )
    })),
  removeModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id)
    }))
}))
