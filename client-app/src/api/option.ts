// const user: IUser = JSON.parse(localStorage.getItem("persist:user") ?? "");
const accessToken = localStorage.getItem("token");

export const options = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};
