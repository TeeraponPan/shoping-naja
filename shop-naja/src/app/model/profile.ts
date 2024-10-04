export interface Profile {
    id:         number;
    first_name: string;
    last_name:  string;
    mobile:     string;
    sex:        string;
    status:     string;
    image:      string;
    user_id:    number;
}

export interface PatchProfile {
    first_name: string;
    last_name:  string;
    mobile:     string;
    sex:        string;
}
