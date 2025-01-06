import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function addExtraDots(input:string,maxLength:number,start:boolean=true):string{
  const isInputTooLong = input.length > maxLength
  if(!isInputTooLong){
    return input
  }
  if(start){
    return input.substring(0,maxLength-3)+"..."
  }else{
    return "..." + input.substring(input.length - maxLength + 3);
  }
}

const greekWords = [
  "zeus", "hera", "poseidon", "demeter", "athena", "apollo", "artemis",
  "ares", "aphrodite", "hephaestus", "hermes", "dionysus", "hades",
  "persephone", "hecate", "nemesis", "nike", "iris", "eileithyia", "eris",
  "morpheus", "hypnos", "thanatos", "charon", "triton", "pan", "eros",
  "gaia", "uranus", "chronos", "rhea", "atlas", "prometheus", "epimetheus",
  "oceanus", "tethys", "helios", "selene", "eos", "nyx", "erebus", "aether"
];

const babyAnimals = [
  "puppy", "kitten", "cub", "chick", "duckling", "gosling", "fawn",
  "calf", "foal", "lamb", "kid", "piglet", "hatchling", "pup", "joey",
  "tadpole", "eaglet", "owlet", "nestling", "fledgling", "kit", "whelp"
];

export const generateRandomName = (): string => {
  const randomGreek = greekWords[Math.floor(Math.random() * greekWords.length)];
  const randomAnimal = babyAnimals[Math.floor(Math.random() * babyAnimals.length)];
  return `${randomGreek}_${randomAnimal}`;
};

export const generateRandomString = (length: number = 32): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

export function isWithinOneDay(timestamp1: number, timestamp2: number): boolean {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in ms
  const difference = Math.abs(timestamp1 - timestamp2); // Absolute difference
  return difference <= oneDayInMilliseconds;
}