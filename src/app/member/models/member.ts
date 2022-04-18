export class Member {
  id?: string;
  email: string;
  password: string;
  name: string;
  job: string;
  address: string;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at: Date;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  updated_at: Date;
}
