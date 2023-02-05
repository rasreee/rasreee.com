import exists from "lib/exists";

export default function classes(...args: any[]) {
  return args.filter(exists).join(" ");
}
