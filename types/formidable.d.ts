import { IncomingMessage } from 'http';
import formidable from 'formidable';

declare module 'formidable' {
  export interface Fields {
    [key: string]: string[] | undefined;
  }

  export interface Files {
    [key: string]: formidable.File[] | undefined;
  }

  export function IncomingForm(options?: formidable.Options): formidable.Form;
}

declare module 'http' {
  interface IncomingMessage {
    [key: string]: any;
  }
}