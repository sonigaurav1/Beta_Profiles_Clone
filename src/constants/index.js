/* eslint-disable max-len */
import {
  iOS,
  ipadOS,
  tvOS,
  macOS,
  watchOS,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  update,
  betaProfiles,
  backup,
} from "../utils";

export const navLinks = ["FAQs", "Enroll", "Downgrade", "Contact"];

export const OSLists = [
  {
    svg: iOS,
    name: "iOS 18",
  },
  {
    svg: ipadOS,
    name: "iPadOS 18",
  },
  {
    svg: watchOS,
    name: "watchOS 11",
  },
  {
    svg: tvOS,
    name: "tvOS 18",
  },
  {
    svg: macOS,
    name: "macOS 15",
  },
  {
    svg: tvOS,
    name: "Block OTA",
  },
];

export const avatarEmoji = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

export const tabContent = [
  {
    title: "WWDC24",
    type: "latest",
    info: "Apple has released the first beta versions of iOS 18, iPadOS 18, macOS 15, watchOS 11, tvOS 18, and visionOS 2, each packed with exciting new features for you to explore. Don't wait update now to experience the latest innovations and enhancements across all your Apple devices.",
  },
  {
    title: "Developer Beta",
    type: "developer",
    info: "Below are developer profiles, it was released first, then Public Beta. Therefore it will also have more bugs. People usually  prefer to install the Developer Beta profile because it's   released first, but if you don't want to risk a lot, install the Public beta profile."
  },
  {
    title: "Public Beta",
    type: "public",
    info: "Below are the public profiles, these profiles are usually released later than Developer Beta, so it will be stable and less buggy. If you've never signed up for Apple's Public Beta Software Program before, sign up first at beta.apple.com."
  }
];

export const howToUseCardContent = [
  {
    image: backup,
    subject: '1. Archive a backup',
    description: ''
  },
  {
    image: betaProfiles,
    subject: '2. Install profile',
    description: ''
  },
  {
    image: update,
    subject: '3. Update your device',
    description: ''
  }
]