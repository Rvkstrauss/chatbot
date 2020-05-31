export const scrollToBottom = (elementToBeScrolled: Element): void => {
  elementToBeScrolled.scrollTop = elementToBeScrolled.scrollHeight;
};

export const isPageActive = (pageHash: string): boolean => window.location.hash.split('/')[1] === pageHash;
