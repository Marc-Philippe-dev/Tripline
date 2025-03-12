interface IProfile {
	photo?: string;
	bio?: string;
}

export interface IUser {
	name: string;
	lastName: string;
	email: string;
	password: string;
	profile: IProfile;
}