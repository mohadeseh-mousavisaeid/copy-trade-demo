type Nickname = {
  nickname?: string;
};

type Description = {
  description?: string;
};

type Gender = {
  gender?: number;
};

export type UserData = Nickname | Description | Gender | null;
