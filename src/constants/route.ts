export interface NavData {
  title: string;
  url: string;
}
export const ROUTE: NavData[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Friends",
    url: "/friends",
  },
  {
    title: "Profile",
    url: "/profile",
  },

  {
    title: "Notifications",
    url: "/notifications",
  },

  {
    title: "Logout",
    url: "/logout",
  },
];
