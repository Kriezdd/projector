
export interface UserImage {
  id: string,
  url: string,
  alternativeText: string,
}
export interface User {
  id: string,
  username: string,
  email: string,
  provider?: string,
  confirmed?: boolean,
  blocked?: boolean,
  createdAt?: string,
  updatedAt?: string,
  about: string | null,
  name: string | null,
  specialization: string | null,
  image: UserImage | Readonly<UserImage>,
}
