import exists from "lib/utils/exists";

export default function classes(...args: any[]) {
  return args.filter(exists).join(" ");
}
