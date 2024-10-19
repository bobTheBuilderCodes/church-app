declare global {
  interface CloudinaryOptions {
    cloudName: string;
    uploadPreset: string;
    sources?: string[];
    showAdvancedOptions?: boolean;
    defaultSource?: string;
    multiple?: boolean;
    styles?: {
      palette: {
        window: string;
        windowBorder: string;
        tabIcon: string;
        menuIcons: string;
        textDark: string;
        textLight: string;
        link: string;
        action: string;
        inProgress: string;
        complete: string;
        sourceBg: string;
      };
    };
  }

  interface CloudinaryResult {
    event: string;
    info: {
      secure_url: string;
      // Include any other properties you need
    };
  }

  interface Window {
    cloudinary: {
      openUploadWidget: (
        options: CloudinaryOptions,
        callback: (error: any, result: CloudinaryResult) => void
      ) => void;
    };
  }
}

// Export an empty object to ensure this file is treated as a module
export {};

  
  // src/cloudinary.d.ts
declare module 'cloudinary-react' {
  import * as React from 'react';

  export const CloudinaryContext: React.ComponentType<any>;
  export const Image: React.ComponentType<any>;
  export const Transformation: React.ComponentType<any>;
}

