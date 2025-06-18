import { create } from "zustand"

interface MessageModalStore {
  openMessageModal: boolean
  setMessageModalOpen: () => void
}

export const useMessageModalStore = create<MessageModalStore>((set) => ({
  openMessageModal: false,
  setMessageModalOpen: () =>
    set((state) => ({ openMessageModal: !state.openMessageModal }))
}))