import isMobile from "@/lib/isMobile";

export const determineHome = (to, from, next) => {
  if (isMobile) {
    next("/mobileHome");
  } else {
    next("/pcHome");
  }
};
