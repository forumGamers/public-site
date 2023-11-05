export interface UserProfile {
  imageUrl?: string;
  UUID: string;
  username: string;
  bio?: string;
}

export interface UserData {
  id: string;
  fullname: string;
  username: string;
  email: string;
  password: string;
  is_verified: boolean;
  bio: string;
  image_url: string;
  image_id: string;
  background_url: string;
  background_id: string;
  status: "active" | "nonActive";
  created_at: Date;
  updated_at: Date;
  store_id?: string;
  division?:
    | "Director"
    | "Finance"
    | "IT"
    | "Third Party"
    | "Customer Service"
    | "Marketing"
    | null;
  role?: "Supervisor" | "Manager" | "Staff" | null;
  following: string[];
  followers: string[];
  access_token: string;
  token_as: "User" | "Admin" | "Seller";
}
