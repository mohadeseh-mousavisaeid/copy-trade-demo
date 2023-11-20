import { ReactNode } from "react";
import { Avatar } from "@mui/material";
import { InputType } from "./InputType";

type Information = {
  label: string;
  type: InputType | undefined;
  value?: string | ReactNode;
  actionLabel?: string;
  isActive?: boolean;
  description?: string;
};

export const accountInformation: Information[] = [
  {
    label: "UID",
    type: "uid",
    value: "14396180",
  },
  {
    label: "Avatar",
    type: "avatar",
    value: <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />,
    actionLabel: "Set",
  },
  {
    label: "Nickname",
    type: "nickname",
    value: "Not Set",
    actionLabel: "Set",
    isActive: true,
  },
  {
    label: "Gender",
    type: "gender",
    value: "Not Set",
    actionLabel: "Set",
    isActive: true,
  },
  // {
  //   label: "Location",
  //  type: 'location',
  //   value: "Not Set",
  //   actionLabel: "Set",
  // },
  {
    label: "Profile",
    type: "description",
    value: "Update your information to display on your profile",
    actionLabel: "Set",
    isActive: true,
  },
  {
    label: "My Referrer",
    type: "referrer",
    value: "Not Set",
    actionLabel: "Set",
    isActive: false,
  },
];

export const securityInformation: Information[] = [
  {
    label: "Google Verification",
    type: "google-verification",
    value: "Not Set",
    actionLabel: "Link",
    description: "Security verification is used for login and withdrawal",
  },
  {
    label: "Phone Number",
    type: "phone",
    value: "Not Set",
    actionLabel: "Link",
    description: "Used to withdraw and modify security settings",
  },
  {
    label: "Email",
    type: "email",
    value: "Not Set",
    actionLabel: "Link",
    description: "Security verification is used for login and withdrawal",
  },
  {
    label: "Password",
    type: "password",
    value: "******",
    actionLabel: "Modify",
    description: "Used to log in to your account",
  },
  {
    label: "Fund Password",
    type: "fund-pass",
    value: "Not Set",
    actionLabel: "Set",
    description: "Used for asset verification",
  },
];

export const advSecurityInformation: Information[] = [
  {
    label: "Anti-Phishing Code",
    type: "anti-phishing",
    actionLabel: "Set",
    description:
      "By setting up an anti-phishing code, you will be able to know if the emails are from BingX or phishing attempts.",
  },
  {
    label: "Account Activity",
    type: "activity",
    actionLabel: "View",
    description: "Last login: Invalid Date",
  },
];
