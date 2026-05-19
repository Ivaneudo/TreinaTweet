export interface Tweet {
  date: Date;
    text: string;
    user: {
      name: string;
      username: string;
      picture: string;
    }
}