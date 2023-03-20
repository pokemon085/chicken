import isMobile from "@/lib/isMobile";

export const determineDevice = (to, from, next) => {
  if (isMobile) {
    next();
  } else {
    next("pc");
  }
};
