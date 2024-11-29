import { SocialMediaItem } from "./social-midia-item";

export interface User {
  brand : string;
  professionalField: string;
  jobTitle:string;
  email:string;
  number:string;
  socialMedias:SocialMediaItem[];
}
