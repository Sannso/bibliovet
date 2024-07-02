declare module "flowbite/plugin";

declare global {
    interface Window {
      initGallery: () => void;
    }
  }